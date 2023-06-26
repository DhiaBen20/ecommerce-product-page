import { useRef } from "react";
import { Transition } from "react-transition-group";
import { useCloseOnClickOutside, useCloseOnEscPress } from "../hooks";
import { useStore } from "../store";
import Navigation from "./Navigation";
import { CloseIcon } from "./icons";

export default function MobileNavigation() {
    let isOpen = useStore.use.isMenuOpen();
    let setIsOpen = useStore.use.setIsMenuOpen();

    let nodeRef = useRef();

    let opacityTranitionClasses = {
        entering: "opacity-100",
        entered: "opacity-100",
        exiting: "opacity-0",
        exited: "opacity-0",
    };

    let transformTransitionClasses = {
        entering: "translate-x-0",
        entered: "translate-x-0",
        exiting: "-translate-x-5",
        exited: "-translate-x-5",
    };

    useCloseOnEscPress(isOpen, () => setIsOpen(false));
    let menuRef = useCloseOnClickOutside(isOpen, () => setIsOpen(false));

    return (
        <Transition
            in={isOpen}
            nodeRef={nodeRef}
            timeout={200}
            unmountOnExit={true}
        >
            {(state) => (
                <div
                    className={`fixed z-10 inset-0 bg-black/60 md:hidden transition-opacity duration-200 ${opacityTranitionClasses[state]}`}
                    ref={nodeRef}
                >
                    <div
                        className={`w-2/3 bg-white h-full px-6 transition-transform duration-200 ${transformTransitionClasses[state]}`}
                        ref={menuRef}
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="mt-7 mb-12"
                        >
                            <CloseIcon />
                        </button>

                        <Navigation />
                    </div>
                </div>
            )}
        </Transition>
    );
}
