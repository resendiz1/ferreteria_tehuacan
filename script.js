/* ================================================================
   FERRETERÍA TEHUACÁN — JAVASCRIPT
   ================================================================ */

/* ================================================================
   CONFIGURACIÓN — EDITA AQUÍ EL NÚMERO DE WHATSAPP
   ================================================================ */
const WHATSAPP_NUMBER = '522381234567';  // <-- Cambia este número
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

/* ================================================================
   PRODUCTOS — EDITA, AGREGA O QUITA PRODUCTOS AQUÍ
   ================================================================ */
const PRODUCTS = [
  // ---- Herramienta ----
  { id: 'h1', name: 'Martillo',        category: 'herramienta', emoji: '🔨', desc: 'Martillo de uña con mango de madera, 16 oz.',        price: '$145.00' },
  { id: 'h2', name: 'Desarmador',      category: 'herramienta', emoji: '🪛', desc: 'Juego de desarmadores de precisión 6 piezas.',      price: '$89.00' },
  { id: 'h3', name: 'Pinzas',          category: 'herramienta', emoji: '🔧', desc: 'Pinzas de corte diagonal profesional 8".',        price: '$120.00' },
  { id: 'h4', name: 'Taladro',         category: 'herramienta', emoji: '🛠️', desc: 'Taladro percutor inalámbrico 18V + batería.',      price: '$1,850.00' },
  { id: 'h5', name: 'Cinta métrica',   category: 'herramienta', emoji: '📏', desc: 'Cinta métrica metálica de 5 m con freno.',        price: '$65.00' },
  // ---- Pintura ----
  { id: 'p1', name: 'Pintura blanca',   category: 'pintura',    emoji: '🪣', desc: 'Cubeta de pintura vinílica blanca 19 L.',          price: '$680.00' },
  { id: 'p2', name: 'Brocha',          category: 'pintura',    emoji: '🖌️', desc: 'Brocha de cerdas sintéticas 2" y 3".',           price: '$35.00' },
  { id: 'p3', name: 'Rodillo',         category: 'pintura',    emoji: '🎨', desc: 'Rodillo para pintura con mango 9".',              price: '$55.00' },
  { id: 'p4', name: 'Thinner',         category: 'pintura',    emoji: '🧴', desc: 'Thiner estándar 1 L para dilución de pinturas.',   price: '$42.00' },
  { id: 'p5', name: 'Charola',         category: 'pintura',    emoji: '🧺', desc: 'Charola metálica para pintura 9".',              price: '$28.00' },
  // ---- Plomería ----
  { id: 'pl1', name: 'Tubo PVC',       category: 'plomeria',   emoji: '🔩', desc: 'Tubo PVC hidráulico 1/2" x 3 m.',                price: '$38.00' },
  { id: 'pl2', name: 'Codo PVC',       category: 'plomeria',   emoji: '↩️', desc: 'Codo PVC 1/2" para tubería hidráulica.',        price: '$8.50' },
  { id: 'pl3', name: 'Llave de paso',  category: 'plomeria',   emoji: '🔧', desc: 'Llave de paso para agua 1/2" cromada.',          price: '$95.00' },
  { id: 'pl4', name: 'Cinta teflón',   category: 'plomeria',   emoji: '🧻', desc: 'Cinta de teflón de 12 mm x 10 m.',              price: '$12.00' },
  { id: 'pl5', name: 'Manguera',       category: 'plomeria',   emoji: '💧', desc: 'Manguera flexible para lavabo 1/2" x 50 cm.',     price: '$45.00' },
  // ---- Electricidad ----
  { id: 'e1', name: 'Cable eléctrico',  category: 'electricidad', emoji: '🔌', desc: 'Cable eléctrico calibre 12 (rollo 100 m).',    price: '$520.00' },
  { id: 'e2', name: 'Contacto',        category: 'electricidad', emoji: '🔌', desc: 'Contacto doble polarizado con placa.',          price: '$32.00' },
  { id: 'e3', name: 'Apagador',        category: 'electricidad', emoji: '💡', desc: 'Apagador sencillo de luz blanco.',               price: '$25.00' },
  { id: 'e4', name: 'Foco LED',        category: 'electricidad', emoji: '💡', desc: 'Foco LED 12W luz cálida E27.',                   price: '$29.00' },
  { id: 'e5', name: 'Cinta aislante',  category: 'electricidad', emoji: '📀', desc: 'Cinta aislante vinílica negra 3M 18 m.',          price: '$22.00' },
];

