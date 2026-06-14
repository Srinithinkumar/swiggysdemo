// ============================================
// Screen 4: Interests / Wellness Profile
// ============================================

// State management for selections
const state = {
  dietary: ['vegetarian', 'lactose-intolerant'],
  wellnessGoals: ['muscle-gain', 'fat-loss', 'blood-sugar', 'holistic'],
  cuisines: ['chinese', 'indian', 'mexican'],
  flavors: ['sweet', 'spicy'],
  mealTypes: ['breakfast', 'dinner', 'snacks'],
  under10Min: false,
  nutrients: ['fibre', 'carbs', 'omega3'],
  weightGainLoss: false,
  weightLoss: false,
  specialInterests: ['desserts', 'festival'],
  nonVeg: ['seafood', 'chicken'],
  fitness: ['gym'],
  ageGroups: ['child', 'teenage', 'adult', '60plus'],
};

const SECTIONS = {
  dietary: {
    title: 'DIETARY NEEDS',
    items: [
      { id: 'vegetarian', icon: '🥬', label: 'Vegetarian' },
      { id: 'lactose-intolerant', icon: '🥛', label: 'Lactose Intolerant' },
      { id: 'vegan', icon: '🌱', label: 'Vegan' },
      { id: 'gluten-free', icon: '🌾', label: 'Gluten Free' },
      { id: 'keto', icon: '🥑', label: 'Keto' },
    ],
    hasSearch: true,
    searchPlaceholder: 'Add other restrictions...',
  },
  wellnessGoals: {
    title: 'WELLNESS GOALS',
    items: [
      { id: 'muscle-gain', icon: '💪', label: 'Muscle Gain' },
      { id: 'fat-loss', icon: '🔥', label: 'Fat Loss' },
      { id: 'blood-sugar', icon: '🧘', label: 'Managing Blood Sugar' },
      { id: 'holistic', icon: '🧘‍♀️', label: 'Holistic Wellness' },
    ],
    removable: true,
  },
  cuisines: {
    title: 'CUISINE PREFERENCES',
    items: [
      { id: 'chinese', icon: '🥟', label: 'Chinese' },
      { id: 'indian', icon: '🍛', label: 'Indian' },
      { id: 'mexican', icon: '🌮', label: 'Mexican' },
      { id: 'italian', icon: '🍝', label: 'Italian' },
      { id: 'japanese', icon: '🍣', label: 'Japanese' },
      { id: 'thai', icon: '🍜', label: 'Thai' },
    ],
    hasExplore: true,
  },
  flavors: {
    title: 'FLAVOR PROFILE',
    items: [
      { id: 'sweet', icon: '🍬', label: 'Sweet' },
      { id: 'spicy', icon: '🌶️', label: 'Spicy' },
      { id: 'sour', icon: '🍋', label: 'Sour' },
      { id: 'savory', icon: '🧂', label: 'Savory' },
      { id: 'bitter', icon: '🫒', label: 'Bitter' },
    ],
    checkmark: true,
  },
  mealTypes: {
    title: 'MEAL TYPES & TIME',
    items: [
      { id: 'breakfast', icon: '🍳', label: 'Breakfast' },
      { id: 'dinner', icon: '🍽️', label: 'Dinner' },
      { id: 'snacks', icon: '🍿', label: 'Snacks' },
      { id: 'lunch', icon: '🥗', label: 'Lunch' },
    ],
    hasToggle: true,
    toggleLabel: "Show only 'Under 10 Min' recipes",
    toggleKey: 'under10Min',
  },
  nutrients: {
    title: 'NUTRIENT FOCUS',
    items: [
      { id: 'fibre', icon: '🥦', label: 'Fibre Rich' },
      { id: 'carbs', icon: '🍞', label: 'Carbs' },
      { id: 'omega3', icon: '🐟', label: 'Omega 3' },
      { id: 'protein', icon: '🥩', label: 'Protein' },
    ],
    hasToggle: true,
    toggleLabel: 'Weight Gain / Weight Loss',
    toggleKey: 'weightGainLoss',
    hasSecondToggle: true,
    secondToggleLabel: 'Weight Loss',
    secondToggleKey: 'weightLoss',
  },
  specialInterests: {
    title: 'SPECIAL INTERESTS',
    items: [
      { id: 'desserts', icon: '🍰', label: 'Desserts & Icecreams' },
      { id: 'festival', icon: '🎉', label: 'Festival & Traditional Food' },
      { id: 'streetfood', icon: '🌭', label: 'Street Food' },
      { id: 'baking', icon: '🧁', label: 'Baking' },
    ],
    removable: true,
  },
  nonVeg: {
    title: 'Select for non-veg suggestions:',
    note: 'Mutton, Fish Prawns, etc.',
    items: [
      { id: 'seafood', icon: '🦐', label: 'Seafood' },
      { id: 'chicken', icon: '🍗', label: 'Chicken' },
    ],
    removable: true,
    hasAdd: true,
  },
  fitness: {
    title: 'FITNESS FOCUS',
    items: [
      { id: 'gym', icon: '🏋️', label: 'Gym' },
      { id: 'yoga', icon: '🧘', label: 'Yoga' },
      { id: 'cardio', icon: '🏃', label: 'Cardio' },
    ],
    removable: true,
  },
  ageGroups: {
    title: 'AGE GROUPS',
    items: [
      { id: 'child', icon: '👶', label: '0-5 Child' },
      { id: 'teenage', icon: '🧑', label: 'Teenage' },
      { id: 'adult', icon: '👨', label: 'Adult' },
      { id: '60plus', icon: '👴', label: '60+ Age' },
    ],
    removable: true,
  },
};

