import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>
            &copy; {currentYear} Gabriel Fadul | Estatística UnB
          </p>
          <p className="footer-subtitle">
            Os dados dos projetos foram anonimizados para fins de portfólio - Respeito integral à LGPD e contratos vigentes.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

