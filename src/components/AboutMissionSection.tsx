import React, { useState } from "react";
import { Quote, CheckCircle2, Sparkles } from "lucide-react";
import ASSETS from "../assets";

export const AboutMissionSection: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<number>(0);

  const teamPhotos = [
    {
      src: ASSETS.team.showcase1,
      caption: "Đội ngũ WIVI tại sự kiện giới thiệu sản phẩm lần đầu",
      tag: "Showcase WIVI 2025",
    },
    {
      src: ASSETS.team.showcase2,
      caption: "Lan tỏa tinh thần Smart Finance For Smart Generation",
      tag: "Trải nghiệm thực tế",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── Emotional Hook — Pain Points Grid ─────────────────────── */}
        <div className="mb-14 sm:mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold tracking-widest uppercase mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Sứ mệnh & Câu chuyện</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold tracking-tight text-slate-900 mb-4 leading-tight">
              Tiền bạc không nên là gánh nặng{" "}
              <br className="hidden sm:block" />
              <span className="text-[#0284c7]">
                khiến bạn thức trắng đêm.
              </span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
              Có bao giờ bạn rơi vào những cảm giác này?
            </p>
          </div>

          {/* Pain Points — asymmetric 3-column with Clean White & Ocean Blue */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {[
              {
                num: "01",
                text: "Đầu tháng nhận lương tự thưởng vài món, rồi giật mình giữa tháng tài khoản đã cạn?",
                accent: "border-sky-200/80 bg-white hover:border-sky-400",
                numColor: "text-sky-600",
              },
              {
                num: "02",
                text: "Muốn mua nhà, đổi xe, hoặc có quỹ phòng thân cho ba mẹ — nhưng nhìn lại tích lũy vẫn gần như bằng không?",
                accent: "border-sky-200/80 bg-white hover:border-sky-400",
                numColor: "text-sky-600",
              },
              {
                num: "03",
                text: "Đã thử nhiều app ghi chép, nhưng chỉ được 3 ngày là bỏ cuộc vì quá mệt mỏi với việc nhập từng ly cà phê, ổ bánh mì?",
                accent: "border-sky-200/80 bg-white hover:border-sky-400",
                numColor: "text-sky-600",
              },
            ].map((item) => (
              <div
                key={item.num}
                className={`p-6 sm:p-7 rounded-2xl border shadow-sm hover:shadow-md ${item.accent} group hover:-translate-y-1 transition-all duration-300`}
              >
                <div className={`text-4xl font-black mb-3 ${item.numColor} opacity-75 group-hover:opacity-100 transition-opacity font-mono`}>
                  {item.num}
                </div>
                <p className="text-slate-700 font-medium text-sm sm:text-base leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Solution Bridge - Clean Light Ocean Blue Flat Box */}
          <div className="max-w-3xl mx-auto text-center p-6 sm:p-7 rounded-2xl bg-[#f0f7ff] border border-sky-200 shadow-sm">
            <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
              <span className="text-[#0284c7] font-bold">WIVI ra đời để thay đổi điều đó.</span>
              {" "}Tài chính cá nhân không phải bóp nghẹt chi tiêu hay sống khắc khổ. Đó là nghệ thuật biết rõ từng đồng tiền đang phục vụ ước mơ nào của bạn —
              để bạn được thoải mái tận hưởng hôm nay mà tương lai vẫn vững vàng.
            </p>
          </div>
        </div>

        {/* ── Founder Story — Split Screen ──────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14 sm:mb-16">
          {/* Left: Founder Quote Card */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-start gap-4">
              <div className="shrink-0 mt-1 p-2.5 rounded-2xl bg-sky-100 border border-sky-300 text-sky-700">
                <Quote className="w-5 h-5 text-sky-700" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                "Tôi từng kiếm ra tiền, nhưng vẫn luôn{" "}
                <span className="text-[#0284c7]">sợ hãi về tương lai.</span>"
              </h3>
            </div>

            <div className="space-y-3.5 text-slate-600 text-sm sm:text-base leading-relaxed pl-14 border-l-2 border-sky-400">
              <p>
                "Nhiều năm trước, tôi chăm chỉ làm lụng với thu nhập khá, nhưng tài khoản luôn bấp bênh và không có lấy một bệ đỡ tài chính khi biến cố xảy đến. Những ứng dụng cũ chỉ là <strong className="text-slate-900 font-semibold">bảng tính vô cảm</strong> — báo vượt ngân sách mà chẳng cho tôi biết ngày mai phải sống thế nào.
              </p>
              <p>
                Tôi tạo ra <strong className="text-[#0284c7] font-bold">WIVI</strong> như một trợ lý AI mang trái tim nhân văn: <strong className="text-slate-900 font-semibold">không phán xét</strong>, đồng hành cùng bạn tích lũy quỹ an toàn, vượt qua áp lực và tự tin chạm tới cột mốc tự do tài chính."
              </p>
              <p className="text-xs sm:text-sm text-slate-500 font-medium italic pt-1">
                — Lời chia sẻ từ người sáng lập WIVI
              </p>
            </div>

            {/* Core promise checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 pl-14">
              {[
                { title: "Không phán xét", desc: "Thấu hiểu thay vì tạo thêm áp lực chi tiêu" },
                { title: "Hướng tới ước mơ", desc: "Cá nhân hóa lộ trình tích lũy theo mục tiêu bạn muốn" },
                { title: "Bảo mật tuyệt đối", desc: "Dữ liệu tài chính an toàn trên máy bạn" },
                { title: "Tự động 100%", desc: "Quét hóa đơn tức thì, tạm biệt nhập tay" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50/80 border border-slate-200/70 hover:border-sky-300 hover:bg-sky-50/30 transition-all duration-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm leading-snug">
                    <span className="font-bold text-slate-900">{item.title}: </span>
                    <span className="text-slate-600 font-normal">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Team Photo Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-sm relative group">
              <div className="relative rounded-[2rem] overflow-hidden bg-white border-2 border-sky-200 shadow-xl">
                {/* Photo */}
                <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
                  <img
                    key={teamPhotos[activePhoto].src}
                    src={teamPhotos[activePhoto].src}
                    alt={teamPhotos[activePhoto].caption}
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-sky-800 text-[11px] font-bold shadow-sm">
                    {teamPhotos[activePhoto].tag}
                  </div>
                </div>

                {/* Caption & Switcher */}
                <div className="p-5 bg-white border-t border-slate-100">
                  <p className="text-sm text-slate-700 font-semibold mb-4 leading-snug">
                    {teamPhotos[activePhoto].caption}
                  </p>
                  <div className="flex gap-2">
                    {teamPhotos.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActivePhoto(idx)}
                        aria-label={`Photo ${idx + 1}`}
                        className={`flex-1 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                          activePhoto === idx ? "bg-[#0284c7]" : "bg-slate-200 hover:bg-slate-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>

        {/* ── Stats Milestone Strip - Clean Ocean Blue & White ──────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl bg-[#f0f7ff] border border-sky-200 shadow-sm">
          {[
            { val: "50.000+", label: "Người dùng mục tiêu" },
            { val: "2.1s", label: "Tốc độ quét AI OCR" },
            { val: "99.4%", label: "Độ chính xác phân bổ" },
            { val: "100%", label: "Tự chủ dòng tiền" },
          ].map((stat, i) => (
            <div key={i} className="text-center py-2">
              <div className="text-2xl sm:text-3xl font-black text-[#0284c7] mb-1 tracking-tight font-mono">
                {stat.val}
              </div>
              <div className="text-xs sm:text-sm text-slate-600 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
