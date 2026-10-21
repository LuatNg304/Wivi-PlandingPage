import React, { useState, useMemo, useEffect, useRef } from "react";
import {
  Check,
  ChevronDown,
  Sparkles,
  ArrowRight,
  Quote,
  Star,
  CheckCircle2,
  ShieldCheck,
  Zap,
  HelpCircle,
  TrendingUp,
  Clock,
  Award,
} from "lucide-react";

// Format currency VND chuẩn Việt Nam
export const formatVND = (amount: number) => {
  return (
    new Intl.NumberFormat("vi-VN", {
      maximumFractionDigits: 0,
    }).format(Math.round(amount)) + " ₫"
  );
};

// Hook animation kích hoạt khi scroll tới phần tử
export const useScrollReveal = <T extends HTMLElement = HTMLElement>(threshold = 0.12) => {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
      setIsVisible(true);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible] as const;
};

// ── 1. CALCULATOR SIMULATOR (Bộ Giả Lập 6 Hũ) ──
export const MaroonCalculatorSection: React.FC = () => {
  const [income, setIncome] = useState<number>(25000000);

  const presets = [
    { label: "15 Triệu", val: 15000000 },
    { label: "25 Triệu", val: 25000000 },
    { label: "40 Triệu", val: 40000000 },
    { label: "60 Triệu", val: 60000000 },
  ];

  const jars = useMemo(
    () => [
      {
        code: "NEC",
        name: "Chi Tiêu Thiết Yếu",
        percent: 55,
        amount: income * 0.55,
        desc: "Tiền thuê nhà, sinh hoạt, ăn uống, điện nước, xăng xe",
        tag: "Cố định & Sống còn",
        color: "#38bdf8",
      },
      {
        code: "FFA",
        name: "Tự Do Tài Chính",
        percent: 10,
        amount: income * 0.1,
        desc: "Đầu tư sinh lời dài hạn, tích luỹ cổ phiếu, chứng chỉ quỹ",
        tag: "Tài sản tương lai",
        color: "#34d399",
      },
      {
        code: "LTSS",
        name: "Tiết Kiệm Dài Hạn",
        percent: 10,
        amount: income * 0.1,
        desc: "Quỹ khẩn cấp 6 tháng, mua sắm tài sản lớn, nhà cửa",
        tag: "Dự phòng an toàn",
        color: "#60a5fa",
      },
      {
        code: "EDU",
        name: "Phát Triển Bản Thân",
        percent: 10,
        amount: income * 0.1,
        desc: "Khóa đào tạo chuyên sâu, sách vở, nâng cao kỹ năng",
        tag: "Đầu tư vào chính mình",
        color: "#a78bfa",
      },
      {
        code: "PLAY",
        name: "Hưởng Thụ Cuộc Sống",
        percent: 10,
        amount: income * 0.1,
        desc: "Du lịch, cà phê gặp gỡ bạn bè, mua sắm giải trí",
        tag: "Thưởng cho nỗ lực",
        color: "#fb923c",
      },
      {
        code: "GIVE",
        name: "Cho Đi & Giúp Đỡ",
        percent: 5,
        amount: income * 0.05,
        desc: "Thiện nguyện, biếu gia đình, tương thân tương ái",
        tag: "Gắn kết yêu thương",
        color: "#f472b6",
      },
    ],
    [income]
  );

  return (
    <section id="calculator" className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 bg-sky-500/10 text-sky-400 border border-sky-400/20">
          <Sparkles className="size-3.5" /> Mô Phỏng Dòng Tiền
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#e0f2fe] leading-tight">
          Thu nhập về, <span className="text-[#38bdf8] font-extrabold">tiền tự chảy</span> vào 6 hũ
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
          Kéo chọn mức lương của bạn để thấy WIVI tự động chia tiền theo phương pháp khoa học T. Harv Eker.
        </p>
      </div>

      {/* Simulator Control Card */}
      <div className="rounded-3xl p-6 sm:p-10 border border-sky-400/20 bg-[#07162c]/90 backdrop-blur-xl shadow-2xl mb-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-sky-400/10">
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-slate-400">Thu nhập hàng tháng</span>
            <div className="text-3xl sm:text-5xl font-extrabold text-[#e0f2fe] tracking-tight mt-1">
              {formatVND(income)}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {presets.map((p) => (
              <button
                key={p.val}
                type="button"
                onClick={() => setIncome(p.val)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  income === p.val
                    ? "bg-[#0284c7] text-white shadow-lg shadow-sky-500/25 scale-105"
                    : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Range Slider */}
        <div className="mt-8">
          <div className="flex justify-between text-xs text-slate-400 mb-2 font-mono">
            <span>5.000.000 ₫</span>
            <span>50.000.000 ₫</span>
            <span>100.000.000 ₫</span>
          </div>
          <input
            type="range"
            min={5000000}
            max={100000000}
            step={1000000}
            value={income}
            onChange={(e) => setIncome(Number(e.target.value))}
            className="w-full h-2 rounded-lg bg-sky-950 appearance-none cursor-pointer accent-[#38bdf8]"
          />
        </div>
      </div>

      {/* 6 Jars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {jars.map((jar) => (
          <div
            key={jar.code}
            className="group relative rounded-2xl p-5 sm:p-6 border border-sky-400/15 bg-[#0b213f]/80 hover:bg-[#0b213f] transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/30 shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span
                  className="px-2.5 py-0.5 rounded-md text-[11px] font-extrabold tracking-wide"
                  style={{ backgroundColor: `${jar.color}20`, color: jar.color }}
                >
                  {jar.code} ({jar.percent}%)
                </span>
                <span className="text-[11px] text-slate-400">{jar.tag}</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#e0f2fe] mb-1">{jar.name}</h3>
              <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">{jar.desc}</p>
            </div>
            <div className="mt-5 pt-3 border-t border-white/5 flex items-baseline justify-between">
              <span className="text-[11px] text-slate-400">Hạn mức:</span>
              <span className="text-lg sm:text-xl font-extrabold" style={{ color: jar.color }}>
                {formatVND(jar.amount)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Box */}
      <div className="mt-8 p-5 sm:p-6 rounded-2xl border border-sky-400/20 bg-sky-500/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <span className="text-xs text-[#38bdf8] font-semibold uppercase tracking-wider">Hiệu quả kỳ luật</span>
          <p className="text-sm sm:text-base text-[#e0f2fe] font-medium mt-0.5">
            Mỗi năm bạn tích lũy và đầu tư được{" "}
            <span className="font-extrabold text-[#38bdf8]">{formatVND(income * 0.2 * 12)}</span> mà vẫn thoải mái chi tiêu hàng ngày.
          </p>
        </div>
        <a
          href="#download"
          className="shrink-0 px-5 py-2.5 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-bold transition-all shadow-md shadow-sky-600/30 inline-flex items-center gap-1.5"
        >
          <span>Áp dụng ngay vào App</span>
          <ArrowRight className="size-3.5" />
        </a>
      </div>
    </section>
  );
};

// ── 2. PRICING SECTION (Bảng Giá 3 Tầng - Clean White & Ocean Blue) ──
export const MaroonPricingSection: React.FC = () => {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>(0.1);

  const plans = [
    {
      id: "starter",
      name: "Gói Cơ Bản (Starter)",
      price: "0 ₫",
      period: "Miễn phí trọn đời",
      badge: "Bắt đầu dễ dàng",
      desc: "Trải nghiệm rèn luyện kỷ luật tài chính cá nhân với đầy đủ tính năng cốt lõi.",
      highlight: false,
      features: [
        "Quản lý phân bổ 6 Hũ tài chính tiêu chuẩn",
        "Nhập thu chi không giới hạn",
        "30 lượt quét hoá đơn AI OCR 2s / tháng",
        "Biểu đồ thống kê dòng tiền cơ bản",
        "Lưu trữ dữ liệu bảo mật trên thiết bị",
      ],
      btnText: "Bắt Đầu Miễn Phí",
      btnClass: "bg-slate-100 hover:bg-slate-200 border border-slate-200",
      btnStyle: { color: "#1e293b", backgroundColor: "#f1f5f9" },
    },
    {
      id: "premium",
      name: "WIVI Kỷ Luật Premium",
      price: "29.000 ₫",
      period: "mỗi tháng",
      badge: "Phổ Biến Nhất",
      desc: "Tự động hóa hoàn toàn với sức mạnh AI OCR không giới hạn và cảnh báo bội chi.",
      highlight: true,
      features: [
        "Toàn bộ đặc quyền của gói Starter",
        "Không giới hạn lượt quét hoá đơn AI OCR 2s",
        "Cảnh báo bội chi & dự báo số dư thời gian thực",
        "Quản trị đa mục tiêu ước mơ & quỹ khẩn cấp",
        "Đồng bộ Cloud đa thiết bị (iOS, Android, Web)",
      ],
      btnText: "Chọn Gói Premium",
      btnClass: "bg-white hover:bg-sky-50 font-black shadow-md",
      btnStyle: { color: "#0284c7", backgroundColor: "#ffffff" },
    },
    {
      id: "pro",
      name: "WIVI Kỷ Luật Pro",
      price: "59.000 ₫",
      period: "mỗi tháng",
      badge: "Gói Đột Phá Khuyên Dùng",
      desc: "Giải pháp toàn diện nhất với Trợ lý AI Cố vấn chuyên sâu 24/7 và đồng bộ ngân hàng.",
      highlight: false,
      features: [
        "Toàn bộ đặc quyền của gói Premium",
        "Trợ lý AI Cố vấn tài chính chuyên sâu 24/7",
        "Đồng bộ tài khoản ngân hàng & ví điện tử",
        "Quản trị tài chính gia đình & đa thành viên",
        "Hỗ trợ ưu tiên 1:1 từ chuyên gia tài chính",
      ],
      btnText: "Dùng thử Pro 14 ngày",
      btnClass: "bg-slate-900 hover:bg-slate-800 font-bold shadow-sm",
      btnStyle: { color: "#ffffff", backgroundColor: "#0f172a" },
    },
  ];

  return (
    <section ref={sectionRef} id="pricing" className="relative py-14 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Background Ambient Glow */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[250px] sm:h-[350px] bg-sky-100/60 rounded-full blur-3xl pointer-events-none -z-10 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Header with Scroll Reveal */}
      <div
        className={`text-center max-w-2xl mx-auto mb-10 sm:mb-14 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold tracking-widest uppercase mb-3 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-sky-600" />
          <span>Bảng Giá Minh Bạch</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Đầu tư một cốc cà phê, <br />
          <span className="text-[#0284c7]">tiết kiệm hàng triệu đồng</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed px-2">
          Chi phí minh bạch theo tháng. Không phí ẩn. Hủy bất cứ lúc nào chỉ với một chạm.
        </p>
      </div>

      {/* Cards Grid with Staggered Scroll Reveal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-8 items-stretch pt-2 sm:pt-4">
        {plans.map((p, idx) => {
          const delays = ["delay-100", "delay-250", "delay-400"];
          return (
            <div
              key={p.id}
              className={`group relative rounded-3xl transition-all duration-700 ease-out flex flex-col justify-between ${
                isVisible ? `opacity-100 translate-y-0 ${delays[idx]}` : "opacity-0 translate-y-12"
              } ${
                p.highlight
                  ? "lg:-translate-y-3 hover:-translate-y-5"
                  : "hover:-translate-y-2"
              }`}
            >
              {p.highlight ? (
                <div className="w-full h-full rounded-[24px] sm:rounded-[28px] bg-gradient-to-b from-[#0284c7] via-[#0369a1] to-[#075985] text-white p-6 sm:p-8 flex flex-col justify-between relative shadow-xl shadow-sky-600/25 border-2 border-sky-300/80 overflow-hidden">
                  {/* Glowing Corner Badge */}
                  <div className="absolute top-0 right-0 px-3.5 py-1.5 rounded-bl-2xl bg-amber-400 text-slate-950 text-[10px] sm:text-[11px] font-black uppercase tracking-wider shadow-sm flex items-center gap-1">
                    <Sparkles className="size-3 text-slate-950" />
                    <span>Khuyên Dùng ★</span>
                  </div>

                  <div>
                    <div className="mb-4">
                      <span className="inline-block px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider mb-2 border border-white/20">
                        {p.badge}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-white">
                        {p.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-sky-100 mt-1 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>

                    <div className="my-5 sm:my-6 flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-white tracking-tight font-mono">
                        {p.price}
                      </span>
                      <span className="text-xs sm:text-sm text-sky-100 font-medium">/ {p.period}</span>
                    </div>

                    <ul className="space-y-3 pt-5 sm:pt-6 border-t border-white/20 text-xs sm:text-sm text-sky-50">
                      {p.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="size-4 shrink-0 mt-0.5 text-sky-200" />
                          <span className="font-medium text-white">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#download"
                    style={p.btnStyle}
                    className={`mt-6 sm:mt-8 w-full py-3.5 rounded-xl text-center text-xs sm:text-sm font-black transition-all duration-200 block cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${p.btnClass}`}
                  >
                    {p.btnText}
                  </a>
                </div>
              ) : (
                <div className="w-full h-full rounded-[24px] sm:rounded-[28px] bg-white border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-300">
                  <div>
                    <div className="mb-4">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-2 ${
                        idx === 0
                          ? "bg-slate-100 text-slate-600"
                          : "bg-sky-50 text-sky-700 border border-sky-200"
                      }`}>
                        {p.badge}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                        {p.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>

                    <div className="my-5 sm:my-6 flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-mono">
                        {p.price}
                      </span>
                      <span className="text-xs sm:text-sm text-slate-500 font-medium">/ {p.period}</span>
                    </div>

                    <ul className="space-y-3 pt-5 sm:pt-6 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
                      {p.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className={`size-4 shrink-0 mt-0.5 ${
                            idx === 0 ? "text-slate-400" : "text-[#0284c7]"
                          }`} />
                          <span className="font-medium text-slate-700">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#download"
                    style={p.btnStyle}
                    className={`mt-6 sm:mt-8 w-full py-3.5 rounded-xl text-center text-xs sm:text-sm font-bold transition-all duration-200 block cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${p.btnClass}`}
                  >
                    {p.btnText}
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

// ── 3. FAQ SECTION (Accordion Hỏi Đáp với Scroll Reveal Animation & Lọc) ──
export const MaroonFaqSection: React.FC = () => {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>(0.1);
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [category, setCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Tất cả câu hỏi" },
    { id: "jars", label: "Cơ chế 6 Hũ" },
    { id: "ai", label: "AI Bóc Tách OCR" },
    { id: "security", label: "Bảo Mật & Thiết Bị" },
  ];

  const allFaqs = [
    {
      cat: "jars",
      q: "Phương pháp Hũ tài chính trong WIVI hoạt động như thế nào?",
      a: "WIVI áp dụng nguyên lý 6 Jars System của T. Harv Eker. Mỗi khi bạn có nguồn thu nhập mới, hệ thống tự động chia theo tỷ lệ vàng: 55% Thiết yếu (NEC), 10% Tự do tài chính (FFA), 10% Tiết kiệm dài hạn (LTSS), 10% Học tập (EDU), 10% Hưởng thụ (PLAY) và 5% Cho đi (GIVE). Bạn hoàn toàn có thể tuỳ biến tỷ lệ này theo nhu cầu thực tế của mình.",
    },
    {
      cat: "ai",
      q: "Tính năng AI OCR bóc tách hoá đơn có chính xác không?",
      a: "Mô hình AI thị giác máy tính của WIVI được huấn luyện chuyên sâu trên dữ liệu hóa đơn Việt Nam (siêu thị Co.opmart, WinMart, quán Highlands Coffee, Starbucks, xăng xe, hoá đơn điện tử Vietcombank, Momo...). Tốc độ bóc tách chỉ mất 2.1 giây và độ chính xác đạt trên 99.4%.",
    },
    {
      cat: "security",
      q: "Dữ liệu tài chính cá nhân của tôi có được bảo mật an toàn không?",
      a: "Tuyệt đối an toàn. WIVI tuân thủ nguyên tắc quyền riêng tư hàng đầu: Mọi dữ liệu thu chi được mã hoá đầu cuối chuẩn AES-256 trên thiết bị của bạn. Chúng tôi không bao giờ lưu trữ mật khẩu ngân hàng, mã OTP hay bán dữ liệu cho bất kỳ bên thứ ba nào.",
    },
    {
      cat: "security",
      q: "Tôi có thể dùng WIVI trên nhiều thiết bị (iPhone, Android, Máy tính) không?",
      a: "Có. WIVI hỗ trợ đồng bộ đám mây tức thì qua Apple ID hoặc tài khoản Google. Bạn có thể ghi chép nhanh trên điện thoại khi đi cà phê và mở máy tính bảng hay máy tính để xem báo cáo dòng tiền chi tiết bất cứ lúc nào.",
    },
    {
      cat: "jars",
      q: "Nếu tôi vượt quá hạn mức của một hũ thì WIVI sẽ xử lý ra sao?",
      a: "Hệ thống sẽ gửi cảnh báo bội chi kịp thời và đề xuất giải pháp thông minh: gợi ý trích bù từ hũ Hưởng thụ (PLAY) sang hũ Thiết yếu (NEC) hoặc tự động hạ hạn mức chi tiêu an toàn của những ngày còn lại trong tháng.",
    },
  ];

  const filteredFaqs = category === "all" ? allFaqs : allFaqs.filter((f) => f.cat === category);

  return (
    <section ref={sectionRef} id="faq" className="relative py-14 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Header with Scroll Reveal */}
      <div
        className={`text-center mb-8 sm:mb-12 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold tracking-widest uppercase mb-3 shadow-xs">
          <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
          <span>Giải Đáp Thắc Mắc</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Câu hỏi <span className="text-[#0284c7]">thường gặp</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 px-2 max-w-xl mx-auto leading-relaxed">
          Giải đáp chi tiết về cơ chế 6 hũ, AI OCR và tính an toàn bảo mật của WIVI.
        </p>

        {/* Category Filter Tabs */}
        <div
          className={`mt-6 flex flex-wrap items-center justify-center gap-2 transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => {
                setCategory(c.id);
                setOpenIdx(0);
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                category === c.id
                  ? "bg-[#0284c7] text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 border border-slate-200/60"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion List with Cascading Staggered Scroll Reveal */}
      <div className="space-y-3">
        {filteredFaqs.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              style={{ transitionDelay: isVisible ? `${idx * 60 + 150}ms` : "0ms" }}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              } ${
                isOpen
                  ? "border-sky-300 bg-[#f0f7ff] shadow-sm border-l-4 border-l-[#0284c7]"
                  : "border-slate-200 bg-white hover:border-sky-200 hover:bg-slate-50/50 shadow-xs"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full text-left flex items-center justify-between gap-3 cursor-pointer transition-colors p-4 sm:p-5 min-h-[56px] sm:min-h-[64px]"
              >
                <span
                  className={`font-bold text-sm sm:text-base leading-snug transition-colors duration-200 ${
                    isOpen ? "text-[#0284c7]" : "text-slate-900"
                  }`}
                >
                  {item.q}
                </span>
                <div
                  className={`size-6 sm:size-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen ? "bg-sky-100 text-[#0284c7] rotate-180" : "bg-slate-100 text-slate-500"
                  }`}
                >
                  <ChevronDown className="size-3.5 sm:size-4" />
                </div>
              </button>

              {/* Smooth Grid-based Accordion Transition */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div
                    className="text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-sky-100 p-4 sm:p-5 pt-3 pb-5"
                  >
                    {item.a}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

// ── 4. PARTNERS MARQUEE (9 Ngân Hàng Hàng Đầu) ──
export const MaroonBankingPartners: React.FC = () => {
  const partners = [
    { name: "Vietcombank", logo: "/banks/vcb.png" },
    { name: "Techcombank", logo: "/banks/tcb.png" },
    { name: "MB Bank", logo: "/banks/mb.png" },
    { name: "VPBank", logo: "/banks/vpb.png" },
    { name: "ACB", logo: "/banks/acb.png" },
    { name: "BIDV", logo: "/banks/bidv.png" },
    { name: "TPBank", logo: "/banks/tpb.png" },
    { name: "VietinBank", logo: "/banks/icb.png" },
    { name: "Agribank", logo: "/banks/agribank.png" },
  ];

  return (
    <div className="w-full py-6 sm:py-8 overflow-hidden border-y border-[var(--mfl-glow)]/10 bg-[var(--mfl-night)]/50">
      <p className="text-center text-[11px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 sm:mb-6 px-4">
        Tương thích và hỗ trợ trích xuất từ 30+ đối tác ngân hàng & ví điện tử tại Việt Nam
      </p>
      <div className="relative w-full overflow-hidden mask-marquee-fade">
        <div className="animate-marquee-rtl flex items-center gap-3 sm:gap-6">
          {[...partners, ...partners].map((p, idx) => (
            <div
              key={idx}
              className="shrink-0 flex items-center gap-2 sm:gap-2.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white/5 border border-[var(--mfl-glow)]/15 hover:border-[var(--mfl-glow)]/40 transition-all cursor-pointer"
            >
              <img src={p.logo} alt={p.name} className="h-4 sm:h-5 w-auto object-contain brightness-95" />
              <span className="text-[11px] sm:text-xs font-bold text-[var(--mfl-cream)]">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ── 5. TESTIMONIAL SECTION (Trả Lời Phỏng Vấn Người Dùng với Scroll Reveal Animation) ──
export const MaroonTestimonialSection: React.FC = () => {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>(0.1);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const testimonials = [
    {
      id: 0,
      question: "Sau 2 tháng sử dụng WIVI, thói quen tài chính của bạn thay đổi như thế nào?",
      quote:
        "Trước đây mỗi lần mở ví ra là mình thấy stress vì không biết tiền đã bay đi đâu. Dùng WIVI được 2 tháng, tính năng quét hoá đơn 2s và tự chia Hũ đã giúp mình tiết kiệm được 35% lương mà không phải kiêng khem khổ sở!",
      author: "Nguyễn Thuỳ Dung",
      role: "Senior Product Designer",
      location: "TP. Hồ Chí Minh",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200",
      rating: 5,
      metrics: [
        { label: "Tỷ lệ tích luỹ", value: "+35%" },
        { label: "Tiết kiệm mỗi tháng", value: "8.500.000 ₫" },
      ],
      tag: "Kỷ luật tài chính nhẹ nhàng",
    },
    {
      id: 1,
      question: "Tính năng nào của WIVI khiến bạn ấn tượng và dùng nhiều nhất hàng ngày?",
      quote:
        "AI OCR bóc tách hoá đơn Co.opmart, WinMart và Highlands Coffee cực kỳ nhạy, chỉ 2 giây là xong! Nhờ đó mình chấm dứt hẳn thói quen lười ghi chép sau mỗi lần đi ăn uống hay mua sắm cùng đồng nghiệp.",
      author: "Trần Minh Quân",
      role: "Lead Software Engineer",
      location: "Hà Nội",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
      rating: 5,
      metrics: [
        { label: "Tốc độ quét AI", value: "2.1s" },
        { label: "Độ chính xác", value: "99.4%" },
      ],
      tag: "AI OCR thông minh 2s",
    },
    {
      id: 2,
      question: "Áp dụng phương pháp 6 Hũ có khiến một Freelancer cảm thấy bị gò bó không?",
      quote:
        "Hoàn toàn ngược lại, mình thảnh thơi hơn bao giờ hết! Hũ Hưởng thụ PLAY giúp mình đi du lịch không còn cảm giác tội lỗi, còn hũ FFA thì âm thầm tích luỹ giúp mình tự mua chiếc Macbook M3 sau 5 tháng.",
      author: "Lê Bảo Châu",
      role: "Freelance Content Creator",
      location: "Đà Nẵng",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200&h=200",
      rating: 5,
      metrics: [
        { label: "Thời gian đạt mục tiêu", value: "5 tháng" },
        { label: "Bội chi tháng", value: "0 ₫" },
      ],
      tag: "Tự do tài chính đích thực",
    },
  ];

  const current = testimonials[activeIdx];

  const handleSelect = (idx: number) => {
    if (idx === activeIdx) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveIdx(idx);
      setIsFading(false);
    }, 180);
  };

  return (
    <section ref={sectionRef} id="testimonials" className="relative py-14 sm:py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Section Header with Scroll Reveal */}
      <div
        className={`text-center mb-8 sm:mb-10 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Người dùng thật, <span className="text-[#0284c7]">kết quả thật</span>
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-400 px-2">
          Lắng nghe chia sẻ trực tiếp từ những người trẻ đã tìm thấy sự thảnh thơi tài chính cùng WIVI.
        </p>

        {/* Interactive User Avatar Selector Tabs with Scroll Reveal */}
        <div
          className={`mt-6 sm:mt-8 flex items-center justify-center gap-2 sm:gap-4 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {testimonials.map((t, idx) => {
            const isSelected = activeIdx === idx;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => handleSelect(idx)}
                className={`group flex items-center gap-2 sm:gap-2.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-sky-500/20 border-2 border-sky-400 shadow-lg shadow-sky-950/60 scale-105"
                    : "bg-white/5 border border-white/10 hover:border-sky-400/40 hover:bg-white/10 opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={t.avatar}
                  alt={t.author}
                  className={`size-7 sm:size-8 rounded-full object-cover ring-2 transition-all ${
                    isSelected ? "ring-sky-400 scale-110" : "ring-white/20"
                  }`}
                />
                <div className="text-left hidden sm:block">
                  <div
                    className={`text-xs font-bold leading-tight transition-colors ${
                      isSelected ? "text-sky-300" : "text-slate-300 group-hover:text-white"
                    }`}
                  >
                    {t.author}
                  </div>
                  <div className="text-[10px] text-slate-400 leading-tight">{t.role.split(" ")[0]}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Animated Card with Scroll Reveal */}
      <div
        className={`rounded-2xl sm:rounded-3xl p-5 sm:p-12 border border-sky-400/30 bg-gradient-to-br from-[#07162c] via-[#091726] to-[#040e1a] shadow-2xl relative overflow-hidden transition-all duration-1000 delay-300 ease-out ${
          isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-[0.96]"
        }`}
      >
        {/* Floating Background Quote Symbol with Soft Float */}
        <Quote className="size-16 sm:size-24 text-sky-400/10 absolute -top-2 -left-2 sm:-top-4 sm:-left-4 pointer-events-none animate-pulse" />

        {/* Dynamic Animated Content Container */}
        <div
          className={`relative z-10 transition-all duration-200 ${
            isFading ? "opacity-0 translate-y-2 scale-[0.99]" : "opacity-100 translate-y-0 scale-100"
          }`}
        >
          {/* Interview Question */}
          <div className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold text-sky-400/90 flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 text-[10px] sm:text-[11px] font-extrabold uppercase shrink-0">
              Phỏng vấn
            </span>
            <span className="leading-snug">"{current.question}"</span>
          </div>

          {/* User Answer Quote */}
          <blockquote className="text-sm sm:text-xl lg:text-2xl text-slate-100 font-medium leading-relaxed">
            "{current.quote}"
          </blockquote>

          {/* Impact Metrics Pill Row */}
          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-sky-400/15 grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-4">
            {current.metrics.map((m, mIdx) => (
              <div key={mIdx} className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-[10px] sm:text-[11px] text-slate-400">{m.label}</div>
                <div className="text-base sm:text-xl font-extrabold text-sky-400 tracking-tight mt-0.5">
                  {m.value}
                </div>
              </div>
            ))}

            <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/5 col-span-2 sm:col-span-1 flex items-center gap-2.5 sm:gap-3">
              <img
                src={current.avatar}
                alt={current.author}
                className="size-8 sm:size-10 rounded-full ring-2 ring-sky-400/50 object-cover shrink-0"
              />
              <div className="min-w-0">
                <div className="font-bold text-xs sm:text-sm text-white truncate">{current.author}</div>
                <div className="text-[10px] text-slate-400 truncate">{current.location}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
