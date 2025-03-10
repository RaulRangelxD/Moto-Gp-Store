import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { getAllExamples } from '@/api/example'
import CarouselExample from '@/components/CarouselSlider'

export default function HomeScreen() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const response = await getAllExamples()
      setData(response)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <ScrollView>
      <View className='flex flex-col items-center'>
        <Text className='text-default-dark'>Home</Text>
        <CarouselExample />
        {loading ? (
          <Text>Loading...</Text>
        ) : data ? (
          <View className='flex flex-col gap-2'>
            {data.map((item, index) => (
              <View key={index} className='p-2 bg-neutral-300 rounded'>
                <Text className='text-default-dark'>{item.title}</Text>
                <Text className='text-default-dark'>{item.description}</Text>
              </View>
            ))}
          </View>
        ) : (
          <Text>No data available</Text>
        )}
      </View>
    </ScrollView>
  )
}
