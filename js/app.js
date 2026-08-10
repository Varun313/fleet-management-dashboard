export function highlightActivePage() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sidebar nav a').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === path);
  });
}

export function statusDotClass(status) {
  const map = { 'active': 'active', 'idle': 'idle', 'off': 'off', 'in-progress': 'in-progress', 'completed': 'completed', 'scheduled': 'scheduled', 'pending': 'pending' };
  return map[status] || 'off';
}

export function capitalize(str) { return str.charAt(0).toUpperCase() + str.slice(1); }

// Hamburger toggle
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('hamburger')?.addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
  });
  document.querySelectorAll('.sidebar nav a').forEach(link => {
    link.addEventListener('click', () => document.getElementById('sidebar').classList.remove('open'));
  });
});