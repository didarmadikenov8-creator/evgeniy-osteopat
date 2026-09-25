import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, ArrowRight } from "lucide-react";
import { REVIEWS, PRICE, WHATSAPP_URL } from "../../mock";

const Reviews = () => {
  const [i, setI] = useState(0);
  const r = REVIEWS[i];
  const prev = () => setI((v) => (v - 1 + REVIEWS.length) % REVIEWS.length);
  const next = () => setI((v) => (v + 1) % REVIEWS.length);

  return (
    <section id="reviews" className="bg-[#ece6da]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* heading */}
          <div className="lg:col-span-3">
            <span className="label-caps text-[#a79f8c]">Отзывы</span>
            <h2 className="font-display text-[#262e28] font-medium leading-[1.02] mt-4 text-[2.2rem] md:text-[2.8rem]">
              Реальные истории наших пациентов
            </h2>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 mt-6 text-[#5c6b5c] hover:text-[#222b26] text-sm font-semibold transition-colors"
            >
              Все отзывы
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* review card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#e6ddcc] border border-[#d8ccb5] p-7 md:p-8 min-h-[220px] flex flex-col justify-between">
              <Quote size={30} className="text-[#b3a88f]" />
              <p className="font-display italic text-[#3d423b] text-xl md:text-[1.6rem] leading-snug mt-3">
                «{r.text}»
              </p>
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-3">
                  <img
                    src={r.avatar}
                    alt={r.name}
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <span className="text-[#5a5344] text-sm font-semibold">{r.name}</span>
                </div>
                {REVIEWS.length > 1 && (
                  <div className="flex items-center gap-2">
                    <button onClick={prev} className="w-9 h-9 rounded-full border border-[#c3b79c] text-[#7c745f] flex items-center justify-center hover:bg-[#d9cdb8] transition-colors">
                      <ChevronLeft size={16} />
                    </button>
                    <button onClick={next} className="w-9 h-9 rounded-full border border-[#c3b79c] text-[#7c745f] flex items-center justify-center hover:bg-[#d9cdb8] transition-colors">
                      <ChevronRight size={16} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* price */}
          <div id="price" className="lg:col-span-4">
            <span className="label-caps text-[#a79f8c]">Стоимость</span>
            <h2 className="font-display text-[#262e28] font-medium leading-[1.02] mt-4 text-[2.2rem] md:text-[2.8rem]">
              Консультация и приём
            </h2>
            <div className="rounded-2xl bg-[#222b26] p-6 mt-6">
              <div className="flex items-baseline justify-between gap-4 pb-5 border-b border-[#39443c]">
                <div>
                  <div className="text-[#e7e3d8] text-sm font-semibold">{PRICE.title}</div>
                  <div className="text-[#8a938a] text-xs mt-1">{PRICE.note}</div>
                </div>
                <div className="font-display text-[#f2eee4] text-2xl md:text-3xl font-semibold whitespace-nowrap">
                  {PRICE.value}
                </div>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-3 mt-5 rounded-full bg-[#7f9a73] hover:bg-[#728c67] text-[#f2eee4] text-sm font-semibold py-3.5 transition-colors duration-300"
              >
                Записаться на приём
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
