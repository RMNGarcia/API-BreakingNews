import mongoose from 'mongoose'

const connectDatabase = () => {
  console.log('wait connecting to the database')

  mongoose
    .connect(
      'your url connection from MongoDBAtlas',
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log('MongoDB Atlas Connected'))
    .catch(error => console.log(error))
}

export default connectDatabase
