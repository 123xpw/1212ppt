/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Database } from 'lucide-react';
import { 
  TitleSlide, 
  ProblemSolutionSlide, 
  ArchitectureSlide, 
  IntegritySlide, 
  TriggersSlide, 
  ViewsSlide, 
  PerformanceSlide, 
  ConclusionSlide 
} from './components/Slides';

const SLIDES = [
  TitleSlide,
  ProblemSolutionSlide,
  ArchitectureSlide,
  IntegritySlide,
  TriggersSlide,
  ViewsSlide,
  PerformanceSlide,
  ConclusionSlide
];

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1 < SLIDES.length ? prev + 1 : prev));
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = SLIDES[currentSlide];

  return (
    <div className="w-full h-screen bg-[#F8FAFC] text-slate-800 overflow-hidden flex flex-col font-sans selection:bg-steel-blue selection:text-white">
      
      {/* Header / Progress */}
      <div className="fixed top-0 left-0 w-full h-2 bg-slate-200 z-50">
        <motion.div 
          className="h-full bg-steel-blue" 
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / SLIDES.length) * 100}%` }}
        />
      </div>

      <header className="absolute top-6 left-8 z-40 flex items-center gap-2 text-steel-blue opacity-50">
        <Database size={20} />
        <span className="font-bold tracking-widest text-xs uppercase">Curio Travel DB Design</span>
      </header>

      <header className="absolute top-6 right-8 z-40 text-slate-400 text-xs font-mono">
        {currentSlide + 1} / {SLIDES.length}
      </header>

      {/* Main Slide Area */}
      <main className="flex-1 relative flex items-center justify-center p-8 md:p-16">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full max-w-6xl mx-auto bg-white shadow-2xl rounded-xl border border-slate-100 overflow-hidden relative flex flex-col"
          >
             <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 right-8 z-50 flex gap-4">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-3 rounded-full bg-white shadow-md border border-slate-200 text-slate-600 hover:text-steel-blue hover:border-steel-blue disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          disabled={currentSlide === SLIDES.length - 1}
          className="p-3 rounded-full bg-steel-blue shadow-lg shadow-steel-blue/30 text-white hover:bg-sky-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default App;