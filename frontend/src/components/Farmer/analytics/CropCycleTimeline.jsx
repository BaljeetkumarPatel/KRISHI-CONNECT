// src/components/analytics/CropCycleTimeline.jsx
const steps = [
  { title: "Sowing", description: "Seeds placed into prepared soil." },
  { title: "Fertilization", description: "Nutrients added to boost growth." },
  { title: "Weeding", description: "Removing unwanted weeds." },
  { title: "Irrigation", description: "Ensuring proper water supply." },
  { title: "Harvesting", description: "Crop collected at maturity." },
];

export default function CropCycleTimeline() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Crop Cycle Timeline</h2>

      <ol className="relative border-l border-gray-300 ml-3">
        {steps.map((step, index) => (
          <li key={index} className="mb-6 ml-6">
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-green-600 rounded-full"></span>
            <h3 className="font-semibold text-lg">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
