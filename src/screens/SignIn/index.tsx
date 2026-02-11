import { StyleSheet, Text, View, Image, Linking, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react'
import TextFieldComp from '../../components/TextFieldComp';
import RoundBottonComp from '../../navigation/RoundButtonComp';
const url = 'https://google.com';
import { USERS } from '@/types';
import EmailIcon from '@/components/icons/EmailIcon';
import PasswordIcon from '@/components/icons/PasswordIcon';
import LockIcon from '@/components/icons/LockIcon';
import GoogleIcon from '@/components/icons/GoogleIcon';

interface SignInProps {
    navigation: any;
}

const SignIn: React.FC<SignInProps> = ({ navigation }) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const handleLogin = (): void => {
        if (!email || !password) {
            alert('Please enter email and password')
            return
        }
        const user = USERS.find(
            u => u.email === email && u.password === password
        )
        if (!user) {
            alert('Email or password is incorrect')
            return
        }
        navigation.navigate('Intermediate', { user })
    }

    const togglePasswordVisibility = (): void => {
        setShowPassword(!showPassword)
    }

    return (
        <View style={styles.container}>
            <View style={styles.logCard}>
                <Image style={styles.logo} source={require('../../assets/icons/logo.png')} />
                <Text style={styles.text2}>Welcome back!</Text>
                <Text style={{ alignSelf: 'center', marginBottom: 16 }}>
                    <Text style={styles.text3}>New User?</Text>
                    {' '}
                    <Text style={styles.text4} onPress={() => Linking.openURL(url)}>Create account
                    </Text>
                </Text>

                <View style={styles.TextField}>
                    <EmailIcon style={styles.icon} />
                    <TextFieldComp
                        placeholder="Email"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <View style={styles.TextField}>
                    <PasswordIcon style={styles.icon} />
                    <TextFieldComp
                        placeholder="Password"
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity
                        onPress={togglePasswordVisibility}
                        activeOpacity={0.7}
                        style={styles.eyeButton}    

                    >
                        <LockIcon style={styles.icon2} />
                    </TouchableOpacity>
                </View>

                <Text style={styles.forgetText} onPress={() => Linking.openURL(url)}>Forget Password?</Text>
                <RoundBottonComp label="Continue" onPress={handleLogin} />

                <Text style={styles.text1}>Don't have an account yet?</Text>
                <TouchableOpacity
                    style={styles.googleButton}
                    onPress={() => Linking.openURL(url)}
                    activeOpacity={0.7}
                >
                    <GoogleIcon style={styles.googleIcon} />
                    <Text style={styles.googleButtonText}>Sign in with Google</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.text3}>By clicking "Continue", I have read and agree with the</Text>
            <Text style={styles.text3}>
                <Text style={styles.text6} onPress={() => Linking.openURL(url)}>Terms
                </Text>
                {' and '}
                <Text style={styles.text6} onPress={() => Linking.openURL(url)}>Privacy Policy
                </Text>
            </Text>
        </View >
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
        marginTop: 28,
    },
    TextField: {
        display: 'flex',

        alignSelf: 'stretch',
        color: "#000000",
        backgroundColor: '#F7F7F8',
        borderRadius: 12,
        marginBottom: 16,
        width: '100%',
        flexDirection: 'row'
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
        fontWeight: '400',
        marginTop: 16,
        alignSelf: 'center',
    },
    text2: {
        alignSelf: 'center',
        color: '#181F39',
        fontWeight: '600',
        fontStyle: 'normal',
        fontSize: 18,
        fontFamily: 'Mona Sans',
        marginTop: 16,
    },
    text3: {
        fontSize: 14,
        lineHeight: 22,
        fontStyle: 'normal',
        fontFamily: 'Mona Sans',
        fontWeight: '400',
        color: '#546278',
        marginTop: 4,
    },
    text4: {
        fontSize: 14,
        lineHeight: 22,
        fontStyle: 'normal',
        fontFamily: 'Mona Sans',
        fontWeight: '400',
        color: '#4B56F3',
        marginTop: 4,
    },
    text5: {
        alignSelf: 'center',
        color: '#181F39',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 14,
        fontFamily: 'Mona Sans'
    },
    text6: {
        alignSelf: 'center',
        fontWeight: '600',
        fontStyle: 'normal',
        fontSize: 14,
        fontFamily: 'Mona Sans',
        color: '#000000',
        lineHeight: 22,
    },
    icon: {
        alignSelf: 'center',
        marginLeft: 12,
        marginRight: 8,
    },
    icon2: {
        alignSelf: 'center',
        marginRight: 12,
        marginLeft: 8,
        justifyContent: 'center',
        textAlignVertical: 'center'
    },
    eyeButton: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 12,
        paddingLeft: 8,
    },
    googleButton: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#F7F7F8',
        borderColor: 'white',
        justifyContent: 'center',
        height: 48,
        borderRadius: 99,
        alignContent: 'center',
        marginTop: 16,
    },
    googleIcon: {
        marginRight: 12,
        justifyContent: 'center', 
        marginTop: 4
    },
    googleButtonText: {
        color: '#181F39',
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'Mona Sans',
    },
});
