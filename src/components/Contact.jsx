import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
} from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/mkovljgq', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSuccessMessage('Mensagem enviada com sucesso!');
        e.target.reset();
      } else {
        setErrorMessage('Ocorreu um erro ao enviar sua mensagem. Tente novamente.');
      }
    } catch (error) {
      setErrorMessage('Ocorreu um erro de rede. Tente novamente mais tarde.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="contact section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Entre em Contato
        </motion.h2>

        <motion.div
          className="contact-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="contact-info">
            <h3>Qual será nosso próximo desafio?</h3>
            <p>
              Me mande os detalhes do seu projeto no formulário abaixo, ou conecte-se comigo nas redes para falarmos sobre tecnologia e mercado.
            </p>
            <div className="social-links-minimal">
              <a href="https://linkedin.com/in/fadulgabriel" target="_blank" rel="noreferrer" title="LinkedIn"><FaLinkedin /></a>
              <a href="https://github.com/fadulgabriel" target="_blank" rel="noreferrer" title="GitHub"><FaGithub /></a>
              <a href="mailto:fadulgabriel@gmail.com" target="_blank" rel="noreferrer" title="Email"><FaEnvelope /></a>
              <a href="https://wa.me/5561991599479" target="_blank" rel="noreferrer" title="WhatsApp"><FaWhatsapp /></a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nome <span>*</span></label>
              <input type="text" id="name" name="name" required placeholder="Seu nome completo" />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Número de Telefone <span>*</span></label>
              <input type="tel" id="phone" name="phone" required placeholder="(XX) XXXXX-XXXX" />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail </label>
              <input type="email" id="email" name="email" placeholder="seu.email@exemplo.com" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Descrição do Projeto <span>*</span></label>
              <textarea id="message" name="message" rows="5" required placeholder="Conte-me um pouco sobre sua ideia..."></textarea>
            </div>

            {successMessage && <div className="success-message" style={{ color: 'green', marginBottom: '15px' }}>{successMessage}</div>}
            {errorMessage && <div className="error-message" style={{ color: 'red', marginBottom: '15px' }}>{errorMessage}</div>}

            <motion.button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
              style={{
                opacity: isSubmitting ? 0.7 : 1,
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                willChange: 'transform, opacity'
              }}
              whileHover={!isSubmitting ? { scale: 1.05, boxShadow: "0px 0px 15px rgba(255,107,53,0.5)" } : {}}
              whileTap={!isSubmitting ? { scale: 0.95 } : {}}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

