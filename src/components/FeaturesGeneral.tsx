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
      heading: "Tự Động Hoá Hũ Tài Chính",
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
      <div className="relative mb-10 overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-gradient-to-br from-white via-slate-50/80 to-blue-50/30 p-5 sm:p-8 md:p-10">
        <div className="grid md:grid-cols-12 gap-6 sm:gap-8 items-center">
          <div className="md:col-span-7">
            <h3 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug sm:leading-tight">
              Quản lý tài chính không còn là gánh nặng tính toán
            </h3>
            <p className="mt-2.5 sm:mt-3 text-slate-600 text-xs sm:text-base leading-relaxed">
              Trước đây bạn phải ghi nhớ từng khoản chi hoặc vật lộn với bảng
              tính Excel phức tạp. Với WIVI, mọi thứ diễn ra tự động trong vài
              giây, trả lại cho bạn sự thảnh thơi và kỷ luật vững vàng.
            </p>
            <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-4 text-[11px] sm:text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <span>
                  Không cần kiến thức kế toán • Tiết kiệm 45 phút mỗi tuần • Bảo
                  mật tuyệt đối trên thiết bị
                </span>
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3 sm:mb-4">
                <div className="text-xs font-semibold text-slate-700">
                  Tổng quan tháng 09
                </div>
                
              </div>
              <div className="space-y-4 sm:space-y-5 text-xs">
                <div>
                  <div className="flex flex-col xs:flex-row xs:justify-between text-slate-700 mb-1 gap-0.5 text-[11px] sm:text-xs">
                    <span>Hũ Thiết Yếu (55%)</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full w-[68%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col xs:flex-row xs:justify-between text-slate-700 mb-1 gap-0.5 text-[11px] sm:text-xs">
                    <span>Hũ Tự Do Tài Chính (10%)</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-[100%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col xs:flex-row xs:justify-between text-slate-700 mb-1 gap-0.5 text-[11px] sm:text-xs">
                    <span>Hũ Hưởng Thụ (10%)</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-sky-500 rounded-full w-[72%]"></div>
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
          <h2 className="text-2xl font-bold text-balance text-slate-900 md:text-3xl lg:text-4xl">
            Trụ Cột Công Nghệ Kiến Tạo Kỷ Luật
          </h2>
          <p className="mt-3 text-pretty text-slate-600 md:mt-4 text-sm sm:text-base leading-relaxed">
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
