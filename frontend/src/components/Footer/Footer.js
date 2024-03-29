import "./Footer.css"
import logo5 from '../images/Odyssey.png'

const Footer = ()=>(
    <div className="footer">
        <div className="footer-content-container">
        <div className="logo-container">
            <img src={logo5} alt="logo" className="logo" />
        </div>
        <div className="links-container">
            <p>Stay Connected</p>
            <p>Education</p>
            <p>Community</p>
            <p>About Us</p>
        </div>
        <div className="policy-container">
            <p>Privacy Policy</p>
            <p>Terms & Agreements</p>
        </div>

        </div>
        <div className="mail-container">
            <a href="mailto:contact@odyssey.com">[contact@odyssey.com].</a>
        </div>
    </div>
)

export default Footer