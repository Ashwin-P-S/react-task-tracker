import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4><br></br>
            <p><label>Double Click on the Reminders to Turn on reminder!</label></p>
            <br></br>
            <Link to="/" id='pageLink'>&lt; Go Back</Link>
        </div>
    )
}

export default About
