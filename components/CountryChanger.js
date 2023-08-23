import React, { useCallback, useEffect, useState } from "react";

const CountryChanger = () => {
  const names = [
    "CUBA",
    "SPAIN",
    "PARAGUAY",
    "MEXICO",
    "ARGENTINA",
    "COLOMBIA",
    "PERU",
    "VENEZUELA",
    "CHILE",
    "ECUADOR",
    "GUATAMALA",
  ];
  const [newName, setnewName] = useState("");

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    setnewName(names[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 3000);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  return <div>{newName}</div>;
};

export default CountryChanger;
