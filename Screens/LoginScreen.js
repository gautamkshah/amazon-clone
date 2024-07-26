import { View, Text ,Image, KeyboardAvoidingView} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import amazonLogo from '../assets/images/amazon.png';

const LoginScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:"white", alignItems:"center", padding:"20"}}>
      <View >
        <Image source={amazonLogo} style={{ width: 250, height: 100 }} />
      </View>
      <KeyboardAvoidingView>
        <View>
          <Text style={{fontSize:18, fontWeight:'bold',marginTop:12, color:"#041E42"}}>Login to your Account</Text>
        </View>
        <View style={{marginTop:70}}>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LoginScreen