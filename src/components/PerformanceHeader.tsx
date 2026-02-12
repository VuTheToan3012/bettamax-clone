import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LogOutIcon from "./icons/LogOutIcon";
import DownIcon from "./icons/DownIcon";
import AccountIcon1 from "./icons/AccountIcon1";
import UpIcon from "./icons/UpIcon";
import NotiIcon from "./icons/NotiIcon";

const PerformanceHeader = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigation = useNavigation<any>();

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleSignOut = () => {
    setOpenMenu(false);
    navigation.reset({
      index: 0,
      routes: [{ name: "SignIn" }],
    });
  };

  return (
    <SafeAreaView edges={["top"]} style={styles.safe}>
      <TouchableWithoutFeedback onPress={() => setOpenMenu(false)}>
        <View>
          <View style={styles.container}>
            <Pressable style={styles.right} onPress={toggleMenu}>
              <Text style={styles.text}>Store performance</Text>
              {openMenu ? <UpIcon /> : <DownIcon />}
            </Pressable>
            <Pressable>
              <NotiIcon />
            </Pressable>


          </View>
          {openMenu && (
            <View style={styles.dropdownWrapper}>
              <View style={styles.arrow} />
              <View style={styles.dropdown}>
                <Pressable style={styles.menuItem} onPress={handleSignOut}>

                  <Text> Product performance</Text>

                </Pressable>
              </View>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default PerformanceHeader;

const styles = StyleSheet.create({
  safe: {
    backgroundColor: "#fff",
    zIndex: 999,
  },
  container: {
    height: 56,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  logo: {
    width: 24,
    height: 24,
    borderRadius: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#181F39",
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#E5E7EB",
  },
  dropdownWrapper: {
    position: "absolute",
    top: 35,
    right: 16,
    alignItems: "flex-start",
    zIndex: 2000,
    borderRadius: 4,
  },
  arrow: {
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 10,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#fff",
    marginRight: 20,
  },
  dropdown: {
    backgroundColor: "#fff",
    borderRadius: 12,
    width: 160,
    paddingVertical: 6,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
    alignItems: "center",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  logout: {
    color: "#EF4444",
    fontWeight: "600",
    fontSize: 15,
  },
  text: {
    fontFamily: 'Mona Sans',
    fontWeight: '500',
    fontSize: 16,
    fontStyle: 'normal',
  }
});