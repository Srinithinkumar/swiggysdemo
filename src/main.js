// ============================================
// Main App Entry Point - Swiggy DIY Clone
// ============================================

import { initStorage } from './storage.js';
import { renderHome, initHome } from './home.js';
import { renderReels, initReels, reloadReels } from './reels.js';
import { renderInstamart, initInstamart, showInstamart, hideInstamart } from './instamart.js';
import { renderInterests, initInterests } from './interests.js';

const app = document.getElementById('app');
let currentScreen = 'home';
let reelsInitialized = false;

/**
 * Navigate between screens
 */
function navigateTo(screenId) {
  // Hide all screens
  const screens = document.querySelectorAll('.screen');
  screens.forEach(s => s.classList.remove('active'));

  // Show target screen
  const target = document.getElementById(`screen-${screenId}`);
  if (target) {
    target.classList.add('active');
  }

  // Manage fixed-position navs visibility
  const homeNav = document.querySelector('.home-bottom-nav');
  const reelsTopBar = document.querySelector('.reel-top-bar');
  const reelsBottomNav = document.querySelector('.reels-bottom-nav');
  const loadingOverlay = document.getElementById('loading-overlay');

  // Hide all fixed navs first
  if (homeNav) homeNav.style.display = 'none';
  if (reelsTopBar) reelsTopBar.style.display = 'none';
  if (reelsBottomNav) reelsBottomNav.style.display = 'none';

  // Show navs for active screen
  if (screenId === 'home') {
    if (homeNav) homeNav.style.display = 'flex';
  } else if (screenId === 'reels') {
    if (reelsTopBar) reelsTopBar.style.display = 'flex';
    if (reelsBottomNav) reelsBottomNav.style.display = 'flex';
  }

  // Handle screen-specific logic
  if (screenId === 'reels' && !reelsInitialized) {
    initReels(navigateTo, showInstamart);
    reelsInitialized = true;
  } else if (screenId === 'reels' && currentScreen !== 'reels') {
    // Returning to reels → show DIY logo animation
    reloadReels();
  }

  // Hide instamart if navigating away from reels
  if (screenId !== 'reels') {
    hideInstamart();
  }

  currentScreen = screenId;
}

/**
 * Initialize the app
 */
async function init() {
  try {
    // Initialize IndexedDB
    await initStorage();
  } catch (err) {
    console.warn('IndexedDB init failed, videos won\'t persist:', err);
  }

  // Render all screens
  app.innerHTML = `
    ${renderHome()}
    ${renderReels()}
    ${renderInterests()}
    ${renderInstamart()}
  `;

  // Initialize screens
  initHome(navigateTo);
  initInstamart();
  initInterests(navigateTo);

  // Start on home screen
  navigateTo('home');

  // Handle hardware back button
  window.addEventListener('popstate', () => {
    if (currentScreen === 'interests') {
      navigateTo('reels');
    } else if (currentScreen === 'reels') {
      navigateTo('home');
    }
  });

  console.log('🍲 Swiggy DIY App initialized');
}

// Start the app
init();
