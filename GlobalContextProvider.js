import React, { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";
import check from "./check";
const GlobalContextProvider = ({ children }) => {
  const [guessWord, setGuessWord] = useState(["Y", "A", "T", "H", "I"]);
  let initialstate = {
    row: 0,
    col: 0,
  };
  let initialstateWord = [];
  useEffect(() => {}, []);
  const [coordinates, setCoordinates] = useState(initialstate);
  const [noWords, setNoWords] = useState(0);
  const [word, setWord] = useState(initialstateWord);
  const [map, setMap] = useState(new Map());
  const [colorMap, setColorMap] = useState(()=>new Map());
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
  // c
  const wordUpdate = (val) => {
    setWord((prevWord) => [...prevWord, val]);
  };

  const colorMapUpdate = () => {

    const currentWord = check(word.slice(-5),guessWord);
    setColorMap((prev) => {
      const newColorMap = new Map(prev);
      for (let i = 0; i < currentWord.length; i++) {
        console.log(currentWord[i]);
        newColorMap.set(noWords * 5 + i, currentWord[i]);
      }
      return newColorMap;
    });
  };
  useEffect(() => {
    if (word.length == 5) {
      colorMapUpdate();
      setNoWords((prev) => prev + 1);
      setWord([]);
    }
  }, [word]);

  const onResetCoordinates = () => {
    setCoordinates(() => initialstate);
  };

  const resetColorMap = () => {
    const newMap = new Map();
    for (let i = 0; i < 25; i++) {
      newMap.set(i, 0);
    }
    setColorMap(newMap);
  };

  const resetCellMap = () => {
    const newMap = new Map();
    for (let i = 0; i < 25; i++) {
      newMap.set(i, "");
    }
    resetColorMap();
    setMap(newMap);
    setWord([]);
    setNoWords(0);
  };
  const setCellMap = (value) => {
    const newMap = new Map(map);
    wordUpdate(value);
    newMap.set(coordinates.row * 5 + coordinates.col, value);
    setMap(newMap);
  };

  useEffect(() => {
    resetCellMap();
  }, []);

  useEffect(() => {
    console.log("color map ",colorMap);
  }, [colorMap]);
  return (
    <GlobalContext.Provider
      value={{
        colorMap,
        wordUpdate,
        coordinates,
        onResetCoordinates,
        updateCoordinates,
        resetCellMap: resetCellMap,
        setCellMap: setCellMap,
        map,
        word,
        guessWord,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
//states to be managed  done
//the coordinates done
//the colour
export default GlobalContextProvider;
