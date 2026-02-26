import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = ({ navigation }: { navigation: any }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <SafeAreaView edges={["top"]} style={styles.safe}>
      <View style={styles.container}>

        <View style={styles.left}>
          <Image source={require("../assets/icons/logo.png")} style={styles.logo} />
          <Text style={styles.title}>Choose store</Text>
        </View>

        <Pressable onPress={() => setOpenMenu(!openMenu)}>
          <View style={styles.avatar} />
        </Pressable>

        {openMenu && (
          <View style={styles.dropdown}>
            <Pressable style={styles.menuItem} onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.logout}>⎋ Sign out</Text>
            </Pressable>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
safe: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: '#fff',

  // zIndex: 1000,
  // elevation: 1000, 
},
  container: {
    height: 56,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    position: 'relative', 
    zIndex: 100,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  logo: {
    width: 24,
    height: 24,
    aspectRatio: 1,
    borderRadius: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    fontStyle: "normal",
    fontFamily: "Mona Sans",
    lineHeight: 26,
    color: "#181F39",
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#e5e7eb",
  },
  dropdown: {
    position: 'absolute',
    top: 56,          
    right: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 8,
    // zIndex: 1000,
    // elevation: 1000, 

    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  menuItem: {
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  logout: {
    color: "#ef4444",
    fontWeight: "500",
  },
});
