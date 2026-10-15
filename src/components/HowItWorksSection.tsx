import React, { useState } from "react";
import {
  UserCircle2,
  PiggyBank,
  Target,
  Zap,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import ASSETS from "../assets";

interface Step {
  num: string;
  icon: React.FC<{ className?: string }>;
  title: string;
  shortTitle: string;
  subtitle: string;
  action: string;
  meaning: string;
  images: { label: string; src: string; alt: string }[];
}

export const HowItWorksSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [activeSubImage, setActiveSubImage] = useState<number>(0);

  const steps: Step[] = [
    {
      num: "01",
      icon: UserCircle2,
      shortTitle: "Hồ Sơ & Thu Nhập",
      title: "Khởi tạo Hồ sơ & Thu nhập (Biến X)",
      subtitle: "Xác lập điểm xuất phát tài chính cá nhân",
      action: "Điền họ tên và ước lượng mức thu nhập trung bình mỗi tháng của bạn.",
      meaning:
        "Đây là nguồn tài nguyên khởi điểm (Biến X) để thuật toán WIVI cấp hạn mức chi tiêu an toàn cho cả tháng, đảm bảo bạn không bao giờ chi quá tay.",
      images: [
        {
          label: "Nhập thu nhập",
          src: ASSETS.huongDan.buoc1,
          alt: "Bước 1: Khởi tạo hồ sơ WIVI",
        },
      ],
    },
    {
      num: "02",
      icon: PiggyBank,
      shortTitle: "Quỹ Dự Phòng",
      title: "Bệ đỡ Quỹ dự phòng ban đầu (Biến Y)",
      subtitle: "Tấm khiên an toàn trước mọi biến cố bất ngờ",
      action: "Nhập số tiền bạn đang có sẵn trong ví hoặc tài khoản ngân hàng.",
      meaning:
        "WIVI thiết lập tấm lá chắn tài chính đầu tiên (Biến Y), giúp bạn luôn an tâm và giữ vững tâm lý trước mọi chi phí bất ngờ trong cuộc sống.",
      images: [
        {
          label: "Quỹ phòng thân",
          src: ASSETS.huongDan.buoc2,
          alt: "Bước 2: Thiết lập quỹ dự phòng",
        },
      ],
    },
    {
      num: "03",
      icon: Target,
      shortTitle: "Mục Tiêu Ước Mơ",
      title: "Đặt Mục tiêu & Lắng nghe Trợ lý WIVI",
      subtitle: "AI mô phỏng lộ trình chạm tới ước mơ",
      action:
        "Chọn mục tiêu (Mua nhà, Mua xe, Đi du lịch, Tự do tài chính) và số tiền mong muốn.",
      meaning:
        "Chỉ trong 0.5 giây, AI WIVI tính toán chính xác: trích bao nhiêu % thu nhập mỗi tháng và chính xác bao nhiêu tháng/năm bạn sẽ hoàn thành mục tiêu.",
      images: [
        {
          label: "Chọn mục tiêu",
          src: ASSETS.huongDan.buoc3a,
          alt: "Bước 3a: Đặt mục tiêu ước mơ",
        },
        {
          label: "AI tính lộ trình",
          src: ASSETS.huongDan.buoc3b,
          alt: "Bước 3b: AI tính toán lộ trình",
        },
      ],
    },
    {
      num: "04",
      icon: Zap,
      shortTitle: "Phân Bổ 6 Hũ",
      title: "Tự động phân bổ Hũ & Bắt đầu Kỷ luật",
      subtitle: "Vận hành tài chính hoàn toàn tự động",
      action:
        'Xem biểu đồ phân bổ các hũ (Thiết yếu, Học tập, Hưởng thụ, Cho đi, Đầu tư) và nhấn "Bắt đầu hành trình WIVI".',
      meaning:
        "Toàn bộ dòng tiền từ nay sẽ tự động phân phối theo tỷ lệ vàng dưới sự giám sát 24/7 của trợ lý WIVI, bảo vệ kỷ luật thép mỗi ngày.",
      images: [
        {
          label: "Phân bổ 6 hũ",
          src: ASSETS.huongDan.buoc4,
          alt: "Bước 4: Vận hành tự động 6 hũ",
        },
      ],
    },
  ];

  const current = steps[activeStep];

  const handleStepChange = (index: number) => {
    setActiveStep(index);
    setActiveSubImage(0);
  };

  return (
    <section
      id="guide"
      className="relative w-full min-h-[100dvh] py-6 sm:py-8 lg:py-12 px-4 sm:px-8 lg:px-12 bg-[#f8fafc] border-t border-slate-200 overflow-hidden flex flex-col justify-center text-slate-900"
    >
      <div className="max-w-[1380px] mx-auto w-full relative z-10 flex flex-col justify-center my-auto">
        {/* Prominent Header */}
        <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold tracking-wider uppercase mb-2 shadow-xs">
            <Zap className="w-3.5 h-3.5 text-sky-600" />
            <span>Hướng Dẫn Onboarding 4 Bước</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Bắt Đầu Làm Chủ Tài Chính{" "}
            <span className="text-[#0284c7]">
              Chỉ Trong 5 Phút
            </span>
          </h2>
        </div>

        {/* 2-Column Balanced Layout - Big Visual & Clear Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* ── LEFT COLUMN: Step Navigator & Clear Instruction Guide ── */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            {/* Step Selection Tracker Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                const isActive = activeStep === idx;
                return (
                  <button
                    key={step.num}
                    onClick={() => handleStepChange(idx)}
                    className={`px-3.5 py-2.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#0284c7] text-white border-[#0284c7] shadow-md shadow-sky-500/25 font-bold scale-[1.02]"
                        : "bg-white border-slate-200 text-slate-700 hover:border-sky-300 hover:text-sky-700 shadow-xs"
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-0.5">
                      <span className="font-mono font-bold">0{idx + 1}</span>
                      <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-slate-400"}`} />
                    </div>
                    <div className="text-xs sm:text-sm font-bold truncate leading-tight">
                      {step.shortTitle}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Instruction Card - Solid White */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-3.5">
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0284c7] font-bold text-sm font-mono">
                    {current.num}
                  </span>
                  <div>
                    <h3 className="text-base sm:text-xl font-extrabold text-slate-900 leading-tight">
                      {current.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#0284c7] font-semibold mt-0.5">{current.subtitle}</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-500 font-bold bg-slate-100 px-2 py-0.5 rounded">
                  {activeStep + 1} / 4
                </span>
              </div>

              {/* Action Box */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#f0f7ff] border border-sky-200">
                <div className="flex items-center gap-1.5 text-xs font-bold text-sky-800 uppercase tracking-wider mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0" />
                  <span>Hành động bạn cần làm:</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed pl-5">
                  {current.action}
                </p>
              </div>

              {/* Meaning Box */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-1.5 text-xs font-bold text-teal-800 uppercase tracking-wider mb-1">
                  <Sparkles className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Ý nghĩa tài chính WIVI:</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed pl-5">
                  {current.meaning}
                </p>
              </div>

              {/* Bottom Nav: Previous & Next Buttons */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <button
                  onClick={() => handleStepChange(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 disabled:opacity-30 disabled:pointer-events-none transition flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Bước trước</span>
                </button>

                {/* Step indicator dots */}
                <div className="flex gap-2">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => handleStepChange(i)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        activeStep === i ? "w-6 bg-[#0284c7]" : "w-2 bg-slate-300 hover:bg-slate-400"
                      }`}
                      aria-label={`Chuyển tới bước ${i + 1}`}
                    />
                  ))}
                </div>

                {activeStep < steps.length - 1 ? (
                  <button
                    onClick={() => handleStepChange(activeStep + 1)}
                    className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#0284c7] hover:bg-[#0369a1] shadow-md shadow-sky-500/25 transition flex items-center gap-2 cursor-pointer active:scale-95"
                  >
                    <span>Bước tiếp theo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <a
                    href="#download"
                    className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/25 transition flex items-center gap-2 active:scale-95"
                  >
                    <span>Bắt đầu trải nghiệm</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: High-Fidelity Large App Screen Preview ── */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center">
            <div className="relative w-[280px] sm:w-[320px] md:w-[350px] lg:w-[380px] h-[460px] sm:h-[520px] md:h-[560px] lg:h-[600px] rounded-3xl overflow-hidden bg-[#0b1e36] border-2 border-sky-300 shadow-[0_20px_50px_rgba(2,132,199,0.2)] flex flex-col items-center">
              {/* Sub-image tabs if step has 2 images */}
              {current.images.length > 1 && (
                <div className="flex w-full p-2 bg-slate-900/95 border-b border-slate-700 gap-1.5 z-10">
                  {current.images.map((img, subIdx) => (
                    <button
                      key={subIdx}
                      onClick={() => setActiveSubImage(subIdx)}
                      className={`flex-1 py-1 px-3 rounded-lg text-xs font-bold transition cursor-pointer ${
                        activeSubImage === subIdx
                          ? "bg-[#0284c7] text-white shadow-sm"
                          : "text-slate-400 hover:text-white bg-slate-800"
                      }`}
                    >
                      {img.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Complete Uncropped Screen - Big and Crystal Clear */}
              <div className="w-full h-full flex items-center justify-center p-2">
                <img
                  key={current.images[activeSubImage].src}
                  src={current.images[activeSubImage].src}
                  alt={current.images[activeSubImage].alt}
                  className="w-full h-full object-contain select-none transition-all duration-300"
                />
              </div>
            </div>

            {/* Note */}
            <div className="mt-2.5 flex items-center gap-2 text-xs text-slate-500 font-medium text-center">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Bảo mật tuyệt đối · Không kết nối mật khẩu ngân hàng</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
