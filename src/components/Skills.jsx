import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { skills } from '../data/skills'
// Importando os ícones minimalistas (Feather Icons)
import { FiActivity, FiPieChart, FiTerminal } from 'react-icons/fi'
import './Skills.css'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    // strokeWidth={1.5} deixa a linha do ícone mais fina e elegante
    { title: 'Estatística & Machine Learning', key: 'estatistica', icon: <FiActivity size={28} strokeWidth={1.2} /> },
    { title: 'Visualização de Dados', key: 'data_bi', icon: <FiPieChart size={28} strokeWidth={1.2} /> },
    { title: 'Desenvolvimento & Ferramentas', key: 'ferramentas', icon: <FiTerminal size={28} strokeWidth={1.2} /> },
  ]

  return (
    <section id="skills" className="skills section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Habilidades Técnicas
        </motion.h2>

        <div className="skills-grid-three">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.key}
              className="skill-card-main"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 30px rgba(255,107,53,0.4)",
                borderColor: "var(--accent-color)"
              }}
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3
                  className="category-title"
                  style={{ wordBreak: 'break-word', letterSpacing: '-0.5px', fontSize: '1.1rem' }}
                >
                  {category.title}
                </h3>
              </div>
              <div className="skills-tag-container">
                {skills[category.key].map((tag, tagIndex) => (
                  <span key={tagIndex} className="skill-tag-label">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills