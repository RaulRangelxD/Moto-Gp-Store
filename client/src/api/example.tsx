import axios from 'axios'

const API_URL = process.env.EXPO_PUBLIC_API_URL + '/examples'

export const getAllExamples = async () => {
  const response = await axios.get(API_URL)
  return response.data.data
}
