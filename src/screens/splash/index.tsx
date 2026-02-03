import { View, Text,ImageBackground, StyleSheet, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'react-native-linear-gradient';

const SplashScreen = ({navigation}: {navigation: any}) => {
    
   setTimeout(() => { navigation.navigate('SignIn')
}, 2000);

     return (
    <LinearGradient
      colors={['#653bf0', '#1a4db9', '#653bf0']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/icons/icon_splash.png')} style={styles.logoContainer} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    height: 100,
    width: 100,
    
  },
  logoText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default SplashScreen
 