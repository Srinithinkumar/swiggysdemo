// ============================================
// Screen 2: DIY Reels (Instagram Reels-style)
// ============================================

import { getAllVideos, saveVideo, createVideoURL, getVideoCount } from './storage.js';

let reelVideos = [];
let currentReelIndex = 0;
let navigateToFn = null;
let showInstamartFn = null;

// SVG Icons
const ICONS = {
  plus: `<svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  chevronDown: `<svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>`,
  heart: `<svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  share: `<svg viewBox="0 0 24 24"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>`,
  bookmark: `<svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>`,
  play: `<svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3" fill="white"/></svg>`,
  bites: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="8" height="7" rx="1"/><rect x="14" y="3" width="8" height="7" rx="1"/><rect x="2" y="14" width="8" height="7" rx="1"/><rect x="14" y="14" width="8" height="7" rx="1"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  upload: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  inbox: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  profile: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
};

const REEL_DATA = [
  {
    username: 'CilantroMaa',
    caption: 'Traditional Indian cooking at its finest! 🍛',
    hashtags: '#HomeCooking #IndianFood',
    likes: '55K',
    rating: '4.2',
    reviews: '330',
  },
  {
    username: 'SpiceMaster',
    caption: 'Quick 10-min curry recipe 🌶️',
    hashtags: '#QuickRecipes #SpicyFood',
    likes: '32K',
    rating: '4.5',
    reviews: '210',
  },
  {
    username: 'KitchenStories',
    caption: 'Average Summer Night in India 🌙😋',
    hashtags: '#SummerVibes #IndianKitchen',
    likes: '78K',
    rating: '4.8',
    reviews: '520',
  },
];

const DEFAULT_REEL_VIDEO_PATHS = [
  `${window.location.pathname.replace(/\/$/, '')}/videos/demo1.mp4`,
  `${window.location.pathname.replace(/\/$/, '')}/videos/demo2.mp4`,
  `${window.location.pathname.replace(/\/$/, '')}/videos/demo3.mp4`,
];

export function renderReels() {
  return `
    <div id="screen-reels" class="screen reels-screen">
      <!-- Top Bar -->
      <div class="reel-top-bar">
        <button class="reel-plus-btn" id="reel-plus-btn">${ICONS.plus}</button>
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
        <button class="reel-top-right">${ICONS.chevronDown}</button>
      </div>

      <!-- Reels Scroll Container -->
      <div class="reels-scroll" id="reels-scroll">
        <!-- Reels will be dynamically inserted here -->
      </div>

      <!-- Bottom Nav -->
      <nav class="reels-bottom-nav">
        <button class="reels-nav-item active">
          <span class="reels-nav-icon">${ICONS.bites}</span>
          <span>bites</span>
        </button>
        <button class="reels-nav-item">
          <span class="reels-nav-icon">${ICONS.search}</span>
          <span>search</span>
        </button>
        <button class="reels-nav-item upload" id="upload-nav-btn">
          <span class="reels-nav-icon">${ICONS.upload}</span>
          <span>uploads</span>
        </button>
        <button class="reels-nav-item">
          <span class="reels-nav-icon">${ICONS.inbox}</span>
          <span>inbox</span>
        </button>
        <button class="reels-nav-item">
          <span class="reels-nav-icon">${ICONS.profile}</span>
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
  `;
}

