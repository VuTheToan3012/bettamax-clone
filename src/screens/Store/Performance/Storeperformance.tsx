import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";

import RevenueChart from "./Revenue";
import CR from "./CR";
import TopProductBarChart from "./TopProduct";
import SessionByDeviceChart from "./session";
import DatePicker from "@/components/Calendar";
import BottomTabs from "@/navigation/BottomTabs";
import PerformanceHeader from "@/components/PerformanceHeader";
import UTMSelect from "@/components/BottomMenu";
import BottomDropdown from "@/components/BottomMenu";
import { useShopStore } from "@/stores/store";

const Storeperformance = () => {

  const { selectedStore } = useShopStore();
  const [selectedDate, setSelectedDate] = useState("");

  
  return (
    <View style={{ flex: 1, backgroundColor: "#f7f7f8" }}>

      <PerformanceHeader />
      <View style={{ padding: 16, flex: 1 }}>
        <DatePicker
          value={selectedDate}
          onDateChange={setSelectedDate}
        />

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 60 }}>
         <RevenueChart />
          <CR />
          {/* <TopProductBarChart />
          <SessionByDeviceChart /> */}
          <BottomDropdown />
        </ScrollView>
      </View>

      <BottomTabs />

    </View>
  );
};

export default Storeperformance;