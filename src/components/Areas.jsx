const Icon = ({ d }) => (
  <svg
    className="icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    dangerouslySetInnerHTML={{ __html: d }}
  />
);

export const AREAS = [
  {
    id: 'societario', featured: true,
    title: 'Direito Societário',
    body: 'Atuação em todos os tipos societários — de limitadas a S.A., associações e fundações. Documentos societários elaborados por especialistas para evitar prejuízos e desburocratizar a gestão.',
    icon: '<path d="M3 21h18"/><path d="M5 21V8l7-5 7 5v13"/><rect x="9" y="13" width="6" height="8"/>',
    detail: [
      { h: 'Acordo de sócios', p: 'Cláusulas de governança, vesting, drag/tag-along e resolução de conflitos.' },
      { h: 'Reorganização societária', p: 'Cisão, fusão e incorporação com economia tributária estrutural.' },
      { h: 'Alterações contratuais', p: 'Agilidade na Junta Comercial e RFB, atas e livros obrigatórios em ordem.' },
      { h: 'Compliance societário', p: 'Adequação contínua à legislação e prevenção de passivos por informalidade.' },
    ],
  },
  {
    id: 'empresarial', featured: true,
    title: 'Direito Empresarial',
    body: 'Tudo que envolve o dia a dia jurídico da empresa: relações de consumo, concorrência, locação empresarial, contratos de representação, fornecimento, sigilo e prestação de serviços.',
    icon: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>',
    detail: [
      { h: 'Assessoria empresarial', p: 'Suporte jurídico contínuo ao dia a dia da empresa, do operacional ao estratégico.' },
      { h: 'Contratos de representação', p: 'Acordos de distribuição, agência, representação comercial e parceria estratégica.' },
      { h: 'Locação empresarial', p: 'Revisão, negociação e resolução de conflitos em contratos de imóveis comerciais.' },
      { h: 'Relações concorrenciais', p: 'Cláusulas de não-concorrência, sigilo e proteção de carteira de clientes.' },
    ],
  },
  {
    id: 'contratos-empresariais', featured: true,
    title: 'Contratos Empresariais',
    body: 'Contratos sólidos e bem elaborados para relações comerciais seguras. Elaboração, revisão e negociação com foco em mitigar riscos jurídicos e proteger os interesses da empresa.',
    icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/>',
    detail: [
      { h: 'Elaboração e revisão', p: 'Contratos de fornecimento, prestação de serviços, parceria e sigilo redigidos para proteger.' },
      { h: 'Negociação de cláusulas', p: 'Limitação de responsabilidade, SLA, indenização e foro — negociados linha a linha.' },
      { h: 'Biblioteca de templates', p: 'Modelos proprietários para uso recorrente, com agilidade no fechamento de negócios.' },
      { h: 'Compliance contratual', p: 'Auditoria da carteira existente e plano de migração para contratos atualizados.' },
    ],
  },
  {
    id: 'planejamento-sucessorio', featured: true,
    title: 'Planejamento Sucessório',
    body: 'Evita discussões entre herdeiros, define quinhões previamente, garante a continuidade de empresas familiares e reduz a incidência de impostos na transmissão.',
    icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    detail: [
      { h: 'Holding familiar', p: 'Constituição, integralização de ativos e estatuto adequado à família empresária.' },
      { h: 'Testamento e doações', p: 'Doação com reserva de usufruto, testamento corporativo e definição de quinhões.' },
      { h: 'Governança familiar', p: 'Conselho de família, acordo de sócios familiar e protocolo de sucessão executiva.' },
      { h: 'Redução tributária', p: 'Estruturas que minimizam ITCMD e outros tributos na transmissão de patrimônio.' },
    ],
  },
  {
    id: 'tributario', featured: true,
    title: 'Direito Tributário',
    body: 'Desde a revisão de procedimentos fiscais até o planejamento estratégico tributário das empresas — incluindo atuação no contencioso administrativo e judicial.',
    icon: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6"/>',
    detail: [
      { h: 'Planejamento tributário', p: 'Elaboração de estratégia fiscal integrada à estrutura societária e operacional.' },
      { h: 'Revisão de procedimentos', p: 'Identificação de créditos, excessos e oportunidades de economia tributária.' },
      { h: 'Contencioso tributário', p: 'Defesas administrativas, recursos e ações judiciais de natureza fiscal.' },
      { h: 'Compliance fiscal', p: 'Adequação de obrigações acessórias e prevenção de autuações.' },
    ],
  },
  {
    id: 'propriedade-intelectual', featured: true,
    title: 'Propriedade Intelectual',
    body: 'Proteção de marcas, invenções, obras e segredos comerciais. Garantimos que o criador controle o uso, distribuição e reprodução de suas criações — e colha os benefícios do seu ativo intelectual.',
    icon: '<circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/>',
    detail: [
      { h: 'Registro de marca', p: 'Análise de viabilidade, classificação Niza e prossecução integral no INPI.' },
      { h: 'Oposições e nulidades', p: 'Defesa de portfólio em todas as fases administrativas e disputas de domínio.' },
      { h: 'Contratos de tecnologia', p: 'Licenciamento de software, SaaS, transferência de know-how e sigilo tecnológico.' },
      { h: 'INPI averbação', p: 'Registros para remessas internacionais e dedutibilidade fiscal.' },
    ],
  },
  {
    id: 'direito-contratos',
    title: 'Direito dos Contratos',
    body: 'Elaboração e revisão de contratos de qualquer espécie, incluindo processos extrajudiciais e judiciais envolvendo revisão de cláusulas, nulidades e extinção de contratos.',
    icon: '<path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/>',
    detail: [
      { h: 'Elaboração', p: 'Contratos de toda espécie redigidos com clausulado de proteção e clareza.' },
      { h: 'Revisão contratual', p: 'Identificação de cláusulas abusivas, lacunas e riscos não precificados.' },
      { h: 'Revisão judicial', p: 'Ações de revisão, anulação e extinção de contratos de toda natureza.' },
      { h: 'Nulidades', p: 'Identificação e arguição de nulidades absolutas e relativas em contratos vigentes.' },
    ],
  },
  {
    id: 'responsabilidade-civil',
    title: 'Responsabilidade Civil',
    body: 'Ampla experiência na condução de questões envolvendo indenizações decorrentes de ilícitos contratuais e extracontratuais de todas as espécies.',
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    detail: [
      { h: 'Ilícitos contratuais', p: 'Inadimplemento, descumprimento de obrigações e responsabilidade por danos.' },
      { h: 'Ilícitos extracontratuais', p: 'Danos morais, materiais e estéticos decorrentes de atos ilícitos.' },
      { h: 'Responsabilidade civil empresarial', p: 'Danos causados por produtos, serviços e atividades de risco.' },
      { h: 'Indenizações', p: 'Cálculo, negociação e cobrança de indenizações em todas as esferas.' },
    ],
  },
  {
    id: 'familia-sucessoes',
    title: 'Direito da Família e Sucessões',
    body: 'Pactos antenupciais, casamento, divórcio, guarda, pensão alimentícia, inventário e temas correlatos — conduzidos com experiência e sensibilidade para questões pessoais de alta complexidade.',
    icon: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    detail: [
      { h: 'Divórcio e separação', p: 'Consensual ou litigioso, com partilha de bens e definição de guarda.' },
      { h: 'Guarda e alimentos', p: 'Regime de visitas, pensão alimentícia e alienação parental.' },
      { h: 'Pacto antenupcial', p: 'Regime patrimonial com proteção do negócio existente e cláusulas de governança.' },
      { h: 'Inventário', p: 'Inventário extrajudicial e judicial, interdição e questões de herança.' },
    ],
  },
  {
    id: 'trabalhista',
    title: 'Direito Trabalhista Patronal',
    body: 'A área com maior demanda judicial nas empresas. Atuação estratégica para manter competitividade com máxima segurança jurídica — da conformidade preventiva ao contencioso.',
    icon: '<path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    detail: [
      { h: 'Conformidade trabalhista', p: 'Adequação de contratos, jornadas, benefícios e obrigações acessórias.' },
      { h: 'Planos de contingência', p: 'Mapeamento de passivos e estratégia para redução de riscos trabalhistas.' },
      { h: 'Contencioso patronal', p: 'Defesa em reclamações trabalhistas com foco em resultado e custo.' },
      { h: 'Reestruturação', p: 'Demissões em massa, PDV e reorganização de quadro com segurança jurídica.' },
    ],
  },
  {
    id: 'startups',
    title: 'Direito para Startups',
    body: 'Não é um ramo único — abrange diversas legislações e marcos regulatórios para redesenhar ferramentas legais tradicionais e atender os anseios de empresas inovadoras.',
    icon: '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>',
    detail: [
      { h: 'Estruturação jurídica', p: 'Escolha do tipo societário, acordo de sócios e vesting para fundadores.' },
      { h: 'Captação de investimento', p: 'SAFE, convertible note, term sheets e rodadas de investimento.' },
      { h: 'Contratos de tecnologia', p: 'SaaS, API, licenciamento, termos de uso e política de privacidade.' },
      { h: 'Equity e stock options', p: 'Planos de opção para colaboradores e conselheiros.' },
    ],
  },
  {
    id: 'agronegocio',
    title: 'Direito do Agronegócio',
    body: 'O agronegócio representa uma das grandes forças da economia brasileira. Time capacitado para contratos de fornecimento, parceria agrícola, arrendamento rural, safra futura e commodities.',
    icon: '<path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"/><path d="M12 8v4l3 3"/>',
    detail: [
      { h: 'Contratos rurais', p: 'Parceria agrícola, arrendamento rural e contratos de integração.' },
      { h: 'Safra futura', p: 'Estruturação de contratos de compra e venda de safra futura e CPR.' },
      { h: 'Commodities', p: 'Aspectos jurídicos de operações com soja, milho, café e demais commodities.' },
      { h: 'Estruturação de negócio', p: 'Holding rural, sucessão em propriedades agrícolas e planejamento tributário.' },
    ],
  },
  {
    id: 'recuperacao-falencia',
    title: 'Recuperação de Empresas e Falência',
    body: 'Suporte para habilitação e discussão de créditos em processos recuperatórios ou falimentares, com utilização das teses jurídicas necessárias para exclusão de créditos de processos especiais.',
    icon: '<polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>',
    detail: [
      { h: 'Recuperação judicial', p: 'Atuação do credor na assembleia, habilitação e impugnação de créditos.' },
      { h: 'Recuperação extrajudicial', p: 'Negociação de reestruturação de dívidas fora do processo judicial.' },
      { h: 'Falência', p: 'Habilitação de crédito, teses de exclusão e acompanhamento do processo.' },
      { h: 'Reestruturação preventiva', p: 'Estratégia jurídica antes do pedido para maximizar a recuperação.' },
    ],
  },
  {
    id: 'imobiliario',
    title: 'Direito Imobiliário',
    body: 'Relações locatícias, condomínios, compra e venda de imóveis, usufruto, usucapião e direitos possessórios. Suporte completo em qualquer tema que envolva bens imóveis.',
    icon: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
    detail: [
      { h: 'Compra e venda', p: 'Contratos, due diligence de matrícula e acompanhamento de escritura.' },
      { h: 'Locação empresarial', p: 'Contratos de locação comercial, revisional e despejo.' },
      { h: 'Usucapião e posse', p: 'Ações de usucapião, reintegração de posse e manutenção possessória.' },
      { h: 'Condomínio', p: 'Convenção, regimento e cobrança de cotas condominiais.' },
    ],
  },
  {
    id: 'digital',
    title: 'Direito Digital',
    body: 'Suporte às empresas e pessoas físicas atuantes no mundo digital — com programas de Compliance Digital e normas regulatórias da área.',
    icon: '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
    detail: [
      { h: 'Compliance digital', p: 'Implementação de programas de conformidade para negócios digitais.' },
      { h: 'Contratos digitais', p: 'Termos de uso, política de privacidade, SLA e contratos de plataforma.' },
      { h: 'Responsabilidade em plataformas', p: 'Marco Civil da Internet, responsabilidade de intermediários e conteúdo.' },
      { h: 'E-commerce', p: 'Adequação ao CDC digital, SAC e regulação de marketplace.' },
    ],
  },
  {
    id: 'lgpd',
    title: 'Lei Geral de Proteção de Dados',
    body: 'A LGPD impactou o país como poucas leis. Estratégia de implementação para adequação imediata — com identificação das figuras envolvidas, responsabilidades e minimização de penalidades.',
    icon: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    detail: [
      { h: 'Diagnóstico e mapeamento', p: 'Identificação de dados pessoais tratados, bases legais e fluxos de dados.' },
      { h: 'Implementação', p: 'Políticas, procedimentos, contratos com operadores e DPA.' },
      { h: 'DPO as a service', p: 'Encarregado de dados externo para empresas que não precisam de DPO interno.' },
      { h: 'Incidentes de segurança', p: 'Plano de resposta, notificação à ANPD e comunicação aos titulares.' },
    ],
  },
  {
    id: 'consumidor',
    title: 'Relação de Consumo',
    body: 'Litígios sob o Código de Defesa do Consumidor — não só B2C, mas também B2B quando a relação de consumo se aplica entre empresas.',
    icon: '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>',
    detail: [
      { h: 'Defesa do fornecedor', p: 'Estratégia de defesa em ações consumeristas e Procon.' },
      { h: 'Adequação ao CDC', p: 'Revisão de contratos, publicidade e práticas comerciais.' },
      { h: 'Ações coletivas', p: 'Defesa em ações civis públicas e demandas de associações de consumidores.' },
      { h: 'B2B consumerista', p: 'Análise e gestão de litígios entre empresas sob o CDC.' },
    ],
  },
  {
    id: 'concorrencial',
    title: 'Direito Concorrencial',
    body: 'Conjunto de normas que garante a liberdade do comércio e a livre concorrência — antitruste, controle de concentrações e proteção de todos os aspectos concorrenciais.',
    icon: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
    detail: [
      { h: 'Controle de concentrações', p: 'Análise de necessidade de notificação ao CADE em M&A e joint ventures.' },
      { h: 'Cartel e práticas anticompetitivas', p: 'Defesa e prevenção em investigações administrativas do CADE.' },
      { h: 'Programa de compliance', p: 'Implementação de compliance concorrencial e treinamento de equipes.' },
      { h: 'Cláusulas restritivas', p: 'Revisão de acordos de exclusividade, não-concorrência e territorialidade.' },
    ],
  },
  {
    id: 'crypto',
    title: 'Crypto e Blockchain',
    body: 'Serviços jurídicos abrangentes no mundo das criptomoedas e blockchain — em um cenário legal altamente complexo e em constante evolução.',
    icon: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>',
    detail: [
      { h: 'Regulação de criptoativos', p: 'Enquadramento regulatório no Brasil e obrigações perante Banco Central e CVM.' },
      { h: 'Contratos em blockchain', p: 'Smart contracts, NFTs e tokenização de ativos reais.' },
      { h: 'DeFi e exchanges', p: 'Estruturação jurídica de exchanges, corretoras e plataformas DeFi.' },
      { h: 'Compliance cripto', p: 'KYC, AML e adequação às normas do Banco Central sobre PSPs cripto.' },
    ],
  },
];

