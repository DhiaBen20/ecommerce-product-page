import { formatMoney, formatPercent } from "../utilities";
import AddToCartForm from "./AddToCartForm";

export default function ProductDetails() {
    let price = 250;
    let discount = 0.5;

    return (
        <div className="mt-8 md:mt-16 px-6">
            <a
                href="#"
                className="uppercase font-bold text-sm tracking-widest text-[hsl(26,100%,55%)]"
            >
                Sneaker Company
            </a>
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mt-4">
                Fall limited Edition Sneakers
            </h1>
            <p className="mt-6 md:mt-10 text-[hsl(219,9%,45%)] leading-relaxed">
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they’ll
                withstand everything the weather can offer.
            </p>

            <div className="flex md:flex-col items-center md:items-start font-bold gap-4 md:gap-2 mt-6 flex-wrap">
                <div className="flex items-center justify-between gap-4">
                    <span className="text-2xl md:text-3xl">
                        {formatMoney(price * discount)}
                    </span>
                    <span className="rounded-md py-0.5 px-2 text-[hsl(26,100%,55%)] bg-[hsl(25,100%,94%)]">
                        {formatPercent(discount)}
                    </span>
                </div>
                <span className="ml-auto md:ml-0 line-through text-[hsl(220,14%,75%)]">
                    {formatMoney(price)}
                </span>
            </div>

            <AddToCartForm
                title={"Fall limited Edition Sneakers"}
                price={price * discount}
            />
        </div>
    );
}
