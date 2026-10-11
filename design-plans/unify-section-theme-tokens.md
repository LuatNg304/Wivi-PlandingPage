# Unify Section Theme Tokens with Governing Ocean CSS Variables

Written against: 68e66f1a69756fbbaa0b0ba9dda114e16a95b931

## Evidence chain

- Surface: `src/components/MaroonFintechSections.tsx`
- Problem: Supplementary sections (Pricing, FAQ, Testimonials) hardcode arbitrary hex background and border values (`#07162c`, `#0b213f`, `#e0f2fe`) rather than consuming the design system CSS variables established in `MaroonFintechBase.tsx` (`--mfl-card`, `--mfl-night`, `--mfl-glow`, `--mfl-cream`).
- Design evidence: Design token architecture in `src/components/MaroonFintechBase.tsx`; [LANDING_PAGE_DETAILS.md](file:///c:/Users/Admin/Documents/tuHocReactNative\Wivi-PlandingPage\LANDING_PAGE_DETAILS.md).
- Owner: `src/components/MaroonFintechSections.tsx`
- Scope and affected surfaces: `src/components/MaroonFintechSections.tsx`
- Uncertainty: None

## Design decision

Refactor card containers, badges, and border styling in `MaroonFintechSections.tsx` to utilize CSS variables `var(--mfl-card)`, `var(--mfl-night)`, `var(--mfl-cream)`, and `var(--mfl-glow)` via Tailwind arbitrary values or inline styles, guaranteeing seamless visual harmony with the governing canvas.

## Reuse

- Theme tokens: `var(--mfl-card)`, `var(--mfl-night)`, `var(--mfl-cream)`, `var(--mfl-glow)`
- Exemplar: `.mfl-panel` and `.mfl-stat` in `src/components/MaroonFintechBase.tsx`

## Changes

1. `src/components/MaroonFintechSections.tsx`
   - Change:
     1. In `MaroonPricingSection`:
        - Update non-highlighted card backgrounds from `bg-[#07162c]/90` to `bg-[var(--mfl-night)]/90`.
        - Update highlighted Pro card background from `bg-[#0b213f]` to `bg-[var(--mfl-card)]`.
        - Update text colors to `text-[var(--mfl-cream)]` and `text-[var(--mfl-muted)]`.
     2. In `MaroonFaqSection`:
        - Update accordion item backgrounds from `bg-[#07162c]/80` to `bg-[var(--mfl-night)]/80`.
        - Update border colors from `border-sky-400/15` to `border-[var(--mfl-glow)]/15`.
     3. In `MaroonTestimonialSection`:
        - Update card gradient from `from-[#0b213f] to-[#07162c]` to `from-[var(--mfl-card)] to-[var(--mfl-night)]`.
        - Update quote text to `text-[var(--mfl-cream)]`.
   - Preserve: Layout hierarchy, padding, typography scales, and interactive accordion behavior.
   - Verify: Visual inspection demonstrates flawless tonal alignment across all sections with zero jarring color shifts.

## Scope

- Inherit: All supplementary sections rendered inside `MaroonFintechBase`
- Verify: Pricing cards, FAQ accordion items, Testimonial container, Banking marquee bar
- Exclude: Third-party SVG bank logos

## Validation

- Product: Supplementary sections seamlessly match the exact tone of the Hero and Features panels.
- Interface: Verify contrast and readability on Desktop and Mobile viewports.
- System: Inspect computed styles to confirm CSS variables resolve to active theme values.
- Repository: `npm run build` → exits with code 0.

## Stop conditions

- Stop if Tailwind CSS fails to resolve CSS variable arbitrary class syntax.

## Design documentation

- None required.
