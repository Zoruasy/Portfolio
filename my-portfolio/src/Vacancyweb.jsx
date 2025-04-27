"use client"
import { Link } from "react-router-dom"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import "./layout/ProjectDetail.css"
import React from "react";

const LaravelVacancy = () => {
    return (
        <div className="project-detail-container">
            <Link to="/" className="back-button">
                <ArrowLeft size={20} />
                Back to portfolio
            </Link>

            <div className="project-detail-header">
                <h1 className="project-detail-title">Laravel Vacancy Website</h1>
                <div className="project-detail-tags">
                    {["Laravel", "HTML", "CSS"].map((tag) => (
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
                            <img src="/public/portfolio3.jpg"/>
                        </div>
                    </div>
                </div>

                <div className="project-detail-info">
                    <div className="project-detail-description">
                        <h2>Description</h2>
                        <p>A vacancy website with a database, interface and user authentication made with other students.</p>

                        <h3>Features</h3>
                        <ul className="project-features-list">
                            <li>User authentication and role-based access control</li>
                            <li>Job posting and application system</li>
                            <li>Company & user profile</li>
                            <li>Search and filter functionality for job listings</li>
                            <li>Responsive design for all devices</li>
                        </ul>

                        <h3>Technical Details</h3>
                        <p>
                            This project is built with Laravel, a powerful PHP framework that provides robust tools for web
                            application development.
                        </p>

                        <h3>Collaboration</h3>
                        <p>
                            This was a collaborative project developed with fellow students. We used Git for version control, had regular stand-ups and task assignments. My primary
                            responsibilities included the authentication system and parts of the frontend design.
                        </p>
                    </div>

                    <div className="project-detail-links">
                        <a
                            href="https://github.com/justalana/tle1-ontwerpen"
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

export default LaravelVacancy
