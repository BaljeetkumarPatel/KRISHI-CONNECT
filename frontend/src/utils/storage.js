// frontend/src/utils/storage.js

export const storage = {
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  get(key) {
    const val = localStorage.getItem(key);
    try {
      return JSON.parse(val);
    } catch {
      return val;
    }
  },

  remove(key) {
    localStorage.removeItem(key);
  },

  clear() {
    localStorage.clear();
  }
};
