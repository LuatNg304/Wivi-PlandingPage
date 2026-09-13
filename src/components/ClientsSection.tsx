import React from 'react';
import { Layers } from 'lucide-react';

interface Partner {
  name: string;
  category: string;
  logo?: string;
  customIcon?: React.ReactNode;
}

const partners: Partner[] = [
  {
    name: 'Vietcombank',
    category: 'Ngân Hàng Ngoại Thương',
    logo: '/banks/vcb.png',
  },
  {
    name: 'Techcombank',
    category: 'Ngân Hàng Kỹ Thương',
    logo: '/banks/tcb.png',
  },
  {
    name: 'MB Bank',
    category: 'Ngân Hàng Quân Đội',
    logo: '/banks/mb.png',
  },
  {
    name: 'VPBank',
    category: 'Ngân Hàng VN Thịnh Vượng',
    logo: '/banks/vpb.png',
  },
  {
    name: 'ACB',
    category: 'Ngân Hàng Á Châu',
    logo: '/banks/acb.png',
  },
  {
    name: 'BIDV',
    category: 'Đầu Tư & Phát Triển VN',
    logo: '/banks/bidv.png',
  },
  {
    name: 'TPBank',
    category: 'Ngân Hàng Tiên Phong',
    logo: '/banks/tpb.png',
  },
  {
    name: 'VietinBank',
    category: 'Ngân Hàng Công Thương',
    logo: '/banks/icb.png',
  },
  {
    name: 'Agribank',
    category: 'Nông Nghiệp & PTNT',
    logo: '/banks/agribank.png',
  },
  {
    name: 'MoMo',
    category: 'Ví Điện Tử Siêu Ứng Dụng',
    logo: '/banks/momo.png',
  },
  {
    name: 'Viettel Money',
    category: 'Hệ Sinh Thái Tài Chính Số',
    logo: '/banks/viettelmoney.png',
  },
  
];

export const ClientsSection: React.FC = () => {
  // Duplicate partners to make a seamless infinite loop
  const marqueePartners = [...partners, ...partners];

  return (
    <section className="w-full border-y border-neutral-800/80 bg-neutral-900/30 py-10 sm:py-14 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8 text-center sm:w-2/3 lg:w-1/2">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
          <span>Tương Thích Mở Rộng</span>
        </div>
        <h2 className="text-2xl leading-tight font-bold text-balance text-neutral-100 sm:text-3xl">
          Đồng Bộ Với Hệ Sinh Thái Tài Chính Của Bạn
        </h2>
        <p className="mt-2 leading-relaxed text-pretty text-neutral-400 text-sm sm:text-base">
          WIVI hỗ trợ nhập sao kê & quét ảnh giao dịch từ hầu hết các ngân hàng, ví điện tử và thẻ tín dụng phổ biến.
        </p>
      </div>

      {/* Infinite Marquee Running Right to Left */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee-rtl flex items-center gap-4 py-2">
          {marqueePartners.map((partner, index) => (
            <div
              key={index}
              className="w-44 sm:w-52 shrink-0 flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-xl border border-neutral-800 bg-neutral-900/80 hover:border-neutral-700 hover:bg-neutral-800/60 transition duration-300 group shadow-sm hover:shadow-lg select-none"
            >
              <div className="h-10 w-full flex items-center justify-center mb-2.5 bg-white/95 rounded-lg px-2.5 py-1.5 shadow-sm transition duration-300 group-hover:scale-105">
                {partner.customIcon ? (
                  partner.customIcon
                ) : (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-7 max-w-full object-contain pointer-events-none"
                    loading="lazy"
                  />
                )}
              </div>
              <span className="text-xs font-bold text-neutral-200 group-hover:text-sky-400 transition text-center whitespace-nowrap">
                {partner.name}
              </span>
              <span className="text-[10px] text-neutral-400 text-center mt-0.5 whitespace-nowrap">
                {partner.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
