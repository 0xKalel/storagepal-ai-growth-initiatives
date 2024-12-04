import React, { useState, useEffect } from 'react';
import { Code2, Briefcase, Timer, Star, Rocket, Target, CheckCircle, Globe, Zap, Trophy } from 'lucide-react';

const Card = ({ icon: Icon, title, description, stats, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`bg-slate-900/50 backdrop-blur rounded-xl p-6 border border-slate-800 hover:border-orange-400 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-400/10 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-slate-800/50 rounded-lg">
          <Icon className={`w-5 h-5 text-orange-400 transition-transform duration-300 ${isHovered ? 'scale-110 rotate-12' : ''}`} />
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="text-slate-300 text-sm leading-relaxed mb-4">{description}</p>
      {stats && (
        <div className="bg-slate-800/50 rounded-lg p-3">
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">{stats.label}</span>
            <span className="text-orange-400 font-semibold">{stats.value}</span>
          </div>
        </div>
      )}
    </div>
  );
};

const TechBadge = ({ text }) => (
  <span className="bg-slate-800/50 text-orange-400 px-3 py-1 rounded-full text-sm font-medium">
    {text}
  </span>
);

const TimelineItem = ({ title, description, icon: Icon }) => (
  <div className="flex gap-4 items-start">
    <div className="p-2 bg-slate-800/50 rounded-lg shrink-0">
      <Icon className="w-5 h-5 text-orange-400" />
    </div>
    <div>
      <h4 className="text-white font-medium mb-1">{title}</h4>
      <p className="text-slate-300 text-sm">{description}</p>
    </div>
  </div>
);

const SectionTitle = ({ children }) => (
  <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
    <span className="h-px flex-1 bg-slate-800"></span>
    <span>{children}</span>
    <span className="h-px flex-1 bg-slate-800"></span>
  </h3>
);

const IntroSlide = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const cards = [
    {
      icon: Code2,
      title: "Technical Background",
      description: "Full Stack Developer with front-end focus and extensive experience in high-traffic applications",
      stats: { label: "Experience", value: "10 Years" }
    },
    {
      icon: Trophy,
      title: "Career Achievements",
      description: "Built +5 SaaS platforms, optimized large-scale applications, led development teams",
      stats: { label: "Project Success Rate", value: "99%" }
    },
    {
      icon: Rocket,
      title: "StoragePal Journey",
      description: "Enhancing platform performance and user experience through innovative development",
      stats: { label: "Joined", value: "Oct 2024" }
    }
  ];

  const recentAchievements = [
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Reduced page load times from 5+ minutes to under 1 second through advanced query optimization and frontend improvements"
    },
    {
      icon: Globe,
      title: "Enhanced User Experience",
      description: "Implemented sticky headers, optimized table layouts, and improved navigation patterns for better usability"
    },
    {
      icon: CheckCircle,
      title: "Advanced Filtering System",
      description: "Developed a comprehensive filtering system with 36,600+ possible combinations for precise data management"
    }
  ];

  const coreTech = [
    "Vue.js", "ReactJS", "Laravel", "Node.js", "TypeScript", "MySQL",
    "AWS", "Docker", "CI/CD", "REST APIs"
  ];

  const prevWork = [
    {
      icon: Star,
      title: "Atlas Web Solutions",
      description: "Delivered 5+ SaaS platforms, developed PHP libraries for video processing, implemented advanced queuing systems"
    },
    {
      icon: Star,
      title: "Singularity Creations OÜ",
      description: "Boosted application performance by 60%, implemented complex PDF generation systems"
    },
    {
      icon: Star,
      title: "Aviadmin",
      description: "Rebuilt legacy PHP codebase to PHP 7, reduced calendar load times from 34s to 0.3s, implemented LCMS for course management"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <header className={`mb-12 text-center transform transition-all duration-1000 ${animate ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
            Hebachi Khalil
          </h1>
          <p className="text-slate-400 mt-4 text-lg">Senior Full Stack Developer at StoragePal</p>
          <div className="mb-8 text-center">
            <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed mt-4">
              A decade of experience transforming complex technical challenges into elegant, high-performance solutions. 
              Specializing in full-stack development with a strong focus on optimization and user experience.
              Recently joined StoragePal to enhance platform capabilities and drive technical innovation.
            </p>
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ${
                animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card {...card} />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className={`transform transition-all duration-1000 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <SectionTitle>Recent StoragePal Achievements</SectionTitle>
            <div className="space-y-6">
              {recentAchievements.map((achievement, index) => (
                <TimelineItem key={index} {...achievement} />
              ))}
            </div>
          </div>

          <div className={`transform transition-all duration-1000 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <SectionTitle>Previous Experience Highlights</SectionTitle>
            <div className="space-y-6">
              {prevWork.map((work, index) => (
                <TimelineItem key={index} {...work} />
              ))}
            </div>
          </div>
        </div>

        <div className={`mt-8 text-center transform transition-all duration-1000 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <SectionTitle>Technical Expertise</SectionTitle>
          <div className="inline-flex gap-4 flex-wrap justify-center">
            {coreTech.map((tech, index) => (
              <TechBadge 
                key={index} 
                text={tech}
              />
            ))}
          </div>
        </div>

        <div className={`mt-12 bg-slate-900/50 rounded-xl p-6 transform transition-all duration-1000 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <SectionTitle>Future Vision & Goals</SectionTitle>
          <div className="text-slate-300 text-center">
            <p className="max-w-3xl mx-auto">
              Focused on implementing system-wide optimizations across all backoffice pages,
              standardizing user interfaces, and exploring AI integration opportunities to further enhance platform capabilities.
              Committed to maintaining high performance standards while introducing innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSlide;