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
            className="mt-8 grid grid-cols-5 gap-4"
            onSubmit={handleFormSubmit}
        >
            <div className="relative col-span-5 flex md:col-span-2">
                <input
                    type="text"
                    aria-label="quantity"
                    value={quantity}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    className="min-w-0 flex-1 rounded-xl bg-[hsl(223,64%,98%)] py-5 text-center text-xl font-bold md:py-4"
                />
                <button
                    className="absolute left-6 top-1/2 -translate-y-1/2 p-2 md:left-4 md:p-0"
                    type="button"
                    aria-label="increment"
                    onClick={incrementQuantity}
                >
                    <PlusIcon />
                </button>
                <button
                    className="absolute right-6 top-1/2 -translate-y-1/2 p-2 md:right-4 md:p-0"
                    type="button"
                    aria-label="decrement"
                    onClick={decrementQuantity}
                >
                    <MinusIcon />
                </button>
            </div>

            <button className="col-span-5 flex items-center justify-center gap-4 rounded-xl bg-[hsl(26,100%,55%)] py-5 font-bold text-white shadow-2xl shadow-orange-300 md:col-span-3 md:py-4">
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
