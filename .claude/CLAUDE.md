# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page marketing site for WIVI, a Vietnamese personal finance app. Built with React 19, TypeScript, Vite, Tailwind CSS v4, shadcn/ui, Redux Toolkit, lucide-react and three.js. There is no router, and the backend lives in a separate repo. User-facing copy is in Vietnamese, and money is shown as whole-number VND (`formatVND` in `src/components/MaroonFintechSections.tsx`).

## Commands

```bash
npm run dev      # Vite dev server on port 5173, exposed on the network
npm run build    # tsc -b, then vite build; this is the main verification step
npm run lint     # oxlint
npm run preview  # serve the production build
```

No test framework is configured.

## Architecture

### Page composition

`src/App.tsx` supplies the page's content and renders one component, `MaroonFintechBase`:

- **Props** configure the shell: hero copy, nav, CTA, footer, stat cards and palette. `customModel` fills the hero visual.
- **Children** are the page sections, rendered in order inside the shell: About, Features, App Screens, How It Works, Pricing, FAQ, then the inline `#download` banner.

To add a section, create the component, add it as a child in `App.tsx`, give its root element an `id`, and link to that `id` from the `nav` or `footer` props.

### `MaroonFintechBase.tsx`

This roughly 3,000-line file looks like generated or minified output: it has single-letter identifiers, `e.jsx(...)` calls instead of JSX, and `// @ts-nocheck`. Its export is typed `any`, so **props passed to it are not type-checked**. All of its CSS lives in the template string `gt`, injected through a `<style>` tag, with classes prefixed `mfl-`.

- **Built-in sections:** `App.tsx` passes `about={null}`, `features={null}` and `afterHero={null}` to turn off the shell's own versions. Omitting these props brings back its English placeholder defaults ("synais", "Orbit Ventures"). The same applies to other unset props.
- **Anchor scrolling:** the shell's link handler looks for `[data-sec="<hash>"]` first. If there is no match, the browser's normal `#id` navigation applies, which is how the child sections are reached.

### Theming

The shell sets `--mfl-*` CSS variables on its root element from the `palette` prop, so child sections can use them too. The live palette is `ocean`; the others (`maroon`, `forest`, `midnight`) are unused, and an unknown palette name falls back to `maroon`.

Token names come from the original dark theme and are misleading in `ocean`: `--mfl-night` and `--mfl-card` are white, and `--mfl-cream` is dark text. The "Maroon" component names are also legacy and don't describe the current look.

Tailwind v4 is configured in `src/index.css` through `@theme`, including fonts and color scales; there is no `tailwind.config`. Fonts load from Google Fonts in `index.html`.

### shadcn/ui

Configured in `components.json`, with components in `src/components/ui/` (lowercase files). `src/index.css` holds only the tokens the page needs. Keep it that way after running the CLI, because `shadcn init` adds global font, radius and border rules that change the existing page.

The global `box-shadow: none !important` rule in `src/index.css` disables `ring-*` utilities, so shadcn focus rings and the dialog's ring don't render. A scoped outline rule in the same file replaces them inside dialogs.

### Authentication

`AuthDialog` is rendered in `App.tsx` and handles login, registration and password reset. It opens on the URL hash `#dang-ky` or `#dang-nhap`; the nav's Đăng Ký button comes through the shell's `login` prop. API calls live in `src/services/authApi.ts` and go to same-origin `/api/...` by default. The site is hosted on Vercel, which forces HTTPS, while the backend is plain HTTP at `160.30.161.213:3000`, so `vercel.json` rewrites `/api/*` to the backend and `vite.config.ts` does the same for `dev` and `preview`. Set `VITE_API_BASE_URL` only to call a backend directly, for example once it has HTTPS. Because of the proxy, the backend sees Vercel's IP addresses rather than visitors', which affects its per-IP rate limits.

The session is in Redux (`src/store/authSlice.ts`) and is kept in `sessionStorage` by decision: it survives a reload and ends when the tab closes. Only the user and access token are stored, never the refresh token, so a session lasts at most the access token's 1 day. On page load `/user/me` validates the stored token, and a 401 clears the session. When signed in, `App.tsx` passes `UserMenu` (avatar and logout) through the shell's `navActions` prop instead of `login`.

### Membership checkout

`CheckoutDialog` is rendered in `App.tsx` and opens on the URL hash `#mua-goi`, from the Pricing cards or the "Gói thành viên" item in `UserMenu`. A signed-out visitor is sent to `#dang-nhap` with `checkoutPending` set in `authSlice`, and `AuthDialog` returns to checkout after sign-in.

The backend sells one paid plan, `PRO_MONTHLY` (29.000đ/month). **By the owner's decision, both the 29.000 ₫ and 59.000 ₫ cards buy that plan.** The Pricing cards are hand-written copy and differ from the backend's plan data; the dialog shows the plan name, price and features from the API.

The flow is plan confirmation, VietQR screen with order polling every 5 seconds, then success. Orders become `Paid` only through the backend's SePay webhook. Paying again does not extend the time left: the backend restarts one month from the payment date, so the dialog warns about this on renewal.

### Assets

Files in `public/` are served from the site root. `src/assets/index.ts` exports the `ASSETS` registry, whose stated rule is to never hardcode paths in components. Some components still do, including `HeroFeatureVisual` and `MaroonFintechBase`. Vite's file watcher ignores `public/modal3d/`, which holds the hero `.glb` model loaded by `Wivi3DModel`.

### Code that is not on the live page

Check whether code is reachable from `App.tsx` before editing it, since many similarly named files are unused.

- **Unused components:** `AnnouncementBanner`, `CalculatorSection`, `ClientsSection`, `FaqSection`, `FeaturesGeneral`, `FeaturesNavs`, `FooterSection`, `HeroSection`, `HeroSectionAlt`, `HeroVisualFrame`, `Navbar`, `PricingSection`, `TestimonialsSection`, `WiviLogo` and the PascalCase files in `components/ui/`.
- **Unused exports:** `MaroonCalculatorSection`, `MaroonBankingPartners` and `MaroonTestimonialSection` in `MaroonFintechSections.tsx`. The live Pricing and FAQ sections are the `Maroon*` versions in that file.
- **Unused stylesheet:** `src/App.css` is not imported anywhere. `src/index.css` is the only global stylesheet.

### Docs that may be out of date

`LANDING_PAGE_DETAILS.md` and `LANDING_PAGE1.md` describe product content, but `LANDING_PAGE_DETAILS.md` still lists removed sections such as the announcement banner and calculator. `design-plans/` holds plans written against older commits. Treat `App.tsx` as the source of truth for the page's structure.
