import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { AuthRoutes } from './modules/Auth/auth.route';
import { CategoryRoutes } from './modules/Category/category.route';
import { reviewRoutes } from './modules/Review/review.route';
import { BookingRoutes } from './modules/Booking/booking.route';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/auth', AuthRoutes);
app.use('/api/v1/reviews', reviewRoutes);
app.use('/api/v1/categories', CategoryRoutes);
app.use('/api/v1/bookings', BookingRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Apollo Gears World!');
});

export default app;
