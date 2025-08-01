import React, { useState, useEffect } from 'react';
import { ChevronLeft, Eye, Users, Clock, Target, Lightbulb, Palette, Monitor, Smartphone, Heart, Shield, MessageCircle, HeadphonesIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EcoLivingDesign = () => {
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
    title: "HealingSpace Mobile App",
    subtitle: "Mental Health Support for Cancer Patients",
    duration: "2 weeks",
    team: "1 designer",
    role: "Solo UI/UX Designer",
    tools: ["Figma", "Adobe XD", "Sketch", "Principle"],
    overview: "HealingSpace is a compassionate mobile application designed specifically for cancer patients to support their mental health journey. The app provides a safe space for emotional expression, mindfulness exercises, peer support communities, and professional counseling resources. The design emphasizes calming colors, gentle interactions, and accessibility features to create a nurturing digital environment.",
    challenge: "Design a mobile app that addresses the unique mental health challenges faced by cancer patients while being sensitive to their emotional state and physical limitations. The challenge was to create an interface that feels supportive rather than overwhelming, with easy navigation for users who may be experiencing fatigue or cognitive changes.",
    solution: "Developed an intuitive, accessible mobile app with calming visuals, simplified navigation, and empowering features. Implemented gentle animations, high contrast options, and voice controls to accommodate various physical abilities. Created safe spaces for community connection and professional support access."
  };

  const designProcess = [
    {
      phase: "Research",
      icon: <Target size={24} />,
      description: "User interviews with cancer patients, caregivers, and mental health professionals",
      color: "from-purple-400 to-pink-500",
      bgGlow: "rgba(168, 85, 247, 0.3)"
    },
    {
      phase: "Empathy", 
      icon: <Lightbulb size={24} />,
      description: "Journey mapping, pain point analysis, and accessibility requirements gathering",
      color: "from-pink-400 to-rose-600",
      bgGlow: "rgba(236, 72, 153, 0.3)"
    },
    {
      phase: "Design",
      icon: <Palette size={24} />,
      description: "Compassionate UI design, gentle animations, and accessibility-first approach",
      color: "from-rose-400 to-orange-500",
      bgGlow: "rgba(251, 113, 133, 0.3)"
    },
    {
      phase: "Validation",
      icon: <Users size={24} />,
      description: "Testing with cancer support groups and mental health professionals",
      color: "from-orange-400 to-amber-500",
      bgGlow: "rgba(251, 146, 60, 0.3)"
    }
  ];

  const colorPalette = [
    { name: "Healing Purple", hex: "#a855f7", rgb: "rgb(168, 85, 247)" },
    { name: "Calming Lavender", hex: "#c084fc", rgb: "rgb(192, 132, 252)" },
    { name: "Gentle Pink", hex: "#ec4899", rgb: "rgb(236, 72, 153)" },
    { name: "Warm Coral", hex: "#fb7185", rgb: "rgb(251, 113, 133)" },
    { name: "Soft Cream", hex: "#fef7ff", rgb: "rgb(254, 247, 255)" }
  ];

  const keyFeatures = [
    {
      title: "Mood Tracking & Journaling",
      description: "Safe space for emotional expression with guided prompts and mood tracking to help patients process their feelings",
      icon: <Monitor size={32} />,
      accent: <Heart size={16} />,
      gradient: "from-purple-400 to-pink-600"
    },
    {
      title: "Peer Support Community", 
      description: "Connect with other cancer patients in moderated support groups for shared experiences and encouragement",
      icon: <Users size={32} />,
      accent: <MessageCircle size={16} />,
      gradient: "from-pink-400 to-rose-600"
    },
    {
      title: "Mindfulness & Meditation",
      description: "Guided meditation sessions, breathing exercises, and relaxation techniques designed for cancer patients",
      icon: <Target size={32} />,
      accent: <HeadphonesIcon size={16} />,
      gradient: "from-rose-400 to-orange-600"
    },
    {
      title: "Crisis Support Access",
      description: "24/7 access to mental health professionals and crisis intervention resources with one-tap emergency contacts",
      icon: <Smartphone size={32} />,
      accent: <Shield size={16} />,
      gradient: "from-orange-400 to-amber-600"
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
          <div className={`w-${8 + i * 2} h-${8 + i * 2} bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-sm animate-pulse`}
               style={{ animationDelay: `${i * 0.5}s` }} />
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white relative overflow-x-hidden">
      <FloatingElements />
      
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-pink-500/20 animate-pulse" />
        <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23a855f7%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] animate-pulse' />
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
              <span className="bg-gradient-to-r from-purple-300 via-pink-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
                HealingSpace
              </span>
              <br />
              <span className="text-white/90 text-4xl md:text-5xl font-light">
                Mobile App
              </span>
            </h1>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-pink-500/30 blur-3xl -z-10 animate-pulse" />
          </div>
          
          <p className="text-2xl text-purple-200/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            A compassionate mobile sanctuary designed to support cancer patients through their mental health journey with empathy and care
          </p>

          {/* Enhanced Project Stats */}
          <div className="flex justify-center gap-8 mt-16 flex-wrap">
            {[
              { icon: <Clock size={28} />, label: 'Duration', value: projectDetails.duration, color: 'from-purple-400 to-pink-500' },
              { icon: <Users size={28} />, label: 'Team Size', value: projectDetails.team, color: 'from-pink-400 to-rose-600' },
              { icon: <Eye size={28} />, label: 'Role', value: projectDetails.role, color: 'from-rose-400 to-orange-500' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="group relative p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-500`} />
                <div className="relative z-10 flex items-center gap-4">
                  <div className={`p-3 bg-gradient-to-br ${stat.color} rounded-2xl text-white shadow-lg`}>
                    {stat.icon}
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-purple-300/70 font-medium">
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
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-pink-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 animate-pulse" />
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-4 border border-purple-500/20 group-hover:border-purple-400/40 transition-all duration-500">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-2xl">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-purple-300 mb-2">💜 HealingSpace Mobile App Design 💜</h3>
                <p className="text-purple-200/70 text-sm">Interactive Figma Prototype</p>
              </div>
              
              {/* Figma Embed */}
              <div className="aspect-video rounded-xl overflow-hidden bg-white shadow-2xl">
                <iframe
                  src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/lqsBR7wGcHuBUJa2jj0NHx/MAD-LAB-Exam-1?node-id=0-1&t=ci33sw4GvaMDap3U-1"
                  className="w-full h-full border-0"
                  allowFullScreen
                  title="HealingSpace Mobile App Design"
                />
              </div>
              
              {/* Figma Link Button */}
              <div className="mt-6">
                <a
                  href="https://www.figma.com/proto/lqsBR7wGcHuBUJa2jj0NHx/MAD-LAB-Exam-1?node-id=0-1&t=ci33sw4GvaMDap3U-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full text-white font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
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
      <div className="px-8 border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-2 justify-center flex-wrap bg-white/5 backdrop-blur-lg rounded-2xl border border-purple-500/20 p-2">
            {['overview', 'process', 'design', 'features'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 capitalize relative overflow-hidden group ${
                  activeSection === section 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/25' 
                    : 'text-purple-200/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="relative z-10">{section}</span>
                {activeSection === section && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-20 blur-xl" />
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
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent">
                Project Overview
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full" />
            </div>
            
            <p className="text-xl leading-relaxed text-white/80 text-center max-w-4xl mx-auto mb-16">
              {projectDetails.overview}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Challenge', content: projectDetails.challenge, icon: <Target size={24} /> },
                { title: 'Solution', content: projectDetails.solution, icon: <Lightbulb size={24} /> }
              ].map((item, index) => (
                <div key={index} className="group relative p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl text-white">
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-purple-300">{item.title}</h3>
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
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent">
                Design Process
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full" />
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {designProcess.map((step, index) => (
                <div
                  key={index}
                  className="group relative p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color.replace('from-', 'from-').replace('to-', 'to-')}/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-purple-300 mb-4">
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
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent">
                Design System
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full" />
            </div>
            
            {/* Color Palette */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Color Palette</h3>
              <div className="flex gap-6 justify-center flex-wrap">
                {colorPalette.map((color, index) => (
                  <div
                    key={index}
                    className="group relative p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105"
                  >
                    <div 
                      className="w-24 h-24 rounded-2xl mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300 border-2 border-white/20"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="text-center">
                      <div className="font-semibold text-white mb-2">{color.name}</div>
                      <div className="text-sm text-purple-300/70 font-mono">{color.hex}</div>
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
                    className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg border border-purple-400/30 rounded-full text-purple-300 font-semibold hover:from-purple-500/30 hover:to-pink-500/30 hover:scale-105 transition-all duration-300 cursor-default"
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
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent">
                Key Features
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group relative p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-500 hover:scale-105"
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
                          <div className="text-emerald-400">{feature.accent}</div>
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
      <div className="px-8 py-16 border-t border-purple-500/20 text-center">
        <button 
          onClick={() => navigate('/uiux')}
          className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full text-white font-semibold text-lg shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 overflow-hidden"
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

export default EcoLivingDesign;