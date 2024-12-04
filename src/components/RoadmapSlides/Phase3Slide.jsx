import React, { useState, useEffect } from 'react';
import { 
  Search, Server, Calendar, MapPin, Box,
  ChevronDown, ChevronUp, Layout
} from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, shortDescription, longDescription, features, api, eta, location, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showLongDesc, setShowLongDesc] = useState(false);
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`bg-slate-900/50 backdrop-blur rounded-xl p-6 border border-slate-800 hover:border-[#fe8e68] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#fe8e68]/10 transform ${
        animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-slate-800/50 rounded-lg">
            <Icon className={`w-5 h-5 text-[#fe8e68] transition-transform duration-300 ${isHovered ? 'scale-110 rotate-12' : ''}`} />
          </div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        <span className="bg-slate-800/50 text-[#fe8e68] px-3 py-1 rounded-full text-sm font-medium">
          {eta}d
        </span>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <Layout className="w-4 h-4 text-slate-400" />
        <span className="text-sm text-slate-400">{location}</span>
      </div>

      <div className="space-y-3">
        <p className="text-slate-300 text-sm leading-relaxed">
          {showLongDesc ? longDescription : shortDescription}
        </p>
        <button
          onClick={() => setShowLongDesc(!showLongDesc)}
          className="text-[#fe8e68] flex items-center gap-1 text-sm hover:opacity-80 transition-opacity"
        >
          {showLongDesc ? (
            <>Show less <ChevronUp className="w-4 h-4" /></>
          ) : (
            <>Learn more <ChevronDown className="w-4 h-4" /></>
          )}
        </button>
      </div>

      <div className="mt-4 bg-slate-800/50 rounded-lg p-4 space-y-2">
        {features.map((feature, index) => (
          <p key={index} className="text-slate-300 text-sm">{feature}</p>
        ))}
        <div className="pt-3 mt-3 border-t border-slate-700/50">
          <p className="text-slate-400 text-sm">API: {api}</p>
        </div>
      </div>
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
          Q3 2025
        </div>
      </div>
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fe8e68] to-[#ff6b6b] mb-4 p-5">
        AI Systems Integration
      </h1>
      <p className="text-slate-400 text-lg max-w-2xl mx-auto">
        Deploying advanced AI features to optimize revenue and enhance customer experience
      </p>
    </header>
  );
};

const Phase3Slide = () => {
  const features = [
    {
      icon: Search,
      title: "Smart Search Enhancement",
      shortDescription: "Will increase conversion rates with intuitive search",
      longDescription: "This AI-powered system will boost sales by 25-30% through intelligent search that understands customer intent. It will interpret complex queries like 'my winter camping gear' or 'holiday decorations', automatically suggesting appropriate storage solutions. The technology will analyze past purchase patterns, seasonal trends, and storage requirements to provide highly relevant recommendations. Expected benefits include reduced cart abandonment (15% improvement), increased average order value (20% uplift), and significantly improved customer satisfaction scores. Implementation will require minimal backend integration and can be deployed within existing search infrastructure.",
      features: [
        "Projected ROI: 25-30% conversion rate increase",
        "Expected 15% reduction in cart abandonment"
      ],
      api: "OpenAI GPT-4",
      eta: 10,
      location: "Catalog - Main search bar"
    },
    {
      icon: Server,
      title: "Minimum Requirement Optimizer",
      shortDescription: "Will increase average order value by 35%",
      longDescription: "This system will drive revenue growth through smart cart optimization. It will analyze customer selections to suggest high-margin complementary items that fulfill our 6-item minimum requirement. Based on market analysis, it shows potential to increase average order value by 35% while maintaining high customer satisfaction. The advisor will use purchase patterns to recommend products with the highest attach rates. Implementation costs will be offset within the first month through increased sales. The system will include A/B testing capabilities to continuously optimize recommendation algorithms.",
      features: [
        "Projected ROI: 35% increase in average order value",
        "Expected 1-month payback period"
      ],
      api: "Claude API",
      eta: 15,
      location: "Catalog - Cart summary section"
    },
    {
      icon: Calendar,
      title: "Visit Scheduler Optimization",
      shortDescription: "Will reduce operational costs by 20%",
      longDescription: "This system will streamline operations and reduce costs through AI-powered scheduling. It will optimize warehouse staff allocation and reduce customer wait times by analyzing historical patterns and real-time data. Analysis suggests potential for 20% reduction in operational costs through better resource allocation. Additional projected benefits include 40% reduction in peak-time congestion and 30% improvement in customer satisfaction scores. The system will integrate with existing scheduling infrastructure and include automated reporting for performance tracking.",
      features: [
        "Projected ROI: 20% operational cost reduction",
        "Expected 40% decrease in warehouse congestion"
      ],
      api: "OpenAI GPT-4",
      eta: 15,
      location: "My Space - Visit/Return scheduling"
    },
    {
      icon: MapPin,
      title: "Climate-Smart Storage Advisor",
      shortDescription: "Will reduce damage claims by 45%",
      longDescription: "This system will improve storage recommendations by analyzing item characteristics and environmental factors. It suggests optimal storage solutions based on item type and location data. Analysis shows potential for 45% reduction in damage claims and 25% increase in premium unit sales. The system uses a rule-based matching algorithm to pair items with appropriate storage conditions.",
      features: [
        "Projected ROI: 45% reduction in damage claims",
        "Expected 25% increase in premium storage sales"
      ],
      api: "OpenAI GPT-4",
      eta: 7,
      location: "Catalog - Item recommendations"
    },
    {
      icon: Box,
      title: "Smart Bundle Recommendations",
      shortDescription: "Will increase cross-sell revenue by 40%",
      longDescription: "This system will maximize revenue through AI-powered product bundling and cross-selling. It will analyze purchase patterns and storage behaviors to suggest highly relevant complementary products. Analysis projects 40% increase in cross-sell revenue and 28% improvement in customer lifetime value. The engine will adapt to seasonal trends and inventory levels, ensuring recommendations align with business goals. Implementation will include performance tracking dashboard and A/B testing capabilities for continuous optimization.",
      features: [
        "Projected ROI: 40% increase in cross-sell revenue",
        "Expected 28% improvement in customer lifetime value"
      ],
      api: "OpenAI GPT-3.5",
      eta: 30,
      location: "Catalog - Related items section"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <QuarterHeader 
          quarter="Q3 2025"
          title="AI Systems Integration"
          subtitle="Deploying advanced AI features to optimize revenue and enhance customer experience"
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              {...feature}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Phase3Slide;