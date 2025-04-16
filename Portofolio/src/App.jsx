import 'font-awesome/css/font-awesome.min.css';
import { useEffect } from "react";
import portfolio1 from './images/portfolio1.png';
import portfolio3 from './images/portfolio3.gif';
import portfolio2 from './images/portfolio2.png';
import portfolio4 from './images/portfolio4.png';
import portfolio5 from './images/portfolio5.png';

function App() {
    // array met projecten
    const projects = [
        {
            id: 1,
            title: "Project 1",
            description: "Game • Pose Detection",
            image: portfolio1,
            link: "#",
        },

        {
            id: 2,
            title: "Project 2",
            description: "Game Development • Unreal Engine",
            image: portfolio2,
            link: "#",
        },
        {
            id: 3,
            title: "Project 3",
            description: "Unreal Engine • VR",
            image: portfolio3,
            link: "#",
        },
        {
            id: 4,
            title: "Project 4",
            description: "Front-End • React • Database",
            image: portfolio4,
            link: "#",
        },
        {
            id: 5,
            title: "Project 5",
            description: "Front-End • Back-End • WEB API • Laravel",
            image: portfolio5,
            link: "#",
        },
    ];

    // cursor
    useEffect(() => {
        const handleMouseMove = (e) => {
            const cursor = document.querySelector(".sparkle-cursor");
            if (cursor) {
                cursor.style.left = `${e.clientX}px`;
                cursor.style.top = `${e.clientY}px`;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="girly-container">
            {/* cursor */}
            <div className="sparkle-cursor"></div>

            {/* Header */}
            <header className="header">
                <div className="logo-container">
                    <div className="logo">
                        <span className="logo-text">My Portfolio</span>
                        <div className="butterfly butterfly-1"></div>
                        <div className="butterfly butterfly-2"></div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="nav">
                    <ul>
                        <li><a href="#home" className="nav-link">Home</a></li>
                        <li><a href="#about" className="nav-link">About Me</a></li>
                        <li><a href="#portfolio" className="nav-link">Portfolio</a></li>
                        <li><a href="#skills" className="nav-link">Skills</a></li>
                        <li><a href="#projects" className="nav-link">Projects</a></li>
                        <li><a href="#contact" className="nav-link">Contact</a></li>
                    </ul>
                </nav>
            </header>

            {/* section */}
            <section id="home" className="hero">
                <div className="stars-bg"></div>
                <div className="hero-content">
                    <h1 className="glitter-text">Britney Krabbendam</h1>
                    <p className="subtitle">Frontend Developer • Game Developer</p>

                </div>
            </section>

            {/* About section */}
            <section id="about" className="about">
                <div className="section-header">
                    <h2>About Me</h2>
                    <div className="heart-divider">
                        <span>♥</span>
                        <span>♥</span>
                        <span>♥</span>
                    </div>
                </div>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Welcome to my portfolio! I'm Britney Krabbendam, a 25-year old student. I’m currently studying Creative Media and Game Technologies at Hogeschool Rotterdam, where I’ve developed a strong foundation in frontend technologies, UI/UX design, and game development.
                        </p>
                        <p>
                            When I'm not coding, I collect Pokémon plushies, listen to my favorite music, and go to the gym!
                        </p>
                        <div className="favorites-container">
                            <div className="favorite">
                                <span className="favorite-label">♥ Skills:</span>
                                <span className="favorite-value">CSS, HTML, Javascript, React, Laravel, Tailwind, PHP, Unreal Engine, Git, Figma, Trello, API integration, LLM, Stable Diffusion, AJAX.</span>
                            </div>
                            <div className="favorite">
                                <span className="favorite-label">♥ Personal skills:</span>
                                <span className="favorite-value">Empathic, Teamwork, Attention to detail, Customer service, Communication skills.</span>
                            </div>
                            <div className="favorite">
                                <span className="favorite-label">♥ Favorite pokemon:</span>
                                <span className="favorite-value">Zorua.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio section */}
            <section id="portfolio" className="portfolio">
                <div className="section-header">
                    <h2>My Work</h2>
                    <div className="heart-divider">
                        <span>♥</span>
                        <span>♥</span>
                        <span>♥</span>
                    </div>
                </div>
                <div className="portfolio-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="portfolio-item">
                            <div className="portfolio-image">
                                <img src={project.image} alt={project.title} />
                                <div className="portfolio-overlay">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <a href={project.link} className="view-button">
                                        View
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Button to more projects */}
                <div className="more-button-container">
                    <a
                        href="https://github.com/zoruasy"
                        className="more-button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        More Projects
                    </a>
                </div>
            </section>

            {/* Contact section */}
            <section id="contact" className="contact">
                <div className="section-header">
                    <h2>Get In Touch!</h2>
                    <div className="heart-divider">
                        <span>♥</span>
                        <span>♥</span>
                        <span>♥</span>
                    </div>
                </div>
                <div className="contact-container">

                    <div className="contact-info">

                        <div className="social-links">
                            <a href="#https://github.com/Zoruasy" className="social-link">GitHub</a>
                            <a href="#https://www.linkedin.com/in/britney-krabbendam-software-developer/" className="social-link">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <p>© Britney Krabbendam</p>
                </div>
                <div className="footer-decoration"></div>
            </footer>
        </div>
    );
}

export default App;
