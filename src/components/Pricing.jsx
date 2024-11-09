import { useState } from "react";
import { motion } from "framer-motion";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

const pricingData = [
  "Seamless integration",
  "Real-time data visualization",
  "Advanced predictive analytics",
  "Collaborative environment",
  "Responsive customer support",
];

const prices = {
  daily: {
    beginner: "$0",
    standard: "$0.63",
    premium: "$1.20",
  },
  weekly: {
    beginner: "$0",
    standard: "$4.75",
    premium: "$9",
  },
  monthly: {
    beginner: "$0",
    standard: "$19",
    premium: "$36",
  },
  yearly: {
    beginner: "$0",
    standard: "$190",
    premium: "$360",
  },
};

export const Pricing = () => {
  const [selected, setSelected] = useState("monthly");

  const PricingCard = ({ title, price, description }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-gray-800 p-8 rounded-lg"
    >
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-gray-400">/{selected.slice(0, -2)}ly</span>
      </div>
      <p className="text-gray-400 mb-6">{description}</p>
      <ul className="space-y-4">
        {pricingData.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-purple-600 mr-2">
              <CheckArrowIcon />
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );

  const PricingButton = ({ period }) => (
    <button
      onClick={() => setSelected(period)}
      className={`px-4 py-2 rounded transition-colors ${
        selected === period ? "bg-purple-600" : "bg-gray-800"
      }`}
    >
      {period.charAt(0).toUpperCase() + period.slice(1)}
    </button>
  );

  return (
    <section className="w-full">
      <div className="text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-purple-600 mb-4"
        >
          FIND YOUR PERFECT FIT
        </motion.h3>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4"
        >
          Choose your best plan
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-gray-400 mb-8"
        >
          Select the plan that suits your needs and benefit from our analytics
          tools.
        </motion.p>

        <div className="flex justify-center gap-2 mb-8">
          {["daily", "weekly", "monthly", "yearly"].map((period) => (
            <PricingButton key={period} period={period} />
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          <PricingCard
            title="Beginner"
            price={prices[selected].beginner}
            description="The perfect way to get started and get used to our tools."
          />
          <PricingCard
            title="Standard"
            price={prices[selected].standard}
            description="Unlock more features and elevate your data analysis."
          />
          <PricingCard
            title="Premium"
            price={prices[selected].premium}
            description="Experience the full power of our analytic platform"
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
