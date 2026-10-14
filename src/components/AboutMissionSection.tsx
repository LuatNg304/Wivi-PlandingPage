import React, { useState } from "react";
import { Quote, Heart, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
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
      className="relative py-14 sm:py-18 px-4 sm:px-6 lg:px-8 bg-[#060f1e] border-t border-slate-800/60 overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-sky-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-emerald-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Emotional Hook — Pain Points Grid ─────────────────────── */}
        <div className="mb-14 sm:mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-300 text-xs font-medium tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sứ mệnh & Câu chuyện</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-white mb-5 leading-tight">
              Tiền bạc không nên là gánh nặng{" "}
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-300">
                khiến bạn thức trắng đêm.
              </span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Có bao giờ bạn rơi vào những cảm giác này?
            </p>
          </div>

          {/* Pain Points — asymmetric 3-column */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {[
              {
                num: "01",
                text: "Đầu tháng nhận lương tự thưởng vài món, rồi giật mình giữa tháng tài khoản đã cạn?",
                accent: "border-amber-500/30 bg-amber-500/5",
                numColor: "text-amber-400",
              },
              {
                num: "02",
                text: "Muốn mua nhà, đổi xe, hoặc có quỹ phòng thân cho ba mẹ — nhưng nhìn lại tích lũy vẫn gần như bằng không?",
                accent: "border-rose-500/30 bg-rose-500/5",
                numColor: "text-rose-400",
              },
              {
                num: "03",
                text: "Đã thử nhiều app ghi chép, nhưng chỉ được 3 ngày là bỏ cuộc vì quá mệt mỏi với việc nhập từng ly cà phê, ổ bánh mì?",
                accent: "border-purple-500/30 bg-purple-500/5",
                numColor: "text-purple-400",
              },
            ].map((item) => (
              <div
                key={item.num}
                className={`p-6 sm:p-7 rounded-3xl border backdrop-blur-sm ${item.accent} group hover:-translate-y-1 transition-all duration-300`}
              >
                <div className={`text-4xl font-black mb-4 ${item.numColor} opacity-40 group-hover:opacity-70 transition-opacity`}>
                  {item.num}
                </div>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Solution Bridge */}
          <div className="max-w-3xl mx-auto text-center p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-sky-950/50 to-[#060f1e] border border-sky-800/40">
            <p className="text-white text-sm sm:text-base leading-relaxed font-medium">
              <span className="text-sky-300 font-bold">WIVI ra đời để thay đổi điều đó.</span>
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
              <div className="shrink-0 mt-1 p-2.5 rounded-2xl bg-sky-500/15 border border-sky-400/20">
                <Quote className="w-5 h-5 text-sky-400" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                "Tôi từng kiếm ra tiền, nhưng vẫn luôn{" "}
                <span className="text-sky-300">sợ hãi về tương lai.</span>"
              </h3>
            </div>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed pl-14 border-l-2 border-sky-800/60">
              <p className="text-white font-semibold">
                "Chào bạn, tôi là người tạo nên WIVI.
              </p>
              <p>
                Nhiều năm trước, tôi cũng như phần lớn những người trẻ bước vào đời: đi làm chăm chỉ, có thu nhập khá, nhưng tài khoản ngân hàng luôn biến động thất thường. Mỗi lần có sự cố bất ngờ hay người thân đau ốm, tôi mới bàng hoàng nhận ra mình chưa hề có một bệ đỡ tài chính nào vững chắc.
              </p>
              <p>
                Tôi từng thử hàng chục ứng dụng quản lý chi tiêu. Nhưng chúng chỉ là những bảng tính vô cảm. Khi tôi lỡ chi tiêu quá tay, app chỉ báo 'vượt ngân sách' mà không cho tôi biết phải giải quyết thế nào để ngày mai tôi không phải nhịn ăn.
              </p>
              <p className="text-white font-medium">
                Đó là lý do tôi tạo ra WIVI. Chữ 'VI' trong WIVI bắt nguồn từ <span className="text-sky-300">Vị thế — Tự do — Kỷ luật Việt.</span> Tôi muốn gửi gắm vào đây một trợ lý AI thông minh mang trái tim nhân văn: không phán xét cách bạn tiêu tiền, mà thấu hiểu từng ước mơ của bạn, giúp bạn từng bước tích lũy quỹ an toàn, vượt qua áp lực nợ nần và tự tin chạm tới cột mốc tự do tài chính.
              </p>
              <p className="text-slate-400 text-sm italic">
                WIVI là món quà tôi dành tặng cho chính mình của những năm tháng chông chênh, và dành tặng cho bạn — người đang nỗ lực mỗi ngày vì một cuộc sống tốt đẹp hơn."
              </p>
            </div>

            {/* Core promise checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3 pl-14">
              {[
                "Không phán xét cách bạn tiêu tiền",
                "Thấu hiểu từng ước mơ cá nhân",
                "Bảo mật tuyệt đối — dữ liệu trên máy bạn",
                "Tự động hóa — không cần nhớ nhập tay",
              ].map((val, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Team Photo Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-sm relative group">
              {/* Glow halo */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-sky-500/25 to-teal-500/20 rounded-[2.5rem] blur-2xl opacity-70 group-hover:opacity-100 transition duration-500 pointer-events-none" />

              <div className="relative rounded-[2rem] overflow-hidden bg-[#0a192b] border border-sky-800/40 shadow-2xl">
                {/* Photo */}
                <div className="relative aspect-[3/4] overflow-hidden bg-slate-900">
                  <img
                    key={teamPhotos[activePhoto].src}
                    src={teamPhotos[activePhoto].src}
                    alt={teamPhotos[activePhoto].caption}
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a192b] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/55 backdrop-blur-md border border-white/10 text-sky-300 text-[11px] font-semibold">
                    {teamPhotos[activePhoto].tag}
                  </div>
                </div>

                {/* Caption & Switcher */}
                <div className="p-5">
                  <p className="text-sm text-slate-200 font-medium mb-4 leading-snug">
                    {teamPhotos[activePhoto].caption}
                  </p>
                  <div className="flex gap-2">
                    {teamPhotos.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActivePhoto(idx)}
                        aria-label={`Photo ${idx + 1}`}
                        className={`flex-1 h-1.5 rounded-full transition-all duration-300 ${
                          activePhoto === idx ? "bg-sky-400" : "bg-slate-700 hover:bg-slate-600"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Feature highlight image below */}
            <div className="mt-5 w-full max-w-sm rounded-2xl overflow-hidden border border-sky-900/30 shadow-lg">
              <img
                src={ASSETS.aboutMe.featureHighlight}
                alt="Tính năng nổi bật WIVI"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* ── Stats Milestone Strip ──────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-sky-950/30 to-transparent border border-sky-900/30">
          {[
            { val: "50.000+", label: "Người dùng mục tiêu" },
            { val: "2.1s", label: "Tốc độ quét AI OCR" },
            { val: "99.4%", label: "Độ chính xác phân bổ" },
            { val: "100%", label: "Tự chủ dòng tiền" },
          ].map((stat, i) => (
            <div key={i} className="text-center py-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1 tracking-tight">
                {stat.val}
              </div>
              <div className="text-xs sm:text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
