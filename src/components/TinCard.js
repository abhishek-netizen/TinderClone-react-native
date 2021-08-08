import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'

const TinCard = ({user}) => {

    return (
        <View style={styles.card}>
        <ImageBackground source={{uri: user.image}} style={styles.image}>
          <View style={styles.cardInner}>
             <Text style={styles.name}>{user.name}</Text>
             <Text style={styles.bio}>{user.bio}</Text>
          </View>
        
        </ImageBackground>
      </View>
    )
}

export default TinCard


const styles = StyleSheet.create({
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
