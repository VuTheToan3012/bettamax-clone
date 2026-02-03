import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Intermediate = ({navigation}: {navigation: any}) => {
    
   setTimeout(() => { navigation.navigate('Store')
}, 2000);
  return (
    <View style={{flex:1, marginBottom: 20, justifyContent:'flex-end', alignItems:'center'}}>
      <Text style={{fontSize: 14, fontWeight: '400', lineHeight: 22, fontFamily:'Mona Sans', color:'#8B99B1'}}>Version 2.0</Text>
    </View>
  )
}

export default Intermediate

const styles = StyleSheet.create({
  
})