import Slide from "./Slide";
import { useCarousel } from "./hooks";

export default function Slides({rounded}) {
    let { images, slidesRef } = useCarousel();

    return (
        <div className={`flex overflow-hidden ${rounded ? 'rounded-xl' : ''}`} ref={slidesRef}>
            {images.map((i, index) => (
                <Slide key={i} url={i} index={index} />
            ))}
        </div>
    );
}
