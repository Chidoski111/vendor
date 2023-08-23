import React from "react";
import CryptoCard from "./CryptoCard";
import { FaBtc } from "react-icons/fa";
import { IoLogoUsd } from "react-icons/io5";
import { BiBoltCircle } from "react-icons/bi";

export default function CryptoCardsContainer() {
    const cryptoData = [
        {
          symbol: "BTC",
          value: "$53,000",
          changePercentage: "+55",
          IconComponent: FaBtc,
        },
        {
          symbol: "USDT",
          value: "$2,300",
          changePercentage: "+3",
          IconComponent: IoLogoUsd,
        },
        {
          symbol: "LTC",
          value: "$3,462",
          changePercentage: "-2",
          IconComponent: BiBoltCircle,
        },
        {
          symbol: "TRX",
          value: "$103,430",
          changePercentage: "+5",
          IconComponent: IoLogoUsd,
        },
      ];
  return (
    <div className="w-full px-6 py-6 mx-auto">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cryptoData.map((crypto, index) => (
          <CryptoCard
            key={index}
            symbol={crypto.symbol}
            value={crypto.value}
            changePercentage={crypto.changePercentage}
            IconComponent={crypto.IconComponent}
          />
        ))}
      </div>
    </div>
  );
}


