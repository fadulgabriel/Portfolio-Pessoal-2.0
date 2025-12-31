import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { projects } from '../data/projects'
import { FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [filter, setFilter] = useState('Todos')

  // Gera os filtros automaticamente baseado nos seus projetos
  const projectTypes = ['Todos', ...new Set(projects.map((p) => p.type))]

  const filteredProjects =
    filter === 'Todos'
      ? projects
      : projects.filter((project) => project.type === filter)

  return (
    <section id="projects" className="projects section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Projetos Realizados
        </motion.h2>

        {/* Filtros */}
        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {projectTypes.map((type) => (
            <button
              key={type}
              className={`filter-btn ${filter === type ? 'active' : ''}`}
              onClick={() => setFilter(type)}
            >
              {type}
            </button>
          ))}
        </motion.div>

        {/* Grid de Cards */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* 1. IMAGEM (Topo do Card) */}
              <div className="project-image-container">
                {/* Se não tiver imagem, usa um gradiente padrão ou imagem genérica */}
                <img 
                  src={project.image || '/api/placeholder/400/220'} 
                  alt={project.title} 
                  className="project-image" 
                />
              </div>

              {/* 2. CONTEÚDO (Texto Embaixo) */}
              <div className="project-content">
                <div className="project-header">
                  <span className="project-type">{project.type}</span>
                  <div className="project-links">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        title="Ver Projeto"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects