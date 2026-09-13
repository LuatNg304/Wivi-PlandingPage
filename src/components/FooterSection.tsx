import React, { useState } from 'react';
import { WiviLogo } from './WiviLogo';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  const footerLinks = [
    {
      title: 'Hệ Sinh Thái',
      links: [
        { name: 'Phương Pháp 6 Hũ', url: '#jars' },
        { name: 'AI OCR Quét Bill', url: '#features' },
        { name: 'Mô Phỏng Phân Bổ', url: '#calculator' },
        { name: 'Bảng Giá Dịch Vụ', url: '#pricing' },
      ],
    },
    {
      title: 'Công Ty',
      links: [
        { name: 'Về WIVI', url: '#about' },
        { name: 'Tuyển Dụng', url: '#careers', badge: "Tuyển dụng!" },
        { name: 'Chính Sách Bảo Mật', url: '#privacy' },
        { name: 'Điều Khoản Sử Dụng', url: '#terms' },
      ],
    },
  ];

  return (
    <footer className="w-full bg-neutral-950 border-t border-neutral-800/80">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:pt-16">
        {/* Top Grid (ScrewFast 5-column layout) */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="col-span-full lg:col-span-1">
            <a href="#hero" className="flex items-center gap-2.5 mb-3">
              <WiviLogo size={36} />
              <span className="font-extrabold text-xl text-neutral-100 tracking-tight">
                WIVI<span className="text-sky-400">.</span>
              </span>
            </a>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-xs mb-4">
              Nền tảng quản trị tài chính cá nhân tự động hoá theo phương pháp 6 Hũ, bóc tách hoá đơn bằng AI và xây dựng thói quen kỷ luật.
            </p>
            {/* Store Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 active:scale-95 transition-transform duration-200"
              >
                <img src="/google-play-badge.svg" alt="Google Play" className="h-8.5 w-auto" />
              </a>
              <a
               
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 active:scale-95 transition-transform duration-200"
              >
                <img src="/app-store-badge.svg" alt="App Store" className="h-8.5 w-auto" />
              </a>
            </div>
          </div>

          {/* Nav Link Columns */}
          {footerLinks.map((section, idx) => (
            <div key={idx} className="col-span-1">
              <h3 className="text-sm font-bold text-neutral-200 uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="mt-3 space-y-2.5 text-xs sm:text-sm">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href={link.url}
                      className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-neutral-200 transition duration-200"
                    >
                      {link.name}
                      {link.badge && (
                        <span className="rounded-md bg-blue-600 px-1.5 py-0.5 text-[10px] font-bold text-white">
                          {link.badge}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Column (col-span-2) */}
          <div className="col-span-full md:col-span-2">
            <h3 className="text-sm font-bold text-neutral-200 uppercase tracking-wider">
              Nhận Bản Tin Mẹo Tài Chính
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Nhận cẩm nang quản trị dòng tiền, các bài viết chia sẻ về 6 hũ và thông tin cập nhật tính năng mới nhất mỗi tuần.
            </p>

            <form onSubmit={handleSubscribe} className="mt-4">
              {subscribed ? (
                <div className="flex items-center gap-2 rounded-lg bg-emerald-500/15 border border-emerald-500/30 p-3 text-xs font-semibold text-emerald-300">
                  <CheckCircle2 className="size-4" />
                  <span>Cảm ơn bạn! Chúng tôi sẽ gửi mẹo tài chính vào hòm thư sớm nhất.</span>
                </div>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Nhập địa chỉ email của bạn..."
                    className="grow rounded-lg border border-neutral-700 bg-neutral-900 px-3.5 py-2.5 text-xs sm:text-sm text-neutral-100 placeholder-neutral-500 outline-hidden focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-lg bg-blue-600 hover:bg-blue-500 px-4 py-2.5 text-xs sm:text-sm font-bold text-white transition flex items-center gap-1 cursor-pointer shadow-md shadow-blue-500/25"
                  >
                    <span>Đăng Ký</span>
                    <ArrowRight className="size-3.5" />
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-10 pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            © {new Date().getFullYear()} WIVI Financial Technology. Thiết kế lấy cảm hứng từ cấu trúc hiện đại của ScrewFast.
          </p>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-neutral-300 transition">
              Bảo Mật
            </a>
            <a href="#terms" className="hover:text-neutral-300 transition">
              Điều Khoản
            </a>
            <a href="#support" className="hover:text-neutral-300 transition">
              Hỗ Trợ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
