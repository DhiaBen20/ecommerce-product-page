import { useEffect, useRef, useState } from "react";
import { CarouselContext } from "./context";

export default function CarouselProvider({
    images,
    thumbnails,
    initialSteps = 0,
    onSlideClick,
    ...props
}) {
    let [steps, setSteps] = useState(initialSteps);
    let slidesRef = useRef();

    return (
        <CarouselContext.Provider
            value={{
                images,
                thumbnails,
                steps,
                setSteps,
                onSlideClick,
                initialSteps,
                slidesRef
            }}
            {...props}
        />
    );
}
