import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../lib/api';

const CATEGORIES = ['Societário', 'M&A', 'Trabalhista', 'Contratos', 'Família & Sucessões', 'Tributário', 'Digital'];

const slugify = (str) =>
  str.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');

/* ─── Tela de Login ────────────────────────────────────────────── */
export const AdminLogin = ({ onLogin }) => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true); setError('');
    const res = await api.login(form.email, form.password);
    setLoading(false);
    if (res.token) {
      localStorage.setItem('pac_token', res.token);
      onLogin();
    } else {
      setError(res.error || 'Credenciais inválidas');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--pac-off-white)' }}>
      <form onSubmit={submit} style={{ background: '#fff', padding: 48, borderRadius: 8, width: 400, boxShadow: '0 8px 32px rgba(13,13,107,.1)' }}>
        <img src="/logo_navy.png" alt="PAC" style={{ height: 36, marginBottom: 32 }} />
        <h2 style={{ margin: '0 0 24px', fontSize: 22, color: 'var(--pac-navy)' }}>Painel de conteúdo</h2>
        {error && <div style={{ background: '#fee', border: '1px solid #fcc', padding: '10px 14px', borderRadius: 4, fontSize: 13, marginBottom: 16, color: '#c00' }}>{error}</div>}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <input type="email" required placeholder="E-mail" value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            style={inputStyle} />
          <input type="password" required placeholder="Senha" value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
            style={inputStyle} />
          <button type="submit" disabled={loading}
            style={{ background: 'var(--pac-navy)', color: '#fff', border: 0, padding: '14px', borderRadius: 4, fontWeight: 700, cursor: 'pointer', fontSize: 14 }}>
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </div>
      </form>
    </div>
  );
};

/* ─── Editor de Post ───────────────────────────────────────────── */
const PostEditor = ({ post, onSave, onCancel }) => {
  const isNew = !post;
  const [form, setForm] = useState({
    slug: post?.slug || '',
    title: post?.title || '',
    category: post?.category || 'Societário',
    excerpt: post?.excerpt || '',
    body: Array.isArray(post?.body) ? post.body.join('\n\n') : (post?.body || ''),
    date: post?.date || new Date().toISOString().split('T')[0],
    read_time: post?.read_time || post?.read || '5 min',
    meta_description: post?.meta_description || '',
    published: post?.published ?? 1,
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleTitleChange = (v) => {
    set('title', v);
    if (isNew) set('slug', slugify(v));
  };

  const submit = async (e) => {
    e.preventDefault();
    setSaving(true); setError('');
    const data = {
      ...form,
      body: form.body.split(/\n\n+/).map(p => p.trim()).filter(Boolean),
      published: Number(form.published),
    };
    const res = isNew
      ? await api.createPost(data)
      : await api.updatePost(post.slug, data);
    setSaving(false);
    if (res.error) { setError(res.error); return; }
    onSave();
  };

  return (
    <form onSubmit={submit}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
        <h2 style={{ margin: 0, color: 'var(--pac-navy)' }}>{isNew ? 'Novo artigo' : 'Editar artigo'}</h2>
        <div style={{ display: 'flex', gap: 10 }}>
          <button type="button" onClick={onCancel} style={btnGhost}>Cancelar</button>
          <button type="submit" disabled={saving} style={btnNavy}>{saving ? 'Salvando...' : 'Salvar'}</button>
        </div>
      </div>
      {error && <div style={errorBox}>{error}</div>}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
        <Field label="Título">
          <input style={inputStyle} required value={form.title} onChange={e => handleTitleChange(e.target.value)} placeholder="Título do artigo" />
        </Field>
        <Field label="Slug (URL)">
          <input style={inputStyle} required value={form.slug} onChange={e => set('slug', e.target.value)} placeholder="titulo-do-artigo" />
        </Field>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 16 }}>
        <Field label="Categoria">
          <select style={inputStyle} value={form.category} onChange={e => set('category', e.target.value)}>
            {CATEGORIES.map(c => <option key={c}>{c}</option>)}
          </select>
        </Field>
        <Field label="Data">
          <input style={inputStyle} type="date" value={form.date} onChange={e => set('date', e.target.value)} />
        </Field>
        <Field label="Tempo de leitura">
          <input style={inputStyle} value={form.read_time} onChange={e => set('read_time', e.target.value)} placeholder="5 min" />
        </Field>
      </div>

      <Field label="Resumo (excerpt)" style={{ marginBottom: 16 }}>
        <textarea style={{ ...inputStyle, resize: 'vertical' }} rows={2} value={form.excerpt}
          onChange={e => set('excerpt', e.target.value)} placeholder="Breve resumo para a listagem..." />
      </Field>

      <Field label="Meta description (SEO)" style={{ marginBottom: 16 }}>
        <input style={inputStyle} value={form.meta_description}
          onChange={e => set('meta_description', e.target.value)}
          placeholder="Descrição para Google (até 160 caracteres)" maxLength={160} />
        <small style={{ color: '#888', fontSize: 11 }}>{form.meta_description.length}/160</small>
      </Field>

      <Field label="Conteúdo (separe parágrafos com linha em branco)" style={{ marginBottom: 16 }}>
        <textarea style={{ ...inputStyle, resize: 'vertical', fontFamily: 'monospace', fontSize: 13 }}
          rows={16} value={form.body} onChange={e => set('body', e.target.value)}
          placeholder="Escreva o artigo aqui.

Cada parágrafo separado por uma linha em branco.

Títulos de seção: escreva o título sem pontuação no final." />
      </Field>

      <Field label="Status">
        <select style={{ ...inputStyle, maxWidth: 200 }} value={form.published} onChange={e => set('published', Number(e.target.value))}>
          <option value={1}>✅ Publicado</option>
          <option value={0}>📝 Rascunho</option>
        </select>
      </Field>
    </form>
  );
};

