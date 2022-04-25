// import { StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'
// import { Div, InputBox, Text2, PressButton, Div2 } from './src/styles'

// const App = () => {
//     const [name, setfName] = useState("")
//     const [last, setLast] = useState("")
//     const [show, setshow] = useState(false)
//     return (
//         <Div>
//             <InputBox onChange={(e: any) => (setfName(e))} >
//             </InputBox>

//             <InputBox onChange={(e: any) => (setLast(e))}>

//             </InputBox>

//             <PressButton title="Submit"
//                 onPress={(show: boolean) => {
//                     setshow(!show);
//                     console.log("Pressed")
//                 }}
//             >
//                 <Text2>Submit</Text2>
//             </PressButton>
//             {show == true ? <Text2>Submit</Text2> : <Text2>Su</Text2>}

//             {/* {
//                 show == true ? <Div2><Text2>{last}</Text2></Div2> : null
//             } */}
//         </Div >
//     )
// }

// export default App

// const styles = StyleSheet.create({})

import { Text, View } from 'react-native'
import React from 'react'
import styles from './src/styles'

const App = () => {
    return (
        <View style={styles.container}>
            <Text>App</Text>
        </View>
    )
}

export default App

