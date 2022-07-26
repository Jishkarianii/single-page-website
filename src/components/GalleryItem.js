import "./GalleryItem.css"

function GalleryItem({ size, src, alt }) {
    const SIZE = ["medium-img", "large-img"];
    const setSize = size === SIZE[1] ? SIZE[1] : SIZE[0];

    return (
        <div data-aos="fade-up" className={`gallery-item ${setSize}`}>
            <img src={src} alt={alt} />
        </div>
    )
}

export default GalleryItem
