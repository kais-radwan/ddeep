// Initialize ddeep
var ddeep = require('./constructor/init');

// Loaded window->Gun
window.addEventListener('load', () => {
  window.ddeep.sea = window.SEA;
  ddeep.events.emit('load');
});

// export
window.ddeep = ddeep;
export default ddeep;