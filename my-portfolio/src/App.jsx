
import React from "react"
import { useEffect } from "react"

import { HashRouter as Router, Routes, Route, Link } from "react-router-dom"
import { useState } from "react"
import TypewriterLoop from "./TypewriterLoop"
import ProjectDetail from "./ProjectDetail"
import Pokemon from "./Pokemon"
import Posegame from "./PoseGame.jsx"
import Vacancyweb from "./Vacancyweb.jsx"
import UEVR from "./UEVR.jsx"
import Backrooms from "./Backrooms.jsx"


// Icons
const Icons = {
    Github: ({ size = 24, className = "" }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
        </svg>
    ),
    Mail: ({ size = 24, className = "" }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
    ),
    Linkedin: ({ size = 24, className = "" }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect width="4" height="12" x="2" y="9"></rect>
            <circle cx="4" cy="4" r="2"></circle>
        </svg>
    ),
    ArrowRight: ({ size = 24, className = "" }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
        </svg>
    ),
    ChevronDown: ({ size = 24, className = "" }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="m6 9 6 6 6-6"></path>
        </svg>
    ),
    Menu: ({ size = 24, className = "" }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
        </svg>
    ),
    X: ({ size = 24, className = "" }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
        </svg>
    ),
    ExternalLink: ({ size = 24, className = "" }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" x2="21" y1="14" y2="3"></line>
        </svg>
    ),
}

// SkipLink Component
function SkipLink() {
    const [isVisible, setIsVisible] = useState(false)

    // Effect to handle keyboard navigation
    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Tab" && !e.shiftKey) {
                setIsVisible(true)
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [])

    const handleClick = () => {
        const mainContent = document.querySelector("#about")
        if (mainContent) {
            mainContent.focus()
        }
        setIsVisible(false)
    }

    // return (
    //     <a href="#about" onClick={handleClick} className={`skip-link ${isVisible ? "visible" : ""}`}>
    //         Skip to main content
    //     </a>
    // )
}

// SkillCard Component
function SkillCard({ skill }) {
    const progressRef = React.useRef(null)

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && progressRef.current) {
                        progressRef.current.style.width = `${skill.level}%`
                    }
                })
            },
            { threshold: 0.1 },
        )

        if (progressRef.current) {
            observer.observe(progressRef.current)
        }

        return () => {
            if (progressRef.current) {
                observer.unobserve(progressRef.current)
            }
        }
    }, [skill.level])

    return (
        <div className="skill-card hover:transform hover:scale-105 transition-all duration-300">
            <div className="skill-header">
                <div className="skill-icon" style={{ backgroundColor: "#2d8a30" }}>
                    {skill.icon}
                </div>
                <h3 className="skill-name">{skill.name}</h3>
            </div>

            <div className="skill-progress-bg">
                <div
                    ref={progressRef}
                    className="skill-progress-fill"
                    style={{ width: "0%", background: "linear-gradient(to right, #2d8a30, #4caf50)" }}
                    aria-label={`${skill.level}% proficiency in ${skill.name}`}
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                ></div>
            </div>
            <p className="skill-level">{skill.level}%</p>
        </div>
    )
}

// PersonalSkillCard Component
function PersonalSkillCard({ skill }) {
    return (
        <div className="personal-skill-card">
            <h3 className="personal-skill-name">{skill.name}</h3>
            <p className="personal-skill-description">{skill.description}</p>
        </div>
    )
}

