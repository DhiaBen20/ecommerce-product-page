import { useCarousel } from "./hooks";

export default function Slide({ url, index }) {
    let { steps, onSlideClick } = useCarousel();

    return (
        <div
            className={`-mr-[100%] w-full min-w-full transition-transform duration-300 [transform:translateX(0)] ${
                index == steps ? "block" : "hidden"
            } ${onSlideClick ? 'cursor-pointer' : ''}`}
            onClick={() => onSlideClick && onSlideClick(steps)}
        >
            <img src={url} alt="" className="block w-full" />
        </div>
    );
}
