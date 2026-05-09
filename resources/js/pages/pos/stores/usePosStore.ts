import { create } from 'zustand';
import {
    CartItem,
    OrderType,
    PaymentMethod,
    Product,
} from '../types';

interface PosState {
    orderType: OrderType | null;

    paymentMethod: PaymentMethod | null;

    customerName: string;

    paidAmount: number | '';

    cart: CartItem[];

    setOrderType: (type: OrderType) => void;

    setPaymentMethod: (
        method: PaymentMethod,
    ) => void;

    setCustomerName: (name: string) => void;

    setPaidAmount: (amount: number | '') => void;

    addItem: (product: Product) => void;

    removeItem: (productId: number) => void;

    clearCart: () => void;

    totalItems: () => number;

    subtotal: () => number;

    total: () => number;

    changeAmount: () => number;
}

export const usePosStore = create<PosState>(
    (set, get) => ({
        orderType: null,

        paymentMethod: null,

        customerName: '',

        paidAmount: '',

        cart: [],

        setOrderType: (type) =>
            set({
                orderType: type,
            }),

        setPaymentMethod: (method) =>
            set({
                paymentMethod: method,
            }),

        setCustomerName: (name) =>
            set({
                customerName: name,
            }),

        setPaidAmount: (amount) =>
            set({
                paidAmount: amount,
            }),

        addItem: (product) => {
            const cart = [...get().cart];

            const index = cart.findIndex(
                (item) =>
                    item.product.id === product.id,
            );

            if (index >= 0) {
                cart[index].qty += 1;

                cart[index].subtotal =
                    cart[index].qty *
                    product.price;
            } else {
                cart.push({
                    product,
                    qty: 1,
                    subtotal: product.price,
                });
            }

            set({ cart });
        },

        removeItem: (productId) => {
            let cart = [...get().cart];

            const index = cart.findIndex(
                (item) =>
                    item.product.id === productId,
            );

            if (index === -1) {
                return;
            }

            cart[index].qty -= 1;

            if (cart[index].qty <= 0) {
                cart = cart.filter(
                    (item) =>
                        item.product.id !==
                        productId,
                );
            } else {
                cart[index].subtotal =
                    cart[index].qty *
                    cart[index].product.price;
            }

            set({ cart });
        },

        clearCart: () =>
            set({
                cart: [],
                paidAmount: '',
                customerName: '',
                paymentMethod: null,
            }),

        totalItems: () =>
            get().cart.reduce(
                (total, item) =>
                    total + item.qty,
                0,
            ),

        subtotal: () =>
            get().cart.reduce(
                (total, item) =>
                    total + item.subtotal,
                0,
            ),

        total: () => get().subtotal(),

        changeAmount: () => {
            return Math.max(
                0,
                Number(get().paidAmount || 0) -
                get().total(),
            );
        },
    }),
);
