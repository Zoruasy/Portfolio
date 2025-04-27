
import React from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Github, ExternalLink } from 'lucide-react'
import "./layout/ProjectDetail.css"

const Pokemon = () => {
    return (
        <div className="project-detail-container">
            <Link to="/" className="back-button">
                <ArrowLeft size={20} />
                Back to portfolio
            </Link>

            <div className="project-detail-header">
                <h1 className="project-detail-title">Pokémon Database Website</h1>
                <div className="project-detail-tags">
                    {["React", "Vite", "Tailwind"].map((tag) => (
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
                            <img src="public/portfolio2.jpg"/>
                        </div>
                    </div>
                </div>

                <div className="project-detail-info">
                    <div className="project-detail-description">
                        <h2>Description</h2>
                        <p>
                            A website where you can add, edit, and delete Pokémon from a database server. :)
                        </p>

                        <h3>Features</h3>
                        <ul className="project-features-list">
                            <li>Full CRUD functionality for Pokémon data created with a database and live server</li>
                            <li>Responsive design with Tailwind CSS</li>
                            <li>Search and filter functionality</li>
                            <li>User-friendly interface for managing your Pokémon collection</li>
                        </ul>

                        <h3>Technical Details</h3>
                        <p>
                            This project is built with React and Tailwind CSS,
                            featuring a RESTful API that communicates with a database to store Pokémon data.
                        </p>
                    </div>

                    <div className="project-detail-links">
                        <a
                            href="https://github.com/Zoruasy/Frontend-REACT"
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

export default Pokemon
