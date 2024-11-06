import mongoose from 'mongoose';
import { CityModel, Error, ModifiedDocument } from '../types/modelTypes';
import logger from '../logger';
import { KEY } from '../constants/keys';

mongoose.set('strictQuery', false);

const url = KEY.CITIES;

logger.info('connecting to MongoDB');
mongoose.connect(url!)
  .catch((error: Error) => {
    logger.info('error connecting to MongoDB:', error.message);
  });

const citySchema = new mongoose.Schema<CityModel>({
  city: {
    type: String,
    required: true
  }
});

citySchema.set('toJSON', {
  transform: (_doc, ret: ModifiedDocument) => {
    ret.id = ret._id?.toString();
    delete ret._id;
    delete ret.__v;
  }
});

export default mongoose.model<CityModel>('City', citySchema);