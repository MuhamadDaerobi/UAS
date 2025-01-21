// Ganti export dengan module.exports
function getMenu() {
    return [
      { name: "Cilok Polos", price: 5000 },
      { name: "Cilok Isi Keju", price: 7000 },
      { name: "Cilok Bumbu Kacang", price: 8000 },
      { name: "Cilok Ayam", price: 9000 },
      { name: "Cilok Sate", price: 10000 },
      { name: "Cilok Pedas", price: 12000 }
    ];
  }
  
  // Ganti export function dengan module.exports
  module.exports = { getMenu };
  