
import facebook from "../public/facebook-original.svg";
import linkedin from "../public/linkedin-original.svg";
import pinterest from "../public/pinterest.svg";
function Footer() {

    return (
        <div className="footer">
            <div className="container">
                <div className="column left">
                    <p><a href="#" type="p"><img src={facebook} /></a></p>
                    <p><a href="#" type="p"><img src={linkedin} /></a></p>
                    <p><a href="#" type="p"><img src={pinterest} /></a></p>
                </div>
                <div className="column right">
                    <p>ABOUT US</p>
                    <p>ARTICLES</p>
                    <p><button><a href="#">SUBSCRIBE</a></button></p>
                </div>
            </div>
        </div>
    );
}

export default Footer