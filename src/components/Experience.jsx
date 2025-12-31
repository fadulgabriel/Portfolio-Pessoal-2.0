import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { experiences } from '../data/experience'
import { FaBriefcase, FaUsers, FaHandshake } from 'react-icons/fa' 
import './Experience.css'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Icones da timeline
  const getIcon = (title) => {
    if (title.includes('Diretor')) return <FaBriefcase />   // Maleta
    if (title.includes('Coordenador')) return <FaUsers />   // Time/Pessoas
    if (title.includes('Assessor')) return <FaHandshake />  // Negociação
    return <FaBriefcase />
  }

  return (
    <section id="experience" className="experience section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Jornada Profissional
        </motion.h2>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="experience-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="experience-icon">
                {getIcon(exp.title)}
              </div>

              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <span className="experience-company">{exp.company}</span>
                </div>
                <span className="experience-period">{exp.period}</span>
                <p className="experience-description">{exp.description}</p>
                <ul className="experience-highlights">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience