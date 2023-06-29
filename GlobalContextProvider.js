import React, { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";
import check from "./check";
import axios from "axios";
import useFetch from "./api/api";


const GlobalContextProvider = ({ children }) => {
  
let initialstate = {
  row: 0,
  col: 0,
};
let initialstateWord = [];
  const [guessWord, setGuessWord] = useState(["T", "A", "S", "T", "E"]);
  const options = {
    method: 'GET',
    url: 'https://wordle-answers-solutions.p.rapidapi.com/answers',
    headers: {
      'X-RapidAPI-Key': '583422a618msh3091f90e5fa82d9p1f154cjsn6ca52770807e',
      'X-RapidAPI-Host': 'wordle-answers-solutions.p.rapidapi.com'
    }
  };
  
  // let word=response.data[0];
  //     let wordArr=Array.from(word.toUpperCase());
  //     console.log(guessWord);
  //     setGuessWord(wordArr);
  const setQuestionWord=async ()=>{
    try {
      const response = await axios.request(options);
      const randomNumber = Math.floor(Math.random() * 325);
      const {answer}=response.data.data[randomNumber];
      setGuessWord(answer);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {setQuestionWord();setMsg("")}, []);
  const [coordinates, setCoordinates] = useState(initialstate);
  const [prevcoordinates, setPrevcoordinates] = useState(initialstate);
  const [noWords, setNoWords] = useState(0);
  const [word, setWord] = useState(initialstateWord);
  const [map, setMap] = useState(new Map());
  const [colorMap, setColorMap] = useState(() => new Map());
  const [msg,setMsg]=useState("");
 

 

 

  const handelMsg=()=>{
    setMsg("Great !")
  }
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
    setWord((prevWord) => {
     return [...prevWord, val]
    });
  };

  function sumCheck(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum === 10;
  }

  const colorMapUpdate = () => {
    const currentWord = check(word.slice(-5), guessWord);
    sumCheck(currentWord)?handelMsg():null;
    setColorMap((prev) => {
      const newColorMap = new Map(prev);
      for (let i = 0; i < currentWord.length; i++) {
        newColorMap.set(noWords * 5 + i, currentWord[i]);
      }
      return newColorMap;
    });
  };
  useEffect(() => {
    if (word.length === 5) {
      colorMapUpdate();
      setNoWords((prev) =>{ 
        return prev + 1
      }
        );
      setWord([]);

      
    }
  }, [word]);

  const onResetCoordinates = () => {
    setCoordinates(initialstate);
    setQuestionWord();
    // setGuessWord(()=>useFetch());
  };


  const resetColorMap = () => {
    const newMap = new Map();
    for (let i = 0; i < 30; i++) {
      newMap.set(i, -1);
    }
    setColorMap(newMap);
  };

  const resetCellMap = () => {
    const newMap = new Map();
    for (let i = 0; i < 30; i++) {
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
    try{
    newMap.set(coordinates.row * 5 + coordinates.col, value);
    }catch(error){
      console.log(coordinates);
      console.log("here")
    }
    setMap(newMap);
  };

  useEffect(() => {
    resetCellMap();
    console.log(coordinates);
  }, []);

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
        prevcoordinates,
        msg,
        handelMsg,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalContextProvider;
