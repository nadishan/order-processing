import { Product } from "./product";

type Order = {
    orderId: number;
    customerName: string;
    product: Product;
    status: string;
}

export type { Order };