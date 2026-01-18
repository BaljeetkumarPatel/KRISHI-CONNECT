// frontend/src/utils/api.js
const API_BASE = import.meta.env.VITE_API_URL || "/api";

const headers = {
  "Content-Type": "application/json",
};

export async function apiGet(url) {
  try {
    const res = await fetch(`${API_BASE}${url}`);
    return await res.json();
  } catch (err) {
    console.error("GET Error:", err);
    return { success: false };
  }
}

export async function apiPost(url, body) {
  try {
    const res = await fetch(`${API_BASE}${url}`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });
    return await res.json();
  } catch (err) {
    console.error("POST Error:", err);
    return { success: false };
  }
}

export async function apiPut(url, body) {
  try {
    const res = await fetch(`${API_BASE}${url}`, {
      method: "PUT",
      headers,
      body: JSON.stringify(body),
    });
    return await res.json();
  } catch (err) {
    console.error("PUT Error:", err);
    return { success: false };
  }
}

export async function apiDelete(url) {
  try {
    const res = await fetch(`${API_BASE}${url}`, {
      method: "DELETE",
    });
    return await res.json();
  } catch (err) {
    console.error("DELETE Error:", err);
    return { success: false };
  }
}
