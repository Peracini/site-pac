export const INSIGHTS = [
  {
    id: 'spa-sa-simplificada', tag: 'M&A', title: 'O que muda no SPA com a nova lei das S.A. simplificadas',
    date: '12 mar 2026', read: '4 min',
    excerpt: 'A reforma alcançou pontos sensíveis do contrato definitivo de compra e venda. Veja onde renegociar.',
    body: [
      'A entrada em vigor da nova disciplina das S.A. simplificadas reabriu a discussão sobre as proteções clássicas do SPA. A pergunta que recebemos com mais frequência é prática: o que precisa ser renegociado em contratos já em curso?',
      'Em três frentes. Primeiro, declarações e garantias: os pontos que tradicionalmente eram cobertos por reps específicas agora demandam revisão à luz das novas obrigações de transparência. Segundo, indenização: o teto e o prazo de sobrevivência de cláusulas precisam ser recalculados em função do regime ampliado de responsabilidade dos administradores. Terceiro, earn-out: métricas atreladas a indicadores societários (lucro distribuído, EBITDA) ganham complexidade.',
      'Em operações em curso, a conduta recomendada é simples: identificar o ponto de corte temporal, notificar a contraparte e negociar uma carta-acordo de revisão. Em operações novas, ajustar a estrutura desde o term-sheet — sob pena de retrabalhar o SPA inteiro mais adiante.',
    ],
  },
  {
    id: 'cof', tag: 'FRANQUIA', title: 'COF: o documento que o franqueado lê antes do contrato',
    date: '02 mar 2026', read: '5 min',
    excerpt: 'Um manual prático sobre o que a Circular de Oferta precisa ter — e o que costuma ser esquecido.',
    body: [
      'A Circular de Oferta de Franquia (COF) é o documento que estabelece a relação de informação obrigatória entre franqueador e candidato a franqueado. A Lei 13.966/2019 elenca quinze itens — mas a prática mostra que os problemas concentram-se em três.',
      'O primeiro é a descrição financeira. O candidato precisa entender, com clareza, o investimento total: taxa inicial, royalties, fundo de propaganda, capital de giro. Subdimensionar este ponto gera litígios depois.',
      'O segundo é a oferta de suporte. A COF deve descrever, de forma honesta, qual treinamento será fornecido, quem é a equipe responsável e qual o limite operacional do franqueador.',
      'O terceiro é a saída. Cláusulas de não-competição, recompra de estoque e obrigações pós-término são frequentemente subestimadas — e são onde o conflito acontece.',
    ],
  },
  {
    id: 'holding', tag: 'HOLDING', title: 'Quando faz sentido constituir uma holding familiar',
    date: '21 fev 2026', read: '6 min',
    excerpt: 'A holding não é solução universal. Veja quando ela protege e quando ela cria atrito.',
    body: [
      'A holding familiar virou jargão. Toda família empresária que cresce ouve a recomendação. Mas a estrutura tem custos — operacionais, tributários, sucessórios — que precisam ser pesados antes da decisão.',
      'Nossa recomendação: holding faz sentido quando há dois ou mais herdeiros com expectativas distintas; quando o patrimônio inclui ativos imobiliários relevantes; quando há um negócio operacional em estágio de profissionalização; ou quando há risco patrimonial elevado.',
      'Não faz sentido quando o patrimônio é majoritariamente líquido; quando há herdeiro único; ou quando a expectativa de governança é informal e a estrutura formal só vai gerar atrito.',
    ],
  },
  {
    id: 'due-diligence', tag: 'M&A', title: 'Due diligence: o que prioriza um comprador estratégico',
    date: '04 fev 2026', read: '4 min',
    excerpt: 'Os pontos de risco que recebem atenção desproporcional em uma DD comercial.',
    body: [
      'Em compradores estratégicos, a due diligence é um filtro de risco contratual e operacional, não um exercício acadêmico. Três frentes recebem atenção desproporcional: passivo trabalhista oculto, propriedade intelectual e dependência de cliente.',
      'O passivo trabalhista é o item nº 1 em volume de ressalvas — e, frequentemente, em renegociação de preço. Recomenda-se passar pelo escritório de DD do vendedor antes da formalização.',
      'IP é o ponto onde o "valor" e o "risco" mais frequentemente divergem. Marcas, patentes, know-how: tudo precisa estar registrado e averbado.',
    ],
  },
  {
    id: 'pacto', tag: 'PATRIMÔNIO', title: 'Pacto antenupcial: três cláusulas que o empresário esquece',
    date: '18 jan 2026', read: '3 min',
    excerpt: 'O contrato pré-nupcial não termina no regime patrimonial. Há detalhes que protegem o negócio.',
    body: [
      'O regime escolhido é importante — separação obrigatória, comunhão parcial, comunhão universal — mas não esgota o desenho. Três cláusulas frequentemente esquecidas mudam a proteção do empresário.',
      'A primeira é a definição do que entra como "patrimônio comum". Sem definição expressa, frutos de quotas societárias podem ser objeto de partilha.',
      'A segunda é a renúncia recíproca à participação na administração de pessoa jurídica do outro cônjuge.',
      'A terceira é a cláusula de governança em caso de divórcio: como se administra a participação societária enquanto a partilha não é homologada.',
    ],
  },
  {
    id: 'compliance', tag: 'CONTRATOS', title: 'Por que o compliance contratual é responsabilidade do CFO',
    date: '05 jan 2026', read: '5 min',
    excerpt: 'O contrato que ninguém revisa é o que vai gerar o problema.',
    body: [
      'Empresas em crescimento acumulam contratos. A biblioteca legada — o que foi assinado há três, cinco, sete anos — é onde mora o risco silencioso.',
      'Compliance contratual, na nossa visão, é função do CFO antes de ser função do jurídico. É o CFO quem precisa garantir que a carteira esteja viva, atualizada e em conformidade com a operação atual.',
      'O processo recomendado: inventário, classificação por risco, plano de migração para templates atuais, e revisão anual.',
    ],
  },
];

