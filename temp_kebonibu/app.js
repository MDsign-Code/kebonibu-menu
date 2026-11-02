const menuData = [
  {
    id: "special",
    page: "HALAMAN 2",
    title: "MENU SPECIAL",
    subtitle: "Konro Bakar / Sup Konro & Gulai Kepala Kambing",
    isHero: true,
    items: [
      { 
        name: "Konro Bakar / Sup Konro", 
        price: 98, 
        sub: "Pilihan: Iga Bakar bumbu kacang gurih manis atau Sup Iga kuah rempah kluwek khas Kebonibu", 
        badge: "Best Price",
        image: "images/konro-bakar.jpg"
      },
      { 
        name: "Gulai Kepala Kambing Utuh", 
        price: 198, 
        sub: "Porsi istimewa utuh kepala & kaki dengan kuah gulai rempah kental gurih khas Kebonibu", 
        badge: "Signature Menu",
        image: "images/gulai-kepala-kambing.jpg"
      }
    ]
  },
  {
    id: "kambing-sapi",
    page: "HALAMAN 3",
    title: "KAMBING DAN SAPI",
    subtitle: "Olahan Rempah Tradisional",
    items: [
      { name: "Tongseng Kepala & Kaki Kambing", price: 65, sub: "Rempah tongseng gurih pedas manis" },
      { name: "Tongseng Kambing / Sapi", price: 55, sub: "Daging empuk berpadu kuah tongseng" },
      { name: "Gulai Kambing Muda", price: 55, sub: "Kambing muda empuk tanpa bau prengus" },
      { name: "Sup Kambing Muda", price: 55, sub: "Kuah rempah bening segar" },
      { name: "Sate Kambing", price: 48, sub: "Bumbu kecap cabai rawit & bawang merah" }
    ]
  },
  {
    id: "timbel",
    page: "HALAMAN 4",
    title: "PAKET TIMBEL KOMPLIT",
    desc: "Lengkap: Nasi Timbel, Sayur Asam, Ikan Asin, Tahu, Tempe, Sambal, Lalapan & Teh Tawar Panas",
    items: [
      { name: "Timbel Ayam Bakar", price: 47 },
      { name: "Timbel Ayam Goreng", price: 47 },
      { name: "Timbel Nila Bakar", price: 47 },
      { name: "Timbel Nila Goreng", price: 47 },
      { name: "Timbel Lele", price: 47 },
      { name: "Timbel Udang Tepung", price: 50 },
      { name: "Timbel Cumi Tepung", price: 50 },
      { name: "Timbel Empal", price: 50 },
      { name: "Timbel Ayam Kamp (Baru)", price: 53 },
      { name: "Timbel Bebek (Baru)", price: 53 },
      { name: "Timbel Sate Taican", price: 35 }
    ]
  },
  {
    id: "steak-sei",
    page: "HALAMAN 5",
    title: "STEAK & SEI",
    items: [
      { name: "Tenderloin Meltique Steak", price: 125 },
      { name: "Sirloin Meltique Steak", price: 135 },
      { 
        name: "Chiken Steak", 
        variant: "(Mushroom/Blackpepper/BBQ)",
        fullName: "Chiken Steak (Mushroom/Blackpepper/BBQ)",
        price: 65 
      },
      { 
        name: "Wagyu Nasi Sambalado", 
        variant: "(Geprek/Matah/Korek)",
        fullName: "Wagyu Nasi Sambalado (Geprek/Matah/Korek)",
        price: 55 
      },
      { name: "Paket Sei Sapi Nasi", price: 55 },
      { name: "Nasi Goreng Sei", price: 50 },
      { name: "Spaghetti Sei", price: 50 }
    ]
  },
  {
    id: "bbq",
    page: "HALAMAN 5",
    title: "BARBEQUE & GRILL",
    isBBQ: true,
    items: [
      { 
        name: "Barbeque & Grill Reguler", 
        price: 315, 
        portion: "Paket (2-3 Orang)",
        list: ["250 g Australian Sirloin Slice", "250 g Wagyu Saikoro", "250 g Beef Short Plate", "250 g French Fries", "250 g Mix Vegetables", "3 Varian Sauce"]
      },
      { 
        name: "Barbeque & Grill Super", 
        price: 470, 
        portion: "Paket (4-5 Orang)",
        list: ["500 g Australian Sirloin Slice", "500 g Wagyu Saikoro", "500 g Beef Short Plate", "500 g French Fries", "500 g Mix Vegetables", "3 Varian Sauce"]
      }
    ]
  },
  {
    id: "seafood",
    page: "HALAMAN 6",
    title: "MASAKAN SEAFOOD",
    subtitle: "Gurame, Nila, Lele, Cumi, Udang & Paket Kikil",
    items: [
      { name: "Gurame Bakar", price: 68 },
      { name: "Gurame Jimbaran", price: 72 },
      { name: "Gurame Pecak", price: 68 },
      { name: "Sup Ikan Gurame", price: 68 },
      { name: "Gurame Asam Manis", price: 72 },
      { name: "Gurame Saus Padang", price: 72 },
      { name: "Nila Bakar", price: 45 },
      { name: "Nila Pecak", price: 50 },
      { name: "Sup Ikan Nila", price: 50 },
      { name: "Nila Asam Manis", price: 50 },
      { name: "Nila Saus Padang", price: 50 },
      { name: "Nila Bakar Jimbaran", price: 50 },
      { name: "Lele Goreng Original", price: 23 },
      { name: "Lele Sambal Matah", price: 25 },
      { name: "Lele Sambal Kebon", price: 25 },
      { name: "Cumi Bakar", price: 55 },
      { name: "Cumi Saus Tiram", price: 60 },
      { name: "Cumi Asam Manis", price: 60 },
      { name: "Cumi Saus Padang", price: 60 },
      { name: "Udang Bakar", price: 55 },
      { name: "Udang Saus Tiram", price: 65 },
      { name: "Udang Asam Manis", price: 65 },
      { name: "Udang Saus Padang", price: 65 },
      { name: "Paket Kikil Cbk Sambal Ijo", price: 45, sub: "Sudah termasuk Nasi" },
      { name: "Paket Kikil Gulai", price: 45, sub: "Sudah termasuk Nasi" }
    ]
  },
  {
    id: "ayam-sayur",
    page: "HALAMAN 7",
    title: "MASAKAN AYAM, SAYUR & SOTO",
    items: [
      { name: "Nasi Ayam Karage Smbl Matah", price: 35 },
      { name: "Nasi Ay Karage Smbl Gprk Kebon", price: 35 },
      { name: "Nasi Ayam Karage Salted Egg", price: 37 },
      { name: "Nasi Ayam Karage Mozarella", price: 37 },
      { name: "Ayam Kampung Goreng", price: 45 },
      { name: "Ayam Kampung Sambal Matah", price: 45 },
      { name: "Ayam Kampung Sambal Geprek", price: 45 },
      { name: "Ayam Kampung Pecak", price: 47 },
      { name: "Ayam Kampung Goreng + Nasi", price: 54 },
      { name: "Ayam Bakar Madu", price: 29 },
      { name: "Ayam Goreng", price: 29 },
      { name: "Ayam Saus Tiram (isi 5)", price: 56 },
      { name: "Ayam Saus Padang (isi 5)", price: 56 },
      { name: "Ayam Saus Asam Manis (isi 5)", price: 56 },
      { name: "Kangkung Cah Bawang Putih", price: 28 },
      { name: "Kangkung Blacan", price: 30 },
      { name: "Toge Ikan Asin", price: 30 },
      { name: "Capcai", price: 30 },
      { name: "Terong Sambal Geprek", price: 25 },
      { name: "Tumis Buncis", price: 28 },
      { name: "Karedok", price: 28 },
      { name: "Tumis Genjer Polos", price: 25 },
      { name: "Tumis Genjer Blacan", price: 28 },
      { name: "Sayur Asem", price: 25 },
      { name: "Soto Ayam Kampung", price: 30 },
      { name: "Soto Ayam Kampung + Nasi", price: 35 },
      { name: "Soto Daging Sapi", price: 35 },
      { name: "Soto Daging Sapi + Nasi", price: 39 },
      { name: "Nasi Putih", price: 9 },
      { name: "Nasi Liwet", price: 10 },
      { name: "Nasi Goreng Kampung", price: 35 },
      { name: "Nasi Goreng Oriental", price: 37 },
      { name: "Nasi Goreng Ikan Asin", price: 37 }
    ]
  },
  {
    id: "snack",
    page: "HALAMAN 8",
    title: "SNACK, PISANG, ROTI & BURGER",
    items: [
      { name: "Risoles Mayones", price: 35 },
      { name: "Cilok", price: 23 },
      { name: "Siomay", price: 39 },
      { name: "Batagor", price: 39 },
      { name: "Chicken Wing", price: 37 },
      { name: "Perkedel", price: 4 },
      { name: "Bakwan", price: 18 },
      { name: "Mendoan", price: 18 },
      { name: "Mozarella Stick", price: 35 },
      { name: "Dimsum Mix", price: 27 },
      { name: "Dimsum Saus Mentai", price: 29 },
      { name: "French Fries", price: 27 },
      { name: "Sistagor", price: 37 },
      { name: "Union Ring", price: 35 },
      { name: "Singkong Goreng Original", price: 15 },
      { name: "Singkong Goreng Keju", price: 20 },
      { name: "Pisang Keju Susu (Goreng/Bakar)", price: 28 },
      { name: "Pisang Keju Coklat (Goreng/Bakar)", price: 28 },
      { name: "Pisang Keju Coklat Susu (Goreng/Bakar)", price: 31 },
      { name: "Pisang Ovomaltine (Goreng/Bakar)", price: 31 },
      { name: "Pisang Nutella (Goreng/Bakar)", price: 33 },
      { name: "Pisang Goreng ORI", price: 20 },
      { name: "Roti Bakar Keju Susu", price: 28 },
      { name: "Roti Bakar Keju Coklat", price: 28 },
      { name: "Roti Bakar Keju Coklat Susu", price: 31 },
      { name: "Roti Bakar Ovomaltine", price: 31 },
      { name: "Roti Bakar Nutella", price: 33 },
      { name: "Blackpepper Burger", price: 50 },
      { name: "Creamy Mushroom Burger", price: 50 },
      { name: "Extra Keju", price: 7 },
      { name: "Extra Telur", price: 8 },
      { name: "Kids Package Katsu", price: 39 },
      { name: "Kids Package Eggroll", price: 35 },
      { name: "Kids Package Nugget", price: 35 },
      { name: "Kids Package Ekado", price: 37 }
    ]
  },
  {
    id: "minuman",
    page: "HALAMAN 9",
    title: "MINUMAN, KOPI & WEDANG",
    items: [
      { name: "Espresso (Hot)", price: 18 },
      { name: "Black Coffee (Ice)", price: 27 },
      { name: "Kopi Susu Gula Aren (Ice)", price: 27 },
      { name: "Dolce Latte (Ice)", price: 27 },
      { name: "Caramel / Hazelnut Latte (Ice)", price: 29 },
      { name: "Cappuccino (Hot/Ice)", price: 27 },
      { name: "Avocado Coffee (Ice)", price: 30 },
      { name: "Sea Salt Latte (Ice)", price: 29 },
      { name: "Teh Manis (Ice)", price: 10 },
      { name: "Lemon Tea (Ice)", price: 25 },
      { name: "Thai Tea (Ice)", price: 30 },
      { name: "Teh Poci (Hot)", price: 27 },
      { name: "Wedang Jahe", price: 8 },
      { name: "Wedang Uwuh", price: 15 },
      { name: "Bir Pletok", price: 15 },
      { name: "Fresh Juice Alpukat", price: 29 },
      { name: "Fresh Juice Mangga", price: 29 },
      { name: "Leci Yakult", price: 27 },
      { name: "Mojitoberry Squash", price: 29 }
    ]
  }
];

