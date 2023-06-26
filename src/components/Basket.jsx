import { useEffect, useRef } from "react";
import { Transition } from "react-transition-group";
import { useStore } from "../store";
import BasketItem from "./BasketItem";
import { CartIcon } from "./icons";
import { useCloseOnEscPress } from "../hooks";

export default function Basket() {
    let basketItems = useStore.use.basketItems();
    let setBasketItems = useStore.use.setBasketItems();
    let isBasketOpen = useStore.use.isBasketOpen();
    let setIsBasketOpen = useStore.use.setIsBasketOpen();

    let nodeRef = useRef();
    let triggerRef = useRef();

    let transitionClasses = {
        entering: "opacity-100 scale-100 translate-y-0",
        entered: "opacity-100 scale-100 translate-y-0",
        exiting: "opacity-0 scale-95 -translate-y-5",
        exited: "opacity-0 scale-95 -translate-y-5",
    };

    useCloseOnEscPress(isBasketOpen, () => setIsBasketOpen(false));

    useEffect(() => {
        if (isBasketOpen) {
            document.addEventListener("click", handleClick, true);
        }

        return () => {
            document.removeEventListener("click", handleClick, true);
        };
    }, [isBasketOpen]);

    return (
        <div className="ml-auto mr-5 flex md:relative md:mr-11">
            <button
                aria-label="open basket"
                onClick={() => setIsBasketOpen(!isBasketOpen)}
                ref={triggerRef}
                className="relative"
            >
                <CartIcon />

                {basketItems && (
                    <span className="absolute -right-2 top-4 rounded-full bg-[hsl(26,100%,55%)] px-2 text-[.65rem] font-bold text-white md:top-9">
                        {basketItems.quantity}
                    </span>
                )}
            </button>

            <Transition
                in={isBasketOpen}
                timeout={100}
                nodeRef={nodeRef}
                unmountOnExit
            >
                {(state) => (
                    <div
                        ref={nodeRef}
                        className={`absolute left-2 right-2 top-full z-10 mt-2 overflow-hidden rounded-lg bg-white shadow-2xl shadow-neutral-900/30 transition-all duration-100 md:left-[unset] md:right-0 md:top-16 md:mt-7 md:min-w-[23rem] xl:translate-x-[50%] ${transitionClasses[state]}`}
                    >
                        <h2 className="border-b-2 border-neutral-200/95 px-6 py-4 font-bold">
                            Cart
                        </h2>

                        <div className="px-6 pb-7 pt-5">
                            {!basketItems ? (
                                <div className="flex min-h-[137px] items-center justify-center">
                                    <p className="font-bold text-[hsl(219,9%,45%)]">
                                        Your cart is empty.
                                    </p>
                                </div>
                            ) : (
                                <div>
                                    <BasketItem
                                        title={basketItems.title}
                                        price={basketItems.price}
                                        quantity={basketItems.quantity}
                                        onDelete={() => setBasketItems(null)}
                                    />

                                    <button className="mt-6 w-full rounded-lg bg-[hsl(26,100%,55%)] py-4  text-center font-bold text-white">
                                        Checkout
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </Transition>
        </div>
    );

    function handleClick(e) {
        if (
            !nodeRef.current.contains(e.target) &&
            !triggerRef.current.contains(e.target)
        ) {
            setIsBasketOpen(false);
        }
    }
}
