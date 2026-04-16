import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { LayoutDashboard, Shield, Lock, ShieldCheck, CheckSquare, Server } from "lucide-react";

import SlideHero from "./components/SlideHero";
import SlideRole1A from "./components/SlideRole1A";
import SlideTopology from "./components/SlideTopology";
import SlideRole2A from "./components/SlideRole2A";
import SlideRole2B from "./components/SlideRole2B";
import SlideRole3A from "./components/SlideRole3A";
import SlideRole3B from "./components/SlideRole3B";
import SlideRole4A from "./components/SlideRole4A";
import SlideRole4B from "./components/SlideRole4B";
import SlideRole4C from "./components/SlideRole4C";
import SlideRole5A from "./components/SlideRole5A";
import SlideRole5B from "./components/SlideRole5B";
import SlideRole5C from "./components/SlideRole5C";
import LogoITSE from "./assets/LogoITSE_Blanco.png";

export default function App() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-92.307692%"]);

  const [activeIndex, setActiveIndex] = useState(-1);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const currentSlide = Math.round(latest * 12);
    let group = -1;
    if (currentSlide >= 1 && currentSlide <= 2) group = 0;
    if (currentSlide >= 3 && currentSlide <= 4) group = 1;
    if (currentSlide >= 5 && currentSlide <= 6) group = 2;
    if (currentSlide >= 7 && currentSlide <= 9) group = 3;
    if (currentSlide >= 10 && currentSlide <= 12) group = 4;
    setActiveIndex(group);
  });

  const icons = [LayoutDashboard, Shield, Lock, CheckSquare, Server];

  // Navigation logic
  const scrollToRole = (idx) => {
    let targetSlideIndex = 0;
    if (idx === 0) targetSlideIndex = 1;      // Arquitectura
    else if (idx === 1) targetSlideIndex = 3; // Criptografía
    else if (idx === 2) targetSlideIndex = 5; // Autenticación
    else if (idx === 3) targetSlideIndex = 7; // Cumplimiento
    else if (idx === 4) targetSlideIndex = 10; // Operaciones
    
    // Each slide corresponds to 100vh of vertical scroll
    const targetY = targetSlideIndex * window.innerHeight;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  return (
    <>
      {/* Branding Overlay */}
      <div className="fixed top-0 left-0 w-full z-50 pointer-events-none p-4 md:p-8 flex justify-between items-start">
        <div className="flex flex-col">
          <h1 className="text-lg md:text-xl font-bold text-cyan-400 uppercase tracking-widest pointer-events-auto">
            Pangea VPN S2S
          </h1>
          <h2 className="text-sm md:text-base text-blue-400/80 font-mono">
            Fundamentos de Criptografía
          </h2>
        </div>
        
        {/* Centered Logo ITSE (Fades out when scrolling) */}
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0, 0.05, 0.0833, 1], [1, 0.3, 0, 0]) }}
          className="absolute left-1/2 transform -translate-x-1/2 top-4 md:top-8 pointer-events-none"
        >
          <img 
            src={LogoITSE} 
            alt="Logo ITSE" 
            className="w-[198px] md:w-[270px] object-contain" 
          />
        </motion.div>

        <div className="text-right flex flex-col items-end pointer-events-auto">
          <p className="text-sm md:text-base text-slate-300 whitespace-nowrap hidden sm:block">C. Araúz · M. Pimentel · N. Cisneros</p>
          <p className="text-sm md:text-base text-slate-300 sm:hidden">C.A · M.P · N.C</p>
          <p className="text-xs md:text-sm text-slate-500 font-mono">Prof: Santos Douglas</p>
        </div>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 z-50 pointer-events-none"
        style={{ width: "100%", scaleX: scrollYProgress, transformOrigin: '0% 50%' }}
      />

      {/* Main Container to generate scroll area - 13 slides = 1300vh */}
      <div ref={targetRef} className="h-[1300vh] bg-cyber-black text-slate-50 relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
          
          {/* Track */}
          <motion.div style={{ x }} className="flex w-[1300vw] h-full">
            <div className="w-screen h-full flex items-center justify-center p-6 md:p-12 shrink-0"><SlideHero /></div>
            <div className="w-screen h-full flex items-center justify-center p-6 md:p-12 shrink-0"><SlideRole1A /></div>
            <div className="w-screen h-full flex items-center justify-center p-6 md:p-12 shrink-0"><SlideTopology /></div>
            <div className="w-screen h-full flex items-center justify-center p-6 md:p-12 shrink-0"><SlideRole2A /></div>
            <div className="w-screen h-full flex items-center justify-center p-6 md:p-12 shrink-0"><SlideRole2B /></div>
            <div className="w-screen h-full flex items-center justify-center p-6 md:p-12 shrink-0"><SlideRole3A /></div>
            <div className="w-screen h-full flex items-center justify-center p-6 md:p-12 shrink-0"><SlideRole3B /></div>
            <div className="w-screen h-full flex items-center justify-center p-6 md:p-12 shrink-0"><SlideRole4A /></div>
            <div className="w-screen h-full flex items-center justify-center p-6 md:p-12 shrink-0"><SlideRole4B /></div>
            <div className="w-screen h-full flex items-center justify-center p-6 md:p-12 shrink-0"><SlideRole4C /></div>
            <div className="w-screen h-full flex items-center justify-center p-6 md:p-12 shrink-0"><SlideRole5A /></div>
            <div className="w-screen h-full flex items-center justify-center p-6 md:p-12 shrink-0"><SlideRole5B /></div>
            <div className="w-screen h-full flex items-center justify-center p-6 md:p-12 shrink-0"><SlideRole5C /></div>
          </motion.div>

          {/* Lateral Slide Group Indicators (5 icons for 5 roles) */}
          <div className="fixed right-4 md:right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50">
            {icons.map((Icon, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => scrollToRole(idx)}
                  className={`w-10 h-10 rounded-full bg-slate-900/50 backdrop-blur flex items-center justify-center transition-all duration-300 border cursor-pointer hover:bg-slate-800 pointer-events-auto ${
                    isActive 
                      ? "text-cyan-400 border-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.3)] scale-110" 
                      : "text-slate-500 border-slate-700"
                  }`}
                >
                  <Icon size={18} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
