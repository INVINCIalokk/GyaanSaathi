import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './App/Pages/Login';

export default function App() {
  return (
    <View>
        <Login/>
        <StatusBar style="auto" />
    </View>
  );
}


