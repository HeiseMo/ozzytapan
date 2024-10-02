'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaSpotify, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { SiOnlyfans } from 'react-icons/si';

// Remove or comment out these imports if the components don't exist
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";

const links = [
  { name: 'Spotify', url: 'https://spotify.com/artist', Icon: FaSpotify },
  { name: 'Instagram', url: 'https://instagram.com/artist', Icon: FaInstagram },
  { name: 'Onlyfans', url: 'https://onlyfans.com/artist', Icon: SiOnlyfans },
  { name: 'Contact', url: '/contact', Icon: FaEnvelope },
];

export default function ProfessionalLinktree() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-black to-purple-900 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="overflow-hidden shadow-2xl bg-gray-900 text-gray-100 rounded-3xl">
          <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: "url('/images/bg.jpg')" }}>
            <div className="absolute -bottom-16 w-full flex justify-center">
              <img
                src="/images/ozzy.jpg"
                alt="Ozzy Tapan"
                className="w-32 h-32 rounded-full border-4 border-gray-900 shadow-xl"
              />
            </div>
          </div>
          <div className="pt-20 pb-10 px-6">
            <h2 className="text-3xl font-bold mb-2 text-center">Ozzy Tapan</h2>
            <p className="text-gray-400 mb-6 text-center">Dropping beats and melting hearts 💖</p>
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
                    className="flex items-center w-full bg-gray-800 hover:bg-gray-700 text-gray-200 py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
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
              className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold py-3 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
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