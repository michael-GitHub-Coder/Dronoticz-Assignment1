import "@fontsource/inter";
import "@fontsource/inter/400.css";
import drone4 from "../public/drone4.jpg";
import drone3 from "../public/drone3.jpg";
import drone1 from "../public/drone1.jpg";
import drone2 from "../public/drone2.jpg";

function Rectangle() {

    return (

        <div className="card-box">
            <h3 className="section-header ">LATEST ARTICLES</h3>
            <div className="rectangle-5" ></div>
            <div className="card-grid">
                <div className="section-container">
                    <div className="card">
                        <img src={drone4} className="in-card" />
                        <div className="rectangle-in-card"></div>
                        <p className="in-card-apdding">How To automate Survaillance drone</p>
                    </div>
                </div>
                <div className="section-container">
                    <div className="card">
                        <img src={drone3} className="in-card" />
                        <div className="rectangle-in-card"></div>
                        <p className="in-card-apdding">Robotics and Artificial Intelligence</p>
                    </div>
                </div>
                <div className="section-container">
                    <div className="card">
                        <img src={drone1} className="in-card" />
                        <div className="rectangle-in-card"></div>
                        <p className="in-card-apdding">Improving Lives Through Robotics Prosthetics</p>
                    </div>
                </div>
                <div className="section-container">
                    <div className="card">
                        <img src={drone2} className="in-card" />
                        <div className="rectangle-in-card"></div>
                        <p className="in-card-apdding">Power of Robotics in Agriculture</p>
                    </div>
                </div>
            </div>
           
        </div>

    );
}

export default Rectangle
