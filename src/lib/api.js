const BASE = '/api';

const authHeaders = () => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${localStorage.getItem('pac_token') || ''}`,
});

export const api = {
  // ── Posts públicos ──────────────────────────────────────────
  getPosts: (category) => {
    const q = category && category !== 'Todos' ? `?category=${encodeURIComponent(category)}` : '';
    return fetch(`${BASE}/posts.php${q}`).then(r => r.json());
  },
  getPostsPreview: (limit = 6) =>
    fetch(`${BASE}/posts.php?limit=${limit}`).then(r => r.json()),
  getPost: (slug) =>
    fetch(`${BASE}/posts.php?slug=${slug}`).then(r => r.json()),

  // ── Auth ────────────────────────────────────────────────────
  login: (email, password) =>
    fetch(`${BASE}/auth.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    }).then(r => r.json()),

  verifyToken: () =>
    fetch(`${BASE}/auth.php`, { headers: authHeaders() }).then(r => r.json()),

  // ── Admin: CRUD ─────────────────────────────────────────────
  adminGetPosts: () =>
    fetch(`${BASE}/posts.php`, { headers: authHeaders() }).then(r => r.json()),

  createPost: (data) =>
    fetch(`${BASE}/posts.php`, {
      method: 'POST',
      headers: authHeaders(),
      body: JSON.stringify(data),
    }).then(r => r.json()),

  updatePost: (slug, data) =>
    fetch(`${BASE}/posts.php?slug=${slug}`, {
      method: 'PUT',
      headers: authHeaders(),
      body: JSON.stringify(data),
    }).then(r => r.json()),

  deletePost: (slug) =>
    fetch(`${BASE}/posts.php?slug=${slug}`, {
      method: 'DELETE',
      headers: authHeaders(),
    }).then(r => r.json()),
};