/* ─── Lista de Posts ───────────────────────────────────────────── */
const PostList = ({ posts, onEdit, onDelete }) => {
  const [search, setSearch] = useState('');
  const filtered = posts.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input style={{ ...inputStyle, marginBottom: 20, maxWidth: 360 }}
        placeholder="Buscar por título ou categoria..."
        value={search} onChange={e => setSearch(e.target.value)} />
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
        <thead>
          <tr style={{ borderBottom: '2px solid var(--pac-navy)', textAlign: 'left' }}>
            <th style={th}>Título</th>
            <th style={th}>Categoria</th>
            <th style={th}>Data</th>
            <th style={th}>Status</th>
            <th style={th}></th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(p => (
            <tr key={p.slug} style={{ borderBottom: '1px solid #eee' }}>
              <td style={td}>
                <span style={{ fontWeight: 600, color: 'var(--pac-navy)' }}>{p.title}</span>
                <div style={{ fontSize: 11, color: '#888', marginTop: 2 }}>/blog/{p.slug}</div>
              </td>
              <td style={td}><span style={tagStyle}>{p.category}</span></td>
              <td style={td}>{p.date}</td>
              <td style={td}>{p.published ? '✅ Publicado' : '📝 Rascunho'}</td>
              <td style={{ ...td, textAlign: 'right', whiteSpace: 'nowrap' }}>
                <button onClick={() => onEdit(p)} style={btnSmall}>Editar</button>
                <button onClick={() => onDelete(p.slug)} style={{ ...btnSmall, color: '#c00', marginLeft: 8 }}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {!filtered.length && <p style={{ opacity: .5, marginTop: 24 }}>Nenhum post encontrado.</p>}
    </>
  );
};

/* ─── Shell do Admin ───────────────────────────────────────────── */
export const AdminPanel = () => {
  const navigate = useNavigate();
  const [view, setView] = useState('list'); // list | new | edit
  const [posts, setPosts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const data = await api.adminGetPosts();
    setPosts(Array.isArray(data) ? data : []);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const logout = () => { localStorage.removeItem('pac_token'); navigate('/admin'); };

  const handleDelete = async (slug) => {
    if (!confirm(`Excluir "${slug}"? Esta ação não pode ser desfeita.`)) return;
    await api.deletePost(slug);
    load();
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--pac-off-white)' }}>
      {/* Header */}
      <div style={{ background: 'var(--pac-navy)', padding: '14px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <img src="/logo_white.png" alt="PAC" style={{ height: 28 }} />
          <span style={{ color: 'rgba(255,255,255,.6)', fontSize: 13 }}>Painel de conteúdo</span>
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <a href="/" style={{ color: 'rgba(255,255,255,.7)', fontSize: 13, textDecoration: 'none' }}>← Ver site</a>
          <button onClick={logout} style={{ background: 'transparent', border: '1px solid rgba(255,255,255,.3)', color: '#fff', padding: '6px 14px', borderRadius: 4, cursor: 'pointer', fontSize: 12 }}>Sair</button>
        </div>
      </div>

      {/* Conteúdo */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: 40 }}>
        {view === 'list' && (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
              <div>
                <h1 style={{ margin: 0, color: 'var(--pac-navy)', fontSize: 26 }}>Artigos</h1>
                <p style={{ margin: '4px 0 0', color: '#666', fontSize: 13 }}>{posts.length} artigos no banco</p>
              </div>
              <button onClick={() => setView('new')} style={btnNavy}>+ Novo artigo</button>
            </div>
            {loading ? <p>Carregando...</p> : (
              <div style={{ background: '#fff', borderRadius: 8, padding: '24px 28px', boxShadow: '0 2px 12px rgba(13,13,107,.06)' }}>
                <PostList posts={posts}
                  onEdit={(p) => { setEditing(p); setView('edit'); }}
                  onDelete={handleDelete} />
              </div>
            )}
          </>
        )}

        {(view === 'new' || view === 'edit') && (
          <div style={{ background: '#fff', borderRadius: 8, padding: '32px 36px', boxShadow: '0 2px 12px rgba(13,13,107,.06)' }}>
            <PostEditor
              post={view === 'edit' ? editing : null}
              onSave={() => { load(); setView('list'); }}
              onCancel={() => setView('list')} />
          </div>
        )}
      </div>
    </div>
  );
};

/* ─── Guard de autenticação ────────────────────────────────────── */
export const AdminRoute = () => {
  const [state, setState] = useState('checking'); // checking | auth | unauth
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('pac_token');
    if (!token) { setState('unauth'); return; }
    api.verifyToken().then(res => setState(res.valid ? 'auth' : 'unauth'));
  }, []);

  if (state === 'checking') return <div style={{ padding: 80, textAlign: 'center', color: '#888' }}>Verificando...</div>;
  if (state === 'unauth')   return <AdminLogin onLogin={() => setState('auth')} />;
  return <AdminPanel />;
};

