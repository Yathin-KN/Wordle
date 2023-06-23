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
import { useEffect, useState, useContext } from "react";
import Check from "./check";
import GlobalContext from "./GlobalContext";
export default function App() {
  return (
    <GlobalContextProvider>
      <View style={styles.container}>
        <CellContainer />
        <Keyboard />
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
    backgroundColor: "#3a3a3c",
    borderColor: "red",
  },
});
