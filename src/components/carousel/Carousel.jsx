import CarouselProvider from "./CarouselProvider";
import Controls from "./Controls";
import Slides from "./Slides";
import Thumbnails from "./Thumbnails";

export default function Carousel({
    images = [],
    thumbnails = [],
    rounded = false,
    showControls = true,
    controlsHasOffset,
    initialSteps,
    onSlideClick,
}) {
    return (
        <CarouselProvider
            images={images}
            thumbnails={thumbnails}
            initialSteps={initialSteps}
            onSlideClick={onSlideClick}
        >
            <div className="relative">
                <Slides rounded={rounded} />
                <Controls
                    hasOffset={controlsHasOffset}
                    showControls={showControls}
                />
            </div>
            <Thumbnails />
        </CarouselProvider>
    );
}
