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
  AlertTriangle,
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
      className="relative py-14 sm:py-18 px-4 sm:px-6 lg:px-8 bg-[#071322] border-t border-slate-800/70 overflow-hidden"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-1/3 w-[650px] h-[450px] bg-sky-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-teal-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/25 text-sky-300 text-xs font-semibold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Trụ Cột Công Nghệ WIVI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-5 leading-tight">
            4 Tính Năng Đột Phá <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">
              Đưa Bạn Đến Tự Do Tài Chính
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Không còn vật lộn với bảng tính Excel hay nỗi âu lo mỗi cuối tháng. WIVI kết hợp trí tuệ nhân tạo và phương pháp 6 hũ động giúp bạn kiểm soát trọn vẹn dòng tiền một cách nhẹ nhàng.
          </p>
        </div>

        {/* Tab Selector Pill Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 mb-12 max-w-5xl mx-auto">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={feat.id}
                onClick={() => setActiveTab(idx)}
                className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between group ${
                  isActive
                    ? "bg-sky-500/15 border-sky-400 shadow-[0_0_25px_rgba(56,189,248,0.25)] text-white"
                    : "bg-[#0b1b2d]/70 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? "bg-sky-400 text-slate-950" : "bg-slate-800 text-slate-400 group-hover:text-sky-300"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                      isActive ? "bg-sky-400/20 text-sky-300 border border-sky-400/30" : "text-slate-500"
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

        {/* Active Feature Showcase Box */}
        <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-b from-[#0b1a2c] via-[#091624] to-[#07111c] border border-sky-800/40 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Copy & Bullet Points */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-semibold">
                <Zap className="w-3.5 h-3.5" />
                <span>{current.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                {current.title}
              </h3>

              <p className="text-sky-300 font-medium text-sm sm:text-base">
                {current.subtitle}
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {current.description}
              </p>

              {/* Highlights Check List */}
              <div className="space-y-3 pt-2">
                {current.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href="#download"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-teal-400 text-slate-950 font-bold text-sm hover:from-sky-400 hover:to-teal-300 transition-all shadow-lg shadow-sky-500/20 active:scale-95"
                >
                  Trải nghiệm tính năng này
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Dynamic Interactive Mockup Preview */}
            <div className="lg:col-span-6">
              {current.previewType === "jars" && (
                <div className="p-6 rounded-2xl bg-[#0e2136] border border-sky-700/40 shadow-xl space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-sky-800/40">
                    <div className="text-xs font-bold text-sky-300 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Phân Bổ Thu Nhập Thực Tế (25.000.000 ₫)
                    </div>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-sky-900/60 text-sky-200 border border-sky-700/50">
                      Chu kỳ Lương Tháng
                    </span>
                  </div>

                  {/* Jars Grid */}
                  <div className="grid grid-cols-2 gap-2.5 text-xs">
                    {[
                      { name: "Thiết yếu (NEC)", pct: "55%", amt: "13.750.000 ₫", color: "bg-blue-500" },
                      { name: "Tự do tài chính (FFA)", pct: "10%", amt: "2.500.000 ₫", color: "bg-emerald-500" },
                      { name: "Tiết kiệm dài hạn (LTSS)", pct: "10%", amt: "2.500.000 ₫", color: "bg-teal-500" },
                      { name: "Phát triển bản thân (EDU)", pct: "10%", amt: "2.500.000 ₫", color: "bg-indigo-500" },
                      { name: "Hưởng thụ (PLAY)", pct: "10%", amt: "2.500.000 ₫", color: "bg-purple-500" },
                      { name: "Cho đi (GIVE)", pct: "5%", amt: "1.250.000 ₫", color: "bg-rose-500" },
                    ].map((j, i) => (
                      <div key={i} className="p-3 rounded-xl bg-slate-900/70 border border-slate-700/50">
                        <div className="flex justify-between items-center text-slate-300 font-semibold mb-1">
                          <span className="truncate">{j.name}</span>
                          <span className="text-sky-300 font-bold">{j.pct}</span>
                        </div>
                        <div className="text-white font-bold">{j.amt}</div>
                        <div className="h-1.5 w-full bg-slate-800 rounded-full mt-2 overflow-hidden">
                          <div className={`h-full ${j.color} rounded-full`} style={{ width: j.pct }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Dynamic Custom Jars Badges */}
                  <div className="pt-2">
                    <div className="text-[11px] text-slate-400 mb-2 font-medium">Hũ Tùy Biến Thêm Mới:</div>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="px-2.5 py-1 rounded-lg bg-sky-950 border border-sky-500/40 text-sky-200">
                        🐾 Hũ Thú Cưng (500k/tháng)
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-teal-950 border border-teal-500/40 text-teal-200">
                        📚 Khóa Học IELTS (1.5 Tr/tháng)
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-purple-950 border border-purple-500/40 text-purple-200">
                        👵 Quỹ Phụng Dưỡng Cha Mẹ
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {current.previewType === "ocr" && (
                <div className="p-6 rounded-2xl bg-[#0e2136] border border-sky-700/40 shadow-xl space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-sky-800/40 text-xs">
                    <span className="font-bold text-sky-300 uppercase tracking-wider">
                      Mô Phỏng AI Vision Quét Hoá Đơn
                    </span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      Nhận diện 0.8s (99.4%)
                    </span>
                  </div>

                  {/* Simulated Scanner View */}
                  <div className="relative rounded-xl overflow-hidden bg-slate-950 p-5 border border-slate-700/70 text-xs space-y-3">
                    <div className="flex justify-between items-start pb-2 border-b border-dashed border-slate-700">
                      <div>
                        <div className="font-bold text-white text-sm">HIGHLANDS COFFEE</div>
                        <div className="text-[11px] text-slate-400">Landmark 81 · 15:42 14/10/2026</div>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                        ĐÃ BÓC TÁCH
                      </span>
                    </div>

                    <div className="space-y-1.5 text-slate-300">
                      <div className="flex justify-between">
                        <span>2x Freeze Trà Xanh (Size L)</span>
                        <span className="font-semibold text-white">130.000 ₫</span>
                      </div>
                      <div className="flex justify-between">
                        <span>1x Bánh Mousse Cacao</span>
                        <span className="font-semibold text-white">45.000 ₫</span>
                      </div>
                      <div className="flex justify-between text-slate-500 text-[11px]">
                        <span>Thuế VAT 8%</span>
                        <span>14.000 ₫</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-700 flex justify-between items-center">
                      <span className="font-bold text-slate-300">TỔNG TIỀN THANH TOÁN:</span>
                      <span className="font-extrabold text-sky-400 text-base">189.000 ₫</span>
                    </div>

                    {/* Auto-Jar routing tag */}
                    <div className="p-3 rounded-lg bg-sky-950/80 border border-sky-500/40 flex items-center justify-between text-xs">
                      <span className="text-slate-300">Rót vào hũ tự động:</span>
                      <span className="font-bold text-sky-300 bg-sky-900/60 px-2.5 py-1 rounded-md">
                        ☕ Hũ Hưởng Thụ & Giải Trí (PLAY)
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {current.previewType === "advisor" && (
                <div className="p-6 rounded-2xl bg-[#0e2136] border border-sky-700/40 shadow-xl space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-sky-800/40 text-xs">
                    <span className="font-bold text-sky-300 uppercase tracking-wider">
                      Trợ Lý AI Phân Tích Burn Rate
                    </span>
                    <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-bold">
                      CẢNH BÁO BỘI CHI SỚM
                    </span>
                  </div>

                  {/* AI Metric Cards */}
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/60">
                      <div className="text-slate-400 text-[11px] mb-1">Tốc độ tiêu (Burn Rate)</div>
                      <div className="text-lg font-bold text-amber-400">385.000 ₫ / ngày</div>
                      <div className="text-[10px] text-rose-400 mt-1 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" /> Nhanh hơn 22% dự kiến
                      </div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/60">
                      <div className="text-slate-400 text-[11px] mb-1">Mức tiêu an toàn mới</div>
                      <div className="text-lg font-bold text-emerald-400">210.000 ₫ / ngày</div>
                      <div className="text-[10px] text-slate-400 mt-1">Đủ an tâm đến ngày 05/11</div>
                    </div>
                  </div>

                  {/* AI Message Bubble */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-sky-950/90 to-teal-950/70 border border-sky-500/40 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-sky-500/20 border border-sky-400 flex items-center justify-center shrink-0 text-sky-300 font-bold text-xs">
                      AI
                    </div>
                    <div className="text-xs space-y-2">
                      <p className="text-slate-200 leading-relaxed">
                        <strong className="text-sky-300">Cố vấn WIVI nhắc bạn:</strong> "Hũ Hưởng thụ (PLAY) của bạn đã đạt 82% hạn mức tháng. Nếu giảm 1 ly trà sữa mỗi tuần, bạn vẫn dư sức đi xem phim cuối tuần mà không lo cạn túi!"
                      </p>
                      <button className="text-[11px] font-bold text-sky-300 hover:text-white underline">
                        Bấm để tái cấu trúc hạn mức 1-chạm →
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {current.previewType === "streak" && (
                <div className="p-6 rounded-2xl bg-[#0e2136] border border-sky-700/40 shadow-xl space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-sky-800/40 text-xs">
                    <span className="font-bold text-sky-300 uppercase tracking-wider">
                      Chuỗi Kỷ Luật & Điểm Sức Khoẻ
                    </span>
                    <span className="text-amber-400 font-bold flex items-center gap-1">
                      <Flame className="w-4 h-4 fill-amber-400" />
                      Chuỗi 28 Ngày Liên Tiếp
                    </span>
                  </div>

                  {/* Level & XP */}
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700/60">
                    <div className="flex justify-between items-center text-xs mb-2">
                      <span className="font-bold text-white flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-sky-400" /> Cấp 5: Bậc Thầy Kỷ Luật Tài Chính
                      </span>
                      <span className="text-sky-300 font-bold">890 / 1000 XP</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-sky-400 to-teal-300 rounded-full w-[89%]" />
                    </div>
                  </div>

                  {/* Badges showcase */}
                  <div className="grid grid-cols-3 gap-2.5 text-center text-xs">
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                      <div className="text-xl mb-1">🔥</div>
                      <div className="font-bold text-white text-[11px]">Kỷ Luật Thép</div>
                      <div className="text-[10px] text-slate-400">28 ngày streak</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                      <div className="text-xl mb-1">📸</div>
                      <div className="font-bold text-white text-[11px]">Thần Đèn OCR</div>
                      <div className="text-[10px] text-slate-400">50 bill bóc tách</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                      <div className="text-xl mb-1">🛡️</div>
                      <div className="font-bold text-white text-[11px]">Quỹ An Toàn</div>
                      <div className="text-[10px] text-slate-400">Đạt mốc 3 tháng</div>
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
