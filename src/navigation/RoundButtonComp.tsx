import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type RoundButtonCompProps = {
  label: React.ReactNode
  border?: boolean
  icon?: React.ReactNode
  onPress?: () => void
}

export default function RoundBottonComp({
  label,
  border = false,
  onPress,
}: RoundButtonCompProps) {
  return (
 <TouchableOpacity onPress={() => onPress?.()}>
      <View style={{
        backgroundColor: border ? '#F7F7F8' : '#4B56F3',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderWidth: border ? 1 : 0,
        borderColor: 'white',
        justifyContent: 'center',
        height: 48,
        borderRadius: 99,
        alignContent:'center',
        marginTop: 16,
        }}>
        <Text
        style={{
          color: border ? '#181F39' : 'white',
          textAlign: 'center',
          fontWeight: '600' 
        }}
      >
        {label}
      </Text></View>
    </TouchableOpacity>
  )
}
