import { useEffect, useRef } from "react";

export function useCloseOnEscPress(isOpen, close) {
    function handleKeyDown(e) {
        if (e.code == "Escape") {
            close();
        }
    }

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown, true);
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown, true);
        };
    }, [isOpen]);
}

export function useCloseOnClickOutside(isOpen, close) {
    let ref = useRef();

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("click", handleClick, true);
        }

        return () => {
            document.removeEventListener("click", handleClick, true);
        };
    }, [isOpen]);

    function handleClick(e) {
        if (!ref.current.contains(e.target)) {
            close();
        }
    }

    return ref;
}

export function useHideScrollBar(isOpen) {
    useEffect(() => {
        if (isOpen) {
            let scrollBarWidth =
                window.innerWidth - document.documentElement.offsetWidth;

            document.body.style.marginRight = `${scrollBarWidth}px`;
            document.body.style.overflow = "hidden";
        }

        return () => {
            if (isOpen) {
                document.body.style.overflow = "";
                document.body.style.marginRight = "";
            }
        };
    }, [isOpen]);
}
