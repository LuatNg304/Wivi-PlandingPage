# Remove Calculator Simulator from Landing Page

Written against: 68e66f1a69756fbbaa0b0ba9dda114e16a95b931

## Evidence chain

- Surface: `src/App.tsx` and `src/components/MaroonFintechSections.tsx`
- Problem: The "Mô Phỏng Dòng Tiền" calculator section adds excessive layout length and is requested to be removed from the page flow. Secondary CTA in hero and header/footer navigation items still point to `#calculator`.
- Design evidence: User directive to remove "Mô Phỏng Dòng Tiền" section; [LANDING_PAGE_DETAILS.md](file:///c:/Users/Admin/Documents/tuHocReactNative\Wivi-PlandingPage\LANDING_PAGE_DETAILS.md).
- Owner: `src/App.tsx`
- Scope and affected surfaces: `src/App.tsx`, `src/components/MaroonFintechSections.tsx`
- Uncertainty: None

## Design decision

Remove `<MaroonCalculatorSection />` from `src/App.tsx`. Update the hero `secondaryAction` button to link to `#pricing` ("Xem Bảng Giá" or "Khám Phá Tính Năng" with `#features`), remove `"Mô Phỏng"` from the top navigation array, and clean up footer links targeting `#calculator`.

## Reuse

- Navigation link pattern in `nav` prop of `MaroonFintechBase`
- Exemplar: `src/App.tsx`

## Changes

1. `src/App.tsx`
   - Change:
     1. Remove `<div id="calculator"><MaroonCalculatorSection /></div>` from children.
     2. Update `secondaryAction` from `{ label: "Mô Phỏng 6 Hũ", href: "#calculator" }` to `{ label: "Xem Bảng Giá", href: "#pricing" }`.
     3. Remove `{ label: "Mô Phỏng", href: "#calculator" }` from `nav` list.
     4. Replace `#calculator` targets in footer links with `#pricing` or `#faq`.
     5. Remove unused import `MaroonCalculatorSection`.
   - Preserve: Banking partners marquee, About section, Features tabs, Testimonials, Pricing, FAQ, and Download banner.
   - Verify: The calculator simulator section no longer renders, and all navigation links scroll to active valid sections.

## Scope

- Inherit: Main landing page scroll flow
- Verify: Hero secondary button click, navbar anchor navigation, and footer link click targets
- Exclude: Pricing and FAQ sections

## Validation

- Product: Landing page renders cleanly without the 6-jar calculator simulator section.
- Interface: Verify route `/` at viewport 1920px and 375px; ensure hero CTA buttons and nav items navigate to `#pricing`, `#testimonials`, `#faq`, `#download`.
- System: Zero broken anchors or dead scroll jumps on the page.
- Repository: `npm run build` → exits with code 0.

## Stop conditions

- Stop if removal breaks layout continuity between Hero banking partners and About section.

## Design documentation

- After acceptance and validation: Record removal of Calculator Simulator from public landing flow in `LANDING_PAGE_DETAILS.md`.
