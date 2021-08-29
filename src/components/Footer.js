import { Link } from 'react-router-dom';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright &copy; {year}</p><br></br>
            <Link to='/about' id='pageLink'>&lt;About&gt;</Link>
        </footer>
    )
}

export default Footer
