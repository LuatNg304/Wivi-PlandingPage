import React, { useState } from "react";
import { ArrowRight, Menu, X, Smartphone } from "lucide-react";
import { WiviLogo } from "./WiviLogo";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky inset-x-0 top-2 sm:top-4 z-50 flex w-full flex-wrap text-sm md:flex-nowrap md:justify-start px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <nav
        className="relative w-full rounded-full border border-slate-200/90 bg-white/95 px-3.5 py-2 sm:py-2.5 backdrop-blur-md md:flex md:items-center md:justify-between md:px-6 lg:px-8 mt-1.5 sm:mt-3 shadow-xs"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            className="flex items-center gap-2 rounded-lg text-lg sm:text-xl font-bold ring-blue-500 outline-hidden focus-visible:ring-3 text-slate-900"
            href="#hero"
            aria-label="WIVI Brand"
          >
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-lg sm:text-xl text-slate-800 leading-none">
                WIVI
              </span>
            </div>
          </a>

          {/* Mobile Collapse Toggle */}
          <div className="mr-0.5 ml-auto md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex size-8 sm:size-9 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100 transition cursor-pointer"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden grow basis-full md:flex md:items-center md:justify-end md:gap-x-5 lg:gap-x-7">
          <a
            href="#features"
            className="text-slate-600 hover:text-blue-600 font-medium transition duration-300"
          >
            Tính Năng
          </a>
          <a
            href="#jars"
            className="text-slate-600 hover:text-blue-600 font-medium transition duration-300 flex items-center gap-1.5"
          >
            Phương Pháp
          </a>
          <a
            href="#calculator"
            className="text-slate-600 hover:text-blue-600 font-medium transition duration-300"
          >
            Mô Phỏng
          </a>
          <a
            href="#pricing"
            className="text-slate-600 hover:text-blue-600 font-medium transition duration-300"
          >
            Bảng Giá
          </a>
          <a
            href="#testimonials"
            className="text-slate-600 hover:text-blue-600 font-medium transition duration-300"
          >
            Đánh Giá
          </a>
          <a
            href="#faq"
            className="text-slate-600 hover:text-blue-600 font-medium transition duration-300"
          >
            Hỏi Đáp
          </a>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="w-full mt-2 rounded-2xl border border-slate-200/90 bg-white/98 backdrop-blur-xl p-4 sm:p-5 md:hidden flex flex-col gap-y-2 text-slate-800 shadow-xl max-h-[calc(100vh-130px)] overflow-y-auto">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-slate-700 hover:text-blue-600 font-medium py-1"
          >
            Tính Năng Nổi Bật
          </a>
          <a
            href="#jars"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-slate-700 hover:text-blue-600 font-medium py-1 flex items-center justify-between"
          >
            <span>Phương Pháp Hũ</span>
            
          </a>
          <a
            href="#calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-slate-700 hover:text-blue-600 font-medium py-1"
          >
            Mô Phỏng Phân Bổ
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-slate-700 hover:text-blue-600 font-medium py-1"
          >
            Bảng Giá
          </a>
          <a
            href="#testimonials"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-slate-700 hover:text-blue-600 font-medium py-1"
          >
            Đánh Giá Khách Hàng
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-slate-700 hover:text-blue-600 font-medium py-1"
          >
            Câu Hỏi Thường Gặp
          </a>
          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white"
            >
              
              <span>Tải WIVI Miễn Phí</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
