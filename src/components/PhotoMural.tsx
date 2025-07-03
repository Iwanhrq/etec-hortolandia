import React from 'react';

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
        {photos.map((photo, idx) => (
          <div
            key={idx}
            className={`rounded-2xl overflow-hidden shadow-lg bg-white/10 ${photoSizes[idx % photoSizes.length]}`}
          >
            <img
              src={photo.image}
              alt={`Foto ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Carrossel para mobile */}
      <div className="sm:hidden flex gap-4 overflow-x-auto pb-2 w-full max-w-full">
        {photos.map((photo, idx) => (
          <div
            key={idx}
            className="min-w-[80vw] max-w-xs bg-white/10 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center"
          >
            <img
              src={photo.image}
              alt={`Foto ${idx + 1}`}
              className="object-cover w-full h-64"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoMural;
