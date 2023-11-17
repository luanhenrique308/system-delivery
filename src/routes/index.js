import { Router } from 'express';
import deliveryRouter from './delivery';

const router = new Router();

router.use("/delivery", deliveryRouter);