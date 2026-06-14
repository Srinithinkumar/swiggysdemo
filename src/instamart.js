// ============================================
// Screen 3: Instamart Bottom Sheet
// ============================================

let isSheetVisible = false;
let isExpanded = false;
let sheetEl = null;
let backdropEl = null;
let startY = 0;
let currentY = 0;
let isDragging = false;

// Yogurt brand carousel state
let currentBrandIndex = 0;
const BRANDS = ['Amul', 'Nandini', 'Vijaya'];

// Cart state
let cartItems = {};
let totalCartCount = 0;

const INGREDIENTS = [
  { id: 'ginger', name: 'Ginger root', price: 250, emoji: '🫚', sponsored: true },
  { id: 'garlic', name: 'Garlic bulb', price: 120, emoji: '🧄', sponsored: false },
  { id: 'masala', name: 'Garam Masala', price: 250, emoji: '🌶️', sponsored: true },
  { id: 'methi', name: 'Kasuri Methi', price: 150, emoji: '🌿', sponsored: true },
  { id: 'coriander', name: 'fresh Coriander', price: 750, emoji: '🥬', sponsored: true },
  { id: 'yogurt', name: 'Yogurt/Cream Yogurt', price: 1, emoji: '🥛', sponsored: true, isBrandSwipeable: true },
];

const KITCHEN_ITEMS = [
  { name: 'Knife', emoji: '🔪', price: null },
  { name: 'Chopping boards', emoji: '🪵', price: 250 },
  { name: 'Chopsticks', emoji: '🥢', price: null },
  { name: 'Spatula', emoji: '🥄', price: 120 },
  { name: 'Pan', emoji: '🍳', price: 450 },
];

// Initialize quantities
INGREDIENTS.forEach(item => {
  cartItems[item.id] = 1;
});

