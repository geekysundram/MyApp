import { SafeAreaProvider } from "react-native-safe-area-context"
import {View} from "react-native"
import React from 'react'
import Setup from './navigation/index'
import { NavigationContainer } from "@react-navigation/native"
const MyApp = () => {
    console.log("-------------->MYAPP");
    return(
        <NavigationContainer>
            <Setup/>
        </NavigationContainer>
       
    )
}

export default MyApp