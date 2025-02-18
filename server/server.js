import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/mongodb.js';
import { clerkWebhooks } from './controllers/webhooks.js';

//Initialize express
const app = express()

// Connect to Database
await connectDB()

//Middleware
app.use(cors())

//Routes
app.get('/', (req, res) => res.send('API Working!'))
app.post('/clerk', express.json(), clerkWebhooks)

//Port
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))