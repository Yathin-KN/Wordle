import {View,StyleSheet,Text} from 'react-native'
import Cell from './cell'
const Keyboard=({set,update})=>{
    const keys=()=>{
        const keys_cell=[]
        for(let i = 65; i <= 90; i++){
              const letter = String.fromCharCode(i);
              keys_cell.push(
                <Cell val={false} key={`${i}`} character={letter} handel={set} update={update}/>
              )
        }
        return keys_cell
    }
    return(
        <View style={style.container}>
            {keys()}
        </View>
    )
}
export default Keyboard;
const style=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        paddingVertical:40,
        alignItems:'center',
        flexWrap:'wrap',
        flexDirection:'row',
    }
})