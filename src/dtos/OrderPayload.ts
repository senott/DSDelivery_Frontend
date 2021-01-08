import OrderAddress from "./OrderAddress"

interface ProductId {
  id: number;
}

interface OrderPayload extends OrderAddress{
  products: ProductId[];
}

export default OrderPayload;
