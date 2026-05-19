export const Stats = () => (
  <section className="section dark">
    <div className="inner">
      <div className="eyebrow">RESULTADOS</div>
      <h2>Números que falam por nós.</h2>
      <p className="lede">Indicadores reais do escritório — construídos operação a operação, cliente a cliente.</p>
      <div className="stats">
        <div className="stat">
          <div className="n">+200</div>
          <div className="sep"></div>
          <div className="l">clientes atendidos com confiança e resultados</div>
        </div>
        <div className="stat">
          <div className="n">+R$ 23MM</div>
          <div className="sep"></div>
          <div className="l">em volume total negociado em societário e negociações empresariais</div>
        </div>
        <div className="stat">
          <div className="n">+R$ 34MM</div>
          <div className="sep"></div>
          <div className="l">em valor total protegido com planejamento familiar aplicado a negócios</div>
        </div>
        <div className="stat">
          <div className="n">92,46%</div>
          <div className="sep"></div>
          <div className="l">de redução alcançada com estratégia trabalhista preventiva</div>
        </div>
      </div>
    </div>
  </section>
);

export const StatementStrip = () => (
  <section className="statement-strip">
    <div className="inner">
      <p className="statement-line">Não somos um escritório de litígio.</p>
      <p className="statement-line accent">Somos um escritório de estruturação.</p>
    </div>
  </section>
);

const DIFERENCIAIS = [
  { icon: '◈', text: 'Diagnóstico estratégico antes de qualquer proposta' },
  { icon: '◈', text: 'Linguagem clara — sem juridiquês desnecessário' },
  { icon: '◈', text: 'Contratos estruturados para proteger e crescer' },
  { icon: '◈', text: 'Resposta rápida e acesso direto aos sócios' },
  { icon: '◈', text: 'Visão de negócios, não só visão jurídica' },
  { icon: '◈', text: 'Atuação preventiva — resolvemos antes de virar processo' },
  { icon: '◈', text: 'Experiência em empresas de todos os tamanhos e setores' },
  { icon: '◈', text: 'Escritório boutique: atendimento personalizado, sem intermediários' },
];

export const Diferenciais = () => (
  <section className="section" style={{ background: 'var(--pac-off-white)' }}>
    <div className="inner">
      <div className="eyebrow">DIFERENCIAIS</div>
      <h2>Por que nossos clientes ficam — e indicam.</h2>
      <p className="lede">Não somos o escritório que assina o parecer e some. Somos o jurídico que entende o negócio, antecipa o problema e constrói junto com o empresário.</p>
      <div className="diferenciais">
        {DIFERENCIAIS.map((d, i) => (
          <div key={i} className="diferencial">
            <span className="diferencial-icon">✓</span>
            <span>{d.text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const PEOPLE = [
  {
    initials: 'FP', name: 'Fernando Peracini', role: 'Sócio fundador · M&A · Estruturação',
    bio: 'Conduziu mais de 80 operações de M&A e estruturação societária. Especialista em transações de médio porte com componente familiar.',
    quote: 'Estruturo negócios. Protejo o que foi construído. Preparo para o próximo passo.',
    avatar: '/avatares/avatar-dr-fernando-peracini.jpg',
  },
  {
    initials: 'FA', name: 'Fernanda Alves', role: 'Sócia fundadora · Contratos · Franquia',
    bio: 'Lidera a prática de franquias do escritório. Estruturou redes em mais de 12 estados, com expansão internacional para Portugal e EUA.',
    quote: 'Estratégia trabalhista não começa na reclamação. Começa antes da contratação.',
    avatar: '/avatares/avatar-dra-fernanda-alves.jpg',
  },
  {
    initials: 'PC', name: 'Paula Cottas', role: 'Sócia fundadora · Societário · Holding',
    bio: 'Foco em proteção patrimonial e holding familiar. Reorganizou estruturas familiares com blindagem sucessória e ganhos tributários estruturais.',
    quote: 'Patrimônio construído com trabalho merece ser protegido com inteligência.',
    avatar: '/avatares/Paula-Cottas-PAC-Advogados-Direito-Patrimonial-Familia_.jpeg.jpg',
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
            {p.avatar && <div className="person-photo" style={{ backgroundImage: `url(${p.avatar})` }} />}
            <div className="person-content">
              <div className="av">{p.initials}</div>
              <h3>{p.name}</h3>
              <div className="role">{p.role}</div>
              <div className="bio">{p.bio}</div>
              {p.quote && <div className="person-quote">"{p.quote}"</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Process = () => (
  <section className="section navy">
    <div className="inner">
      <div className="eyebrow">METODOLOGIA</div>
      <h2>Como conduzimos uma operação.</h2>
      <p className="lede">Quatro etapas, um sócio responsável, um plano de execução com prazo. O empresário sempre sabe onde a operação está.</p>
      <div className="steps">
        <div className="step">
          <span className="num">01</span>
          <h3>Diagnóstico Estratégico</h3>
          <p>Entendemos o negócio antes de qualquer redação: modelo econômico, fluxos financeiros, responsabilidades e riscos.</p>
        </div>
        <div className="step">
          <span className="num">02</span>
          <h3>Estruturação Jurídica</h3>
          <p>Desenvolvemos a solução mais adequada com linguagem clara e eficiente — contrato, estrutura societária ou planejamento.</p>
        </div>
        <div className="step">
          <span className="num">03</span>
          <h3>Negociação e Proteção</h3>
          <p>Acompanhamos a negociação, revisamos contrapropostas e blindamos nossos clientes contra cláusulas abusivas.</p>
        </div>
        <div className="step">
          <span className="num">04</span>
          <h3>Continuidade</h3>
          <p>Estamos presentes nas próximas etapas: crescimento, novos contratos, novos sócios, novas operações.</p>
        </div>
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

const TESTIMONIALS = [
  {
    quote: 'Contamos com o Fernando desde que a Brazu ainda era um protótipo. Nos deu suporte total em todas as dores jurídicas. Com a consciência tranquila no jurídico, pudemos nos dedicar o suficiente para atingirmos +6.500 clientes em 1 ano de operação.',
    name: 'Henrique Campos',
    company: 'Co-fundador · Brazu',
  },
  {
    quote: 'Suporte necessário, atendimento rápido e eficiente. Estão sempre disponíveis para resolver qualquer questão. Passam segurança em cada etapa do processo.',
    name: 'Bruna Fiuza',
    company: 'Marmoraria Pedra Bonita',
  },
  {
    quote: 'A empresa trabalhou com muito profissionalismo e pontualidade. Sempre à postos para viabilizar tudo da melhor maneira possível. Indico a todos que querem uma referência.',
    name: 'Heriton Santos e Thaís Moiz',
    company: 'Jr. Móveis',
  },
];

export const Testimonials = () => (
  <section className="section" style={{ background: '#fff' }}>
    <div className="inner">
      <div className="eyebrow">DEPOIMENTOS</div>
      <h2>O que dizem sobre nós.</h2>
      <div className="testimonials">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="testimonial">
            <div className="testimonial-mark">"</div>
            <p className="testimonial-text">{t.quote}</p>
            <div className="testimonial-author">
              <div className="testimonial-name">{t.name}</div>
              <div className="testimonial-company">{t.company}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