export function renderInterests() {
  return `
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
        ${Object.entries(SECTIONS).map(([key, section]) => renderSection(key, section)).join('')}
      </div>

      <!-- Save Button -->
      <div class="save-button">
        <button class="save-btn-inner" id="save-interests">Save & Apply Changes</button>
      </div>
    </div>
  `;
}

function renderSection(key, section) {
  let html = `<div class="interests-section" data-section="${key}">`;
  html += `<div class="section-title">${section.title}</div>`;

  if (section.note) {
    html += `<div class="nonveg-note">${section.note}</div>`;
  }

  html += `<div class="chips-container">`;

  section.items.forEach(item => {
    const isSelected = state[key]?.includes(item.id);
    html += `
      <button class="interest-chip ${isSelected ? 'selected' : ''}" 
              data-section-key="${key}" 
              data-item-id="${item.id}">
        <span class="chip-icon">${item.icon}</span>
        <span class="chip-label">${item.label}</span>
        ${section.removable && isSelected ? '<span class="chip-remove" data-remove="true">✕</span>' : ''}
        ${section.checkmark && isSelected ? '<span class="chip-check">✓</span>' : ''}
      </button>
    `;
  });

  if (section.hasExplore) {
    html += `<button class="add-chip"><span>+</span> Explore all cuisines</button>`;
  }
  if (section.hasAdd) {
    html += `<button class="add-chip"><span>+</span></button>`;
  }

  html += `</div>`;

  if (section.hasSearch) {
    html += `
      <div class="interests-search">
        <span>🔍</span>
        <input type="text" placeholder="${section.searchPlaceholder}">
      </div>
    `;
  }

  if (section.hasToggle) {
    html += `
      <div class="toggle-row">
        <span class="toggle-label">${section.toggleLabel}</span>
        <div class="toggle-switch ${state[section.toggleKey] ? 'on' : ''}" 
             data-toggle-key="${section.toggleKey}"></div>
      </div>
    `;
  }

  if (section.hasSecondToggle) {
    html += `
      <div class="toggle-row">
        <span class="toggle-label">${section.secondToggleLabel}</span>
        <div class="toggle-switch ${state[section.secondToggleKey] ? 'on' : ''}" 
             data-toggle-key="${section.secondToggleKey}"></div>
      </div>
    `;
  }

  html += `</div>`;
  return html;
}

export function initInterests(navigateTo) {
  // Back button
  const backBtn = document.getElementById('interests-back');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      navigateTo('reels');
    });
  }

  // Save button
  const saveBtn = document.getElementById('save-interests');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      // Show brief save confirmation
      saveBtn.textContent = '✓ Saved!';
      saveBtn.style.background = '#2B8A3E';
      setTimeout(() => {
        saveBtn.textContent = 'Save & Apply Changes';
        saveBtn.style.background = '';
        navigateTo('reels');
      }, 1000);
    });
  }

  // Chip selection
  document.getElementById('interests-scroll')?.addEventListener('click', (e) => {
    // Toggle switch
    const toggle = e.target.closest('.toggle-switch');
    if (toggle) {
      const key = toggle.dataset.toggleKey;
      state[key] = !state[key];
      toggle.classList.toggle('on');
      return;
    }

    // Remove button on chip
    const removeBtn = e.target.closest('.chip-remove');
    if (removeBtn) {
      const chip = removeBtn.closest('.interest-chip');
      const sectionKey = chip.dataset.sectionKey;
      const itemId = chip.dataset.itemId;
      
      // Remove from state
      const idx = state[sectionKey]?.indexOf(itemId);
      if (idx > -1) {
        state[sectionKey].splice(idx, 1);
      }
      
      // Update UI
      chip.classList.remove('selected');
      removeBtn.remove();
      return;
    }

    // Chip toggle
    const chip = e.target.closest('.interest-chip');
    if (chip) {
      const sectionKey = chip.dataset.sectionKey;
      const itemId = chip.dataset.itemId;
      const section = SECTIONS[sectionKey];
      const isCurrentlySelected = chip.classList.contains('selected');

      if (isCurrentlySelected) {
        // Deselect
        const idx = state[sectionKey]?.indexOf(itemId);
        if (idx > -1) state[sectionKey].splice(idx, 1);
        chip.classList.remove('selected');
        // Remove ✕ or ✓
        const remove = chip.querySelector('.chip-remove');
        const check = chip.querySelector('.chip-check');
        if (remove) remove.remove();
        if (check) check.remove();
      } else {
        // Select
        if (!state[sectionKey]) state[sectionKey] = [];
        state[sectionKey].push(itemId);
        chip.classList.add('selected');
        // Add ✕ or ✓
        if (section.removable) {
          const removeEl = document.createElement('span');
          removeEl.className = 'chip-remove';
          removeEl.dataset.remove = 'true';
          removeEl.textContent = '✕';
          chip.appendChild(removeEl);
        }
        if (section.checkmark) {
          const checkEl = document.createElement('span');
          checkEl.className = 'chip-check';
          checkEl.textContent = '✓';
          chip.appendChild(checkEl);
        }
      }
    }
  });
}
