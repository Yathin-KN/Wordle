import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Cell from "./cell";
import { useContext, useState } from "react";
import GlobalContext from "../GlobalContext";
import Ionicons from "@expo/vector-icons/Ionicons";
const Keyboard = () => {
  const {
    msg,
    coordinates,
    updateCoordinates,
    onResetCoordinates,
    resetCellMap,
    guessWord,
    prevcoordinates,
  } = useContext(GlobalContext);
  const [show,setShow]=useState(false)
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

  const showAns=()=>{
    setShow(prev=>!prev);
  }
  return (
    <View style={styles.container}>
      {keys()}
      
      <TouchableOpacity onPress={() => handel()} style={styles.reset}>
        <Ionicons name="refresh-circle" size={40} color="#979899" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => showAns()} style={styles.resetAns}>
         <Text style={{color:show?'white':'transparent'}}>{guessWord}</Text>
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
 resetAns:{
  color:'white',
  position:'absolute',
  bottom:7,
  left:10,
  paddingVertical:3,
  paddingHorizontal:5,
  borderWidth:1,
  borderColor:'grey',
  color:'white',
  borderRadius:5,
},
});