const FEATURED_IDS = ['societario', 'empresarial', 'contratos-empresariais', 'planejamento-sucessorio', 'tributario', 'propriedade-intelectual'];

const Areas = ({ onSelect, featuredOnly = false }) => {
  const list = featuredOnly ? AREAS.filter(a => FEATURED_IDS.includes(a.id)) : AREAS;
  return (
    <section className="section alt" id="areas">
      <div className="inner">
        <div className="eyebrow">ÁREAS DE ATUAÇÃO</div>
        {featuredOnly ? (
          <>
            <h2>Boutique especializada em direito empresarial.</h2>
            <p className="lede">Atuamos onde o seu negócio cresce — estruturação, contratos, tributário e proteção. Cada operação tem um sócio responsável e um plano de execução.</p>
          </>
        ) : (
          <>
            <h2>Todas as nossas áreas de atuação.</h2>
            <p className="lede">Um único escritório com soluções jurídicas completas para o seu negócio.</p>
          </>
        )}
        <div className="areas">
          {list.map(a => (
            <div key={a.id} className="area-card" onClick={() => onSelect && onSelect(a.id)}>
              <Icon d={a.icon} />
              <h3>{a.title}</h3>
              <p>{a.body}</p>
              <div className="arrow">Saiba mais →</div>
            </div>
          ))}
        </div>
        {featuredOnly && (
          <div style={{ marginTop: 40, textAlign: 'center' }}>
            <button className="btn-ghost-light" onClick={() => onSelect && onSelect('__all')}>
              Ver todas as áreas de atuação →
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Areas;
