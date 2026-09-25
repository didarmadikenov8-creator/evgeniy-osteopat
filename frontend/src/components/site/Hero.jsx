import React from "react";
import { Play, ArrowRight } from "lucide-react";
import { IMG, WHATSAPP_URL, VIDEO_MAIN } from "../../mock";

const Hero = ({ onPlay }) => {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#1b221e] flex items-end"
    >
      {/* Background photo blending into dark */}
      <div className="absolute inset-0">
        <img
          src={IMG.hero}
          alt="Работа остеопата с пациентом"
          className="w-full h-full object-cover object-[70%_center] scale-105"
        />
        {/* left-to-right dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#151b17] via-[#151b17]/80 to-transparent" />
        {/* bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#151b17] via-transparent to-[#151b17]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 md:px-8 pb-16 md:pb-24 pt-32">
        <div className="max-w-2xl reveal">
          <span className="label-caps text-[#9db08f]">Остеопатия в Алматы</span>
          <h1 className="font-display text-[#f2eee4] font-medium leading-[0.95] mt-5 text-[3.4rem] sm:text-[5rem] md:text-[6.5rem]">
            Движение
            <br />
            без боли
          </h1>
          <p className="text-[#c8cec4] text-lg md:text-xl mt-6 font-light max-w-md leading-relaxed">
            Мягкий врачебный подход к вашему здоровью
          </p>

          <div className="flex flex-wrap items-center gap-5 mt-9">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-[#7f9a73] hover:bg-[#728c67] text-[#f2eee4] text-[0.95rem] font-semibold pl-7 pr-6 py-4 transition-all duration-300"
            >
              Записаться на приём
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <button
              onClick={() => onPlay(VIDEO_MAIN)}
              className="group inline-flex items-center gap-3 text-[#e7e3d8]"
            >
              <span className="w-12 h-12 rounded-full border border-[#ffffff55] flex items-center justify-center group-hover:bg-[#ffffff1a] transition-colors duration-300">
                <Play size={16} className="ml-0.5 fill-current" />
              </span>
              <span className="text-sm leading-tight text-left">
                Посмотрите,
                <br />
                как проходит приём
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
