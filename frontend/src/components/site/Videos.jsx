import React from "react";
import { Play, ArrowRight } from "lucide-react";
import { VIDEOS, WHATSAPP_URL } from "../../mock";

const Videos = ({ onPlay }) => {
  return (
    <section id="video" className="bg-[#1c241f]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="label-caps text-[#8fa085]">Видео и полезные материалы</span>
            <h2 className="font-display text-[#f2eee4] font-medium leading-[1.02] mt-4 text-[2.6rem] md:text-[3.4rem]">
              Евгений объясняет
            </h2>
            <p className="text-[#98a196] text-sm md:text-base mt-3 max-w-md leading-relaxed">
              Объясняю простыми словами о здоровье, остеопатии и работе с телом.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-[#4a564d] text-[#e7e3d8] hover:bg-[#ece6da] hover:text-[#222b26] hover:border-[#ece6da] text-sm font-semibold pl-6 pr-5 py-3.5 transition-all duration-300 self-start"
          >
            Смотреть все видео
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        <div className="grid lg:grid-cols-12 gap-5 mt-12">
          {/* Main video */}
          <button
            onClick={() => onPlay(VIDEOS.main.src)}
            className="group relative lg:col-span-8 rounded-2xl overflow-hidden aspect-video bg-black text-left"
          >
            <video
              src={`${VIDEOS.main.src}#t=0.5`}
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d110f]/80 via-transparent to-transparent" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-20 h-20 rounded-full bg-[#ece6da]/95 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play size={26} className="ml-1 fill-[#222b26] text-[#222b26]" />
              </span>
            </span>
            <span className="absolute bottom-5 left-5 right-5">
              <span className="block font-display text-[#f2eee4] text-xl md:text-2xl font-semibold">
                {VIDEOS.main.title}
              </span>
              <span className="block text-[#c8cec4] text-sm mt-1">{VIDEOS.main.caption}</span>
            </span>
          </button>

          {/* Secondary video */}
          <button
            onClick={() => onPlay(VIDEOS.second.src)}
            className="group relative lg:col-span-4 rounded-2xl overflow-hidden aspect-video lg:aspect-auto bg-black text-left min-h-[220px]"
          >
            <video
              src={`${VIDEOS.second.src}#t=0.5`}
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d110f]/85 via-[#0d110f]/20 to-transparent" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-14 h-14 rounded-full bg-[#ece6da]/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play size={18} className="ml-0.5 fill-[#222b26] text-[#222b26]" />
              </span>
            </span>
            <span className="absolute bottom-4 left-4 right-4">
              <span className="block font-display text-[#f2eee4] text-lg font-semibold leading-tight">
                {VIDEOS.second.title}
              </span>
              <span className="block text-[#c8cec4] text-xs mt-1">{VIDEOS.second.caption}</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Videos;
