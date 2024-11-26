import { Request, Response } from 'express'
import { ExampleModel } from '../models/example.js'
import { defaultResponse } from '../utils/defaultRes.js'

export const getExample = async (req: Request, res: Response) => {
  try {
    const examples = await ExampleModel.find()
    defaultResponse({ res, status: 200, message: 'Examples fetched successfully', data: examples })
  } catch (error: any) {
    defaultResponse({ res, status: 500, message: 'Error fetching examples', data: error.message })
  }
}

// POST example
export const postExample = async (req: Request<{ title: string; description: string }>, res: Response) => {
  const { title, description } = req.body

  const newExample = new ExampleModel({
    title,
    description,
  })

  try {
    const savedExample = await newExample.save()
    defaultResponse({ res, status: 201, message: 'Example created successfully', data: savedExample })
  } catch (error: any) {
    defaultResponse({ res, status: 400, message: 'Error saving example', data: error.message })
  }
}
