import { images, thumbnails } from "../data";
import Carousel from "./carousel";
import Lightbox from "./Lightbox";

export default function ProductGallery() {
    return (
        <div>
            <div className="md:hidden">
                <Carousel images={images} controlsHasOffset />
            </div>

            <div className="hidden md:block">
                <Lightbox images={images} thumbnails={thumbnails} />
            </div>
        </div>
    );
}
