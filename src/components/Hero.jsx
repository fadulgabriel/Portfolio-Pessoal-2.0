import { motion } from 'framer-motion'
import { FaArrowDown } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-wrapper">
            <div className="hero-text-section">
              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Olá, sou o{' '}
                <span className="highlight">Gabriel Fadul</span>
              </motion.h1>

              <motion.p
                className="hero-subtitle"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Estatístico e Cientista de Dados
              </motion.p>

              <motion.div
                className="hero-buttons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <button
                  className="btn btn-primary"
                  onClick={() => scrollToSection('projects')}
                >
                  Ver Projetos
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => scrollToSection('contact')}
                >
                  Entre em Contato
                </button>
              </motion.div>
            </div>

            <motion.div
              className="hero-image-container"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <img 
                src="/foto-perfil2.png" // altera a foto de capa
                alt="Gabriel Fadul"
                className="hero-image"
              />
            </motion.div>
          </div>

          <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            onClick={() => scrollToSection('about')}
          >
            <FaArrowDown />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

