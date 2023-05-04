// imports
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

// route imports
import userRoute from './routes/user.route.js'
import authRoute from './routes/auth.route.js'
import gigRoute from './routes/gig.route.js'
import orderRoute from './routes/order.route.js'
import conversationRoute from './routes/conversation.route.js'
import messageRoute from './routes/message.route.js'
import reviewRoute from './routes/review.route.js'


const app = express()
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        } catch (error) {
        console.log(error);
        } 
}

app.use(express.json())
app.use(cookieParser())

app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/gigs', gigRoute)
app.use('/api/orders', orderRoute)
app.use('/api/conversations', conversationRoute)
app.use('/api/messages', messageRoute)
app.use('/api/reviews', reviewRoute)

app.listen(3000, () => {
    connect()
    console.log('Node API app is running on port 3000');
})