// ProjectCard Component
function ProjectCard({ project }) {
    const [isHovered, setIsHovered] = useState(false)

    // Bepaal de juiste link op basis van project ID
    const getProjectLink = () => {
        // Stuur elk project naar zijn eigen specifieke pagina
        switch (project.id) {
            case 1:
                return "/PoseGame"
            case 2:
                return "/Pokemon"
            case 3:
                return "/Vacancy"
            case 4:
                return "/UEVR"
            case 5:
                return "/Backrooms"
            default:
                return `/project/${project.id}`
        }
    }

    return (
        <div
            className={`project-card ${isHovered ? "hovered" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
        >
            <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                    {project.tags.map((tag) => (
                        <span key={tag} className="project-tag">
              {tag}
            </span>
                    ))}
                </div>

                <div className="project-links">
                    <Link to={getProjectLink()} className="project-link" aria-label={`View details of ${project.title}`}>
                        <Icons.ExternalLink className="project-link-icon" />
                        <span>See project</span>
                    </Link>
                    <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={`View source code of ${project.title}`}
                    >
                        <Icons.Github className="project-link-icon" />
                        <span>Source Code</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

// HomePage Component
function HomePage({ projects, technicalSkills, personalSkills, personalInfo, socialLinks }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeSkillTab, setActiveSkillTab] = useState("technical")

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    return (
        <>
            <SkipLink />
            <main className="min-h-screen">
                {/* Header */}
                <header className="header" role="banner">
                    <h1 className="logo">
                        <span className="sr-only">Portfolio of</span>
                        <span className="logo-text">BK</span>
                    </h1>

                    <div className="mobile-menu-button">
                        <button
                            aria-label="Toggle menu"
                            className="menu-button"
                            aria-expanded={mobileMenuOpen}
                            onClick={toggleMobileMenu}
                        >
                            <Icons.Menu className="icon" />
                            <span className="sr-only">Open main menu</span>
                        </button>
                    </div>

                    <nav className="desktop-nav" aria-label="Main navigation">
                        <ul className="nav-list">
                            {["About", "Projects", "Skills", "Contact"].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="nav-link"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const section = document.getElementById(item.toLowerCase());
                                            if (section) {
                                                section.scrollIntoView({ behavior: "smooth" });
                                            }
                                        }}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                </header>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`} id="mobile-menu" role="dialog" aria-modal="true">
                    <div className="mobile-menu-header">
                        <button aria-label="Close menu" className="close-button" onClick={toggleMobileMenu}>
                            <Icons.X className="icon" />
                            <span className="sr-only">Close menu</span>
                        </button>
                    </div>
                    <nav className="mobile-nav" aria-label="Mobile navigation">
                        <ul className="mobile-nav-list">
                            {["About", "Projects", "Skills", "Contact"].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="mobile-nav-link" onClick={toggleMobileMenu}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Hero Section */}
                <section className="hero-section" aria-labelledby="hero-heading">
                    <img src="giphy.gif" alt="Retro sparkles" className="header-gif" />
                    <div className="hero-content">
                        <h1 id="hero-heading" className="hero-title">
                            Britney Krabbendam
                        </h1>

                        <div className="hero-subtitle-container">
                            <TypewriterLoop
                                texts={[
                                    "Game & Web Developer",
                                    "React Enthusiast",
                                    "Frontend & UI Lover",
                                    "Pokémon Plushie Collector",
                                    "Gamer",
                                ]}
                                speed={80}
                                pause={2000}
                            />
                        </div>

                        <p className="hero-description">
                            A driven student developer with a fascination for both the dynamic world of gaming and the creative
                            possibilities of web development.
                        </p>

                        <div className="hero-buttons">
                            <a href="#/contact" className="primary-button"
                                onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}>
                <span className="button-content">
                  Contact Me
                  <Icons.ArrowRight className="button-icon" />
                </span>
                            </a>
                            <a href="#projects" className="secondary-button"
                               onClick={(e) => {
                                   e.preventDefault();
                                   document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                               }}>
                                View Work
                            </a>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="about-section" aria-labelledby="about-heading">
                    <div className="section-gradient"></div>

                    <div className="section-container">
                        <div className="section-header">
                            <h2 id="about-heading" className="section-title">
                                About Me
                            </h2>
                            <div className="section-title-underline"></div>
                        </div>

                        <div className="about-content">
                            <div className="about-text">
                                <h3 className="about-heading">Hey!</h3>
                                <p className="about-paragraph">
                                    Currently studying Creative media and Game technologies, I focus on web & game development using
                                    modern technologies.
                                </p>
                                <p className="about-paragraph">
                                    I have a strong enthusiasm for both web development and the immersive worlds of gaming. I am committed
                                    to continuous learning and applying new skills to create compelling and user-friendly digital
                                    experiences across both platforms.
                                </p>

                                <div className="about-info-grid">
                                    {personalInfo.map((item) => (
                                        <div key={item.label} className="about-info-item">
                                            <h4 className="about-info-label">{item.label}</h4>
                                            <p className="about-info-value">{item.value}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="about-actions">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="projects-section" aria-labelledby="projects-heading">
                    <div className="section-gradient"></div>

                    <div className="section-container">
                        <div className="section-header">
                            <h2 id="projects-heading" className="section-title">
                                My Projects
                            </h2>
                            <div className="section-title-underline"></div>
                            <p className="section-description">Here are some of my recent projects.</p>
                        </div>

                        <div className="projects-grid">
                            {projects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>

                        <div className="projects-more">
                            <a
                                href="https://github.com/Zoruasy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="github-link"
                                aria-label="View more projects on GitHub"
                            >
                                <Icons.Github className="github-icon" />
                                More Projects on GitHub
                            </a>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="skills-section" aria-labelledby="skills-heading">
                    <div className="section-gradient"></div>

                    <div className="section-container">
                        <div className="section-header">
                            <h2 id="skills-heading" className="section-title">
                                My Skills
                            </h2>
                            <div className="section-title-underline"></div>
                        </div>

                        <div className="skills-tabs">
                            <button
                                className={`skills-tab ${activeSkillTab === "technical" ? "active" : ""}`}
                                onClick={() => setActiveSkillTab("technical")}
                                aria-selected={activeSkillTab === "technical"}
                                role="tab"
                            >
                                Technical Skills
                            </button>
                            <button
                                className={`skills-tab ${activeSkillTab === "personal" ? "active" : ""}`}
                                onClick={() => setActiveSkillTab("personal")}
                                aria-selected={activeSkillTab === "personal"}
                                role="tab"
                            >
                                Personal Skills
                            </button>
                        </div>

                        {activeSkillTab === "technical" ? (
                            <div className="skills-grid" role="tabpanel" aria-label="Technical Skills">
                                {technicalSkills.map((skill) => (
                                    <SkillCard key={skill.name} skill={skill} />
                                ))}
                            </div>
                        ) : (
                            <div className="personal-skills-grid" role="tabpanel" aria-label="Personal Skills">
                                {personalSkills.map((skill) => (
                                    <PersonalSkillCard key={skill.name} skill={skill} />
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="contact-section" aria-labelledby="contact-heading">
                    <div className="section-gradient"></div>

                    <div className="section-container">
                        <div className="section-header">
                            <h2 id="contact-heading" className="section-title">
                                Get In Touch
                            </h2>
                            <div className="section-title-underline"></div>
                            <p className="section-description">I'm currently looking for an internship!</p>
                        </div>

                        <div className="contact-content">
                            <div className="contact-info">
                                <h3 className="contact-info-title">Contact Information</h3>

                                <div className="contact-info-list">
                                    <div className="contact-info-item">
                                        <div className="contact-info-icon">
                                            <Icons.Mail className="icon" aria-hidden="true" />
                                        </div>
                                        <div className="contact-info-text">
                                            <h4 className="contact-info-label">Email</h4>
                                            <p className="contact-info-value">krabritney@gmail.com</p>
                                        </div>
                                        <div className="contact-info-text"></div>
                                    </div>

                                    <div className="contact-info-item">
                                        <div className="contact-info-icon">
                                            <Icons.Github className="icon" aria-hidden="true" />
                                        </div>
                                        <div className="contact-info-text">
                                            <h4 className="contact-info-label">GitHub</h4>
                                            <a
                                                href="https://github.com/Zoruasy"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="contact-info-value"
                                            >
                                                github.com/Zoruasy
                                            </a>
                                        </div>
                                    </div>

                                    <div className="contact-info-item">
                                        <div className="contact-info-icon">
                                            <Icons.Linkedin className="icon" aria-hidden="true" />
                                        </div>
                                        <div className="contact-info-text">
                                            <h4 className="contact-info-label">LinkedIn</h4>
                                            <a
                                                href="https://linkedin.com/in/britney-krabbendam-software-developer/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="contact-info-value"
                                            >
                                                linkedin.com/britney-krabbendam
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="social-links"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="footer" role="contentinfo">
                    <div className="footer-container">
                        <div className="footer-content">
                            <div className="footer-branding">
                                <p className="footer-logo">
                                    <span className="footer-logo-text">BK</span>
                                </p>
                                <p className="footer-tagline">Web & Game Developer</p>
                            </div>

                            <div className="footer-links">
                                <a href="#about" onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                                }}>
                                    About
                                </a>

                                <a href="#projects" onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                                }}>
                                    Projects
                                </a>

                                <a href="#skills" onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                                }}>
                                    Skills
                                </a>

                                <a href="#contact" onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}>
                                    Contact
                                </a>


                            </div>
                        </div>

                        <div className="footer-bottom">
                            <p>© {new Date().getFullYear()} Britney Krabbendam.</p>
                        </div>
                    </div>
                </footer>
            </main>
        </>
    )
}

// Technical skills data
const technicalSkills = [
    { name: "HTML", icon: "H", level: 90 },
    { name: "CSS", icon: "C", level: 80 },
    { name: "JavaScript + React", icon: "JS", level: 75 },
    { name: "Unreal Engine", icon: "U", level: 60 },
    { name: "Blender", icon: "B", level: 35 },
    { name: "Tailwind CSS", icon: "T", level: 65 },
    { name: "Git", icon: "G", level: 80 },
    { name: "Figma", icon: "F", level: 65 },
    { name: "PHP + Laravel", icon: "P", level: 65 },
]

// Personal skills data
const personalSkills = [
    {
        name: "Problem Solving",
        description: "Analytical thinker and good at finding creative solutions to complex problems.",
    },
    {
        name: "Communication",
        description: "Clear and effective communicator, able to explain technical concepts to non-technical audiences.",
    },
    {
        name: "Teamwork",
        description: "Collaborative team player who thrives in group settings and contributes positively to team dynamics.",
    },
    {
        name: "Time Management",
        description: "Excellent at prioritizing tasks and meeting deadlines, even under pressure.",
    },
    {
        name: "Adaptability",
        description: "Quick to learn new technologies and adapt to changing project requirements.",
    },
    {
        name: "Creativity",
        description: "Innovative thinker who brings fresh perspectives and ideas to projects.",
    },
]

// Projects data
const projects = [
    {
        id: 1,
        title: "Pose Detection Game",
        description: "A pose detection game trained on own data... who will win?",
        tags: ["React", "HTML", "CSS"],
        demoUrl: "#",
        codeUrl: "https://github.com/Zoruasy/PosedetectionGame",
    },
    {
        id: 2,
        title: "Database Pokémon website",
        description: "A website where you can add, edit, delete your Pokémon from a database server..",
        tags: ["React", "Vite", "Tailwind"],
        demoUrl: "#",
        codeUrl: "https://github.com/Zoruasy/Frontend-REACT",
    },
    {
        id: 3,
        title: "Laravel Vacancy Website",
        description: "A vacancy website, with a database, interface and user authentication made with other students.",
        tags: ["Laravel", "HTML", "CSS"],
        demoUrl: "#",
        codeUrl: "https://github.com/justalana/tle1-ontwerpen",
    },
    {
        id: 4,
        title: "VR backrooms Game",
        description: "VR backrooms-like game, made in Unreal Engine with other students.",
        tags: ["Unreal Engine"],
        demoUrl: "#",
        codeUrl: "#",
    },
    {
        id: 5,
        title: "UE backrooms game",
        description: "A Horror-backroom game made in Unreal Engine.",
        tags: ["Unreal Engine"],
        demoUrl: "#",
    },
]

// Personal info data
const personalInfo = [
    { label: "Name", value: "Britney Krabbendam" },
    { label: "Study", value: "Creative Media & Game Technologies" },
    { label: "Location", value: "Schiedam, NL" },
]

// Social media links
const socialLinks = ["github", "linkedin"]

function App() {
    useEffect(() => {
        const hash = window.location.hash
        if (hash) {
            const id = hash.replace("#", "")
            const element = document.getElementById(id)
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" })
                }, 0)
            }
        }
    }, [])

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <HomePage
                            projects={projects}
                            technicalSkills={technicalSkills}
                            personalSkills={personalSkills}
                            personalInfo={personalInfo}
                            socialLinks={socialLinks}
                        />
                    }
                />
                <Route path="/project/:id" element={<ProjectDetail projects={projects} />} />
                <Route path="/pokemon" element={<Pokemon />} />
                <Route path="/posegame" element={<Posegame />} />
                <Route path="/vacancy" element={<Vacancyweb />} />
                <Route path="/UEVR" element={<UEVR />} />
                <Route path="/backrooms" element={<Backrooms />} />
            </Routes>
        </Router>
    )
}

export default App
