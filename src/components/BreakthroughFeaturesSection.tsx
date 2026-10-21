import React, { useState } from "react";
import {
  Layers,
  Scan,
  Bot,
  Flame,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Award,
  Zap,
} from "lucide-react";

export const BreakthroughFeaturesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const features = [
    {
      id: "dynamic-jars",
      icon: Layers,
      badge: "Linh hoạt tối đa",
      title: "Phương pháp 6 Hũ Tài Chính Động — Linh hoạt theo chính bạn",
      subtitle: "Không rập khuôn máy móc",
      description:
        "Hệ thống hũ của WIVI cho phép bạn tự do thêm các hũ riêng biệt (Tiền nuôi thú cưng, Tiền học thêm, Tiền phụng dưỡng) và tự động cân đối ngân sách theo từng chu kỳ lương thực tế.",
      highlights: [
        "Tự do thêm bớt hũ cá nhân hoá không giới hạn",
        "Tự động chia tiền ngay khi nhận thông báo lương",
        "Cảnh báo hạn mức thông minh cho từng danh mục",
        "Linh hoạt điều chỉnh tỷ lệ % theo từng giai đoạn đời sống",
      ],
      previewType: "jars",
    },
    {
      id: "ai-ocr",
      icon: Scan,
      badge: "AI Vision 1 Giây",
      title: "Quét Hóa Đơn OCR — 1 Chạm Nhận Diện Hũ",
      subtitle: "Bóc tách tức thì, nói không với gõ tay",
      description:
        "Chụp hóa đơn ăn uống, mua sắm hay chuyển khoản ngân hàng — Trợ lý WIVI tự động đọc tổng tiền, phân tích mặt hàng và rót thẳng vào đúng hũ chi tiêu tương ứng. Không cần gõ tay.",
      highlights: [
        "Quét camera hoặc tải ảnh bill từ thư viện",
        "Tự động phân tách thuế VAT, phí dịch vụ",
        "Khớp chính xác hũ chi tiêu tương ứng (Độ chính xác 99.4%)",
        "Xử lý siêu tốc trung bình chỉ 0.8 đến 2.1 giây",
      ],
      previewType: "ocr",
    },
    {
      id: "ai-advisor",
      icon: Bot,
      badge: "AI Co-pilot 24/7",
      title: "Trợ Lý AI WIVI — \"Cố Vấn Tài Chính Bỏ Túi\"",
      subtitle: "Bảo vệ kỷ luật, cảnh báo trước khi bội chi",
      description:
        "Trợ lý AI phân tích tốc độ 'đốt tiền' (Burn Rate) mỗi ngày, cảnh báo kịp thời trước khi một hũ rơi vào vùng đỏ nguy hiểm, và tái cấu trúc dòng tiền giúp bạn luôn chi tiêu an toàn đến ngày nhận lương kế tiếp.",
      highlights: [
        "Đo lường Burn Rate & Ngân sách tiêu an toàn mỗi ngày",
        "Cảnh báo chủ động khi hũ chạm mốc 75% - 85%",
        "Gợi ý tái cân đối dòng tiền thông minh",
        "Không phán xét, luôn đồng hành vì mục tiêu tương lai",
      ],
      previewType: "advisor",
    },
    {
      id: "streak-discipline",
      icon: Flame,
      badge: "Game hoá thói quen",
      title: "Điểm Kỷ Luật & Chuỗi Ngày Streak",
      subtitle: "Biến quản lý tiền bạc thành niềm vui mỗi ngày",
      description:
        "Biến việc quản lý tiền bạc thành một trò chơi thú vị. Duy trì chuỗi ngày ghi chép kỷ luật để nhận huy hiệu và thấu hiểu sức khỏe tài chính của chính mình qua từng tuần.",
      highlights: [
        "Chuỗi Streak liên tục kích hoạt tinh thần kỷ luật",
        "Mở khoá hệ thống huy hiệu tài chính độc quyền",
        "Chỉ số Sức khoẻ Tài chính (Financial Health Score)",
        "Biểu đồ nhịp điệu chi tiêu 52 tuần trực quan",
      ],
      previewType: "streak",
    },
  ];

  const current = features[activeTab];

  return (
    <section
      id="features"
      className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] border-t border-slate-200 overflow-hidden text-slate-900"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold tracking-widest uppercase mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Trụ Cột Công Nghệ WIVI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 leading-tight">
            4 Tính Năng Đột Phá <br />
            <span className="text-[#0284c7]">
              Đưa Bạn Đến Tự Do Tài Chính
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
            Không còn vật lộn với bảng tính Excel hay nỗi âu lo mỗi cuối tháng. WIVI kết hợp trí tuệ nhân tạo và phương pháp 6 hũ động giúp bạn kiểm soát trọn vẹn dòng tiền một cách nhẹ nhàng.
          </p>
        </div>

        {/* Tab Selector Pill Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 max-w-5xl mx-auto">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={feat.id}
                onClick={() => setActiveTab(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                  isActive
                    ? "bg-[#0284c7] text-white border-[#0284c7] shadow-lg shadow-sky-500/25 scale-[1.02]"
                    : "bg-white border-slate-200 text-slate-700 hover:border-sky-300 hover:text-sky-700 shadow-xs"
                }`}
              >
                <div className="flex items-center justify-between mb-2.5">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? "bg-white text-[#0284c7]" : "bg-sky-50 text-sky-600 group-hover:bg-sky-100"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    0{idx + 1}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-bold leading-snug line-clamp-2">
                  {feat.title.split("—")[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Feature Showcase Box - Clean White & Solid Ocean Blue */}
        <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Copy & Bullet Points */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold">
                <Zap className="w-3.5 h-3.5 text-sky-600" />
                <span>{current.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {current.title}
              </h3>

              <p className="text-[#0284c7] font-bold text-sm sm:text-base">
                {current.subtitle}
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                {current.description}
              </p>

              {/* Highlights Check List */}
              <div className="space-y-3 pt-2">
                {current.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium p-2.5 rounded-xl bg-[#f0f7ff] border border-sky-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <a
                  href="#download"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-sm transition-all shadow-md shadow-sky-500/25 active:scale-95 cursor-pointer"
                >
                  Trải nghiệm tính năng này
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Clean White/Ocean Blue Mockup Preview */}
            <div className="lg:col-span-6">
              {current.previewType === "jars" && (
                <div className="p-6 rounded-2xl bg-[#f0f7ff] border border-sky-200 shadow-md space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-sky-200">
                    <div className="text-xs font-bold text-sky-900 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Phân Bổ Thu Nhập Thực Tế (25.000.000 ₫)
                    </div>
                    <span className="text-[11px] px-2.5 py-1 rounded-md bg-white text-sky-800 font-bold border border-sky-200 shadow-2xs">
                      Chu kỳ Lương Tháng
                    </span>
                  </div>

                  {/* Jars Grid */}
                  <div className="grid grid-cols-2 gap-2.5 text-xs">
                    {[
                      { name: "Thiết yếu (NEC)", pct: "55%", amt: "13.750.000 ₫", color: "bg-sky-600" },
                      { name: "Tự do tài chính (FFA)", pct: "10%", amt: "2.500.000 ₫", color: "bg-emerald-600" },
                      { name: "Tiết kiệm dài hạn (LTSS)", pct: "10%", amt: "2.500.000 ₫", color: "bg-teal-600" },
                      { name: "Phát triển bản thân (EDU)", pct: "10%", amt: "2.500.000 ₫", color: "bg-indigo-600" },
                      { name: "Hưởng thụ (PLAY)", pct: "10%", amt: "2.500.000 ₫", color: "bg-amber-600" },
                      { name: "Cho đi (GIVE)", pct: "5%", amt: "1.250.000 ₫", color: "bg-rose-600" },
                    ].map((j, i) => (
                      <div key={i} className="p-3 rounded-xl bg-white border border-sky-100 shadow-xs">
                        <div className="flex justify-between items-center text-slate-600 font-bold mb-1">
                          <span className="truncate">{j.name}</span>
                          <span className="text-[#0284c7] font-mono font-bold">{j.pct}</span>
                        </div>
                        <div className="text-slate-900 font-black">{j.amt}</div>
                        <div className="h-1.5 w-full bg-slate-100 rounded-full mt-2 overflow-hidden">
                          <div className={`h-full ${j.color} rounded-full`} style={{ width: j.pct }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Dynamic Custom Jars Badges */}
                  <div className="pt-2">
                    <div className="text-xs text-slate-600 mb-2 font-bold">Hũ Tùy Biến Thêm Mới:</div>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="px-3 py-1 rounded-lg bg-white border border-sky-200 text-sky-800 font-bold shadow-2xs">
                        🐾 Hũ Thú Cưng (500k/tháng)
                      </span>
                      <span className="px-3 py-1 rounded-lg bg-white border border-teal-200 text-teal-800 font-bold shadow-2xs">
                        📚 Khóa Học IELTS (1.5 Tr/tháng)
                      </span>
                      <span className="px-3 py-1 rounded-lg bg-white border border-purple-200 text-purple-800 font-bold shadow-2xs">
                        👵 Quỹ Phụng Dưỡng Cha Mẹ
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {current.previewType === "ocr" && (
                <div className="p-6 rounded-2xl bg-[#f0f7ff] border border-sky-200 shadow-md space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-sky-200 text-xs">
                    <span className="font-bold text-sky-900 uppercase tracking-wider">
                      Mô Phỏng AI Vision Quét Hoá Đơn
                    </span>
                    <span className="text-emerald-700 font-bold flex items-center gap-1.5 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      Nhận diện 0.8s (99.4%)
                    </span>
                  </div>

                  {/* Simulated Scanner View */}
                  <div className="relative rounded-xl overflow-hidden bg-white p-5 border border-slate-200 text-xs space-y-3 shadow-sm">
                    <div className="flex justify-between items-start pb-2 border-b border-dashed border-slate-300">
                      <div>
                        <div className="font-bold text-slate-900 text-sm">HIGHLANDS COFFEE</div>
                        <div className="text-xs text-slate-500">Landmark 81 · 15:42 14/10/2026</div>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 text-xs font-bold">
                        ĐÃ BÓC TÁCH
                      </span>
                    </div>

                    <div className="space-y-1.5 text-slate-700 font-medium">
                      <div className="flex justify-between">
                        <span>2x Freeze Trà Xanh (Size L)</span>
                        <span className="font-bold text-slate-900">130.000 ₫</span>
                      </div>
                      <div className="flex justify-between">
                        <span>1x Bánh Mousse Cacao</span>
                        <span className="font-bold text-slate-900">45.000 ₫</span>
                      </div>
                      <div className="flex justify-between text-slate-500 text-xs">
                        <span>Thuế VAT 8%</span>
                        <span>14.000 ₫</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-200 flex justify-between items-center">
                      <span className="font-bold text-slate-700">TỔNG TIỀN THANH TOÁN:</span>
                      <span className="font-black text-[#0284c7] text-base font-mono">189.000 ₫</span>
                    </div>

                    {/* Auto-Jar routing tag */}
                    <div className="p-3 rounded-lg bg-[#f0f7ff] border border-sky-200 flex items-center justify-between text-xs">
                      <span className="text-slate-700 font-semibold">Rót vào hũ tự động:</span>
                      <span className="font-bold text-white bg-[#0284c7] px-3 py-1 rounded-md shadow-xs">
                        ☕ Hũ Hưởng Thụ & Giải Trí (PLAY)
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {current.previewType === "advisor" && (
                <div className="p-6 rounded-2xl bg-[#f0f7ff] border border-sky-200 shadow-md space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-sky-200 text-xs">
                    <span className="font-bold text-sky-900 uppercase tracking-wider">
                      Trợ Lý AI Phân Tích Burn Rate
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-300">
                      CẢNH BÁO BỘI CHI SỚM
                    </span>
                  </div>

                  {/* AI Metric Cards */}
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <div className="text-slate-500 text-xs mb-1 font-semibold">Tốc độ tiêu (Burn Rate)</div>
                      <div className="text-lg font-black text-amber-600 font-mono">385.000 ₫ / ngày</div>
                      <div className="text-xs text-rose-600 mt-1 flex items-center gap-1 font-bold">
                        <TrendingUp className="w-3.5 h-3.5" /> Nhanh hơn 22% dự kiến
                      </div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <div className="text-slate-500 text-xs mb-1 font-semibold">Mức tiêu an toàn mới</div>
                      <div className="text-lg font-black text-emerald-600 font-mono">210.000 ₫ / ngày</div>
                      <div className="text-xs text-slate-500 mt-1 font-medium">Đủ an tâm đến ngày 05/11</div>
                    </div>
                  </div>

                  {/* AI Message Bubble */}
                  <div className="p-4 rounded-xl bg-white border border-sky-200 shadow-sm flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0284c7] text-white flex items-center justify-center shrink-0 font-bold text-xs shadow-xs">
                      AI
                    </div>
                    <div className="text-xs space-y-2">
                      <p className="text-slate-700 leading-relaxed font-medium">
                        <strong className="text-[#0284c7]">Cố vấn WIVI nhắc bạn:</strong> "Hũ Hưởng thụ (PLAY) của bạn đã đạt 82% hạn mức tháng. Nếu giảm 1 ly trà sữa mỗi tuần, bạn vẫn dư sức đi xem phim cuối tuần mà không lo cạn túi!"
                      </p>
                      <button className="text-xs font-bold text-[#0284c7] hover:underline cursor-pointer">
                        Bấm để tái cấu trúc hạn mức 1-chạm →
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {current.previewType === "streak" && (
                <div className="p-6 rounded-2xl bg-[#f0f7ff] border border-sky-200 shadow-md space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-sky-200 text-xs">
                    <span className="font-bold text-sky-900 uppercase tracking-wider">
                      Chuỗi Kỷ Luật & Điểm Sức Khoẻ
                    </span>
                    <span className="text-amber-800 font-bold flex items-center gap-1.5 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300">
                      <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
                      Chuỗi 28 Ngày Liên Tiếp
                    </span>
                  </div>

                  {/* Level & XP */}
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="flex justify-between items-center text-xs mb-2">
                      <span className="font-bold text-slate-900 flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-[#0284c7]" /> Cấp 5: Bậc Thầy Kỷ Luật Tài Chính
                      </span>
                      <span className="text-[#0284c7] font-bold font-mono">890 / 1000 XP</span>
                    </div>
                    <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#0284c7] rounded-full w-[89%]" />
                    </div>
                  </div>

                  {/* Badges showcase */}
                  <div className="grid grid-cols-3 gap-2.5 text-center text-xs">
                    <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <div className="text-2xl mb-1">🔥</div>
                      <div className="font-bold text-slate-900 text-xs">Kỷ Luật Thép</div>
                      <div className="text-xs text-slate-500">28 ngày streak</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <div className="text-2xl mb-1">📸</div>
                      <div className="font-bold text-slate-900 text-xs">Thần Đèn OCR</div>
                      <div className="text-xs text-slate-500">50 bill bóc tách</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <div className="text-2xl mb-1">🛡️</div>
                      <div className="font-bold text-slate-900 text-xs">Quỹ An Toàn</div>
                      <div className="text-xs text-slate-500">Đạt mốc 3 tháng</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreakthroughFeaturesSection;
