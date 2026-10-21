/**
 * Centralized Asset Registry for WIVI Landing Page
 * All image paths managed from one place — never hardcode URLs in components.
 *
 * Directory structure under public/assets/:
 *   about-me/       — Founder story images, screenshots about WIVI brand
 *   app-ui/         — Real app UI screenshots (sorted: image.png, image copy*.png)
 *   huongdan/       — Onboarding step illustrations (buoc1-4)
 *   team/           — Team & event photos
 */

export const ASSETS = {
  // ── Brand & Store Badges ──────────────────────────────────────
  brand: {
    logo: "/wivi-logo.png",
    favicon: "/favicon.svg",
    appStoreBadge: "/app-store-badge.svg",
    googlePlayBadge: "/google-play-badge.svg",
  },

  // ── About Me / Founder Story ──────────────────────────────────
  aboutMe: {
     // Tính năng showcase
    titleGraphic: "/assets/about-me/title.png",          // Title/Brand graphic
  },

  // ── Team & Event Photos ───────────────────────────────────────
  team: {
    showcase1: "/assets/team/wivi-team-1.jpg",   // Đội ngũ cạnh standee WIVI
    showcase2: "/assets/team/wivi-team-2.png",   // Trải nghiệm thực tế sự kiện
  },

  // ── Real App UI Screenshots ───────────────────────────────────
  // Named by function; "image copy N.png" files are additional app captures
  appUi: {
    // Named screenshots (from previous upload)
    dashboard:     "/assets/app-ui/wivi-app-dashboard.png",
    jarsManagement:"/assets/app-ui/wivi-app-jars.png",
    ratioSettings: "/assets/app-ui/wivi-app-ratio-settings.png",
    // Additional app-ui captures (for carousel expansion)
    screen1: "/assets/app-ui/image.png",
    screen2: "/assets/app-ui/image copy.png",
    screen3: "/assets/app-ui/image copy 2.png",
    screen4: "/assets/app-ui/image copy 3.png",
    screen5: "/assets/app-ui/image copy 4.png",
    screen6: "/assets/app-ui/image copy 5.png",
    screen7: "/assets/app-ui/image copy 6.png",
  },

  // ── Onboarding / Hướng Dẫn Step Illustrations ─────────────────
  huongDan: {
    buoc1:   "/assets/huongdan/buoc1.png",    // Bước 1: Khởi tạo hồ sơ & thu nhập
    buoc2:   "/assets/huongdan/buoc2.png",    // Bước 2: Bệ đỡ quỹ dự phòng
    buoc3a:  "/assets/huongdan/buoc3_1.png",  // Bước 3a: Đặt mục tiêu
    buoc3b:  "/assets/huongdan/buoc3_2.png",  // Bước 3b: AI tính toán lộ trình
    buoc4:   "/assets/huongdan/buoc4.png",    // Bước 4: Phân bổ hũ & kích hoạt
    buoc4b:  "/assets/huongdan/buoc4_1.png",  // Bước 4b: Hoàn thành onboarding
  },

  // ── 3D Models ─────────────────────────────────────────────────
  models: {
    heroModel: "/modal3d/8899c880e7456aaaaba35722f50805e0.glb",
  },
} as const;

export default ASSETS;
