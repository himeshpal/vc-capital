// src/components/DomainStartups.js

import React from "react";
import { useParams } from "react-router-dom";

const startupsData = {
  ai: [
    {
      name: "Dharma AI",
      description: "Innovative AI solutions for businesses.",
    },
    {
      name: "Mediatrex AI",
      description: "Revolutionizing machine learning applications.",
    },
  ],
  fintech: [
    {
      name: "POP UPI",
      description: "Simplifying banking with technology.",
    },
    {
      name: "Mutualeasy",
      description: "Financial solutions for everyone.",
    },
  ],
  healthtech: [
    {
      name: "healthconnect",
      description:
        "Telemedicine platform providing remote consultations and healthcare services, making health access easier.",
    },
    {
      name: "vitaltrack",
      description:
        "Wearable devices that monitor vital signs and health metrics, promoting proactive healthcare management.",
    },
  ],
  edtech: [
    {
      name: "learnsmart",
      description:
        "An online learning platform offering personalized learning experiences through adaptive technology.",
    },
    {
      name: "skillquest",
      description:
        "Gamified learning solutions for K-12 and higher education, enhancing student engagement and retention.",
    },
  ],
  cleanEnergy: [
    {
      name: "GreenPower",
      description: "Renewable energy solutions for sustainable living.",
    },
    {
      name: "SolarInnovate",
      description:
        "Advanced solar technology for residential and commercial use.",
    },
    {
      name: "EcoFuel",
      description: "Biomass energy solutions for eco-friendly power.",
    },
    {
      name: "WindWorks",
      description:
        "Innovative wind turbine solutions for efficient energy generation.",
    },
  ],
  ecommerce: [
    {
      name: "ShopSmart",
      description: "E-commerce platform for personalized shopping experiences.",
    },
    {
      name: "MarketConnect",
      description: "Connecting local businesses with online consumers.",
    },
    {
      name: "CartCrafter",
      description:
        "AI-powered tools for inventory management and sales analytics.",
    },
    {
      name: "FlashDeals",
      description: "Limited-time offers on trending products.",
    },
  ],
  cybersecurity: [
    {
      name: "SecureNet",
      description: "Comprehensive security solutions for businesses.",
    },
    {
      name: "CyberGuard",
      description: "Advanced threat detection and response services.",
    },
    {
      name: "DataShield",
      description: "Protecting sensitive data from cyber threats.",
    },
    {
      name: "PhishBlock",
      description: "AI-driven anti-phishing solutions for organizations.",
    },
  ],
  blockchain: [
    {
      name: "ChainTech",
      description: "Blockchain solutions for secure transactions.",
    },
    {
      name: "CryptoWallet",
      description: "User-friendly digital wallets for cryptocurrency.",
    },
    {
      name: "SmartContracts Inc.",
      description: "Automating agreements through blockchain technology.",
    },
    {
      name: "DecentralizeIt",
      description: "Innovative platforms for decentralized finance.",
    },
  ],
  web3: [
    {
      name: "Web3 Innovators",
      description: "Building decentralized applications for a better internet.",
    },
    {
      name: "DApp Development",
      description: "Creating user-friendly decentralized applications.",
    },
    {
      name: "TokenEconomy",
      description:
        "Consulting services for tokenomics and blockchain projects.",
    },
    {
      name: "MetaWeb",
      description: "Integrating Web3 technology into everyday applications.",
    },
  ],
  iot: [
    {
      name: "SmartHome Solutions",
      description: "Connected home devices for enhanced living.",
    },
    {
      name: "IoT Innovations",
      description: "IoT solutions for smart cities and industries.",
    },
    {
      name: "Wearable Tech",
      description: "Health monitoring devices with IoT connectivity.",
    },
    {
      name: "ConnectedFleet",
      description: "IoT solutions for logistics and fleet management.",
    },
  ],
  // Add more domains and startups as needed
};

const DomainStartups = () => {
  const { domain } = useParams(); // Get the domain from the URL
  const startups = startupsData[domain] || []; // Fetch startups for the domain

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-8">
        {domain.charAt(0).toUpperCase() + domain.slice(1)} Startups
      </h1>

      {startups.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {startups.map((startup, index) => (
            <li
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {startup.name}
              </h2>
              <p className="text-gray-600 mb-4">{startup.description}</p>
              <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:ring focus:ring-indigo-300 transition">
                Learn More
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500 mt-6">
          No startups found for this domain.
        </p>
      )}
    </div>
  );
};
export default DomainStartups;
