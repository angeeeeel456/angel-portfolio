"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, ExternalLink, Github, ArrowRight, Palette, Code, Zap, Globe } from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("angel")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  const works = [
    {
      title: "Habihouse",
      description:
        "A comprehensive housing platform featuring property search, personalized recommendations, and user-friendly navigation. The interface showcases modern design patterns with intuitive search functionality and categorized property listings for students and professionals seeking accommodation.",
      image: "/images/habihouse-interface.png",
      year: "2024",
      type: "figma",
      figmaUrl: "https://www.figma.com/design/0z3eor5NvaZO940xMczS2V/Habihouse?m=dev&t=18bpGLCVMIca6wAo-1",
      prototypeUrl: "https://www.figma.com/proto/0z3eor5NvaZO940xMczS2V/Habihouse?node-id=1-2&t=18bpGLCVMIca6wAo-1",
      features: [
        "Advanced property search functionality",
        "Personalized recommendations system",
        "Interactive property cards with ratings",
        "Clean navigation with Home, Map, Saved, Messages",
        "Location-based filtering and sorting",
        "Modern, user-friendly interface design",
      ],
    },
    {
      title: "Leafio",
      description:
        "A mobile plant care application designed to help users 'love every leaf & watch their plants thrive.' Features task management for plant care routines, clean mobile interface, and nature-inspired design system. Built with Flutter and includes both design prototypes and functional code implementation.",
      image: "/images/leafio-new.png",
      year: "2024",
      type: "flutter-app",
      figmaUrl: "https://www.figma.com/design/vJkPMRSj0fOW5s2lkdE1ka/Leafio?node-id=2003-2&t=hkgeGFqleaYQ15GZ-1",
      githubUrl: "https://github.com/angeeeeel456/Leafio.git",
      wireframeUrl: "https://www.figma.com/design/vJkPMRSj0fOW5s2lkdE1ka/Leafio?node-id=0-1&t=hkgeGFqleaYQ15GZ-1",
      prototypeUrl: "https://www.figma.com/proto/vJkPMRSj0fOW5s2lkdE1ka/Leafio?node-id=2003-2&t=hkgeGFqleaYQ15GZ-1",
      technologies: ["Flutter", "Dart", "Figma", "Mobile Development"],
      features: [
        "Plant care task management system",
        "Nature-inspired UI with botanical imagery",
        "Clean mobile-first design approach",
        "Task completion tracking with visual feedback",
        "Intuitive navigation and user flow",
        "Calming green color palette and typography",
      ],
      highlights: [
        "Complete Flutter app development",
        "From design to code implementation",
        "Mobile-optimized user experience",
        "Task-based plant care system",
      ],
    },
    {
      title: "RibbonRealm",
      description:
        "A full-stack PHP ecommerce platform specializing in hair ribbons and accessories. Features elegant design with coral/pink branding, user authentication, product catalog, shopping cart functionality, and responsive layout. The tagline 'Where Ribbons Meet Style' reflects the brand's focus on adding elegance and fun to any outfit.",
      image: "/images/ribbonrealm-new.png",
      year: "2024",
      type: "php-ecommerce",
      githubUrl: "https://github.com/angeeeeel456/RibbonRealm.git",
      liveUrl: "", // Add if you have a live demo
      technologies: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "Bootstrap"],
      features: [
        "User authentication & registration system",
        "Hair accessories product catalog",
        "Shopping cart & secure checkout",
        "Responsive design with elegant branding",
        "Social media integration",
        "Search functionality",
        "Admin dashboard for inventory management",
      ],
      highlights: [
        "Elegant coral/pink design system",
        "Mobile-responsive ecommerce layout",
        "Complete user authentication flow",
        "Professional product presentation",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-[#FDF9F3] sans-text">
      {/* Angel Section - Hero */}
      <section id="angel" className="min-h-screen bg-[#003CA6] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-32 h-32 bg-[#E2AB2D] organic-shape opacity-20 animate-float-gentle"></div>
          <div
            className="absolute bottom-32 left-16 w-24 h-24 bg-[#F8EFE0] organic-shape-2 opacity-30 animate-float-gentle"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/3 w-16 h-16 bg-[#E2AB2D] organic-shape opacity-15 animate-float-gentle"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        {/* Navigation */}
        <nav className="relative z-50 pt-8">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex justify-between items-center">
              <div className="text-[#F8EFE0] font-medium tracking-wider serif-heading text-lg">Angel</div>
              <div className="flex space-x-12">
                {[
                  { id: "angel", label: "About" },
                  { id: "works", label: "Works" },
                  { id: "contact", label: "Contact" },
                ].map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`text-sm font-medium tracking-wider transition-all duration-300 ${
                      activeSection === section.id ? "text-[#E2AB2D]" : "text-[#F8EFE0]/80 hover:text-[#F8EFE0]"
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex items-center justify-center min-h-screen relative">
          <div className="max-w-7xl mx-auto px-8 relative">
            {/* Organic Shape */}
            <div
              className={`absolute right-0 top-1/2 transform -translate-y-1/2 transition-all duration-1000 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
              }`}
            >
              <div className="w-80 h-96 bg-[#E2AB2D] organic-shape opacity-90"></div>
            </div>

            {/* Main Text */}
            <div
              className={`relative z-10 transition-all duration-1000 delay-300 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
              }`}
            >
              <h1 className="text-7xl lg:text-8xl font-bold text-[#F8EFE0] leading-none serif-heading">
                UX / UI
                <br />
                <span className="relative">
                  Desig
                  <span className="text-[#F8EFE0] relative z-20">ner</span>
                </span>
              </h1>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-8">
              <div className="flex items-center space-x-4 text-[#F8EFE0]/60">
                <div className="w-px h-16 bg-[#F8EFE0]/30"></div>
                <span className="text-sm tracking-wider rotate-90 origin-left">Scroll</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 watercolor-bg">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-5xl font-bold text-[#003CA6] serif-heading leading-tight">
                  Passionate About
                  <br />
                  <span className="text-[#E2AB2D]">Thoughtful Design</span>
                </h2>
                <p className="text-xl text-[#003CA6]/80 leading-relaxed">
                  I'm Angel, a UX/UI designer with a passion for creating meaningful digital experiences. I specialize
                  in user-centered design, elegant prototyping, and bringing ideas to life through sophisticated design
                  solutions.
                </p>
              </div>

              

              <Button
                onClick={() => scrollToSection("works")}
                className="bg-[#003CA6] hover:bg-[#003CA6]/90 text-[#F8EFE0] px-8 py-4 text-lg font-medium group rounded-full"
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="relative">
              <div className="relative w-full h-96 overflow-hidden rounded-3xl shadow-lg">
                <div className="absolute inset-0 bg-[#E2AB2D] opacity-10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-[#E2AB2D] shadow-xl">
                    <img
                      src="/images/profile-image.png"
                      alt="Angel - UX/UI Designer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#E2AB2D] organic-shape"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#003CA6]/20 organic-shape-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 bg-[#003CA6] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-40 h-40 bg-[#E2AB2D] organic-shape opacity-10 animate-watercolor-flow"></div>
          <div
            className="absolute bottom-20 right-20 w-32 h-32 bg-[#F8EFE0] organic-shape-2 opacity-15 animate-watercolor-flow"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="mb-20">
            <h2 className="text-6xl font-bold text-[#E2AB2D] mb-12 serif-heading">Skills & Expertise</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            {/* Design Skills */}
            <div className="space-y-8 group">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-[#E2AB2D] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Palette className="w-8 h-8 text-[#003CA6]" />
                </div>
                <h3 className="text-2xl font-semibold text-[#E2AB2D] serif-heading">Design</h3>
              </div>
              <div className="space-y-6">
                {[
                  { name: "UI/UX Design", icon: "🎨" },
                  { name: "Wireframing", icon: "📐" },
                  { name: "User Research", icon: "🔍" },
                ].map((skill, index) => (
                  <div
                    key={skill.name}
                    className="flex items-center space-x-4 text-[#F8EFE0] text-lg hover:text-[#E2AB2D] transition-all duration-300 hover:translate-x-2 cursor-pointer"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span>{skill.name}</span>
                    <div className="flex-1 h-px bg-[#F8EFE0]/20 ml-4 group-hover:bg-[#E2AB2D]/50 transition-colors duration-300"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="space-y-8 group">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-[#E2AB2D] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-8 h-8 text-[#003CA6]" />
                </div>
                <h3 className="text-2xl font-semibold text-[#E2AB2D] serif-heading">Technical</h3>
              </div>
              <div className="space-y-6">
                {[
                  { name: "Figma", icon: "🎯" },
                  { name: "Flutter", icon: "📱" },
                  { name: "Technical Writing", icon: "✍️" },
                ].map((skill, index) => (
                  <div
                    key={skill.name}
                    className="flex items-center space-x-4 text-[#F8EFE0] text-lg hover:text-[#E2AB2D] transition-all duration-300 hover:translate-x-2 cursor-pointer"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span>{skill.name}</span>
                    <div className="flex-1 h-px bg-[#F8EFE0]/20 ml-4 group-hover:bg-[#E2AB2D]/50 transition-colors duration-300"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="space-y-8 group">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-[#E2AB2D] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-[#003CA6]" />
                </div>
                <h3 className="text-2xl font-semibold text-[#E2AB2D] serif-heading">Collaboration</h3>
              </div>
              <div className="space-y-6">
                {[
                  { name: "Teamwork", icon: "🤝" },
                  { name: "Communication", icon: "💬" },
                  { name: "Creativity", icon: "💡" },
                ].map((skill, index) => (
                  <div
                    key={skill.name}
                    className="flex items-center space-x-4 text-[#F8EFE0] text-lg hover:text-[#E2AB2D] transition-all duration-300 hover:translate-x-2 cursor-pointer"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span>{skill.name}</span>
                    <div className="flex-1 h-px bg-[#F8EFE0]/20 ml-4 group-hover:bg-[#E2AB2D]/50 transition-colors duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="py-32 watercolor-bg">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20">
            <h2 className="text-6xl font-bold text-[#003CA6] mb-6 serif-heading">
              Selected
              <span className="text-[#E2AB2D]"> Works</span>
              <br />
              
            </h2>
            <p className="text-xl text-[#003CA6]/80 max-w-2xl leading-relaxed">
              Here are some of my recent projects showcasing different design challenges and elegant solutions.
            </p>
          </div>

          <div className="space-y-32">
            {works.map((work, index) => (
              <div key={work.title} className="group">
                <div
                  className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                >
                  <div className={`space-y-8 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm font-bold text-[#E2AB2D] tracking-wider serif-heading">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm text-[#003CA6]/60 tracking-wider">{work.year}</span>
                      {work.type === "figma" && (
                        <span className="px-4 py-2 bg-[#E2AB2D] text-[#003CA6] text-xs font-semibold rounded-full">
                          FIGMA PROTOTYPE
                        </span>
                      )}
                      {work.type === "flutter-app" && (
                        <span className="px-4 py-2 bg-[#003CA6] text-[#F8EFE0] text-xs font-semibold rounded-full">
                          FLUTTER APP
                        </span>
                      )}
                      {work.type === "php-ecommerce" && (
                        <span className="px-4 py-2 bg-green-600 text-white text-xs font-semibold rounded-full">
                          PHP ECOMMERCE
                        </span>
                      )}
                    </div>
                    <h3 className="text-4xl font-bold text-[#003CA6] serif-heading">{work.title}</h3>
                    <p className="text-lg text-[#003CA6]/80 leading-relaxed">{work.description}</p>

                    {/* Technologies Used */}
                    {work.technologies && (
                      <div className="space-y-3">
                        <h4 className="font-semibold text-[#003CA6] serif-heading">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {work.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-white/60 text-[#003CA6] text-sm rounded-full font-medium backdrop-blur-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-4">
                      {work.type === "figma" && (
                        <>
                          <Button
                            variant="outline"
                            className="border-2 border-[#003CA6] text-[#003CA6] hover:bg-[#003CA6] hover:text-[#F8EFE0] font-medium group rounded-full"
                            onClick={() => window.open(work.figmaUrl || "#", "_blank")}
                          >
                            View Design
                            <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                          <Button
                            variant="outline"
                            className="border-2 border-[#E2AB2D] text-[#E2AB2D] hover:bg-[#E2AB2D] hover:text-[#003CA6] font-medium rounded-full"
                            onClick={() => window.open(work.prototypeUrl || work.figmaUrl, "_blank")}
                          >
                            View Prototype
                          </Button>
                        </>
                      )}

                      {work.type === "flutter-app" && (
                        <>
                          <Button
                            variant="outline"
                            className="border-2 border-[#003CA6] text-[#003CA6] hover:bg-[#003CA6] hover:text-[#F8EFE0] font-medium group rounded-full"
                            onClick={() => window.open(work.figmaUrl || "#", "_blank")}
                          >
                            View Design
                            <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Button>

                          <Button
                            variant="outline"
                            className="border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white font-medium group rounded-full"
                            onClick={() => window.open(work.githubUrl || "#", "_blank")}
                          >
                            View Code
                            <Github className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Button>

                          <Button
                            variant="outline"
                            className="border-2 border-[#E2AB2D] text-[#E2AB2D] hover:bg-[#E2AB2D] hover:text-[#003CA6] font-medium rounded-full"
                            onClick={() => window.open(work.prototypeUrl || work.figmaUrl, "_blank")}
                          >
                            View Prototype
                          </Button>
                        </>
                      )}

                      {work.type === "php-ecommerce" && (
                        <>
                          <Button
                            variant="outline"
                            className="border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white font-medium group rounded-full"
                            onClick={() => window.open(work.githubUrl || "#", "_blank")}
                          >
                            View Code
                            <Github className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Button>

                          {work.liveUrl && (
                            <Button
                              variant="outline"
                              className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-medium group rounded-full"
                              onClick={() => window.open(work.liveUrl, "_blank")}
                            >
                              Live Demo
                              <Globe className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          )}
                        </>
                      )}
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div className="relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-sm shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
                      <img
                        src={work.image || "/placeholder.svg"}
                        alt={work.title}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-[#003CA6] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-48 h-48 bg-[#E2AB2D] organic-shape opacity-10 animate-watercolor-flow"></div>
          <div
            className="absolute bottom-20 left-20 w-32 h-32 bg-[#F8EFE0] organic-shape-2 opacity-15 animate-watercolor-flow"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-8">
              <h2 className="text-6xl font-bold text-[#F8EFE0] serif-heading">
                Let's
                <br />
                <span className="text-[#E2AB2D]">Connect</span>
              </h2>
              <p className="text-xl text-[#F8EFE0]/80 leading-relaxed">
                Ready to bring your ideas to life? Let's discuss your next project and create something beautiful
                together.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:nc719336@gmail.com"
                  className="flex items-center space-x-4 text-[#F8EFE0] hover:text-[#E2AB2D] transition-colors group"
                >
                  <Mail className="w-6 h-6" />
                  <span className="text-lg font-medium">nc719336@gmail.com</span>
                </a>

                <div className="flex space-x-6">
                  <a
                    href="https://github.com/angeeeeel456"
                    className="text-[#F8EFE0]/60 hover:text-[#E2AB2D] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur-sm border-[#F8EFE0]/20 rounded-3xl">
              <CardContent className="p-8">
                <form action="https://formspree.io/f/mkgbrqlb" method="POST" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Input
                        name="name"
                        placeholder="Your name"
                        required
                        className="bg-white/10 border-[#F8EFE0]/20 text-[#F8EFE0] placeholder:text-[#F8EFE0]/60 focus:border-[#E2AB2D] rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your email"
                        required
                        className="bg-white/10 border-[#F8EFE0]/20 text-[#F8EFE0] placeholder:text-[#F8EFE0]/60 focus:border-[#E2AB2D] rounded-xl"
                      />
                    </div>
                  </div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    required
                    className="bg-white/10 border-[#F8EFE0]/20 text-[#F8EFE0] placeholder:text-[#F8EFE0]/60 focus:border-[#E2AB2D] rounded-xl"
                  />
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    className="bg-white/10 border-[#F8EFE0]/20 text-[#F8EFE0] placeholder:text-[#F8EFE0]/60 focus:border-[#E2AB2D] rounded-xl"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-[#E2AB2D] hover:bg-[#E2AB2D]/90 text-[#003CA6] font-bold py-4 text-lg rounded-xl"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F8EFE0] text-[#003CA6] py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold serif-heading">Angel</div>
            <p className="text-[#003CA6]/60">&copy; 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
