export function getActiveSlide(slides, steps) {
    return slides[steps];
}

export function getNextSlide(slides, steps) {
    return isLastSlide(slides, steps) ? slides[0] : slides[steps + 1];
}

export function getPreviousSlide(slides, steps) {
    return steps == 0 ? slides[slides.length - 1] : slides[steps - 1];
}

export function isLastSlide(slides, steps) {
    return steps < slides.length - 1 ? false : true;
}

export function slideIn(nextSlide, direction = "left") {
    nextSlide.style.transform = `translateX(${
        direction == "left" ? "100%" : "-100%"
    })`;
    nextSlide.style.display = "block";
    nextSlide.offsetHeight;
    nextSlide.style.transform = "translateX(0)";
    nextSlide.addEventListener(
        "transitionend",
        () => {
            nextSlide.style.transform = "";
            nextSlide.style.display = "";

            nextSlide.classList.remove("hidden");
            nextSlide.classList.add("block");
        },
        { once: true }
    );
}

export function slideOut(activeSlide, direction = "left") {
    activeSlide.style.transform = `translateX(${
        direction == "left" ? "-100%" : "100%"
    })`;
    activeSlide.addEventListener(
        "transitionend",
        () => {
            activeSlide.style.transform = "";
            activeSlide.classList.remove("block");
            activeSlide.classList.add("hidden");
        },
        { once: true }
    );
}

export function slide(activeSlide, nextSlide, direction) {
    if (!direction) return;

    slideOut(activeSlide, direction);
    slideIn(nextSlide, direction);
}

export function getDirection(steps, thumbnailIndex) {
    if (steps < thumbnailIndex) return "left";
    if (steps > thumbnailIndex) return "right";
}
