import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, WHATSAPP_URL } from "../../mock";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const go = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1b221e]/95 backdrop-blur-md py-3 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.7)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => go("#top")} className="text-left leading-tight">
          <div className="font-display text-[#ece6da] text-xl md:text-2xl font-semibold tracking-wide">
            Евгений Нигматуллин
          </div>
          <div className="label-caps text-[#8fa085] text-[0.6rem] mt-0.5">
            врач-остеопат
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) => (
            <button
              key={n.href}
              onClick={() => go(n.href)}
              className="text-[#d6dbd3] text-[0.82rem] font-medium hover:text-[#ece6da] transition-colors duration-300 relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#8fa085] hover:after:w-full after:transition-all after:duration-300"
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center rounded-full border border-[#7f9a73] bg-[#7f9a73] hover:bg-[#728c67] text-[#ece6da] text-[0.8rem] font-semibold px-5 py-2.5 transition-colors duration-300"
          >
            Записаться
          </a>
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#ffffff33] text-[#ece6da]"
            aria-label="Меню"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-[60] bg-[#171d19] transition-all duration-500 lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-5">
          <div className="font-display text-[#ece6da] text-xl font-semibold">
            Евгений Нигматуллин
          </div>
          <button
            onClick={() => setOpen(false)}
            className="w-10 h-10 rounded-full border border-[#ffffff33] text-[#ece6da] inline-flex items-center justify-center"
            aria-label="Закрыть"
          >
            <X size={20} />
          </button>
        </div>
        <nav className="px-6 mt-6 flex flex-col gap-1">
          {NAV.map((n, i) => (
            <button
              key={n.href}
              onClick={() => go(n.href)}
              className="text-left font-display text-[#ece6da] text-3xl py-3 border-b border-[#ffffff14]"
              style={{ animation: open ? `fadeUp 0.5s ${i * 0.05}s both` : "none" }}
            >
              {n.label}
            </button>
          ))}
        </nav>
        <div className="px-6 mt-8">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center rounded-full bg-[#7f9a73] text-[#ece6da] text-sm font-semibold py-4"
          >
            Записаться на приём
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
