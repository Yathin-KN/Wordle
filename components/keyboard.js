import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Cell from "./cell";
import { useContext } from "react";
import GlobalContext from "../GlobalContext";
import Ionicons from '@expo/vector-icons/Ionicons'
const Keyboard = () => {
  const {
    map,
    setCellMap,
    coordinates,
    updateCoordinates,
    onResetCoordinates,
    resetCellMap,
  } = useContext(GlobalContext);
  const keys = () => {
    const keys_cell = [];
    for (let i = 65; i <= 90; i++) {
      const letter = String.fromCharCode(i);
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

  const handel=()=>{
    onResetCoordinates();
    resetCellMap();
  }
  return (
    <View style={style.container}>
      {keys()}
      <TouchableOpacity onPress={() => handel()}>
      <Ionicons name="refresh-circle" size={40} color="#979899" />
      </TouchableOpacity>
    </View>
  );
};
export default Keyboard;
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 40,
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "row",
  },
});
