import {
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Text,
} from "react-native";
import { useEffect, useState,useContext } from "react";
import GlobalContext from "../GlobalContext";

const Cell = ({ val, character, handel, correct, update, char }) => {
  const [cellCharacter, setCellCharacter] = useState(char);
  const {setCellMap}=useContext(GlobalContext);
  useEffect(() => {
    if (correct) {
      setCellCharacter(char);
    }
  }, [correct, char]);

  return val ? (
    //wordle cells
    <TouchableOpacity
      style={[styles.cell, styles.c1(1)]}
      onPress={() => handelClick()}
    >
      <Text style={[styles.text]}>{cellCharacter}</Text>
    </TouchableOpacity>
  ) : (
    //keyboard
    <TouchableOpacity
      style={styles.key}
      onPress={() => {
        handel(character);
        setCellMap({"row":1,"col":1},character);
        update();
      }}
    >
      <Text style={styles.text}>{character}</Text>
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
    borderRadius: 5,
    backgroundColor: "grey",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
  key: {
    height: size - 10,
    width: size - 20,
    margin: 2,
    borderRadius: 5,
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
});
