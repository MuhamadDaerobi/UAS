// Ganti import dengan require
const { getMenu } = require('../src/menu');

describe('Fungsi getMenu', () => {
  it('harus mengembalikan daftar menu cilok', () => {
    expect(getMenu()).toEqual([
      { name: "Cilok Polos", price: 5000 },
      { name: "Cilok Isi Keju", price: 7000 },
      { name: "Cilok Bumbu Kacang", price: 8000 },
      { name: "Cilok Ayam", price: 9000 },
      { name: "Cilok Sate", price: 10000 },
      { name: "Cilok Pedas", price: 12000 }
    ]);
  });
});
