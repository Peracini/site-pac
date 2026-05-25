import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const TopBar = ({ openContact }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const items = [
    { to: '/',       label: 'Início',       end: true },
    { to: '/areas',  label: 'Áreas' },
    { to: '/equipe', label: 'Sócios' },
    { to: '/blog',   label: 'Inteligência' },
    { to: '/sobre',  label: 'Escritório' },
  ];

  const close = () => setMenuOpen(false);

  const handleContact = () => { openContact(); close(); };

  return (
    <header className={`topbar${menuOpen ? ' menu-open' : ''}`}>
      <a className="brand" onClick={() => { navigate('/'); close(); }} style={{ cursor: 'pointer' }}>
        <img src="/logo_white.png" alt="PAC Advogados" />
      </a>

      <nav className={menuOpen ? 'open' : ''}>
        {items.map(it => (
          <NavLink
            key={it.to}
            to={it.to}
            end={it.end}
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={close}
          >
            {it.label}
          </NavLink>
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
