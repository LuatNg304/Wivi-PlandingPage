import React, { useState } from "react";
import {
  Layers,
  Scan,
  Target,
  Check,
  Sparkles,
  Shield,
  ArrowRight,
} from "lucide-react";

interface TabItem {
  id: string;
  heading: string;
  content: string;
  icon: React.ReactNode;
  previewTitle: string;
  previewBadge: string;
  previewContent: React.ReactNode;
}

export const FeaturesNavs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs: TabItem[] = [
    {
      id: "tab-1",
      heading: "Phương Pháp 6 Hũ T. Harv Eker Tự Động",
      content:
        "Không cần tính nhẩm chia lương thủ công. Nhập số tiền thu nhập, WIVI tự động chia đều vào 6 quỹ thông minh theo đúng tỷ lệ vàng.",
      icon: <Layers className="size-6 text-sky-400" />,
      previewTitle: "Mô hình phân bổ 6 Hũ Thông Minh",
      previewBadge: "Tự Động Phân Bổ",
      previewContent: (
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-900 border border-neutral-800">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-neutral-200 text-sm">
                Thiết Yếu (NEC)
              </span>
            </div>
            <span className="font-bold text-neutral-100 text-sm">55%</span>
          </div>
          <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-900 border border-neutral-800">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-neutral-200 text-sm">
                Tự Do Tài Chính (FFA)
              </span>
            </div>
            <span className="font-bold text-neutral-100 text-sm">10%</span>
          </div>
          <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-900 border border-neutral-800">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-neutral-200 text-sm">
                Tiết Kiệm Dài Hạn (LTSS)
              </span>
            </div>
            <span className="font-bold text-neutral-100 text-sm">10%</span>
          </div>
          <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-900 border border-neutral-800">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-neutral-200 text-sm">
                Phát Triển Bản Thân (EDU)
              </span>
            </div>
            <span className="font-bold text-neutral-100 text-sm">10%</span>
          </div>
        </div>
      ),
    },
    {
      id: "tab-2",
      heading: "AI OCR Nhận Diện Hoá Đơn Trong 2 Giây",
      content:
        "Chụp ảnh hoá đơn bằng camera. Mô hình AI thị giác bóc tách danh mục, thuế VAT, thời gian và khớp trực tiếp vào hũ chi tiêu tương ứng.",
      icon: <Scan className="size-6 text-cyan-400" />,
      previewTitle: "Trích Xuất Hoá Đơn Bằng AI OCR",
      previewBadge: "Xử Lý Nhanh 2.1s",
      previewContent: (
        <div className="rounded-xl border border-dashed border-neutral-700 bg-neutral-900/90 p-4 text-xs space-y-2.5">
          <div className="flex justify-between items-center pb-2 border-b border-neutral-800">
            <span className="text-neutral-400">Địa điểm phát hiện:</span>
            <span className="font-semibold text-neutral-200">
              Highlands Coffee Landmark
            </span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-neutral-800">
            <span className="text-neutral-400">Số tiền thanh toán:</span>
            <span className="font-bold text-white-400 text-sm">115.000 đ</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-neutral-800">
            <span className="text-neutral-400">Hũ chỉ định:</span>
            <span className="font-semibold text-white-400 bg-white-400/10 px-2 py-0.5 rounded">
              Hưởng Thụ (PLAY - 10%)
            </span>
          </div>
          <div className="flex justify-between items-center pt-1 text-[11px] text-white-400">
            <span>● Độ tin cậy OCR AI:</span>
            <span className="font-bold">99.4%</span>
          </div>
        </div>
      ),
    },
    {
      id: "tab-3",
      heading: "Chuỗi Kỷ Luật & Quản Trị Mục Tiêu Ước Mơ",
      content:
        "Đặt mục tiêu mua nhà, mua xe, du lịch. WIVI tự động tính toán thời gian hoàn thành dựa trên tốc độ tích luỹ thực tế của bạn.",
      icon: <Target className="size-6 text-blue-400" />,
      previewTitle: "Kế Hoạch & Chuỗi Kỷ Luật Chi Tiêu",
      previewBadge: "Mục Tiêu Ước Mơ",
      previewContent: (
        <div className="space-y-3 text-xs">
          <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800">
            <div className="flex justify-between font-semibold text-neutral-200 mb-1">
              <span>Du lịch Nhật Bản</span>
              <span className="text-sky-400">28.500.000 / 35.000.000đ</span>
            </div>
            <div className="h-2 w-full rounded-full bg-neutral-800 overflow-hidden mt-2">
              <div className="h-full bg-sky-500 rounded-full w-[81%]"></div>
            </div>
            <div className="mt-2 flex justify-between text-[11px] text-neutral-400">
              <span>Đạt 81% mục tiêu</span>
              <span className="text-white-400 font-medium">
                Còn 2 tháng theo lộ trình
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900/60 border border-neutral-800 text-neutral-300">
            
            <div>
              <div className="font-bold text-neutral-200">
                Chuỗi Kỷ Luật: 24 Ngày Liên Tiếp 🔥
              </div>
              <div className="text-[11px] text-neutral-400">
                Bạn chưa từng vượt ngân sách ngày trong tháng này!
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="jars"
      className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
    >
      <div className="relative p-6 sm:p-10 md:p-14 rounded-3xl border border-neutral-700/60 bg-neutral-900/40 backdrop-blur-md">
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-16">
          {/* Section Heading & Tab List */}
          <div className="mb-10 lg:col-span-6 lg:mb-0">
            <h2 className="text-2xl font-bold text-neutral-800 sm:text-3xl lg:text-4xl dark:text-neutral-100">
              Cá nhân hoá cùng <span className="text-sky-400">WIVI</span> để
              kiểm soát dòng tiền tối ưu
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Mỗi tính năng đều được tối ưu hoá theo phương pháp khoa học, giúp
              bạn loại bỏ stress và tạo lập thói quen kỷ luật tự nhiên.
            </p>

            {/* Tab Navigation */}
            <nav className="mt-6 sm:mt-8 grid gap-3" aria-label="Tabs">
              {tabs.map((tab, index) => {
                const isActive = activeTab === index;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(index)}
                    className={`flex items-start text-start p-4 sm:p-5 rounded-xl transition duration-300 border cursor-pointer ${
                      isActive
                        ? "bg-neutral-800/90 border-blue-500/40 shadow-md shadow-black/30"
                        : "bg-neutral-900/40 border-transparent hover:bg-neutral-800/50 hover:border-neutral-800"
                    }`}
                  >
                    <span className="shrink-0 mt-0.5">{tab.icon}</span>
                    <span className="ms-4 grow">
                      <span
                        className={`block text-base sm:text-lg font-bold transition ${
                          isActive
                            ? "text-sky-400 dark:text-sky-300"
                            : "text-neutral-800 dark:text-neutral-200"
                        }`}
                      >
                        {tab.heading}
                      </span>
                      <span className="mt-1 block text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {tab.content}
                      </span>
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Tab Content Display Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl border border-neutral-700/80 bg-neutral-950/90 p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-sky-400 animate-ping"></span>
                  <h3 className="font-bold text-white-400 text-base sm:text-lg">
                    {tabs[activeTab].previewTitle}
                  </h3>
                </div>
                <span className="rounded-full bg-white-500/15 border border-white-500/30 px-3 py-1 text-xs font-bold text-white-300">
                  {tabs[activeTab].previewBadge}
                </span>
              </div>

              {tabs[activeTab].previewContent}

              <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                <span>Trải nghiệm trực tiếp trên iPhone / Android</span>
                <a
                  href="#calculator"
                  className="font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1"
                >
                  Thử tính năng mô phỏng <ArrowRight className="size-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
