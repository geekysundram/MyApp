import {Wrapper,WelcomeText} from './styled'
import React,{useEffect,useState} from 'react'
import navigateTo from '../../navigation/navigate';
import { Image } from 'react-native';

const Splash = ({navigation}:any) => {
  const logo = require("../../assets/images/logo.png")
  console.log("============>SPLASHSCREEN");
    const  [first, setfirst] = useState(0)
    useEffect(() => {
      setTimeout(() => {
          console.log("------------->useEffect Running")
          {setfirst(first)}
        navigation.navigate('Home');
      }, 1000);
    },[first]);
    return (
      <Wrapper>
        <Image source={logo} resizeMode="contain"/>
        <WelcomeText>
          Preparing your Remote Healthcare Experience
        </WelcomeText>
      </Wrapper>
    );
  };
  
export default Splash;