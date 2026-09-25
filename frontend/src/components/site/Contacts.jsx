import React from "react";
import { MapPin, Clock, Phone, MessageCircle, Instagram, MapPinned } from "lucide-react";
import { CONTACTS, IMG, WHATSAPP_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE, TWOGIS_URL } from "../../mock";

const Contacts = () => {
  return (
    <section id="contacts" className="relative bg-[#171d19] overflow-hidden">
      {/* atmospheric photo blending into dark */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-[52%] pointer-events-none">
        <img src={IMG.roomTable} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#171d19] via-[#171d19]/85 md:via-[#171d19]/70 to-[#171d19]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171d19] via-transparent to-[#171d19]/60" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-8 py-20 md:py-28">
        <span className="label-caps text-[#8fa085]">Контакты</span>
        <div className="grid lg:grid-cols-2 gap-12 mt-4">
          {/* left: heading + CTA */}
          <div>
            <h2 className="font-display text-[#f2eee4] font-medium leading-[0.98] text-[3rem] md:text-[4.2rem]">
              Запишитесь
              <br />
              на приём
            </h2>
            <p className="text-[#98a196] text-base mt-4 max-w-sm">
              Выберите удобный способ связи
            </p>

            <div className="flex flex-col gap-3 mt-8 max-w-sm">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-full bg-[#7f9a73] hover:bg-[#728c67] text-[#f2eee4] text-sm font-semibold px-6 py-4 transition-colors duration-300"
              >
                <MessageCircle size={18} />
                Написать в WhatsApp
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-full border border-[#4a564d] hover:border-[#8fa085] text-[#e7e3d8] text-sm font-semibold px-6 py-4 transition-colors duration-300"
              >
                <Instagram size={18} />
                Написать в Instagram
              </a>
            </div>
          </div>

          {/* right: info blocks */}
          <div className="space-y-7 lg:pt-4">
            <InfoBlock icon={MapPin} title="Адрес">
              <div className="text-[#c8cec4]">{CONTACTS.city}</div>
              {CONTACTS.address.map((a) => (
                <div key={a} className="text-[#c8cec4]">{a}</div>
              ))}
            </InfoBlock>

            <InfoBlock icon={Clock} title="График работы">
              {CONTACTS.hours.map((h) => (
                <div key={h} className="text-[#c8cec4]">{h}</div>
              ))}
            </InfoBlock>

            <InfoBlock icon={Phone} title="Телефон">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="text-[#c8cec4] hover:text-[#f2eee4] transition-colors">
                {CONTACTS.phone}
              </a>
            </InfoBlock>

            <InfoBlock icon={Instagram} title="Instagram">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="text-[#c8cec4] hover:text-[#f2eee4] transition-colors">
                {INSTAGRAM_HANDLE}
              </a>
            </InfoBlock>

            <InfoBlock icon={MapPinned} title="2GIS">
              {TWOGIS_URL ? (
                <a href={TWOGIS_URL} target="_blank" rel="noreferrer" className="text-[#c8cec4] hover:text-[#f2eee4] transition-colors">
                  Открыть в 2GIS
                </a>
              ) : (
                <span className="text-[#7f887e]">Скоро</span>
              )}
            </InfoBlock>
          </div>
        </div>

        <div className="mt-16 pt-7 border-t border-[#2a332d] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="font-display text-[#e7e3d8] text-lg">Евгений Нигматуллин — врач-остеопат</div>
          <div className="text-[#6b746a] text-xs">© {new Date().getFullYear()} Остеопатия в Алматы</div>
        </div>
      </div>
    </section>
  );
};

const InfoBlock = ({ icon: Icon, title, children }) => (
  <div className="flex gap-4">
    <span className="shrink-0 w-11 h-11 rounded-full border border-[#3d4a42] text-[#8fa085] flex items-center justify-center">
      <Icon size={17} strokeWidth={1.5} />
    </span>
    <div>
      <div className="label-caps text-[#7f887e] text-[0.62rem] mb-1.5">{title}</div>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  </div>
);

export default Contacts;
