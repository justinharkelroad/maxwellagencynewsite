import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

console.log("[Boot] Environment check:", {
  hasBackendUrl: Boolean(import.meta.env.VITE_SUPABASE_URL),
  hasBackendKey: Boolean(import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY),
  mode: import.meta.env.MODE,
});

const rootEl = document.getElementById("root")!;

// If react-snap prerendered HTML into #root, hydrate it.
// Otherwise (dev, or routes excluded from prerender) mount fresh.
if (rootEl.hasChildNodes()) {
  hydrateRoot(rootEl, <App />);
} else {
  createRoot(rootEl).render(<App />);
}
