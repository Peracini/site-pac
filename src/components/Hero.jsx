export const Hero = ({ openContact, setPage }) => (
  <section className="hero">
    <div className="inner">
      <div className="eyebrow">BOUTIQUE DE DIREITO EMPRESARIAL · RIBEIRÃO PRETO</div>
      <h1>Estruturamos o seu negócio para crescer <em>sem riscos invisíveis.</em></h1>
      <p className="lede">Direito empresarial pensado em conjunto com o empresário — do M&A ao primeiro contrato de franquia. Pensamos junto, executamos com método.</p>
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
        <div className="item">+ 80 OPERAÇÕES</div>
        <div className="item">12 REDES DE FRANQUIA</div>
        <div className="item">R$ 480M EM M&A</div>
        <div className="item">96% DE CLOSINGS NO PRAZO</div>
      </div>
    </div>
  </div>
);
