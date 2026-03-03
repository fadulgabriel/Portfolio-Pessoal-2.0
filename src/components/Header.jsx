import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaFileDownload } from 'react-icons/fa' 
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { id: 'about', label: 'Sobre' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'projects', label: 'Projetos' },
    { id: 'contact', label: 'Contato' },
  ]

  return (
    <motion.header
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="header-content">
          <div className="logo" onClick={() => scrollToSection('home')}>
            <span>Gabriel Fadul</span>
          </div>

          <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                }}
                className="nav-link"
              >
                {item.label}
              </a>
            ))}

            {/* Link para o Google Drive limpo e usando apenas as classes do CSS */}
            <a
              href="https://drive.google.com/file/d/1GT2ilPspTp3k6yTrA1GaZPHgtGsMUPMP/view?usp=drive_link"
              target="_blank"             
              rel="noopener noreferrer"   
              className="nav-link cv-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaFileDownload size={14} />
              <span>CV</span>
            </a>
          </nav>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={isMobileMenuOpen ? 'open' : ''}></span>
            <span className={isMobileMenuOpen ? 'open' : ''}></span>
            <span className={isMobileMenuOpen ? 'open' : ''}></span>
          </button>
        </div>
      </div>
    </motion.header>
  )
}

export default Header