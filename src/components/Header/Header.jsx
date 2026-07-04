import './Header.css';

const NAV_LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#projeto-cotacao', label: 'Cotação USD' },
  { href: '#projeto-middleware', label: 'Middleware' },
  { href: '#projeto-dados', label: 'Ciência de Dados' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="#" className="site-header__brand">
          Guilherme Ritz
        </a>
        <nav className="site-header__nav" aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="site-header__link">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
