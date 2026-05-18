export const Stats = () => (
  <section className="section dark">
    <div className="inner">
      <div className="eyebrow">RESULTADOS · 2024–2025</div>
      <h2>Operações conduzidas no último ciclo.</h2>
      <p className="lede">Indicadores de execução do escritório, divulgados anualmente em uso interno e propostas comerciais.</p>
      <div className="stats">
        <div className="stat">
          <div className="n">R$ 480M</div>
          <div className="sep"></div>
          <div className="l">em valor de operações de M&A assessoradas em 2025</div>
        </div>
        <div className="stat">
          <div className="n">12</div>
          <div className="sep"></div>
          <div className="l">redes de franquia estruturadas e expandidas</div>
        </div>
        <div className="stat">
          <div className="n">96%</div>
          <div className="sep"></div>
          <div className="l">dos closings concluídos no prazo originalmente projetado</div>
        </div>
      </div>
    </div>
  </section>
);

export const PEOPLE = [
  {
    initials: 'FP', name: 'Fernando Peracini', role: 'Sócio fundador · M&A · Estruturação',
    bio: 'Conduziu mais de 80 operações de M&A e estruturação societária. Especialista em transações de médio porte com componente familiar.',
  },
  {
    initials: 'FA', name: 'Fernanda Alves', role: 'Sócia fundadora · Contratos · Franquia',
    bio: 'Lidera a prática de franquias do escritório. Estruturou redes em mais de 12 estados, com expansão internacional para Portugal e EUA.',
  },
  {
    initials: 'PC', name: 'Paula Cottas', role: 'Sócia fundadora · Societário · Holding',
    bio: 'Foco em proteção patrimonial e holding familiar. Reorganizou estruturas familiares com blindagem sucessória e ganhos tributários estruturais.',
  },
  {
    initials: 'MJ', name: 'Maria Júlia Barradas Malardo', role: 'Advogada · Contratos · Compliance',
    bio: 'Atua na frente de contratos e compliance contratual. Conduz a biblioteca proprietária de templates do escritório.',
  },
];

export const People = () => (
  <section className="section">
    <div className="inner">
      <div className="eyebrow">SÓCIOS &amp; EQUIPE</div>
      <h2>Quem conduz o seu caso.</h2>
      <p className="lede">Cada operação tem um sócio dedicado. Sem terceirização, sem repasse para estagiário — o nome que assina a proposta é o nome que conduz a operação.</p>
      <div className="people">
        {PEOPLE.map(p => (
          <div key={p.initials} className="person">
            <div className="av">{p.initials}</div>
            <h3>{p.name}</h3>
            <div className="role">{p.role}</div>
            <div className="bio">{p.bio}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Process = ({ openContact }) => (
  <section className="section navy">
    <div className="inner">
      <div className="eyebrow">METODOLOGIA</div>
      <h2>Como conduzimos uma operação.</h2>
      <p className="lede">Quatro etapas, um sócio responsável, um plano de execução com prazo. O empresário sempre sabe onde a operação está.</p>
      <div className="steps">
        <div className="step"><span className="num">01</span><h3>Diagnóstico</h3><p>Sessão estratégica com sócios. Mapeamos a operação alvo, riscos e janela de execução.</p></div>
        <div className="step"><span className="num">02</span><h3>Estrutura</h3><p>Desenhamos a operação societária e contratual. Definimos timeline e responsabilidades.</p></div>
        <div className="step"><span className="num">03</span><h3>Execução</h3><p>Due diligence, negociação e contratos definitivos sob coordenação dedicada.</p></div>
        <div className="step"><span className="num">04</span><h3>Pós-closing</h3><p>Implementação dos compromissos, reporte e proteção pós-saída.</p></div>
      </div>
    </div>
  </section>
);

export const CASES = [
  { tag: 'M&A', title: 'Aquisição de participação em rede de saúde', body: 'Conduzimos due diligence multi-frente, SPA com earn-out trienal e closing sem ressalvas materiais para grupo nacional adquirente.', meta: '2025 · 11 meses', value: 'R$ 180M' },
  { tag: 'FRANQUIA', title: 'Expansão de rede food service em 12 estados', body: 'COF, contrato-mestre e proteção de marca em INPI conduzidos em paralelo. Plano de expansão internacional iniciado em 2026.', meta: '2024–2026 · em curso', value: '+ 60 unidades' },
  { tag: 'HOLDING', title: 'Reorganização patrimonial de família empresária', body: 'Holding com integralização de imóveis, doação com usufruto e protocolo de governança familiar. Economia tributária estrutural na sucessão.', meta: '2025 · 6 meses', value: '4 gerações' },
  { tag: 'CONTRATOS', title: 'Padronização contratual de fornecimento B2B', body: 'Migração da carteira de contratos legados para modelo proprietário com matriz de risco. Redução de 40% no tempo de ciclo de fechamento.', meta: '2024 · 9 meses', value: '+ 200 contratos' },
];

export const Cases = () => (
  <section className="section alt">
    <div className="inner">
      <div className="eyebrow">CASOS RECENTES</div>
      <h2>Operações representativas.</h2>
      <p className="lede">Uma seleção de casos do último ciclo — divulgados com autorização das partes e dentro dos limites do sigilo contratado.</p>
      <div className="cases">
        {CASES.map(c => (
          <div key={c.title} className="case">
            <span className="tag">{c.tag}</span>
            <h3>{c.title}</h3>
            <p>{c.body}</p>
            <div className="meta"><span>{c.meta}</span><span style={{ color: 'var(--pac-navy)' }}>{c.value}</span></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
