import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Colors from '../Shared/Colors';

export default function Login() {
  return (
    <View>
     <Image source={require('./../Assets/Images/login.png')}/>
     <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to Gyaan Saathi</Text>
        <Text style={{textAlign:'center',
            marginTop:40,fontSize:20}}>Login/Signup</Text>
     </View>
     <View style={styles.button}>
     <AntDesign name="google" size={24} color='white' style={{marginRight:20}}/>
        <Text style={{color:Colors.white}}>Sign In with Google</Text>
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:50,
        marginTop:-25,
        backgroundColor:'#fff',
        borderRadius:20,
    },
    welcomeText:{
        fontSize:25,
        textAlign:'center',
        fontWeight:'bold',
    },
    button:{
        backgroundColor:Colors.primary,
        padding:10,
        margin:30,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
        borderRadius:10
    }
})