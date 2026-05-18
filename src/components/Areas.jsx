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
    id: 'societario', title: 'Estruturação societária',
    body: 'Acordos de sócios, reorganização e holding familiar. Desenhamos a operação para o estágio do seu negócio.',
    icon: '<path d="M3 21h18"/><path d="M5 21V8l7-5 7 5v13"/><rect x="9" y="13" width="6" height="8"/>',
    detail: [
      { h: 'Acordo de sócios', p: 'Cláusulas de governança, vesting, drag/tag-along e resolução de conflitos.' },
      { h: 'Reorganização societária', p: 'Cisão, fusão e incorporação com economia tributária estrutural.' },
      { h: 'Holding familiar', p: 'Blindagem patrimonial e planejamento sucessório integrados.' },
      { h: 'Compliance societário', p: 'Atas, livros, RFB e Junta Comercial mantidos em ordem contínua.' },
    ],
  },
  {
    id: 'ma', title: 'M&A e due diligence',
    body: 'Conduzimos a operação do NDA ao closing. SPA, earn-out e proteção patrimonial pós-saída.',
    icon: '<path d="M16 3h5v5"/><path d="M8 21H3v-5"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/>',
    detail: [
      { h: 'Due diligence', p: 'Revisão jurídica, fiscal e regulatória com matriz de risco priorizada.' },
      { h: 'SPA e contratos definitivos', p: 'Earn-out, MAC, declarações e indenizações negociadas linha a linha.' },
      { h: 'Closing', p: 'Coordenação com bancos, RFB e órgãos antitruste quando aplicável.' },
      { h: 'Pós-fechamento', p: 'Implementação dos compromissos e gestão de pleitos indenizatórios.' },
    ],
  },
  {
    id: 'franquia', title: 'Franquias e licenciamento',
    body: 'COF, contrato-mestre, master franchise internacional e proteção de marca em INPI — em fluxo coordenado.',
    icon: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
    detail: [
      { h: 'Circular de Oferta de Franquia', p: 'COF auditável e em conformidade com a Lei 13.966/2019.' },
      { h: 'Contrato-mestre de franquia', p: 'Padronização contratual com cláusulas de qualidade e território.' },
      { h: 'Master franchise internacional', p: 'Estruturação tributária e cambial para expansão fora do país.' },
      { h: 'Proteção de marca e KYS', p: 'INPI, oposições e disputas de domínio quando aplicáveis.' },
    ],
  },
  {
    id: 'contratos', title: 'Contratos empresariais',
    body: 'Revisão e redação de contratos com matriz de risco, clausulado de proteção e padronização contratual.',
    icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/>',
    detail: [
      { h: 'Templates contratuais', p: 'Biblioteca proprietária para fornecedores, clientes e parceiros estratégicos.' },
      { h: 'Negociação de cláusulas', p: 'Limitação de responsabilidade, SLA, indenização e foro internacional.' },
      { h: 'Compliance contratual', p: 'Auditoria de carteira existente e plano de migração contratual.' },
      { h: 'Disputas pré-contenciosas', p: 'Resolução negocial antes do litígio formal.' },
    ],
  },
  {
    id: 'pi', title: 'Propriedade intelectual',
    body: 'Registro e defesa de marca, oposições no INPI, contratos de licenciamento e tecnologia.',
    icon: '<circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/>',
    detail: [
      { h: 'Registro de marca', p: 'Análise de viabilidade, classificação Niza e prossecução em INPI.' },
      { h: 'Oposições e nulidades', p: 'Defesa de portfólio em todas as fases administrativas.' },
      { h: 'Contratos de tecnologia', p: 'SaaS, licenciamento de software, transferência de know-how.' },
      { h: 'INPI averbação', p: 'Registros para remessas internacionais e dedutibilidade fiscal.' },
    ],
  },
  {
    id: 'patrimonio', title: 'Proteção patrimonial',
    body: 'Holding familiar, governança e blindagem sucessória com economia tributária estrutural.',
    icon: '<path d="M12 2l9 5v6c0 5-4 8.5-9 10-5-1.5-9-5-9-10V7z"/>',
    detail: [
      { h: 'Holding patrimonial', p: 'Constituição, integralização e estatuto adequado à família empresária.' },
      { h: 'Planejamento sucessório', p: 'Doação com reserva de usufruto e testamento corporativo.' },
      { h: 'Pacto antenupcial', p: 'Regime patrimonial com proteção do negócio existente.' },
      { h: 'Governança familiar', p: 'Conselho, acordo de família e protocolo de sucessão executiva.' },
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
