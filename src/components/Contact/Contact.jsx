import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <footer id="contato" className="section section--contact">
      <div className="section__inner section__inner--center">
        <p className="section__label">Contato</p>
        <h2 className="section__title">Vamos conversar</h2>
        <p className="section__text section__text--center">
          Desenvolvedor pleno em Delphi, estudando ciência de dados. Se quiser falar sobre um projeto ou uma
          oportunidade, é só chamar.
        </p>
        <div className="contact__links">
          <a href="mailto:guilhermeritzpessoal@gmail.com" className="btn btn--secondary">
            <Mail size={16} />
            E-mail
          </a>
          <a
            href="https://www.linkedin.com/in/guilherme-ritz-demarchi/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--secondary"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href="https://github.com/guilhermeritzz"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--secondary"
          >
            <Github size={16} />
            GitHub
          </a>
        </div>
        <p className="contact__copy">© 2026 Guilherme Ritz</p>
      </div>
    </footer>
  );
}
