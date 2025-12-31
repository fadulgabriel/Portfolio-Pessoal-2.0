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
            Minha jornada com os números começou cedo, movida pela alta curiosidade de entender a matemática e conseguir usá-la no mundo real. 
            Sempre busquei me desafiar e superar meus limites participando de olimpíadas de matemática e física, onde aprendi a encarar problemas complexos com criatividade. 
            Essa paixão evoluiu para o curso de Estatística na Universidade de Brasília, 
            onde hoje transformo teorias em impacto real para o mercado.
            </p>
            <p>
            Durante minha formação escolar, entendi que a técnica não caminha sozinha. 
            Participei de simulações da ONU e projetos que fortaleceram minhas soft skills e minha capacidade de liderança. 
            Ali, aprendi que o trabalho em equipe e uma comunicação clara são tão vitais quanto o conhecimento teórico. 
            </p>
            <p>
            Ser um analista de dados vai muito além de rodar um código ou entregar um número isolado. 
            O verdadeiro valor surge quando o dado é traduzido em estratégia e lógica de negócio. 
            Meu compromisso é entregar a visão completa: unir o rigor científico à inteligência de mercado para gerar respostas que não apenas respondam perguntas, mas que impulsionem mudanças significativas e tragam resultados reais.
            </p>
          </motion.div>

          <motion.div
            className="about-highlights"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="highlight-card">
              <h3>Formação & Idiomas</h3>
              <ul>
                <li>Graduando em Estatística (UnB) – 6º Semestre</li>
                <li>Inglês fluente</li>
                <li>Espanhol avançado</li>
              </ul>
            </div>
            
            <div className="highlight-card">
              <h3>Competências Interpessoais</h3>
              <ul>
                <li>Liderança e Trabalho em Equipe</li>
                <li>Comunicação Assertiva</li>
                <li>Pensamento Analítico</li>
              </ul>
            </div>

            <div className="highlight-card">
              <h3>Reconhecimentos Acadêmicos</h3>
              <ul>
                <li>3º lugar - Olimpíada Internacional de Matemática Sem Fronteiras (OIMSF)</li>
                <li>3º lugar - Simulação da Assembleia Geral da ONU (SEBMUN)</li>
                <li>Honra ao Mérito - Olimpíada de Matemática Canguru (OBM)</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
