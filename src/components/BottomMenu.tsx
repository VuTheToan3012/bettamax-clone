import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const OPTIONS = [
  { label: "Store performance", screen: "Storeperformance" },
  { label: "Product performance", screen: "ProductPerformance" },
  { label: "Live view", screen: "LiveView" },
  { label: "Traffic source", screen: "Traffic" },
];

const BottomDropdown = () => {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation<any>();

  const handleNavigate = (screen: string) => {
    setVisible(false);
    navigation.navigate(screen);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.trigger}
        onPress={() => setVisible(true)}
      >
        <Text style={styles.triggerText}>Store performance</Text>
      </TouchableOpacity>

      <Modal transparent visible={visible} animationType="fade">
        <Pressable
          style={styles.overlay}
          onPress={() => setVisible(false)}
        />

        <View style={styles.sheet}>
          {OPTIONS.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.option}
              onPress={() => handleNavigate(item.screen)}
            >
              <Text style={styles.optionText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
    </>
  );
};

export default BottomDropdown;

const styles = StyleSheet.create({
  trigger: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    marginBottom: 30,
    zIndex: 100000,
  },
  triggerText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#374151",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  sheet: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 16,
    elevation: 10,
  },
  option: {
    paddingVertical: 16,
  },
  optionText: {
    fontSize: 16,
    color: "#111827",
  },
});