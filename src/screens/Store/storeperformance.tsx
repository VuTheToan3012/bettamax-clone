import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import RevenueChart from './Revenue'
import { useRoute } from '@react-navigation/native'
import CR from './CR'
import TopProductBarChart from './TopProduct'
import SessionByDeviceChart from './session'
import DatePicker from '@/components/Calendar'
import BottomTabs from '@/navigation/BottomTabs';
import PerformanceHeader from '@/components/PerformanceHeader'
const STORE_PERFORMANCE_DATA = {
  '1': [7000, 9000, 6000, 10000, 4000, 8000, 5000, 9000, 3000, 6000],
  '2': [5000, 7000, 8000, 6000, 9000, 7000, 8000, 10000, 6000, 8000],
  '3': [3000, 4000, 5000, 4000, 6000, 5000, 7000, 6000, 5000, 4000],
}

const Storeperformance = () => {
  const route = useRoute();
  const { storeId, storeName } = route.params;


  const [selectedDate, setSelectedDate] = useState('');

  const revenueData = STORE_PERFORMANCE_DATA[storeId] || STORE_PERFORMANCE_DATA['1'];
  const handleDateChange = (date: string) => {
    setSelectedDate(date);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f7f7f8' }}>
      <PerformanceHeader />
      <View style={{ padding: 16 }}>
        <DatePicker
          value={selectedDate}
          onDateChange={handleDateChange}

        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <RevenueChart data={revenueData} />
          <CR />
          <TopProductBarChart />
          <SessionByDeviceChart />
        </ScrollView>

      </View>
      <BottomTabs />
    </View>
  )
}

export default Storeperformance