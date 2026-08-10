import { trips } from './data.js';
import { highlightActivePage, statusDotClass, capitalize } from './app.js';

document.addEventListener('DOMContentLoaded', () => {
  highlightActivePage();
  const tbody = document.getElementById('tripTableBody');
  const search = document.getElementById('tripSearch');
  const countSpan = document.getElementById('tripCount');

  document.getElementById('tTotal').textContent = trips.length;
  document.getElementById('tCompleted').textContent = trips.filter(t => t.status === 'completed').length;
  document.getElementById('tInProgress').textContent = trips.filter(t => t.status === 'in-progress').length;
  document.getElementById('tPending').textContent = trips.filter(t => t.status === 'scheduled' || t.status === 'pending').length;

  new Chart(document.getElementById('tripStatusChart'), { type: 'doughnut', data: { labels: ['Completed', 'In Progress', 'Scheduled', 'Pending'], datasets: [{ data: [trips.filter(t => t.status === 'completed').length, trips.filter(t => t.status === 'in-progress').length, trips.filter(t => t.status === 'scheduled').length, trips.filter(t => t.status === 'pending').length], backgroundColor: ['#10b981', '#22d3ee', '#fb923c', '#fbbf24'] }] }, options: { cutout: '70%', plugins: { legend: { position: 'bottom', labels: { color: '#475569', usePointStyle: true } } } } });
  new Chart(document.getElementById('tripDriverChart'), { type: 'bar', data: { labels: [...new Set(trips.map(t => t.driver))], datasets: [{ label: 'Trips', data: [...new Set(trips.map(t => t.driver))].map(d => trips.filter(t => t.driver === d).length), backgroundColor: '#8b5cf6', borderRadius: 6 }] }, options: { plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.04)' } }, x: { grid: { display: false } } } } });

  let currentSort = { key: 'date', direction: 'desc' };
  function render(filter = '') {
    let filtered = trips.filter(t => t.id.includes(filter) || t.origin.includes(filter) || t.destination.includes(filter) || t.driver.includes(filter));
    filtered.sort((a, b) => { let va = a[currentSort.key] || '', vb = b[currentSort.key] || ''; if (typeof va === 'string') va = va.toLowerCase(); if (typeof vb === 'string') vb = vb.toLowerCase(); return va < vb ? (currentSort.direction === 'asc' ? -1 : 1) : va > vb ? (currentSort.direction === 'asc' ? 1 : -1) : 0; });
    tbody.innerHTML = filtered.map(t => `<tr><td style="font-weight:600;color:var(--text-primary);">${t.id}</td><td>${t.origin}</td><td>${t.destination}</td><td>${t.driver}</td><td><span class="dot ${statusDotClass(t.status)}"></span> ${capitalize(t.status)}</td><td>${t.date}</td></tr>`).join('');
    countSpan.textContent = `${filtered.length} trips`;
  }
  render();
  search.addEventListener('input', e => render(e.target.value));
  document.querySelectorAll('[data-sort]').forEach(th => th.addEventListener('click', () => { const key = th.dataset.sort; if (currentSort.key === key) currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc'; else { currentSort.key = key; currentSort.direction = 'asc'; } render(search.value); }));
});