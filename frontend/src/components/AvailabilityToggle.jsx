import React, { useState } from "react";

/**
 * AvailabilityToggle
 *
 * Props:
 * - initialOnline: boolean (initial state)
 * - onToggle: async function(newState) -> optional. If provided, called when user toggles.
 * - userId: optional, used for API calls
 *
 * Accessibility:
 * - Uses aria-pressed and descriptive labels
 *
 * Example usage:
 * <AvailabilityToggle initialOnline={true} userId={user.id} onToggle={async (s)=>{ await apiToggle(s)}} />
 */
export default function AvailabilityToggle({ initialOnline = false, onToggle, userId }) {
  const [online, setOnline] = useState(initialOnline);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // optimistic toggle with optional external handler
  const handleToggle = async () => {
    const next = !online;
    setError(null);
    setOnline(next); // optimistic UI
    if (!onToggle) return;

    try {
      setLoading(true);
      await onToggle(next, { userId }); // developer provides implementation
    } catch (err) {
      // rollback on failure
      setOnline(!next);
      setError(err?.message || "Failed to update status");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-col">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleToggle}
            disabled={loading}
            aria-pressed={online}
            aria-label={online ? "Set offline" : "Set online"}
            className={`relative inline-flex items-center h-10 w-20 rounded-full p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              online ? "bg-green-600 focus:ring-green-300" : "bg-gray-300 focus:ring-gray-200"
            }`}
          >
            <span
              className={`inline-block h-8 w-8 rounded-full bg-white transform transition-transform ${
                online ? "translate-x-10" : "translate-x-0"
              }`}
            />
          </button>

          <div>
            <div className="text-sm font-semibold">
              {online ? (
                <span className="text-green-700">Active</span>
              ) : (
                <span className="text-red-600">Paused</span>
              )}
            </div>
            <div className="text-xs text-gray-500">
              {online ? "You are receiving calls" : "You are offline"}
            </div>
          </div>
        </div>

        {loading && <div className="text-xs text-gray-500 mt-2">Updating status...</div>}
        {error && <div className="text-xs text-red-600 mt-2">Error: {error}</div>}
      </div>
    </div>
  );
}
