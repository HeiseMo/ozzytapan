'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, Skeleton, Divider, Chip, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { FaChevronDown, FaShoppingCart, FaCalendarAlt, FaMapMarkerAlt, FaTicketAlt } from 'react-icons/fa';
import dynamic from 'next/dynamic';

const ShopifyBuyButton = dynamic(() => import('../components/ShopifyBuyButton'), {
  ssr: false
});

const socialLinks = [
  { name: 'TikTok', icon: '/icons8-tiktok-50.svg', url: 'https://www.tiktok.com/@ozzytapanmusic' },
  { name: 'Instagram', icon: '/icons8-instagram.svg', url: 'https://www.instagram.com/ozzytapanmusic' },
  { name: 'Spotify', icon: '/icons8-spotify.svg', url: 'https://open.spotify.com/intl-de/artist/22Gr8xchrgr8UljsGjNQen?si=8DaEQ9qhTBW-Bqie0WZNkw' },
  { name: 'Apple Music', icon: '/icons8-itunes.svg', url: 'https://music.apple.com/de/artist/ozzy-tapan/1567772364' },
  { name: 'Shopify', icon: '/icons8-shopify.svg', url: 'https://m1u23q-pv.myshopify.com/' },
];
/*
  { name: 'Soundcloud', icon: '/icons8-soundcloud.svg', url: 'https://soundcloud.com/ozzytapan' },
  { name: 'Deezer', icon: '/icons8-deezer.svg', url: 'https://www.deezer.com/artist/ozzytapan' },
  { name: 'Amazon Music', icon: '/icons8-amazon-music.svg', url: 'https://music.amazon.com/artists/ozzy-tapan' },
*/

const merchItems = [
    { title: "Limited Edition Tee", description: "Exclusive design", img: "/images/merch-1.jpg", price: "$29.99" },
    { title: "Signature Hoodie", description: "Stay cozy in style", img: "/images/merch-2.jpg", price: "$49.99" },
    { title: "Exclusive Vinyl", description: "Collector&apos;s item", img: "/images/merch-3.jpg", price: "$24.99" },
    { title: "Tour Poster", description: "Commemorate the experience", img: "/images/merch-2.jpg", price: "$19.99" },
    { title: "Album CD", description: "Physical copy with bonus tracks", img: "/images/merch-3.jpg", price: "$14.99" },
  ];

const events = [
  { date: "2023-08-15", venue: "The Fillmore", location: "San Francisco, CA" },
  { date: "2023-08-18", venue: "The Wiltern", location: "Los Angeles, CA" },
  { date: "2023-08-22", venue: "Red Rocks Amphitheatre", location: "Morrison, CO" },
  { date: "2023-08-25", venue: "Madison Square Garden", location: "New York, NY" },
];


export default function MainPage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const homeRef = useRef(null);
  const merchRef = useRef(null);
  const eventsRef = useRef(null);
  const shopRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedEvent, setSelectedEvent] = useState(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const openTicketModal = (event) => {
    setSelectedEvent(event);
    onOpen();
  };

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

        <div className="relative z-10 w-full flex justify-center items-center mb-20 bg-black bg-opacity-20 rounded-full p-2">
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

        {/* Add scroll indicator */}
        <div 
          onClick={() => scrollToSection(shopRef)} 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        >
          <FaChevronDown className="text-white text-3xl" />
        </div>
      </section>

      {/* New Shop Section */}
      <section ref={shopRef} className="snap-start h-screen bg-white flex flex-col items-center justify-center p-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 font-glancyr-neue-bold">SHOP COMING SOON</h2>
        <div className="w-full max-w-4xl">
          <ShopifyBuyButton />
        </div>
      </section>

      {/* Add your other sections here */}
    </div>
  );
}