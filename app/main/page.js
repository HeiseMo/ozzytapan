'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, Skeleton } from "@nextui-org/react";
import { FaChevronDown, FaShoppingCart } from 'react-icons/fa';

const socialLinks = [
  { name: 'Facebook', icon: '/icons8-facebook.svg', url: 'https://facebook.com/ozzytapan' },
  { name: 'Instagram', icon: '/icons8-instagram.svg', url: 'https://instagram.com/ozzytapan' },
  { name: 'Spotify', icon: '/icons8-spotify.svg', url: 'https://open.spotify.com/artist/ozzytapan' },
  { name: 'Apple Music', icon: '/icons8-itunes.svg', url: 'https://music.apple.com/us/artist/ozzy-tapan' },
  { name: 'Soundcloud', icon: '/icons8-soundcloud.svg', url: 'https://soundcloud.com/ozzytapan' },
  { name: 'Deezer', icon: '/icons8-deezer.svg', url: 'https://www.deezer.com/artist/ozzytapan' },
  { name: 'Amazon Music', icon: '/icons8-amazon-music.svg', url: 'https://music.amazon.com/artists/ozzy-tapan' },
];


const merchItems = [
  { title: "Limited Edition Tee", description: "Exclusive design", img: "/images/merch-1.jpg", price: "$29.99" },
  { title: "Signature Hoodie", description: "Stay cozy in style", img: "/images/merch-2.jpg", price: "$49.99" },
  { title: "Exclusive Vinyl", description: "Collector's item", img: "/images/merch-3.jpg", price: "$24.99" },
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

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
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
            objectFit="contain"
          />
        </div>

        <div className="relative z-10 flex-grow flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold mb-4 text-white">OZZY</h1>
          <h1 className="text-6xl font-bold mb-4 text-white">TAPAN.</h1>
          <p className="text-2xl text-white">MUSICIAN & SONGWRITER</p>
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

        <div className="relative z-10 w-full flex justify-center mt-auto">
          <Button 
            onClick={() => scrollToSection(merchRef)}
            color="primary"
            variant="shadow"
            size="lg"
            className="animate-bounce"
            endContent={<FaChevronDown className="ml-2" />}
          >
            Explore Merch
          </Button>
        </div>
      </section>

      <section ref={merchRef} className="snap-start min-h-screen bg-gray-900 p-8 flex flex-col">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">Official Merch</h2>
        <div className="max-w-[900px] mx-auto gap-4 grid grid-cols-12 grid-rows-2 px-8">
          {merchItems.map((item, index) => (
            <Card key={index} className={`col-span-12 ${index < 3 ? 'sm:col-span-4' : index === 3 ? 'sm:col-span-5' : 'sm:col-span-7'} h-[300px] overflow-hidden group`}>
              <CardHeader className="absolute z-10 top-0 flex-col items-start w-full bg-black bg-opacity-50 backdrop-blur-md p-4 transition-all duration-300 group-hover:bg-opacity-70">
                <p className="text-tiny text-white/80 uppercase font-bold">{index === 0 ? 'Featured' : index === 1 ? 'New arrival' : index === 2 ? 'Collector\'s item' : index === 3 ? 'Limited offer' : 'Best seller'}</p>
                <h4 className="text-white font-medium text-xl">{item.title}</h4>
              </CardHeader>
              <Image
                src={item.img}
                alt={item.title}
                className="z-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                width={500}
                height={300}
              />
              <CardFooter className="absolute bottom-0 z-10 bg-black bg-opacity-50 backdrop-blur-md w-full justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button size="sm" color="primary" variant="shadow">
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
        <Button
      as={Link}
      href="https://your-shopify-store-url.com"
      color="secondary"
      variant="shadow"
      size="lg"
      className="font-bold text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
    >
      Shop All Merch
    </Button>
        </div>
        <div className="mt-8 flex justify-center">
          <Button 
            onClick={() => scrollToSection(eventsRef)}
            color="secondary"
            variant="light"
            size="lg"
            className="animate-pulse hover:animate-none"
            endContent={<FaChevronDown className="ml-2" />}
          >
            See Upcoming Events
          </Button>
        </div>
      </section>

      <section ref={eventsRef} className="snap-start min-h-screen bg-gray-800 p-8 flex flex-col">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">Upcoming Events</h2>
        <div className="space-y-4 flex-grow">
          {events.map((event, index) => (
            <Card key={index} className="w-full p-4 bg-gray-700" radius="lg">
              <Skeleton isLoaded={true} className="rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-bold text-white">{event.venue}</p>
                    <p className="text-sm text-gray-300">{event.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-primary">{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                    <Button size="sm" color="secondary" variant="flat">Get Tickets</Button>
                  </div>
                </div>
              </Skeleton>
            </Card>
          ))}
        </div>
        <div className="mt-auto pt-8 flex justify-center">
          <Button 
            onClick={() => scrollToSection(homeRef)}
            color="primary"
            variant="shadow"
            size="lg"
            className="transition-transform hover:scale-105"
            startContent={<FaChevronDown className="mr-2 rotate-180" />}
          >
            Back to Top
          </Button>
        </div>
      </section>
    </div>
  );
}