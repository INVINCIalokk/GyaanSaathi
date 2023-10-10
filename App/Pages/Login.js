import { View, Text, Image, TouchableOpacity,} from 'react-native'
import React from 'react'
import { StyleSheet ,onPress} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Colors from '../Shared/Colors';
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';


export default function Login() {
    
    signIn = async () => {
        GoogleSignin.configure(
            {androidClientID :"399811484923-5fbnoj9ckei3c7qe13vejkn90m5m72kc.apps.googleusercontent.com"}
        );
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          setState({ userInfo });
          
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log("play services not available or outdated")
          } else if (error.code === statusCodes.IN_PROGRESS) {
            console.log("play services not available or outdated")
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            console.log("play services not available or outdated")
          } else {
            console.log(error)
          }
        }
      };
  return (
    <View>
     <Image source={require('./../Assets/Images/login.png')}/>
     <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to Gyaan Saathi</Text>
        <Text style={{textAlign:'center',
            marginTop:40,fontSize:20}}>Login/Signup</Text>
     </View>
     <TouchableOpacity style={styles.button} onPress={signIn}>
     <AntDesign name="google" size={24} color='white' style={{marginRight:20}}/>
        <Text style={{color:Colors.white}}>Sign In with Google</Text>
     </TouchableOpacity>
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