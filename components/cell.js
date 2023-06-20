import { StyleSheet, TouchableOpacity, View, TextInput, Text } from "react-native";
import { useEffect, useState, useContext } from "react";
import GlobalContext from "../GlobalContext";

const Cell = ({ character, val, updateCoordinates }) => {
  const { setCellMap, map, coordinates } = useContext(GlobalContext);
  const [ch, setCh] = useState();

  const handle = () => {
    setCellMap(character);
    updateCoordinates();
  };

  useEffect(() => {
    setCh(map.get(character));
  }, [map]);

  return val ? (
    // Wordle cells
    <TouchableOpacity style={[styles.cell, styles.c1(1)]}>
      <Text style={[styles.text]}>{ch}</Text>
    </TouchableOpacity>
  ) : (
    // Keyboard
    <TouchableOpacity style={styles.key} onPress={handle}>
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
    return val ? { backgroundColor: "#536e59" } : { backgroundColor: "#abb063" };
  },
});
