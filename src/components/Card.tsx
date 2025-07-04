import React, { useEffect, useRef, useState } from 'react';
import { animate, createScope } from 'animejs';

interface CardProps {
  image: string;
  title: string;
}

const getSectionId = (title: string) => {
  const t = title.toLowerCase();
  console.log('Título recebido:', title, 'Título em lowercase:', t);
  if (t.includes('festival')) {
    console.log('Retornando ID: festival');
    return 'festival';
  }
  if (t.includes('nutritec')) {
    console.log('Retornando ID: nutritec');
    return 'nutritec';
  }
  if (t.includes('portas abertas') || t.includes('epa')) {
    console.log('Retornando ID: epa');
    return 'epa';
  }
  if (t.includes('sistema')) return 'ds';
  if (t.includes('admin')) return 'adm';
  if (t.includes('nutri')) return 'nutri';
  console.log('Nenhum ID encontrado para:', title);
  return '';
};

const scrollToSection = (id: string) => {
  console.log('Tentando scroll para:', id);
  const el = document.getElementById(id);
  if (el) {
    console.log('Elemento encontrado, fazendo scroll...');
    // Usar scrollIntoView com offset para considerar o header fixo
    const headerHeight = 80; // Altura aproximada do header
    const elementPosition = el.offsetTop - headerHeight;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth',
    });
  } else {
    console.log('Elemento não encontrado:', id);
  }
};

function useCardAnimeOnView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const scope = useRef<any>(null);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    let hasAnimated = false;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          scope.current = createScope({ root: ref }).add(() => {
            animate(el, {
              opacity: [0, 1],
              translateY: [24, 0],
              duration: 1800,
              easing: 'out(3)',
            });
          });
          hasAnimated = true;
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (scope.current) scope.current.revert();
    };
  }, []);
  return ref;
}

const Card: React.FC<CardProps> = ({ image, title }) => {
  const [hovered, setHovered] = useState(false);
  const sectionId = getSectionId(title);
  const cardRef = useCardAnimeOnView<HTMLDivElement>();
  const h3Ref = useRef<HTMLHeadingElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!h3Ref.current || !btnRef.current) return;
    let hasAnimated = false;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animate(h3Ref.current!, {
            opacity: [0, 1],
            translateY: [24, 0],
            duration: 1800,
            easing: 'out(3)',
          });
          animate(btnRef.current!, {
            opacity: [0, 1],
            translateY: [24, 0],
            duration: 1800,
            easing: 'out(3)',
            delay: 300,
          });
          hasAnimated = true;
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(cardRef.current!);
    return () => observer.disconnect();
  }, [cardRef]);

  return (
    <div
      ref={cardRef}
      className="card-anim bg-white/10 rounded-3xl shadow-lg overflow-hidden flex flex-col items-center max-w-xs sm:max-w-sm md:max-w-md w-full mx-auto relative cursor-pointer group"
      style={{ opacity: 0, transform: 'translateY(40px)' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={image} alt={title} className="w-full h-120 object-cover" />
      <div className="flex-1 flex items-end w-full">
        <h3 ref={h3Ref} style={{ opacity: 0, transform: 'translateY(40px)' }} className="w-full text-center text-xl font-light text-white py-4 bg-[#010512]/80">{title}</h3>
      </div>
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0 pointer-events-none group-hover:opacity-100'}`}
      >
        <button
          ref={btnRef}
          style={{ opacity: 0, transform: 'translateY(40px)' }}
          className="bg-white text-black px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition cursor-pointer"
          onClick={() => {
            console.log('Botão clicado, sectionId:', sectionId);
            if (sectionId) {
              scrollToSection(sectionId);
            } else {
              console.log('SectionId não encontrado para:', title);
            }
          }}
        >
          Saiba mais
        </button>
      </div>
    </div>
  );
};

export default Card; 