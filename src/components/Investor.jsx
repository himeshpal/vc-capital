import React, { useState } from "react";
import {
  Building2,
  Users,
  DollarSign,
  Briefcase,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

const InvestorRegistration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    role: "",
    investmentFocus: "",
    investmentRange: "",
    portfolioSize: "",
    investmentPhilosophy: "",
    linkedIn: "",
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
    console.log("Form submitted:", formData);
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
              Personal Information
            </h3>
            <div className="relative">
              <Users
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300"
                size={20}
              />
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="pl-10 py-3 bg-white/10 border border-white/30 text-white placeholder-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="relative">
              <Building2
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300"
                size={20}
              />
              <input
                type="text"
                name="organization"
                placeholder="Organization/Firm"
                className="pl-10 py-3 bg-white/10 border border-white/30 text-white placeholder-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.organization}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="relative">
              <Briefcase
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300"
                size={20}
              />
              <select
                name="role"
                className="pl-10 py-3 bg-white/10 border border-white/30 text-white placeholder-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.role}
                onChange={handleInputChange}
                required
              >
                <option className="text-black" value="">
                  Select Your Role
                </option>
                <option className="text-black" value="HNI">
                  HNI
                </option>
                <option className="text-black" value="Venture Capitalist">
                  Venture Capitalist
                </option>
                <option className="text-black" value="Seed Accelerator">
                  Seed Accelerator
                </option>
                <option className="text-black" value="Angel Investor">
                  Angel Investor
                </option>
                <option className="text-black" value="Institutional Investor">
                  Institutional Investor
                </option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">
              Investment Preferences
            </h3>
            <select
              name="investmentFocus"
              className="pl-10 py-3 bg-white/10 border border-white/30 text-white placeholder-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.investmentFocus}
              onChange={handleInputChange}
              required
            >
              <option className="text-black" value="">
                Select Investment Focus
              </option>
              <option className="text-black" value="seed">
                Seed Stage
              </option>
              <option className="text-black" value="early">
                Early Stage
              </option>
              <option className="text-black" value="growth">
                Growth Stage
              </option>
              <option className="text-black" value="late">
                Late Stage
              </option>
            </select>
            <div className="relative">
              <DollarSign
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300"
                size={20}
              />
              <select
                name="investmentRange"
                className="pl-10 py-3 bg-white/10 border border-white/30 text-white placeholder-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.investmentRange}
                onChange={handleInputChange}
                required
              >
                <option className="text-black" value="">
                  Typical Investment Range
                </option>
                <option className="text-black" value="0-100k">
                  $0 - $100K
                </option>
                <option className="text-black" value="100k-500k">
                  $100K - $500K
                </option>
                <option className="text-black" value="500k-1m">
                  $500K - $1M
                </option>
                <option className="text-black" value="1m+">
                  $1M+
                </option>
              </select>
            </div>
            <div className="relative">
              <Briefcase
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300"
                size={20}
              />
              <input
                type="number"
                name="portfolioSize"
                placeholder="Current Portfolio Size"
                className="pl-10 py-3 bg-white/10 border border-white/30 text-white placeholder-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.portfolioSize}
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
              name="investmentPhilosophy"
              placeholder="Investment Philosophy"
              className="pl-4 py-3 bg-white/10 border border-white/30 text-white placeholder-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 h-32"
              value={formData.investmentPhilosophy}
              onChange={handleInputChange}
              required
            />
            <input
              type="url"
              name="linkedIn"
              placeholder="LinkedIn Profile URL"
              className="pl-4 py-3 bg-white/10 border border-white/30 text-white placeholder-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.linkedIn}
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
    <div className="min-h-screen bg-purple-700 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-md rounded-xl shadow-2xl p-8 border border-white/30">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Investor Registration
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
                  x
                  className="flex items-center px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg ml-auto transition duration-300"
                >
                  <a href="/login">Submit Registration</a>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InvestorRegistration;
