import { View, Text, TextInput, Keyboard } from 'react-native'
import React from 'react'

export default function TextFieldComp({ onChangeText ,value, placeholder, secureTextEntry, keyboardType}: { onChangeText: any, value: any,  placeholder: any, secureTextEntry?: boolean, keyboardType?: any}) {
  return (
    <View >
      <TextInput placeholder={placeholder}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChangeText}
      
      />
    </View>
  )
}