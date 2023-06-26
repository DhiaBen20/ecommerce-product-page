import { useRef, useState } from "react";
import { Transition } from "react-transition-group";
import { CloseIcon } from "./icons";
import {
    useCloseOnClickOutside,
    useCloseOnEscPress,
    useHideScrollBar,
} from "../hooks";
import Carousel from "./carousel";

let opacityTranitionClasses = {
    entering: "opacity-100 transition-all duration-150",
    entered: "opacity-100 transition-all duration-150",
    exiting: "opacity-0",
    exited: "opacity-0",
};

let transformTransitionClasses = {
    entering: "translate-y-0",
    entered: "translate-y-0",
    exiting: "-translate-y-5",
    exited: "-translate-y-5",
};

export default function Lightbox({ images, thumbnails }) {
    let [isOpen, setIsOpen] = useState(false);
    let [initialSteps, setInitialSteps] = useState(0);

    let nodeRef = useRef();

    let ref = useCloseOnClickOutside(isOpen, () => setIsOpen(false));

    useCloseOnEscPress(isOpen, () => setIsOpen(false));
    useHideScrollBar(isOpen);

    return (
        <>
            <Carousel
                images={images}
                thumbnails={thumbnails}
                rounded
                showControls={false}
                onSlideClick={(steps) => {
                    setInitialSteps(steps);
                    setIsOpen(true);
                }}
            />
            <Transition
                in={isOpen}
                nodeRef={nodeRef}
                timeout={150}
                unmountOnExit
            >
                {(state) => (
                    <div
                        ref={nodeRef}
                        className={`fixed inset-x-0 top-0 z-20 h-screen overflow-y-scroll bg-neutral-900/80 py-36 ${opacityTranitionClasses[state]}`}
                    >
                        <div
                            className={`py-28c relative  mx-auto w-full max-w-xl transition-all duration-150 ${transformTransitionClasses[state]}`}
                            ref={ref}
                        >
                            <button
                                className="absolute -top-7 right-0 -translate-y-full"
                                aria-label="close Modal"
                                onClick={() => setIsOpen(false)}
                            >
                                <CloseIcon size="large" fill="#eee" />
                            </button>

                            <Carousel
                                images={images}
                                rounded
                                thumbnails={thumbnails}
                                controlsHasOffset={false}
                                initialSteps={initialSteps}
                            />
                        </div>
                    </div>
                )}
            </Transition>
        </>
    );
}
