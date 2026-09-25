import React, { useEffect } from "react";
import { X } from "lucide-react";

const VideoModal = ({ src, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (src) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0d110f]/90 backdrop-blur-sm p-4"
      onClick={onClose}
      style={{ animation: "fadeUp 0.3s both" }}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-11 h-11 rounded-full border border-[#ffffff40] text-[#ece6da] flex items-center justify-center hover:bg-[#ffffff1a] transition-colors"
        aria-label="Закрыть"
      >
        <X size={20} />
      </button>
      <div
        className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <video src={src} controls autoPlay playsInline className="w-full h-auto bg-black" />
      </div>
    </div>
  );
};

export default VideoModal;
