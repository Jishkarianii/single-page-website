import Button from "./Button"
import "./Partners.css"

function Partners() {
    return (
        <section data-aos="fade-up" className="partners">
            <h2 className="title">Partners</h2>
            <p className="text">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
            <div className="partners-logos">
                <img src="/images/app-store.png" alt="app-store" />
                <img src="/images/apiary.png" alt="apiary" />
                <img src="/images/android.png" alt="android" />
                <img src="/images/basecamp.png" alt="basecamp" />
                <img src="/images/airbnb.png" alt="airbnb" />
                <img src="/images/ibm.png" alt="ibm" />
            </div>
            <div className="partners-btn">
               <Button 
                  text="All Partners" 
                  btnSize="medium-btn"
               />   
            </div> 
        </section>
    )
}

export default Partners
