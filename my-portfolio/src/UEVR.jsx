"use client"
import { Link } from "react-router-dom"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import "./layout/ProjectDetail.css"
import React from "react";

const VRBackrooms = () => {
    return (
        <div className="project-detail-container">
            <Link to="/" className="back-button">
                <ArrowLeft size={20} />
                Back to portfolio
            </Link>

            <div className="project-detail-header">
                <h1 className="project-detail-title">VR Backrooms Game</h1>
                <div className="project-detail-tags">
                    {["Unreal Engine"].map((tag) => (
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
                            <img src="src/img/portfolio4.png"/>
                        </div>
                    </div>
                </div>

                <div className="project-detail-info">
                    <div className="project-detail-description">
                        <h2>Description</h2>
                        <p>VR backrooms-like game, made in Unreal Engine with other students.</p>

                        <h3>Features</h3>
                        <ul className="project-features-list">
                            <li>VR experience of the "backrooms" concept</li>
                            <li>Endless maze environments</li>
                            <li>Sound design and lighting</li>
                            <li>AI chasing you</li>
                        </ul>

                        <h3>Technical Details</h3>
                        <p>
                            This project was developed in Unreal Engine.
                        </p>

                        <h3>Development Challenges</h3>
                        <p>
                            Creating an immersive VR experience presented unique challenges, particularly making a VR game in general.
                        </p>

                        <h3>Team Collaboration</h3>
                        <p>
                            This project was developed collaboratively with other students, with certain tasks divided. My
                            contributions was focused on environment design, VR interaction systems, making a jumpscare video and creating interactive posters.

                        </p>
                    </div>

                    <div className="project-detail-links">
                        <a href="https://www.youtube.com/watch?v=yqphdtbcXGI" target="_blank" rel="noopener noreferrer" className="project-detail-link demo-link">
                            <ExternalLink size={20} />
                            Demo Video
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VRBackrooms
