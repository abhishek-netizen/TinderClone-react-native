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
import TinCard from './src/components/TinCard';
import users from './assets/data/users';



const App = ()=>{

  return(
    <View style={styles.pageContainer}>
         <TinCard user = {users[0]}  />
         <TinCard user = {users[1]}  />
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
 
})