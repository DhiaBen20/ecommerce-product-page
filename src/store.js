import { create } from "zustand";

export let useStore = create((set) => ({
    // Mobile Menu
    isMenuOpen: false,
    setIsMenuOpen: (isMenuOpen) => set({ isMenuOpen }),

    // add to cart form
    quantity: 0,
    setQuantity: (quantity) => set({ quantity }),
    incrementQuantity: () =>
        set((store) => ({
            quantity: store.quantity + 1,
        })),
    decrementQuantity: () =>
        set((store) => ({
            quantity: store.quantity ? store.quantity - 1 : store.quantity,
        })),

    // cart
    isBasketOpen: false,
    setIsBasketOpen: (isBasketOpen) => set({ isBasketOpen }),

    basketItems: null,
    setBasketItems: (item) =>
        set((store) => {
            if (!item) return { basketItems: null };

            if (!store.basketItems) return { basketItems: item };

            return {
                basketItems: {
                    ...store.basketItems,
                    quantity: store.basketItems.quantity + item.quantity,
                },
            };
        }),
}));

useStore.use = {};

for (let key of Object.keys(useStore.getState())) {
    useStore.use[key] = () => useStore((store) => store[key]);
}
