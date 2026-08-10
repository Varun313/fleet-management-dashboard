import { drivers } from './data.js';
import { highlightActivePage, statusDotClass, capitalize } from './app.js';

document.addEventListener('DOMContentLoaded', () => {
  highlightActivePage();
  const grid = document.getElementById('driverGrid');
  const search = document.getElementById('driverSearch');

  document.getElementById('dTotal').textContent = drivers.length;
  document.getElementById('dActive').textContent = drivers.filter(d => d.status === 'active').length;
  document.getElementById('dOnTrip').textContent = drivers.filter(d => d.status === 'active').length; // Simulate on trip
  document.getElementById('dRating').textContent = (drivers.reduce((acc, d) => acc + d.rating, 0) / drivers.length).toFixed(1);

  new Chart(document.getElementById('driverTripChart'), { type: 'bar', data: { labels: drivers.map(d => d.name), datasets: [{ label: 'Trips', data: drivers.map(d => d.trips), backgroundColor: '#6366f1', borderRadius: 6 }] }, options: { plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.04)' } }, x: { grid: { display: false } } } } });
  new Chart(document.getElementById('driverStatusChart'), { type: 'doughnut', data: { labels: ['Active', 'Idle'], datasets: [{ data: [drivers.filter(d => d.status === 'active').length, drivers.filter(d => d.status === 'idle').length], backgroundColor: ['#10b981', '#fb923c'] }] }, options: { cutout: '70%', plugins: { legend: { position: 'bottom', labels: { color: '#475569', usePointStyle: true } } } } });

  function render(filter = '') {
    const filtered = drivers.filter(d => d.name.toLowerCase().includes(filter.toLowerCase()));
    grid.innerHTML = filtered.map(d => `<div class="vehicle-card"><div class="v-icon">${d.avatar}</div><div class="v-info"><div class="v-name">${d.name}</div><div class="v-status"><span class="dot ${statusDotClass(d.status)}"></span> ${capitalize(d.status)}</div><div style="display:flex;gap:12px;margin-top:4px;font-size:13px;color:var(--text-secondary);"><span><i class="fas fa-route"></i> ${d.trips} trips</span><span><i class="fas fa-star" style="color:#fbbf24;"></i> ${d.rating}</span></div></div></div>`).join('');
  }
  render();
  search.addEventListener('input', e => render(e.target.value));
});