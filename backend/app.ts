require('dotenv').config();
import express, { NextFunction, Request, Response } from "express";
export const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";

app.use(express.json({
    limit: '50mb'
}));

app.use(cookieParser());

app.use(cors({
    origin: process.env.ORIGIN
}));

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: 'Hello World!'
    }); 
});

app.all('*', (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
        success: false,
        message: 'Resource not found'
    });
    next();
});