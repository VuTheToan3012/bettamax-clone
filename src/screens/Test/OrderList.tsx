import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";

export interface Order {
  id: string;
  Ordercode: string;
  cost: number;
}

interface Props {
  data: Order[];
}

const OrderList: React.FC<Props> = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text>{item.Ordercode}</Text>
          <Text>${item.cost}</Text>
        </View>
      )}
    />
  );
};

export default OrderList;

const styles = StyleSheet.create({
  card: {
    padding: 12,
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
  },
});