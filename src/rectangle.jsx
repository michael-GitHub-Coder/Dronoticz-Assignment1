import "@fontsource/inter";
import "@fontsource/inter/400.css";

function Rectangle() {

    return (

        <div className="card-box">
            <h3 className="section-header ">LARTEST ARTICLES</h3>
            <div className="rectangle-5" ></div>
            <div className="card-grid">
                <div className="section-container">
                    <div className="card">
                        <img src="./drone4.jpg" className="in-card" />
                        <div className="rectangle-in-card"></div>
                        <p className="in-card-apdding">How To automate Survaillance drone</p>
                    </div>
                </div>
                <div className="section-container">
                    <div className="card">
                        <img src="./drone3.jpg" className="in-card" />
                        <div className="rectangle-in-card"></div>
                        <p className="in-card-apdding">Robotics and Artificial Intelligence</p>
                    </div>
                </div>
                <div className="section-container">
                    <div className="card">
                        <img src="./drone1.jpg" className="in-card" />
                        <div className="rectangle-in-card"></div>
                        <p className="in-card-apdding">Improving Lives Through Robotics Prosthetics</p>
                    </div>
                </div>
                <div className="section-container">
                    <div className="card">
                        <img src="/drone2.jpg" className="in-card" />
                        <div className="rectangle-in-card"></div>
                        <p className="in-card-apdding">Power of Robotics in Agriculture</p>
                    </div>
                </div>
            </div>
           
        </div>

    );
}

export default Rectangle
