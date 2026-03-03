import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects } from '../data/projects'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import './Projects.css'

const Projects = () => {
  const ref = useRef(null)
  const scrollRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [filter, setFilter] = useState('Todos')
  
  // State para guardar quais os cartões que estão visíveis e acender as bolinhas
  const [visibleIndices, setVisibleIndices] = useState([0, 1, 2])

  const projectTypes = ['Todos', ...new Set(projects.map((p) => p.type))]

  const filteredProjects =
    filter === 'Todos'
      ? projects
      : projects.filter((project) => project.type === filter)

  // Função para as setas do carrossel
  const scroll = (direction) => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector('.project-card')
      if (card) {
        const cardWidth = card.offsetWidth
        const gap = 32 // O espaço (gap) definido no seu CSS
        const scrollAmount = cardWidth + gap

        const { scrollLeft } = scrollRef.current
        const scrollTo = direction === 'left' 
          ? scrollLeft - scrollAmount 
          : scrollLeft + scrollAmount
        
        scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
      }
    }
  }

  // Função para pular directamente para o projecto ao clicar na bolinha
  const scrollToCard = (index) => {
    if (scrollRef.current) {
      const cards = scrollRef.current.querySelectorAll('.project-card')
      if (cards[index]) {
        const scrollLeft = cards[index].offsetLeft - scrollRef.current.offsetLeft
        scrollRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' })
      }
    }
  }

  // Função espiã para saber quais os projectos que estão na tela
  const handleScroll = () => {
    if (!scrollRef.current) return
    const cards = scrollRef.current.querySelectorAll('.project-card')
    const containerRect = scrollRef.current.getBoundingClientRect()
    const newVisible = []

    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect()
      if (rect.left >= containerRect.left - 50 && rect.right <= containerRect.right + 50) {
        newVisible.push(index)
      }
    })

    setVisibleIndices((prev) => {
      if (prev.join(',') === newVisible.join(',')) return prev
      return newVisible
    })
  }

  useEffect(() => {
    handleScroll()
    window.addEventListener('resize', handleScroll)
    return () => window.removeEventListener('resize', handleScroll)
  }, [filteredProjects])

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
              onClick={() => {
                setFilter(type)
                if(scrollRef.current) scrollRef.current.scrollTo({left: 0, behavior: 'smooth'})
              }}
            >
              {type}
            </button>
          ))}
        </motion.div>

        <div className="carousel-wrapper">
          <button className="nav-btn prev" onClick={() => scroll('left')} aria-label="Anterior">
            <FiChevronLeft size={30} strokeWidth={1.5} />
          </button>

          <div className="projects-slider" ref={scrollRef} onScroll={handleScroll}>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0.2, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ 
                  root: scrollRef, 
                  amount: 0.7, 
                  once: false 
                }}
                transition={{ duration: 0.4 }}
              >
                <div className="project-image-container">
                  <img
                    src={project.image || '/api/placeholder/400/220'}
                    alt={project.title}
                    className="project-image"
                  />
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <span className="project-type">{project.type}</span>
                    <div className="project-links">
                      
                      {/* --- BOTÃO DO GITHUB COM A CLASSE EXACTA --- */}
                      {project.githubUrl && project.githubUrl !== '#' && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="project-link github"
                        >
                          <FaGithub />
                        </a>
                      )}
                      
                      {/* --- BOTÃO DE LINK EXTERNO --- */}
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="project-link"
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
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button className="nav-btn next" onClick={() => scroll('right')} aria-label="Próximo">
            <FiChevronRight size={30} strokeWidth={1.5} />
          </button>
        </div>

        {/* --- BOLINHAS DE PAGINAÇÃO --- */}
        <div className="carousel-dots">
          {filteredProjects.map((_, index) => (
            <button
              key={index}
              className={`dot ${visibleIndices.includes(index) ? 'active' : ''}`}
              onClick={() => scrollToCard(index)}
              aria-label={`Ir para projeto ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects