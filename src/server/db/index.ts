import mongoose, { Connection } from 'mongoose'

let cacheDB: Connection | null = null

export const connect = async () => {
  try {
    if (cacheDB) {
      console.log('Using cached database connection.')
      return cacheDB
    }
    await mongoose.connect(process.env.MONGODB_URI!)
    const connection = mongoose.connection
    connection.on('connected', () => {
      console.log('MongoDB connected successfully')
      cacheDB = connection
    })
    connection.on('error', (err) => {
      console.log('MongoDB connection error: ' + err.message)
      process.exit()
    })
  } catch (err) {
    console.log('something went wrong with db connection')
    console.error(err)
  }
}
