import "@fontsource/inter";
import "@fontsource/inter/400.css";

function Rectangle() {

    return (

        <div className="rectangle2">
            <h3 className="section-header ">LARTEST ARTICLES</h3>
            <div className="rectangle"></div>
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
                        <p className="in-card-apdding">Robotics and Artificaila Intellingence</p>
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
            <div className="card2-grid">
                <img src="/drone5.jpg" className="drone5" />
                <div className="card2">
                    <h3>ABOUT US</h3>
                    <div className="rectangle-card2"></div>
                    <div className="card2-container">
                        <p className="p-in-card">Welcome to our dronoticz, where innovation and technology converge to shape the
                            future.
                            We revolutionize industries and improve lives worldwide through our passion for pushing the
                            boundaries
                            of what robots can do.
                            With expertise in AI, computer vision, mechanical engineering, and automation, we lead the way
                            in the
                            robotics revolution.
                            Our brilliant team creates intelligent machines that seamlessly integrate into daily life,
                            enhancing
                            productivity, safety, and efficiency.
                            Join us on this exciting journey as we unlock new frontiers, solve complex challenges, and shape
                            a
                            future where intelligent machines work hand-in-hand with humans.
                            Discover the power of robotics and be part of the revolution.</p>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <h4>SUBSCRIBE</h4>
                <p className="p1">Sign-up to our newsletter</p>
                <input type="text" placeholder="Your email" />
                <br />
                <button type="submit"><a href="#">SUBMIT</a></button>
            </div>
        </div>

    );
}

export default Rectangle