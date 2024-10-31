// src/app/page.tsx

"use client";

import LandingPage from "../components/Landingpage";
import PizzaMenu from "../components/PizzaMenu"; 


export default function Home() {
  return (
    <div>
      {/* Landing Page s videem přes celý viewport */}
      <LandingPage />

     
      {/* Nabídka s jídlem */}
      <div className="p-8">
        <PizzaMenu />
      </div>
    </div>
  );
}
