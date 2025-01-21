// __tests__/app.test.js
const { tambah } = require('../src/app');

describe('Fungsi tambah', () => {
  it('harus mengembalikan penjumlahan dua angka', () => {
    expect(tambah(1, 2)).toBe(3);
  });

  it('harus mengembalikan angka yang benar jika salah satu angka adalah 0', () => {
    expect(tambah(0, 5)).toBe(5);
  });
});