/* ================================================================
   IMÁGENES — mapeo de imágenes locales por producto
   Agrega o quita rutas según las imágenes disponibles en img/
   ================================================================ */
const PRODUCT_IMAGES = {
  h1:  [],
  h2:  ['img/desarmador.webp', 'img/desarmador1.webp'],
  h3:  ['img/pinzas.jpg', 'img/pinzas1.jpg', 'img/pinzas2.jpeg'],
  h4:  ['img/taladro.webp', 'img/taladro1.webp'],
  h5:  ['img/cinta_metrica.jpeg', 'img/cinta_metrica1.webp'],
  p1:  ['img/pintura_blanca.avif', 'img/pintura_blanca1.jpg'],
  p2:  ['img/brocha.jpeg'],
  p3:  ['img/rodillo.jpeg', 'img/rodilloo1.png', 'img/rodillo2.jpg'],
  p4:  ['img/thinner.jpg'],
  p5:  ['img/charola.jpg', 'img/charola1.jpeg'],
  pl1: ['img/tubo_pvc.jpg', 'img/tubo_pvc_1.webp'],
  pl2: ['img/code_pvc.jpg', 'img/codo_pvc1.jpg'],
  pl3: ['img/Llave de paso.jpeg', 'img/llave_paso1.jpeg'],
  pl4: ['img/cinta_teflon.webp', 'img/cinta_teflon1.jpeg'],
  pl5: ['img/manguera.jpg', 'img/manguera1.jpg'],
  e1:  ['img/cable_electrico.jpg', 'img/cable_electrico1.webp'],
  e2:  ['img/conrtacto_electrico.jpeg', 'img/contacto_electrico1.jpg'],
  e3:  ['img/apagador.jpg', 'img/apagador1.jpeg'],
  e4:  ['img/foco_led.webp'],
  e5:  ['img/cinta_aislante.jpg', 'img/cinta_aislante1.jpeg'],
};

/* ================================================================
   CATEGORÍAS
   ================================================================ */
const CATEGORIES = [
  { key: 'herramienta',  label: 'Herramienta',  emoji: '🔨', count: 0 },
  { key: 'pintura',      label: 'Pintura',      emoji: '🖌️', count: 0 },
  { key: 'plomeria',     label: 'Plomería',     emoji: '🔩', count: 0 },
  { key: 'electricidad', label: 'Electricidad', emoji: '💡', count: 0 },
];

/* ================================================================
   ESTADO
   ================================================================ */
let cart = [];
let activeCategory = 'todas';

/* ================================================================
   INICIALIZACIÓN
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  CATEGORIES.forEach(c => {
    c.count = PRODUCTS.filter(p => p.category === c.key).length;
  });
  renderCategories();
  renderFilterBar();
  renderProducts('todas');
  renderCart();
  observeFadeUp();
});

/* ================================================================
   RENDER: CATEGORÍAS
   ================================================================ */
function renderCategories() {
  const container = document.getElementById('categoriesContainer');
  container.innerHTML = CATEGORIES.map(c => `
    <div class="col-6 col-md-3">
      <div class="category-card ${activeCategory === c.key ? 'active' : ''}"
           onclick="filterByCategory('${c.key}')">
        <span class="emoji">${c.emoji}</span>
        <h6>${c.label}</h6>
        <small>${c.count} productos</small>
      </div>
    </div>
  `).join('');
}

/* ================================================================
   RENDER: FILTROS
   ================================================================ */
function renderFilterBar() {
  const bar = document.getElementById('filterBar');
  const allLabel = `Todas (${PRODUCTS.length})`;
  bar.innerHTML = `
    <button class="btn-filter ${activeCategory === 'todas' ? 'active' : ''}"
            onclick="filterByCategory('todas')">${allLabel}</button>
    ${CATEGORIES.map(c =>
      `<button class="btn-filter ${activeCategory === c.key ? 'active' : ''}"
               onclick="filterByCategory('${c.key}')">${c.emoji} ${c.label} (${c.count})</button>`
    ).join('')}
  `;
}

/* ================================================================
   FILTER
   ================================================================ */
