import { asset } from '../../utils/asset';

export default function About() {
  return (
    <section id="sobre" className="section section--about">
      <div className="section__inner">
        <div className="about__layout">
          <img
            src={asset('images/perfil.jpeg')}
            alt="Guilherme Ritz"
            className="about__photo"
          />
          <div className="about__content">
            <p className="section__label">Sobre mim</p>
            <h2 className="section__title">Guilherme Ritz</h2>
            <p className="about__role">Desenvolvedor pleno · Delphi</p>
            <p className="section__text">
              Cursando Sistemas de Informação. No dia a dia, desenvolvo aplicações desktop (VCL) e console em Delphi,
              inclusive com consumo de APIs REST. Em paralelo, estudo ciência de dados e aplico o que aprendo em
              pipelines em Python — transformando dados reais em métricas e planilhas de decisão.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
