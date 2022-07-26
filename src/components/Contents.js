import "./Contents.css"
import ContentsItem from "./ContentsItem"

function Contents() {
    return (
        <section data-aos="fade-up" className="contents">
            <h2 className="title">Contents</h2>
            <p className="text">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
            <div className="contents-cards">
                <ContentsItem 
                    dataAos="fade-up"
                    title="Work"
                    text="Ever wondered if you're too reliant 
                    on a client for work? Slate helps 
                    you identify ."
                    btnText="Sign Up"
                    imgURL="/images/macbook-pro.png"
                    alt="macbook-pro"
                />
                <ContentsItem 
                    dataAos="fade-up"
                    title="Design with real data"
                    text="Ever wondered if you're too reliant 
                    on a client for work? Slate helps 
                    you identify ."
                    btnText="Try For Free"
                    imgURL="/images/boards-notifications.png"
                    alt="boards-notifications"
                />
            </div>
        </section>
    )
}

export default Contents
