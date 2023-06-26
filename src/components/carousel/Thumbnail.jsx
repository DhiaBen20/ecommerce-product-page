import { useCarousel, useTransitionend } from "./hooks";
import { getDirection, slide } from "./utilties";

export default function Thumbnail({ thumbnail, original, index }) {
    let { setSteps, steps, images, slidesRef } = useCarousel();

    let isSelected = steps == index;

    let defaultClasses = "rounded-xl overflow-hidden w-20 h-20 lg:w-24 lg:h-24";
    let selectedClasses = "ring ring-[hsl(26,100%,55%)]";

    return (
        <button
            className={`${defaultClasses} ${isSelected ? selectedClasses : ""}`}
            aria-label={`select thumbnail ${index + 1}`}
            onClick={handleThumbnailClick}
        >
            <img
                src={thumbnail}
                alt=""
                className={`object-cover hover:opacity-50 ${isSelected ? "opacity-50" : ""}`}
            />
        </button>
    );

    function handleThumbnailClick() {
        let OriginalImageIndex = images.indexOf(original);
        let slides = slidesRef.current.children;

        let activeSldide = slides[steps];
        let nextSlide = slides[OriginalImageIndex];
        let direction = getDirection(steps, index);

        slide(activeSldide, nextSlide, direction);
        useTransitionend(nextSlide, () => {
            setSteps(OriginalImageIndex);
        });
    }
}
