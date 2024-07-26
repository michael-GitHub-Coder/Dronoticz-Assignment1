import close from "../public/close.svg";
import open from "../public/open.svg";

function Header() {

    const closebtn = () => {
        alert("closed ");
    };

    const openbtn = () =>{
        alert("opend ");
    };

    return (
        <div className="header-background">
            <nav>
                <h1>D<span>Z</span></h1>
                <ul>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">ARTICLES</a></li>
                </ul>
                <button type="button">Subscribe</button>
            </nav>

            <h2 class="Hero-header">DRONOTICZ</h2>
            <h3 class="Hero-subheader">THE ERA OF DRONES</h3>
            <div class="rectangle"></div>
        </div>
    );
}

export default Header