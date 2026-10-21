import React, { useState, useEffect } from "react";
import { Smartphone, ChevronLeft, ChevronRight, CheckCircle2, Play, Pause } from "lucide-react";
import { ASSETS } from "../assets";

export interface AppScreenItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  tag: string;
  featureDesc: string;
  imageSrc: string;
  keyPoints: string[];
}

export const AppScreensCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const screens: AppScreenItem[] = [
    {
      id: "screen-1",
      title: "Trang Chủ Quản Trị Số Dư & Chi Tiêu",
      subtitle: "Nắm trọn tài sản 20.000.000 ₫ và tiến độ ngân sách trong nháy mắt",
      badge: "Màn Hình Chính",
      tag: "Home Dashboard",
      featureDesc: "Theo dõi số dư hiện tại, nhắc nhở chu kỳ nhận lương tự động và đo lường trực quan mức chi tiêu theo tháng kèm hạn mức 25 Triệu rõ ràng.",
      imageSrc: ASSETS.appUi.dashboard,
      keyPoints: [
        "Cập nhật số dư 1 chạm tức thì",
        "Đếm ngược ngày nhận lương (17 ngày)",
        "Thanh tiến độ ngân sách trực quan",
      ],
    },
    {
      id: "screen-2",
      title: "Hệ Thống Phân Bổ 6 Hũ Thông Minh",
      subtitle: "Phân tách rõ ràng giữa Chi tiêu và Hũ Tích lũy (Mua nhà, GIVE, PLAY)",
      badge: "6 Hũ Đa Năng",
      tag: "Smart Jars",
      featureDesc: "Xem chi tiết từng hũ chuyên biệt: Hũ Mua nhà (25%), Hũ Cho đi & Cống hiến (8%), Hũ Hưởng thụ & Giải trí (11%) kèm tính năng Chuyển Quỹ.",
      imageSrc: ASSETS.appUi.jarsManagement,
      keyPoints: [
        "Hạn mức phân chia tự động",
        "Thao tác Chuyển Quỹ 1 chạm",
        "Lịch sử giao dịch từng hũ",
      ],
    },
    {
      id: "screen-3",
      title: "Cài Đặt Tỷ Lệ & Dự Báo Mục Tiêu",
      subtitle: "Tự do điều chỉnh tỷ lệ % và tính toán thời gian chạm tới ước mơ",
      badge: "Dự Báo & Tỷ Lệ",
      tag: "Goal Forecast",
      featureDesc: "Dự báo mục tiêu thực tế: Với 6,3 Tr/tháng (25%), hệ thống tính toán chính xác dự kiến hoàn thành mục tiêu 1 Tỷ trong 13.3 năm.",
      imageSrc: ASSETS.appUi.ratioSettings,
      keyPoints: [
        "Tính số tháng hoàn thành mục tiêu",
        "Tùy chỉnh tỷ lệ % linh hoạt (+ / -)",
        "Đồng bộ kế hoạch tài chính cá nhân",
      ],
    },
    {
      id: "screen-4",
      title: "Báo Cáo Phân Tích Dòng Tiền & Hạn Mức",
      subtitle: "Theo dõi trực quan mọi biến động thu chi và hạn mức an toàn",
      badge: "Dòng Tiền",
      tag: "Cash Flow",
      featureDesc: "Hiển thị dòng tiền ra vào, cảnh báo khi một hũ gần chạm ngưỡng giới hạn an toàn trước kỳ lương.",
      imageSrc: ASSETS.appUi.screen1,
      keyPoints: [
        "Theo dõi thu chi realtime",
        "Phân loại danh mục tự động",
        "Biểu đồ so sánh theo kỳ",
      ],
    },
    {
      id: "screen-5",
      title: "Chi Tiết Giao Dịch & Quản Lý Chi Phí",
      subtitle: "Minh bạch từng hóa đơn và khoản chi tiêu nhỏ nhất mỗi ngày",
      badge: "Giao Dịch",
      tag: "Transactions",
      featureDesc: "Xem lại chi tiết từng khoản ăn uống, mua sắm, điện nước được ghi nhận vào từng hũ mà không bị thất thoát.",
      imageSrc: ASSETS.appUi.screen2,
      keyPoints: [
        "Tìm kiếm giao dịch siêu tốc",
        "Gắn nhãn chi tiêu thông minh",
        "Lọc theo thời gian & hũ chi tiêu",
      ],
    },
    {
      id: "screen-6",
      title: "Chuyển Quỹ Linh Hoạt & Cân Đối Hũ",
      subtitle: "Linh hoạt điều chỉnh tiền giữa các hũ khi phát sinh sự cố",
      badge: "Chuyển Quỹ",
      tag: "Rebalance",
      featureDesc: "Khi một hũ bị thâm hụt ngoài ý muốn, WIVI cho phép chuyển quỹ giữa các hũ chỉ với 1 chạm.",
      imageSrc: ASSETS.appUi.screen3,
      keyPoints: [
        "Chuyển quỹ tức thì giữa các hũ",
        "Gợi ý tái cân đối từ AI",
        "Không làm vỡ kế hoạch dài hạn",
      ],
    },
    {
      id: "screen-7",
      title: "Thống Kê Nhịp Điệu Tiêu Dùng Tuần",
      subtitle: "Đo lường thói quen và tốc độ chi tiêu thực tế",
      badge: "Thống Kê",
      tag: "Analytics",
      featureDesc: "Biểu đồ phân tích nhịp điệu tiêu tiền theo tuần giúp phát hiện ngay các đợt vung tay quá trán.",
      imageSrc: ASSETS.appUi.screen4,
      keyPoints: [
        "Nhịp điệu chi tiêu 52 tuần",
        "Phát hiện xu hướng tiêu dùng",
        "So sánh tốc độ chi tiêu các tháng",
      ],
    },
    {
      id: "screen-8",
      title: "Quét Hóa Đơn AI OCR Tức Thì",
      subtitle: "Bóc tách hóa đơn trong 1 giây — Nói không với gõ tay",
      badge: "AI OCR",
      tag: "Smart Scanner",
      featureDesc: "Chụp bill nhà hàng, siêu thị — AI tự động nhận diện số tiền, ngày giờ và rót thẳng vào hũ tương ứng.",
      imageSrc: ASSETS.appUi.screen5,
      keyPoints: [
        "Quét camera hoặc tải ảnh bill",
        "Tự động tính thuế VAT & phụ phí",
        "Độ chính xác phân bổ 99.4%",
      ],
    },
    {
      id: "screen-9",
      title: "Lộ Trình Tích Lũy Ước Mơ",
      subtitle: "Hiện thực hóa mua nhà, đổi xe và quỹ phòng thân",
      badge: "Mục Tiêu",
      tag: "Dream Goals",
      featureDesc: "Đặt mục tiêu tài chính cụ thể, WIVI tự động trích quỹ mỗi kỳ lương để bạn sớm chạm tới vạch đích.",
      imageSrc: ASSETS.appUi.screen6,
      keyPoints: [
        "Thanh tiến độ chạm đích trực quan",
        "Tự động trích tiền theo định kỳ",
        "Động viên tinh thần tích lũy",
      ],
    },
    {
      id: "screen-10",
      title: "Kỷ Luật Tài Chính & Chuỗi Streak",
      subtitle: "Nuôi dưỡng thói quen làm chủ tiền bạc mỗi ngày",
      badge: "Kỷ Luật",
      tag: "Streak & Badges",
      featureDesc: "Duy trì chuỗi ngày kiểm soát chi tiêu kỷ luật để mở khóa các huy hiệu tài chính độc quyền.",
      imageSrc: ASSETS.appUi.screen7,
      keyPoints: [
        "Hệ thống chuỗi ngày kỷ luật",
        "Huy hiệu tài chính cá nhân",
        "Cảnh báo trước nguy cơ bội chi",
      ],
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + screens.length) % screens.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % screens.length);
  };

  // Smooth Auto carousel slide without 50ms re-renders
  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((curr) => (curr + 1) % screens.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isAutoPlay, currentIndex, screens.length]);

  return (
    <section
      id="app-screens"
      className="relative w-full min-h-[100dvh] py-6 sm:py-8 lg:py-12 px-4 sm:px-8 lg:px-12 bg-white text-slate-900 overflow-hidden flex flex-col justify-center border-t border-slate-200"
    >
      <div className="max-w-[1380px] mx-auto w-full relative z-10 flex flex-col justify-center my-auto">
        {/* Prominent Header */}
        <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold tracking-wider uppercase mb-2 shadow-xs">
            <Smartphone className="w-3.5 h-3.5 text-sky-600" />
            <span>Giao Diện App WIVI ({currentIndex + 1} / {screens.length})</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Trải Nghiệm Thực Tế —{" "}
            <span className="text-[#0284c7]">
              Đơn Giản & Trực Quan
            </span>
          </h2>
        </div>

        {/* Carousel Grid - Large Visual & Clear Text */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {/* Left: Significantly Larger Uncropped App Screenshot Stack */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            {/* Prominent Left Arrow */}
            <button
              onClick={handlePrev}
              className="absolute -left-3 sm:-left-7 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-[#0284c7] border border-slate-300 hover:border-[#0284c7] text-slate-700 hover:text-white flex items-center justify-center transition-all shadow-xl hover:scale-110 active:scale-95 cursor-pointer"
              aria-label="Ảnh trước"
              title="Ảnh trước"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
            </button>

            {/* Clean Borderless Large Phone Display - High Contrast Bezel */}
            <div className="relative w-[280px] sm:w-[320px] md:w-[350px] lg:w-[380px] h-[460px] sm:h-[520px] md:h-[560px] lg:h-[600px] flex items-center justify-center rounded-3xl overflow-hidden border-2 border-sky-300 bg-[#0b1e36] shadow-[0_20px_50px_rgba(2,132,199,0.2)]">
              {screens.map((screen, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <img
                    key={screen.id}
                    src={screen.imageSrc}
                    alt={screen.title}
                    loading="eager"
                    decoding="async"
                    className={`absolute inset-0 w-full h-full object-contain p-2 select-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isActive
                        ? "opacity-100 scale-100 z-10"
                        : "opacity-0 scale-[0.97] pointer-events-none z-0"
                    }`}
                  />
                );
              })}
            </div>

            {/* Prominent Right Arrow */}
            <button
              onClick={handleNext}
              className="absolute -right-3 sm:-right-7 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-[#0284c7] border border-slate-300 hover:border-[#0284c7] text-slate-700 hover:text-white flex items-center justify-center transition-all shadow-xl hover:scale-110 active:scale-95 cursor-pointer"
              aria-label="Ảnh kế tiếp"
              title="Ảnh kế tiếp"
            >
              <ChevronRight className="w-6 h-6 stroke-[2.5]" />
            </button>
          </div>

          {/* Right: Screen Details, Key Highlights & 10-Screen Switcher */}
          <div className="lg:col-span-7 space-y-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-50 border border-sky-200 text-sky-700">
                  {screens[currentIndex].badge}
                </span>
                <span className="text-xs text-slate-500 font-mono font-bold">{screens[currentIndex].tag}</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight">
                {screens[currentIndex].title}
              </h3>
              <p className="text-[#0284c7] text-sm sm:text-base font-bold">
                {screens[currentIndex].subtitle}
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                {screens[currentIndex].featureDesc}
              </p>
            </div>

            {/* Highlights Box - Clean Light Ocean Blue */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#f0f7ff] border border-sky-200 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-sky-800">
                Tính năng nổi bật:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {screens[currentIndex].keyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="leading-snug">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 10-Screen Quick Pill Selector */}
            <div>
              <div className="text-xs text-slate-600 mb-2 font-bold flex items-center justify-between">
                <span>Chọn nhanh màn hình ({screens.length} giao diện):</span>
                <span className="text-[#0284c7] font-mono text-xs font-extrabold">#{currentIndex + 1}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {screens.map((item, idx) => {
                  const isActive = currentIndex === idx;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setCurrentIndex(idx);
                      }}
                      className={`relative px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#0284c7] text-white border-[#0284c7] shadow-md shadow-sky-500/25 scale-105"
                          : "bg-white border-slate-200 text-slate-700 hover:border-sky-300 hover:text-sky-700 shadow-xs"
                      }`}
                      title={item.title}
                    >
                      <span>{idx + 1}. {item.badge}</span>
                      {isActive && isAutoPlay && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/40 overflow-hidden rounded-full">
                          <div
                            key={`prog-${currentIndex}`}
                            className="h-full bg-white animate-carousel-progress"
                          />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Controls Bar */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-200">
              <div className="flex items-center gap-2.5">
                <button
                  onClick={handlePrev}
                  className="w-9 h-9 rounded-full bg-white hover:bg-sky-50 text-slate-700 border border-slate-200 shadow-xs transition flex items-center justify-center cursor-pointer active:scale-95"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-9 h-9 rounded-full bg-white hover:bg-sky-50 text-slate-700 border border-slate-200 shadow-xs transition flex items-center justify-center cursor-pointer active:scale-95"
                  aria-label="Next"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsAutoPlay((p) => !p)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-xs text-slate-700 font-semibold transition cursor-pointer"
                >
                  {isAutoPlay ? (
                    <>
                      <Pause className="w-3.5 h-3.5 text-[#0284c7]" />
                      <span>Tự động chuyển (4.5s)</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 text-slate-500" />
                      <span>Tạm dừng</span>
                    </>
                  )}
                </button>
              </div>

              <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                Rê chuột để dừng · Click số để xem ngay
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppScreensCarousel;
