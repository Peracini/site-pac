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
    id: 'societario',
    title: 'Estruturação societária',
    body: 'Acordos de sócios, reorganização e holding familiar. A atuação abrange todos os tipos societários — de limitadas a S.A. — com preparo de documentos por especialistas para evitar grandes prejuízos e desburocratizar a gestão.',
    icon: '<path d="M3 21h18"/><path d="M5 21V8l7-5 7 5v13"/><rect x="9" y="13" width="6" height="8"/>',
    detail: [
      { h: 'Acordo de sócios', p: 'Cláusulas de governança, vesting, drag/tag-along e resolução de conflitos — redigidos para o estágio atual do negócio.' },
      { h: 'Reorganização societária', p: 'Cisão, fusão e incorporação com economia tributária estrutural. Alterações de contrato social com agilidade na Junta Comercial.' },
      { h: 'Holding familiar', p: 'Constituição, integralização de ativos e estatuto adequado à família empresária. Blindagem patrimonial e planejamento sucessório integrados.' },
      { h: 'Compliance societário', p: 'Atas, livros obrigatórios, RFB e registros em Junta mantidos em ordem contínua. Evitamos passivos por informalidade.' },
    ],
  },
  {
    id: 'ma',
    title: 'M&A e due diligence',
    body: 'Conduzimos a operação do NDA ao closing. SPA, earn-out e proteção patrimonial pós-saída — com coordenação dedicada em cada etapa.',
    icon: '<path d="M16 3h5v5"/><path d="M8 21H3v-5"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/>',
    detail: [
      { h: 'Due diligence', p: 'Revisão jurídica, fiscal, trabalhista e regulatória com matriz de risco priorizada. Passivo trabalhista oculto e IP são os pontos de maior atenção.' },
      { h: 'SPA e contratos definitivos', p: 'Earn-out, MAC, declarações e indenizações negociadas linha a linha. Teto, prazo de sobrevivência e métricas calibrados para a operação.' },
      { h: 'Closing', p: 'Coordenação com bancos, RFB e órgãos antitruste quando aplicável. 96% dos closings concluídos no prazo originalmente projetado.' },
      { h: 'Pós-fechamento', p: 'Implementação dos compromissos, gestão de pleitos indenizatórios e proteção pós-saída.' },
    ],
  },
  {
    id: 'franquia',
    title: 'Franquias e licenciamento',
    body: 'COF, contrato-mestre, master franchise internacional e proteção de marca em INPI — em fluxo coordenado. Estruturamos redes em mais de 12 estados, com expansão para Portugal e EUA.',
    icon: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
    detail: [
      { h: 'Circular de Oferta de Franquia', p: 'COF auditável e em conformidade com a Lei 13.966/2019. Descrição financeira, suporte e cláusulas de saída — os três pontos críticos de litígio.' },
      { h: 'Contrato-mestre de franquia', p: 'Padronização contratual com cláusulas de qualidade, território, não-competição e obrigações pós-término.' },
      { h: 'Master franchise internacional', p: 'Estruturação tributária e cambial para expansão fora do Brasil. Experiência em Portugal e EUA.' },
      { h: 'Proteção de marca', p: 'Registro no INPI, oposições, disputas de domínio e averbação de contratos para remessas internacionais.' },
    ],
  },
  {
    id: 'contratos',
    title: 'Contratos empresariais',
    body: 'Elaboração, revisão e negociação de contratos com matriz de risco e clausulado de proteção. Contratos sólidos que estabelecem relações comerciais seguras e reduzem o ciclo de fechamento.',
    icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/>',
    detail: [
      { h: 'Elaboração e revisão', p: 'Contratos de fornecimento, prestação de serviços, representação, sigilo e parceria — redigidos para proteger e não apenas registrar o acordo.' },
      { h: 'Negociação de cláusulas', p: 'Limitação de responsabilidade, SLA, indenização, foro internacional e resolução de disputas. Negociamos linha a linha.' },
      { h: 'Compliance contratual', p: 'Auditoria da carteira legada, classificação por risco e plano de migração para templates atualizados. Redução de 40% no ciclo de fechamento em operações recentes.' },
      { h: 'Disputas pré-contenciosas', p: 'Revisão de cláusulas, nulidades e resolução negocial antes do litígio formal. Extinção de contratos de toda natureza.' },
    ],
  },
  {
    id: 'pi',
    title: 'Propriedade intelectual',
    body: 'Registro e defesa de marca, oposições no INPI, contratos de licenciamento e tecnologia. Proteger ativos intelectuais é essencial para o crescimento sustentável de qualquer negócio.',
    icon: '<circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/>',
    detail: [
      { h: 'Registro de marca', p: 'Análise de viabilidade, classificação Niza e prossecução integral no INPI. Marcas, patentes e know-how registrados e averbados.' },
      { h: 'Oposições e nulidades', p: 'Defesa de portfólio em todas as fases administrativas. Disputas de domínio quando aplicáveis.' },
      { h: 'Contratos de tecnologia', p: 'SaaS, licenciamento de software, transferência de know-how e contratos de sigilo tecnológico.' },
      { h: 'INPI averbação', p: 'Registros para remessas internacionais, dedutibilidade fiscal e contratos de franquia com IP envolvido.' },
    ],
  },
  {
    id: 'patrimonio',
    title: 'Proteção patrimonial',
    body: 'Holding familiar, governança e blindagem sucessória com economia tributária estrutural. Evitamos futuras discussões entre herdeiros e garantimos a continuidade do negócio familiar.',
    icon: '<path d="M12 2l9 5v6c0 5-4 8.5-9 10-5-1.5-9-5-9-10V7z"/>',
    detail: [
      { h: 'Holding patrimonial', p: 'Constituição, integralização de imóveis e empresas, estatuto e acordo de cotistas. Blindagem patrimonial real — não só formal.' },
      { h: 'Planejamento sucessório', p: 'Testamento corporativo, doação com reserva de usufruto e definição de quinhões. Redução da incidência de impostos na transmissão.' },
      { h: 'Pacto antenupcial', p: 'Regime patrimonial com proteção do negócio existente, governança em caso de divórcio e definição de patrimônio comum.' },
      { h: 'Governança familiar', p: 'Conselho de família, acordo de sócios familiar e protocolo de sucessão executiva. Estrutura que funciona na prática.' },
    ],
  },
];

const Areas = ({ active, onSelect }) => (
  <section className="section alt" id="areas">
    <div className="inner">
      <div className="eyebrow">ÁREAS DE ATUAÇÃO</div>
      <h2>Boutique especializada em direito empresarial.</h2>
      <p className="lede">Atuamos onde o seu negócio cresce — estruturação, expansão, contratos, proteção. Cada operação tem um sócio responsável e um plano de execução.</p>
      <div className="areas">
        {AREAS.map(a => (
          <div
            key={a.id}
            className={'area-card ' + (active === a.id ? 'active' : '')}
            onClick={() => onSelect && onSelect(a.id)}
          >
            <Icon d={a.icon} />
            <h3>{a.title}</h3>
            <p>{a.body}</p>
            <div className="arrow">Saiba mais →</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Areas;
