// Rastreia uma visita — chamado a cada mudança de rota
export const trackPage = (page, title) => {
  // Não rastreia em desenvolvimento local
  if (import.meta.env.DEV) return;
  // Não rastreia o próprio admin
  if (page.startsWith('/admin')) return;

  fetch('/api/analytics.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      page,
      title: title || document.title,
      referrer: document.referrer || '',
    }),
  }).catch(() => {}); // falha silenciosa
};
