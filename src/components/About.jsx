import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './About.css'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Sobre Mim
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              Minha relação com os números começou no colégio, me interessando por problemas de olimpíadas de matemática.
              Hoje, levo essa mesma curiosidade e vontade de resolver desafios para o curso de Estatística na UnB.
              <p> </p>

              <p>Acredito que trabalhar com dados vai muito além de apenas escrever códigos e rodar modelos. Meu objetivo é unir o rigor analítico à visão de negócios,
                traduzindo informações em estratégias claras e impacto real para o mercado.</p>
            </p>
          </motion.div>

          <motion.div
            className="about-highlights"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              className="highlight-card"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,107,53,0.3)", borderColor: "var(--accent-color)" }}
              transition={{ duration: 0.2 }}
              style={{ willChange: 'transform, opacity' }}
            >
              <h3>Formação & Idiomas</h3>
              <ul>
                <li><strong>Estatística</strong> | Universidade de Brasília (UnB)</li>
                <li><strong>Inglês</strong> (Avançado) | <strong>Espanhol</strong> (Intermediário)</li>
              </ul>
            </motion.div>

            <motion.div
              className="highlight-card"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,107,53,0.3)", borderColor: "var(--accent-color)" }}
              transition={{ duration: 0.2 }}
              style={{ willChange: 'transform, opacity' }}
            >
              <h3>Experiência & Premiações</h3>
              <ul>
                <li><strong>Diretor de Negócios</strong> | ESTAT Consultoria (2025)</li>
                <li>Medalhista | <strong>Olimpíada Internacional de Matemática Sem Fronteiras</strong> & <strong>Canguru</strong></li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
