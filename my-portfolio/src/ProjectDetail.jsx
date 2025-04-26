
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import "./layout/ProjectDetail.css"

const ProjectDetail = ({ projects }) => {
    const { id } = useParams()
    const [project, setProject] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        // Zoek het project op basis van het ID uit de URL
        const projectId = Number.parseInt(id)
        const foundProject = projects.find((p) => p.id === projectId)

        if (foundProject) {
            setTimeout(() => {
                setProject(foundProject)
                setLoading(false)
            }, 300)
        } else {
            setLoading(false)
        }
    }, [id, projects])

    if (loading) {
        return (
            <div className="project-detail-container">
                <div className="project-detail-loading">
                    <div className="loading-spinner"></div>
                    <p>Project laden...</p>
                </div>
            </div>
        )
    }

    if (!project) {
        return (
            <div className="project-detail-container">
                <div className="project-not-found">
                    <h2>Project niet gevonden</h2>
                    <p>Het project dat je zoekt bestaat niet of is verwijderd.</p>
                    <Link to="/" className="back-button">
                        <ArrowLeft size={20} />
                        Terug naar portfolio
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="project-detail-container">
            <Link to="/" className="back-button">
                <ArrowLeft size={20} />
                Terug naar portfolio
            </Link>

            <div className="project-detail-header">
                <h1 className="project-detail-title">{project.title}</h1>
                <div className="project-detail-tags">
                    {project.tags.map((tag) => (
                        <span key={tag} className="project-detail-tag">
              {tag}
            </span>
                    ))}
                </div>
            </div>



            <div className="project-detail-content">
                <div className="project-detail-image-container">
                    <div className="project-detail-image">
                        <div className="project-image-placeholder">
                            <span>{project.title}</span>
                        </div>
                    </div>
                </div>



                <div className="project-detail-info">
                    <div className="project-detail-description">
                        <h2>Projectbeschrijving</h2>
                        <p>{project.description}</p>

                        <h3>Uitdagingen</h3>
                        <p>
                            Bij dit project waren er verschillende uitdagingen die overwonnen moesten worden, zoals het implementeren
                            van complexe functionaliteiten en het zorgen voor een responsief ontwerp dat goed werkt op alle apparaten.
                        </p>

                        <h3>Oplossingen</h3>
                        <p>
                            Door gebruik te maken van moderne technologieën en best practices, is het gelukt om een robuuste en
                            gebruiksvriendelijke applicatie te bouwen die voldoet aan alle vereisten.
                        </p>
                    </div>

                    <div className="project-detail-links">
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-detail-link demo-link"
                        >
                            <ExternalLink size={20} />
                            Live demo bekijken
                        </a>

                        <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-detail-link code-link"
                        >
                            <Github size={20} />
                            Broncode bekijken
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail
