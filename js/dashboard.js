import { activities, vehicles, vehiclePositions } from './data.js';
import { highlightActivePage, statusDotClass, capitalize } from './app.js';

document.addEventListener('DOMContentLoaded', () => {
  highlightActivePage();

  // Render Activities
  const activityList = document.getElementById('activityList');
  activities.forEach(item => {
    const div = document.createElement('div');
    div.className = 'activity-item';
    div.innerHTML = `<div class="av ${item.color}">${item.name.charAt(0)}</div><div class="info"><div class="name">${item.name}</div><div class="desc">${item.desc}</div></div><div class="time">${item.time}</div>`;
    activityList.appendChild(div);
  });

  // Render Vehicle Preview
  const vehicleGrid = document.getElementById('vehicleGrid');
  vehicles.slice(0, 4).forEach(v => {
    const card = document.createElement('div');
    card.className = 'vehicle-card';
    card.innerHTML = `<div class="v-icon"><i class="fas fa-truck"></i></div><div class="v-info"><div class="v-name">${v.id}</div><div class="v-status"><span class="dot ${statusDotClass(v.status)}"></span> ${capitalize(v.status)}</div></div>`;
    vehicleGrid.appendChild(card);
  });

  // Charts
  new Chart(document.getElementById('statusChart'), { type: 'doughnut', data: { labels: ['Active', 'Idle', 'Maintenance', 'Off'], datasets: [{ data: [24, 8, 5, 5], backgroundColor: ['#6366f1', '#22d3ee', '#fb923c', '#94a3b8'], borderWidth: 0 }] }, options: { cutout: '70%', plugins: { legend: { position: 'bottom', labels: { color: '#475569', usePointStyle: true } } } } });
  new Chart(document.getElementById('tripsChart'), { type: 'bar', data: { labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], datasets: [{ label: 'Trips', data: [28, 34, 42, 38, 47, 52, 41], backgroundColor: 'rgba(99,102,241,0.6)', borderRadius: 6 }] }, options: { plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.04)' } }, x: { grid: { display: false } } } } });
  new Chart(document.getElementById('revenueChart'), { type: 'line', data: { labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], datasets: [{ label: 'Revenue (k$)', data: [12, 15, 14, 18, 22, 20], borderColor: '#10b981', backgroundColor: 'rgba(16,185,129,0.1)', fill: true, tension: 0.3 }] }, options: { plugins: { legend: { labels: { color: '#475569' } } }, scales: { y: { grid: { color: 'rgba(0,0,0,0.04)' } }, x: { grid: { display: false } } } } });
  new Chart(document.getElementById('utilizationChart'), { type: 'doughnut', data: { labels: ['Used', 'Available'], datasets: [{ data: [78, 22], backgroundColor: ['#6366f1', '#e2e8f0'], borderWidth: 0 }] }, options: { cutout: '70%', plugins: { legend: { position: 'bottom', labels: { color: '#475569', usePointStyle: true } } } } });
  new Chart(document.getElementById('fuelChart'), { type: 'bar', data: { labels: ['V-102', 'V-205', 'V-309', 'V-412', 'V-518', 'V-623'], datasets: [{ label: 'Fuel %', data: [78, 92, 45, 12, 63, 51], backgroundColor: ['#6366f1', '#8b5cf6', '#22d3ee', '#fb923c', '#10b981', '#fbbf24'], borderRadius: 6 }] }, options: { plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, max: 100, grid: { color: 'rgba(0,0,0,0.04)' } }, x: { grid: { display: false } } } } });

  // Map
  const map = L.map('fleetMap').setView([51.505, -0.09], 13);
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', { attribution: '&copy; OpenStreetMap, &copy; CartoDB' }).addTo(map);
  let activeCount = 0;
  vehiclePositions.forEach(pos => {
    if (pos.status === 'active') activeCount++;
    const color = pos.status === 'active' ? '#10b981' : '#fb923c';
    const icon = L.divIcon({ className: 'custom-marker', html: `<div style="background:${color};width:100%;height:100%;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;border:2px solid #fff;">●</div>`, iconSize: [32, 32], iconAnchor: [16, 16] });
    L.marker([pos.lat, pos.lng], { icon }).addTo(map).bindPopup(`Status: <strong>${pos.status}</strong>`);
  });
  document.getElementById('onlineCount').textContent = activeCount;

  // Simulate counters
  setInterval(() => { document.getElementById('onlineCount').textContent = Math.floor(Math.random() * 6) + 8; }, 10000);
});