import { View, Text, Image, ImageSourcePropType, TouchableOpacity } from 'react-native'

import React from 'react'
type FullRoundButtonCompProps = {
    image: ImageSourcePropType
}
export default function FullRoundBottonComp({
    image,
}: FullRoundButtonCompProps) {
    return (
     <TouchableOpacity>
           <View
            style={{
                backgroundColor: 'white',
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius:30,
                marginLeft:15,
            }}>
            <Image source={image} style={{ width: 20, height: 20, }} />
        </View>
     </TouchableOpacity>
    )
}