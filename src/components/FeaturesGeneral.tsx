import React from "react";
import { IconBlock } from "./ui/IconBlock";
import {
  Layers,
  Zap,
  Trophy,
  ShieldAlert,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export const FeaturesGeneral: React.FC = () => {
  const features = [
    {
      heading: "Tự Động Hoá 6 Hũ Tài Chính",
      content:
        "Thu nhập vừa về tài khoản, WIVI tự động chia tỷ lệ 55% Thiết yếu, 10% Tự do, 10% Đầu tư, 10% Giáo dục, 10% Hưởng thụ, 5% Cho đi.",
    },
    {
      heading: "AI OCR Vision Quét Hoá Đơn 2s",
      content:
        "Chụp hoá đơn siêu thị, ăn uống, xăng xe — công nghệ AI nhận diện tổng tiền, tên cửa hàng và tự động gắn thẻ chi tiêu chính xác.",
    },
    {
      heading: "Chuỗi Kỷ Luật & Điểm Thói Quen",
      content:
        "Xây dựng thói quen ghi chép bằng chuỗi Streak hàng ngày, mở khoá huy hiệu tài chính và nâng tầm điểm sức khoẻ tài chính cá nhân.",
    },
    {
      heading: "Dự Báo Bội Chi & Ngân Sách Ngày",
      content:
        "WIVI tính toán bạn được tiêu tối đa bao nhiêu tiền mỗi ngày để không bị thâm hụt ngân sách trước khi kỳ lương tiếp theo về.",
    },
  ];

  return (
    <section
      id="features"
      className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
    >
      {/* Featured Visual Card */}
      <div className="relative mb-10 overflow-hidden rounded-2xl sm:rounded-3xl border border-neutral-700/60 bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 p-6 sm:p-10 shadow-2xl">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white-500/10 border border-white-500/30 px-3 py-1 text-xs font-bold text-white-400 uppercase tracking-wider mb-4">
              Giải Pháp Toàn Diện
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-neutral-100 tracking-tight leading-tight">
              Quản lý tài chính không còn là gánh nặng tính toán
            </h3>
            <p className="mt-3 text-neutral-400 text-sm sm:text-base leading-relaxed">
              Trước đây bạn phải ghi nhớ từng khoản chi hoặc vật lộn với bảng
              tính Excel phức tạp. Với WIVI, mọi thứ diễn ra tự động trong vài
              giây, trả lại cho bạn sự thảnh thơi và kỷ luật vững vàng.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm text-neutral-300">
              <div className="flex items-center gap-2">
                <span>
                  Không cần kiến thức kế toán - Tiết kiệm 45 phút mỗi tuần - Bảo
                  mật tuyệt đối trên thiết bị
                </span>
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-2xl border border-neutral-700/70 bg-neutral-950/80 p-5 shadow-inner">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
                <div className="text-xs font-semibold text-neutral-300">
                  Tổng quan tháng 09
                </div>
                <div className="text-xs font-bold text-white-400 bg-white-400/10 px-2 py-0.5 rounded-full">
                  Kỷ Luật: 94/100
                </div>
              </div>
              <div className="space-y-5 text-xs">
                <div>
                  <div className="flex justify-between text-neutral-300 mb-1">
                    <span>Hũ Thiết Yếu (NEC - 55%)</span>
                    <span className="font-semibold text-sky-400">
                      11.000.000đ / 11.000.000đ
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-neutral-800 overflow-hidden">
                    <div className="h-full bg-sky-500 rounded-full w-[68%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-neutral-300 mb-1">
                    <span>Hũ Tự Do Tài Chính (FFA - 10%)</span>
                    <span className="font-semibold text-blue-400">
                      2.000.000đ
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-neutral-800 overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full w-[100%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-neutral-300 mb-1">
                    <span>Hũ Hưởng Thụ (PLAY - 10%)</span>
                    <span className="font-semibold text-cyan-400">
                      1.450.000đ / 2.000.000đ
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-neutral-800 overflow-hidden">
                    <div className="h-full bg-cyan-500 rounded-full w-[72%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Title & IconBlock Grid (ScrewFast 1/3 + 2/3 Layout) */}
      <div className="mt-8 grid gap-8 lg:mt-12 lg:grid-cols-3 lg:gap-12 items-start">
        {/* Left 1/3 Column */}
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-bold text-balance text-neutral-800 md:text-3xl lg:text-4xl dark:text-neutral-100">
            Trụ Cột Công Nghệ Kiến Tạo Kỷ Luật
          </h2>
          <p className="mt-3 text-pretty text-neutral-600 md:mt-4 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
            Chúng tôi kết hợp triết lý tài chính đã được chứng minh với công
            nghệ AI tiên tiến nhất, tạo nên trải nghiệm liền mạch và đáng tin
            cậy.
          </p>
        </div>

        {/* Right 2/3 Column: IconBlocks */}
        <div className="lg:col-span-2">
          <div className="grid gap-8 sm:grid-cols-2 md:gap-10">
            {features.map((feature, idx) => (
              <IconBlock
                key={idx}
                heading={feature.heading}
                content={feature.content}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
