import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import streamRoutes from './routes/streamRoutes.js'
import admissionRouter from './routes/admissonRoutes.js'
import paymentRoutes from './routes/paymentRoutes.js'
import studentRoutes from './routes/studentRoutes.js'
import facultyRouter from './routes/facultyRoutes.js'
import newsRouter from './routes/newsRoutes.js'

dotenv.config()
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended : true}));

app.use('/api/stream',streamRoutes);
app.use('/api/admissions',admissionRouter);
app.use('/api/payment',paymentRoutes);
app.use('/api/student',studentRoutes);
app.use('/api/faculty',facultyRouter);
app.use('/api/news',newsRouter);

app.listen(process.env.PORT,() => {
    console.log("Server running on PORT " + process.env.PORT);
})