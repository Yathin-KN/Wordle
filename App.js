import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useFonts} from 'expo-font'
import CellContainer from "./components/cell_container";
import GlobalContextProvider from "./GlobalContextProvider";
import Keyboard from "./components/keyboard";
import Ionicons from "@expo/vector-icons/Ionicons";
import GlobalContext from "./GlobalContext";
import { useContext } from "react";

export default function App() {
 

  const [fontsLoaded] = useFonts({
    'Karnak': require('./assets/DMSerifDisplay-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null; 
  }


  return (
    <GlobalContextProvider>
      <View style={styles.titleContainer}>
          <Text style={styles.title}>Wordle</Text>
        </View>
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
    paddingHorizontal: 0,
    paddingVertical: 40,
    backgroundColor: "#121213",
    borderColor:'white',
  },
  reset:{
     position:'absolute',
     color:'white',
     top:55,
     right:5,
  },
  title: {
    color: "#ffffff",
    textAlign:'center',
    fontSize:35,
    fontFamily:'Karnak',
  },
  titleContainer:{
    paddingTop:60,
    paddingBottom:15,
    borderBottomWidth:1,
    borderBottomColor:'#818384',
    backgroundColor:'#121213'
  }
});
