import "./Footer.css"

function Footer() {
    return (
        <footer>
            <div className="footer-cont">
                <div className="about">
                    <nav className="about-list">
                        <h3>Fingertipe</h3>
                        <ul>
                            <a href="/"><li>Home</li></a>
                            <a href="/"><li>Examples</li></a>
                            <a href="/"><li>Pricing</li></a>
                            <a href="/"><li>Updates</li></a>
                        </ul>
                    </nav>
                    <nav className="about-list">
                        <h3>Resources</h3>
                        <ul>
                            <a href="/"><li>Home</li></a>
                            <a href="/"><li>Examples</li></a>
                            <a href="/"><li>Pricing</li></a>
                            <a href="/"><li>Updates</li></a>
                        </ul>
                    </nav>
                    <nav className="about-list">
                        <h3>About</h3>
                        <ul>
                            <a href="/"><li>Home</li></a>
                            <a href="/"><li>Examples</li></a>
                            <a href="/"><li>Pricing</li></a>
                            <a href="/"><li>Updates</li></a>
                        </ul>
                    </nav>
                </div>
                <div className="contact">
                    <p>
                        <img src="/images/map-icon.png" alt="map-icon" />
                        7480 Mockingbird Hill undefined 
                    </p>
                    <p>
                        <img src="/images/phone-icon.png" alt="map-icon" />
                        <a href="tel: (239) 555-0108">(239) 555-0108</a>
                    </p>
                    <div className="social-icons">
                        <a href="/"><svg width="41" height="42" viewBox="0 0 41 42" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M37.145 10.2488C35.9202 10.7771 34.5873 11.1574 33.2144 11.3055C34.6398 10.4586 35.7072 9.12084 36.2164 7.54301C34.8788 8.33869 33.4136 8.89663 31.8855 9.19208C31.2469 8.50935 30.4745 7.96545 29.6165 7.59428C28.7585 7.22311 27.8332 7.03262 26.8983 7.03468C23.1159 7.03468 20.0739 10.1007 20.0739 13.8631C20.0739 14.3915 20.1379 14.9198 20.242 15.4281C14.5783 15.1319 9.52705 12.4262 6.16887 8.28349C5.55697 9.32863 5.23632 10.5186 5.24026 11.7297C5.24026 14.0993 6.44505 16.1886 8.28224 17.4174C7.19955 17.3748 6.14222 17.0772 5.19624 16.5489V16.6329C5.19624 19.9511 7.54176 22.7009 10.6678 23.3333C10.0808 23.4857 9.47704 23.5637 8.87062 23.5654C8.42633 23.5654 8.00606 23.5214 7.58178 23.4613C8.44634 26.1671 10.964 28.1324 13.9619 28.1964C11.6164 30.0336 8.67849 31.1143 5.48843 31.1143C4.91605 31.1143 4.38771 31.0943 3.83936 31.0303C6.86532 32.9715 10.4556 34.0922 14.3222 34.0922C26.8743 34.0922 33.7428 23.6935 33.7428 14.6676C33.7428 14.3714 33.7428 14.0753 33.7227 13.7791C35.0516 12.8064 36.2164 11.6016 37.145 10.2488Z" /></svg></a>
                        <a href="/"><svg width="42" height="42" viewBox="0 0 42 42" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M36.2103 4.55322H6.75117C6.04271 4.55322 5.47034 5.12559 5.47034 5.83405V35.2932C5.47034 36.0016 6.04271 36.574 6.75117 36.574H36.2103C36.9187 36.574 37.4911 36.0016 37.4911 35.2932V5.83405C37.4911 5.12559 36.9187 4.55322 36.2103 4.55322ZM32.5119 13.8993H29.9542C27.9489 13.8993 27.5607 14.8519 27.5607 16.2528V19.3388H32.3478L31.7234 24.17H27.5607V36.574H22.5694V24.174H18.3947V19.3388H22.5694V15.7765C22.5694 11.6418 25.0951 9.38836 28.7855 9.38836C30.5546 9.38836 32.0716 9.52045 32.5159 9.58048V13.8993H32.5119Z" /></svg></a>
                        <a href="/"><svg width="42" height="42" viewBox="0 0 42 42" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M36.1981 4.55322H6.73896C6.0305 4.55322 5.45813 5.12559 5.45813 5.83405V35.2932C5.45813 36.0016 6.0305 36.574 6.73896 36.574H36.1981C36.9065 36.574 37.4789 36.0016 37.4789 35.2932V5.83405C37.4789 5.12559 36.9065 4.55322 36.1981 4.55322ZM14.9563 31.8389H10.2052V16.557H14.9563V31.8389ZM12.5828 14.4677C12.0381 14.4677 11.5057 14.3061 11.0528 14.0036C10.6 13.701 10.247 13.2709 10.0386 12.7677C9.83016 12.2645 9.77562 11.7108 9.88188 11.1766C9.98813 10.6424 10.2504 10.1518 10.6355 9.76665C11.0207 9.38152 11.5113 9.11925 12.0455 9.013C12.5797 8.90674 13.1334 8.96127 13.6366 9.1697C14.1398 9.37813 14.5699 9.73109 14.8724 10.1839C15.175 10.6368 15.3365 11.1692 15.3365 11.7139C15.3325 13.2349 14.0997 14.4677 12.5828 14.4677ZM32.7438 31.8389H27.9968V24.4061C27.9968 22.633 27.9647 20.3555 25.5272 20.3555C23.0576 20.3555 22.6773 22.2847 22.6773 24.278V31.8389H17.9342V16.557H22.4892V18.6464H22.5532C23.1856 17.4456 24.7346 16.1768 27.0481 16.1768C31.8593 16.1768 32.7438 19.3428 32.7438 23.4575V31.8389Z"/></svg></a>        
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer