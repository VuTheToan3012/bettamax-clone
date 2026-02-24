import React, { useState, useMemo } from "react";
import { View } from "react-native";
import SearchBar from "./SearchBar";
import OrderList, { Order } from "./OrderList";

const DATA: Order[] = [
  { id: "1", Ordercode: "ORD001", cost: 100 },
  { id: "2", Ordercode: "ORD002", cost: 250 },
  { id: "3", Ordercode: "VIP003", cost: 500 },
];

const OrderScreen = () => {
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    return DATA.filter((item) =>
      item.Ordercode.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <View style={{ flex: 1 }}>
      <SearchBar value={search} onChangeText={setSearch} />
      <OrderList data={filteredData} />
    </View>
  );
};

export default OrderScreen;