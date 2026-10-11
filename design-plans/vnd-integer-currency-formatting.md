# Enforce Integer Currency Formatting for Vietnamese Dong (VND)

Written against: 68e66f1a69756fbbaa0b0ba9dda114e16a95b931

## Evidence chain

- Surface: `src/components/MaroonFintechBase.tsx` (Stat Donut cards and Spend Heatmap)
- Problem: Currency amounts in the Donut Chart cards and Spend Heatmap display unnatural decimals (e.g., `18.450.000,00 ₫`, `25.913,76 ₫`). VND currency in Vietnam does not use fractional subunits.
- Design evidence: Vietnamese financial UI standards; [LANDING_PAGE_DETAILS.md](file:///c:/Users/Admin/Documents/tuHocReactNative\Wivi-PlandingPage\LANDING_PAGE_DETAILS.md) specifying integer currency values without fractional decimals.
- Owner: `src/components/MaroonFintechBase.tsx` (`function E`)
- Scope and affected surfaces: `src/components/MaroonFintechBase.tsx`
- Uncertainty: None

## Design decision

Modify formatting helper `function E(a, r, t)` to strictly round amounts to integers (precision `0`) whenever formatting Vietnamese Dong currency, eliminating decimal fractions `,00` and `,76`.

## Reuse

- Existing `Math.round()` and thousands dot separator regex `\B(?=(\d{3})+(?!\d))`
- Exemplar: `src/components/MaroonFintechSections.tsx` (`formatVND`)

## Changes

1. `src/components/MaroonFintechBase.tsx`
   - Change: In `function E(a, r, t)`, enforce `Math.round(Math.abs(a))` and avoid decimal splitting whenever currency symbol `₫` or `$` is present.
     ```js
     function E(a, r, t) {
       const isCurrency = r && (r.includes("$") || r.includes("₫") || r.trim() === "$" || r.trim() === "₫");
       const abs = Math.abs(a);
       const precision = isCurrency ? 0 : (t || 0);
       const fixed = abs.toFixed(precision);
       const parts = fixed.split(".");
       const intPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
       const decPart = parts[1] && !isCurrency ? "," + parts[1] : "";
       const numStr = (a < 0 ? "-" : "") + intPart + decPart;
       if (isCurrency) {
         return numStr + " ₫";
       }
       return numStr;
     }
     ```
   - Preserve: Plain metric number formatting in `Ke(a, r)` for rates like `2,1s` and `99,4%`.
   - Verify: Donut cards display `18.450.000 ₫` and Heatmap displays `25.914 ₫ of 25.000.000 ₫` without fractional decimals.

## Scope

- Inherit: All currency consumers in `MaroonFintechBase` (Donut cards, Spend overview, Heatmap tooltip)
- Verify: Stat Donut Cards, Spend Heatmap tooltip, Wallet panel
- Exclude: Percentage values and non-currency counters (`50.000+`, `2,1s`, `99,4%`)

## Validation

- Product: All monetary values throughout the interface display as clean integers followed by `₫`.
- Interface: Inspect Donut card header amount, period tooltip, and Spend Heatmap budget labels.
- System: Zero instances of `,00 ₫` or fractional currency on screen.
- Repository: `npm run build` → exits with code 0.

## Stop conditions

- Stop if non-currency metrics (percentages or decimals in stats) lose their intended decimal precision.

## Design documentation

- After acceptance and validation: Record integer-only rule for VND formatting in `LANDING_PAGE_DETAILS.md`.
