import { Response } from 'express'

export type DefaultRes = {
  res: Response
  status: number
  message: string
  data?: object | any[] | null
}
