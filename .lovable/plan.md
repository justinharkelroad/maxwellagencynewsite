

## Plan: Ensure Every Staff Profile Has a Google Review Button

### Investigation
After reviewing `src/components/StaffHero.tsx` and `src/pages/StaffPage.tsx`, every current staff member (all 17) is mapped in the `googleReviewUrls` object, so the "Leave a Google Review" button should already render on every profile. Since you're seeing one without it, there's likely a name mismatch (e.g. spelling, spacing, or capitalization difference between the staff `name` field and the key in `googleReviewUrls`) — the lookup is exact-match and case-sensitive.

### Changes

1. **Refactor `src/components/StaffHero.tsx` to guarantee universal coverage**
   - Add a single fallback Google Review URL constant (the Corpus Christi review link, since it's the agency's main Google Business profile).
   - Replace the per-name `googleReviewUrls` lookups with a helper that returns the mapped URL if present, otherwise the fallback. This way, even if a name ever gets mistyped or a new staff member is added without updating the map, the button still renders.
   - Both render locations (the leadership left-column block and the non-leadership right-column block) will use this helper, so the button is guaranteed on every profile.

2. **Audit the existing map**
   - Cross-check each staff `name` in `StaffPage.tsx` against the keys in `googleReviewUrls` and fix any subtle mismatches found during implementation.

### Technical Details
- The fallback constant will live alongside the existing `googleReviewUrls` object in `StaffHero.tsx`.
- No changes to the link styling, modal, or quote button behavior — only the guarantee that the review button is always present.
- After deploying, please tell me which profile was missing the button so I can verify the fix and correct any underlying name mismatch.

