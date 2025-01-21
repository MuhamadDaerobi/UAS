// Daftar menu yang ada (menu bisa datang dari menu.js atau API)
const menuItems = [
    { name: "Cilok Polos", price: 5000 },
    { name: "Cilok Isi Keju", price: 7000 },
    { name: "Cilok Bumbu Kacang", price: 8000 },
    { name: "Cilok Ayam", price: 9000 },
    { name: "Cilok Sate", price: 10000 },
    { name: "Cilok Pedas", price: 12000 }
  ];
  
  // Function untuk menambahkan menu ke dalam dropdown
  function populateMenu() {
    const menuSelect = document.getElementById('menu');
    menuItems.forEach(item => {
      const option = document.createElement('option');
      option.value = item.name;
      option.textContent = `${item.name} - Rp ${item.price}`;
      menuSelect.appendChild(option);
    });
  }
  
  // Menghitung total harga berdasarkan pilihan menu dan jumlah
  document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const selectedMenu = document.getElementById('menu').value;
    const quantity = document.getElementById('quantity').value;
    const selectedItem = menuItems.find(item => item.name === selectedMenu);
  
    if (selectedItem) {
      const totalPrice = selectedItem.price * quantity;
      document.getElementById('total-price').textContent = `Total Harga: Rp ${totalPrice}`;
    } else {
      document.getElementById('total-price').textContent = "Pilih menu terlebih dahulu.";
    }
  });
  
  // Memanggil function untuk mengisi dropdown menu saat halaman dimuat
  populateMenu();
  