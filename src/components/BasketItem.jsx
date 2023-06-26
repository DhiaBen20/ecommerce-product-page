import { formatMoney } from "../utilities";
import { DeleteIcon } from "./icons";

export default function BasketItem({ title, quantity, price, onDelete }) {
    return (
        <div className="flex items-center gap-4">
            <div className="w-14 rounded overflow-hidden">
                <img src="/image-product-1-thumbnail.jpg" alt="" />
            </div>
            <div className="flex-1">
                <h3 className="text-[hsl(219,9%,45%)]">{title}</h3>
                <p>
                    <span className="text-[hsl(219,9%,45%)]">
                        {formatMoney(price)} x {quantity}
                    </span>{" "}
                    <span className="font-bold">
                        {formatMoney(price * quantity)}
                    </span>
                </p>
            </div>
            <div className="flex items-center gap-4">
                <div>
                    <button aria-label="delete from cart" onClick={onDelete}>
                        <DeleteIcon />
                    </button>
                </div>
            </div>
        </div>
    );
}
