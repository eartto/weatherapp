import express from 'express';
import { Request, Response } from 'express';

import cityService from '../services/cityService';
import { toNewCity } from '../validators/cityValidator';


const citiesRouter = express.Router();

citiesRouter.get('/', (_req: Request, res: Response) => {
    cityService.getCities().then(cities => {
        res.status(200).send(cities);
    }
    ).catch(error => {
        let errorMessage = 'Something went wrong.';
        if (error instanceof Error) {
            errorMessage += ' Error: ' + error.message;
        }
        res.status(400).send(errorMessage);
    });
});

citiesRouter.post('/', (req: Request, res: Response) => {
    try {
        const newCity = toNewCity(req.body);
        const city = cityService.addCity(newCity.city);
        res.status(201).json(city);
    } catch (error: unknown) {
        let errorMessage = 'Something went wrong.';
        if (error instanceof Error) {
            errorMessage += ' Error: ' + error.message;
        }
        res.status(400).send(errorMessage);
    }
});

citiesRouter.delete('/', (_req: Request, res: Response) => {
    cityService.popCity().then(result => {
        res.status(204).json(result);
    })
        .catch(error => {
            let errorMessage = 'Something went wrong.';
            if (error instanceof Error) {
                errorMessage += ' Error: ' + error.message;
            }
            res.status(400).send(errorMessage);
        });
});


export default citiesRouter;