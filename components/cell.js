import {
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Text,
} from "react-native";
import { useEffect, useState, useContext } from "react";
import GlobalContext from "../GlobalContext";
import Keyboard from "./keyboard2";

const Cell = ({ character, val, updateCoordinates }) => {
  const { setCellMap, map, coordinates, colorMap } = useContext(GlobalContext);
  const [ch, setCh] = useState();
  const [colorScheme, setColorScheme] = useState(1);
  const handle = () => {
    setCellMap(character);
    updateCoordinates();
  };

  const handelColor = () => {
    setColorScheme(colorMap.get(character));
  };

  useEffect(() => {
    handelColor();
  }, [colorMap]);

  useEffect(() => {
    setCh(map.get(character));
  }, [map]);

  return val ? (
    // Wordle cells i * 5 + j
    <TouchableOpacity style={[styles.cell, styles.c2(colorScheme)]}>
      <Text style={[styles.text, styles.cellText]}>{ch}</Text>
    </TouchableOpacity>
  ) : (
    // // Keyboard
    <TouchableOpacity style={character!='-'?styles.key:styles.keyPadding} onPress={handle}>
      {character!='-'?<Text style={[styles.text, styles.keyText]}>{character}</Text>:<Text style={[styles.keyPadding]}></Text>}
    </TouchableOpacity>
    // <Keyboard/>
  );
};

export default Cell;

const size = 65;
const styles = StyleSheet.create({
  cell: {
    height: size,
    width: size,
    margin: 2,
    backgroundColor: "#121213",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#565758",
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
  keyText: {
    fontSize: 18,
    fontWeight: 400,
  },
  cellText: {
    fontSize: 25,
    fontWeight: 500,
  },
  key: {
    height: size - 14,
    width: size - 29,
    margin: 3,
    borderRadius: 2,
    fontSize: 15,
    backgroundColor: '#818384',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  keyPadding:{
    height: size - 14,
    width: size-37,
  },
  c1: (val) => {
    return val
      ? { backgroundColor: "#536e59" }
      : { backgroundColor: "#abb063" };
  },
  c2: (val) => {
    return val == -1
      ? { backgroundColor: "#121213" }
      : val == 1
      ? { backgroundColor: "#b59f3b" ,borderWidth:0}
      : val===2?{ backgroundColor: "#538d4e",borderWidth:0 }:{
        backgroundColor:'#3a3a3c',borderWidth:0
      };
  },
});
