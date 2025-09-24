import { Router, Request, Response } from "express";
import { createOrder, getOrders } from "../services/orderService";

const router = Router();

export let eventClients: any = [];

router.get("/", (req: Request, res: Response): void => {
  try {
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    const response = getOrders();

    res.write(`data: ${JSON.stringify(response)}\n\n`);

    eventClients.push(res);

    req.on("close", () => {
      eventClients = eventClients.filter((c: any) => c !== res);
    });
  } catch (error) {
    res.status(500).json('Error occurred while getting orders');
  }

});

router.post("/", (req: Request, res: Response): void => {
  try {
    createOrder(req.body);

    res.json('Order created successfully');
  } catch (error) {
    res.status(500).json('Error occurred while creating order');
  }

});

export default router;