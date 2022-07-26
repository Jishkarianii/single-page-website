import "./Features.css"

function Features() {
    return (
        <section data-aos="fade-up" className="features main-cont">
            <h2 className="title">FEATURES</h2>
            <p className="text">Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</p>
            <div data-aos="fade-up" className="chat-bot-cont">
                <div className="chat-bot-img">
                    <img src="/images/chat-bot.png" alt="chat-bot" />
                    <img src="/images/line-chart.png" alt="line-chart" />
                </div>
                <div className="chat-bot-describe">
                    <div data-aos="fade-up" className="describe-item">
                        <div className="title-flex">
                            <img src="/images/eat-icon.svg" alt="eat-icon" />
                            <h3 className="chat-bot-title">A single source of truth</h3>
                        </div>
                        <p>When you add work to your Slate calendar we automatically calculate useful insights</p>
                    </div>
                    <div data-aos="fade-up" className="describe-item">
                        <div className="title-flex">
                            <img src="/images/alien-icon.svg" alt="alien-icon" />
                            <h3 className="chat-bot-title">Intuitive interface</h3>
                        </div>
                        <p>When you add work to your Slate calendar we automatically calculate useful insights</p>
                    </div>
                    <div data-aos="fade-up" className="describe-item">
                        <div className="title-flex">
                            <img src="/images/infinity-icon.svg" alt="infinity-icon" />
                            <h3 className="chat-bot-title">Or with rules</h3>
                        </div>
                        <p>When you add work to your Slate calendar we automatically calculate useful insights</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
