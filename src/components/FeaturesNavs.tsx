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
      heading: "Phương Pháp Hũ T. Harv Eker Tự Động",
      content:
        "Không cần tính nhẩm chia lương thủ công. Nhập số tiền thu nhập, WIVI tự động chia đều vào 6 quỹ thông minh theo đúng tỷ lệ vàng.",
      icon: <Layers className="size-6 text-sky-400" />,
      previewTitle: "Mô hình phân bổ Hũ Thông Minh",
      previewBadge: "Tự Động Phân Bổ",
      previewContent: (
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-slate-800 text-sm">
                Thiết Yếu (NEC)
              </span>
            </div>
            <span className="font-bold text-slate-900 text-sm">55%</span>
          </div>
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-slate-800 text-sm">
                Tự Do Tài Chính (FFA)
              </span>
            </div>
            <span className="font-bold text-slate-900 text-sm">10%</span>
          </div>
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-slate-800 text-sm">
                Tiết Kiệm Dài Hạn (LTSS)
              </span>
            </div>
            <span className="font-bold text-slate-900 text-sm">10%</span>
          </div>
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-slate-800 text-sm">
                Phát Triển Bản Thân (EDU)
              </span>
            </div>
            <span className="font-bold text-slate-900 text-sm">10%</span>
          </div>
        </div>
      ),
    },
    {
      id: "tab-2",
      heading: "AI OCR Nhận Diện Hoá Đơn Trong 2 Giây",
      content:
        "Chụp ảnh hoá đơn bằng camera. Mô hình AI thị giác bóc tách danh mục, thuế VAT, thời gian và khớp trực tiếp vào hũ chi tiêu tương ứng.",
      icon: <Scan className="size-6 text-blue-600" />,
      previewTitle: "Trích Xuất Hoá Đơn Bằng AI OCR",
      previewBadge: "Xử Lý Nhanh 2.1s",
      previewContent: (
        <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 text-xs space-y-2.5">
          <div className="flex justify-between items-center pb-2 border-b border-slate-200">
            <span className="text-slate-500">Địa điểm phát hiện:</span>
            <span className="font-semibold text-slate-800">
              Highlands Coffee Landmark
            </span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-slate-200">
            <span className="text-slate-500">Số tiền thanh toán:</span>
            <span className="font-bold text-blue-600 text-sm">115.000 đ</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-slate-200">
            <span className="text-slate-500">Hũ chỉ định:</span>
            <span className="font-semibold text-blue-700  px-2 py-0.5 rounded">
              Hưởng Thụ (PLAY - 10%)
            </span>
          </div>
          <div className="flex justify-between items-center pt-1 text-[11px] text-emerald-600">
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
      icon: <Target className="size-6 text-indigo-600" />,
      previewTitle: "Kế Hoạch & Chuỗi Kỷ Luật Chi Tiêu",
      previewBadge: "Mục Tiêu Ước Mơ",
      previewContent: (
        <div className="space-y-3 text-xs">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex justify-between font-semibold text-slate-800 mb-1">
              <span>Du lịch Nhật Bản</span>
              <span className="text-blue-600 font-bold">
                28.500.000 / 35.000.000đ
              </span>
            </div>
            <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden mt-2">
              <div className="h-full bg-blue-600 rounded-full w-[81%]"></div>
            </div>
            <div className="mt-2 flex justify-between text-[11px] text-slate-500">
              <span>81%</span>
              <span className="text-blue-600 font-medium">Còn 2 tháng</span>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 text-slate-700">
            <div>
              <div className="font-bold text-slate-900">
                Chuỗi Kỷ Luật: 24 Ngày Liên Tiếp
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
      <div className="relative p-5 sm:p-10 md:p-14 rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-slate-50/70">
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-16">
          {/* Section Heading & Tab List */}
          <div className="mb-8 lg:col-span-6 lg:mb-0">
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-snug">
              Cá nhân hoá cùng <span className="text-blue-600">WIVI</span> để
              kiểm soát dòng tiền tối ưu
            </h2>
            <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-slate-600 leading-relaxed">
              Mỗi tính năng đều được tối ưu hoá theo phương pháp khoa học, giúp
              bạn loại bỏ stress và tạo lập thói quen kỷ luật tự nhiên.
            </p>

            {/* Tab Navigation */}
            <nav className="mt-5 sm:mt-8 grid gap-2.5 sm:gap-3" aria-label="Tabs">
              {tabs.map((tab, index) => {
                const isActive = activeTab === index;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(index)}
                    className={`flex items-start text-start p-3 sm:p-5 rounded-xl sm:rounded-2xl transition duration-300 border cursor-pointer ${
                      isActive
                        ? "bg-white border-blue-500/50 ring-1 ring-blue-500/20 shadow-xs"
                        : "bg-white/60 border-slate-200/70 hover:bg-white hover:border-slate-300"
                    }`}
                  >
                    <span className="ms-2.5 sm:ms-4 grow">
                      <span
                        className={`block text-sm sm:text-lg font-bold transition ${
                          isActive ? "text-blue-600" : "text-slate-800"
                        }`}
                      >
                        {tab.heading}
                      </span>
                      <span className="mt-1 block text-xs sm:text-sm text-slate-500 leading-relaxed">
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
            <div className="relative rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between pb-3 sm:pb-4 mb-4 sm:mb-6 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-blue-600 animate-ping"></span>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-lg">
                    {tabs[activeTab].previewTitle}
                  </h3>
                </div>
              </div>

              {tabs[activeTab].previewContent}

              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span></span>
                <a
                  href="#calculator"
                  className="font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
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
