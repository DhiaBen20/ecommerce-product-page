import { useRef } from "react";
import { NextIcon, PreviousIcon } from "../icons";
import { useCarousel, useTransitionend } from "./hooks";
import {
    getActiveSlide,
    getNextSlide,
    getPreviousSlide,
    isLastSlide,
    slide,
} from "./utilties";

export default function Controls({ hasOffset, showControls }) {
    let { steps, setSteps, slidesRef } = useCarousel();
    let isSliding = useRef(false);

    function handlePreviousClick() {
        if (isSliding.current) return;

        let slides = slidesRef.current.children;
        let activeSlide = getActiveSlide(slides, steps);
        let nextSlide = getPreviousSlide(slides, steps);

        isSliding.current = true;

        slide(activeSlide, nextSlide, "right");

        useTransitionend(nextSlide, () => {
            setSteps(steps == 0 ? slides.length - 1 : steps - 1);
            isSliding.current = false;
        });
    }

    function handleNextClick() {
        if (isSliding.current) return;

        let slides = slidesRef.current.children;
        let activeSlide = getActiveSlide(slides, steps);
        let nextSlide = getNextSlide(slides, steps);

        isSliding.current = true;

        slide(activeSlide, nextSlide, "left");

        useTransitionend(nextSlide, () => {
            setSteps(isLastSlide(slides, steps) ? 0 : steps + 1);
            isSliding.current = false;
        });
    }

    if (!showControls) {
        return null;
    }

    return (
        <>
            <CarouselButton
                placement="left"
                hasOffset={hasOffset ? true : false}
                aria-label="previous"
                onClick={handlePreviousClick}
            >
                <PreviousIcon />
            </CarouselButton>
            <CarouselButton
                placement="right"
                hasOffset={hasOffset ? true : false}
                aria-label="next"
                onClick={handleNextClick}
            >
                <NextIcon />
            </CarouselButton>
        </>
    );
}

function CarouselButton({ placement, hasOffset, ...props }) {
    let defaultClasses =
        "bg-white absolute rounded-full w-[45px] h-[45px] md:w-[58px] md:h-[58px]";
    let iconCenteringClasses = "flex justify-center items-center";
    let positionClasses = {
        left: `left-0 top-1/2 -translate-y-1/2 ${
            hasOffset ? "translate-x-4" : "-translate-x-1/2"
        }`,
        right: `right-0 top-1/2 -translate-y-1/2 ${
            hasOffset ? "-translate-x-4" : "translate-x-1/2"
        }`,
    };

    return (
        <button
            {...props}
            className={`${defaultClasses} ${iconCenteringClasses} ${positionClasses[placement]}`}
        />
    );
}