export const Insights = ({ onOpen }) => (
  <section className="section alt">
    <div className="inner">
      <div className="eyebrow">INTELIGÊNCIA</div>
      <h2>Notas práticas, não juridiquês.</h2>
      <p className="lede">Posts do escritório sobre o que está mudando no direito empresarial — escritos para o empresário, não para o operador do direito.</p>
      <div className="insights">
        {INSIGHTS.map(i => (
          <div key={i.id} className="insight" onClick={() => onOpen && onOpen(i.id)}>
            <span className="tag">{i.tag}</span>
            <h3>{i.title}</h3>
            <p style={{ fontSize: 14, lineHeight: 1.55, opacity: .78, margin: 0 }}>{i.excerpt}</p>
            <div className="meta">{i.date} · {i.read} de leitura</div>
            <div className="read">Ler artigo →</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const InsightDetail = ({ id, onBack }) => {
  const i = INSIGHTS.find(x => x.id === id) || INSIGHTS[0];
  return (
    <>
      <section className="page-header">
        <div className="inner">
          <div className="eyebrow">INTELIGÊNCIA · {i.tag}</div>
          <h1>{i.title}</h1>
          <p>{i.date} · {i.read} de leitura · PAC Advogados</p>
        </div>
      </section>
      <section className="section">
        <div className="article">
          <p style={{ fontSize: 20, fontWeight: 500, color: 'var(--pac-navy)', opacity: 1 }}>{i.excerpt}</p>
          {i.body.map((p, n) => <p key={n}>{p}</p>)}
          <blockquote>Antes de discutir honorários, entendemos o seu negócio.</blockquote>
          <p>Tem uma operação em curso onde este ponto é relevante? Fale com o escritório — respondemos em até 1 dia útil.</p>
          <div style={{ marginTop: 48, display: 'flex', gap: 16 }}>
            <button className="btn-navy" onClick={onBack}>← Voltar para inteligência</button>
          </div>
        </div>
      </section>
    </>
  );
};

export const CtaStrip = ({ openContact }) => (
  <section className="cta-strip">
    <h2>Antes de discutir honorários, <em>entendemos o seu negócio.</em></h2>
    <p className="sub">Solicite uma sessão estratégica de diagnóstico. Resposta em até 1 dia útil pelo sócio responsável.</p>
    <button className="btn-primary" onClick={openContact}>Solicitar diagnóstico estratégico →</button>
  </section>
);

export const Footer = ({ setPage }) => (
  <footer className="footer">
    <div className="row">
      <div>
        <img src="/logo_white.png" alt="PAC Advogados" />
      </div>
      <div>
        <h4>Escritório</h4>
        <a onClick={() => setPage('about')}>Sobre</a>
        <a onClick={() => setPage('team')}>Sócios</a>
        <a onClick={() => setPage('cases')}>Casos</a>
        <a onClick={() => setPage('insights')}>Inteligência</a>
      </div>
      <div>
        <h4>Atuação</h4>
        <a onClick={() => setPage('areas')}>M&amp;A</a>
        <a onClick={() => setPage('areas')}>Societário</a>
        <a onClick={() => setPage('areas')}>Franquia</a>
        <a onClick={() => setPage('areas')}>Contratos</a>
        <a onClick={() => setPage('areas')}>Patrimônio</a>
      </div>
      <div>
        <h4>Contato</h4>
        <a href="mailto:contato@pacadvogados.com.br">contato@pacadvogados.com.br</a>
        <a href="https://wa.me/5516992827129" target="_blank" rel="noopener noreferrer">(16) 99282-7129 · WhatsApp</a>
        <a href="https://linkedin.com/company/pacadvogados" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a>Ribeirão Preto — SP</a>
      </div>
    </div>
    <div className="copy">
      <div>© 2026 PAC Advogados</div>
      <div>Manual de identidade visual v1.0 · 2025</div>
    </div>
  </footer>
);
