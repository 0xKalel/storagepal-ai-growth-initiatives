import React, { useState, useEffect } from 'react';
import { 
  Calendar, Code2, Layout, Filter, PackageSearch,
  QrCode, ShoppingBag, RefreshCcw, Users, Truck
} from 'lucide-react';
import Phase3SlideComponent from './RoadmapSlides/Phase3Slide';

// Reusable components
const AnimatedFeature = ({ icon: Icon, title, description, delay = 0 }) => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`bg-slate-900/50 backdrop-blur rounded-xl p-6 border border-slate-800 transform transition-all duration-700 hover:border-[#fe8e68] ${
      animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
    }`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-slate-800/50 rounded-lg">
          <Icon className="w-5 h-5 text-[#fe8e68]" />
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const QuarterHeader = ({ quarter, title, subtitle }) => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <header className={`mb-16 text-center transform transition-all duration-1000 ${
      animate ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
    }`}>
      <div className="inline-block mb-4">
        <div className="flex items-center gap-2 text-[#fe8e68] bg-[#fe8e68]/10 rounded-full px-4 py-2 text-sm font-medium">
          <Calendar className="w-4 h-4" />
          {quarter}
        </div>
      </div>
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fe8e68] to-[#ff6b6b] mb-4">
        {title}
      </h1>
      <p className="text-slate-400 text-lg max-w-2xl mx-auto">
        {subtitle}
      </p>
    </header>
  );
};

// December 2024 + Q1 2025 Slide
export const Phase1Slide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <QuarterHeader 
          quarter="December 2024 - Q1 2025"
          title="System Standardization"
          subtitle="Unifying the backoffice experience and launching QR capabilities"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Backoffice Standardization */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <Layout className="w-6 h-6 text-[#fe8e68]" />
              Backoffice Enhancement
            </h2>
            <AnimatedFeature 
              icon={Filter}
              title="Universal Filtering"
              description="Implementation of consistent filtering capabilities across all backoffice pages"
              delay={100}
            />
            <AnimatedFeature
              icon={Layout}
              title="Unified Layout"
              description="Standardized layout and interface components across the platform"
              delay={200}
            />
            <AnimatedFeature
              icon={PackageSearch}
              title="Bulk Operations"
              description="Comprehensive bulk action capabilities for optimized workflow"
              delay={300}
            />
          </div>

          {/* QR Code App */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <QrCode className="w-6 h-6 text-[#fe8e68]" />
              QR Code Application
            </h2>
            <AnimatedFeature
              icon={QrCode}
              title="Standalone App"
              description="Development of independent QR code application for warehouse management"
              delay={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Q2 2025 Slide
export const Phase2Slide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <QuarterHeader 
          quarter="Q2 2025"
          title="Catalog & Integration Enhancement"
          subtitle="Improving user experience and customer tracking capabilities"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Catalog Enhancement */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <ShoppingBag className="w-6 h-6 text-[#fe8e68]" />
              Catalog Enhancement
            </h2>
            <AnimatedFeature
              icon={RefreshCcw}
              title="Process Optimization"
              description="Enhanced catalog page workflow and improved user experience"
              delay={100}
            />
          </div>

          {/* Integrations */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <Truck className="w-6 h-6 text-[#fe8e68]" />
              Integration Implementation
            </h2>
            <AnimatedFeature
              icon={Truck}
              title="SuperVan API"
              description="Integration for real-time delivery tracking and management"
              delay={200}
            />
            <AnimatedFeature
              icon={Users}
              title="HubSpot Integration"
              description="Real-time customer tracking and lead management system"
              delay={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export const Phase3Slide = Phase3SlideComponent;

// Q4 2025 Slide (V2 Planning)
export const Phase4Slide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <QuarterHeader 
          quarter="Q4 2025"
          title="StoragePal V2 Planning"
          subtitle="Planning the next generation of StoragePal"
        />

        <div className="grid md:grid-cols-1 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <Code2 className="w-6 h-6 text-[#fe8e68]" />
              Version 2 Planning
            </h2>
            <AnimatedFeature
              icon={Code2}
              title="StoragePal V2"
              description="Initial planning and groundwork for the next major version"
              delay={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default {
  Phase1Slide,
  Phase2Slide,
  Phase3Slide,
  Phase4Slide
};