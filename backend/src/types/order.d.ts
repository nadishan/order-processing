import { Product } from "./product";

type Order = {
    orderId?: number;
    customerName: string;
    product: Product;
    status?: "pending" | "processing" | "completed";
}

export type { Order };