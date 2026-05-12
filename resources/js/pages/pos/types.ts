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
    image: string | null;
    image_url: string | null;
    description: string | null;
}

export interface CartItem {
    product: Product;
    qty: number;
    subtotal: number;
}

export type OrderType = 'takeaway' | 'dining';

export type PaymentMethod = 'cash' | 'qris';
