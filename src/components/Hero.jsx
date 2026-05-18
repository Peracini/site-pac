export const Hero = ({ openContact, setPage }) => (
  <section className="hero">
    <div className="inner">
      <div className="eyebrow">BOUTIQUE DE DIREITO EMPRESARIAL · RIBEIRÃO PRETO</div>
      <h1>Estruturamos o seu negócio para crescer <em>sem riscos invisíveis.</em></h1>
      <p className="lede">Direito empresarial pensado junto com o empresário — do primeiro contrato ao M&A, da holding ao campo.</p>
      <div className="actions">
        <button className="btn-primary" onClick={openContact}>Solicitar diagnóstico →</button>
        <button className="btn-ghost-dark" onClick={() => setPage('areas')}>Ver áreas de atuação</button>
      </div>
    </div>
    <div className="scroll-cue">
      <span>↓ Continue</span>
      <span>PAC ADVOGADOS · 2026</span>
    </div>
  </section>
);

export const TrustBar = () => (
  <div className="trust">
    <div className="inner">
      <div className="label">Confiança de empresas brasileiras</div>
      <div className="items">
        <div className="item">+200 CLIENTES ATENDIDOS</div>
        <div className="item">+R$ 23MM NEGOCIADO</div>
        <div className="item">+R$ 34MM PROTEGIDO</div>
        <div className="item">92,46% REDUÇÃO TRABALHISTA</div>
      </div>
    </div>
  </div>
);
