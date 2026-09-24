import React from "react";
import { StatsGrid } from "./ui/StatsGrid";
import { Quote } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  const stats = [
    {
      count: "Mỗi ngày",
      description: "Theo dõi chi tiêu và giữ thói quen tiết kiệm đều đặn hơn",
    },
    {
      count: "Tự động",
      description:
        "AI phân loại giao dịch và gợi ý cách chia hũ theo nhu cầu thực tế",
    },
    {
      count: "1 App",
      description: "Quản lý chi tiêu, tiết kiệm và mục tiêu tài chính trong một nơi",
    },
    {
      count: "Linh hoạt",
      description:
        "Tùy chỉnh chiến lược tài chính theo phong cách sống và mục tiêu cá nhân",
    },
  ];

  return (
    <section
      id="testimonials"
      className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
    >
      <div className="lg:grid lg:grid-cols-12 lg:items-center lg:justify-between lg:gap-16">
        {/* Left Column: Testimonial Quote */}
        <div className="lg:col-span-5 lg:col-start-1 mb-10 lg:mb-0">
          <div className="mb-6">
            <h2 className="mb-3 text-3xl font-bold text-slate-900 lg:text-4xl">
              Kiểm Soát Tài Chính Đột Phá
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Trải nghiệm thực tế từ những người đã chuyển từ áp lực cuối tháng
              sang thảnh thơi trọn vẹn nhờ phương pháp Hũ WIVI.
            </p>
          </div>

          {/* Testimonial Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 relative">
            <Quote className="size-8 text-blue-500/30 mb-4" />
            <blockquote className="text-base sm:text-lg text-slate-700 italic leading-relaxed">
              "Trước đây mỗi lần mở ví ra là mình thấy stress vì không biết tiền
              đã bay đi đâu. Dùng WIVI được 2 tháng, tính năng quét hoá đơn 2s
              và tự chia Hũ đã giúp mình tiết kiệm được 35% lương mà không phải
              kiêng khem khổ sở!"
            </blockquote>

            <div className="mt-6 flex items-center gap-x-4">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250&h=250"
                alt="Nguyễn Thuỳ Dung"
                className="size-12 rounded-full ring-2 ring-blue-500/40 object-cover"
              />
              <div>
                <div className="font-bold text-slate-900 text-sm sm:text-base">
                  Nguyễn Thuỳ Dung
                </div>
                <div className="text-xs sm:text-sm text-slate-500">
                  Senior Product Designer • TP. Hồ Chí Minh
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: 2x2 Stats Grid with divide borders (ScrewFast Signature) */}
        <div className="lg:col-span-6 lg:col-end-13">
          <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
            <ul className="grid grid-cols-2 divide-x divide-y divide-slate-200">
              {stats.map((stat, index) => (
                <StatsGrid
                  key={index}
                  count={stat.count}
                  description={stat.description}
                  index={index}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
