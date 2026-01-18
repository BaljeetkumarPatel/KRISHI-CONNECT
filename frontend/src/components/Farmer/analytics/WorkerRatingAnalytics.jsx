// src/components/analytics/WorkerRatingAnalytics.jsx
const ratings = [
  { category: "Behaviour", stars: 5 },
  { category: "Punctuality", stars: 4 },
  { category: "Hardwork", stars: 5 },
];

export default function WorkerRatingAnalytics() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Worker Rating Analytics</h2>

      <div className="space-y-4">
        {ratings.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="font-medium">{item.category}</span>

            <div className="text-yellow-500 text-lg">
              {"⭐".repeat(item.stars)}
              {"☆".repeat(5 - item.stars)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
