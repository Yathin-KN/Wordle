import {
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Text,
} from "react-native";
import { useEffect, useState, useContext } from "react";
import GlobalContext from "../GlobalContext";

const Cell = ({ character, val, updateCoordinates }) => {
  const { setCellMap, map, coordinates ,colorMap } = useContext(GlobalContext);
  const [ch, setCh] = useState();
  const [colorScheme,setColorScheme]=useState(1);
  const handle = () => {
    setCellMap(character);
    updateCoordinates();
  };

  const handelColor=()=>{
    setColorScheme(colorMap.get(character))
  } 

  useEffect(()=>{
      handelColor();
  },[colorMap])

  useEffect(() => {
    setCh(map.get(character));
  }, [map]);

  let v = character;
  return val ? (
    // Wordle cells i * 5 + j
    <TouchableOpacity style={[styles.cell, styles.c2(colorScheme)]}>
      <Text style={[styles.text,styles.cellText]}>
        {ch} 
      </Text>
    </TouchableOpacity>
  ) : (
    // Keyboard
    <TouchableOpacity style={styles.key} onPress={handle}>
      <Text style={[styles.text,styles.keyText]}>{character}</Text>
    </TouchableOpacity>
  );
};

export default Cell;

const size = 65;
const styles = StyleSheet.create({
  cell: {
    height: size,
    width: size,
    margin: 2,
    backgroundColor: "grey",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth:2,
    borderColor:'#b5b5b5',
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
  keyText:{
    fontSize:18,
    fontWeight:400,
  },
  cellText:{
    fontSize:23,
    fontWeight:400,
  },
  key: {
    height: size - 14,
    width: size - 24,
    margin: 3,
    borderRadius:2,
    fontSize:15,
    backgroundColor: "grey",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  c1: (val) => {
    return val
      ? { backgroundColor: "#536e59" }
      : { backgroundColor: "#abb063" };
  },
  c2: (val) => {
    return val == 0
      ? { backgroundColor: "#979899" }
      : val == 1
      ? { backgroundColor: "#b59f3b" }
      : { backgroundColor: "#538d4e" };
  },
});