let cart = {};

function renderMenu() {
  const container = document.getElementById('menuSectionsContainer');
  let html = '';

  menuData.forEach(section => {
    html += `
      <section class="menu-page-board" id="sec-${section.id}" data-cat="${section.id}">
        <div class="board-header">
          <span class="page-badge">${section.page}</span>
          <div class="board-title">${section.title}</div>
          ${section.subtitle ? `<div class="board-script-subtitle">${section.subtitle}</div>` : ''}
          ${section.desc ? `<p class="board-desc">${section.desc}</p>` : ''}
        </div>
    `;

    if (section.isHero) {
      html += `<div class="special-cards-container">`;
      section.items.forEach(it => {
        html += `
          <div class="special-card-hero">
            ${it.image ? `
              <div class="special-hero-img-wrap">
                <img src="${it.image}" alt="${it.name}" class="special-hero-img" loading="lazy">
                <span class="badge-best-price img-badge-overlay">${it.badge || 'Best Price'}</span>
              </div>
            ` : ''}
            <div>
              <div class="special-script">${it.name}</div>
              <p style="color:#a5adb8; font-size:12.5px; margin: 6px 0 10px; line-height:1.4;">${it.sub || ''}</p>
            </div>
            <div>
              <div class="special-price-giant">${it.price}K</div>
              ${!it.image ? `<div class="badge-best-price">${it.badge || 'Best Price'}</div>` : ''}
              <button class="cart-btn" style="width:100%; justify-content:center; margin-top:10px;" onclick="addToCart('${it.name}', ${it.price})">+ Pesan Sekarang</button>
            </div>
          </div>
        `;
      });
      html += `</div>`;
    } else if (section.isBBQ) {
      html += `<div class="special-cards-container">`;
      section.items.forEach(it => {
        html += `
          <div class="bbq-card">
            <div>
              <div class="board-script-subtitle">${it.name}</div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin:8px 0; border-bottom:1px dashed #3a404b; padding-bottom:6px;">
                <span style="color:#aaa; font-weight:700; font-size:12px;">${it.portion}</span>
                <span style="color:var(--gold); font-weight:800; font-size:20px;">${it.price}K</span>
              </div>
              <ul style="color:#cbd2de; font-size:13px; line-height:1.8; list-style:none;">
                ${it.list.map(l => `<li>🥩 ${l}</li>`).join('')}
              </ul>
            </div>
            <div>
              <div class="free-tea-banner">Free Ice Tea</div>
              <button class="cart-btn" style="width:100%; justify-content:center;" onclick="addToCart('${it.name}', ${it.price})">+ Pilih Paket</button>
            </div>
          </div>
        `;
      });
      html += `</div>`;
    } else {
      html += `<div class="menu-grid">`;
      section.items.forEach(it => {
        const orderName = (it.fullName || it.name).replace(/'/g, "\\'");
        html += `
          <div class="menu-item-row" data-name="${(it.fullName || it.name).toLowerCase()}">
            <div>
              <div class="item-name">
                ${it.name} ${it.variant ? `<span class="item-variant">${it.variant}</span>` : ''}
              </div>
              ${it.sub ? `<div class="item-sub">${it.sub}</div>` : ''}
            </div>
            <div class="price-box">
              <span class="price-num">${it.price}K</span>
              <button class="btn-add" onclick="addToCart('${orderName}', ${it.price})">+</button>
            </div>
          </div>
        `;
      });
      html += `</div>`;
    }

    html += `</section>`;
  });

  container.innerHTML = html;
}

function addToCart(name, priceInK) {
  if (cart[name]) {
    cart[name].qty += 1;
  } else {
    cart[name] = { name: name, price: priceInK * 1000, qty: 1 };
  }
  updateCartUI();
  showToast(`+ ${name}`);
}

function changeQty(name, delta) {
  if (!cart[name]) return;
  cart[name].qty += delta;
  if (cart[name].qty <= 0) delete cart[name];
  updateCartUI();
}

function updateCartUI() {
  const listEl = document.getElementById('cartItemsList');
  const countEl = document.getElementById('cartCount');
  const totalEl = document.getElementById('cartTotalPrice');
  
  const items = Object.values(cart);
  let totalQty = 0;
  let totalPrice = 0;

  if (items.length === 0) {
    listEl.innerHTML = '<p style="color:#777; text-align:center; padding:20px 0; font-size:13px;">Belum ada menu yang dipilih.</p>';
  } else {
    let html = '';
    items.forEach(it => {
      totalQty += it.qty;
      const sub = it.price * it.qty;
      totalPrice += sub;
      html += `
        <div class="cart-item-line">
          <div>
            <b>${it.name}</b>
            <div style="color:var(--gold); font-size:12px;">Rp ${it.price.toLocaleString('id-ID')} x ${it.qty}</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <button class="btn-add" style="width:24px; height:24px;" onclick="changeQty('${it.name}', -1)">-</button>
            <span style="font-weight:bold; min-width:18px; text-align:center;">${it.qty}</span>
            <button class="btn-add" style="width:24px; height:24px;" onclick="changeQty('${it.name}', 1)">+</button>
          </div>
        </div>
      `;
    });
    listEl.innerHTML = html;
  }

  countEl.innerText = totalQty;
  totalEl.innerText = `Rp ${totalPrice.toLocaleString('id-ID')}`;
}

function toggleCart(open) {
  document.getElementById('cartDrawer').classList.toggle('open', open);
  document.getElementById('cartBackdrop').classList.toggle('active', open);
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.innerText = msg;
  toast.style.opacity = '1';
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => { toast.style.opacity = '0'; }, 1400);
}

