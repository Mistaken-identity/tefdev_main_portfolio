
import React, { useState } from 'react';
import { Terminal, Code, Activity, Layers, Mail, Github, ExternalLink, Menu, X, Globe, Database, Server, Play, ChevronUp, Briefcase, GraduationCap, Calendar, Instagram, Phone, MessageSquareQuote, Star, Quote, CheckCircle, Award, ShieldCheck, Gamepad2, Dumbbell, Zap, PlayCircle, Image as ImageIcon } from 'lucide-react';
import ChatConsole from './components/ChatConsole';
import SkillsChart from './components/SkillsChart';
import ProjectDemo from './components/ProjectDemos';
import GithubHeatmap from './components/GithubHeatmap';
import { PROFILE, PROJECTS, SKILLS, EDUCATION, EXPERIENCE, REVIEWS, CERTIFICATIONS, LIFESTYLE_ITEMS } from './constants';
import { LifestyleItem } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'projects' | 'stack' | 'experience' | 'endorsements' | 'certifications' | 'side-quests'>('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [selectedQuest, setSelectedQuest] = useState<LifestyleItem | null>(null);

  const toggleDemo = (id: string) => {
    if (activeDemo === id) {
      setActiveDemo(null);
    } else {
      setActiveDemo(id);
    }
  };

  const NavButton = ({ id, label, icon: Icon }: { id: typeof activeTab, label: string, icon: any }) => (
    <button
      onClick={() => { setActiveTab(id); setMobileMenuOpen(false); }}
      className={`flex items-center gap-3 px-4 py-3 w-full text-left transition-all ${
        activeTab === id 
          ? 'text-nexus-accent bg-nexus-accent/10 border-r-2 border-nexus-accent' 
          : 'text-gray-400 hover:text-white hover:bg-white/5'
      }`}
    >
      <Icon size={18} />
      <span className="font-mono text-sm tracking-wide">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen font-sans text-gray-200 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-fixed bg-center">
      {/* Overlay for background darkening */}
      <div className="fixed inset-0 bg-nexus-900/90 z-0"></div>

      {/* Grid Overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(18,16,20,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(255,0,0,0.02),rgba(0,255,0,0.06))] z-0 pointer-events-none bg-[length:100%_4px,6px_100%]"></div>

      {/* Main Content Container */}
      <div className="relative z-10 flex h-screen overflow-hidden">
        
        {/* Sidebar Navigation (Desktop) */}
        <aside className="hidden md:flex flex-col w-64 glass-panel border-r-0 border-r-white/10 m-4 rounded-xl">
          <div className="p-6 border-b border-white/5">
            <h1 className="text-xl font-bold font-mono text-white tracking-tighter">
              Tef<span className="text-nexus-accent">devs</span>
            </h1>
            <p className="text-xs text-gray-500 mt-1 font-mono">v3.0.1 Stable</p>
          </div>
          
          <nav className="flex-1 py-4 overflow-y-auto">
            <NavButton id="overview" label="DASHBOARD" icon={Activity} />
            <NavButton id="experience" label="EXPERIENCE" icon={Briefcase} />
            <NavButton id="projects" label="PROJECTS" icon={Layers} />
            <NavButton id="stack" label="TECH_STACK" icon={Database} />
            <NavButton id="certifications" label="ACCREDITATIONS" icon={Award} />
            <NavButton id="side-quests" label="SIDE_QUESTS" icon={Gamepad2} />
            <NavButton id="endorsements" label="REVIEWS" icon={MessageSquareQuote} />
          </nav>

          <div className="p-6 border-t border-white/5">
            <div className="flex gap-4 justify-center">
              <a href="https://github.com/Mistaken-identity" target="_blank" rel="noopener noreferrer" title="GitHub" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
              <a href="mailto:antonyteflon10@gmail.com" title="Email" className="text-gray-400 hover:text-white transition-colors"><Mail size={20} /></a>
              <a href="https://wa.me/254769259151" target="_blank" rel="noopener noreferrer" title="WhatsApp" className="text-gray-400 hover:text-white transition-colors"><Phone size={20} /></a>
              <a href="https://instagram.com/AnthonyTeflon" target="_blank" rel="noopener noreferrer" title="Instagram" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>
        </aside>

        {/* Mobile Header */}
        <div className="md:hidden fixed top-0 left-0 right-0 h-16 glass-panel z-40 flex items-center justify-between px-4">
           <span className="font-bold font-mono">Tef<span className="text-nexus-accent">devs</span></span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
             {mobileMenuOpen ? <X /> : <Menu />}
           </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-30 bg-nexus-900/95 pt-20 px-4 md:hidden">
            <nav className="space-y-2">
              <NavButton id="overview" label="DASHBOARD" icon={Activity} />
              <NavButton id="experience" label="EXPERIENCE" icon={Briefcase} />
              <NavButton id="projects" label="PROJECTS" icon={Layers} />
              <NavButton id="stack" label="TECH_STACK" icon={Database} />
              <NavButton id="certifications" label="ACCREDITATIONS" icon={Award} />
              <NavButton id="side-quests" label="SIDE_QUESTS" icon={Gamepad2} />
              <NavButton id="endorsements" label="REVIEWS" icon={MessageSquareQuote} />
            </nav>
            <div className="flex gap-6 justify-center mt-12">
              <a href="https://github.com/Mistaken-identity" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Github size={24} /></a>
              <a href="mailto:antonyteflon10@gmail.com" className="text-gray-400 hover:text-white transition-colors"><Mail size={24} /></a>
              <a href="https://wa.me/254769259151" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Phone size={24} /></a>
              <a href="https://instagram.com/AnthonyTeflon" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Instagram size={24} /></a>
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 pt-20 md:pt-8 scroll-smooth">
          
          {/* Header Section */}
          <header className="mb-10 max-w-4xl mx-auto">
             <div className="glass-panel p-6 md:p-10 rounded-2xl border-l-4 border-l-nexus-accent relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                   <Code size={120} />
                </div>
                
                <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                    {/* Photo Section */}
                    <div className="relative shrink-0">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-nexus-accent/50 p-1 bg-nexus-900/50 backdrop-blur shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                           <img 
                             src={PROFILE.avatarUrl} 
                             alt={PROFILE.name} 
                             className="w-full h-full object-cover rounded-full" 
                           />
                        </div>
                        {/* Tech decoration */}
                        <div className="absolute -inset-2 border border-nexus-accent/20 rounded-full animate-spin-slow pointer-events-none border-t-transparent border-l-transparent"></div>
                    </div>

                    {/* Text Content */}
                    <div className="text-center md:text-left flex-1">
                        <h2 className="text-3xl md:text-5xl font-bold mb-2 text-white">
                          Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-nexus-accent to-nexus-secondary">{PROFILE.name}</span>
                        </h2>
                        <p className="text-nexus-accent font-mono text-lg mb-6">{PROFILE.title}</p>
                        <p className="text-gray-300 leading-relaxed text-lg">
                          {PROFILE.about}
                        </p>
                        
                        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
                          <div className="bg-white/5 px-4 py-2 rounded border border-white/10 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-nexus-success animate-pulse"></div>
                            <span className="text-xs font-mono text-gray-400">STATUS:</span>
                            <span className="text-sm font-bold text-nexus-success">{PROFILE.availability.toUpperCase()}</span>
                          </div>
                          <div className="bg-white/5 px-4 py-2 rounded border border-white/10 flex items-center gap-2">
                            <span className="text-xs font-mono text-gray-400">LOC:</span>
                            <span className="text-sm text-white">{PROFILE.location}</span>
                          </div>
                        </div>
                    </div>
                </div>
             </div>
          </header>

          {/* Dynamic Content Based on Tab */}
          <div className="max-w-4xl mx-auto pb-20">
            
            {activeTab === 'overview' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <Activity size={20} className="text-nexus-secondary" /> 
                      Skill Analysis
                    </h3>
                    <SkillsChart skills={SKILLS} />
                  </div>
                  
                  <div className="space-y-6">
                    <div className="glass-panel p-6 rounded-xl flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500 font-mono">YEARS_EXP</p>
                        <p className="text-4xl font-bold text-white">{PROFILE.stats.yearsExperience}</p>
                      </div>
                      <Server className="text-nexus-accent/20" size={48} />
                    </div>
                    <div className="glass-panel p-6 rounded-xl flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500 font-mono">PROJECTS_DEPLOYED</p>
                        <p className="text-4xl font-bold text-white">{PROFILE.stats.projectsCompleted}</p>
                      </div>
                      <Layers className="text-nexus-secondary/20" size={48} />
                    </div>
                    <div className="glass-panel p-6 rounded-xl">
                      <h4 className="text-sm text-gray-500 font-mono mb-4">RECENT_ACTIVITY</h4>
                      <div className="space-y-4">
                        {[
                            { time: "14:20 PM", repo: "bigi-backend/payments", desc: "Integrated M-Pesa STK Push and callback handling." },
                            { time: "11:45 AM", repo: "bigi-web/product-page", desc: "Added real-time stock availability indicators." },
                            { time: "09:30 AM", repo: "bigi-infra/k8s", desc: "Deployed auto-scaling policy for traffic spikes." }
                        ].map((commit, i) => (
                          <div key={i} className="flex gap-3 text-sm">
                            <span className="font-mono text-nexus-accent text-xs whitespace-nowrap w-16 text-right flex-shrink-0">{commit.time}</span>
                            <span className="text-gray-400">
                                <span className="text-white font-mono text-xs">{commit.repo}</span>: {commit.desc}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Github Section */}
                <div className="glass-panel p-6 rounded-xl">
                   <GithubHeatmap />
                </div>
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
                 <div className="glass-panel p-6 md:p-8 rounded-xl">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                       <Briefcase size={20} className="text-nexus-accent" /> 
                       Work Experience
                    </h3>
                    <div className="space-y-8 relative before:absolute before:left-4 md:before:left-48 before:top-10 before:bottom-0 before:w-0.5 before:bg-white/10">
                       {EXPERIENCE.map((job) => (
                         <div key={job.id} className="relative flex flex-col md:flex-row gap-4 md:gap-16">
                            <div className="md:w-48 flex-shrink-0 md:text-right pt-1 pl-10 md:pl-0">
                               <p className="text-nexus-accent font-mono font-bold">{job.period}</p>
                               <div className="hidden md:block absolute right-0 top-2 w-3 h-3 bg-nexus-900 border-2 border-nexus-accent rounded-full z-10 translate-x-[7px]"></div>
                               <div className="md:hidden absolute left-[13px] top-2 w-3 h-3 bg-nexus-900 border-2 border-nexus-accent rounded-full z-10"></div>
                            </div>
                            <div className="flex-1 bg-white/5 p-4 rounded-lg border border-white/5 hover:border-nexus-accent/30 transition-colors ml-10 md:ml-0">
                               <h4 className="text-lg font-bold text-white">{job.role}</h4>
                               <p className="text-nexus-secondary text-sm mb-2">{job.company}</p>
                               <p className="text-gray-400 text-sm mb-4 leading-relaxed">{job.description}</p>
                               <div className="flex flex-wrap gap-2">
                                  {job.tech.map(t => (
                                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-gray-300 border border-white/10">{t}</span>
                                  ))}
                               </div>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="glass-panel p-6 md:p-8 rounded-xl">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                       <GraduationCap size={20} className="text-nexus-success" /> 
                       Education
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       {EDUCATION.map((edu) => (
                         <div key={edu.id} className="bg-white/5 p-5 rounded-lg border border-white/5 flex gap-4">
                            <div className="bg-nexus-success/10 p-3 rounded-lg h-fit">
                               <GraduationCap size={24} className="text-nexus-success" />
                            </div>
                            <div>
                               <h4 className="font-bold text-white">{edu.institution}</h4>
                               <p className="text-nexus-success text-sm mb-1">{edu.degree}</p>
                               <div className="flex items-center gap-2 text-xs text-gray-500 mb-2 font-mono">
                                  <Calendar size={12} /> {edu.period}
                               </div>
                               <p className="text-gray-400 text-xs">{edu.description}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
            )}
            
            {activeTab === 'certifications' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                 <div className="glass-panel p-6 md:p-8 rounded-xl mb-6">
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                       <ShieldCheck size={20} className="text-nexus-accent" /> 
                       Authorized Accreditations
                    </h3>
                    <p className="text-gray-400 text-sm">Valid security clearances and technical protocols obtained from external authorities.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   {CERTIFICATIONS.map((cert) => (
                     <div key={cert.id} className="glass-panel p-6 rounded-xl relative group hover:bg-white/5 transition-all border border-white/10 hover:border-nexus-accent/50">
                        <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 group-hover:text-nexus-accent transition-all">
                           <Award size={32} />
                        </div>
                        
                        <div className="mb-4">
                           <span className="text-[10px] font-mono text-nexus-accent border border-nexus-accent/30 px-2 py-0.5 rounded uppercase tracking-wider">
                              Verified
                           </span>
                        </div>
                        
                        <h4 className="text-lg font-bold text-white mb-1 pr-8">{cert.name}</h4>
                        <p className="text-nexus-secondary text-sm font-mono mb-3">{cert.issuer}</p>
                        
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">{cert.description}</p>
                        
                        <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
                            <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                               <Calendar size={12} /> ISSUED: {cert.date}
                            </div>
                            {cert.link && (
                                <a href={cert.link} className="flex items-center gap-1 text-xs text-nexus-accent hover:text-white transition-colors">
                                   VIEW_CERT <ExternalLink size={12} />
                                </a>
                            )}
                        </div>
                     </div>
                   ))}
                </div>
              </div>
            )}
            
            {activeTab === 'side-quests' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                 <div className="glass-panel p-6 md:p-8 rounded-xl mb-6">
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                       <Zap size={20} className="text-nexus-accent" /> 
                       Offline Protocols
                    </h3>
                    <p className="text-gray-400 text-sm">Physical optimization, competitive recreation, and system reboot activities.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {LIFESTYLE_ITEMS.map((item) => (
                    <div key={item.id} className="glass-panel p-0 rounded-xl overflow-hidden group border border-white/10 hover:border-nexus-accent/50 transition-all">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={item.coverUrl} 
                          alt={item.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-nexus-900 to-transparent opacity-80"></div>
                        
                        <div className="absolute bottom-4 left-4">
                           <span className={`text-[10px] font-mono px-2 py-0.5 rounded border mb-2 inline-block ${
                             item.category === 'Gym' ? 'border-red-500 text-red-500 bg-red-500/10' :
                             item.category === 'Football' ? 'border-green-500 text-green-500 bg-green-500/10' :
                             'border-nexus-accent text-nexus-accent bg-nexus-accent/10'
                           }`}>
                              {item.category.toUpperCase()}
                           </span>
                           <h4 className="text-lg font-bold text-white">{item.title}</h4>
                        </div>
                        
                        {item.gallery.some(g => g.type === 'video') && (
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                               <PlayCircle size={24} className="text-white fill-white/50" />
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <div className="p-5">
                         <div className="flex items-center gap-2 text-xs font-mono text-gray-500 mb-3">
                            <Calendar size={12} /> {item.date}
                         </div>
                         <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                         
                         <div className="mt-4 flex items-center justify-end">
                            <button 
                              onClick={() => setSelectedQuest(item)}
                              className="text-xs font-mono text-nexus-accent flex items-center gap-1 hover:gap-2 transition-all"
                            >
                               VIEW_DETAILS <ChevronUp size={12} className="rotate-90" />
                            </button>
                         </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="grid grid-cols-1 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {PROJECTS.map((project) => (
                  <div key={project.id} className="glass-panel p-6 md:p-8 rounded-xl group hover:border-nexus-accent/50 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-white group-hover:text-nexus-accent transition-colors">
                            {project.title}
                          </h3>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${
                            project.status === 'Live' ? 'border-nexus-success text-nexus-success' : 
                            project.status === 'Beta' ? 'border-yellow-500 text-yellow-500' : 
                            'border-gray-500 text-gray-500'
                          }`}>
                            {project.status.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-gray-400 leading-relaxed max-w-2xl">{project.description}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex gap-2">
                            {project.github && (
                            <a href={project.github} className="p-2 bg-white/5 rounded hover:bg-white/10 text-gray-300 hover:text-white transition-colors">
                                <Github size={18} />
                            </a>
                            )}
                            {project.link && (
                            <a href={project.link} className="p-2 bg-nexus-accent/10 rounded hover:bg-nexus-accent/20 text-nexus-accent transition-colors">
                                <ExternalLink size={18} />
                            </a>
                            )}
                        </div>
                        {project.demoId && (
                           <button 
                             onClick={() => toggleDemo(project.demoId!)}
                             className={`mt-2 px-3 py-1.5 rounded text-xs font-bold font-mono flex items-center gap-2 transition-all ${
                               activeDemo === project.demoId 
                               ? 'bg-nexus-accent text-black hover:bg-nexus-accent/90'
                               : 'bg-transparent border border-nexus-accent text-nexus-accent hover:bg-nexus-accent/10'
                             }`}
                           >
                             {activeDemo === project.demoId ? (
                               <>
                                 <ChevronUp size={14} /> CLOSE_DEMO
                               </>
                             ) : (
                               <>
                                 <Play size={14} /> INITIALIZE_DEMO
                               </>
                             )}
                           </button>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map(t => (
                        <span key={t} className="text-xs font-mono text-nexus-secondary bg-nexus-secondary/10 px-3 py-1 rounded-full border border-nexus-secondary/20">
                          {t}
                        </span>
                      ))}
                    </div>
                    {activeDemo === project.demoId && project.demoId && (
                        <ProjectDemo id={project.demoId} />
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'stack' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {['Frontend', 'Backend', 'DevOps', 'AI'].map(category => (
                    <div key={category} className="glass-panel p-6 rounded-xl">
                      <h3 className="text-lg font-bold text-white mb-6 border-b border-white/10 pb-2">{category.toUpperCase()}</h3>
                      <div className="space-y-4">
                        {SKILLS.filter(s => s.category === category).map(skill => (
                          <div key={skill.name}>
                            <div className="flex justify-between mb-1 text-sm">
                              <span className="text-gray-300">{skill.name}</span>
                              <span className="font-mono text-nexus-accent">{skill.level}%</span>
                            </div>
                            <div className="h-1.5 bg-black/40 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-gradient-to-r from-nexus-secondary to-nexus-accent" 
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'endorsements' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="glass-panel p-6 md:p-8 rounded-xl mb-6">
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                       <MessageSquareQuote size={20} className="text-nexus-success" /> 
                       Verified Transmissions
                    </h3>
                    <p className="text-gray-400 text-sm">Feedback decrypted from previous collaborations and deployments.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   {REVIEWS.map((review) => (
                     <div key={review.id} className="glass-panel p-6 rounded-xl relative group hover:border-nexus-success/50 transition-all duration-300 flex flex-col">
                        <div className="absolute top-4 right-4 text-nexus-800 opacity-20 group-hover:opacity-100 group-hover:text-nexus-success/20 transition-all">
                           <Quote size={48} />
                        </div>
                        
                        <div className="flex items-center gap-4 mb-4">
                           <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-nexus-success/30 p-0.5">
                              <img src={review.avatarUrl} alt={review.author} className="w-full h-full object-cover rounded-full filter grayscale group-hover:grayscale-0 transition-all" />
                           </div>
                           <div>
                              <h4 className="font-bold text-white leading-tight">{review.author}</h4>
                              <p className="text-nexus-success text-xs font-mono">{review.role}</p>
                              <p className="text-gray-500 text-[10px] uppercase tracking-wider">{review.company}</p>
                           </div>
                        </div>

                        <div className="flex-1 mb-4 relative z-10">
                           <p className="text-gray-300 text-sm leading-relaxed italic">"{review.text}"</p>
                        </div>

                        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star 
                                      key={i} 
                                      size={14} 
                                      className={`${i < review.rating ? 'text-nexus-secondary fill-nexus-secondary' : 'text-gray-700'}`} 
                                    />
                                ))}
                            </div>
                            <div className="flex items-center gap-1.5 opacity-50 group-hover:opacity-100 transition-opacity">
                               <CheckCircle size={12} className="text-nexus-success" />
                               <span className="text-[10px] font-mono text-gray-400">VERIFIED_HASH_{review.id.toUpperCase()}</span>
                            </div>
                        </div>
                     </div>
                   ))}
                </div>
              </div>
            )}

          </div>
        </main>
      </div>

      {/* Media Detail Modal */}
      {selectedQuest && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-nexus-900/90 backdrop-blur-md animate-in fade-in duration-200">
           <div className="w-full max-w-4xl max-h-[90vh] glass-panel rounded-xl overflow-hidden flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10">
              <div className="p-4 border-b border-white/10 flex items-center justify-between bg-black/20">
                 <div>
                    <h3 className="text-xl font-bold text-white">{selectedQuest.title}</h3>
                    <p className="text-nexus-accent text-xs font-mono">{selectedQuest.category.toUpperCase()} // GALLERY_VIEW</p>
                 </div>
                 <button 
                   onClick={() => setSelectedQuest(null)}
                   className="p-2 hover:bg-white/10 rounded-full transition-colors"
                 >
                    <X size={24} className="text-gray-400 hover:text-white" />
                 </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 bg-black/40">
                 <p className="text-gray-300 mb-6 max-w-2xl">{selectedQuest.description}</p>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedQuest.gallery.map((media, index) => (
                      <div key={index} className="space-y-2">
                         <div className="rounded-lg overflow-hidden border border-white/10 bg-nexus-900 shadow-lg relative aspect-video">
                            {media.type === 'video' ? (
                               <video 
                                 src={media.url} 
                                 controls 
                                 className="w-full h-full object-cover"
                                 preload="metadata"
                               />
                            ) : (
                               <img 
                                 src={media.url} 
                                 alt={media.caption} 
                                 className="w-full h-full object-cover"
                               />
                            )}
                         </div>
                         {media.caption && (
                           <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                              {media.type === 'video' ? <PlayCircle size={12} /> : <ImageIcon size={12} />}
                              <span>{media.caption}</span>
                           </div>
                         )}
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      )}

      {/* Persistent AI Chat Overlay */}
      <ChatConsole />
      
    </div>
  );
};

export default App;
