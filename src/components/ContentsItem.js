import Button from "./Button"
import "./ContentsItem.css"

function ContentsItem({ dataAos, title, text, btnText, imgURL, alt }) {
    return (
        <div data-aos={dataAos} className="contents-item">
            <strong>{title}</strong>
            <p>{text}</p>
            <Button 
                className="contents-btn"
                btnStyle="bg-fill"
                btnSize="medium-btn"
                text={btnText}
            />
            <div className="contents-item-img">
                <img src={imgURL} alt={alt} />
            </div>
        </div>
    )
}

export default ContentsItem
