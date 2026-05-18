import { useState } from 'react';

const TopBar = ({ page, setPage, openContact }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const items = [
    { id: 'home', label: 'Início' },
    { id: 'areas', label: 'Áreas' },
    { id: 'team', label: 'Sócios' },
    { id: 'cases', label: 'Casos' },
    { id: 'insights', label: 'Inteligência' },
    { id: 'about', label: 'Escritório' },
  ];

  const navigate = (id) => {
    setPage(id);
    setMenuOpen(false);
  };

  const handleContact = () => {
    openContact();
    setMenuOpen(false);
  };

  return (
    <header className={`topbar${menuOpen ? ' menu-open' : ''}`}>
      <a className="brand" onClick={() => navigate('home')}>
        <img src="/logo_white.png" alt="PAC Advogados" />
      </a>

      <nav className={menuOpen ? 'open' : ''}>
        {items.map(it => (
          <a
            key={it.id}
            className={page === it.id ? 'active' : ''}
            onClick={() => navigate(it.id)}
          >
            {it.label}
          </a>
        ))}
        <button className="cta mobile-cta" onClick={handleContact}>
          Falar com o escritório
        </button>
      </nav>

      <button className="cta desktop-cta" onClick={openContact}>
        Falar com o escritório
      </button>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(v => !v)}
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuOpen}
      >
        <span /><span /><span />
      </button>
    </header>
  );
};

export default TopBar;
