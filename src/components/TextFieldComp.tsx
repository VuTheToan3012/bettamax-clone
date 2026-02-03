import { View, Text, TextInput, Keyboard } from 'react-native'
import React from 'react'

export default function TextFieldComp({placeholder, secureTextEntry, keyboardType}: { placeholder: any, secureTextEntry?: boolean, keyboardType?: any}) {
  return (
    <View >
      <TextInput placeholder={placeholder}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      />
    </View>
  )
}