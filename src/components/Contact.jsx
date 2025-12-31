import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
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

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/fadulgabriel',
      color: '#0077b5',
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/fadulgabriel',
      color: '#333',
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:fadulgabriel@gmail.com',
      color: '#ea4335',
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      url: 'https://wa.me/5561991599479',
      color: '#25d366',
    },
  ]

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
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="contact-description">
            Estou sempre aberto a novas oportunidades e projetos interessantes.
            Sinta-se à vontade para entrar em contato!
          </p>

          <div className="social-links">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="social-icon" />
                <span className="social-name">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

