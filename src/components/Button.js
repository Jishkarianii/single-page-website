import "./Button.css"

function Button({ btnStyle, btnSize, text }) {
    const STYLE = ["bg-fill", "bg-none"];
    const setStyle = btnStyle === STYLE[0] ? STYLE[0] : STYLE[1];
    
    const SIZE = ["medium-btn", "large-btn"];
    const setSize = btnSize === SIZE[0] ? SIZE[0] : SIZE[1];

    return (
        <a href="/">
            <button className={`btn ${setStyle} ${setSize}`}>
                {text}
            </button>
        </a>
    )
}

export default Button
