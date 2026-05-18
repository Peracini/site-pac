import { useState } from 'react';
import { POSTS } from '../data/posts';

const CATEGORIES = ['Todos', 'Societário', 'M&A', 'Trabalhista', 'Contratos', 'Família & Sucessões', 'Tributário', 'Digital'];

const formatDate = (d) => {
  const [y, m, day] = d.split('-');
  const months = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];
  return `${Number(day)} ${months[Number(m)-1]} ${y}`;
};

// Grid de posts com filtro por categoria
export const BlogGrid = ({ limit, onOpen }) => {
  const [active, setActive] = useState('Todos');

  const filtered = active === 'Todos' ? POSTS : POSTS.filter(p => p.category === active);
  const visible = limit ? filtered.slice(0, limit) : filtered;

  return (
    <>
      <div className="blog-filters">
        {CATEGORIES.map(c => (
          <button
            key={c}
            className={active === c ? 'active' : ''}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="blog-grid">
        {visible.map(p => (
          <article key={p.id} className="blog-card" onClick={() => onOpen(p.id)}>
            <span className="tag">{p.category}</span>
            <h3>{p.title}</h3>
            <p>{p.excerpt}</p>
            <div className="blog-meta">
              <span>{formatDate(p.date)}</span>
              <span>{p.read} de leitura</span>
            </div>
            <div className="read">Ler artigo →</div>
          </article>
        ))}
      </div>
      {!visible.length && (
        <p style={{ opacity: .5, marginTop: 32 }}>Nenhum post nesta categoria ainda.</p>
      )}
    </>
  );
};

// Detalhe de um post
export const PostDetail = ({ id, onBack }) => {
  const post = POSTS.find(p => p.id === id) || POSTS[0];

  return (
    <>
      <section className="page-header">
        <div className="inner">
          <div className="eyebrow">CONTEÚDO · {post.category}</div>
          <h1>{post.title}</h1>
          <p>{formatDate(post.date)} · {post.read} de leitura · PAC Advogados</p>
        </div>
      </section>
      <section className="section">
        <div className="article">
          {post.body.map((para, i) => {
            // Headings heuristic: short lines ending without period or starting with number
            const isHeading = para.length < 100 && (
              /^\d+\./.test(para) || !/[.!?…]$/.test(para)
            ) && i > 0;
            if (isHeading) return <h2 key={i}>{para.replace(/^\d+\.\s*/, '')}</h2>;
            return <p key={i}>{para}</p>;
          })}
          <blockquote>Antes de discutir honorários, entendemos o seu negócio.</blockquote>
          <p>Tem dúvidas sobre este tema? Fale com o escritório — respondemos em até 1 dia útil.</p>
          <div style={{ marginTop: 48, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <button className="btn-navy" onClick={onBack}>← Voltar para conteúdo</button>
          </div>
        </div>
      </section>
      {/* Posts relacionados */}
      <RelatedPosts current={post} onOpen={(newId) => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        // Re-render handled by parent
      }} />
    </>
  );
};

const RelatedPosts = ({ current, onOpen }) => {
  const related = POSTS
    .filter(p => p.id !== current.id && p.category === current.category)
    .slice(0, 3);
  if (!related.length) return null;
  return (
    <section className="section alt">
      <div className="inner">
        <div className="eyebrow">LEIA TAMBÉM</div>
        <h2>Mais sobre {current.category}.</h2>
        <div className="blog-grid" style={{ marginTop: 32 }}>
          {related.map(p => (
            <article key={p.id} className="blog-card" onClick={() => onOpen(p.id)}>
              <span className="tag">{p.category}</span>
              <h3>{p.title}</h3>
              <p>{p.excerpt}</p>
              <div className="blog-meta">
                <span>{formatDate(p.date)}</span>
                <span>{p.read} de leitura</span>
              </div>
              <div className="read">Ler artigo →</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// Seção resumida para a home (6 mais recentes)
export const BlogPreview = ({ onOpen, onViewAll }) => (
  <section className="section alt">
    <div className="inner">
      <div className="eyebrow">CONTEÚDO</div>
      <h2>Notas práticas, não juridiquês.</h2>
      <p className="lede">Posts do escritório sobre o que está mudando no direito empresarial — escritos para o empresário, não para o operador do direito.</p>
      <div className="blog-grid">
        {POSTS.slice(0, 6).map(p => (
          <article key={p.id} className="blog-card" onClick={() => onOpen(p.id)}>
            <span className="tag">{p.category}</span>
            <h3>{p.title}</h3>
            <p>{p.excerpt}</p>
            <div className="blog-meta">
              <span>{formatDate(p.date)}</span>
              <span>{p.read} de leitura</span>
            </div>
            <div className="read">Ler artigo →</div>
          </article>
        ))}
      </div>
      <div style={{ marginTop: 40, textAlign: 'center' }}>
        <button className="btn-ghost-light" onClick={onViewAll}>
          Ver todos os {POSTS.length} artigos →
        </button>
      </div>
    </div>
  </section>
);

export default BlogGrid;
