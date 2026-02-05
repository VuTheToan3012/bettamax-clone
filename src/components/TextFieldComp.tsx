import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { forwardRef } from 'react'

const TextFieldComp = forwardRef<TextInput, any>(
  ({ onChangeText, value, placeholder, secureTextEntry, keyboardType }, ref) => {
    return (
      <TextInput 
        ref={ref}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        placeholderTextColor="#8B99B1"
      />
    )
  }
)

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontSize: 15,
    color: '#000',
    paddingVertical: 14,
  }
})

export default TextFieldComp