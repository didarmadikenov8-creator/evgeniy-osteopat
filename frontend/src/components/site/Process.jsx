import React from "react";
import { ArrowRight } from "lucide-react";
import { PROCESS_STEPS, IMG, WHATSAPP_URL } from "../../mock";

const Process = () => {
  return (
    <section id="process" className="bg-[#ece6da]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-20 md:py-28">
        <span className="label-caps text-[#a79f8c]">Как проходит приём</span>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mt-4">
          <h2 className="font-display text-[#262e28] font-medium leading-[1.02] text-[2.4rem] md:text-[3.2rem] max-w-xl">
            Спокойно. Внимательно.
            <br />
            Без болезненных манипуляций.
          </h2>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-[#5c6b5c] hover:text-[#222b26] text-sm font-semibold transition-colors"
          >
            Подробнее о приёме
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 mt-12 items-stretch">
          {/* Left photo */}
          <div className="lg:col-span-4 rounded-2xl overflow-hidden min-h-[300px]">
            <img src={IMG.neckWork} alt="Мягкая работа с телом" className="w-full h-full object-cover" />
          </div>

          {/* Steps */}
          <div className="lg:col-span-4">
            <div className="divide-y divide-[#d6cbb6]">
              {PROCESS_STEPS.map((s) => (
                <div key={s.num} className="flex gap-5 py-5 first:pt-0 group">
                  <span className="font-display text-[#b3a88f] text-2xl md:text-3xl font-medium w-10 shrink-0 group-hover:text-[#7f9a73] transition-colors">
                    {s.num}
                  </span>
                  <div>
                    <h3 className="font-display text-[#262e28] text-xl md:text-2xl font-semibold">
                      {s.title}
                    </h3>
                    <p className="text-[#6c675b] text-sm mt-1 leading-relaxed">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right room photo + caption */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden flex-1 min-h-[220px]">
              <img src={IMG.roomTable2} alt="Кабинет приёма" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl bg-[#e6ddcc] border border-[#d8ccb5] p-5">
              <p className="text-[#4b544a] text-sm leading-relaxed">
                Приём проходит в комфортной и спокойной обстановке.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
