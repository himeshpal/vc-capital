import React, { useState } from "react";
import {
  Building2,
  Users,
  DollarSign,
  Briefcase,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

const StartupRegistration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    foundingDate: "",
    teamSize: "",
    fundingStage: "",
    fundingAmount: "",
    pitch: "",
    revenue: "",
    website: "",
    location: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    // You can add navigation logic here
  };

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">
              Basic Information
            </h3>
            <div className="relative">
              <Building2
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300"
                size={20}
              />
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                className="pl-10 py-3 bg-white/10 border border-white/30 text-white placeholder-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.companyName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="relative">
              <Briefcase
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300"
                size={20}
              />
              <input
                type="text"
                name="industry"
                placeholder="Industry"
                className="pl-10 py-3 bg-white/10 border border-white/30 text-white placeholder-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.industry}
                onChange={handleInputChange}
                required
              />
            </div>
            <input
              type="date"
              name="foundingDate"
              className="pl-10 py-3 bg-white/10 border border-white/30 text-white placeholder-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.foundingDate}
              onChange={handleInputChange}
              required
            />
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">
              Team & Funding
            </h3>
            <div className="relative">
              <Users
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300"
                size={20}
              />
              <input
                type="number"
                name="teamSize"
                placeholder="Team Size"
                className="pl-10 py-3 bg-white/10 border border-white/30 text-white placeholder-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.teamSize}
                onChange={handleInputChange}
                required
              />
            </div>
            <select
              name="fundingStage"
              className="pl-10 py-3 bg-white/10 border border-white/30 text-white placeholder-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.fundingStage}
              onChange={handleInputChange}
              required
            >
              <option className="text-black" value="">
                Select Funding Stage
              </option>
              <option className="text-black" value="pre-seed">
                Pre-seed
              </option>
              <option className="text-black" value="seed">
                Seed
              </option>
              <option className="text-black" value="series-a">
                Series A
              </option>
              <option className="text-black" value="series-b">
                Series B+
              </option>
            </select>
            <div className="relative">
              <DollarSign
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300"
                size={20}
              />
              <input
                type="number"
                name="fundingAmount"
                placeholder="Funding Amount Sought ($)"
                className="pl-10 py-3 bg-white/10 border border-white/30 text-white placeholder-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.fundingAmount}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">
              Additional Details
            </h3>
            <textarea
              name="pitch"
              placeholder="Elevator Pitch"
              className="pl-4 py-3 bg-white/10 border border-white/30 text-white placeholder-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 h-32"
              value={formData.pitch}
              onChange={handleInputChange}
              required
            />
            <input
              type="url"
              name="website"
              placeholder="Website URL"
              className="pl-4 py-3 bg-white/10 border border-white/30 text-white placeholder-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.website}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="pl-4 py-3 bg-white/10 border border-white/30 text-white placeholder-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.location}
              onChange={handleInputChange}
              required
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-md rounded-xl shadow-2xl p-8 border border-white/30">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Startup Registration
          </h2>
          <div className="mb-8 flex justify-center">
            <div className="flex items-center">
              {[1, 2, 3].map((num) => (
                <React.Fragment key={num}>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step >= num ? "bg-purple-600" : "bg-white/20"
                    } text-white font-semibold`}
                  >
                    {num}
                  </div>
                  {num < 3 && (
                    <div
                      className={`w-12 h-1 ${
                        step > num ? "bg-purple-600" : "bg-white/20"
                      }`}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {renderStep()}

            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition duration-300"
                >
                  <ArrowLeft size={20} className="mr-2" />
                  Previous
                </button>
              )}
              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg ml-auto transition duration-300"
                >
                  Next
                  <ArrowRight size={20} className="ml-2" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex items-center px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg ml-auto transition duration-300"
                >
                  Submit Registration
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StartupRegistration;
