import React from "react";
import { Activity, Sparkles, Users, ArrowRight } from "lucide-react";
import { EVGENIY_PHOTO, STATS, WHATSAPP_URL } from "../../mock";

const STAT_ICONS = [Activity, Sparkles, Users];

const About = () => {
  return (
    <section id="about" className="relative bg-[#222b26] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1">
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

            {/* stats */}
            <div className="flex flex-wrap gap-8 mt-9">
              {STATS.map((s, i) => {
                const Icon = STAT_ICONS[i];
                return (
                  <div key={s.value} className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full border border-[#3d4a42] text-[#8fa085] flex items-center justify-center">
                      <Icon size={16} strokeWidth={1.5} />
                    </span>
                    <div>
                      <div className="font-display text-[#f2eee4] text-xl font-semibold leading-none">
                        {s.value}
                      </div>
                      <div className="text-[#8a938a] text-xs mt-1">{s.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 mt-9 rounded-full border border-[#4a564d] text-[#e7e3d8] hover:bg-[#ece6da] hover:text-[#222b26] hover:border-[#ece6da] text-sm font-semibold pl-6 pr-5 py-3.5 transition-all duration-300"
            >
              Подробнее обо мне
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Photo + quote */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:ml-auto">
              <img
                src={EVGENIY_PHOTO}
                alt="Евгений Нигматуллин — врач-остеопат"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#222b26]/60 via-transparent to-transparent" />
            </div>
            <p className="font-display italic text-[#c8cec4] text-xl md:text-2xl leading-snug mt-6 max-w-sm lg:absolute lg:-left-4 lg:bottom-6 lg:bg-[#222b26]/0 lg:mt-0">
              «Моя задача — не просто снять симптом, а найти и устранить его причину.»
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
