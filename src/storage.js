// ============================================
// IndexedDB Storage for Video Persistence
// ============================================

const DB_NAME = 'SwiggyDIY';
const DB_VERSION = 1;
const STORE_NAME = 'videos';

let db = null;

/**
 * Initialize IndexedDB
 */
export async function initStorage() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const database = event.target.result;
      if (!database.objectStoreNames.contains(STORE_NAME)) {
        database.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    };

    request.onsuccess = (event) => {
      db = event.target.result;
      // Request persistent storage so browser doesn't evict our data
      if (navigator.storage && navigator.storage.persist) {
        navigator.storage.persist();
      }
      resolve(db);
    };

    request.onerror = (event) => {
      console.error('IndexedDB error:', event.target.error);
      reject(event.target.error);
    };
  });
}

/**
 * Save a video blob to IndexedDB
 * @param {string} name - Video filename
 * @param {Blob} blob - Video data
 * @param {number} duration - Video duration in seconds
 * @returns {Promise<number>} - ID of saved video
 */
export async function saveVideo(name, blob, duration = 10) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const record = {
      name,
      blob,
      duration,
      createdAt: Date.now(),
    };
    const request = store.add(record);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Get all saved videos
 * @returns {Promise<Array>} - Array of video records
 */
export async function getAllVideos() {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Get a video by ID
 * @param {number} id
 * @returns {Promise<Object>}
 */
export async function getVideo(id) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const request = store.get(id);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Delete a video by ID
 * @param {number} id
 */
export async function deleteVideo(id) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const request = store.delete(id);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

/**
 * Get count of stored videos
 * @returns {Promise<number>}
 */
export async function getVideoCount() {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const request = store.count();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Create object URL from video blob
 * @param {Blob} blob
 * @returns {string}
 */
export function createVideoURL(blob) {
  return URL.createObjectURL(blob);
}

/**
 * Revoke object URL to free memory
 * @param {string} url
 */
export function revokeVideoURL(url) {
  URL.revokeObjectURL(url);
}
