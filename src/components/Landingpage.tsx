"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  // Sample banner data
  const banners = [
    {
      image: "/images/nightshopping.webp",
      title: "Extra sleva na multipacky 😍",
      description: "Zásob se tento týden oblíbenými produkty a ušetři dvojnásob.",
      buttonText: "Koupit",
      link: "/multipack-sale",
    },
    {
      image: "/images/advent-calendar.jpg",
      title: "Nejoblíbenější Vilgain snacky? 🎄",
      description: "Nenech si ujít limitky adventních kalendářů v předprodeji.",
      buttonText: "Koupit",
      link: "/advent-calendar",
    },
    {
      image: "/images/seasonal-limited.jpg",
      title: "Sezónní limitka, která zahřeje i osvěží 🍊",
      description: "Spojení citrusů a koření v Clear Whey Isolate s 85 % bílkovin.",
      buttonText: "Koupit",
      link: "/seasonal-limited",
    },
    {
      image: "/images/vitamins.jpg",
      title: "Předcházej podzimním nachlazením 🤧",
      description: "Udělej si zásobu vitamínů a dalších doplňků stravy na podporu imunity.",
      buttonText: "Koupit",
      link: "/vitamins",
    },
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {banners.map((banner, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg group h-80 flex flex-col"
          >
            {/* Background Image */}
            <Image
              src={banner.image}
              alt={banner.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
            />
            
            {/* Overlay for Text */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white">
              <h2 className="text-lg font-bold mb-2 leading-tight">{banner.title}</h2>
              <p className="text-sm mb-4 leading-snug">{banner.description}</p>
              <Link href={banner.link} passHref>
                <a className="inline-block bg-yellow-500 text-black font-semibold py-2 px-4 rounded-full text-center transition-transform transform hover:scale-105">
                  {banner.buttonText}
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
