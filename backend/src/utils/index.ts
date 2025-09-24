import { eventClients } from "../routes/orderRoutes";

const generateOrderNumber = (): number => {
    return Math.floor(10000 + Math.random() * 90000)
}

const broadcast = (data: string) => {
  eventClients.forEach((client: any) => {
    client.write(`data: ${data}\n\n`);
  });
}

export { generateOrderNumber, broadcast };