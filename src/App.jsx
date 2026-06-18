import { useState } from 'react';
import { 
  Menu, X, Github, Linkedin, Mail, Phone, 
  ExternalLink, Briefcase, GraduationCap, Award, Heart,
  Twitter, Instagram, Globe, ArrowUpRight
} from 'lucide-react';
import { 
  SiReact, SiNodedotjs, SiExpress, SiMongodb, 
  SiTailwindcss, SiJavascript, SiTypescript, 
  SiAngular, SiNestjs, SiMysql, SiGit, 
  SiRedux, SiSocketdotio, SiPostman, SiVite
} from 'react-icons/si';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects = [
    {
      id: 1,
      name: "StoreAndManage",
      description: "Full-stack e-commerce platform with product filtering, inventory management, JWT authentication, Razorpay payment, and AWS S3 storage.",
      tech: [SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss],
      liveUrl: "https://shop.virattom.com",
      github: "https://github.com/SurajNyavanandi/ecommerce",
      bgGradient: "from-blue-50 to-indigo-50"
    },
    {
      id: 2,
      name: "Invoice Management",
      description: "Enterprise system with role-based access (SUPER_ADMIN, ADMIN, UNIT_MANAGER, USER). Features invoice validation, date sequencing, and financial year filtering.",
      tech: [SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss],
      liveUrl: "https://invoice.virattom.com",
      github: "https://github.com/SurajNyavanandi/MERN-Task",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      id: 3,
      name: "AI Chatbot",
      description: "Intelligent chatbot with natural language processing, conversation history, and real-time socket communication for dynamic responses.",
      tech: [SiReact, SiNodedotjs, SiExpress, SiMongodb, SiSocketdotio],
      liveUrl: "https://chat.virattom.com",
      github: "https://github.com/SurajNyavanandi/chatbot",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      id: 4,
      name: "Job Portal",
      description: "Job marketplace with employer/candidate dashboards, job posting, application tracking, resume upload, and email notifications.",
      tech: [SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss],
      liveUrl: "https://job.virattom.com",
      github: "https://github.com/SurajNyavanandi/jobportal",
      bgGradient: "from-orange-50 to-red-50"
    }
  ];

  const skills = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#000000" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Angular", icon: SiAngular, color: "#DD0031" },
    { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Vite", icon: SiVite, color: "#646CFF" }
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/SurajNyavanandi", color: "text-gray-800" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/suraj-nyavanandi-305962286", color: "text-blue-700" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/yourhandle", color: "text-sky-500" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/virat.tom/", color: "text-pink-600" },
    { name: "Email", icon: Mail, url: "mailto:kanusuraj15@gmail.com", color: "text-red-500" }
  ];

  const menuItems = ["Work", "Skills", "About", "Contact"];

  const scrollingSkills = [...skills, ...skills, ...skills];

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 py-4 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium tracking-wide text-gray-900">Suraj Nyavanandi</span>
            
            <div className="hidden md:flex gap-8">
              {menuItems.map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                  {item}
                </a>
              ))}
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 flex flex-col gap-3">
            {menuItems.map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-gray-500 py-2">
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-gray-900 mb-4">
            Suraj Nyavanandi
          </h1>
          <p className="text-lg text-gray-500 mb-6">MERN Stack Developer</p>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-sm">
            Building scalable web applications with modern technologies.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full hover:bg-gray-50 transition-colors ${social.color}`}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
          
          <div className="flex gap-3 justify-center mt-8">
            <a href="#work" className="px-5 py-2 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 transition">View Work</a>
            <a href="#contact" className="px-5 py-2 border border-gray-300 text-gray-600 rounded-full text-sm hover:border-blue-500 hover:text-blue-600 transition">Contact</a>
          </div>
        </div>
      </section>

      {/* Rolling Tech Icons */}
      <div className="py-6 border-y border-gray-100 overflow-hidden">
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex gap-8">
            {scrollingSkills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div key={idx} className="inline-flex items-center gap-2 mx-2">
                  <Icon size={20} color={skill.color} />
                  <span className="text-xs text-gray-500">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Projects Grid Section - Fixed nested anchor issue */}
      <section id="work" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-light text-gray-900 mb-2">Selected Work</h2>
          <p className="text-gray-400 text-sm mb-10">Click any project to see live demo</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map(project => (
              <div key={project.id} className={`bg-gradient-to-br ${project.bgGradient} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 group`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-2">
                    {project.tech.map((Tech, idx) => (
                      <Tech key={idx} size={20} className="text-gray-500" />
                    ))}
                  </div>
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs bg-white/80 px-3 py-1 rounded-full text-blue-600 font-medium hover:bg-white transition"
                  >
                    Live Demo <ArrowUpRight size={12} />
                  </a>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-400 group-hover:text-blue-600 transition flex items-center gap-1"
                  >
                    Visit website <ExternalLink size={12} />
                  </a>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 transition"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid Section */}
      <section id="skills" className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-light text-gray-900 mb-2">Tech Stack</h2>
          <p className="text-gray-400 text-sm mb-10">Technologies I work with daily</p>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6">
            {skills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div key={idx} className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white transition cursor-pointer">
                  <Icon size={32} color={skill.color} />
                  <span className="text-xs text-gray-500 font-medium">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-light text-gray-900 mb-2">About</h2>
          <p className="text-gray-400 text-sm mb-10">My journey in development</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4 p-5 rounded-xl bg-gray-50">
              {/* <div className="flex items-start gap-3">
                <Briefcase size={18} className="text-blue-500 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-900">MERN Stack Developer</h3>
                  <p className="text-xs text-gray-500">Sharpener (Remote) | Mar 2025 – Feb 2026</p>
                  <p className="text-xs text-gray-400 mt-1">11 months intensive training with production-grade projects</p>
                </div>
              </div> */}
              <div className="flex items-start gap-3">
                <GraduationCap size={18} className="text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-900">B.Tech Electrical Engineering</h3>
                  <p className="text-xs text-gray-500">VIGNAN Institute | CGPA: 7.32/10</p>
                </div>
              </div>
            </div>
            <div className="space-y-4 p-5 rounded-xl bg-gray-50">
              <div className="flex items-start gap-3">
                <Award size={18} className="text-yellow-500 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-900">Certifications</h3>
                  <p className="text-xs text-gray-500">Wipro Certification in Java/J2EE (2022)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Heart size={18} className="text-red-500 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-900">Interests</h3>
                  <p className="text-xs text-gray-500">Open source, System design, Performance optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-light text-gray-900 mb-2">Let's Connect</h2>
          <p className="text-gray-400 text-sm mb-6">Available for freelance and full-time opportunities</p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href="mailto:kanusuraj15@gmail.com" className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition">
              <Mail size={14} /> kanusuraj15@gmail.com
            </a>
            <a href="tel:+919666635009" className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition">
              <Phone size={14} /> +91-9666635009
            </a>
          </div>
          
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} hover:opacity-70 transition`}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-xs text-gray-400 border-t border-gray-100">
        <p>© 2025 Suraj Nyavanandi | Built with React, Tailwind CSS</p>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
          display: flex;
          width: fit-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export default App;