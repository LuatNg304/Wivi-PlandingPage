import React from "react";
import { CheckCircle2, Sparkles } from "lucide-react";
import { SecondaryCTA } from "./ui/SecondaryCTA";

export const PricingSection: React.FC = () => {
  const starterFeatures = [
    "Quản lý phân bổ Hũ tài chính tiêu chuẩn",
    "Nhập chi tiêu thủ công không giới hạn",
    "30 lượt quét hoá đơn AI OCR mỗi tháng",
    "Biểu đồ thống kê dòng tiền cơ bản",
    "Sao lưu dữ liệu an toàn trên thiết bị",
  ];

  const premiumFeatures = [
    "Toàn bộ tính năng của gói Cơ Bản",
    "Không giới hạn lượt quét hoá đơn AI OCR 2s",
    "Cảnh báo bội chi thời gian thực & dự báo số dư",
    "Quản trị đa mục tiêu ước mơ & quỹ khẩn cấp",
    "Đồng bộ Cloud đa thiết bị (iOS, Android, Web)",
  ];

  const proFeatures = [
    "Toàn bộ đặc quyền của gói Premium",
    "Trợ lý AI Cố vấn tài chính chuyên sâu 24/7",
    "Đồng bộ tài khoản ngân hàng & ví điện tử tự động",
    "Quản trị tài chính gia đình & đa thành viên",
    "Phân tích danh mục đầu tư & dự phóng số dư",
    "Hỗ trợ ưu tiên 1:1 từ chuyên gia tài chính cấp cao",
  ];

  return (
    <section
      id="pricing"
      className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
    >
      {/* Section Heading */}
      <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
        <h2 className="text-2xl font-bold tracking-tight text-balance text-slate-900 md:text-4xl md:leading-tight">
          Minh Bạch & Tiết Kiệm Tối Đa
        </h2>
        <p className="mt-2 text-pretty text-slate-600 text-sm sm:text-base">
          Đầu tư một cốc cà phê mỗi tháng để tiết kiệm hàng triệu đồng và thảnh
          thơi cả đời.
        </p>
      </div>

      {/* Pricing Cards Container */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 max-w-6xl mx-auto">
        {/* Starter Kit Card */}
        <div className="w-full max-w-md lg:max-w-none lg:flex-1 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-xs">
          <div className="mb-4">
            <h3 className="text-lg sm:text-2xl font-bold text-slate-900">
              Gói Cơ Bản (Starter)
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Khởi đầu hành trình rèn luyện kỷ luật tài chính cá nhân.
            </p>
          </div>

          <div className="mb-5 sm:mb-6 flex flex-wrap items-baseline gap-1.5">
            <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              0 đ
            </span>
            <span className="text-xs sm:text-sm font-medium text-slate-500">
              / miễn phí trọn đời
            </span>
          </div>

          <ul className="mb-6 sm:mb-8 space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-700">
            {starterFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="size-4 shrink-0 text-slate-400 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href="#download"
            className="block w-full rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 px-5 py-3 text-center text-sm font-bold text-slate-800 transition duration-200"
          >
            Bắt Đầu Miễn Phí
          </a>
        </div>

        {/* Premium Card */}
        <div className="w-full max-w-md lg:max-w-none lg:flex-1 rounded-2xl bg-gradient-to-tr from-[#1e3a8a] via-[#2563eb] to-[#0284c7] p-5 sm:p-7 z-10 border border-blue-400/30 shadow-lg text-white">
          <div className="mb-4">
            <h3 className="text-lg sm:text-2xl font-extrabold text-white">
              WIVI Kỷ Luật Premium
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 mt-0.5">
              Mở khoá toàn bộ sức mạnh AI và quản trị tài chính chuyên sâu.
            </p>
          </div>

          <div className="mb-5 sm:mb-6 flex flex-wrap items-baseline gap-1 sm:gap-2">
            <span className="text-3xl sm:text-4xl font-extrabold text-white">
              29.000 đ
            </span>
            <span className="text-xs sm:text-sm font-semibold text-blue-100">
              / tháng
            </span>
          </div>

          <ul className="mb-6 sm:mb-8 space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-blue-50">
            {premiumFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="size-4 shrink-0 text-sky-200 mt-0.5" />
                <span className="font-medium">{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href="#download"
            className="block w-full rounded-xl bg-white hover:bg-slate-50 px-5 py-3.5 text-center text-sm font-bold text-blue-700 transition duration-300 shadow-sm"
          >
            Chọn Gói Premium
          </a>
        </div>

        {/* Pro Card (Darker blue & Bigger frame) */}
        <div className="w-full max-w-md lg:max-w-none lg:flex-[1.2] rounded-2xl bg-gradient-to-tr from-[#020617] via-[#0b1d3a] to-[#142d5c] p-6 sm:p-8 lg:p-9 lg:py-10 z-20 border-2 border-blue-400/40 shadow-2xl shadow-blue-950/50 text-white relative">
          <div className="mb-4">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 px-3 py-1 text-xs font-semibold text-sky-300 mb-2.5">
              <span>Gói Đột Phá Khuyên Dùng</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-extrabold text-white">
              WIVI Kỷ Luật Pro
            </h3>
            <p className="text-xs sm:text-sm text-sky-200 mt-0.5">
              Giải pháp tối thượng cho tự do tài chính và tối ưu hoá đầu tư.
            </p>
          </div>

          <div className="mb-5 sm:mb-6 flex flex-wrap items-baseline gap-1 sm:gap-2">
            <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              59.000 đ
            </span>
            <span className="text-xs sm:text-sm font-semibold text-sky-200">
              / tháng
            </span>
          </div>

          <ul className="mb-6 sm:mb-8 space-y-2.5 sm:space-y-3.5 text-xs sm:text-sm text-blue-50">
            {proFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="size-4 shrink-0 text-sky-400 mt-0.5" />
                <span className="font-medium text-slate-100">{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href="#download"
            className="block w-full rounded-xl bg-white hover:bg-sky-50 px-6 py-3.5 text-center text-sm font-bold text-slate-950 transition duration-300 shadow-md"
          >
            Nâng Cấp Pro Ngay (Dùng thử 14 ngày)
          </a>
        </div>
      </div>

      {/* Enterprise / Family Note */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-center md:mt-10">
        <p className="text-xs sm:text-sm text-slate-500">
          Bạn cần gói tài chính cho cả gia đình hoặc đội nhóm kinh doanh?
        </p>
        <SecondaryCTA title="Liên hệ tư vấn viên" url="#contact" />
      </div>
    </section>
  );
};
