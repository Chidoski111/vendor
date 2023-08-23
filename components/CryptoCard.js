import React from "react";

export default function CryptoCard({
  symbol,
  value,
  changePercentage,
  IconComponent,
}) {
 

  return (
    <div className="w-full max-w-md mx-auto px-4 py-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <div className="flex justify-between items-center">
        <div className="text-gray-700">
          <p className="text-lg font-semibold">{symbol}</p>
          <p className="text-sm">{value}</p>
        </div>
        <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-tl from-purple-700 to-pink-500 rounded-lg">
          <IconComponent className="text-white text-xl" />
        </div>
      </div>
      <div
        className={`mt-4 ${
          changePercentage > 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        <span className="text-sm font-semibold">
          {changePercentage > 0 ? "+" : ""}
          {changePercentage}%
        </span>
      </div>
     
    
    </div>
  );
}
