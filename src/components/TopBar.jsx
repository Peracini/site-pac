const TopBar = ({ page, setPage, openContact }) => {
  const items = [
    { id: 'home', label: 'Início' },
    { id: 'areas', label: 'Áreas' },
    { id: 'team', label: 'Sócios' },
    { id: 'cases', label: 'Casos' },
    { id: 'insights', label: 'Inteligência' },
    { id: 'about', label: 'Escritório' },
  ];
  return (
    <header className="topbar">
      <a className="brand" onClick={() => setPage('home')} style={{ cursor: 'pointer' }}>
        <img src="/logo_white.png" alt="PAC Advogados" />
      </a>
      <nav>
        {items.map(it => (
          <a
            key={it.id}
            className={page === it.id ? 'active' : ''}
            onClick={() => setPage(it.id)}
          >
            {it.label}
          </a>
        ))}
      </nav>
      <button className="cta" onClick={openContact}>Falar com o escritório</button>
    </header>
  );
};

export default TopBar;
