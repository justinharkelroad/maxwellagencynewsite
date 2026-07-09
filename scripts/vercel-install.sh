#!/usr/bin/env bash
# Vercel install step.
#
# The build prerenders 34 routes with Puppeteer. Puppeteer downloads its own Chromium,
# but Vercel's build image ships without the shared libraries Chrome links against —
# the browser exits 127 with "libnspr4.so: cannot open shared object file".
#
# Install those libraries, then the app's dependencies. Builds run as root, so no sudo.
# Handles both Amazon Linux (dnf, current image) and Debian/Ubuntu (apt-get), because
# Vercel has changed base images before and this should not break silently when it does.
set -euo pipefail

CHROME_LIBS_DNF=(
  nspr nss nss-util atk at-spi2-atk at-spi2-core cups-libs libdrm libxkbcommon
  libX11 libXcomposite libXdamage libXext libXfixes libXrandr libxcb libgbm
  alsa-lib pango cairo expat
)
CHROME_LIBS_APT=(
  libnspr4 libnss3 libatk1.0-0 libatk-bridge2.0-0 libcups2 libdrm2 libxkbcommon0
  libxcomposite1 libxdamage1 libxfixes3 libxrandr2 libgbm1 libasound2 libpango-1.0-0
  libcairo2 libexpat1
)

echo "[vercel-install] installing Chrome shared libraries"
if command -v dnf >/dev/null 2>&1; then
  dnf install -y "${CHROME_LIBS_DNF[@]}"
elif command -v yum >/dev/null 2>&1; then
  yum install -y "${CHROME_LIBS_DNF[@]}"
elif command -v apt-get >/dev/null 2>&1; then
  apt-get update && apt-get install -y --no-install-recommends "${CHROME_LIBS_APT[@]}"
else
  echo "[vercel-install] FATAL: no dnf/yum/apt-get. Cannot install Chrome dependencies." >&2
  echo "[vercel-install] Prerendering would fail, which fails the build by design." >&2
  exit 1
fi

echo "[vercel-install] installing app dependencies"
bun install

echo "[vercel-install] done"
