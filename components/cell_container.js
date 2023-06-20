import { StyleSheet ,View} from "react-native";
import Cell from "./cell";
const CellContainer=({cellCoordinates,value})=>{
    const render_cell=()=>{
        const cells=[];
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
              cells.push(<Cell key={`${i}-${j}`} val={true} correct={(i==cellCoordinates.row && j==cellCoordinates.col)} char={value}/>);
            }
        }
        return cells;
     }
    return(
        <View style={styles.container}>
           {render_cell()}
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flexWrap:'wrap',
        flexDirection:'row',
        borderColor:'blue',
    }
})

export default CellContainer;
