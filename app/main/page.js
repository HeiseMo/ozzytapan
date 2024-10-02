'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const socialLinks = [
  { name: 'Facebook', icon: '/icons8-facebook.svg', url: 'https://facebook.com/ozzytapan' },
  { name: 'Instagram', icon: '/icons8-instagram.svg', url: 'https://instagram.com/ozzytapan' },
  { name: 'Spotify', icon: '/icons8-spotify.svg', url: 'https://open.spotify.com/artist/ozzytapan' },
  { name: 'Apple Music', icon: '/icons8-itunes.svg', url: 'https://music.apple.com/us/artist/ozzy-tapan' },
  { name: 'Soundcloud', icon: '/icons8-soundcloud.svg', url: 'https://soundcloud.com/ozzytapan' },
  { name: 'Deezer', icon: '/icons8-deezer.svg', url: 'https://www.deezer.com/artist/ozzytapan' },
  { name: 'Amazon Music', icon: '/icons8-amazon-music.svg', url: 'https://music.amazon.com/artists/ozzy-tapan' },
];

export default function MainPage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-between p-4 relative">
      <Image
        src="/images/ozzy-main.jpg"
        alt="Ozzy Tapan"
        layout="fill"
        objectFit="contain"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center mt-40">
        <h1 className="text-6xl font-bold mb-4 text-white font-glancyr-neue-bold">OZZY TAPAN</h1>
        <p className="text-2xl text-white font-glancyr-neue">MUSICIAN & SONGWRITER</p>
      </div>
      <div className="relative z-10 flex justify-center items-end mb-8 bg-black bg-opacity-20 rounded-full p-2">
        {socialLinks.map((link, index) => (
          <Link
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 transition-all duration-300 ease-in-out transform hover:scale-125"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative">
              <Image
                src={link.icon}
                alt={link.name}
                width={48}
                height={48}
                className={`transition-all duration-300 ease-in-out ${
                  hoveredIndex === index ? 'scale-125' : 
                  (hoveredIndex === index - 1 || hoveredIndex === index + 1) ? 'scale-110' : 'scale-100'
                }`}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}