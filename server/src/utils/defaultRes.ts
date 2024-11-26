import { DefaultRes } from '../types/defaultRes.js'

export const defaultResponse = ({ res, status, message, data = null }: DefaultRes) => {
  res.status(status).json({
    success: status >= 200 && status < 300,
    message,
    data,
  })
}
