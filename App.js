/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React,{useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  ImageBackground,
  Pressable,
  useWindowDimensions
} from 'react-native';
import TinCard from './src/components/TinCard';
import users from './assets/data/users';
import Animated,{ 
  useAnimatedStyle, 
  useSharedValue, 
  withSpring, 
  useAnimatedGestureHandler, 
  interpolate,
  useDerivedValue} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler' //specially to drag gesture


const App = ()=>{

  const [currentIndex, setCurrentIndex] = useState(0); //for cards to come below one another we have to pass id
  const [nextIndex, setNextIndex] = useState(currentIndex + 1)


  const currentProfile = users[currentIndex]
  const nextProfile = users[nextIndex]

  const {width} = useWindowDimensions();

  const hiddenTranslateX = 2 * width; //we want this card to 60deg when out of screen

  const translateX = useSharedValue(0)                //width 0 -width //60 0 -60
  const rotate = useDerivedValue(()=> interpolate(translateX.value, [0, hiddenTranslateX],[0, 60])+'deg');

  
  const cardStyle  = useAnimatedStyle(()=>({
    transform:[
      { ///moving the View ? ?
      translateX : translateX.value,
    },
    {
        rotate: rotate.value,
    },
  ],
    //opacity: sharedValue.value,
  }));

  const checkingmyAnimatedOpacity = ()=>{
    translateX.value = withSpring(Math.random()) //that smooth movement of translate is handled by withSpring
    // console.log("you called me")
    // console.log(sharedValue.value)
  }

  //if you swipe, what has to happen ?
  //thats why we need gesture useAnimatedGestureHandler to get feebback

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_,context)=>{
      context.startX = translateX.value;
    },
     onActive: (event, context) => {
      //console.log('Touch x:', event.translationX);
      translateX.value = context.startX + event.translationX;
      //context.startX = translateX.value
     },
     onEnd:()=>{
       console.log("ended")
     }
  });


  return(
    <View style={styles.pageContainer}>

      {/* below View for card without panhandler cozwe dont do gesture on it */}

      <View style={styles.nextCardContainer}>
           <TinCard user = {nextProfile}  />
      </View>


      <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.animatedCard,cardStyle]}>
         <TinCard user = {currentProfile}  />
      </Animated.View>
      </PanGestureHandler>
      <Pressable onPress={()=>checkingmyAnimatedOpacity()} style={{ backgroundColor:'red', marginTop:-40}}>
        <Text>change value</Text>
      </Pressable>
    </View>
  )
}


export default App;


const styles = StyleSheet.create({
  pageContainer:{
    justifyContent:'center', 
    alignItems:'center',
    flex:1,
    backgroundColor:'#FFFFFF',
    
  },
  animatedCard:{
    flex:1,
    width:'100%', 
    justifyContent:'center',
    alignItems:'center',
    
  },
  nextCardContainer:{
    ...StyleSheet.absoluteFillObject,
    justifyContent:'center',
    alignItems:'center',
  },
 
})