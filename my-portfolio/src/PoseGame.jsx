
import React from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Github, ExternalLink } from 'lucide-react'
import "./layout/ProjectDetail.css"

const PoseDetectionGame = () => {
    return (
        <div className="project-detail-container">
            <Link to="/" className="back-button">
                <ArrowLeft size={20} />
                Back to portfolio
            </Link>

            <div className="project-detail-header">
                <h1 className="project-detail-title">Pose Detection Game</h1>
                <div className="project-detail-tags">
                    {["React", "HTML", "CSS"].map((tag) => (
                        <span key={tag} className="project-detail-tag">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="project-detail-content">
                <div className="project-detail-image-container">
                    <div className="project-detail-image">
                            <div className="project-detail-image">
                                <img src="portfolio1.png"/>
                            </div>
                    </div>
                </div>

                <div className="project-detail-info">
                    <div className="project-detail-description">
                        <h2>Description</h2>
                        <p>
                            A pose detection game trained on my own data... who will win?
                        </p>

                        <h3>Features</h3>
                        <ul className="project-features-list">
                            <li>Real-time pose detection using machine learning</li>
                            <li>Interactive gameplay based on body movements</li>
                            <li>Custom-trained model for accurate pose recognition</li>
                            <li>Engaging user interface with visual feedback</li>
                        </ul>

                        <h3>Technical Details</h3>
                        <p>
                            This project uses React for the frontend interface and integrates with
                            model data for real-time pose detection. The game tracks certain hand movements.
                        </p>

                        <h3>Development Process</h3>
                        <p>
                            The development involved collecting training data, building and training a
                            custom pose detection model, and creating an engaging game interface that
                            responds to the detected poses.
                        </p>
                    </div>

                    <div className="project-detail-links">

                        <a
                            href="https://github.com/Zoruasy/PosedetectionGame"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-detail-link code-link"
                        >
                            <Github size={20} />
                            Github Code
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PoseDetectionGame
