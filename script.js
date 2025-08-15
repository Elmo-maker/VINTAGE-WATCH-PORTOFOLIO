
// Fungsi scroll ke section halaman
function scrollToSection(id, event) {
  event.preventDefault();
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
    // Update active class pada menu
    const links = document.querySelectorAll('nav a');
    links.forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');
  }
}

// Filter kategori jam tangan
function filterCategory(category) {
  const cards = document.querySelectorAll('.watch-card');
  const buttons = document.querySelectorAll('.category-bar button');

  buttons.forEach(btn => {
    if (btn.textContent.toLowerCase() === category || (category === 'all' && btn.textContent.toLowerCase() === 'all')) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  cards.forEach(card => {
    const categories = card.getAttribute('data-category').toLowerCase().split(' ');
    if (category === 'all' || categories.includes(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });

  document.getElementById("searchInput").value = "";
}

// Cari jam tangan
function searchWatch() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let watches = document.querySelectorAll(".watch-card");

  watches.forEach(watch => {
    let name = watch.querySelector("p").textContent.toLowerCase();
    if (name.includes(input)) {
      watch.style.display = "block";
    } else {
      watch.style.display = "none";
    }
  });

  // Reset tombol kategori aktif saat pencarian
  let buttons = document.querySelectorAll('.category-bar button');
  buttons.forEach(btn => btn.classList.remove('active'));
}

// Fungsi navigasi ke halaman detail produk
function goToProduct(id) {
  window.location.href = `product.html?id=${id}`;
}

// Fungsi tombol beli via WhatsApp
function buyViaWhatsApp(message) {
  const phone = '6281234567890'; // Ganti dengan nomor WhatsApp kamu (format internasional tanpa +)
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}
