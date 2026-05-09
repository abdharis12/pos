export interface Category {
    id: number;
    name: string;
    slug: string;
}

export interface Product {
    id: number;
    category_id: number;
    name: string;
    sku: string;
    price: number;
    stock: number;
    is_active: boolean;
    category: Category;
}

export interface CartItem {
    product: Product;
    qty: number;
    subtotal: number;
}

export type OrderType = 'takeaway' | 'dining';

export type PaymentMethod = 'cash' | 'qris';
