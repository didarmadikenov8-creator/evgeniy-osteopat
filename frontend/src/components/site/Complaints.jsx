import React, { useState } from "react";
import {
  PersonStanding,
  Bone,
  Brain,
  Dumbbell,
  MoveVertical,
  HeartPulse,
  ArrowRight,
  Plus,
} from "lucide-react";
import { COMPLAINTS, IMG, WHATSAPP_URL } from "../../mock";

const ICONS = { PersonStanding, Bone, Brain, Dumbbell, MoveVertical, HeartPulse };

const Complaints = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="complaints" className="relative bg-[#ece6da] overflow-hidden">
      {/* decorative dissolving shoulder photo on the left */}
      <div className="absolute left-0 top-0 bottom-0 w-[42%] hidden md:block pointer-events-none">
        <img
          src={IMG.shoulder}
          alt=""
          className="w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ece6da]/40 to-[#ece6da]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#ece6da] via-transparent to-[#ece6da]/60" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="md:ml-[42%] md:pl-8">
          <span className="label-caps text-[#a79f8c]">С чем обращаются</span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mt-4">
            <h2 className="font-display text-[#262e28] font-medium leading-[1.02] text-[2.6rem] md:text-[3.4rem] max-w-lg">
              Помогаю при следующих запросах
            </h2>
            <div className="max-w-xs">
              <p className="text-[#6c675b] text-sm leading-relaxed">
                Остеопатия помогает найти причину дискомфорта и восстановить естественный баланс тела.
              </p>
            </div>
          </div>

          {/* cards */}
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3 mt-10">
            {COMPLAINTS.map((c) => {
              const Icon = ICONS[c.icon];
              const isOpen = active === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setActive(isOpen ? null : c.id)}
                  className={`group text-left rounded-xl border p-5 transition-all duration-300 ${
                    isOpen
                      ? "bg-[#222b26] border-[#222b26]"
                      : "bg-[#e6ddcc] border-[#d8ccb5] hover:border-[#b9ac91] hover:bg-[#e9e1d1]"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`shrink-0 w-11 h-11 rounded-full border flex items-center justify-center transition-colors duration-300 ${
                        isOpen
                          ? "border-[#7f9a73] text-[#9db08f]"
                          : "border-[#c3b79c] text-[#7c745f]"
                      }`}
                    >
                      <Icon size={18} strokeWidth={1.5} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3
                          className={`font-display text-xl font-semibold ${
                            isOpen ? "text-[#f2eee4]" : "text-[#262e28]"
                          }`}
                        >
                          {c.title}
                        </h3>
                        <Plus
                          size={16}
                          className={`shrink-0 transition-all duration-300 ${
                            isOpen ? "rotate-45 text-[#9db08f]" : "text-[#a79f8c]"
                          }`}
                        />
                      </div>
                      <p
                        className={`text-xs mt-1 ${
                          isOpen ? "text-[#9aa596]" : "text-[#8a8271]"
                        }`}
                      >
                        {c.subtitle}
                      </p>
                      <div
                        className={`grid transition-all duration-300 ${
                          isOpen ? "grid-rows-[1fr] mt-3 opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <p className="overflow-hidden text-[#cdd4c8] text-sm leading-relaxed">
                          {c.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 mt-9 rounded-full border border-[#2b332e] text-[#2b332e] hover:bg-[#222b26] hover:text-[#ece6da] text-sm font-semibold pl-6 pr-5 py-3.5 transition-all duration-300"
          >
            Рассказать, что беспокоит
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Complaints;
