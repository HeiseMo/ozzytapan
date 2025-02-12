'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaSpotify, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { SiOnlyfans } from 'react-icons/si';

const links = [
  { name: 'Spotify', url: 'https://spotify.com/artist', Icon: FaSpotify },
  { name: 'Instagram', url: 'https://instagram.com/artist', Icon: FaInstagram },
  { name: 'Contact', url: '/contact', Icon: FaEnvelope },
];

export default function ProfessionalLinktree() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#020617] p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="overflow-hidden shadow-2xl bg-gradient-to-br from-[#0A192F] to-[#1E3A8A] text-[#EFEFEF] rounded-3xl">
          <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: "url('/images/bg.jpg')" }}>
            <div className="absolute -bottom-16 w-full flex justify-center">
              <img
                src="/images/ozzy-logo.png"
                alt="Ozzy Tapan"
                className="w-32 h-32 rounded-full border-4 border-[#212E47] shadow-xl"
              />
            </div>
          </div>
          <div className="pt-20 pb-10 px-6">
            <h2 className="text-3xl font-bold mb-2 text-center font-GlancyrNeue-Bold">Ozzy Tapan</h2>
            <p className="text-[#EFEFEF] mb-6 text-center font-GlancyrNeue-Regular">Dropping beats and melting hearts 💖</p>
            <div className="mb-8">
              <iframe 
                style={{borderRadius: '12px'}} 
                src="https://open.spotify.com/embed/track/3bQiITRsyW0C34CELN2wqN?utm_source=generator&theme=1" 
                width="100%" 
                height="152" 
                frameBorder="0" 
                allowFullScreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
              ></iframe>
            </div>
            <div className="space-y-4 mb-8">
              {links.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.url}
                    target={link.url.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="flex items-center w-full bg-[#3E6480] hover:bg-[#5D1A1F] text-[#EFEFEF] py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 font-Poppins-Regular"
                  >
                    <link.Icon className="text-2xl mr-4 w-8" />
                    <span className="flex-grow text-left">{link.name}</span>
                    {link.url.startsWith('http') && (
                      <ExternalLink className="ml-2 h-4 w-4" />
                    )}
                  </a>
                </motion.div>
              ))}
            </div>

            <button
              className="w-full bg-[#0A192F] hover:bg-[#1E3A8A] text-[#EFEFEF] font-bold py-3 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 font-GlancyrNeue-Bold"
              onClick={() => window.location.href = '/main'}
            >
              Visit Main Site
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}