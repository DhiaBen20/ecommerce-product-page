import Thumbnail from "./Thumbnail";
import { useCarousel } from "./hooks";

export default function Thumbnails() {
    let { thumbnails } = useCarousel();

    if (thumbnails.length == 0) {
        return null;
    }

    return (
        <div className="mt-8 flex justify-center gap-8">
            {thumbnails.map((t, i) => (
                <Thumbnail
                    key={t.thumbnail}
                    index={i}
                    thumbnail={t.thumbnail}
                    original={t.image}
                />
            ))}
        </div>
    );
}
