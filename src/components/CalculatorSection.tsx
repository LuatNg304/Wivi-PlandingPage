import React, { useState, useMemo } from "react";
import {
  Calculator,
  Sparkles,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { PrimaryCTA } from "./ui/PrimaryCTA";

export const CalculatorSection: React.FC = () => {
  // Calculator state: Monthly income
  const [income, setIncome] = useState<number>(25000000); // 25M VND default

  const presets = [
    { label: "15 Triệu", value: 15000000 },
    { label: "25 Triệu", value: 25000000 },
    { label: "40 Triệu", value: 40000000 },
    { label: "60 Triệu", value: 60000000 },
  ];

  // 6 Jars split:
  // 1. Thiết yếu (NEC - 55%)
  // 2. Tự do tài chính (FFA - 10%)
  // 3. Tiết kiệm dài hạn (LTSS - 10%)
  // 4. Giáo dục & Học tập (EDU - 10%)
  // 5. Hưởng thụ cuộc sống (PLAY - 10%)
  // 6. Cho đi & Thiện nguyện (GIVE - 5%)
  const jars = useMemo(() => {
    return [
      {
        code: "NEC",
        name: "Chi Tiêu Thiết Yếu",
        percent: 55,
        amount: income * 0.55,
        desc: "Tiền nhà, điện nước, ăn uống, xăng xe",
        color: "bg-blue-500",
        textColor: "text-blue-400",
      },
      {
        code: "FFA",
        name: "Tự Do Tài Chính",
        percent: 10,
        amount: income * 0.1,
        desc: "Đầu tư sinh lời, chứng khoán, bất động sản",
        color: "bg-emerald-500",
        textColor: "text-emerald-400",
      },
      {
        code: "LTSS",
        name: "Tiết Kiệm Dài Hạn",
        percent: 10,
        amount: income * 0.1,
        desc: "Quỹ khẩn cấp 6 tháng, mua nhà, mua xe",
        color: "bg-yellow-500",
        textColor: "text-yellow-400",
      },
      {
        code: "EDU",
        name: "Phát Triển Bản Thân",
        percent: 10,
        amount: income * 0.1,
        desc: "Khoá học, sách vở, nâng cao chuyên môn",
        color: "bg-purple-500",
        textColor: "text-purple-400",
      },
      {
        code: "PLAY",
        name: "Hưởng Thụ Cuộc Sống",
        percent: 10,
        amount: income * 0.1,
        desc: "Du lịch, cà phê bạn bè, mua sắm giải trí",
        color: "bg-pink-500",
        textColor: "text-pink-400",
      },
      {
        code: "GIVE",
        name: "Cho Đi & Giúp Đỡ",
        percent: 5,
        amount: income * 0.05,
        desc: "Biếu bố mẹ, từ thiện, giúp đỡ bạn bè",
        color: "bg-rose-500",
        textColor: "text-rose-400",
      },
    ];
  }, [income]);

  const formatVND = (num: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <section
      id="calculator"
      className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
    >
      {/* Heading */}
      <div className="mx-auto mb-8 sm:mb-10 max-w-2xl text-center lg:mb-14">
        <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-balance text-slate-900 md:text-4xl md:leading-tight">
          Mô Phỏng Phân Bổ Hũ Cho Mức Lương Của Bạn
        </h2>
        <p className="mt-2 text-pretty text-slate-600 text-xs sm:text-base">
          Kéo thanh trượt hoặc chọn mức thu nhập hàng tháng để xem WIVI chia
          tiền tự động như thế nào.
        </p>
      </div>

      {/* Grid: Left Controls, Right Results */}
      <div className="grid md:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Controls Card */}
        <div className="md:col-span-5 rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-8 shadow-xs">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 sm:mb-2">
            Thu nhập hàng tháng
          </h3>
          <div className="text-2xl sm:text-4xl font-extrabold text-blue-600 mb-4 sm:mb-6">
            {formatVND(income)}
          </div>

          {/* Quick Presets */}
          <div className="mb-5 sm:mb-6">
            <span className="text-[11px] sm:text-xs text-slate-500 font-medium block mb-2">
              Chọn nhanh thu nhập:
            </span>
            <div className="grid grid-cols-2 gap-2">
              {presets.map((preset, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setIncome(preset.value)}
                  className={`rounded-xl px-3 py-2 text-xs font-bold border transition duration-200 cursor-pointer ${
                    income === preset.value
                      ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* Slider */}
          <div className="mb-5 sm:mb-6">
            <div className="flex justify-between text-[11px] sm:text-xs text-slate-500 mb-1.5 sm:mb-2">
              <span>5.000.000đ</span>
              <span>100.000.000đ</span>
            </div>
            <input
              type="range"
              min={5000000}
              max={100000000}
              step={1000000}
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5 sm:space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-semibold">
              <span>Kỷ luật tài chính tự động</span>
            </div>
            <p className="leading-relaxed text-[11px] sm:text-xs">
              Ngay khi có biến động số dư lương, WIVI tự động cập nhật số dư cho
              cả Hũ để bạn biết chính xác giới hạn chi tiêu từng ngày.
            </p>
          </div>

          <div className="mt-5 sm:mt-6">
            <PrimaryCTA
              title="Áp Dụng Công Thức Này Ngay"
              url="#download"
              className="w-full justify-center text-center"
            />
          </div>
        </div>

        {/* 6 Jars Result Cards */}
        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
          {jars.map((jar, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200 bg-white p-3.5 sm:p-4 hover:border-blue-400 transition duration-300 shadow-xs"
            >
              <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-800 uppercase">
                    {jar.name} ({jar.code})
                  </span>
                </div>
                <span className="rounded-md bg-slate-100 border border-slate-200 px-2 py-0.5 text-[10px] sm:text-[11px] font-bold text-slate-700">
                  {jar.percent}%
                </span>
              </div>
              <div className={`text-xl sm:text-xl font-extrabold  text-slate-700`}>
                {formatVND(jar.amount)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
