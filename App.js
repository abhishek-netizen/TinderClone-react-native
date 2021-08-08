/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  ImageBackground
} from 'react-native';



const App = ()=>{

  return(
    <View style={styles.pageContainer}>
      <View style={styles.card}>
        <ImageBackground source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim1.JPG'}} style={styles.image}>
          <View style={styles.cardInner}>
             <Text style={styles.name}>Abhsihek</Text>
             <Text style={styles.bio}>I will be the semicolons to your code</Text>
          </View>
        
        </ImageBackground>
      </View>
    </View>
  )
}


export default App;


const styles = StyleSheet.create({
  pageContainer:{
    justifyContent:'center', 
    alignItems:'center',
    flex:1,
    backgroundColor:'#FFFFFF'
  },
  card:{
     width:'95%',
     height:'70%',
     borderRadius:10,
     //for shadow https://ethercreative.github.io/react-native-shadow-generator/
     shadowColor: "#000",
     shadowOffset: {
     	width: 0,
    	height: 9,
      },
     shadowOpacity: 0.50,
     shadowRadius: 12.35,
     elevation: 19,

  },
  image:{
    width:'100%',
    height:'100%',
    resizeMode:'cover',
    borderRadius:10,
    overflow:'hidden',
    justifyContent:'flex-end',
  },
  cardInner:{ 
    marginHorizontal:10,
  },
  name:{
    fontSize:30,
    color:'white',
    fontWeight:'bold',
  },
  bio:{
    fontSize:18,
    color:'white',
    lineHeight:25,
  }
})