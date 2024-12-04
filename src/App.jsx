import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AchievementsSlide from './components/AchivementsSlide';
import IntroSlide from './components/IntroSlide';
import { Phase1Slide, Phase2Slide, Phase3Slide, Phase4Slide } from './components/RoadmapSlides';

const PresentationContainer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const slides = [
    { component: IntroSlide, title: "Introduction" },
    { component: AchievementsSlide, title: "Achievements" },
    { component: Phase1Slide, title: "System Standardization" },
    { component: Phase2Slide, title: "Catalog & Integration" },
    { component: Phase3Slide, title: "AI Implementation" },
    { component: Phase4Slide, title: "V2 Planning" },
  ];

  const handleSlideChange = (direction) => {
    if (transitioning) return;
    
    setTransitioning(true);
    const newSlide = direction === 'next' 
      ? (currentSlide + 1) % slides.length 
      : (currentSlide - 1 + slides.length) % slides.length;
    
    setTimeout(() => {
      setCurrentSlide(newSlide);
      setTransitioning(false);
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'ArrowRight') handleSlideChange('next');
    if (e.key === 'ArrowLeft') handleSlideChange('prev');
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div 
      className="flex flex-col h-screen bg-slate-900 text-white relative"
      tabIndex={0}
      onKeyDown={handleKeyPress}
    >
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-gradient-to-b from-slate-900 to-transparent pt-4 pb-8">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between">
              <span className="text-slate-300 font-medium">
                <span className="text-xl text-white">{currentSlide + 1}</span>
                <span className="mx-2 text-slate-500">/</span>
                <span className="text-lg">{slides.length}</span>
              </span>
              <h2 className="text-lg font-semibold text-white">
                {slides[currentSlide].title}
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto pt-20 pb-32">
        <div className={`container mx-auto px-6 transition-all duration-500 ${
          transitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}>
          <CurrentSlideComponent />
        </div>
      </main>

      {/* Footer navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <div className="bg-gradient-to-t from-slate-900 to-transparent pb-6 pt-12">
          {/* Progress bar */}
          <div className="container mx-auto px-6 mb-6">
            <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-orange-400 to-rose-400 transition-all duration-300"
                style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Controls */}
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center">
              <button
                onClick={() => handleSlideChange('prev')}
                className="group p-3 hover:bg-white/10 rounded-full transition-all"
                disabled={transitioning}
              >
                <ChevronLeft className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
              </button>

              <div className="flex gap-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => !transitioning && setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentSlide === index 
                        ? 'bg-gradient-to-r from-orange-400 to-rose-400' 
                        : 'bg-slate-700 hover:bg-slate-600'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => handleSlideChange('next')}
                className="group p-3 hover:bg-white/10 rounded-full transition-all"
                disabled={transitioning}
              >
                <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationContainer;