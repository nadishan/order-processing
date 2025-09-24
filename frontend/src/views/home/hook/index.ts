import { useCallback, useEffect, useMemo, useState } from "react";

import PRODUCTS from "../../../data/products";
import httpClient from "../../../utils/httpClient";

import type { Order } from "../../../types";

const useHome = () => {
    const [isFormShown, setIsFormShown] = useState(false);

    const [orders, setOrders] = useState<Order[][]>([]);

    const formattedProducts = useMemo(() => {
        return PRODUCTS.map(product => ({ value: product.id.toString(), label: `${product.name} - $${product.price}` }))
    }, [PRODUCTS])


    useEffect(() => {
        const eventSource = new EventSource(`${import.meta.env.VITE_API_URL}/order`);

    eventSource.onmessage = (e) => {
      setOrders(() => [JSON.parse(e.data)]);
    };

    return () => eventSource.close();
    }, [])


    const onProductAdd = useCallback(() => {
        setIsFormShown(true);
    },[setIsFormShown])

    const onClose = useCallback(() => {
        setIsFormShown(false);
    },[setIsFormShown])


    const formattedSavedProducts = useMemo(() => { 
        const products = orders.flatMap(order => {
            return order.map(p => [p.orderId, p.customerName, p.product?.name, p.status.toUpperCase()]);
        });
        return products;
    },[orders])


    const formSubmitHandler = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const product = PRODUCTS.find(p => `${p.id}` === `${data.selectedProduct}`);

        if (!product) {
            alert("Please select a product");
            return;
        }

        const payload = {
            product,
            customerName: data.customerName
        }

        try {
            const req = await httpClient.post('order', payload);

            await req.json();
            setIsFormShown(false);
        } catch (error) {
            console.error("Error submitting form", error);
            alert("There was an error submitting the form. Please try again.");
        }


    }, [PRODUCTS])

    return {
        setIsFormShown,
        isFormShown,
        formattedProducts,
        formSubmitHandler,
        orders,
        onProductAdd,
        onClose,
        formattedSavedProducts,
    }
}

export default useHome;