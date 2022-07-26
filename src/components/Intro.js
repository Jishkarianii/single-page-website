import "./Intro.css"
import Button from './Button'

function Intro() {
    return (
        <div className="intro">
            <h1>Work at the speed of thought</h1>
            <p>Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</p>
            <div className="intro-btn">
                <Button 
                    btnStyle="bg-fill"
                    btnSize="large-btn"
                    text="Try For Free"
                    />
                <Button 
                    btnStyle="bg-none"
                    btnSize="large-btn"
                    text="Learn More"
                />
            </div>
            <div className="intro-bg">
                <img 
                    src="/images/intro-bg.png" 
                    alt="intro-bg" 
                />
            </div>
        </div>
    )
}

export default Intro
