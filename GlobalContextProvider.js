import React, { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";

const GlobalContextProvider = ({ children }) => {
  let initialstate={
    row: 0,
    col: 0,
  }
  const [coordinates, setCoordinates] = useState(initialstate);

  const updateCoordinates = () => {
    setCoordinates((prev) => {
      let cRow = prev.row;
      let cCol = prev.col;
      let nRow;
      let nCol;
      if (cCol === 4) {
        nCol = 0;
        nRow = cRow + 1;
      } else {
        nCol = cCol + 1;
        nRow = cRow;
      }
      return { row: nRow, col: nCol };
    });
  };

  const onResetCoordinates=()=>{
    setCoordinates(()=>initialstate)
  }
  const [map, setMap] = useState(new Map());

  const resetCellMap = () => {
    const newMap = new Map();
    for (let i = 0; i < 26; i++) {
      newMap.set(i, "");
    }
    setMap(newMap);
    console.log(newMap);
  };
  const setCellMap = (value) => {
    const newMap = new Map(map);
    newMap.set(coordinates.row * 5 + coordinates.col, value);
    setMap(newMap);
    console.log(newMap);
  };

  useEffect(()=>{
    resetCellMap();
  },[])
  return (
    <GlobalContext.Provider
      value={{
        coordinates,
        onResetCoordinates,
        updateCoordinates,
        resetCellMap: resetCellMap,
        setCellMap: setCellMap,
        map,
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
