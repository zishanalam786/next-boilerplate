import mongoose from 'mongoose';
import { EnvService } from '@/core/config/env.service';

const env = new EnvService();

const dbURI = EnvService.get(
  'MONGODB_URI',
  'mongodb://localhost:27017/mydatabase'
);

mongoose
  .connect(dbURI)
  .then(() => {
    console.log('Database connection established');
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });

export default mongoose;
