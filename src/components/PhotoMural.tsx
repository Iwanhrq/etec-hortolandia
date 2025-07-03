import React from 'react';
import { useAnimeOnView } from '../hooks/useAnimeOnView';

interface Photo {
  image: string;
}

interface PhotoMuralProps {
  photos: Photo[];
}

const photoSizes = [
  'col-span-2 row-span-1 aspect-[2/1]',  // larga
  'col-span-1 row-span-2 aspect-[1/2]',  // alta
  'col-span-2 row-span-2 aspect-[2/2]',  // grande
  'col-span-1 row-span-1 aspect-square', // pequena
  'col-span-1 row-span-1 aspect-square',
  'col-span-2 row-span-1 aspect-[2/1]',
  'col-span-1 row-span-2 aspect-[1/2]',
  'col-span-1 row-span-1 aspect-square',
  'col-span-2 row-span-2 aspect-[2/2]',
];

const PhotoMural: React.FC<PhotoMuralProps> = ({ photos }) => {
  return (
    <div className="w-full">
      {/* Grid responsivo com preenchimento compacto */}
      <div className="hidden sm:grid grid-cols-4 grid-flow-dense gap-4 w-full max-w-6xl mx-auto">
        {photos.map((photo, idx) => {
          const PhotoItem = () => {
            const photoRef = useAnimeOnView<HTMLDivElement>({ 
              animation: { 
                opacity: [0, 1], 
                scale: [0.8, 1], 
                duration: 800, 
                easing: 'out(3)',
                delay: idx * 200 // Delay sequencial: cada foto aparece 200ms após a anterior
              }, 
              once: true 
            });

            return (
              <div
                ref={photoRef}
                className={`rounded-2xl overflow-hidden shadow-lg bg-white/10 ${photoSizes[idx % photoSizes.length]}`}
              >
                <img
                  src={photo.image}
                  alt={`Foto ${idx + 1}`}
                  className={
                    idx === 2
                      ? 'object-cover object-center max-w-full max-h-full mx-auto my-auto -translate-y-16'
                      : 'w-full h-full object-cover object-center'
                  }
                />
              </div>
            );
          };

          return <PhotoItem key={idx} />;
        })}
      </div>

      {/* Carrossel para mobile */}
      <div className="sm:hidden flex gap-4 overflow-x-auto pb-2 w-full max-w-full">
        {photos.map((photo, idx) => {
          const MobilePhotoItem = () => {
            const mobilePhotoRef = useAnimeOnView<HTMLDivElement>({ 
              animation: { 
                opacity: [0, 1], 
                translateX: [50, 0], 
                duration: 600, 
                easing: 'out(3)',
                delay: idx * 150 // Delay menor para mobile
              }, 
              once: true 
            });

            return (
              <div
                ref={mobilePhotoRef}
                className="min-w-[80vw] max-w-xs bg-white/10 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center"
              >
                <img
                  src={photo.image}
                  alt={`Foto ${idx + 1}`}
                  className="object-cover object-center w-full h-64"
                />
              </div>
            );
          };

          return <MobilePhotoItem key={idx} />;
        })}
      </div>
    </div>
  );
};

export default PhotoMural;
