import React, { useState } from "react";
import { ArrowRight, Menu, X, Smartphone } from "lucide-react";
import { WiviLogo } from "./WiviLogo";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky inset-x-0 top-4 z-50 flex w-full flex-wrap text-sm md:flex-nowrap md:justify-start px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <nav
        className="relative w-full rounded-[36px] border border-neutral-700/60 bg-neutral-900/80 px-4 py-2.5 backdrop-blur-md md:flex md:items-center md:justify-between md:px-6 lg:px-8 shadow-xl shadow-black/20"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            className="flex items-center gap-2.5 rounded-lg text-xl font-bold ring-zinc-500 outline-hidden focus-visible:ring-3 text-neutral-100"
            href="#hero"
            aria-label="WIVI Brand"
          >
            <WiviLogo size={34} />
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-lg text-neutral-100 leading-none">
                WIVI<span className="text-sky-400">.</span>
              </span>
              <span className="text-[10px] tracking-widest text-neutral-400 font-medium uppercase mt-0.5">
                Financial Discipline
              </span>
            </div>
          </a>

          {/* Mobile Collapse Toggle */}
          <div className="mr-1 ml-auto md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex size-9 items-center justify-center rounded-full text-neutral-300 hover:bg-neutral-800 transition"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden grow basis-full md:flex md:items-center md:justify-end md:gap-x-5 lg:gap-x-7">
          <a
            href="#features"
            className="text-neutral-300 hover:text-sky-400 font-medium transition duration-300"
          >
            Tính Năng
          </a>
          <a
            href="#jars"
            className="text-neutral-300 hover:text-sky-400 font-medium transition duration-300 flex items-center gap-1.5"
          >
            <span className="rounded-md bg-blue-500/20 px-1.5 py-0.5 text-[10px] font-bold text-sky-400">
              6 HŨ
            </span>
            Phương Pháp
          </a>
          <a
            href="#calculator"
            className="text-neutral-300 hover:text-sky-400 font-medium transition duration-300"
          >
            Mô Phỏng
          </a>
          <a
            href="#pricing"
            className="text-neutral-300 hover:text-sky-400 font-medium transition duration-300"
          >
            Bảng Giá
          </a>
          <a
            href="#testimonials"
            className="text-neutral-300 hover:text-sky-400 font-medium transition duration-300"
          >
            Đánh Giá
          </a>
          <a
            href="#faq"
            className="text-neutral-300 hover:text-sky-400 font-medium transition duration-300"
          >
            Hỏi Đáp
          </a>

          {/* Primary CTA Button */}
          <a
            href="#download"
            className="group inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 transition duration-300 shadow-md shadow-blue-500/30 border border-blue-500/40"
          >
            <Smartphone className="size-4 text-white" />
            <span>Tải App Ngay</span>
            <ArrowRight className="size-3.5 transition duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="w-full mt-2 rounded-2xl border border-neutral-800 bg-neutral-900/95 backdrop-blur-xl p-5 shadow-2xl md:hidden flex flex-col gap-y-3">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-neutral-300 hover:text-sky-400 font-medium py-1"
          >
            Tính Năng Nổi Bật
          </a>
          <a
            href="#jars"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-neutral-300 hover:text-sky-400 font-medium py-1 flex items-center justify-between"
          >
            <span>Phương Pháp 6 Hũ</span>
            <span className="rounded-md bg-blue-500/20 px-2 py-0.5 text-xs font-bold text-sky-400">
              Tự Động
            </span>
          </a>
          <a
            href="#calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-neutral-300 hover:text-sky-400 font-medium py-1"
          >
            Mô Phỏng Phân Bổ
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-neutral-300 hover:text-sky-400 font-medium py-1"
          >
            Bảng Giá
          </a>
          <a
            href="#testimonials"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-neutral-300 hover:text-sky-400 font-medium py-1"
          >
            Đánh Giá Khách Hàng
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-neutral-300 hover:text-sky-400 font-medium py-1"
          >
            Câu Hỏi Thường Gặp
          </a>
          <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2">
            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-500/30"
            >
              <Smartphone className="size-4" />
              <span>Tải WIVI Miễn Phí</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
