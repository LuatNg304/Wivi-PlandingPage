# Eliminate Duplicate DOM Navigation IDs

Written against: 68e66f1a69756fbbaa0b0ba9dda114e16a95b931

## Evidence chain

- Surface: `src/App.tsx` and `src/components/MaroonFintechSections.tsx`
- Problem: Both outer wrapper `<div>` elements in `App.tsx` and inner `<section>` elements in `MaroonFintechSections.tsx` declare identical HTML `id` attributes (`id="testimonials"`, `id="pricing"`, `id="faq"`, `id="download"`).
- Design evidence: W3C HTML specification; invalid DOM duplicate ID causing unpredictable anchor scroll targeting and jump behavior.
- Owner: `src/App.tsx`
- Scope and affected surfaces: `src/App.tsx`
- Uncertainty: None

## Design decision

Strip redundant `id` attributes from wrapper `<div>` elements in `src/App.tsx`, maintaining exclusive ownership of navigation target IDs on the actual `<section>` elements rendered by the child components.

## Reuse

- Direct JSX component rendering without unnecessary wrapper divs
- Exemplar: `<MaroonBankingPartners />` rendered directly in `afterHero`

## Changes

1. `src/App.tsx`
   - Change:
     Replace:
     ```tsx
     <div id="testimonials">
       <MaroonTestimonialSection />
     </div>
     <div id="pricing">
       <MaroonPricingSection />
     </div>
     <div id="faq">
       <MaroonFaqSection />
     </div>
     ```
     With:
     ```tsx
     <MaroonTestimonialSection />
     <MaroonPricingSection />
     <MaroonFaqSection />
     ```
   - Preserve: Section IDs `#testimonials`, `#pricing`, and `#faq` on the internal `<section>` elements of `MaroonFintechSections.tsx`.
   - Verify: Browser smooth-scrolling jumps cleanly to the top of each target section without DOM ID collisions.

## Scope

- Inherit: All anchor navigation targets in Navbar and Footer
- Verify: Top Navbar clicks for `#testimonials`, `#pricing`, `#faq`, `#download`
- Exclude: Internal component structure of `MaroonFintechSections.tsx`

## Validation

- Product: Clicking navbar items smoothly scrolls to the exact section header without layout clipping.
- Interface: Test clicking each navigation link on desktop (1920px) and mobile viewport (375px).
- System: Inspect DOM to confirm exactly one matching element exists for every `#` link target.
- Repository: `npm run build` → exits with code 0.

## Stop conditions

- Stop if child components do not contain their own root `id` attributes.

## Design documentation

- None required.
