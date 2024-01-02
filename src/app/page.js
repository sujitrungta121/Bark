
'use client'
import Image from 'next/image'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Body from './components/Body'
import { useState } from 'react';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main className="flex  flex-col  p-5 gap-8 "   onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
      <Navbar isHovered={isHovered}/>
<Body/>

      <Footer/>
    
    </main>
  )
}
