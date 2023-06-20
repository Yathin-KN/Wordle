import React, { useState } from "react";
import GlobalContext from "./GlobalContext";

const GlobalContextProvider = ({ children }) => {
  const [val, setVal] = useState(0);
  const update = () => {
    setVal((val) => val + 1);
  };
  const [map, setMap] = useState(new Map());
  
  const resetCellMap = () => {
    const newMap = new Map();
    for (let i = 0; i < 26; i++) {
      newMap.set(i, "");
    }
    setMap(newMap);
    console.log(newMap);
  };
  const setCellMap = (coordinates, value) => {
    const newMap = new Map(map);
    newMap.set(coordinates.row * 5 + coordinates.col, value);
    setMap(newMap);
    console.log(newMap);
  };
  return (
    <GlobalContext.Provider
      value={{
        state: val,
        updateState: update,
        resetCellMap:resetCellMap,
        setCellMap:setCellMap,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
//states to be managed
//the coordinates
//the colour
export default GlobalContextProvider;
