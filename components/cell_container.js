import { StyleSheet, View } from "react-native";
import { useContext } from "react";
import GlobalContext from "../GlobalContext";
import Cell from "./cell";
const CellContainer = () => {
  const { coordinates, map } = useContext(GlobalContext);
  const render_cell = () => {
    const cells = [];
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        let char = i * 5 + j;

        cells.push(<Cell key={`${i}-${j}`} val={true} character={char} />);
      }
    }
    return cells;
  };
  return <View style={styles.container}>{render_cell()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    flexDirection: "row",
    borderColor: "blue",
    justifyContent:'center'
  },
});

export default CellContainer;
