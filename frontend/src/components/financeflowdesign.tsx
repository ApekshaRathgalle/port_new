import { useState, useEffect } from 'react';
import { ChevronLeft, Eye, Users, Clock, Target, Lightbulb, Palette, Monitor, Smartphone, Recycle, Leaf, Battery, Shield, Zap, TreePine } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FinanceFlowDesign = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projectDetails = {
    title: "EcoTrash Mobile App",
    subtitle: "E-Waste Management & Selling Platform",
    duration: "2 weeks",
    team: "1 designer",
    role: "Solo UI/UX Designer",
    tools: ["Figma", "Adobe XD", "Sketch", "Principle"],
    overview: "EcoTrash is an innovative mobile application designed to tackle electronic waste by connecting users with recycling centers and buyers. The app allows users to sell their old electronics, find nearby e-waste collection points, and track their environmental impact. The design emphasizes sustainability through eco-friendly colors and intuitive waste management flows.",
    challenge: "Design a mobile app that makes e-waste disposal accessible and profitable for users while promoting environmental consciousness. The challenge was to create an interface that simplifies the complex process of e-waste selling and recycling while educating users about environmental benefits.",
    solution: "Developed an intuitive platform with AI-powered device valuation, real-time marketplace integration, and gamified environmental impact tracking. Implemented easy device scanning, instant price quotes, and streamlined pickup scheduling to make e-waste management effortless."
  };

  const designProcess = [
    {
      phase: "Research",
      icon: <Target size={24} />,
      description: "User interviews with e-waste generators, recycling centers, and environmental organizations",
      color: "from-green-400 to-emerald-500",
      bgGlow: "rgba(34, 197, 94, 0.3)"
    },
    {
      phase: "Strategy",
      icon: <Lightbulb size={24} />,
      description: "Market analysis, competitive research, and sustainable business model development",
      color: "from-emerald-400 to-teal-600",
      bgGlow: "rgba(16, 185, 129, 0.3)"
    },
    {
      phase: "Design",
      icon: <Palette size={24} />,
      description: "Eco-friendly UI design, device scanning flows, and marketplace integration",
      color: "from-teal-400 to-cyan-600",
      bgGlow: "rgba(20, 184, 166, 0.3)"
    },
    {
      phase: "Validation",
      icon: <Users size={24} />,
      description: "Testing with environmental groups and potential users for usability validation",
      color: "from-purple-400 to-violet-600",
      bgGlow: "rgba(168, 85, 247, 0.3)"
    }
  ];

  const colorPalette = [
    { name: "Eco Green", hex: "#22c55e", rgb: "rgb(34, 197, 94)" },
    { name: "Forest Emerald", hex: "#10b981", rgb: "rgb(16, 185, 129)" },
    { name: "Teal Fresh", hex: "#14b8a6", rgb: "rgb(20, 184, 166)" },
    { name: "Electric Purple", hex: "#a855f7", rgb: "rgb(168, 85, 247)" },
    { name: "Deep Black", hex: "#0f0f0f", rgb: "rgb(15, 15, 15)" }
  ];

  const keyFeatures = [
    {
      title: "Smart Device Scanner",
      description: "AI-powered camera scanning to identify electronics and provide instant valuation with price estimates",
      icon: <Monitor size={32} />,
      accent: <Zap size={16} />,
      gradient: "from-green-400 to-emerald-600"
    },
    {
      title: "Secure Marketplace", 
      description: "Connect with verified buyers and recycling centers for safe transactions and device pickup",
      icon: <Shield size={32} />,
      accent: <Battery size={16} />,
      gradient: "from-emerald-400 to-teal-600"
    },
    {
      title: "Environmental Impact",
      description: "Track your carbon footprint reduction and environmental contributions through gamified metrics",
      icon: <Leaf size={32} />,
      accent: <TreePine size={16} />,
      gradient: "from-teal-400 to-cyan-600"
    },
    {
      title: "Recycling Network",
      description: "Find nearby e-waste collection points and certified recycling facilities with real-time availability",
      icon: <Recycle size={32} />,
      accent: <Smartphone size={16} />,
      gradient: "from-purple-400 to-violet-600"
    }
  ];

  const FloatingElements = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute opacity-20"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + i * 12}%`,
            transform: `translate(${mousePosition.x * 0.01 * (i + 1)}px, ${mousePosition.y * 0.01 * (i + 1)}px)`,
            transition: 'transform 0.8s ease-out'
          }}
        >
          <div className={`w-${8 + i * 2} h-${8 + i * 2} bg-gradient-to-br from-green-400/20 to-purple-600/20 rounded-full blur-sm animate-pulse`}
               style={{ animationDelay: `${i * 0.5}s` }} />
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900/20 to-slate-900 text-white relative overflow-x-hidden">
      <FloatingElements />
      
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-transparent to-purple-500/20 animate-pulse" />
        <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2322c55e%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] animate-pulse' />
      </div>

      {/* Hero Section */}
      <div 
        className="relative px-8 pt-32 pb-16 text-center"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Glowing Title */}
          <div className="relative mb-8">
            <h1 className="text-6xl md:text-8xl font-black mb-4 relative z-10">
              <span className="bg-gradient-to-r from-green-300 via-emerald-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
                EcoTrash
              </span>
              <br />
              <span className="text-white/90 text-4xl md:text-5xl font-light">
                Mobile App
              </span>
            </h1>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/30 to-purple-500/30 blur-3xl -z-10 animate-pulse" />
          </div>
          
          <p className="text-2xl text-green-200/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Revolutionary e-waste management platform that turns electronic waste into environmental impact and profit
          </p>

          {/* Enhanced Project Stats */}
          <div className="flex justify-center gap-8 mt-16 flex-wrap">
            {[
              { icon: <Clock size={28} />, label: 'Duration', value: projectDetails.duration, color: 'from-green-400 to-emerald-500' },
              { icon: <Users size={28} />, label: 'Team Size', value: projectDetails.team, color: 'from-emerald-400 to-teal-600' },
              { icon: <Eye size={28} />, label: 'Role', value: projectDetails.role, color: 'from-purple-400 to-violet-500' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="group relative p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl border border-green-500/20 hover:border-green-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-500`} />
                <div className="relative z-10 flex items-center gap-4">
                  <div className={`p-3 bg-gradient-to-br ${stat.color} rounded-2xl text-white shadow-lg`}>
                    {stat.icon}
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-green-300/70 font-medium">
                      {stat.label}
                    </div>
                    <div className="text-xl font-bold text-white">
                      {stat.value}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Image with Enhanced Effects */}
      <div className="px-8 pb-16 text-center">
        <div className="max-w-6xl mx-auto relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/30 to-purple-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 animate-pulse" />
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-4 border border-green-500/20 group-hover:border-green-400/40 transition-all duration-500">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-2xl">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-green-300 mb-2">♻️ EcoTrash Mobile App Design ♻️</h3>
                <p className="text-green-200/70 text-sm">Interactive Figma Prototype</p>
              </div>
              
              {/* Figma Embed */}
              <div className="aspect-video rounded-xl overflow-hidden bg-white shadow-2xl">
                <iframe
                  src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/4wbLxKObOzMQiAqCLanGoe/E-Waste?node-id=0-1&t=vBYXE1ob63UFc2Rj-1"
                  className="w-full h-full border-0"
                  allowFullScreen
                  title="EcoTrash Mobile App Design"
                />
              </div>
              
              {/* Figma Link Button */}
              <div className="mt-6">
                <a
                  href="https://www.figma.com/proto/4wbLxKObOzMQiAqCLanGoe/E-Waste?node-id=0-1&t=vBYXE1ob63UFc2Rj-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-purple-600 rounded-full text-white font-semibold hover:from-green-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.015-4.49-4.491S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zM24 12.49c0 2.489-2.014 4.49-4.49 4.49s-4.49-2.001-4.49-4.49 2.014-4.49 4.49-4.49S24 10.001 24 12.49zm-7.509 0c0 1.665 1.355 3.019 3.019 3.019s3.019-1.355 3.019-3.019-1.355-3.019-3.019-3.019-3.019 1.354-3.019 3.019z"/>
                  </svg>
                  View Full Design in Figma
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation Tabs */}
      <div className="px-8 border-b border-green-500/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-2 justify-center flex-wrap bg-white/5 backdrop-blur-lg rounded-2xl border border-green-500/20 p-2">
            {['overview', 'process', 'design', 'features'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 capitalize relative overflow-hidden group ${
                  activeSection === section 
                    ? 'bg-gradient-to-r from-green-500 to-purple-600 text-white shadow-lg shadow-green-500/25' 
                    : 'text-green-200/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="relative z-10">{section}</span>
                {activeSection === section && (
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-purple-500 opacity-20 blur-xl" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Content Sections */}
      <div className="px-8 py-16 max-w-6xl mx-auto">
        {activeSection === 'overview' && (
          <div className="space-y-12 animate-fade-in">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-300 to-purple-400 bg-clip-text text-transparent">
                Project Overview
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-purple-500 mx-auto rounded-full" />
            </div>
            
            <p className="text-xl leading-relaxed text-white/80 text-center max-w-4xl mx-auto mb-16">
              {projectDetails.overview}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Challenge', content: projectDetails.challenge, icon: <Target size={24} /> },
                { title: 'Solution', content: projectDetails.solution, icon: <Lightbulb size={24} /> }
              ].map((item, index) => (
                <div key={index} className="group relative p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl border border-green-500/20 hover:border-green-400/40 transition-all duration-500 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-green-400 to-purple-500 rounded-2xl text-white">
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-green-300">{item.title}</h3>
                    </div>
                    <p className="text-white/80 leading-relaxed text-lg">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'process' && (
          <div className="space-y-12 animate-fade-in">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-300 to-purple-400 bg-clip-text text-transparent">
                Design Process
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-purple-500 mx-auto rounded-full" />
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {designProcess.map((step, index) => (
                <div
                  key={index}
                  className="group relative p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl border border-green-500/20 hover:border-green-400/40 transition-all duration-500 hover:scale-105 text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color.replace('from-', 'from-').replace('to-', 'to-')}/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-green-300 mb-4">
                      {step.phase}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'design' && (
          <div className="space-y-16 animate-fade-in">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-300 to-purple-400 bg-clip-text text-transparent">
                Design System
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-purple-500 mx-auto rounded-full" />
            </div>
            
            {/* Color Palette */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Color Palette</h3>
              <div className="flex gap-6 justify-center flex-wrap">
                {colorPalette.map((color, index) => (
                  <div
                    key={index}
                    className="group relative p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl border border-green-500/20 hover:border-green-400/40 transition-all duration-500 hover:scale-105"
                  >
                    <div 
                      className="w-24 h-24 rounded-2xl mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300 border-2 border-white/20"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="text-center">
                      <div className="font-semibold text-white mb-2">{color.name}</div>
                      <div className="text-sm text-green-300/70 font-mono">{color.hex}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Tools & Technologies</h3>
              <div className="flex gap-4 justify-center flex-wrap">
                {projectDetails.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-6 py-3 bg-gradient-to-r from-green-500/20 to-purple-500/20 backdrop-blur-lg border border-green-400/30 rounded-full text-green-300 font-semibold hover:from-green-500/30 hover:to-purple-500/30 hover:scale-105 transition-all duration-300 cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'features' && (
          <div className="space-y-12 animate-fade-in">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-300 to-purple-400 bg-clip-text text-transparent">
                Key Features
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-purple-500 mx-auto rounded-full" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group relative p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl border border-green-500/20 hover:border-green-400/40 transition-all duration-500 hover:scale-105"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient}/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className="flex items-start gap-6 mb-6">
                      <div className={`p-4 bg-gradient-to-br ${feature.gradient} rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                          <div className="text-green-400">{feature.accent}</div>
                        </div>
                        <p className="text-white/80 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Bottom Navigation */}
      <div className="px-8 py-16 border-t border-green-500/20 text-center">
        <button 
          onClick={() => navigate('/uiux')}
          className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-purple-600 rounded-full text-white font-semibold text-lg shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30 hover:scale-105 transition-all duration-300 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          <div className="relative z-10 flex items-center gap-3">
            <ChevronLeft size={20} />
            Back to UI/UX Projects
          </div>
        </button>
      </div>

      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-fade-in {
            animation: fade-in 0.8s ease-out;
          }
        `}
      </style>
    </div>
  );
};

export default FinanceFlowDesign;
