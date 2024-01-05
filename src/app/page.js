'use client'

import Image from 'next/image';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Body from './components/Body';
import { useEffect, useState } from 'react';
import MobileNav from './components/MobileNav';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      const thresholdWidth = 657;
      const windowWidth = window.innerWidth;
      
      setIsMobile(windowWidth < thresholdWidth);
    };
    checkWindowSize();
    window.addEventListener('resize', checkWindowSize);
    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, []);

  return (
    <main className="flex flex-col  gap-8 " onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Navbar isHovered={isHovered} /> 
      <Body />
      <Footer />
    </main>
  );
}
