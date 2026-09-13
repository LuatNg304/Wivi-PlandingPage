import React, { useState, useMemo } from 'react';
import { Calculator, Sparkles, ArrowRight, TrendingUp, CheckCircle2 } from 'lucide-react';
import { PrimaryCTA } from './ui/PrimaryCTA';

export const CalculatorSection: React.FC = () => {
  // Calculator state: Monthly income
  const [income, setIncome] = useState<number>(25000000); // 25M VND default

  const presets = [
    { label: '15 Triệu', value: 15000000 },
    { label: '25 Triệu', value: 25000000 },
    { label: '40 Triệu', value: 40000000 },
    { label: '60 Triệu', value: 60000000 },
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
        code: 'NEC',
        name: 'Chi Tiêu Thiết Yếu',
        percent: 55,
        amount: income * 0.55,
        desc: 'Tiền nhà, điện nước, ăn uống, xăng xe',
        color: 'bg-blue-500',
        textColor: 'text-blue-400',
      },
      {
        code: 'FFA',
        name: 'Tự Do Tài Chính',
        percent: 10,
        amount: income * 0.10,
        desc: 'Đầu tư sinh lời, chứng khoán, bất động sản',
        color: 'bg-emerald-500',
        textColor: 'text-emerald-400',
      },
      {
        code: 'LTSS',
        name: 'Tiết Kiệm Dài Hạn',
        percent: 10,
        amount: income * 0.10,
        desc: 'Quỹ khẩn cấp 6 tháng, mua nhà, mua xe',
        color: 'bg-yellow-500',
        textColor: 'text-yellow-400',
      },
      {
        code: 'EDU',
        name: 'Phát Triển Bản Thân',
        percent: 10,
        amount: income * 0.10,
        desc: 'Khoá học, sách vở, nâng cao chuyên môn',
        color: 'bg-purple-500',
        textColor: 'text-purple-400',
      },
      {
        code: 'PLAY',
        name: 'Hưởng Thụ Cuộc Sống',
        percent: 10,
        amount: income * 0.10,
        desc: 'Du lịch, cà phê bạn bè, mua sắm giải trí',
        color: 'bg-pink-500',
        textColor: 'text-pink-400',
      },
      {
        code: 'GIVE',
        name: 'Cho Đi & Giúp Đỡ',
        percent: 5,
        amount: income * 0.05,
        desc: 'Biếu bố mẹ, từ thiện, giúp đỡ bạn bè',
        color: 'bg-rose-500',
        textColor: 'text-rose-400',
      },
    ];
  }, [income]);

  const formatVND = (num: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <section id="calculator" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      {/* Heading */}
      <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-white-500/10 border border-white-500/30 px-3 py-1 text-xs font-bold text-white-400 uppercase tracking-wider mb-3">
           Mô Phỏng Thu Nhập
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-balance text-neutral-800 md:text-4xl md:leading-tight dark:text-neutral-100">
          Mô Phỏng Phân Bổ 6 Hũ Cho Mức Lương Của Bạn
        </h2>
        <p className="mt-2 text-pretty text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">
          Kéo thanh trượt hoặc chọn mức thu nhập hàng tháng để xem WIVI chia tiền tự động như thế nào.
        </p>
      </div>

      {/* Grid: Left Controls, Right Results */}
      <div className="grid md:grid-cols-12 gap-8 items-start">
        {/* Controls Card */}
        <div className="md:col-span-5 rounded-2xl border border-neutral-700/70 bg-neutral-900/80 p-6 sm:p-8 backdrop-blur-md shadow-xl">
          <h3 className="text-lg font-bold text-neutral-100 mb-2">
            Thu nhập hàng tháng
          </h3>
          <div className="text-3xl sm:text-4xl font-extrabold text-sky-400 mb-6">
            {formatVND(income)}
          </div>

          {/* Quick Presets */}
          <div className="mb-6">
            <span className="text-xs text-neutral-400 font-medium block mb-2">
              Chọn nhanh thu nhập:
            </span>
            <div className="grid grid-cols-2 gap-2">
              {presets.map((preset, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setIncome(preset.value)}
                  className={`rounded-lg px-3 py-2 text-xs font-bold border transition duration-200 cursor-pointer ${
                    income === preset.value
                      ? 'bg-blue-600 text-white border-blue-500'
                      : 'bg-neutral-800 text-neutral-300 border-neutral-700 hover:bg-neutral-750'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* Slider */}
          <div className="mb-6">
            <div className="flex justify-between text-xs text-neutral-400 mb-2">
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
              className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>

          <div className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800 text-xs text-neutral-400 space-y-2">
            <div className="flex items-center gap-2 text-neutral-200 font-semibold">
              <CheckCircle2 className="size-4 text-sky-400" />
              <span>Kỷ luật tài chính tự động 100%</span>
            </div>
            <p className="leading-relaxed">
              Ngay khi có biến động số dư lương, WIVI tự động cập nhật số dư cho cả 6 hũ để bạn biết chính xác giới hạn chi tiêu từng ngày.
            </p>
          </div>

          <div className="mt-6">
            <PrimaryCTA title="Áp Dụng Công Thức Này Ngay" url="#download" className="w-full" />
          </div>
        </div>

        {/* 6 Jars Result Cards */}
        <div className="md:col-span-7 grid sm:grid-cols-2 gap-3.5">
          {jars.map((jar, index) => (
            <div
              key={index}
              className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 hover:border-neutral-700 transition duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className={`size-2.5 rounded-full ${jar.color}`}></span>
                  <span className="text-xs font-bold text-neutral-200 uppercase">
                    {jar.name} ({jar.code})
                  </span>
                </div>
                <span className="rounded-md bg-neutral-800 px-2 py-0.5 text-[11px] font-bold text-neutral-300">
                  {jar.percent}%
                </span>
              </div>
              <div className={`text-xl font-bold  mb-1`}>
                {formatVND(jar.amount)}
              </div>
              <div className="text-[11px] text-neutral-400 leading-snug">
                {jar.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
