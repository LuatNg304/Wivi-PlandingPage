import React from "react";
import { MaroonFintechBase } from "./components/MaroonFintechBase";
import { Wivi3DModel } from "./components/Wivi3DModel";
import {
  MaroonPricingSection,
  MaroonFaqSection,
  MaroonBankingPartners,
  MaroonTestimonialSection,
} from "./components/MaroonFintechSections";

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
    <div className="relative min-h-screen bg-[#091726] text-white">
      {/* Main Luxury Ocean Blue Fintech Canvas */}
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
        title={`Làm chủ tài chính\n*bằng kỷ luật* và sự thảnh thơi`}
        subtitle="Phương pháp 6 Hũ kết hợp AI thị giác bóc tách hoá đơn 2s tự động. Xây dựng thói quen tài chính kỷ luật vững vàng và tự do thực sự."
        primaryAction={{
          label: "Tải App Miễn Phí",
          href: "#download",
        }}
        secondaryAction={{
          label: "Xem Bảng Giá",
          href: "#pricing",
        }}
        info={{
          label: "/wivi-core/",
          text: "WIVI tự động chia tiền lương vào từng hũ theo tỷ lệ vàng, *bóc tách hóa đơn trong 2 giây bằng AI và cảnh báo bội chi trước khi bạn kịp hết tiền.*",
        }}
        statCards={statCards}
        customModel={
          <div className="w-full h-full flex items-center justify-center relative cursor-grab active:cursor-grabbing">
            {/* Ambient Cyan/Ocean Pulsing Glow behind 3D Model */}
            <div className="absolute inset-0 translate-y-8 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.36),rgba(2,132,199,0.18)_50%,transparent_72%)] rounded-full blur-3xl animate-pulse pointer-events-none" />
            <div className="absolute -inset-6 translate-y-8 bg-[radial-gradient(ellipse_at_bottom,rgba(14,165,233,0.22),transparent_70%)] blur-2xl pointer-events-none" />



            <Wivi3DModel
              modelPath="/modal3d/8899c880e7456aaaaba35722f50805e0.glb"
              className="w-full h-full"
              scale={isMobile ? 2.05 : 2.3}
              positionY={isMobile ? -0.45 : -1}
            />
          </div>
        }
        afterHero={<MaroonBankingPartners />}
        about={{
          kicker: "Triết lý WIVI",
          statement:
            "WIVI {mark} giúp người trẻ làm chủ tài chính cá nhân: tự động hóa phân bổ dòng tiền, bóc tách hóa đơn AI 2 giây và nuôi dưỡng chuỗi kỷ luật thép mỗi ngày.",
          stats: [
            { value: 50000, suffix: "+", label: "Người dùng kỷ luật" },
            {
              value: 2.1,
              decimals: 1,
              suffix: "s",
              label: "Quét hoá đơn AI OCR",
            },
            {
              value: 99.4,
              decimals: 1,
              suffix: "%",
              label: "Độ chính xác nhận diện",
            },
          ],
        }}
        features={{
          kicker: "Trụ cột công nghệ",
          title: `Tự Động Hoá *6 Hũ,*\n*Quản Lý* Trọn Vẹn Dòng Tiền`,
          subtitle:
            "Không còn vật lộn với bảng tính Excel hay nỗi lo rỗng túi mỗi cuối tháng.",
        }}
        wallet={{
          title: "Hệ Thống Hũ Tài Chính Đa Năng",
          description:
            "Xem chi tiết số dư từng hũ, tài khoản ngân hàng và ví tích lũy trong một giao diện duy nhất.",
          growth: "+35% · Tỷ lệ tích luỹ",
          wallets: [
            { code: "VND", symbol: "₫", balance: 68500000, perUsd: 1 },
            { code: "FFA", symbol: "₫", balance: 24500000, perUsd: 1 },
            { code: "LTSS", symbol: "₫", balance: 32000000, perUsd: 1 },
            { code: "PLAY", symbol: "₫", balance: 12000000, perUsd: 1 },
          ],
        }}
        spending={{
          title: "Bản Đồ Kỷ Luật Chi Tiêu 52 Tuần",
          description:
            "Theo dõi nhịp điệu chi tiêu từng tuần, phát hiện ngay các đợt vung tay quá trán trước khi bội chi.",
          budget: 25000000,
          seed: 14,
        }}
        nav={[
          { label: "Tính Năng", href: "#features" },
          { label: "Đánh Giá", href: "#testimonials" },
          { label: "Bảng Giá", href: "#pricing" },
          { label: "Hỏi Đáp", href: "#faq" },
          { label: "Tải App", href: "#download" },
        ]}
        //login={{ label: "Đăng Nhập sss", href: "#download" }}
        signup={{ label: "Tải App", href: "#download" }}
        cta={{
          title: "Sẵn sàng làm chủ tài chính, *ngay hôm nay.*",
          subtitle:
            "Gia nhập hơn 50.000 người dùng kiểm soát dòng tiền tự động. Miễn phí trọn đời các tính năng cốt lõi.",
          action: {
            label: "Tải WIVI Miễn Phí",
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
                { label: "Về WIVI", href: "#about" },
                { label: "Tuyển Dụng", href: "#about" },
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
        {/* Extra Luxury WIVI Sections */}
        <MaroonTestimonialSection />
        <MaroonPricingSection />
        <MaroonFaqSection />

        {/* Pre-footer App Store & Google Play download badges banner */}
        <div id="download" className="py-8 sm:py-12 px-4 text-center">
          <p className="text-[11px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 sm:mb-4">
            Tải ngay trên mọi nền tảng di động
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="#"
              className="inline-block transition-transform duration-300 hover:scale-105 active:scale-95"
              aria-label="Get it on Google Play"
            >
              <img
                src="/google-play-badge.svg"
                alt="Google Play"
                className="h-10 sm:h-12 w-auto object-contain cursor-pointer"
              />
            </a>
            {/* <a
              href="#"
              className="inline-block transition-transform duration-300 hover:scale-105 active:scale-95"
              aria-label="Download on App Store"
            >
              <img
                src="/app-store-badge.svg"
                alt="App Store"
                className="h-10 sm:h-12 w-auto object-contain cursor-pointer"
              />
            </a> */}
          </div>
          <div className="mt-3 sm:mt-4 text-[10.5px] sm:text-[11px] text-slate-400 px-2 leading-relaxed">
            Cài đặt trong 30 giây • Không yêu cầu quyền truy cập ngân hàng • Bảo mật tuyệt đối
          </div>
        </div>
      </MaroonFintechBase>
    </div>
  );
}

export default App;
