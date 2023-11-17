import { Router } from 'express';
import deliveryController from '../controllers/deliveryController';

const deliveryRouter = new Router();

delivery.put(
  "",
  deliveryController.updateDelivery()
);

delivery.get(
  "",
  deliveryController.getListDelivery()
);

export default deliveryRouter;