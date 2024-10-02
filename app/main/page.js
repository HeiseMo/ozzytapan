'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, Skeleton, Divider, Chip, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { FaChevronDown, FaShoppingCart, FaCalendarAlt, FaMapMarkerAlt, FaTicketAlt } from 'react-icons/fa';

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
            <p className="text-xl md:text-2xl text-white font-poppins">MUSICIAN,</p>
            <p className="text-xl md:text-2xl text-white font-poppins">ARTIST &</p>
            <p className="text-xl md:text-2xl text-white font-poppins">SONGWRITER</p>
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

        <div className="relative z-10 w-full flex justify-center mt-auto font-poppins mb-10">
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
        <h2 className="text-5xl font-bold mb-12 text-center text-white font-glancyr-neue-bold">Official Merch</h2>
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
      className="font-bold text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-poppins"
    >
      Shop All Merch
    </Button>
        </div>
        <div className="mt-8 flex justify-center font-poppins">
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

      <section ref={eventsRef} className="snap-start min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-8 flex flex-col">
        <h2 className="text-5xl font-bold mb-12 text-center text-white font-glancyr-neue-bold">Upcoming Events</h2>
        <div className="space-y-6 flex-grow max-w-4xl mx-auto w-full">
          {events.map((event, index) => (
            <Card key={index} className="w-full bg-gray-800 border border-gray-700 hover:border-primary transition-all duration-300" isPressable onPress={() => openTicketModal(event)}>
              <CardBody className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary text-white rounded-lg p-3 text-center min-w-[80px]">
                      <p className="text-2xl font-bold">{new Date(event.date).getDate()}</p>
                      <p className="text-sm uppercase">{new Date(event.date).toLocaleString('default', { month: 'short' })}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{event.venue}</h3>
                      <p className="text-gray-400 flex items-center gap-2">
                        <FaMapMarkerAlt /> {event.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Chip color="warning" variant="flat" className="hidden md:flex">Limited Tickets</Chip>
                    <Button 
                      color="secondary" 
                      variant="shadow" 
                      endContent={<FaTicketAlt />}
                      className="font-semibold"
                    >
                      Get Tickets
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
        <div className="mt-12 flex justify-center font-poppins">
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

        <Modal 
          isOpen={isOpen} 
          onClose={onClose}
          backdrop="blur"
          size="3xl"
          className="bg-transparent flex items-center justify-center"
        >
          <ModalContent className="max-w-3xl w-full mx-4">
            {(onClose) => (
              <div className="bg-gradient-to-br from-purple-600 to-indigo-800 p-1 rounded-xl shadow-2xl">
                <div className="bg-gray-900 text-white p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-3xl font-bold mb-2">Ozzy Tapan Live</h2>
                      <h3 className="text-xl font-semibold text-purple-400">{selectedEvent?.venue}</h3>
                    </div>
                    <div 
                      onClick={onClose}
                      className="text-gray-400 hover:text-white cursor-pointer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-purple-500 text-white rounded-lg p-3 text-center min-w-[80px]">
                        <p className="text-2xl font-bold">{selectedEvent && new Date(selectedEvent.date).getDate()}</p>
                        <p className="text-sm uppercase">{selectedEvent && new Date(selectedEvent.date).toLocaleString('default', { month: 'short' })}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Date</p>
                        <p className="text-lg">{selectedEvent && new Date(selectedEvent.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="text-lg">{selectedEvent?.location}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-sm text-gray-400 mb-2">Event Details</p>
                    <p className="text-gray-300">
                    Join us for an unforgettable night of music and energy as Ozzy Tapan takes the stage at {selectedEvent?.venue}. 
                    Don&apos;t miss this opportunity to experience the electrifying performance live!
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-400">Ticket Type</p>
                      <p className="text-lg font-semibold">General Admission</p>
                    </div>
                    <div 
                      className="bg-secondary text-white font-bold py-2 px-4 rounded flex items-center cursor-pointer hover:bg-secondary-dark transition-colors duration-300"
                      onClick={() => {/* Add your ticket purchase logic here */}}
                    >
                      Buy Tickets
                      <FaTicketAlt className="ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </ModalContent>
        </Modal>
      </section>
    </div>
  );
}