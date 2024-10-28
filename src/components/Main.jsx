import React from "react";
import { Link } from "react-router-dom";
import { Rocket, TrendingUp } from "lucide-react";

const MainRegistration = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white/20 backdrop-blur-md rounded-xl shadow-2xl p-8 border border-white/30">
        <div className="w-full text-center">
          <div className="flex flex-col md:flex-row md:space-x-16 items-center md:items-start mb-6">
            <div className="mb-4 md:mb-0 md:pl-10">
              <img
                className="w-32 rounded-2xl"
                src="https://res.cloudinary.com/dtrxc3hwu/image/upload/v1730119992/logo_vjmlzi.jpg"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold text-white mb-6">
                Welcome to VC Capital
              </h1>
              <p className="text-white/90 text-lg">
                Choose your path to begin the journey
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Startup Card */}
            <Link
              to="/startup"
              className="group p-6 bg-white/10 rounded-xl border border-white/30 hover:bg-white/20 transition duration-300 flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300">
                <Rocket className="text-white" size={32} />
              </div>
              <h2 className="text-2xl font-semibold text-white mb-3">
                For Startups
              </h2>
              <p className="text-white/80 text-center mb-4">
                Register your startup and connect with potential investors.
                Showcase your vision and reach out to the right people.
              </p>
              <span className="inline-flex items-center text-white font-semibold">
                Register as Startup
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>

            {/* Investor Card */}
            <Link
              to="/investor"
              className="group p-6 bg-white/10 rounded-xl border border-white/30 hover:bg-white/20 transition duration-300 flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h2 className="text-2xl font-semibold text-white mb-3">
                For Investors
              </h2>
              <p className="text-white/80 text-center mb-4">
                Find promising startups that match your investment criteria.
                Connect with innovative founders and explore opportunities.
              </p>
              <span className="inline-flex items-center text-white font-semibold">
                Register as Investor
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          </div>

          <p className="text-white/70 mt-12 text-sm">
            Already registered?{" "}
            <a
              href="/login"
              className="text-purple-950 hover:text-purple-700 underline"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainRegistration;
