// frontend/src/hooks/useFetch.js
import { useState } from "react";

export default function useFetch() {
  const [loading, setLoading] = useState(false);

  const get = async (url) => {
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);
      return data;
    } catch (err) {
      setLoading(false);
      console.error("GET error:", err);
      return { success: false };
    }
  };

  const post = async (url, body) => {
    try {
      setLoading(true);
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      const data = await res.json();
      setLoading(false);
      return data;
    } catch (err) {
      setLoading(false);
      console.error("POST error:", err);
      return { success: false };
    }
  };

  return { get, post, loading };
}