function buildReelHTML(data, index, videoUrl) {
  const hasVideo = !!videoUrl;
  return `
    <div class="reel" data-index="${index}">
      ${hasVideo
        ? `<video src="${videoUrl}" loop playsinline muted preload="auto"></video>`
        : `<div class="reel-placeholder">
            <div class="reel-placeholder-icon">🎬</div>
            <div>Upload videos to see your reels</div>
            <button class="reel-upload-btn" data-upload="true">Upload Video</button>
          </div>`
      }
      
      ${hasVideo ? `<div class="reel-play-btn" data-playbtn="${index}">${ICONS.play}</div>` : ''}

      <!-- Right Sidebar -->
      <div class="reel-sidebar">
        <button class="sidebar-item heart" data-heart="${index}">
          <span class="sidebar-icon">${ICONS.heart}</span>
          <span class="sidebar-label">${data.likes}</span>
        </button>
        <button class="sidebar-item">
          <span class="sidebar-icon">
            <div class="rating-badge">${data.rating}</div>
          </span>
          <span class="sidebar-label">${data.reviews}</span>
        </button>
        <button class="sidebar-item share-icon">
          <span class="sidebar-icon">${ICONS.share}</span>
          <span class="sidebar-label">Share</span>
        </button>
        <button class="sidebar-item bookmark-icon" data-bookmark="${index}">
          <span class="sidebar-icon">${ICONS.bookmark}</span>
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
          <span class="reel-username">${data.username}</span>
          <button class="reel-follow-btn">Follow</button>
        </div>
        <div class="reel-caption">
          ${data.caption}
          <span class="reel-hashtag">${data.hashtags}</span>
        </div>
      </div>
    </div>
  `;
}

async function loadReels() {
  const scrollContainer = document.getElementById('reels-scroll');
  if (!scrollContainer) return;

  let reelVideoSources = [...DEFAULT_REEL_VIDEO_PATHS];

  try {
    const videos = await getAllVideos();
    const uploadedVideoUrls = videos.map(v => createVideoURL(v.blob));
    if (uploadedVideoUrls.length > 0) {
      reelVideoSources = uploadedVideoUrls;
    }
  } catch (err) {
    console.warn('Unable to read stored videos, using demo reels instead.', err);
  }

  let html = '';
  for (let i = 0; i < 3; i++) {
    const data = REEL_DATA[i] || REEL_DATA[0];
    const url = reelVideoSources[i] || DEFAULT_REEL_VIDEO_PATHS[i] || null;
    html += buildReelHTML(data, i, url);
  }

  scrollContainer.innerHTML = html;
  reelVideos = reelVideoSources.slice(0, 3);

  const videos = scrollContainer.querySelectorAll('video');
  videos.forEach((video) => prepareVideoForPlayback(video));
}

function prepareVideoForPlayback(video) {
  if (!video) return;

  video.muted = true;
  video.playsInline = true;
  video.autoplay = true;
  video.setAttribute('playsinline', '');
  video.setAttribute('webkit-playsinline', '');
  video.setAttribute('muted', '');
  video.preload = 'metadata';

  const startPlayback = () => {
    video.play().catch(() => {});
  };

  video.addEventListener('canplay', startPlayback, { once: true });
  video.addEventListener('loadeddata', startPlayback, { once: true });
  video.addEventListener('error', () => {
    video.setAttribute('data-failed', 'true');
  }, { once: true });

  requestAnimationFrame(() => startPlayback());
  setTimeout(() => startPlayback(), 250);

  document.addEventListener('pointerdown', startPlayback, { once: true });
  document.addEventListener('touchstart', startPlayback, { once: true });
  window.addEventListener('focus', startPlayback, { once: true });
}

function showDIYLoadingAnimation() {
  const overlay = document.getElementById('loading-overlay');
  const logo = document.getElementById('diy-logo');
  
  if (overlay) {
    overlay.classList.add('visible');
    setTimeout(() => {
      overlay.classList.remove('visible');
      // Show the small logo in top bar with stir animation
      if (logo) {
        logo.classList.add('visible', 'stirring');
        setTimeout(() => {
          logo.classList.remove('stirring');
        }, 2000);
        setTimeout(() => {
          logo.classList.remove('visible');
        }, 3500);
      }
    }, 1800);
  }
}

