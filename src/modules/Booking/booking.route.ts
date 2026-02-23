import express from 'express';
import { bookingController } from './booking.controller';

const router = express.Router();
router.get('/',bookingController.getAllbookings);
router.patch('/:bookingId', bookingController.updatebookingById);
router.post('/',bookingController.createbooking);
router.delete('/:bookingId',bookingController.deletebookingById);
export const BookingRoutes = router;
