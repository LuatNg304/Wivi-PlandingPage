import React from "react";
import { MaroonFintechBase } from "./components/MaroonFintechBase";
import { HeroFeatureVisual } from "./components/HeroFeatureVisual";
import {
  MaroonPricingSection,
  MaroonFaqSection,
} from "./components/MaroonFintechSections";
import { AboutMissionSection } from "./components/AboutMissionSection";
import { BreakthroughFeaturesSection } from "./components/BreakthroughFeaturesSection";
import { AppScreensCarousel } from "./components/AppScreensCarousel";
import { HowItWorksSection } from "./components/HowItWorksSection";

export function App() {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Stat Donut Cards - Pure VND
  const statCards = [
    {
      title: "Chi Tiêu Tháng Này",
      periods: [
        {
          label: "Tháng",
          range: "Tháng 09, 2026",
          amount: 18450000,
          change: -5.2,
          categories: [
            { label: "Thiết yếu (NEC)", value: 10147500 },
            { label: "Hưởng thụ (PLAY)", value: 2767500 },
            { label: "Ăn uống & Cà phê", value: 3690000 },
            { label: "Học tập (EDU)", value: 1845000 },
          ],
        },
        {
          label: "Tuần",
          range: "Tuần 4, Tháng 09",
          amount: 4200000,
          change: -2.1,
          categories: [
            { label: "Thiết yếu", value: 2310000 },
            { label: "Ăn uống", value: 1260000 },
            { label: "Giải trí", value: 630000 },
          ],
        },
      ],
    },
    {
      title: "Phân Bổ Thu Nhập 6 Hũ",
      periods: [
        {
          label: "Kỳ lương",
          range: "Kỳ lương Tháng 09",
          amount: 25000000,
          change: 10.0,
          categories: [
            { label: "55% Thiết yếu (NEC)", value: 13750000 },
            { label: "10% Tự do tài chính (FFA)", value: 2500000 },
            { label: "10% Tiết kiệm dài hạn (LTSS)", value: 2500000 },
            { label: "10% Học tập (EDU)", value: 2500000 },
            { label: "10% Hưởng thụ (PLAY)", value: 2500000 },
            { label: "5% Cho đi (GIVE)", value: 1250000 },
          ],
        },
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-white text-slate-900">
      {/* Main Clean White & Ocean Blue Fintech Canvas */}
      <MaroonFintechBase
        brand="WIVI"
        logo={
          <img
            src="/wivi-logo.png"
            alt="WIVI"
            className="h-7 sm:h-8 w-auto object-contain rounded-md"
          />
        }
        palette="ocean"
        backer={null}
        title={`Bạn kiếm được tiền.\n*Nhưng tiền của bạn* đang đi đâu?`}
        subtitle="Đừng để mỗi kỳ lương về là một lần hồi hộp, và mỗi cuối tháng lại là một nỗi âu lo. WIVI không phải là cuốn sổ ghi chép khô khan — WIVI là người bạn đồng hành AI giúp bạn giữ tiền thông minh, chi tiêu không cắn rứt và tự tin làm chủ tương lai."
        primaryAction={{
          label: "Bắt đầu hành trình tự do tài chính — Miễn phí",
          href: "#download",
        }}
        secondaryAction={{
          label: "Khám phá câu chuyện của WIVI ▶",
          href: "#about",
        }}
        socialProof={[]}
        info={{
          label: "/wivi-core/",
          text: "WIVI tự động chia tiền lương vào từng hũ theo tỷ lệ vàng, *bóc tách hóa đơn trong 2 giây bằng AI và cảnh báo bội chi trước khi bạn kịp hết tiền.*",
        }}
        statCards={statCards}
        customModel={<HeroFeatureVisual isMobile={isMobile} />}
        afterHero={null}
        about={null}
        features={null}
        nav={[
          { label: "Về WIVI", href: "#about" },
          { label: "Tính Năng", href: "#features" },
          { label: "Giao Diện App", href: "#app-screens" },
          { label: "Hướng Dẫn", href: "#guide" },
          { label: "Bảng Giá", href: "#pricing" },
          { label: "Hỏi Đáp", href: "#faq" },
          { label: "Tải App", href: "#download" },
        ]}
        //login={{ label: "Đăng Nhập sss", href: "#download" }}
        signup={{ label: "Tải App", href: "#download" }}
        cta={{
          title: "Tự do tài chính không bắt đầu từ việc bạn kiếm được bao nhiêu tiền,\n*mà bắt đầu từ khoảnh khắc* bạn quyết định làm chủ số tiền mình có.",
          subtitle:
            "Tải ứng dụng WIVI & Trải nghiệm ngay hôm nay. Sẵn sàng trên Web, iOS và Android.",
          action: {
            label: "Tải Ứng Dụng WIVI & Trải Nghiệm Ngay",
            href: "#download",
          },
        }}
        footer={{
          columns: [
            {
              title: "Hệ Sinh Thái",
              links: [
                { label: "Phương Pháp 6 Hũ", href: "#features" },
                { label: "AI OCR Quét Bill", href: "#features" },
                { label: "Bản Đồ Kỷ Luật", href: "#features" },
                { label: "Bảng Giá Dịch Vụ", href: "#pricing" },
              ],
            },
            {
              title: "Công Ty",
              links: [
                { label: "Về WIVI & Sứ Mệnh", href: "#about" },
                { label: "Giao Diện Ứng Dụng", href: "#app-screens" },
                { label: "Chính Sách Bảo Mật", href: "#faq" },
                { label: "Điều Khoản Sử Dụng", href: "#faq" },
              ],
            },
            {
              title: "Tải Ứng Dụng",
              links: [
                { label: "App Store (iOS)", href: "#download" },
                { label: "Google Play (Android)", href: "#download" },
                { label: "WIVI Web Dashboard", href: "#download" },
              ],
            },
          ],
          socials: [
            { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61593826921935", target: "_blank" },
            { label: "TikTok", href: "https://www.tiktok.com/@wivi.__", target: "_blank" },
            { label: "Threads", href: "#" },
            { label: "LinkedIn", href: "#" },
          ],
        }}
        onRequestDemo={async (data: any) => {
          console.log("Demo requested:", data);
          await new Promise((resolve) => setTimeout(resolve, 800));
        }}
      >
        {/* About & Mission Section with Real Team Photos */}
        <AboutMissionSection />

        {/* Breakthrough Features (4 Pillars) */}
        <BreakthroughFeaturesSection />

        {/* Interactive App Screens Carousel */}
        <AppScreensCarousel />

        {/* 4-Step User Guide */}
        <HowItWorksSection />

        {/* Extra Luxury WIVI Sections */}
        <MaroonPricingSection />
        <MaroonFaqSection />

        {/* Pre-footer App Store & Google Play download badges banner */}
        <div id="download" className="py-10 sm:py-14 px-4 text-center bg-slate-50 border-t border-slate-200">
          <p className="text-xs font-bold text-sky-700 uppercase tracking-widest mb-3 sm:mb-4">
            Tải ngay trên mọi nền tảng di động
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="#"
              className="inline-block transition-transform duration-300 hover:scale-105 active:scale-95 shadow-sm rounded-xl"
              aria-label="Get it on Google Play"
            >
              <img
                src="/google-play-badge.svg"
                alt="Google Play"
                className="h-10 sm:h-12 w-auto object-contain cursor-pointer"
              />
            </a>
          </div>
          <div className="mt-3 sm:mt-4 text-xs font-medium text-slate-500 px-2 leading-relaxed">
            Cài đặt trong 30 giây • Không yêu cầu quyền truy cập ngân hàng • Bảo mật tuyệt đối
          </div>
        </div>
      </MaroonFintechBase>
    </div>
  );
}

export default App;
