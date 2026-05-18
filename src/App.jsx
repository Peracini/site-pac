import { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import { Hero, TrustBar } from './components/Hero';
import Areas, { AREAS } from './components/Areas';
import { Stats, People, Process, Diferenciais, Testimonials, StatementStrip } from './components/Sections';
import { CtaStrip, Footer } from './components/Footer';
import { BlogPreview, BlogGrid, PostDetail } from './components/Blog';
import ContactPanel from './components/ContactPanel';

const AreaDetail = ({ id, openContact, setPage }) => {
  const a = AREAS.find(x => x.id === id) || AREAS[0];
  return (
    <>
      <section className="page-header">
        <div className="inner">
          <div className="eyebrow">ÁREA DE ATUAÇÃO</div>
          <h1>{a.title}.</h1>
          <p>{a.body}</p>
        </div>
      </section>
      <section className="section alt">
        <div className="inner">
          <div className="eyebrow">O QUE FAZEMOS</div>
          <h2>Frentes específicas dentro da prática.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginTop: 32 }}>
            {a.detail.map((d, n) => (
              <div key={n} className="step">
                <span className="num">{String(n + 1).padStart(2, '0')}</span>
                <h3>{d.h}</h3>
                <p>{d.p}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 56, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <button className="btn-navy" onClick={openContact}>Solicitar diagnóstico →</button>
            <button className="btn-ghost-light" onClick={() => setPage('areas')}>Ver outras áreas</button>
          </div>
        </div>
      </section>
    </>
  );
};

const AreasPage = ({ onSelect, openContact }) => (
  <>
    <section className="page-header">
      <div className="inner">
        <div className="eyebrow">ÁREAS DE ATUAÇÃO</div>
        <h1>Direito empresarial, em todas as frentes que importam.</h1>
        <p>Boutique especializada — atuamos onde o seu negócio cresce, contrata e se protege. Cada operação tem um sócio responsável e um plano de execução com prazo.</p>
      </div>
    </section>
    <section className="section" style={{ background: '#fff', paddingBottom: 32 }}>
      <div className="inner">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4, marginBottom: 64 }}>
          {['M&A', '+200 clientes', 'R$ 34MM protegidos', 'Societário', 'Contratos', 'Patrimônio'].map(t => (
            <div key={t} style={{ background: 'var(--pac-off-white)', padding: '14px 20px', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--pac-navy)', borderLeft: '3px solid var(--pac-neon)' }}>{t}</div>
          ))}
        </div>
      </div>
    </section>
    <Areas onSelect={onSelect} />
    <section className="section navy">
      <div className="inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32 }}>
        <div>
          <div className="eyebrow">DIAGNÓSTICO GRATUITO</div>
          <h2 style={{ margin: '14px 0 12px' }}>Antes de discutir honorários,<br />entendemos o seu negócio.</h2>
          <p style={{ opacity: .78, maxWidth: 560, margin: 0 }}>Resposta em até 1 dia útil pelo sócio responsável pela área de interesse.</p>
        </div>
        <button className="btn-primary" onClick={openContact} style={{ whiteSpace: 'nowrap' }}>Solicitar diagnóstico →</button>
      </div>
    </section>
  </>
);

const About = ({ openContact }) => (
  <>
    <section className="page-header">
      <div className="inner">
        <div className="eyebrow">SOBRE O ESCRITÓRIO</div>
        <h1>Boutique de direito empresarial.</h1>
        <p>Pensamos junto com o empresário. Sofisticação sem distância: especialização técnica e proximidade estratégica em uma única equipe — sediada em Ribeirão Preto, com atuação em todo o Brasil.</p>
      </div>
    </section>
    <section className="section alt">
      <div className="article">
        <p style={{ fontSize: 22, fontWeight: 500, color: 'var(--pac-navy)', opacity: 1, lineHeight: 1.5 }}>
          A PAC Advogados — Peracini, Alves e Cottas — é uma boutique de direito empresarial com atuação especializada em estruturação de negócios, acordos societários, expansão empresarial (franquias, licenciamento, M&amp;A), contratos e proteção patrimonial.
        </p>
        <p>O escritório foi fundado para atender o empresário que precisa de mais do que produção de documento jurídico. Atendemos clientes que decidem com base em estrutura: o acordo de sócios certo no momento certo; a operação de M&amp;A com proteção pós-saída; a expansão por franquia com COF auditável; a holding familiar que de fato funciona na sucessão.</p>
        <h2>O que nos distingue</h2>
        <p><strong>Sócio dedicado.</strong> Cada operação tem um sócio responsável que conduz a relação do diagnóstico ao pós-closing. Sem terceirização, sem repasse para estagiário.</p>
        <p><strong>Método.</strong> Diagnóstico, estrutura, execução, pós-closing. Quatro etapas com prazo, entregáveis e ponto de revisão.</p>
        <p><strong>Linguagem.</strong> Comunicamos o direito de forma precisa e compreensível. O empresário entende a operação que está conduzindo.</p>
        <h2>Posicionamento</h2>
        <p>Boutique. Não somos um escritório de volume. Trabalhamos com um número selecionado de operações por ano, com atenção dedicada a cada uma. Esse é, deliberadamente, o nosso modelo.</p>
        <blockquote>Antes de discutir honorários, entendemos o seu negócio.</blockquote>
      </div>
    </section>
    <section className="section navy">
      <div className="inner">
        <div className="eyebrow">HISTÓRICO</div>
        <h2>Marcos do escritório.</h2>
        <div className="timeline" style={{ marginTop: 32 }}>
          {[
            { year: '2018', title: 'Fundação', text: 'Constituição do escritório com foco em direito empresarial e M&A para empresas de médio porte.' },
            { year: '2021', title: 'Prática de franquias', text: 'Estruturação da prática dedicada a franquias, licenciamento e expansão empresarial.' },
            { year: '2024', title: 'R$ 480M em operações', text: 'Conclusão do ciclo de operações de M&A com 96% de closings no prazo originalmente projetado.' },
            { year: '2026', title: 'Manual de identidade v1', text: 'Publicação do Manual de Identidade Visual e padronização da prática de comunicação institucional.' },
          ].map(item => (
            <div key={item.year} className="tl-item" style={{ borderTopColor: 'rgba(255,255,255,.16)' }}>
              <div className="yr" style={{ color: 'var(--pac-neon)' }}>{item.year}</div>
              <div className="tx">
                <h4 style={{ color: '#fff' }}>{item.title}</h4>
                <p style={{ color: 'rgba(255,255,255,.78)' }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

const TeamPage = () => (
  <>
    <section className="page-header">
      <div className="inner">
        <div className="eyebrow">SÓCIOS &amp; EQUIPE</div>
        <h1>Quem conduz o seu caso.</h1>
        <p>Cada operação tem um sócio dedicado. O nome que assina a proposta é o nome que conduz a operação até o pós-closing.</p>
      </div>
    </section>
    <People />
  </>
);

const InsightsPage = ({ onOpen }) => (
  <>
    <section className="page-header">
      <div className="inner">
        <div className="eyebrow">CONTEÚDO</div>
        <h1>Notas práticas, não juridiquês.</h1>
        <p>Posts do escritório sobre o que está mudando no direito empresarial — escritos para o empresário, não para o operador do direito.</p>
      </div>
    </section>
    <section className="section" style={{ background: '#fff' }}>
      <div className="inner">
        <BlogGrid onOpen={onOpen} />
      </div>
    </section>
  </>
);

const HomePage = ({ setPage, openContact, selectArea, openInsight }) => (
  <>
    <Hero openContact={openContact} setPage={setPage} />
    <TrustBar />
    <Areas
      featuredOnly
      onSelect={(id) => {
        if (id === '__all') { setPage('areas'); return; }
        selectArea(id); setPage('area');
      }}
    />
    <Stats />
    <StatementStrip />
    <Diferenciais />
    <Process />
    <People />
    <Testimonials />
    <BlogPreview onOpen={openInsight} onViewAll={() => setPage('insights')} />
    <CtaStrip openContact={openContact} />
  </>
);

const App = () => {
  const [page, setPage] = useState('home');
  const [activeArea, setActiveArea] = useState('ma');
  const [activeInsight, setActiveInsight] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);
  const openInsight = (id) => { setActiveInsight(id); setPage('insight'); };

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [page, activeInsight, activeArea]);

  return (
    <div className="site">
      <TopBar
        page={page === 'area' ? 'areas' : page === 'insight' ? 'insights' : page}
        setPage={setPage}
        openContact={openContact}
      />
      {page === 'home' && <HomePage setPage={setPage} openContact={openContact} selectArea={setActiveArea} openInsight={openInsight} />}
      {page === 'areas' && <AreasPage onSelect={(id) => { setActiveArea(id); setPage('area'); }} openContact={openContact} />}

      {page === 'area' && <AreaDetail id={activeArea} openContact={openContact} setPage={setPage} />}
      {page === 'team' && <TeamPage />}
{page === 'insights' && <InsightsPage onOpen={openInsight} />}
      {page === 'insight' && <PostDetail id={activeInsight} onBack={() => setPage('insights')} />}
      {page === 'about' && <About openContact={openContact} />}
      {page !== 'home' && <CtaStrip openContact={openContact} />}
      <Footer setPage={setPage} />
      <ContactPanel open={contactOpen} onClose={closeContact} />
    </div>
  );
};

export default App;
