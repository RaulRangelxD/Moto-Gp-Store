import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import axios from 'axios'

export default function HomeScreen() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/examples')
      console.log(response)
      setData(response.data.data)
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
        <Text>Home</Text>
        {loading ? (
          <Text>Loading...</Text>
        ) : data ? (
          <View className='flex flex-col gap-2'>
            {data.map((item, index) => (
              <View key={index} className='p-2 bg-neutral-300 rounded'>
                <Text className='text-black'>{item.title}</Text>
                <Text className='text-black'>{item.description}</Text>
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
