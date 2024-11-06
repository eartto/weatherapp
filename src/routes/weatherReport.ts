import express from 'express';
import axios from 'axios';
import { WEATHER_URL } from '../constants/urls';

import { Request, Response } from 'express';

const weatherReportRouter = express.Router();

weatherReportRouter.get('/', (req: Request, res: Response) => {
    const city: string = req.query.city as string;
    axios.get(WEATHER_URL(city)).then(response => {
        res.status(200).send(response.data);
    }).catch(error => {
        let errorMessage = 'Something went wrong.';
        if (error instanceof Error) {
            errorMessage += ' Error: ' + error.message;
        }
        res.status(400).send(errorMessage);
    });
});

export default weatherReportRouter;