function filterByCategory(key) {
  activeCategory = key;
  renderCategories();
  renderFilterBar();
  renderProducts(key);
  document.getElementById('productos').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ================================================================
   RENDER: PRODUCTOS
   ================================================================ */
function renderProducts(category) {
  const container = document.getElementById('productsContainer');
  const filtered = category === 'todas'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === category);

  if (filtered.length === 0) {
    container.innerHTML = `<div class="col-12 text-center py-4 text-muted">No hay productos en esta categoría.</div>`;
    return;
  }

      container.innerHTML = filtered.map(p => {
    const inCart = cart.find(c => c.id === p.id);
    const qty = inCart ? inCart.qty : 0;
    const images = PRODUCT_IMAGES[p.id] || [];
    const imgHtml = images.length === 0
      ? `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:3.5rem;color:var(--gray);">${p.emoji}</div>`
      : images.length === 1
        ? `<img src="${images[0]}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;" loading="lazy"
               onerror="this.outerHTML='<div style=\\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:3.5rem;color:var(--gray);\\'>${p.emoji}</div>'" />`
        : `<div id="carousel-${p.id}" class="carousel slide h-100" data-bs-ride="carousel" data-bs-interval="3000">
             <div class="carousel-inner h-100">
               ${images.map((img, i) => `
                 <div class="carousel-item ${i === 0 ? 'active' : ''} h-100">
                   <img src="${img}" alt="${p.name}" class="d-block w-100 h-100" style="object-fit:cover;"
                        onerror="this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:3.5rem;color:var(--gray);\\'>${p.emoji}</div>'" />
                 </div>
               `).join('')}
             </div>
             <button class="carousel-control-prev" type="button" data-bs-target="#carousel-${p.id}" data-bs-slide="prev">
               <span class="carousel-control-prev-icon carousel-icon-sm"></span>
             </button>
             <button class="carousel-control-next" type="button" data-bs-target="#carousel-${p.id}" data-bs-slide="next">
               <span class="carousel-control-next-icon carousel-icon-sm"></span>
             </button>
           </div>`;
    return `
      <div class="col-6 col-md-4 col-lg-3 fade-up">
        <div class="product-card">
          <div class="img-wrap" style="overflow:hidden;">${imgHtml}</div>
          <div class="body">
            <span class="badge-cat">${getCategoryLabel(p.category)}</span>
            <h6>${p.name}</h6>
            <p class="desc">${p.desc}</p>
            <div class="price">${p.price}</div>
            <button class="btn-add" onclick="addToCart('${p.id}')">
              <i class="bi bi-cart-plus me-1"></i> ${qty > 0 ? `Agregado (${qty})` : 'Agregar a cotización'}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  observeFadeUp();
}

/* ================================================================
   HELPERS
   ================================================================ */
function getCategoryLabel(key) {
  const found = CATEGORIES.find(c => c.key === key);
  return found ? found.label : key;
}

/* ================================================================
   CART: AGREGAR
   ================================================================ */
function addToCart(id) {
  const prod = PRODUCTS.find(p => p.id === id);
  if (!prod) return;
  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...prod, qty: 1 });
  }
  renderProducts(activeCategory);
  renderCart();
  showToast(`✅ "${prod.name}" agregado a la cotización`);
}

/* ================================================================
   CART: CAMBIAR CANTIDAD
   ================================================================ */
function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(c => c.id !== id);
  }
  renderProducts(activeCategory);
  renderCart();
}

/* ================================================================
   CART: ELIMINAR
   ================================================================ */
function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  renderProducts(activeCategory);
  renderCart();
}

/* ================================================================
   CART: LIMPIAR
   ================================================================ */
function clearCart() {
  if (cart.length === 0) return;
  cart = [];
  renderProducts(activeCategory);
  renderCart();
  closeCart();
  showToast('🗑️ Lista de cotización limpiada');
}

/* ================================================================
   RENDER: CART (SIDEBAR + BADGE)
   ================================================================ */
function renderCart() {
  const body = document.getElementById('cartBody');
  const footer = document.getElementById('cartFooter');
  const badge = document.getElementById('floatBadge');
  const totalSpan = document.getElementById('cartTotalItems');

  const totalQty = cart.reduce((sum, c) => sum + c.qty, 0);
  badge.textContent = totalQty;

  if (cart.length === 0) {
    body.innerHTML = `
      <div class="cart-empty">
        <i class="bi bi-cart-x"></i>
        <p>Tu cotización está vacía</p>
        <small>Agrega productos desde el catálogo</small>
      </div>`;
    footer.classList.add('d-none');
    return;
  }

  footer.classList.remove('d-none');
  totalSpan.textContent = `${totalQty} producto${totalQty !== 1 ? 's' : ''}`;

  body.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="ci-icon">${item.emoji}</div>
      <div class="ci-info">
        <div class="ci-name">${item.name}</div>
        <div class="ci-price">${item.price}</div>
      </div>
      <div class="qty-controls">
        <button onclick="changeQty('${item.id}', -1)">−</button>
        <span class="qty-num">${item.qty}</span>
        <button onclick="changeQty('${item.id}', 1)">+</button>
      </div>
      <button class="btn-remove" onclick="removeFromCart('${item.id}')" title="Eliminar">
        <i class="bi bi-trash3"></i>
      </button>
    </div>
  `).join('');
}

/* ================================================================
   OPEN / CLOSE CART
   ================================================================ */
function openCart() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('show');
  document.body.style.overflow = '';
}

