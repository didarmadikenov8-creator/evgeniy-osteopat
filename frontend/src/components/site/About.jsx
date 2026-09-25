import React from "react";
import { Stethoscope, Users, ArrowRight } from "lucide-react";
import { EVGENIY_PHOTO, STATS, WHATSAPP_URL } from "../../mock";

// Elegant spine icon (vertebral column) for the osteopathy stat
const SpineIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="8.5" y="3" width="7" height="3.1" rx="1.55" />
    <rect x="8.5" y="8" width="7" height="3.1" rx="1.55" />
    <rect x="8.5" y="13" width="7" height="3.1" rx="1.55" />
    <rect x="8.5" y="18" width="7" height="3.1" rx="1.55" />
  </svg>
);

const STAT_ICONS = [Stethoscope, SpineIcon, Users];

const About = () => {
  return (
    <section id="about" className="relative bg-[#222b26] overflow-hidden">
      {/* Photo — bleeds into the dark background (top of section on mobile, right half on desktop) */}
      <div className="relative lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[55%] h-[420px] sm:h-[520px] lg:h-auto">
        <img
          src={EVGENIY_PHOTO}
          alt="Евгений Нигматуллин — врач-остеопат"
          className="w-full h-full object-cover object-[32%_18%]"
        />
        {/* green tint to harmonize the bright photo with the dark-green section */}
        <div className="absolute inset-0 bg-[#22312a] mix-blend-multiply opacity-50" />
        {/* fade into background: left (desktop), bottom (all), top (mobile) */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#222b26] via-[#222b26]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#222b26] via-[#222b26]/10 to-transparent" />
        <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-[#222b26]/70 via-transparent to-transparent" />

        {/* Quote overlaid on the lower part of the photo */}
        <div className="absolute bottom-6 sm:bottom-9 lg:bottom-14 left-5 sm:left-8 lg:left-16 right-5 lg:right-auto lg:max-w-xl">
          <div className="flex items-start gap-3 sm:gap-4">
            <span className="hidden sm:block h-px w-8 lg:w-12 bg-[#cbb587] mt-4 sm:mt-5 shrink-0" />
            <p className="font-display italic text-[#f2eee4] leading-[1.08]">
              <span className="block text-[1.9rem] sm:text-4xl lg:text-[3.1rem] font-semibold">
                «Моя задача —
              </span>
              <span className="block text-lg sm:text-2xl lg:text-[1.65rem] text-[#d3d8cd] mt-1">
                не просто снять симптом,
                <br className="hidden sm:block" /> а найти и устранить его причину»
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-8 py-14 lg:py-28">
        <div className="lg:max-w-[47%]">
          <span className="label-caps text-[#8fa085]">Обо мне</span>
          <h2 className="font-display text-[#f2eee4] font-medium leading-[0.98] mt-4 text-[3rem] md:text-[4.2rem]">
            Евгений
            <br />
            Нигматуллин
          </h2>
          <p className="text-[#c8cec4] text-lg mt-5 font-light max-w-md leading-relaxed">
            Врач-остеопат. Более 20 лет медицинской практики.
          </p>
          <p className="text-[#98a196] text-sm mt-4 max-w-md leading-relaxed">
            Врачебное образование и многолетняя клиническая практика. В работе сочетаю медицинский опыт с мягким остеопатическим подходом — внимательно, бережно и без спешки.
          </p>

          {/* Accent stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-9">
            {STATS.map((s, i) => {
              const Icon = STAT_ICONS[i];
              return (
                <div
                  key={s.value}
                  className="flex items-center gap-3 rounded-2xl border border-[#3a473f] bg-[#1d2722]/70 px-4 py-4 transition-colors duration-300 hover:border-[#6f8467]"
                >
                  <span className="shrink-0 w-11 h-11 rounded-full border border-[#455349] text-[#cbb587] flex items-center justify-center">
                    <Icon size={18} strokeWidth={1.5} />
                  </span>
                  <div className="min-w-0">
                    <div className="font-display text-[#d8c491] text-[1.7rem] font-semibold leading-none whitespace-nowrap">
                      {s.value}
                    </div>
                    <div className="text-[#98a196] text-xs mt-1.5 leading-tight">{s.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 mt-9 rounded-full bg-[#7f9a73] hover:bg-[#728c67] text-[#f2eee4] text-sm font-semibold pl-7 pr-6 py-4 transition-all duration-300"
          >
            Подробнее обо мне
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
