import Button from "./Button"
import "./MediaCont.css"

function MediaCont() {
    return (
        <section data-aos="fade-up" className="media-cont">
            <div className="media-left">
                <p>OpenType features and Variable fonts</p>
                <Button 
                    btnStyle="bg-fill"
                    btnSize="medium-btn"
                    text="Try For Free"
                />
            </div>
            <img src="/images/media-img.png" alt="media" />
        </section>
    )
}

export default MediaCont
