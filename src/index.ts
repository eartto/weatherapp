import config from './utils/config';
import express from 'express';
const app = express();

import logger from './logger';
import weatherReportRouter from './routes/weatherReport';
import citiesRouter from './routes/cities';

app.use(express.static('frontend_build'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/weatherreport', weatherReportRouter);
app.use('/api/cities', citiesRouter);

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});