
import facebook from "../public/facebook_icon.jpg";
import linkedin from "../public/linked_icon.jpg";
import pinterest from "../public/pic_icon.jpg";
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