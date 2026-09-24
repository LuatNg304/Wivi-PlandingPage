import React from "react";
import { Layers } from "lucide-react";

interface Partner {
  name: string;
  category: string;
  logo?: string;
  customIcon?: React.ReactNode;
}

const partners: Partner[] = [
  {
    name: "Vietcombank",
    category: "Ngân Hàng Ngoại Thương",
    logo: "/banks/vcb.png",
  },
  {
    name: "Techcombank",
    category: "Ngân Hàng Kỹ Thương",
    logo: "/banks/tcb.png",
  },
  {
    name: "MB Bank",
    category: "Ngân Hàng Quân Đội",
    logo: "/banks/mb.png",
  },
  {
    name: "VPBank",
    category: "Ngân Hàng VN Thịnh Vượng",
    logo: "/banks/vpb.png",
  },
  {
    name: "ACB",
    category: "Ngân Hàng Á Châu",
    logo: "/banks/acb.png",
  },
  {
    name: "BIDV",
    category: "Đầu Tư & Phát Triển VN",
    logo: "/banks/bidv.png",
  },
  {
    name: "TPBank",
    category: "Ngân Hàng Tiên Phong",
    logo: "/banks/tpb.png",
  },
  {
    name: "VietinBank",
    category: "Ngân Hàng Công Thương",
    logo: "/banks/icb.png",
  },
  {
    name: "Agribank",
    category: "Nông Nghiệp & PTNT",
    logo: "/banks/agribank.png",
  },
  
];

export const ClientsSection: React.FC = () => {
  const renderCard = (partner: Partner, key: string | number) => (
    <div
      key={key}
      className="w-36 sm:w-44 md:w-52 shrink-0 flex flex-col items-center justify-center p-2.5 sm:p-3.5 rounded-xl border border-slate-200/90 bg-white hover:border-blue-400 hover:shadow-md transition-all duration-300 group select-none cursor-pointer"
    >
      <div className="h-9 sm:h-10 w-full flex items-center justify-center mb-1.5 sm:mb-2 bg-slate-50 border border-slate-100/90 rounded-lg px-2 sm:px-2.5 py-1 sm:py-1.5 transition duration-300 group-hover:scale-105">
        {partner.customIcon ? (
          partner.customIcon
        ) : (
          <img
            src={partner.logo}
            alt={partner.name}
            className="max-h-5 sm:max-h-7 max-w-full object-contain pointer-events-none"
            loading="lazy"
          />
        )}
      </div>
      <span className="text-[11px] sm:text-xs font-bold text-slate-800 group-hover:text-blue-600 transition text-center whitespace-nowrap">
        {partner.name}
      </span>
      <span className="text-[9px] sm:text-[10px] text-slate-500 text-center mt-0.5 whitespace-nowrap">
        {partner.category}
      </span>
    </div>
  );

  return (
    <div className="w-full overflow-hidden">
      {/* Infinite Seamless Marquee Running Right to Left */}
      <div className="relative w-full overflow-hidden mask-marquee-fade">
        <div className="animate-marquee-rtl flex items-center py-1 sm:py-2">
          {/* Track 1 */}
          <div className="flex shrink-0 items-center gap-2.5 sm:gap-4 pr-2.5 sm:pr-4">
            {partners.map((partner, index) =>
              renderCard(partner, `track1-${index}`),
            )}
          </div>
          {/* Track 2 for seamless infinite loop */}
          <div
            className="flex shrink-0 items-center gap-2.5 sm:gap-4 pr-2.5 sm:pr-4"
            aria-hidden="true"
          >
            {partners.map((partner, index) =>
              renderCard(partner, `track2-${index}`),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
