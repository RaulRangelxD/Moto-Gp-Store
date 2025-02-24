import axios from 'axios'

export const getAllExamples = async () => {
  const response = await axios.get('http://localhost:3000/examples')
  return response.data.data
}
