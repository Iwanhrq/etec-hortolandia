import React, { useEffect, useRef, useState } from 'react';
import { animate, createScope } from 'animejs';

interface CardProps {
  image: string;
  title: string;
}

const getSectionId = (title: string) => {
  if (title.toLowerCase().includes('sistema')) return 'ds';
  if (title.toLowerCase().includes('admin')) return 'adm';
  if (title.toLowerCase().includes('nutri')) return 'nutri';
  return '';
};

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({
      top: el.offsetTop - 80,
      behavior: 'smooth',
    });
  }
};

const Card: React.FC<CardProps> = ({ image, title }) => {
  const [hovered, setHovered] = useState(false);
  const sectionId = getSectionId(title);
  const root = useRef<HTMLDivElement>(null);
  const scope = useRef<any>(null);

  useEffect(() => {
    scope.current = createScope({ root }).add(() => {
      animate('.card-anim', {
        opacity: [0, 1],
        translateY: [40, 0],
        duration: 1200,
        easing: 'out(3)',
      });
    });
    return () => scope.current.revert();
  }, []);

  return (
    <div
      ref={root}
      className="card-anim bg-white/10 rounded-3xl shadow-lg overflow-hidden flex flex-col items-center max-w-xs sm:max-w-sm md:max-w-md w-full mx-auto relative cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={image} alt={title} className="w-full h-120 object-cover" />
      <div className="flex-1 flex items-end w-full">
        <h3 className="w-full text-center text-xl font-light text-white py-4 bg-[#010512]/80">{title}</h3>
      </div>
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0 pointer-events-none group-hover:opacity-100'}`}
      >
        <button
          className="bg-white text-black px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition cursor-pointer"
          onClick={() => scrollToSection(sectionId)}
        >
          Ir para o curso
        </button>
      </div>
    </div>
  );
};

export default Card; 