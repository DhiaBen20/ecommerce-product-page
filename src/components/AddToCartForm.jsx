import { useStore } from "../store";
import { CartIcon, MinusIcon, PlusIcon } from "./icons";

export default function AddToCartForm({ price, title }) {
    let quantity = useStore.use.quantity();
    let setQuantity = useStore.use.setQuantity();

    let incrementQuantity = useStore.use.incrementQuantity();
    let decrementQuantity = useStore.use.decrementQuantity();

    let setBasketItems = useStore.use.setBasketItems();

    return (
        <form
            className="mt-8 grid gap-4 grid-cols-5"
            onSubmit={handleFormSubmit}
        >
            <div className="relative flex col-span-5 md:col-span-2">
                <input
                    type="text"
                    name="quantity"
                    min={0}
                    value={quantity}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    className="min-w-0 rounded-xl flex-1 text-center py-5 md:py-4 font-bold text-xl bg-[hsl(223,64%,98%)]"
                />
                <button
                    className="absolute top-1/2 -translate-y-1/2 left-6 md:left-4 p-2 md:p-0"
                    type="button"
                    aria-label="increment"
                    onClick={incrementQuantity}
                >
                    <PlusIcon />
                </button>
                <button
                    className="absolute top-1/2 -translate-y-1/2 right-6 md:right-4 p-2 md:p-0"
                    type="button"
                    aria-label="decrement"
                    onClick={decrementQuantity}
                >
                    <MinusIcon />
                </button>
            </div>

            <button className="flex items-center justify-center rounded-xl gap-4 py-5 md:py-4 text-white font-bold shadow-2xl shadow-orange-300 bg-[hsl(26,100%,55%)] col-span-5 md:col-span-3">
                <CartIcon fill="#fff" />
                Add to cart
            </button>
        </form>
    );

    function handleInputChange(e) {
        let value = parseInt(e.target.value);

        if (isNaN(value)) return;

        setQuantity(value);
    }

    function handleKeyDown(e) {
        if (e.code == "ArrowUp") {
            incrementQuantity();
        } else if (e.code == "ArrowDown") {
            decrementQuantity();
        }
    }

    function handleFormSubmit(e) {
        e.preventDefault();

        if (!quantity) return;

        setBasketItems({ title, price, quantity });
        setQuantity(0);
    }
}
