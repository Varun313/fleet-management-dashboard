import { vehicles } from './data.js';
import { highlightActivePage, statusDotClass, capitalize } from './app.js';

document.addEventListener('DOMContentLoaded', () => {
  highlightActivePage();
  const tbody = document.getElementById('vehicleTableBody');
  const search = document.getElementById('vehicleSearch');
  const countSpan = document.getElementById('vehicleCount');

  // Update stats
  document.getElementById('vTotal').textContent = vehicles.length;
  document.getElementById('vActive').textContent = vehicles.filter(v => v.status === 'active').length;
  document.getElementById('vIdle').textContent = vehicles.filter(v => v.status === 'idle').length;
  document.getElementById('vOff').textContent = vehicles.filter(v => v.status === 'off').length;

  // Charts
  const types = ['Ford Transit', 'Mercedes Sprinter', 'Volkswagen Crafter', 'Renault Master', 'Iveco Daily', 'MAN TGE'];
  const typeCounts = types.map(t => vehicles.filter(v => v.model === t).length);
  new Chart(document.getElementById('typeChart'), { type: 'pie', data: { labels: types, datasets: [{ data: typeCounts, backgroundColor: ['#6366f1', '#8b5cf6', '#22d3ee', '#fb923c', '#10b981', '#fbbf24'] }] }, options: { plugins: { legend: { position: 'bottom', labels: { color: '#475569', usePointStyle: true } } } } });
  new Chart(document.getElementById('statusBarChart'), { type: 'bar', data: { labels: ['Active', 'Idle', 'Off'], datasets: [{ data: [vehicles.filter(v => v.status === 'active').length, vehicles.filter(v => v.status === 'idle').length, vehicles.filter(v => v.status === 'off').length], backgroundColor: ['#10b981', '#fb923c', '#94a3b8'] }] }, options: { plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.04)' } }, x: { grid: { display: false } } } } });

  function render(filter = '') {
    const filtered = vehicles.filter(v => v.id.toLowerCase().includes(filter.toLowerCase()) || v.model.toLowerCase().includes(filter.toLowerCase()) || (v.driver && v.driver.toLowerCase().includes(filter.toLowerCase())));
    tbody.innerHTML = filtered.map(v => `<tr><td style="font-weight:600;color:var(--text-primary);">${v.id}</td><td>${v.model}</td><td><span class="dot ${statusDotClass(v.status)}"></span> ${capitalize(v.status)}</td><td>${v.driver || '—'}</td><td><div style="display:flex;align-items:center;gap:8px;"><div style="background:var(--bg-primary);border-radius:10px;height:6px;width:60px;"><div style="background:${v.fuel>60?'#10b981':v.fuel>30?'#fb923c':'#ef4444'};width:${v.fuel}%;height:6px;border-radius:10px;"></div></div>${v.fuel}%</div></td><td>${v.location}</td><td><button style="background:transparent;border:none;color:var(--text-muted);cursor:pointer;"><i class="fas fa-edit"></i></button></td></tr>`).join('');
    countSpan.textContent = `${filtered.length} vehicles`;
  }
  render();
  search.addEventListener('input', e => render(e.target.value));
});