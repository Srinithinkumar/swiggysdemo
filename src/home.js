// ============================================
// Screen 1: Swiggy Home
// ============================================

export function renderHome() {
  return `
    <div id="screen-home" class="screen home-screen">
      <!-- Header -->
      <div class="home-header">
        <div class="home-location">
          <span class="home-location-icon">📍</span>
          <div class="home-location-text">
            <div class="home-location-name">Rama Krishna <span style="font-size:12px;opacity:0.7">▾</span></div>
            <div class="home-location-address">Maanas Ph/2nd Floor, Kphb 5th Phase, Kukatpally,...</div>
          </div>
          <button class="home-profile-btn">👤</button>
        </div>
        <div class="home-search">
          <span class="home-search-icon">🔍</span>
          <input type="text" placeholder="Search for 'EatRight'" readonly>
          <span class="home-search-mic">🎙</span>
          <div class="home-veg-toggle">
            <span>VEG</span>
            <span style="color:#4CAF50;font-size:16px;">⬤</span>
          </div>
        </div>
      </div>

      <!-- Categories -->
      <div class="home-categories">
        <div class="home-category-item">
          <div class="home-category-icon">🍛</div>
          <span class="home-category-label">Food</span>
        </div>
        <div class="home-category-item">
          <div class="home-category-icon">🛒</div>
          <span class="home-category-badge">25 Mins</span>
          <span class="home-category-label">Instamart</span>
        </div>
        <div class="home-category-item">
          <div class="home-category-icon">🍽️</div>
          <span class="home-category-label">Dineout</span>
        </div>
        <div class="home-category-item diy" id="diy-tab">
          <div class="home-category-icon">🍲</div>
          <span class="home-category-label">DIY</span>
        </div>
      </div>

      <!-- Banner -->
      <div class="home-banner">
        <div class="home-banner-title">
          PAY 🍔 DAY
        </div>
        <div class="home-banner-btn">ORDER NOW</div>
        <div class="home-banner-sub">MIN. ₹150 OFF & MORE</div>
      </div>

      <!-- Offer Cards -->
      <div class="home-offers">
        <div class="home-offer-card">
          <div class="home-offer-title">Min.<br>50% OFF</div>
          <div class="home-offer-emoji">🍲</div>
        </div>
        <div class="home-offer-card">
          <div class="home-offer-title">Min. ₹150<br>OFF & More</div>
          <div class="home-offer-emoji">💰</div>
        </div>
        <div class="home-offer-card">
          <div class="home-offer-title">Meals<br>At ₹99</div>
          <div class="home-offer-emoji">🏪</div>
        </div>
      </div>

      <!-- Tabs -->
      <div class="home-tabs">
        <button class="home-tab active">TOP RATED</button>
        <button class="home-tab">FOOD IN 15 MINS</button>
      </div>

      <!-- Restaurant Cards -->
      <div class="home-restaurants">
        <div class="home-restaurant-card">
          <div class="home-restaurant-img" style="background: linear-gradient(135deg, #FFE0B2, #FFCC80);">
            🧀
            <div class="home-restaurant-badge">66% OFF UPTO ₹126</div>
            <div class="home-restaurant-heart">🤍</div>
            <div class="home-restaurant-tag">AD</div>
          </div>
          <div class="home-restaurant-info">
            <div class="home-restaurant-name">Crusto's - Chee...</div>
            <div class="home-restaurant-meta">
              <span class="home-restaurant-rating">⭐ 4.4</span>
              <span>•</span>
              <span>45-50 mins</span>
            </div>
          </div>
        </div>
        <div class="home-restaurant-card">
          <div class="home-restaurant-img" style="background: linear-gradient(135deg, #F8BBD0, #F48FB1);">
            🍦
            <div class="home-restaurant-badge">₹66 OFF ABOVE ₹499</div>
            <div class="home-restaurant-heart">🤍</div>
          </div>
          <div class="home-restaurant-info">
            <div class="home-restaurant-name">Baskin Robbins ...</div>
            <div class="home-restaurant-meta">
              <span class="home-restaurant-rating">⭐ 4.5</span>
              <span>•</span>
              <span>30-35 mins</span>
            </div>
          </div>
        </div>
        <div class="home-restaurant-card">
          <div class="home-restaurant-img" style="background: linear-gradient(135deg, #BBDEFB, #90CAF9);">
            🍨
            <div class="home-restaurant-badge">₹100 OFF ABOVE ₹499</div>
            <div class="home-restaurant-heart">🤍</div>
            <div class="home-restaurant-tag">AD</div>
          </div>
          <div class="home-restaurant-info">
            <div class="home-restaurant-name">NOTO Ice Crea...</div>
            <div class="home-restaurant-meta">
              <span class="home-restaurant-rating">⭐ 4.3</span>
              <span>•</span>
              <span>35-40 mins</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Nav -->
      <nav class="home-bottom-nav">
        <button class="home-nav-item active">
          <span class="home-nav-icon">🏠</span>
          <span>Food</span>
        </button>
        <button class="home-nav-item">
          <span class="home-nav-icon">⚡</span>
          <span class="home-nav-badge">YU HU</span>
          <span>Bolt</span>
        </button>
        <button class="home-nav-item">
          <span class="home-nav-icon">🏪</span>
          <span>99 store</span>
        </button>
        <button class="home-nav-item">
          <span class="home-nav-icon">🥗</span>
          <span class="home-nav-badge">NEW</span>
          <span>EatRight</span>
        </button>
        <button class="home-nav-item">
          <span class="home-nav-icon">🔄</span>
          <span>Reorder</span>
        </button>
      </nav>
    </div>
  `;
}

export function initHome(navigateTo) {
  const diyTab = document.getElementById('diy-tab');
  if (diyTab) {
    diyTab.addEventListener('click', () => {
      navigateTo('reels');
    });
  }

  // Tab switching
  const tabs = document.querySelectorAll('.home-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
}
