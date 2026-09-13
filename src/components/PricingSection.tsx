import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SecondaryCTA } from './ui/SecondaryCTA';

export const PricingSection: React.FC = () => {
  const starterFeatures = [
    'Quản lý phân bổ 6 hũ tài chính tiêu chuẩn',
    'Nhập chi tiêu thủ công không giới hạn',
    '30 lượt quét hoá đơn AI OCR mỗi tháng',
    'Biểu đồ thống kê dòng tiền cơ bản',
    'Sao lưu dữ liệu an toàn trên thiết bị',
  ];

  const proFeatures = [
    'Toàn bộ tính năng của gói Cơ Bản',
    'Không giới hạn lượt quét hoá đơn AI OCR 2s',
    'Tự động đồng bộ SMS biến động số dư ngân hàng',
    'Cảnh báo bội chi thời gian thực & dự báo số dư',
    'Quản trị đa mục tiêu ước mơ & quỹ khẩn cấp',
    'Đồng bộ Cloud đa thiết bị (iOS, Android, Web)',
    'Hỗ trợ ưu tiên 1:1 từ chuyên gia tài chính',
  ];

  return (
    <section id="pricing" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      {/* Section Heading */}
      <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
        <h2 className="text-2xl font-bold tracking-tight text-balance text-neutral-800 md:text-4xl md:leading-tight dark:text-neutral-100">
          Minh Bạch & Tiết Kiệm Tối Đa
        </h2>
        <p className="mt-2 text-pretty text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">
          Đầu tư một cốc cà phê mỗi tháng để tiết kiệm hàng triệu đồng và thảnh thơi cả đời.
        </p>
      </div>

      {/* Pricing Cards Container (ScrewFast Signature 2-tier design) */}
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-0 max-w-5xl mx-auto">
        {/* Starter Kit Card */}
        <div className="w-full rounded-2xl sm:rounded-r-none border border-neutral-700/60 sm:border-r-0 bg-neutral-900/90 p-6 sm:w-1/2 sm:p-8 lg:w-5/12 shadow-xl backdrop-blur-md">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-neutral-100 sm:text-2xl">
              Gói Cơ Bản (Starter)
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Khởi đầu hành trình rèn luyện kỷ luật tài chính cá nhân.
            </p>
          </div>

          <div className="mb-6 flex items-baseline gap-1">
            <span className="text-4xl font-extrabold text-neutral-100">0 đ</span>
            <span className="text-sm font-medium text-neutral-400">/ miễn phí trọn đời</span>
          </div>

          <ul className="mb-8 space-y-3 text-xs sm:text-sm text-neutral-300">
            {starterFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="size-4 shrink-0 text-neutral-400 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href="#download"
            className="block w-full rounded-lg bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 px-6 py-3 text-center text-sm font-bold text-neutral-200 transition duration-200"
          >
            Bắt Đầu Miễn Phí
          </a>
        </div>

        {/* Pro Ocean Blue Gradient Featured Card (Matching Wivi Logo Royal & Deep Blue) */}
        <div className="w-full rounded-2xl bg-gradient-to-tr from-[#1e3a8a] via-[#2563eb] to-[#0284c7] p-6 sm:w-1/2 sm:p-8 lg:w-7/12 shadow-2xl shadow-blue-500/25 z-10 border border-blue-400/30">
          <div className="mb-4 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                WIVI Kỷ Luật Pro
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 mt-0.5">
                Mở khoá toàn bộ sức mạnh AI và quản trị tài chính chuyên sâu.
              </p>
            </div>

            
          </div>

          <div className="mb-6 flex items-baseline gap-1">
            <span className="text-4xl sm:text-5xl font-extrabold text-white">
              49.000 đ
            </span>
            <span className="text-sm font-semibold text-blue-100">
              / tháng (hoặc 499.000đ trọn đời)
            </span>
          </div>

          <ul className="mb-8 space-y-3 text-xs sm:text-sm text-blue-50">
            {proFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="size-4 shrink-0 text-sky-300 mt-0.5" />
                <span className="font-medium">{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href="#download"
            className="block w-full rounded-lg bg-neutral-900/90 hover:bg-neutral-950 border border-neutral-800 px-6 py-3.5 text-center text-sm font-bold text-white transition duration-300 shadow-lg"
          >
            Nâng Cấp Gói Pro Ngay (Dùng thử 14 ngày)
          </a>
        </div>
      </div>

      {/* Enterprise / Family Note */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-center md:mt-10">
        <p className="text-xs sm:text-sm text-neutral-400">
          Bạn cần gói tài chính cho cả gia đình hoặc đội nhóm kinh doanh?
        </p>
        <SecondaryCTA title="Liên hệ tư vấn viên" url="#contact" />
      </div>
    </section>
  );
};
