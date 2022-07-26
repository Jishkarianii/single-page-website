import "./Testimonials.css"
import UserItem from "./UserItem"

function Testimonials() {
    return (
        <section data-aos="fade-up" className="testimonials">
            <h2 className="title">Testimonials</h2>
            <div className="testimonials-users">
                <div className="users-cont">
                    <UserItem 
                        aos="fade-up"
                        img="/images/user-1.png"
                        name="Claire Bell"
                        profession="Designer"
                        text="Slate helps you see how many more days 
                        you need to work to reach your financial 
                        goal for the month and year. Slate helps 
                        you see how many more days 
                        you need to work to reach your financial 
                        goal for the month and year.your financial 
                        goal for the month and year."
                    />
                    <UserItem 
                        aos="fade-up"
                        img="/images/user-3.png"
                        name="Ralph Fisher"
                        profession="Designer"
                        text="Slate helps you see how many more days 
                        you need to work to reach your financial 
                        goal for the month and year. Slate helps 
                        you see how many more days 
                        you need to work to reach your financial 
                        goal for the month and year."
                    />
                </div>
                <div className="users-cont">
                    <UserItem 
                        aos="fade-up"
                        img="/images/user-2.png"
                        name="Francisco Lane"
                        profession="Designer"
                        text="Slate helps you see how many more days 
                        you need to work to reach your financial 
                        goal for the month and year. Slate helps 
                        you see how many more days 
                        you need to work to reach your financial 
                        goal for the month and year."
                    />
                    <UserItem 
                        aos="fade-up"
                        img="/images/user-4.png"
                        name="Jorge Murphy"
                        profession="Designer"
                        text="Slate helps you see how many more days 
                        you need to work to reach your financial 
                        goal for the month and year. Slate helps 
                        you see how many more days 
                        you need to work to reach your financial 
                        goal for the month and year."
                    />
                </div>
            </div>
        </section>
    )
}

export default Testimonials
