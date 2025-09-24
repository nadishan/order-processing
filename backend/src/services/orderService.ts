import { Order } from "../types/order";
import { broadcast, generateOrderNumber } from "../utils";


const orders: Order[] = []

const getOrders = (): Order[] => {
  return orders
}

const createOrder = (order: Order): void => {
    const orderNumber = generateOrderNumber();
    const newOrder: Order = {
        customerName: order.customerName,
        product: order.product,
        status: 'pending',
        orderId: orderNumber,
    }

    setTimeout(() => {
        const order = orders.find(o => o.orderId === orderNumber);
        if(order) {
            order.status = 'processing';
        }
        broadcast(JSON.stringify(orders));
    }, 2 * 1000);

    setTimeout(() => {
        const order = orders.find(o => o.orderId === orderNumber);
        if(order) {
            order.status = 'completed';
        }
        broadcast(JSON.stringify(orders));
    }, 8 * 1000);

    orders.push(newOrder);

    broadcast(JSON.stringify(orders));
}

export { getOrders, createOrder };