export function renderInstamart() {
  return `
    <div class="instamart-backdrop" id="instamart-backdrop"></div>
    <div class="instamart-sheet" id="instamart-sheet">
      <!-- Drag Handle -->
      <div class="sheet-handle-area" id="sheet-handle">
        <div class="sheet-handle"></div>
      </div>

      <!-- Header -->
      <div class="instamart-header">
        <span class="instamart-title">Instamart</span>
      </div>

      <!-- Body -->
      <div class="instamart-body">
        <!-- Ingredients Section -->
        <div class="ingredients-section">
          <div class="ingredient-grid" id="ingredient-grid">
            ${INGREDIENTS.map(item => renderIngredientCard(item)).join('')}
          </div>
        </div>

        <!-- Kitchen Essentials Sidebar -->
        <div class="kitchen-section">
          <div class="kitchen-title">Kitchen Essentials</div>
          ${KITCHEN_ITEMS.map(item => `
            <div class="kitchen-item">
              <span class="kitchen-item-icon">${item.emoji}</span>
              <span class="kitchen-item-name">${item.name}</span>
              ${item.price ? `<span class="kitchen-item-price">₹${item.price}</span>` : ''}
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="instamart-bottom-bar">
        <label class="spoon-checkbox">
          <input type="checkbox" id="spoon-check">
          Add Swiggy Spoon (Creator Edition) - ₹1
        </label>
        <button class="cart-button" id="cart-button">
          <span class="cart-icon">🛒</span>
          <span class="cart-count" id="cart-count">${calculateCartCount()}</span>
        </button>
      </div>
    </div>
  `;
}

function renderIngredientCard(item) {
  if (item.isBrandSwipeable) {
    return `
      <div class="ingredient-card" data-id="${item.id}">
        ${item.sponsored ? '<span class="ingredient-sponsored">(Sponsored)</span>' : ''}
        <div class="yogurt-wrapper" data-yogurt="true">
          <div class="yogurt-carousel" id="yogurt-carousel">
            ${BRANDS.map((brand, idx) => `
              <div class="yogurt-brand ${idx === 0 ? 'active' : ''}" data-brand-idx="${idx}">
                <span class="ingredient-img">${item.emoji}</span>
                <span class="yogurt-brand-name">${brand}</span>
              </div>
            `).join('')}
          </div>
          <div class="yogurt-dots">
            ${BRANDS.map((_, idx) => `
              <span class="yogurt-dot ${idx === 0 ? 'active' : ''}" data-dot="${idx}"></span>
            `).join('')}
          </div>
        </div>
        <span class="ingredient-name">${item.name}</span>
        <span class="ingredient-price">₹${item.price}</span>
        <div class="quantity-control">
          <button class="qty-btn" data-qty-action="decrease" data-item-id="${item.id}">−</button>
          <span class="qty-value" id="qty-${item.id}">${cartItems[item.id]}</span>
          <button class="qty-btn" data-qty-action="increase" data-item-id="${item.id}">+</button>
        </div>
      </div>
    `;
  }

  return `
    <div class="ingredient-card" data-id="${item.id}">
      ${item.sponsored ? '<span class="ingredient-sponsored">(Sponsored)</span>' : ''}
      <span class="ingredient-img">${item.emoji}</span>
      <span class="ingredient-name">${item.name}</span>
      <span class="ingredient-price">₹${item.price}</span>
      <div class="quantity-control">
        <button class="qty-btn" data-qty-action="decrease" data-item-id="${item.id}">−</button>
        <span class="qty-value" id="qty-${item.id}">${cartItems[item.id]}</span>
        <button class="qty-btn" data-qty-action="increase" data-item-id="${item.id}">+</button>
      </div>
    </div>
  `;
}

function calculateCartCount() {
  return Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);
}

function updateCartCount() {
  const countEl = document.getElementById('cart-count');
  if (countEl) {
    countEl.textContent = calculateCartCount();
  }
}

export function initInstamart() {
  sheetEl = document.getElementById('instamart-sheet');
  backdropEl = document.getElementById('instamart-backdrop');

  if (!sheetEl || !backdropEl) return;

  // Backdrop click → close
  backdropEl.addEventListener('click', hideInstamart);

  // Drag handle events
  const handle = document.getElementById('sheet-handle');
  if (handle) {
    handle.addEventListener('touchstart', onDragStart, { passive: true });
    handle.addEventListener('touchmove', onDragMove, { passive: false });
    handle.addEventListener('touchend', onDragEnd);
    handle.addEventListener('mousedown', onMouseDragStart);
  }

  // Quantity controls
  document.addEventListener('click', (e) => {
    const qtyBtn = e.target.closest('[data-qty-action]');
    if (qtyBtn) {
      const action = qtyBtn.dataset.qtyAction;
      const itemId = qtyBtn.dataset.itemId;
      if (action === 'increase') {
        cartItems[itemId] = (cartItems[itemId] || 0) + 1;
      } else if (action === 'decrease' && cartItems[itemId] > 0) {
        cartItems[itemId]--;
      }
      const qtyEl = document.getElementById(`qty-${itemId}`);
      if (qtyEl) qtyEl.textContent = cartItems[itemId];
      updateCartCount();
    }
  });

  // Yogurt brand carousel - swipe handling
  initYogurtCarousel();

  // Back button (browser back) handling
  window.addEventListener('popstate', () => {
    if (isSheetVisible) {
      hideInstamart();
    }
  });
}

function initYogurtCarousel() {
  const carousel = document.getElementById('yogurt-carousel');
  if (!carousel) return;

  let touchStartX = 0;
  let touchEndX = 0;

  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleBrandSwipe(touchStartX, touchEndX);
  });

  // Mouse swipe support for desktop
  carousel.addEventListener('mousedown', (e) => {
    touchStartX = e.screenX;
    const onMouseUp = (ev) => {
      touchEndX = ev.screenX;
      handleBrandSwipe(touchStartX, touchEndX);
      document.removeEventListener('mouseup', onMouseUp);
    };
    document.addEventListener('mouseup', onMouseUp);
  });
}

function handleBrandSwipe(startX, endX) {
  const diff = startX - endX;
  const threshold = 30;

  if (Math.abs(diff) < threshold) return;

  if (diff > 0 && currentBrandIndex < BRANDS.length - 1) {
    // Swipe left → next brand
    currentBrandIndex++;
  } else if (diff < 0 && currentBrandIndex > 0) {
    // Swipe right → previous brand
    currentBrandIndex--;
  }

  updateBrandDisplay();
}

function updateBrandDisplay() {
  const carousel = document.getElementById('yogurt-carousel');
  if (!carousel) return;

  // Slide carousel
  carousel.style.transform = `translateX(-${currentBrandIndex * 100}%)`;

  // Update dots
  const dots = document.querySelectorAll('.yogurt-dot');
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentBrandIndex);
  });

  // Update brand items
  const brands = carousel.querySelectorAll('.yogurt-brand');
  brands.forEach((brand, idx) => {
    brand.classList.toggle('active', idx === currentBrandIndex);
  });
}

// ---- Drag to expand/dismiss ----

function onDragStart(e) {
  isDragging = true;
  startY = e.touches[0].clientY;
  sheetEl.style.transition = 'none';
}

function onDragMove(e) {
  if (!isDragging) return;
  e.preventDefault();
  currentY = e.touches[0].clientY;
  const delta = currentY - startY;
  
  if (isExpanded) {
    // When expanded, only allow drag down
    if (delta > 0) {
      sheetEl.style.transform = `translateX(-50%) translateY(${delta}px)`;
    }
  } else {
    // When half, allow drag up (expand) or down (dismiss)
    if (delta < 0) {
      // Dragging up - expand
      const maxHeight = window.innerHeight;
      const currentMaxHeight = maxHeight * 0.55;
      const newHeight = Math.min(maxHeight, currentMaxHeight + Math.abs(delta));
      sheetEl.style.maxHeight = `${newHeight}px`;
    } else {
      // Dragging down - dismiss
      sheetEl.style.transform = `translateX(-50%) translateY(${delta}px)`;
    }
  }
}

function onDragEnd() {
  if (!isDragging) return;
  isDragging = false;
  sheetEl.style.transition = '';
  
  const delta = currentY - startY;

  if (isExpanded) {
    if (delta > 120) {
      // Drag down enough → collapse to half
      collapseSheet();
    } else if (delta > 250) {
      // Drag down a lot → dismiss
      hideInstamart();
    } else {
      // Snap back to expanded
      sheetEl.style.transform = 'translateX(-50%) translateY(0)';
    }
  } else {
    if (delta < -80) {
      // Drag up → expand to full
      expandSheet();
    } else if (delta > 100) {
      // Drag down → dismiss
      hideInstamart();
    } else {
      // Snap back
      sheetEl.style.transform = 'translateX(-50%) translateY(0)';
      sheetEl.style.maxHeight = '55vh';
    }
  }
}

// Mouse drag support
function onMouseDragStart(e) {
  isDragging = true;
  startY = e.clientY;
  sheetEl.style.transition = 'none';

  const onMouseMove = (ev) => {
    if (!isDragging) return;
    currentY = ev.clientY;
    const delta = currentY - startY;
    
    if (delta > 0) {
      sheetEl.style.transform = `translateX(-50%) translateY(${delta}px)`;
    } else if (!isExpanded) {
      const maxHeight = window.innerHeight;
      const currentMaxHeight = maxHeight * 0.55;
      const newHeight = Math.min(maxHeight, currentMaxHeight + Math.abs(delta));
      sheetEl.style.maxHeight = `${newHeight}px`;
    }
  };

  const onMouseUp = () => {
    onDragEnd();
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
}

function expandSheet() {
  isExpanded = true;
  sheetEl.classList.add('expanded');
  sheetEl.style.maxHeight = '100dvh';
  sheetEl.style.transform = 'translateX(-50%) translateY(0)';
}

function collapseSheet() {
  isExpanded = false;
  sheetEl.classList.remove('expanded');
  sheetEl.style.maxHeight = '55vh';
  sheetEl.style.transform = 'translateX(-50%) translateY(0)';
}

export function showInstamart() {
  if (!sheetEl || !backdropEl) return;
  isSheetVisible = true;
  isExpanded = false;

  // Push history state for back button
  history.pushState({ instamart: true }, '');

  backdropEl.classList.add('visible');
  sheetEl.classList.remove('expanded');
  sheetEl.style.maxHeight = '55vh';
  
  // Small delay for animation
  requestAnimationFrame(() => {
    sheetEl.classList.add('visible');
  });
}

export function hideInstamart() {
  if (!sheetEl || !backdropEl) return;
  isSheetVisible = false;
  isExpanded = false;

  backdropEl.classList.remove('visible');
  sheetEl.classList.remove('visible', 'expanded');
  sheetEl.style.maxHeight = '55vh';
  sheetEl.style.transform = '';
}
