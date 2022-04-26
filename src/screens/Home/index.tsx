import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import navigateTo from '../../navigation/navigate'
import styles from '@heroiq/styles'
import { TouchableOpacity } from 'react-native-gesture-handler'



const Home = ({navigation}:any) => {
    console.log("============>HOMESCREEN");
  return (
    <SafeAreaView style={Styles.Container}>
      <TouchableOpacity onPress={()=>{navigation.navigate("Splash")}}> 
    <View style={Styles.MyButton}>
      <Text style={Styles.textStyle}>Hello</Text>
    </View>
    </TouchableOpacity>
    </SafeAreaView>
   
    
  )
}

const Styles = StyleSheet.create({
  Container:{
    flex:1,
  
    backgroundColor:"#fff"
  },
  textStyle:{
    
  },
  MyButton:{
    width: 200,
    justifyContent:"center",
    alignItems:"center",
    alignContent:"center",
    margin: 50,
    height: 50,
    borderRadius:200,
    alignSelf:"center",
    backgroundColor:"yellow"
  }
})
export default Home