/* ================================================================
   WHATSAPP: ENVIAR MENSAJE
   ================================================================ */
function sendWhatsApp() {
  if (cart.length === 0) {
    showToast('⚠️ Agrega al menos un producto para cotizar');
    return;
  }

  let msg = 'Hola, quiero cotizar estos productos:\n\n';

  cart.forEach((item, i) => {
    const specialUnits = {
      'p1': ' cubeta',
      'h5': ' m',
      'pl1': ' tubo(s)',
      'e1': ' rollo(s)',
      'pl4': ' rollo(s)',
      'p4': ' L',
    };
    const su = specialUnits[item.id];
    const displayUnit = su || '';
    msg += `${i + 1}. ${item.name} — Cantidad: ${item.qty}${displayUnit}\n`;
  });

  msg += `\nNombre del cliente:\n¿Tienen disponibilidad?\n¿Me pueden dar precio final?`;

  const url = `${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
  closeCart();
}

/* ================================================================
   TOAST
   ================================================================ */
let toastInstance = null;
function showToast(text) {
  const toastEl = document.getElementById('toastMsg');
  document.getElementById('toastBody').textContent = text;
  if (!toastInstance) {
    toastInstance = new bootstrap.Toast(toastEl, { delay: 2500, animation: true });
  }
  toastInstance.show();
}

/* ================================================================
   SCROLL ANIMATION (FADE-UP)
   ================================================================ */
function observeFadeUp() {
  const els = document.querySelectorAll('.fade-up');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('show');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: .15 });
    els.forEach(el => obs.observe(el));
  } else {
    els.forEach(el => el.classList.add('show'));
  }
}

/* ================================================================
   KEYBOARD: ESC PARA CERRAR CART
   ================================================================ */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeCart();
});

/* ================================================================
   EMAILJS — CONFIGURACIÓN
   ================================================================ */
window.onload = function () {
  emailjs.init('m202FJpgz8JlMhJrh');
};

function correo() {
  const nombre = document.getElementById('contactName').value;
  const telefono = document.getElementById('contactPhone').value;
  const mail = document.getElementById('contactEmail').value;
  const mensaje = document.getElementById('contactMessage').value;
  const error = document.getElementById('formError');
  const success = document.getElementById('formSuccess');

  if (nombre === '' || telefono === '' || mensaje === '') {
    error.classList.remove('d-none');
    setTimeout(() => { error.classList.add('d-none'); }, 4000);
    return;
  }

  const btn = document.querySelector('.btn-contact-submit');
  const loader = document.getElementById('formLoader');
  btn.disabled = true;
  loader.classList.remove('d-none');

  const parametros = {
    to_email: 'arturo.resendiz@grupopabsa.com',
    name: nombre,
    phone: telefono,
    email: mail,
    message: mensaje
  };

  emailjs.send('service_9m5rcfq', 'template_cfgl7gs', parametros)
    .then(() => {
      success.classList.remove('d-none');
      setTimeout(() => { success.classList.add('d-none'); }, 4000);
      document.getElementById('contactName').value = '';
      document.getElementById('contactPhone').value = '';
      document.getElementById('contactEmail').value = '';
      document.getElementById('contactMessage').value = '';
    }, () => {
      alert('El correo no se envió');
    })
    .finally(() => {
      btn.disabled = false;
      loader.classList.add('d-none');
    });
}