export function initReels(navigateTo, showInstamart) {
  navigateToFn = navigateTo;
  showInstamartFn = showInstamart;

  // Load reels
  loadReels();

  // Show DIY loading animation
  showDIYLoadingAnimation();

  // Plus button → Interests
  const plusBtn = document.getElementById('reel-plus-btn');
  if (plusBtn) {
    plusBtn.addEventListener('click', () => {
      navigateTo('interests');
    });
  }

  // Tab switching
  const tabs = document.querySelectorAll('.reel-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // Scroll snap - handle video play/pause on scroll
  const scrollContainer = document.getElementById('reels-scroll');
  if (scrollContainer) {
    let scrollTimeout;
    scrollContainer.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        handleReelChange(scrollContainer);
      }, 100);
    });
  }

  // Event delegation for reel interactions
  document.addEventListener('click', (e) => {
    // Coriander tag → Open Instamart
    const corianderTag = e.target.closest('[data-coriander]');
    if (corianderTag && showInstamartFn) {
      showInstamartFn();
      return;
    }

    // Heart/Like
    const heartBtn = e.target.closest('[data-heart]');
    if (heartBtn) {
      heartBtn.classList.toggle('liked');
      return;
    }

    // Bookmark
    const bookmarkBtn = e.target.closest('[data-bookmark]');
    if (bookmarkBtn) {
      bookmarkBtn.classList.toggle('saved');
      return;
    }

    // Follow button
    const followBtn = e.target.closest('.reel-follow-btn');
    if (followBtn) {
      followBtn.textContent = followBtn.textContent === 'Follow' ? 'Following' : 'Follow';
      followBtn.style.background = followBtn.textContent === 'Following' ? 'rgba(255,255,255,0.15)' : 'transparent';
      return;
    }

    // Upload button in placeholder
    const uploadBtn = e.target.closest('[data-upload]');
    if (uploadBtn) {
      triggerUpload();
      return;
    }

    // Video tap → play/pause
    const reel = e.target.closest('.reel');
    if (reel && !e.target.closest('.reel-sidebar') && !e.target.closest('.coriander-tag') && !e.target.closest('.reel-bottom-info')) {
      const video = reel.querySelector('video');
      if (video) {
        toggleVideoPlayback(video, reel);
      }
    }
  });

  // Upload nav button
  const uploadNavBtn = document.getElementById('upload-nav-btn');
  if (uploadNavBtn) {
    uploadNavBtn.addEventListener('click', triggerUpload);
  }

  // File input change handler
  const fileInput = document.getElementById('video-upload');
  if (fileInput) {
    fileInput.addEventListener('change', handleVideoUpload);
  }
}

function handleReelChange(container) {
  const reels = container.querySelectorAll('.reel');
  const scrollTop = container.scrollTop;
  const reelHeight = container.clientHeight;
  const newIndex = Math.round(scrollTop / reelHeight);

  if (newIndex !== currentReelIndex) {
    const prevReel = reels[currentReelIndex];
    if (prevReel) {
      const prevVideo = prevReel.querySelector('video');
      if (prevVideo) {
        prevVideo.pause();
        const prevPlayBtn = prevReel.querySelector('.reel-play-btn');
        if (prevPlayBtn) prevPlayBtn.classList.remove('visible');
      }
    }

    currentReelIndex = newIndex;
    const currentReel = reels[currentReelIndex];
    if (currentReel) {
      const currentVideo = currentReel.querySelector('video');
      if (currentVideo) {
        prepareVideoForPlayback(currentVideo);
      }
    }
  }
}

function toggleVideoPlayback(video, reel) {
  const playBtn = reel.querySelector('.reel-play-btn');
  if (video.paused) {
    video.play().catch(() => {});
    if (playBtn) {
      playBtn.classList.add('visible');
      setTimeout(() => playBtn.classList.remove('visible'), 500);
    }
  } else {
    video.pause();
    if (playBtn) playBtn.classList.add('visible');
  }
}

function triggerUpload() {
  const fileInput = document.getElementById('video-upload');
  if (fileInput) {
    fileInput.click();
  }
}

async function handleVideoUpload(e) {
  const files = Array.from(e.target.files);
  if (files.length === 0) return;

  const currentCount = await getVideoCount();
  const maxVideos = 3;
  const remaining = maxVideos - currentCount;

  if (remaining <= 0) {
    alert('Maximum 3 videos allowed. Delete existing videos to upload new ones.');
    return;
  }

  const toUpload = files.slice(0, remaining);

  for (const file of toUpload) {
    await saveVideo(file.name, file, 10);
  }

  // Reload reels
  await loadReels();
  
  // Reset file input
  e.target.value = '';
}

/**
 * Call this to re-trigger the DIY loading animation (on reload)
 */
export function reloadReels() {
  showDIYLoadingAnimation();
  loadReels();
}
