import { View, Text ,ScrollView} from 'react-native'
import React from 'react'
import RevenueChart from './LineGraph'
import { useRoute } from '@react-navigation/native'
import CR from './CR'
import TopProductBarChart from './TopProduct'
import DonutChart from './session'
import SessionByDeviceChart from './session'
SessionByDeviceChart
// Mock data cho mỗi store
const STORE_PERFORMANCE_DATA = {
  '1': [7000, 9000, 6000, 10000, 4000, 8000, 5000, 9000, 3000, 6000],
  '2': [5000, 7000, 8000, 6000, 9000, 7000, 8000, 10000, 6000, 8000],
  '3': [3000, 4000, 5000, 4000, 6000, 5000, 7000, 6000, 5000, 4000],
}
const Storeperformance = () => {
  const route = useRoute();
  const { storeId, storeName } = route.params;

  // Lấy data theo storeId
  const revenueData = STORE_PERFORMANCE_DATA[storeId] || STORE_PERFORMANCE_DATA['1'];

  return (
    <View style={{ flex: 1, backgroundColor: '#F9FAFB' }}>
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 8 }}>
    
        </Text>
      <ScrollView>
          <RevenueChart data={revenueData} />
         <CR />
        
         <TopProductBarChart/>
        <SessionByDeviceChart />
      </ScrollView>
      </View>
    </View>
  )
}
export default Storeperformance