import { useContext } from 'react';
import {View,Text,TouchableOpacity} from 'react-native'
import GlobalContext from './GlobalContext';
const Check=()=>{
  const {resetCellMap,setCellMap,state} =useContext(GlobalContext)
    return (
        <TouchableOpacity onPress={()=>resetCellMap()}>
            <Text>{state}</Text>
        </TouchableOpacity>
    )
}
export default Check;