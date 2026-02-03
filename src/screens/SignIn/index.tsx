import { StyleSheet, Text, View, Image, Linking, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react'
import TextFieldComp from '../../components/TextFieldComp';
import RoundBottonComp from '../../navigation/RoundButtonComp';
const url = 'https://google.com';

const SignIn = ({ navigation }: { navigation: any }) => {
    return (
        <View style={styles.container}>
            <View style={styles.logCard}>
                <Image style={styles.logo} source={require('../../assets/icons/logo.png')} />
                <Text style={styles.text2} >Welcome back!</Text>
                <Text style={{ alignSelf: 'center', marginBottom: 16 }}>
                    <Text style={styles.text3}>New User?</Text>
                    {' '}
                    <Text style={styles.text4} onPress={() => Linking.openURL(url)}>Create account
                    </Text>
                </Text>

               <View style={styles.TextField}>
            
                 <TextFieldComp  placeholder="Email" keyboardType="email-address" />
               </View>
                <View style={styles.TextField}>
                    <TextFieldComp  placeholder="Password" secureTextEntry={true} />
                    </View>
                <Text style={styles.forgetText} onPress={() => Linking.openURL(url)}>Forget Password?</Text>
                <RoundBottonComp label="Continue" onPress={() => navigation.navigate('Intermediate')} />
                    
                <Text style={styles.text1}>Don’t have an account yet?</Text>
                <RoundBottonComp border={true} label="Sign in with Google" onPress={() => Linking.openURL(url)} />
            </View>
            <Text style={styles.text3}>By clicking “Continue”, I have read and agree with the</Text>
            <Text style={styles.text3}>
                <Text style={styles.text2} onPress={() => Linking.openURL(url)}>Terms
                </Text>
                {' and '}
                <Text style={styles.text2} onPress={() => Linking.openURL(url)}>Privacy Policy
                </Text>
            </Text>
        </View>


    )
}

export default SignIn
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F8',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    logCard: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingVertical: 28,
        paddingHorizontal: 22,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.08,
        shadowRadius: 16,

        elevation: 4,
    },
    logo: {
        width: 48,
        height: 48,
        alignSelf: 'center',

    },
    TextField: {
        display: 'flex',
        alignItems: "flex-start",
        alignSelf: 'stretch',
        color: "#000000",
        backgroundColor: '#F7F7F8',
        borderRadius: 12,
        marginBottom: 16,
        width: '100%',
        flexDirection:'row'


    },
    input: {
        backgroundColor: '#000000',
        borderRadius: 12,
        paddingHorizontal: 16,
        height: 50,
        marginBottom: 14,
        fontSize: 15,
    },
    forgetText: {
        color: '#181F39',
        marginLeft: 'auto',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 22,
        fontStyle: 'normal',
        fontFamily: 'Mona Sans'
    },
    text1: {
        color: '#8B99B1',
        fontSize: 12,
        fontFamily: 'Mona Sans',
        fontWeight: 400,
        marginTop: 16,
        alignSelf: 'center',
    },
    text2: {
        alignSelf: 'center',
        color: '#181F39',
        fontWeight: '600',
        fontStyle: 'normal',
        fontSize: 18,
        fontFamily: 'Mona Sans'
    },
    text3: {
        fontSize: 14,
        lineHeight: 22,
        fontStyle: 'normal',
        fontFamily: 'Mona Sans',
        fontWeight: '400',
        color: '#546278',
    },
    text4: {
        fontSize: 14,
        lineHeight: 22,
        fontStyle: 'normal',
        fontFamily: 'Mona Sans',
        fontWeight: '400',
        color: '#4B56F3',
    },
    text5: {
        alignSelf: 'center',
        color: '#181F39',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 14,
        fontFamily: 'Mona Sans'
}});