function checkoutWA() {
  const items = Object.values(cart);
  if (items.length === 0) {
    alert('Keranjang belanja masih kosong!');
    return;
  }

  const table = document.getElementById('custTable').value.trim() || 'Takeaway';
  const notes = document.getElementById('custNotes').value.trim() || '-';

  let text = `*PESANAN MENU DIGITAL - KEBONIBU*%0A`;
  text += `📍 *Meja*: ${encodeURIComponent(table)}%0A`;
  text += `📝 *Catatan*: ${encodeURIComponent(notes)}%0A`;
  text += `-----------------------------------%0A`;

  let total = 0;
  items.forEach((it, i) => {
    const sub = it.price * it.qty;
    total += sub;
    text += `${i+1}. ${encodeURIComponent(it.name)} (${it.qty}x) = Rp ${sub.toLocaleString('id-ID')}%0A`;
  });

  text += `-----------------------------------%0A`;
  text += `*TOTAL PEMBAYARAN: Rp ${total.toLocaleString('id-ID')}*%0A%0A`;
  text += `Mohon diproses pesanannya. Terima kasih!`;

  window.open(`https://wa.me/6281110004608?text=${text}`, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
  renderMenu();

  document.getElementById('openCartBtn').addEventListener('click', () => toggleCart(true));
  document.getElementById('closeCartBtn').addEventListener('click', () => toggleCart(false));
  document.getElementById('cartBackdrop').addEventListener('click', () => toggleCart(false));
  document.getElementById('checkoutWaBtn').addEventListener('click', checkoutWA);

  document.getElementById('searchInput').addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    document.querySelectorAll('.menu-item-row, .special-card-hero, .bbq-card').forEach(el => {
      const match = !q || el.innerText.toLowerCase().includes(q);
      el.style.display = match ? '' : 'none';
    });
  });

  const pills = document.querySelectorAll('.cat-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const cat = pill.getAttribute('data-cat');
      if (cat === 'all') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const target = document.getElementById(`sec-${cat}`);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
