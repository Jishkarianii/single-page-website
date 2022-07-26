import "./UserItem.css"

function UserItem({ aos, img, name, profession, text }) {
    return (
        <div data-aos={aos} className="user-item">
            <div className="user">
                <img src={img} alt="user" />
                <div className="user-name">
                    <p>{name}</p>
                    <p>{profession}</p>
                </div>
            </div>
            <p className="user-text">{text}</p>
        </div>
    )
}

export default UserItem
