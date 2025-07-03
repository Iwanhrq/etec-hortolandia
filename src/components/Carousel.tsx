import React, { useState } from 'react';

interface Slide {
  image: string;
  text: string;
}

interface CarouselProps {
  slides: Slide[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const prev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  const next = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1));

  return (
    <div className="w-full max-w-3xl mx-auto relative flex flex-col items-center">
      <div className="w-full h-[28rem] bg-white/10 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg relative">
        <img
          src={slides[current].image}
          alt={slides[current].text}
          className="object-cover w-full h-full transition-all duration-500"
        />
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/80 transition"
          onClick={prev}
          aria-label="Anterior"
        >
          &#8592;
        </button>
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/80 transition"
          onClick={next}
          aria-label="Próximo"
        >
          &#8594;
        </button>
      </div>
      <div className="flex gap-2 mt-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${idx === current ? 'bg-white' : 'bg-white/30'} transition`}
            onClick={() => setCurrent(idx)}
            aria-label={`Ir para slide ${idx + 1}`}
          />
        ))}
      </div>
      <div className="mt-4 text-center text-white text-lg min-h-[2rem]">
        {slides[current].text}
      </div>
    </div>
  );
};

export default Carousel; 