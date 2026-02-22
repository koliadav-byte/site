import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './sections/Header';
import Hero from './sections/Hero';
import MostImportant from './sections/MostImportant';
import WhatWeDo from './sections/WhatWeDo';
import ProductsAccess from './sections/ProductsAccess';
import LatestResearch from './sections/LatestResearch';
import Rubrics from './sections/Rubrics';
import CadenceCalendar from './sections/CadenceCalendar';
import SubscribeContact from './sections/SubscribeContact';
import Sidebar from './sections/Sidebar';
import Footer from './sections/Footer';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize scroll animations
    const sections = document.querySelectorAll('.animate-section');
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <main className="pt-[120px]">
        <Hero />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            <div className="flex-1">
              {/* 1) Navigator as the intellectual center */}
              <MostImportant />

              {/* 2) What we do */}
              <WhatWeDo />

              {/* 3) Products / Access */}
              <ProductsAccess />

              {/* 4) Latest research */}
              <LatestResearch />

              {/* 5) Rubrics */}
              <Rubrics />

              {/* 6) Cadence / Calendar */}
              <CadenceCalendar />

              {/* 7) Subscribe / Contact */}
              <SubscribeContact />
            </div>

            <Sidebar />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
