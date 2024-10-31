"use client";

import localFont from "next/font/local";
import "./globals.css";
import { useState } from "react";
import { Search, ShoppingCart, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const navLinks = [
  {
    title: "Královské Produkty",
    slogan: "Vyberte si z naší královské nabídky",
    quickLinks: ["Královské předplatné"],
    featured: [
      { name: "Královské předplatné", image: "/api/placeholder/200/200", slogan: "Výhody pro vás" },
    ]
  },
  {
    title: "Doplňky Stravy",
    slogan: "Doplňky stravy pro vaše zdraví",
    quickLinks: ["Vitamíny a minerály", "Vitamín C", "Vitamín D", "Vitamín K2", "Mix vitamínů a minerálů"],
    specialized: [
      "Pro ženy", "Pro muže", "Na hubnutí a dietu", "Přírodní", "Spánek, nervy, stres",
      "Doplňky stravy pro děti", "Na imunitu", "Vitalita a libido", "Energie a mentální výkon",
      "Vitamíny na vlasy, nehty a pleť", "Doplňky stravy na zažívání a trávení",
      "Speciální doplňky stravy", "Kloubní výživa", "Doplňky stravy na srdce, cévy a krev",
      "Doplňky stravy na zrak a oči"
    ],
    featured: [
      { name: "Vitamín C", image: "/api/placeholder/200/200", slogan: "Pro posílení imunity" },
      { name: "Hořčík", image: "/api/placeholder/200/200", slogan: "Pro relaxaci a zdraví" },
    ]
  },
  {
    title: "Bylinky a Látky",
    slogan: "Přírodní pomocníci pro vaše zdraví",
    quickLinks: ["Maca peruánská", "Kurkuma", "Betaglukan", "Hořčík", "Kolagen", "Zinek", "Reishi"],
    featured: [
      { name: "Ostropestřec", image: "/api/placeholder/200/200", slogan: "Podpora jater" },
      { name: "Kurkuma", image: "/api/placeholder/200/200", slogan: "Proti zánětům" }
    ]
  },
];

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  return (
    <html lang="cs">
      <head>
        <title>Království zdraví</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}>
        <nav className="sticky top-0 z-50 bg-[#bc25a4] text-white">
          <div className="hidden lg:block">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-20">
                <div className="flex-shrink-0 ml-8">
                  <Link href="/">
                    <a className="text-2xl font-bold text-white">Království Zdraví</a>
                  </Link>
                </div>
                <div className="flex justify-center flex-1">
                  {navLinks.map((link, index) => (
                    <div
                      key={index}
                      className="relative group"
                      onMouseEnter={() => setActiveDropdown(index)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="px-4 py-6 flex items-center space-x-1 hover:text-yellow-400 transition-colors font-semibold">
                        <span className="text-sm uppercase">{link.title}</span>
                        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                      </button>
                      <div 
                        className={`fixed left-0 w-full bg-[#bc25a4]/90 border-t border-yellow-500 transform transition-all duration-500 z-50 ${
                          activeDropdown === index 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 -translate-y-4 pointer-events-none'
                        }`}
                      >
                        <div className="container mx-auto py-8 px-4">
                          <div className="text-center mb-6">
                            <h2 className="text-2xl text-yellow-400">{link.slogan}</h2>
                          </div>
                          <div className="grid grid-cols-12 gap-8 text-white">
                            <div className="col-span-3 border-r border-yellow-500/30">
                              <h3 className="text-lg mb-4 text-yellow-400">Kategorie</h3>
                              <ul className="space-y-2">
                                {link.quickLinks.map((category, idx) => (
                                  <li key={idx}>
                                    <a href="#" className="hover:text-yellow-400 transition-colors">
                                      {category}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="col-span-6">
                              <h3 className="text-lg mb-4 text-yellow-400">Doporučujeme</h3>
                              <div className="grid grid-cols-2 gap-6">
                                {link.featured.map((item, idx) => (
                                  <div key={idx} className="relative overflow-hidden rounded-lg shadow-lg">
                                    <Image
                                      src={item.image}
                                      alt={item.name}
                                      width={200}
                                      height={200}
                                      className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110"
                                    />
                                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#bc25a4] to-transparent p-4">
                                      <p className="text-white font-bold">{item.name}</p>
                                      <p className="text-yellow-300 text-sm">{item.slogan}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center space-x-4 mr-8">
                  <button className="hover:text-yellow-400">
                    <Search className="w-5 h-5" />
                  </button>
                  <button className="hover:text-yellow-400">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main>{children}</main>
      </body>
    </html>
  );
}
