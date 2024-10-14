const domains = [
  "AI",
  "Fintech",
  "HealthTech",
  "EdTech",
  "Clean Energy",
  "Ecommerce",
  "Cybersecurity",
  "Blockchain",
  "Web 3",
  "IoT",
  "Telemedicine",
  "Gaming",
  "Digital Marketing",
  "Logistics",
  "Virtual Reality",
  "Augmented Reality",
  "Robotics",
  "Smart Cities",
  "Big Data",
  "Cloud Computing",
  "InsurTech",
  "Supply Chain Management",
  "Biotechnology",
  "Food Tech",
  "Wearable Technology",
  "Real Estate Tech",
  "Travel Tech",
  "Social Media",
  "Entertainment Tech",
  "HR Tech",
  "MarTech",
  "PropTech",
  "Telecom",
];

export default function Domains() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold pb-5 text-gray-800 mb-8 text-center">
          Startup Sectors
        </h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {domains.map((domain) => (
            <li key={domain}>
              <a
                href={`/startups/${domain.toLowerCase().replace(/\s+/g, "-")}`}
                className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-gray-50 cursor-pointer"
              >
                <span className="text-lg font-semibold text-gray-700 hover:text-gray-900">
                  {domain}
                </span>
                <div className="mt-2 text-sm text-gray-600">
                  Explore opportunities in {domain}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
