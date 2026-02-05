import { View } from 'react-native'
import React from 'react'
import SimpleLineChart from './LineGraph'
import RevenueChart from './LineGraph'

const Storeperformance = () => {
  // fake revenue theo giờ
  const revenueByHour = [10, 40, 25, 60, 30, 80]

  return (
    <View style={{ padding: 16 }}>
      <RevenueChart />
    </View>
  )
}

export default Storeperformance
