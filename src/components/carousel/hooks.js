import { useContext } from "react";
import { CarouselContext } from "./context";

export function useCarousel() {
    let value = useContext(CarouselContext);

    if (!value) {
        throw new Error(
            `Custom hook 'useCarouselProvider' can't be used outside 'useCarousel'`
        );
    }

    return value;
}

export function useTransitionend(transitioned, cb) {
    transitioned.addEventListener(
        "transitionend",
        () => {
            cb();
        },
        { once: true }
    );
}
