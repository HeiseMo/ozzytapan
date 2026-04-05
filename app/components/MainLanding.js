'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';

const socialLinks = [
  { name: 'Facebook', icon: '/icons8-facebook.svg', url: 'https://www.facebook.com/ozzytapanmusic' },
  { name: 'Amazon Music', icon: '/icons8-amazon-music.svg', url: 'https://music.amazon.com/artists/B0951KWTKL/ozzy-tapan' },
  { name: 'TikTok', icon: '/icons8-tiktok-50.svg', url: 'https://www.tiktok.com/@ozzytapanmusic' },
  { name: 'Deezer', icon: '/icons8-deezer.svg', url: 'https://www.deezer.com/de/artist/133097282' },
  { name: 'Instagram', icon: '/icons8-instagram.svg', url: 'https://www.instagram.com/ozzytapanmusic' },
  { name: 'Spotify', icon: '/icons8-spotify.svg', url: 'https://open.spotify.com/intl-de/artist/22Gr8xchrgr8UljsGjNQen?si=8DaEQ9qhTBW-Bqie0WZNkw&nd=1&dlsi=13023b2e1cc6400e' },
  { name: 'Apple Music', icon: '/icons8-itunes.svg', url: 'https://music.apple.com/de/artist/ozzy-tapan/1567772364' },
  { name: 'SoundCloud', icon: '/icons8-soundcloud.svg', url: 'https://soundcloud.com/ozzytapan' },
  { name: 'Shop', icon: '/icons8-shopify.svg', url: 'https://m1u23q-pv.myshopify.com/' },
];

export default function MainLanding() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const homeRef = useRef(null);

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-auto">
      <section ref={homeRef} className="snap-start h-screen bg-black flex flex-col items-center justify-between p-4 relative">
        <Image
          src="/images/ozzy-main.jpg"
          alt="Ozzy Tapan"
          layout="fill"
          objectFit="contain"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute top-4 left-4 z-20">
          <Image
            src="/images/logo-white.png"
            alt="Logo"
            width={50}
            height={25}
            className="w-8 h-8 md:w-[50px] md:h-[50px]"
            objectFit="contain"
          />
        </div>

        <div className="relative z-10 flex-grow flex flex-col items-start justify-center w-full pl-8">
          <div className="md:static absolute top-20 left-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 md:mb-4 text-white font-glancyr-neue-bold">OZZY</h1>
            <h1 className="text-4xl md:text-6xl font-bold mb-2 md:mb-4 text-white font-glancyr-neue-bold">TAPAN.</h1>
            <p className="text-xl md:text-2xl text-white font-poppins">SONGWRITER,</p>
            <p className="text-xl md:text-2xl text-white font-poppins">PRODUCER &</p>
            <p className="text-xl md:text-2xl text-white font-poppins">ARTIST</p>
          </div>
        </div>

        <div className="relative z-10 w-full flex justify-center items-center mb-20 bg-black bg-opacity-20 rounded-full p-2 flex-wrap">
          {socialLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 my-1 transition-all duration-300 ease-in-out transform hover:scale-125"
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
      </section>
    </div>
  );
}
