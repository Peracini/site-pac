import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../lib/api';
import { POSTS as STATIC_POSTS } from '../data/posts'; // fallback dev

const CATEGORIES = ['Todos', 'Societário', 'M&A', 'Trabalhista', 'Contratos', 'Família & Sucessões', 'Tributário', 'Digital'];
const IS_DEV = import.meta.env.DEV;

const formatDate = (d) => {
  if (!d) return '';
  const [y, m, day] = d.split('-');
  const months = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];
  return `${Number(day)} ${months[Number(m)-1]} ${y}`;
};

const PostCard = ({ p, onOpen }) => (
  <article className="blog-card" onClick={() => onOpen(p.slug || p.id)}>
    <span className="tag">{p.category}</span>
    <h3>{p.title}</h3>
    <p>{p.excerpt}</p>
    <div className="blog-meta">
      <span>{formatDate(p.date)}</span>
      <span>{p.read_time || p.read} de leitura</span>
    </div>
    <div className="read">Ler artigo →</div>
  </article>
);

/* ─── Grid com filtro por categoria ──────────────────────────── */
export const BlogGrid = ({ onOpen }) => {
  const [active, setActive] = useState('Todos');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (IS_DEV) { setPosts(STATIC_POSTS); setLoading(false); return; }
    api.getPosts(active).then(data => { setPosts(Array.isArray(data) ? data : []); setLoading(false); });
  }, [active]);

  return (
    <>
      <div className="blog-filters">
        {CATEGORIES.map(c => (
          <button key={c} className={active === c ? 'active' : ''} onClick={() => setActive(c)}>{c}</button>
        ))}
      </div>
      {loading ? <p style={{ opacity: .5, marginTop: 32 }}>Carregando artigos...</p> : (
        <div className="blog-grid">
          {posts.map(p => <PostCard key={p.slug || p.id} p={p} onOpen={onOpen} />)}
        </div>
      )}
      {!loading && !posts.length && (
        <p style={{ opacity: .5, marginTop: 32 }}>Nenhum post nesta categoria ainda.</p>
      )}
    </>
  );
};

/* ─── Detalhe de um post ─────────────────────────────────────── */
export const PostDetail = ({ id, onBack }) => {
  const [post, setPost] = useState(null);
  const [related, setRelated] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (IS_DEV) {
      const p = STATIC_POSTS.find(x => x.id === id) || STATIC_POSTS[0];
      setPost(p);
      setRelated(STATIC_POSTS.filter(x => x.id !== p.id && x.category === p.category).slice(0, 3));
      return;
    }
    api.getPost(id).then(data => {
      if (data.error) return;
      setPost(data);
      api.getPosts(data.category).then(all => {
        setRelated((Array.isArray(all) ? all : []).filter(x => x.slug !== id).slice(0, 3));
      });
    });
  }, [id]);

  if (!post) return <div style={{ padding: '120px 0', textAlign: 'center', opacity: .5 }}>Carregando...</div>;

  const body = Array.isArray(post.body) ? post.body : (post.body || '').split('\n\n').filter(Boolean);

  return (
    <>
      <section className="page-header">
        <div className="inner">
          <div className="eyebrow">CONTEÚDO · {post.category}</div>
          <h1>{post.title}</h1>
          <p>{formatDate(post.date)} · {post.read_time || post.read} de leitura · PAC Advogados</p>
        </div>
      </section>
      <section className="section">
        <div className="article">
          {body.map((para, i) => {
            const isHeading = para.length < 100 && (/^\d+\./.test(para) || !/[.!?…]$/.test(para)) && i > 0;
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
      {related.length > 0 && (
        <section className="section alt">
          <div className="inner">
            <div className="eyebrow">LEIA TAMBÉM</div>
            <h2>Mais sobre {post.category}.</h2>
            <div className="blog-grid" style={{ marginTop: 32 }}>
              {related.map(p => (
                <PostCard key={p.slug || p.id} p={p}
                  onOpen={(slug) => { window.scrollTo({ top: 0, behavior: 'instant' }); navigate(`/blog/${slug}`); }} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

/* ─── Preview na home (6 mais recentes) ─────────────────────── */
export const BlogPreview = ({ onOpen, onViewAll }) => {
  const [posts, setPosts] = useState(IS_DEV ? STATIC_POSTS.slice(0, 6) : []);
  const [total, setTotal] = useState(IS_DEV ? STATIC_POSTS.length : 0);

  useEffect(() => {
    if (IS_DEV) return;
    api.getPosts().then(all => {
      if (!Array.isArray(all)) return;
      setTotal(all.length);
      setPosts(all.slice(0, 6));
    });
  }, []);

  return (
    <section className="section alt">
      <div className="inner">
        <div className="eyebrow">CONTEÚDO</div>
        <h2>Notas práticas, não juridiquês.</h2>
        <p className="lede">Posts do escritório sobre o que está mudando no direito empresarial — escritos para o empresário, não para o operador do direito.</p>
        <div className="blog-grid">
          {posts.map(p => <PostCard key={p.slug || p.id} p={p} onOpen={onOpen} />)}
        </div>
        <div style={{ marginTop: 40, textAlign: 'center' }}>
          <button className="btn-ghost-light" onClick={onViewAll}>
            Ver todos os {total} artigos →
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
