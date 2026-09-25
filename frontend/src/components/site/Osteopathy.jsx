import React from "react";
import { Target, Feather, HeartPulse, Users, ArrowRight } from "lucide-react";
import { OSTEO_FEATURES, IMG, WHATSAPP_URL } from "../../mock";

const ICONS = { Target, Feather, HeartPulse, Users };

const Osteopathy = () => {
  return (
    <section id="osteopathy" className="relative bg-[#e6ddcc] overflow-hidden">
      {/* large dissolving photo on the right */}
      <div className="absolute right-0 top-0 bottom-0 w-[46%] hidden md:block pointer-events-none">
        <img src={IMG.stretch} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e6ddcc]/30 to-[#e6ddcc]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#e6ddcc] via-transparent to-[#e6ddcc]/50" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="max-w-xl">
          <span className="label-caps text-[#a79f8c]">Остеопатия</span>
          <h2 className="font-display text-[#262e28] font-medium leading-[0.98] mt-4 text-[2.8rem] md:text-[4rem]">
            Больше, чем
            <br />
            просто массаж
          </h2>
          <p className="text-[#5a5344] text-base md:text-lg mt-5 max-w-md leading-relaxed">
            Остеопатия — это мягкий врачебный подход, который помогает восстановить естественный баланс тела и его способность к самоисцелению.
          </p>
          <p className="text-[#7c745f] text-sm mt-4 max-w-md leading-relaxed">
            Врач мягко работает руками, помогая телу снять избыточное напряжение и вернуть свободу движения. Подход бережный и внимательный — без резких приёмов.
          </p>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5 mt-9">
            {OSTEO_FEATURES.map((f) => {
              const Icon = ICONS[f.icon];
              return (
                <div key={f.text} className="flex items-start gap-3">
                  <span className="shrink-0 w-9 h-9 rounded-full border border-[#c3b79c] text-[#7c745f] flex items-center justify-center">
                    <Icon size={15} strokeWidth={1.5} />
                  </span>
                  <span className="text-[#3d423b] text-sm leading-snug pt-1.5">{f.text}</span>
                </div>
              );
            })}
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 mt-10 rounded-full border border-[#2b332e] text-[#2b332e] hover:bg-[#222b26] hover:text-[#ece6da] text-sm font-semibold pl-6 pr-5 py-3.5 transition-all duration-300"
          >
            Подробнее об остеопатии
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Osteopathy;
