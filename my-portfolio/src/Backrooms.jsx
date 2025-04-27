"use client"
import { Link } from "react-router-dom"
import { ArrowLeft, ExternalLink } from "lucide-react"
import "./layout/ProjectDetail.css"
import React from "react";

const UEBackrooms = () => {
    return (
        <div className="project-detail-container">
            <Link to="/" className="back-button">
                <ArrowLeft size={20} />
                Back to portfolio
            </Link>

            <div className="project-detail-header">
                <h1 className="project-detail-title">UE Backrooms Game</h1>
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
                            <img src="public/backroom.gif"/>
                        </div>

                    </div>
                </div>


                <div className="project-detail-info">
                    <div className="project-detail-description">
                        <h2>Description</h2>
                        <p>A Horror-backroom game made in Unreal Engine.</p>

                        <h3>Features</h3>
                        <ul className="project-features-list">
                            <li>Horror gameplay inspired by the backrooms concept</li>
                            <li>AI-driven entities that hunt the player</li>
                            <li>You got to find the key to open doors, picking up posters</li>
                            <li>Jumpscare</li>
                        </ul>

                        <h3>Technical Details</h3>
                        <p>
                            This project was developed using Unreal Engine.
                        </p>

                        <h3>Game Design</h3>
                        <p>
                            Players must navigate through seemingly endless rooms while avoiding entities and solving puzzles to
                            progress.
                        </p>

                        <h3>Development Process</h3>
                        <p>
                            The development process involved extensive research into horror game mechanics. I used UE FAB, implemented AI behavior systems for
                            the doll and the posters. Press the button below to see the whole project video.
                        </p>
                    </div>

                    <div className="project-detail-links">
                        <a href="https://youtu.be/1tsdaUhbhr8" target="_blank" rel="noopener noreferrer" className="project-detail-link demo-link">
                            <ExternalLink size={20} />
                            Demo Video
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UEBackrooms
