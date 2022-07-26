import Button from "./Button"
import "./Gallery.css"
import GalleryItem from "./GalleryItem"

function Gallery() {
    return (
        <section data-aos="fade-up" className="gallery main-cont">
            <h2 className="title">Gallery</h2>
            <p className="text">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
            <div className="first-gallery-cont">
                <GalleryItem 
                   src="/images/drone.png"
                   alt="drone" 
                />
                <GalleryItem 
                   src="/images/ipad.png"
                   alt="ipad" 
                />
                <GalleryItem 
                   src="/images/meeting.png"
                   alt="meeting" 
                />
                <GalleryItem 
                   src="/images/apple.png"
                   alt="apple" 
                />
            </div>
            <div className="second-gallery-cont">
                <GalleryItem 
                   size="large-img" 
                   src="/images/coding.png"
                   alt="coding" 
                   />
                <GalleryItem 
                   src="/images/laptop.png"
                   alt="laptop" 
                   />
                <GalleryItem 
                   size="large-img" 
                   src="/images/camera.png"
                   alt="camera" 
                />
            </div>
            <div className="gallery-btn">
               <Button 
                  text="See more" 
                  btnSize="medium-btn"
               />   
            </div> 
        </section>
    )
}

export default Gallery
