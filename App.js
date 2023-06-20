import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import CellContainer from "./components/cell_container";
import GlobalContextProvider from "./GlobalContextProvider";
import Cell from "./components/cell";
import Keyboard from "./components/keyboard";
import { useEffect, useState ,useContext} from "react";
import Check from "./check";
import GlobalContext from "./GlobalContext";
export default function App() {
  const [selected, setSelected] = useState("");
  const [cellCoordinates, setCellCoordinates] = useState({
    row: 0,
    col: -1,
  });

  const updateCoordinates = () => {
    setCellCoordinates((prev) => {
      let value = prev.col + 1;
      if (value === 5) {
        prev.col = 0;
        prev.row = prev.row + 1;
      } else {
        prev.col = prev.col + 1;
      }
      return {...prev}
    });
  };
  const reset=()=>{
    setCellCoordinates({"row":0,"col":-1});
  }
  const handelClick = (character) => {
    setSelected(character);
  };
  return (
    <GlobalContextProvider>
        <View style={styles.container}>
      <CellContainer cellCoordinates={cellCoordinates} value={selected}/>
      <Keyboard set={handelClick} update={updateCoordinates} />
      <Text>{selected}</Text>
      <Text>
        row {cellCoordinates.row} column {cellCoordinates.col}
      </Text>
      <TouchableOpacity onPress={()=>{reset()}}>
        <Text>reset</Text>
      </TouchableOpacity>
      <Check/>
      <StatusBar style="auto" />
    </View>
    </GlobalContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 80,
    border: 2,
    borderColor: "red",
  },
});
