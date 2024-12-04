import React, { useState, useEffect } from 'react';
import { Clock, Filter, PackageSearch, FileJson, Zap, ChevronRight, ChevronLeft } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const PerformanceChart = () => {
    const data = [
        { name: 'Page Load', oldTime: 420, newTime: 2.5, label: '7 mins → 2-3s' }, // 420 seconds = 7 minutes
        { name: 'Report Gen', oldTime: 2250, newTime: 30, label: '37.5 mins → 30s' }, // 2250 seconds = 37.5 minutes
        { name: 'Multi Filter', oldTime: 3600, newTime: 60, label: '60 mins → 1m' }, // 3600 seconds = 1 hour
        { name: 'Bulk Update', oldTime: 1500, newTime: 120, label: '25 mins → 2m' }, // 1500 seconds = 25 minutes
      ];
  
    return (
      <div className="bg-slate-800/50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Performance Improvements</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                labelStyle={{ color: '#F3F4F6' }}
              />
              <Bar dataKey="oldTime" fill="#EF4444" name="Before (seconds)" />
              <Bar dataKey="newTime" fill="#10B981" name="After (seconds)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };
  const TimeSavingsChart = () => {
    const data = [
        { name: 'Warehouse Ops', value: 300, color: '#3B82F6' }, // 4-5 hours per employee daily
        { name: 'Management', value: 100, color: '#10B981' }, // 45-100 minutes per manager
        { name: 'Customer Service', value: 90, color: '#F59E0B' }, // 1.5 hours per representative
      ];
  
    return (
      <div className="bg-slate-800/50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Monthly Time Savings (Hours)</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                labelStyle={{ color: '#F3F4F6' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }} />
              <span className="text-sm text-slate-300">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  const ProcessStepsChart = () => {
    const data = [
        { name: 'Article Status', oldSteps: 4, newSteps: 1 },
        { name: 'Warehouse Transfer', oldSteps: 3, newSteps: 1 },
        { name: 'Generate Reports', oldSteps: 5, newSteps: 2 },
        { name: 'Location Updates', oldSteps: 3, newSteps: 1 },
      ];
  
    return (
      <div className="bg-slate-800/50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Process Steps Reduction</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                labelStyle={{ color: '#F3F4F6' }}
              />
              <Bar dataKey="oldSteps" fill="#EF4444" name="Old Steps" />
              <Bar dataKey="newSteps" fill="#10B981" name="New Steps" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };
  const ChartSection = () => {
    const [currentChart, setCurrentChart] = useState(0);
    const charts = [
      { component: <PerformanceChart />, title: "Performance Improvements" },
      { component: <TimeSavingsChart />, title: "Time Savings Distribution" },
      { component: <ProcessStepsChart />, title: "Process Steps Reduction" }
    ];
  
    return (
      <div className="relative bg-slate-900/40 backdrop-blur rounded-xl p-6 border border-slate-800">
        <div className="transition-all duration-500">
          {charts[currentChart].component}
        </div>
        
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => setCurrentChart((prev) => (prev === 0 ? charts.length - 1 : prev - 1))}
            className="p-2 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-slate-300" />
          </button>
          <div className="flex flex-col items-center gap-3">
            <h3 className="text-white font-medium">{charts[currentChart].title}</h3>
            <div className="flex gap-2">
              {charts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentChart(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentChart === index ? 'bg-[#fe8e68] w-8' : 'bg-slate-600 w-4 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          </div>
          <button
            onClick={() => setCurrentChart((prev) => (prev === charts.length - 1 ? 0 : prev + 1))}
            className="p-2 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-slate-300" />
          </button>
        </div>
      </div>
    );
  };
  
  const FeatureCard = ({ icon: Icon, title, metrics, description, details, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <div
        className="group bg-slate-900/40 backdrop-blur rounded-xl p-6 border border-slate-800 hover:border-[#fe8e68] transition-all duration-300 cursor-pointer hover:bg-slate-900/60"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-800/50 rounded-lg group-hover:bg-slate-800">
              <Icon className={`w-5 h-5 text-[#fe8e68] transition-transform duration-300 ${isHovered ? 'scale-110 rotate-12' : ''}`} />
            </div>
            <h3 className="text-lg font-semibold text-white group-hover:text-[#fe8e68] transition-colors">{title}</h3>
          </div>
          <span className="bg-slate-800/50 text-[#fe8e68] px-3 py-1 rounded-full text-sm font-medium group-hover:bg-[#fe8e68]/10">
            {metrics}
          </span>
        </div>
        <p className="text-slate-300 text-sm leading-relaxed group-hover:text-white transition-colors">{description}</p>
      </div>
    );
  };
  const DetailModal = ({ feature, onClose }) => {
    if (!feature) return null;
  
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50" onClick={onClose}>
        <div className="bg-slate-900/95 rounded-2xl p-8 max-w-2xl w-full mx-4 shadow-2xl border border-slate-800" 
             onClick={e => e.stopPropagation()}>
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-slate-800/50 rounded-lg">
                <feature.icon className="w-6 h-6 text-[#fe8e68]" />
              </div>
              <h2 className="text-2xl font-bold text-white">{feature.title}</h2>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-slate-800/50 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-slate-400 hover:text-white" />
            </button>
          </div>
          
          <div className="space-y-8">
            {feature.details.map((section, idx) => (
              <div key={idx} className="border-l-2 border-[#fe8e68]/30 pl-6 hover:border-[#fe8e68] transition-colors">
                <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
                <div className="space-y-3">
                  {section.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 group">
                      <div className="w-2 h-2 rounded-full bg-[#fe8e68]/50 mt-2 group-hover:bg-[#fe8e68] transition-colors" />
                      <p className="text-slate-300 group-hover:text-white transition-colors">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const TimeMetric = ({ label, oldTime, newTime, percentage }) => (
    <div className="group bg-slate-900/40 backdrop-blur rounded-xl p-6 border border-slate-800 hover:border-[#fe8e68] transition-all duration-300">
      <h4 className="text-white font-medium mb-3 group-hover:text-[#fe8e68] transition-colors">{label}</h4>
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <div className="text-sm text-slate-400 mb-1">Before</div>
          <div className="text-red-400 font-medium">{oldTime}</div>
        </div>
        <div className="flex-1 text-right">
          <div className="text-sm text-slate-400 mb-1">After</div>
          <div className="text-emerald-400 font-medium">{newTime}</div>
        </div>
      </div>
      {percentage && (
        <div className="mt-3 text-sm text-[#fe8e68] text-right font-medium">
          {percentage} time saved
        </div>
      )}
    </div>
  );

const AchievementsSlide = () => {
  const [animate, setAnimate] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const features = [
    {
      icon: Zap,
      title: "Performance Optimization",
      metrics: "99.5%",
      description: "Database-level pagination and optimized data loading eliminated system crashes",
      details: [
        {
          title: "Previous System Bottlenecks",
          items: [
            "Initial page load took 7 minutes and frequently crashed with large datasets",
            "Required exporting entire database to Excel for filtering",
            "Complex filters required manual Excel manipulation",
            "Limited ability to handle growing data volume"
          ]
        },
        {
          title: "New System Capabilities",
          items: [
            "Page loads in 2-3 seconds regardless of data size",
            "Real-time filtering at database level",
            "Complex multi-condition filtering available instantly",
            "Scalable architecture for growing data volume"
          ]
        }
      ]
    },
    {
      icon: PackageSearch,
      title: "Bulk Operations",
      metrics: "92-95%",
      description: "Introduced powerful bulk update capabilities for warehouse operations",
      details: [
        {
          title: "Process Improvements",
          items: [
            "Update warehouse details for 50 articles: from 25 mins to 2 mins",
            "Update article statuses in batch: from 20 mins to 1 min",
            "Update location details: from 15 mins to 1 min",
            "Single-page operations for all major tasks"
          ]
        }
      ]
    },
    {
      icon: Filter,
      title: "Advanced Filtering",
      metrics: "98.3%",
      description: "Comprehensive filtering system with multiple criteria support",
      details: [
        {
          title: "Filter Types",
          items: [
            "Select Type: Warehouse, Article status, Transport status, Reservation type",
            "Text Searches: Client information, Article/Order IDs, Location details",
            "Date Range: Move in/out dates, Order dates, Custom ranges",
            "Numeric: Volume measurements, Article quantities, Storage duration"
          ]
        }
      ]
    },
    {
      icon: FileJson,
      title: "Enhanced Reporting",
      metrics: "98.9%",
      description: "Filter-aware exports and custom report generation capabilities",
      details: [
        {
          title: "Reporting Features",
          items: [
            "Filter-aware exports with active filters respected",
            "Bulk item export capabilities",
            "Custom report generation",
            "Generate filtered inventory report: from 30-45 mins to 30 seconds"
          ]
        }
      ]
    },
    {
      icon: Clock,
      title: "Time Savings Impact",
      metrics: "450hrs",
      description: "Monthly time savings across all departments",
      details: [
        {
          title: "Daily Time Savings Per Role",
          items: [
            "Warehouse Operations: 2-3 hours saved per employee",
            "Management Reporting: 45-100 minutes saved per manager",
            "Customer Service: 1.5 hours saved per representative",
            "Total Monthly Time Saved: 320-450 hours"
          ]
        }
      ]
    }
  ];

  const timeMetrics = [
    {
      label: "Initial Page Load",
      oldTime: "7 minutes",
      newTime: "2-3 seconds",
      percentage: "99.5%"
    },
    {
      label: "Filtered Report Generation",
      oldTime: "30-45 minutes",
      newTime: "30 seconds",
      percentage: "98.9%"
    },
    {
      label: "Complex Multi-Condition Filtering",
      oldTime: "1 hour",
      newTime: "1 minute",
      percentage: "98.3%"
    },
    {
      label: "Bulk Status Updates",
      oldTime: "20 mins",
      newTime: "1 min",
      percentage: "95%"
    }
  ];

  return (
<div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <header className={`mb-16 text-center transform transition-all duration-1000 ${animate ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 text-[#fe8e68] bg-[#fe8e68]/10 rounded-full px-4 py-2 text-sm font-medium">
              <Clock className="w-4 h-4" />
              System Transformation Overview
            </div>
          </div>
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fe8e68] to-[#ff6b6b] mb-4">
            StoragePal Transformation
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Complete system overhaul achieving significant performance improvements and workflow optimizations
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ${
                animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <FeatureCard
                {...feature}
                onClick={() => setSelectedFeature(feature)}
              />
            </div>
          ))}
        </div>

        <div className="mb-12">
          <ChartSection />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {timeMetrics.map((metric, index) => (
            <TimeMetric
              key={index}
              {...metric}
            />
          ))}
        </div>
      </div>

      {selectedFeature && (
        <DetailModal
          feature={selectedFeature}
          onClose={() => setSelectedFeature(null)}
        />
      )}
    </div>
  );
};

export default AchievementsSlide;