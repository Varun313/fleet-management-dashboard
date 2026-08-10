import { highlightActivePage } from './app.js';

document.addEventListener('DOMContentLoaded', () => {
  highlightActivePage();

  // KPI simulation
  setInterval(() => {
    document.getElementById('aRevenue').textContent = `$${Math.floor(Math.random() * 100 + 250)}k`;
    document.getElementById('aCost').textContent = `$${Math.floor(Math.random() * 50 + 90)}k`;
  }, 8000);

  new Chart(document.getElementById('revCostChart'), { type: 'line', data: { labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], datasets: [{ label: 'Revenue', data: [12, 15, 14, 18, 22, 20], borderColor: '#10b981', backgroundColor: 'rgba(16,185,129,0.1)', fill: true, tension: 0.3 }, { label: 'Cost', data: [8, 9, 8, 11, 13, 12], borderColor: '#ef4444', backgroundColor: 'rgba(239,68,68,0.1)', fill: true, tension: 0.3 }] }, options: { plugins: { legend: { position: 'top', labels: { color: '#475569' } } }, scales: { y: { grid: { color: 'rgba(0,0,0,0.04)' } }, x: { grid: { display: false } } } } });
  new Chart(document.getElementById('analyticsStatusChart'), { type: 'doughnut', data: { labels: ['Completed', 'In Progress', 'Scheduled', 'Pending'], datasets: [{ data: [25, 12, 8, 5], backgroundColor: ['#10b981', '#22d3ee', '#fb923c', '#fbbf24'] }] }, options: { cutout: '70%', plugins: { legend: { position: 'bottom', labels: { color: '#475569', usePointStyle: true } } } } });
  new Chart(document.getElementById('topDriversChart'), { type: 'bar', data: { labels: ['Mike R.', 'Sarah K.', 'Emma W.', 'Olivia P.', 'David L.'], datasets: [{ label: 'Trips', data: [24, 31, 27, 22, 18], backgroundColor: '#8b5cf6', borderRadius: 6 }] }, options: { plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.04)' } }, x: { grid: { display: false } } } } });
  new Chart(document.getElementById('analyticsFuelChart'), { type: 'line', data: { labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], datasets: [{ label: 'L/100km', data: [9.2, 8.7, 8.4, 8.1, 7.8, 7.5], borderColor: '#06b6d4', backgroundColor: 'rgba(6,182,212,0.1)', fill: true, tension: 0.3 }] }, options: { plugins: { legend: { labels: { color: '#475569' } } }, scales: { y: { grid: { color: 'rgba(0,0,0,0.04)' } }, x: { grid: { display: false } } } } });
});