/* ─── Estilos inline ───────────────────────────────────────────── */
const inputStyle = {
  fontFamily: 'inherit', fontSize: 14, padding: '11px 14px',
  border: '1px solid rgba(13,13,107,.2)', borderRadius: 4,
  color: '#000', outline: 'none', width: '100%', boxSizing: 'border-box',
  background: '#fff',
};
const btnNavy  = { background: 'var(--pac-navy)', color: '#fff', border: 0, padding: '11px 22px', borderRadius: 4, fontWeight: 700, cursor: 'pointer', fontSize: 13, fontFamily: 'inherit' };
const btnGhost = { background: 'transparent', color: 'var(--pac-navy)', border: '1px solid rgba(13,13,107,.3)', padding: '11px 22px', borderRadius: 4, fontWeight: 600, cursor: 'pointer', fontSize: 13, fontFamily: 'inherit' };
const btnSmall = { background: 'transparent', border: '1px solid rgba(13,13,107,.2)', color: 'var(--pac-navy)', padding: '5px 12px', borderRadius: 4, cursor: 'pointer', fontSize: 12 };
const errorBox = { background: '#fee', border: '1px solid #fcc', padding: '10px 14px', borderRadius: 4, fontSize: 13, marginBottom: 16, color: '#c00' };
const th       = { padding: '10px 12px', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--pac-navy)', opacity: .7 };
const td       = { padding: '12px 12px', verticalAlign: 'middle' };
const tagStyle = { background: 'var(--pac-off-white)', color: 'var(--pac-navy)', padding: '3px 8px', borderRadius: 3, fontSize: 11, fontWeight: 700, textTransform: 'uppercase' };
const Field    = ({ label, children, style }) => (
  <div style={style}>
    <label style={{ display: 'block', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--pac-navy)', marginBottom: 6, opacity: .7 }}>{label}</label>
    {children}
  </div>
);
