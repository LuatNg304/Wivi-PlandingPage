import React from 'react';
import { StatsGrid } from './ui/StatsGrid';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const stats = [
    {
      count: '50k+',
      description: 'Người dùng duy trì chuỗi kỷ luật liên tục trên 30 ngày',
    },
    {
      count: '35%',
      description: 'Tỷ lệ tăng trưởng trung bình quỹ tiết kiệm sau 3 tháng sử dụng',
    },
    {
      count: '2 Giây',
      description: 'Thời gian AI OCR bóc tách và ghi nhận 1 hoá đơn thanh toán',
    },
    {
      count: '4.9★',
      description: 'Đánh giá hài lòng trên kho ứng dụng Apple Store & Google Play',
    },
  ];

  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="lg:grid lg:grid-cols-12 lg:items-center lg:justify-between lg:gap-16">
        {/* Left Column: Testimonial Quote */}
        <div className="lg:col-span-5 lg:col-start-1 mb-10 lg:mb-0">
          <div className="mb-6">
            <h2 className="mb-3 text-3xl font-bold text-neutral-800 lg:text-4xl dark:text-neutral-100">
              Kiểm Soát Tài Chính Đột Phá
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
              Trải nghiệm thực tế từ những người đã chuyển từ áp lực cuối tháng sang thảnh thơi trọn vẹn nhờ phương pháp 6 hũ WIVI.
            </p>
          </div>

          {/* Testimonial Card */}
          <div className="rounded-2xl border border-neutral-700/60 bg-neutral-900/60 p-6 sm:p-8 backdrop-blur-md relative shadow-xl">
            <Quote className="size-8 text-sky-400/40 mb-4" />
            <blockquote className="text-base sm:text-lg text-neutral-200 italic leading-relaxed">
              "Trước đây mỗi lần mở ví ra là mình thấy stress vì không biết tiền đã bay đi đâu. Dùng WIVI được 2 tháng, tính năng quét hoá đơn 2s và tự chia 6 hũ đã giúp mình tiết kiệm được 35% lương mà không phải kiêng khem khổ sở!"
            </blockquote>

            <div className="mt-6 flex items-center gap-x-4">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250&h=250"
                alt="Nguyễn Thuỳ Dung"
                className="size-12 rounded-full ring-2 ring-blue-500/60 object-cover"
              />
              <div>
                <div className="font-bold text-neutral-100 text-sm sm:text-base">
                  Nguyễn Thuỳ Dung
                </div>
                <div className="text-xs sm:text-sm text-neutral-400">
                  Senior Product Designer • TP. Hồ Chí Minh
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: 2x2 Stats Grid with divide borders (ScrewFast Signature) */}
        <div className="lg:col-span-6 lg:col-end-13">
          <div className="rounded-2xl border border-neutral-700/60 bg-neutral-900/50 backdrop-blur-md overflow-hidden shadow-2xl">
            <ul className="grid grid-cols-2 divide-x-2 divide-y-2 divide-neutral-200 dark:divide-neutral-800">
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
