(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();const _="SwiggyDIY",W=1,h="videos";let k=null;async function z(){return new Promise((e,t)=>{const a=indexedDB.open(_,W);a.onupgradeneeded=n=>{const s=n.target.result;s.objectStoreNames.contains(h)||s.createObjectStore(h,{keyPath:"id",autoIncrement:!0})},a.onsuccess=n=>{k=n.target.result,navigator.storage&&navigator.storage.persist&&navigator.storage.persist(),e(k)},a.onerror=n=>{console.error("IndexedDB error:",n.target.error),t(n.target.error)}})}async function Q(e,t,a=10){return new Promise((n,s)=>{const l=k.transaction(h,"readwrite").objectStore(h),o={name:e,blob:t,duration:a,createdAt:Date.now()},u=l.add(o);u.onsuccess=()=>n(u.result),u.onerror=()=>s(u.error)})}async function J(){return new Promise((e,t)=>{const s=k.transaction(h,"readonly").objectStore(h).getAll();s.onsuccess=()=>e(s.result||[]),s.onerror=()=>t(s.error)})}async function Z(){return new Promise((e,t)=>{const s=k.transaction(h,"readonly").objectStore(h).count();s.onsuccess=()=>e(s.result),s.onerror=()=>t(s.error)})}function ee(e){return URL.createObjectURL(e)}function te(){return`
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
  `}function se(e){const t=document.getElementById("diy-tab");t&&t.addEventListener("click",()=>{e("reels")});const a=document.querySelectorAll(".home-tab");a.forEach(n=>{n.addEventListener("click",()=>{a.forEach(s=>s.classList.remove("active")),n.classList.add("active")})})}let C=0,A=null;const m={plus:'<svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',chevronDown:'<svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>',heart:'<svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',share:'<svg viewBox="0 0 24 24"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>',bookmark:'<svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',play:'<svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3" fill="white"/></svg>',bites:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="8" height="7" rx="1"/><rect x="14" y="3" width="8" height="7" rx="1"/><rect x="2" y="14" width="8" height="7" rx="1"/><rect x="14" y="14" width="8" height="7" rx="1"/></svg>',search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',upload:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',inbox:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',profile:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'},R=[{username:"CilantroMaa",caption:"Traditional Indian cooking at its finest! 🍛",hashtags:"#HomeCooking #IndianFood",likes:"55K",rating:"4.2",reviews:"330"},{username:"SpiceMaster",caption:"Quick 10-min curry recipe 🌶️",hashtags:"#QuickRecipes #SpicyFood",likes:"32K",rating:"4.5",reviews:"210"},{username:"KitchenStories",caption:"Average Summer Night in India 🌙😋",hashtags:"#SummerVibes #IndianKitchen",likes:"78K",rating:"4.8",reviews:"520"}],N=["/swiggysdemo/videos/demo1.mp4","/swiggysdemo/videos/demo2.mp4","/swiggysdemo/videos/demo3.mp4"];function ae(){return`
    <div id="screen-reels" class="screen reels-screen">
      <!-- Top Bar -->
      <div class="reel-top-bar">
        <button class="reel-plus-btn" id="reel-plus-btn">${m.plus}</button>
        <div class="reel-top-center">
          <div class="diy-logo-wrap" id="diy-logo">
            <div class="diy-logo">
              <div class="diy-spoon"></div>
              <div class="diy-bowl"></div>
            </div>
            <span class="diy-logo-text">DIY</span>
          </div>
          <div class="reel-tabs">
            <button class="reel-tab" data-tab="interests">Interests</button>
            <button class="reel-tab active" data-tab="foryou">For You</button>
          </div>
        </div>
        <button class="reel-top-right">${m.chevronDown}</button>
      </div>

      <!-- Reels Scroll Container -->
      <div class="reels-scroll" id="reels-scroll">
        <!-- Reels will be dynamically inserted here -->
      </div>

      <!-- Bottom Nav -->
      <nav class="reels-bottom-nav">
        <button class="reels-nav-item active">
          <span class="reels-nav-icon">${m.bites}</span>
          <span>bites</span>
        </button>
        <button class="reels-nav-item">
          <span class="reels-nav-icon">${m.search}</span>
          <span>search</span>
        </button>
        <button class="reels-nav-item upload" id="upload-nav-btn">
          <span class="reels-nav-icon">${m.upload}</span>
          <span>uploads</span>
        </button>
        <button class="reels-nav-item">
          <span class="reels-nav-icon">${m.inbox}</span>
          <span>inbox</span>
        </button>
        <button class="reels-nav-item">
          <span class="reels-nav-icon">${m.profile}</span>
          <span>profile</span>
        </button>
      </nav>

      <!-- Hidden file input for video upload -->
      <input type="file" id="video-upload" class="video-upload-input" accept="video/*" multiple>

      <!-- Loading Overlay (DIY Logo Animation) -->
      <div class="loading-overlay" id="loading-overlay">
        <div class="loading-logo">
          <div class="loading-spoon"></div>
          <div class="loading-bowl"></div>
        </div>
        <div class="loading-text">DIY</div>
      </div>
    </div>
  `}function ne(e,t,a){const n=!!a;return`
    <div class="reel" data-index="${t}">
      ${n?`<video src="${a}" loop playsinline muted preload="auto"></video>`:`<div class="reel-placeholder">
            <div class="reel-placeholder-icon">🎬</div>
            <div>Upload videos to see your reels</div>
            <button class="reel-upload-btn" data-upload="true">Upload Video</button>
          </div>`}
      
      ${n?`<div class="reel-play-btn" data-playbtn="${t}">${m.play}</div>`:""}

      <!-- Right Sidebar -->
      <div class="reel-sidebar">
        <button class="sidebar-item heart" data-heart="${t}">
          <span class="sidebar-icon">${m.heart}</span>
          <span class="sidebar-label">${e.likes}</span>
        </button>
        <button class="sidebar-item">
          <span class="sidebar-icon">
            <div class="rating-badge">${e.rating}</div>
          </span>
          <span class="sidebar-label">${e.reviews}</span>
        </button>
        <button class="sidebar-item share-icon">
          <span class="sidebar-icon">${m.share}</span>
          <span class="sidebar-label">Share</span>
        </button>
        <button class="sidebar-item bookmark-icon" data-bookmark="${t}">
          <span class="sidebar-icon">${m.bookmark}</span>
        </button>
      </div>

      <!-- Coriander Price Tag -->
      <div class="coriander-tag" data-coriander="true">
        <div class="coriander-icon">
          🌿
          <span class="coriander-price">₹10rs</span>
        </div>
        <span class="coriander-label">Corriender</span>
      </div>

      <!-- Bottom Info -->
      <div class="reel-bottom-info">
        <div class="reel-user-row">
          <span class="reel-username">${e.username}</span>
          <button class="reel-follow-btn">Follow</button>
        </div>
        <div class="reel-caption">
          ${e.caption}
          <span class="reel-hashtag">${e.hashtags}</span>
        </div>
      </div>
    </div>
  `}async function M(){const e=document.getElementById("reels-scroll");if(!e)return;let t=[...N];try{const i=(await J()).map(l=>ee(l.blob));i.length>0&&(t=i)}catch(s){console.warn("Unable to read stored videos, using demo reels instead.",s)}let a="";for(let s=0;s<3;s++){const i=R[s]||R[0],l=t[s]||N[s]||null;a+=ne(i,s,l)}e.innerHTML=a,t.slice(0,3),e.querySelectorAll("video").forEach(s=>Y(s))}function Y(e){if(!e)return;e.muted=!0,e.playsInline=!0,e.autoplay=!0,e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.setAttribute("muted",""),e.preload="metadata";const t=()=>{e.play().catch(()=>{})};e.addEventListener("canplay",t,{once:!0}),e.addEventListener("loadeddata",t,{once:!0}),e.addEventListener("error",()=>{e.setAttribute("data-failed","true")},{once:!0}),requestAnimationFrame(()=>t()),setTimeout(()=>t(),250),document.addEventListener("pointerdown",t,{once:!0}),document.addEventListener("touchstart",t,{once:!0}),window.addEventListener("focus",t,{once:!0})}function V(){const e=document.getElementById("loading-overlay"),t=document.getElementById("diy-logo");e&&(e.classList.add("visible"),setTimeout(()=>{e.classList.remove("visible"),t&&(t.classList.add("visible","stirring"),setTimeout(()=>{t.classList.remove("stirring")},2e3),setTimeout(()=>{t.classList.remove("visible")},3500))},1800))}function ie(e,t){A=t,M(),V();const a=document.getElementById("reel-plus-btn");a&&a.addEventListener("click",()=>{e("interests")});const n=document.querySelectorAll(".reel-tab");n.forEach(o=>{o.addEventListener("click",()=>{n.forEach(u=>u.classList.remove("active")),o.classList.add("active")})});const s=document.getElementById("reels-scroll");if(s){let o;s.addEventListener("scroll",()=>{clearTimeout(o),o=setTimeout(()=>{oe(s)},100)})}document.addEventListener("click",o=>{if(o.target.closest("[data-coriander]")&&A){A();return}const x=o.target.closest("[data-heart]");if(x){x.classList.toggle("liked");return}const c=o.target.closest("[data-bookmark]");if(c){c.classList.toggle("saved");return}const p=o.target.closest(".reel-follow-btn");if(p){p.textContent=p.textContent==="Follow"?"Following":"Follow",p.style.background=p.textContent==="Following"?"rgba(255,255,255,0.15)":"transparent";return}if(o.target.closest("[data-upload]")){H();return}const b=o.target.closest(".reel");if(b&&!o.target.closest(".reel-sidebar")&&!o.target.closest(".coriander-tag")&&!o.target.closest(".reel-bottom-info")){const d=b.querySelector("video");d&&re(d,b)}});const i=document.getElementById("upload-nav-btn");i&&i.addEventListener("click",H);const l=document.getElementById("video-upload");l&&l.addEventListener("change",le)}function oe(e){const t=e.querySelectorAll(".reel"),a=e.scrollTop,n=e.clientHeight,s=Math.round(a/n);if(s!==C){const i=t[C];if(i){const o=i.querySelector("video");if(o){o.pause();const u=i.querySelector(".reel-play-btn");u&&u.classList.remove("visible")}}C=s;const l=t[C];if(l){const o=l.querySelector("video");o&&Y(o)}}}function re(e,t){const a=t.querySelector(".reel-play-btn");e.paused?(e.play().catch(()=>{}),a&&(a.classList.add("visible"),setTimeout(()=>a.classList.remove("visible"),500))):(e.pause(),a&&a.classList.add("visible"))}function H(){const e=document.getElementById("video-upload");e&&e.click()}async function le(e){const t=Array.from(e.target.files);if(t.length===0)return;const s=3-await Z();if(s<=0){alert("Maximum 3 videos allowed. Delete existing videos to upload new ones.");return}const i=t.slice(0,s);for(const l of i)await Q(l.name,l,10);await M(),e.target.value=""}function ce(){V(),M()}let q=!1,E=!1,r=null,y=null,$=0,B=0,w=!1,f=0;const F=["Amul","Nandini","Vijaya"];let g={};const K=[{id:"ginger",name:"Ginger root",price:250,emoji:"🫚",sponsored:!0},{id:"garlic",name:"Garlic bulb",price:120,emoji:"🧄",sponsored:!1},{id:"masala",name:"Garam Masala",price:250,emoji:"🌶️",sponsored:!0},{id:"methi",name:"Kasuri Methi",price:150,emoji:"🌿",sponsored:!0},{id:"coriander",name:"fresh Coriander",price:750,emoji:"🥬",sponsored:!0},{id:"yogurt",name:"Yogurt/Cream Yogurt",price:1,emoji:"🥛",sponsored:!0,isBrandSwipeable:!0}],de=[{name:"Knife",emoji:"🔪",price:null},{name:"Chopping boards",emoji:"🪵",price:250},{name:"Chopsticks",emoji:"🥢",price:null},{name:"Spatula",emoji:"🥄",price:120},{name:"Pan",emoji:"🍳",price:450}];K.forEach(e=>{g[e.id]=1});function ue(){return`
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
            ${K.map(e=>ve(e)).join("")}
          </div>
        </div>

        <!-- Kitchen Essentials Sidebar -->
        <div class="kitchen-section">
          <div class="kitchen-title">Kitchen Essentials</div>
          ${de.map(e=>`
            <div class="kitchen-item">
              <span class="kitchen-item-icon">${e.emoji}</span>
              <span class="kitchen-item-name">${e.name}</span>
              ${e.price?`<span class="kitchen-item-price">₹${e.price}</span>`:""}
            </div>
          `).join("")}
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
          <span class="cart-count" id="cart-count">${U()}</span>
        </button>
      </div>
    </div>
  `}function ve(e){return e.isBrandSwipeable?`
      <div class="ingredient-card" data-id="${e.id}">
        ${e.sponsored?'<span class="ingredient-sponsored">(Sponsored)</span>':""}
        <div class="yogurt-wrapper" data-yogurt="true">
          <div class="yogurt-carousel" id="yogurt-carousel">
            ${F.map((t,a)=>`
              <div class="yogurt-brand ${a===0?"active":""}" data-brand-idx="${a}">
                <span class="ingredient-img">${e.emoji}</span>
                <span class="yogurt-brand-name">${t}</span>
              </div>
            `).join("")}
          </div>
          <div class="yogurt-dots">
            ${F.map((t,a)=>`
              <span class="yogurt-dot ${a===0?"active":""}" data-dot="${a}"></span>
            `).join("")}
          </div>
        </div>
        <span class="ingredient-name">${e.name}</span>
        <span class="ingredient-price">₹${e.price}</span>
        <div class="quantity-control">
          <button class="qty-btn" data-qty-action="decrease" data-item-id="${e.id}">−</button>
          <span class="qty-value" id="qty-${e.id}">${g[e.id]}</span>
          <button class="qty-btn" data-qty-action="increase" data-item-id="${e.id}">+</button>
        </div>
      </div>
    `:`
    <div class="ingredient-card" data-id="${e.id}">
      ${e.sponsored?'<span class="ingredient-sponsored">(Sponsored)</span>':""}
      <span class="ingredient-img">${e.emoji}</span>
      <span class="ingredient-name">${e.name}</span>
      <span class="ingredient-price">₹${e.price}</span>
      <div class="quantity-control">
        <button class="qty-btn" data-qty-action="decrease" data-item-id="${e.id}">−</button>
        <span class="qty-value" id="qty-${e.id}">${g[e.id]}</span>
        <button class="qty-btn" data-qty-action="increase" data-item-id="${e.id}">+</button>
      </div>
    </div>
  `}function U(){return Object.values(g).reduce((e,t)=>e+t,0)}function pe(){const e=document.getElementById("cart-count");e&&(e.textContent=U())}function me(){if(r=document.getElementById("instamart-sheet"),y=document.getElementById("instamart-backdrop"),!r||!y)return;y.addEventListener("click",I);const e=document.getElementById("sheet-handle");e&&(e.addEventListener("touchstart",be,{passive:!0}),e.addEventListener("touchmove",fe,{passive:!1}),e.addEventListener("touchend",G),e.addEventListener("mousedown",ye)),document.addEventListener("click",t=>{const a=t.target.closest("[data-qty-action]");if(a){const n=a.dataset.qtyAction,s=a.dataset.itemId;n==="increase"?g[s]=(g[s]||0)+1:n==="decrease"&&g[s]>0&&g[s]--;const i=document.getElementById(`qty-${s}`);i&&(i.textContent=g[s]),pe()}}),ge(),window.addEventListener("popstate",()=>{q&&I()})}function ge(){const e=document.getElementById("yogurt-carousel");if(!e)return;let t=0,a=0;e.addEventListener("touchstart",n=>{t=n.changedTouches[0].screenX},{passive:!0}),e.addEventListener("touchend",n=>{a=n.changedTouches[0].screenX,j(t,a)}),e.addEventListener("mousedown",n=>{t=n.screenX;const s=i=>{a=i.screenX,j(t,a),document.removeEventListener("mouseup",s)};document.addEventListener("mouseup",s)})}function j(e,t){const a=e-t;Math.abs(a)<30||(a>0&&f<F.length-1?f++:a<0&&f>0&&f--,he())}function he(){const e=document.getElementById("yogurt-carousel");if(!e)return;e.style.transform=`translateX(-${f*100}%)`,document.querySelectorAll(".yogurt-dot").forEach((n,s)=>{n.classList.toggle("active",s===f)}),e.querySelectorAll(".yogurt-brand").forEach((n,s)=>{n.classList.toggle("active",s===f)})}function be(e){w=!0,$=e.touches[0].clientY,r.style.transition="none"}function fe(e){if(!w)return;e.preventDefault(),B=e.touches[0].clientY;const t=B-$;if(E)t>0&&(r.style.transform=`translateX(-50%) translateY(${t}px)`);else if(t<0){const a=window.innerHeight,n=a*.55,s=Math.min(a,n+Math.abs(t));r.style.maxHeight=`${s}px`}else r.style.transform=`translateX(-50%) translateY(${t}px)`}function G(){if(!w)return;w=!1,r.style.transition="";const e=B-$;E?e>120?Le():e>250?I():r.style.transform="translateX(-50%) translateY(0)":e<-80?Ee():e>100?I():(r.style.transform="translateX(-50%) translateY(0)",r.style.maxHeight="55vh")}function ye(e){w=!0,$=e.clientY,r.style.transition="none";const t=n=>{if(!w)return;B=n.clientY;const s=B-$;if(s>0)r.style.transform=`translateX(-50%) translateY(${s}px)`;else if(!E){const i=window.innerHeight,l=i*.55,o=Math.min(i,l+Math.abs(s));r.style.maxHeight=`${o}px`}},a=()=>{G(),document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",a)};document.addEventListener("mousemove",t),document.addEventListener("mouseup",a)}function Ee(){E=!0,r.classList.add("expanded"),r.style.maxHeight="100dvh",r.style.transform="translateX(-50%) translateY(0)"}function Le(){E=!1,r.classList.remove("expanded"),r.style.maxHeight="55vh",r.style.transform="translateX(-50%) translateY(0)"}function we(){!r||!y||(q=!0,E=!1,history.pushState({instamart:!0},""),y.classList.add("visible"),r.classList.remove("expanded"),r.style.maxHeight="55vh",requestAnimationFrame(()=>{r.classList.add("visible")}))}function I(){!r||!y||(q=!1,E=!1,y.classList.remove("visible"),r.classList.remove("visible","expanded"),r.style.maxHeight="55vh",r.style.transform="")}const v={dietary:["vegetarian","lactose-intolerant"],wellnessGoals:["muscle-gain","fat-loss","blood-sugar","holistic"],cuisines:["chinese","indian","mexican"],flavors:["sweet","spicy"],mealTypes:["breakfast","dinner","snacks"],under10Min:!1,nutrients:["fibre","carbs","omega3"],weightGainLoss:!1,weightLoss:!1,specialInterests:["desserts","festival"],nonVeg:["seafood","chicken"],fitness:["gym"],ageGroups:["child","teenage","adult","60plus"]},X={dietary:{title:"DIETARY NEEDS",items:[{id:"vegetarian",icon:"🥬",label:"Vegetarian"},{id:"lactose-intolerant",icon:"🥛",label:"Lactose Intolerant"},{id:"vegan",icon:"🌱",label:"Vegan"},{id:"gluten-free",icon:"🌾",label:"Gluten Free"},{id:"keto",icon:"🥑",label:"Keto"}],hasSearch:!0,searchPlaceholder:"Add other restrictions..."},wellnessGoals:{title:"WELLNESS GOALS",items:[{id:"muscle-gain",icon:"💪",label:"Muscle Gain"},{id:"fat-loss",icon:"🔥",label:"Fat Loss"},{id:"blood-sugar",icon:"🧘",label:"Managing Blood Sugar"},{id:"holistic",icon:"🧘‍♀️",label:"Holistic Wellness"}],removable:!0},cuisines:{title:"CUISINE PREFERENCES",items:[{id:"chinese",icon:"🥟",label:"Chinese"},{id:"indian",icon:"🍛",label:"Indian"},{id:"mexican",icon:"🌮",label:"Mexican"},{id:"italian",icon:"🍝",label:"Italian"},{id:"japanese",icon:"🍣",label:"Japanese"},{id:"thai",icon:"🍜",label:"Thai"}],hasExplore:!0},flavors:{title:"FLAVOR PROFILE",items:[{id:"sweet",icon:"🍬",label:"Sweet"},{id:"spicy",icon:"🌶️",label:"Spicy"},{id:"sour",icon:"🍋",label:"Sour"},{id:"savory",icon:"🧂",label:"Savory"},{id:"bitter",icon:"🫒",label:"Bitter"}],checkmark:!0},mealTypes:{title:"MEAL TYPES & TIME",items:[{id:"breakfast",icon:"🍳",label:"Breakfast"},{id:"dinner",icon:"🍽️",label:"Dinner"},{id:"snacks",icon:"🍿",label:"Snacks"},{id:"lunch",icon:"🥗",label:"Lunch"}],hasToggle:!0,toggleLabel:"Show only 'Under 10 Min' recipes",toggleKey:"under10Min"},nutrients:{title:"NUTRIENT FOCUS",items:[{id:"fibre",icon:"🥦",label:"Fibre Rich"},{id:"carbs",icon:"🍞",label:"Carbs"},{id:"omega3",icon:"🐟",label:"Omega 3"},{id:"protein",icon:"🥩",label:"Protein"}],hasToggle:!0,toggleLabel:"Weight Gain / Weight Loss",toggleKey:"weightGainLoss",hasSecondToggle:!0,secondToggleLabel:"Weight Loss",secondToggleKey:"weightLoss"},specialInterests:{title:"SPECIAL INTERESTS",items:[{id:"desserts",icon:"🍰",label:"Desserts & Icecreams"},{id:"festival",icon:"🎉",label:"Festival & Traditional Food"},{id:"streetfood",icon:"🌭",label:"Street Food"},{id:"baking",icon:"🧁",label:"Baking"}],removable:!0},nonVeg:{title:"Select for non-veg suggestions:",note:"Mutton, Fish Prawns, etc.",items:[{id:"seafood",icon:"🦐",label:"Seafood"},{id:"chicken",icon:"🍗",label:"Chicken"}],removable:!0,hasAdd:!0},fitness:{title:"FITNESS FOCUS",items:[{id:"gym",icon:"🏋️",label:"Gym"},{id:"yoga",icon:"🧘",label:"Yoga"},{id:"cardio",icon:"🏃",label:"Cardio"}],removable:!0},ageGroups:{title:"AGE GROUPS",items:[{id:"child",icon:"👶",label:"0-5 Child"},{id:"teenage",icon:"🧑",label:"Teenage"},{id:"adult",icon:"👨",label:"Adult"},{id:"60plus",icon:"👴",label:"60+ Age"}],removable:!0}};function xe(){return`
    <div id="screen-interests" class="screen interests-screen">
      <!-- Header -->
      <div class="interests-header">
        <button class="interests-back-btn" id="interests-back">
          <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <span class="interests-header-title">Edit Your Wellness Profile</span>
        <div class="interests-header-icons">
          <button class="interests-header-icon">🔍</button>
          <button class="interests-header-icon">🔔</button>
        </div>
      </div>

      <!-- Scrollable Content -->
      <div class="interests-scroll" id="interests-scroll">
        ${Object.entries(X).map(([e,t])=>Se(e,t)).join("")}
      </div>

      <!-- Save Button -->
      <div class="save-button">
        <button class="save-btn-inner" id="save-interests">Save & Apply Changes</button>
      </div>
    </div>
  `}function Se(e,t){let a=`<div class="interests-section" data-section="${e}">`;return a+=`<div class="section-title">${t.title}</div>`,t.note&&(a+=`<div class="nonveg-note">${t.note}</div>`),a+='<div class="chips-container">',t.items.forEach(n=>{var i;const s=(i=v[e])==null?void 0:i.includes(n.id);a+=`
      <button class="interest-chip ${s?"selected":""}" 
              data-section-key="${e}" 
              data-item-id="${n.id}">
        <span class="chip-icon">${n.icon}</span>
        <span class="chip-label">${n.label}</span>
        ${t.removable&&s?'<span class="chip-remove" data-remove="true">✕</span>':""}
        ${t.checkmark&&s?'<span class="chip-check">✓</span>':""}
      </button>
    `}),t.hasExplore&&(a+='<button class="add-chip"><span>+</span> Explore all cuisines</button>'),t.hasAdd&&(a+='<button class="add-chip"><span>+</span></button>'),a+="</div>",t.hasSearch&&(a+=`
      <div class="interests-search">
        <span>🔍</span>
        <input type="text" placeholder="${t.searchPlaceholder}">
      </div>
    `),t.hasToggle&&(a+=`
      <div class="toggle-row">
        <span class="toggle-label">${t.toggleLabel}</span>
        <div class="toggle-switch ${v[t.toggleKey]?"on":""}" 
             data-toggle-key="${t.toggleKey}"></div>
      </div>
    `),t.hasSecondToggle&&(a+=`
      <div class="toggle-row">
        <span class="toggle-label">${t.secondToggleLabel}</span>
        <div class="toggle-switch ${v[t.secondToggleKey]?"on":""}" 
             data-toggle-key="${t.secondToggleKey}"></div>
      </div>
    `),a+="</div>",a}function ke(e){var n;const t=document.getElementById("interests-back");t&&t.addEventListener("click",()=>{e("reels")});const a=document.getElementById("save-interests");a&&a.addEventListener("click",()=>{a.textContent="✓ Saved!",a.style.background="#2B8A3E",setTimeout(()=>{a.textContent="Save & Apply Changes",a.style.background="",e("reels")},1e3)}),(n=document.getElementById("interests-scroll"))==null||n.addEventListener("click",s=>{var u,x;const i=s.target.closest(".toggle-switch");if(i){const c=i.dataset.toggleKey;v[c]=!v[c],i.classList.toggle("on");return}const l=s.target.closest(".chip-remove");if(l){const c=l.closest(".interest-chip"),p=c.dataset.sectionKey,S=c.dataset.itemId,b=(u=v[p])==null?void 0:u.indexOf(S);b>-1&&v[p].splice(b,1),c.classList.remove("selected"),l.remove();return}const o=s.target.closest(".interest-chip");if(o){const c=o.dataset.sectionKey,p=o.dataset.itemId,S=X[c];if(o.classList.contains("selected")){const d=(x=v[c])==null?void 0:x.indexOf(p);d>-1&&v[c].splice(d,1),o.classList.remove("selected");const O=o.querySelector(".chip-remove"),D=o.querySelector(".chip-check");O&&O.remove(),D&&D.remove()}else{if(v[c]||(v[c]=[]),v[c].push(p),o.classList.add("selected"),S.removable){const d=document.createElement("span");d.className="chip-remove",d.dataset.remove="true",d.textContent="✕",o.appendChild(d)}if(S.checkmark){const d=document.createElement("span");d.className="chip-check",d.textContent="✓",o.appendChild(d)}}}})}const $e=document.getElementById("app");let T="home",P=!1;function L(e){document.querySelectorAll(".screen").forEach(l=>l.classList.remove("active"));const a=document.getElementById(`screen-${e}`);a&&a.classList.add("active");const n=document.querySelector(".home-bottom-nav"),s=document.querySelector(".reel-top-bar"),i=document.querySelector(".reels-bottom-nav");document.getElementById("loading-overlay"),n&&(n.style.display="none"),s&&(s.style.display="none"),i&&(i.style.display="none"),e==="home"?n&&(n.style.display="flex"):e==="reels"&&(s&&(s.style.display="flex"),i&&(i.style.display="flex")),e==="reels"&&!P?(ie(L,we),P=!0):e==="reels"&&T!=="reels"&&ce(),e!=="reels"&&I(),T=e}async function Be(){try{await z()}catch(e){console.warn("IndexedDB init failed, videos won't persist:",e)}$e.innerHTML=`
    ${te()}
    ${ae()}
    ${xe()}
    ${ue()}
  `,se(L),me(),ke(L),L("home"),window.addEventListener("popstate",()=>{T==="interests"?L("reels"):T==="reels"&&L("home")}),console.log("🍲 Swiggy DIY App initialized")}Be();
