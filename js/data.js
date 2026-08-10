export const activities = [
  { name: 'Mike R.', desc: 'Completed trip #TR-8421', time: '2 min ago', color: 'green' },
  { name: 'Sarah K.', desc: 'Started route to Downtown', time: '14 min ago', color: 'cyan' },
  { name: 'David L.', desc: 'Vehicle #V-309 maintenance', time: '28 min ago', color: 'orange' },
  { name: 'Emma W.', desc: 'Delivered package #PK-112', time: '1h ago', color: '' },
  { name: 'James C.', desc: 'Fuel refill at Station #4', time: '2h ago', color: 'green' },
];

export const vehicles = [
  { id: 'V-102', model: 'Ford Transit', status: 'active', driver: 'Mike R.', fuel: 78, location: 'Zone A' },
  { id: 'V-205', model: 'Mercedes Sprinter', status: 'active', driver: 'Sarah K.', fuel: 92, location: 'Zone B' },
  { id: 'V-309', model: 'Volkswagen Crafter', status: 'idle', driver: 'David L.', fuel: 45, location: 'Depot' },
  { id: 'V-412', model: 'Renault Master', status: 'off', driver: null, fuel: 12, location: 'Garage' },
  { id: 'V-518', model: 'Iveco Daily', status: 'active', driver: 'Emma W.', fuel: 63, location: 'Zone C' },
  { id: 'V-623', model: 'MAN TGE', status: 'idle', driver: 'James C.', fuel: 51, location: 'Depot' },
];

export const drivers = [
  { id: 1, name: 'Mike R.', status: 'active', trips: 24, rating: 4.8, avatar: 'MR' },
  { id: 2, name: 'Sarah K.', status: 'active', trips: 31, rating: 4.9, avatar: 'SK' },
  { id: 3, name: 'David L.', status: 'idle', trips: 18, rating: 4.2, avatar: 'DL' },
  { id: 4, name: 'Emma W.', status: 'active', trips: 27, rating: 4.7, avatar: 'EW' },
  { id: 5, name: 'James C.', status: 'idle', trips: 12, rating: 4.0, avatar: 'JC' },
  { id: 6, name: 'Olivia P.', status: 'active', trips: 22, rating: 4.6, avatar: 'OP' },
];

export const trips = [
  { id: 'TR-8421', origin: 'Depot', destination: 'Zone A', driver: 'Mike R.', status: 'completed', date: '2026-08-10' },
  { id: 'TR-8532', origin: 'Zone B', destination: 'Zone C', driver: 'Sarah K.', status: 'in-progress', date: '2026-08-10' },
  { id: 'TR-8643', origin: 'Depot', destination: 'Zone D', driver: 'David L.', status: 'scheduled', date: '2026-08-11' },
  { id: 'TR-8754', origin: 'Zone C', destination: 'Depot', driver: 'Emma W.', status: 'completed', date: '2026-08-09' },
  { id: 'TR-8865', origin: 'Zone A', destination: 'Zone B', driver: 'James C.', status: 'pending', date: '2026-08-11' },
  { id: 'TR-8976', origin: 'Zone D', destination: 'Depot', driver: 'Olivia P.', status: 'in-progress', date: '2026-08-10' },
];

export const vehiclePositions = [
  { lat: 51.505, lng: -0.09, status: 'active' },
  { lat: 51.515, lng: -0.10, status: 'idle' },
  { lat: 51.495, lng: -0.08, status: 'active' },
  { lat: 51.510, lng: -0.12, status: 'active' },
  { lat: 51.520, lng: -0.07, status: 'idle' },
  { lat: 51.500, lng: -0.14, status: 'active' },
  { lat: 51.525, lng: -0.11, status: 'active' },
];