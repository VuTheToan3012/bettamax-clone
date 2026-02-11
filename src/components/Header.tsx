import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigation = useNavigation();

  const handleSignOut = () => {
    setOpenMenu(false);
    navigation.reset({
      index: 0,
      routes: [{name:'SignIn'}],
    })
  }

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
            <Pressable style={styles.menuItem} onPress={handleSignOut}>
              <Text style={styles.logout}>Sign out</Text>
              
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
    backgroundColor: "#FFFFFF",
    zIndex: 999, // Thêm zIndex cho SafeAreaView
  },
  container: {
    height: 56,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    zIndex: 999, // Thêm zIndex cho container
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
    position: "absolute",
    top: 56,
    right: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 8,
    width: 140,
    zIndex: 1000, // Thêm zIndex cao hơn cho dropdown
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
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