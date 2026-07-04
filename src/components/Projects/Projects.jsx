import { ExternalLink } from 'lucide-react';
import { asset } from '../../utils/asset';

export default function Projects() {
  return (
    <section id="projetos" className="section section--projects">
      <div className="section__inner">
        <p className="section__label">Projetos</p>
        <h2 className="section__title">O que eu construí</h2>
        <p className="section__text section__text--intro">
          Aplicações em Delphi do meu dia a dia e um projeto de ciência de dados do que venho estudando.
        </p>

        {/* 1. Cotação USD — Delphi VCL */}
        <article id="projeto-cotacao" className="project-card">
          <div className="project-card__media">
            <img src={asset('images/PTAX.png')} alt="Cotação Dólar — app Delphi VCL" />
          </div>
          <div className="project-card__body">
            <p className="section__label">Delphi · VCL</p>
            <h3 className="project-card__title">Cotação Dólar — PTAX do Banco Central</h3>
            <p className="project-card__meta">
              Desktop · REST.Client · TClientDataSet · TDBGrid · API Olinda/BCB
            </p>
            <p className="section__text">
              Aplicação desktop em Delphi (VCL) para consultar cotações do dólar (USD) em um intervalo de datas,
              consumindo a API oficial PTAX do Banco Central (Olinda). Os resultados aparecem em um{' '}
              <code>TDBGrid</code> com data da cotação, taxas de compra e venda, paridades e tipo de boletim.
            </p>

            <p className="project-card__subtitle">Funcionalidades</p>
            <ul className="skill-list">
              <li>Consulta por data inicial e final (validação: início não pode ser posterior ao fim)</li>
              <li>
                Integração com <code>CotacaoMoedaPeriodo</code> (<code>@moeda=USD</code>, datas em{' '}
                <code>mm-dd-yyyy</code>, resposta JSON)
              </li>
              <li>Grid com data, compra, venda, paridade compra/venda e tipo de boletim</li>
              <li>Mensagem de erro na interface em falha de rede ou resposta inválida</li>
            </ul>

            <p className="project-card__subtitle">Stack e estrutura</p>
            <ul className="skill-list">
              <li>Delphi (Object Pascal) · VCL · REST.Client</li>
              <li>
                <code>Cotacao.dpr</code> — entrada · <code>Cotacao.pas</code> — form, REST e parse JSON ·{' '}
                <code>Cotacao.dfm</code> — layout e componentes
              </li>
            </ul>

            <p className="project-card__subtitle">Como executar</p>
            <p className="section__text section__text--sm">
              Abrir <code>Cotacao.dproj</code> no Delphi, build e Run, informar as datas e clicar em{' '}
              <strong>Ativar</strong>. Requer internet.
            </p>

            <a
              href="https://github.com/guilhermeritzz/usd-exchange"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Ver no GitHub
              <ExternalLink size={16} />
            </a>
          </div>
        </article>

        {/* 2. Integration Middleware — Delphi console */}
        <article id="projeto-middleware" className="project-card project-card--reverse">
          <div className="project-card__media">
            <img
              src={asset('images/middleware.png')}
              alt="Middleware de integração em Delphi"
            />
          </div>
          <div className="project-card__body">
            <p className="section__label">Delphi · Console</p>
            <h3 className="project-card__title">Integration Middleware</h3>
            <p className="project-card__meta">
              Fila thread-safe · workers · retry · métricas · cliente mock configurável
            </p>
            <p className="section__text">
              Aplicação console em Delphi que demonstra um middleware de integração: fila protegida por seção
              crítica, workers concorrentes, política de retry, métricas thread-safe e cliente mock com latência e
              taxa de sucesso configuráveis — simulando o envio de itens (por exemplo, pedidos) a um endpoint
              externo, com falhas controladas e reprocessamento automático.
            </p>

            <p className="project-card__subtitle">Como funciona</p>
            <ul className="skill-list">
              <li>
                <code>TIntegrationManager</code> carrega o <code>middleware.ini</code> e enfileira os itens
              </li>
              <li>
                Vários <code>TIntegrationWorker</code> (threads) consomem a fila de forma concorrente
              </li>
              <li>
                Cada worker envia via <code>TMockIntegrationClient</code>; em falha, a{' '}
                <code>TIntegrationRetryPolicy</code> decide reenfileirar ou marcar falha definitiva
              </li>
              <li>Ao final, o console exibe sucesso, falha, retries e tempo decorrido</li>
            </ul>

            <p className="project-card__subtitle">Componentes principais</p>
            <ul className="skill-list">
              <li>
                <code>Integration.Queue</code> — fila FIFO com <code>TCriticalSection</code>
              </li>
              <li>
                <code>Integration.Worker</code> / <code>Integration.RetryPolicy</code> — consumo e reprocessamento
              </li>
              <li>
                <code>Integration.Metrics</code> / <code>Integration.Logger</code> — contadores e log thread-safe
              </li>
              <li>
                <code>Integration.Settings</code> — leitura e validação do INI (workers, retries, success rate)
              </li>
            </ul>

            <p className="project-card__subtitle">Como executar</p>
            <p className="section__text section__text--sm">
              Abrir <code>MiddlewareDemo.dproj</code>, compilar e rodar (F9). O executável usa{' '}
              <code>middleware.ini</code> ao lado do <code>.exe</code> (criado com defaults se não existir). Demo
              educacional — sem HTTP real nem persistência de fila.
            </p>

            <a
              href="https://github.com/guilhermeritzz/integration-middleware-delphi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Ver no GitHub
              <ExternalLink size={16} />
            </a>
          </div>
        </article>

        {/* 3. Ciência de Dados */}
        <article id="projeto-dados" className="project-card">
          <div className="project-card__media">
            <img
              src={asset('images/valuation.png')}
              alt="Identificação de oportunidades de compra imobiliária"
            />
          </div>
          <div className="project-card__body">
            <p className="section__label">Ciência de Dados</p>
            <h3 className="project-card__title">
              Identificação de Oportunidades de Compra Imobiliária
            </h3>
            <p className="project-card__meta">
              King County, EUA · 21.613 transações (2014–2015) · pipeline em Python
            </p>
            <p className="section__text">
              Projeto de ciência de dados para identificar oportunidades de compra imobiliária e projetar receita
              anual. Usa dados reais de King County para estimar quantos imóveis/ano se encaixam em critérios
              objetivos de compra e qual a receita anual projetada com base em margem média e ROI histórico de
              reformas.
            </p>

            <div className="project-metrics">
              <div className="project-metric">
                <p className="project-metric__value">~264</p>
                <p className="project-metric__label">X — imóveis/ano no cenário base</p>
              </div>
              <div className="project-metric">
                <p className="project-metric__value">~US$ 84M</p>
                <p className="project-metric__label">Y — receita anual projetada</p>
              </div>
            </div>

            <p className="project-card__subtitle">O que entrega</p>
            <ul className="skill-list">
              <li>
                <strong>X</strong> — quantidade anual de imóveis que passam nos filtros (preço e preço/m² abaixo da
                mediana, grade ≥ 7, quartos ≥ 3, banheiros ≥ 2, área ≥ mediana, Z-Score ≤ −0,5 por CEP)
              </li>
              <li>
                <strong>Y = X × M</strong> — receita anual projetada (margem líquida média por imóvel pós-reforma)
              </li>
              <li>
                Planilha Excel com IDs, preço de compra, venda estimado e lucro por unidade para o time de compras
              </li>
            </ul>

            <p className="project-card__subtitle">Pipeline e stack</p>
            <ul className="skill-list">
              <li>
                Ingestão → limpeza → features (<code>price_per_sqft</code>, Z-Score por CEP) → oportunidades →
                métricas e planilha
              </li>
              <li>Python · pandas, numpy, matplotlib, seaborn, openpyxl, Jupyter</li>
              <li>
                <code>src/</code> pipeline · <code>notebooks/</code> EDA e simulação ·{' '}
                <code>gerar_planilha_compras.bat</code> para gerar o Excel no Windows
              </li>
            </ul>

            <a
              href="https://github.com/guilhermeritzz/valuation-intelligence"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
            >
              Ver no GitHub
              <ExternalLink size={16} />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
