import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Cell from "./cell";
import { useContext } from "react";
import GlobalContext from "../GlobalContext";
import Ionicons from "@expo/vector-icons/Ionicons";
const Keyboard = () => {
  const {
    map,
    setCellMap,
    coordinates,
    updateCoordinates,
    onResetCoordinates,
    resetCellMap,
  } = useContext(GlobalContext);

  const keyboardLetters="QWERTYUIO-PASDFGHJ-KLZXCVBNM"
  const keys = () => {
    const keys_cell = [];
    for (let i = 0; i < keyboardLetters.length; i++) {
      const letter = keyboardLetters[i];
      keys_cell.push(
        <Cell
          val={false}
          key={`${i}`}
          character={letter}
          updateCoordinates={updateCoordinates}
        />
      );
    }
    return keys_cell;
  };

  const handel = () => {
    onResetCoordinates();
    resetCellMap();
  };
  return (
    <View style={styles.container}>
      {keys()}
      <TouchableOpacity onPress={() => handel()} style={styles.reset}>
        <Ionicons name="refresh-circle" size={40} color="#979899" />
      </TouchableOpacity>
    </View>
  );
};
export default Keyboard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 15,
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  reset:{
    color:'white',
    position:'absolute',
    bottom:0,
    right:10,
 },
});
