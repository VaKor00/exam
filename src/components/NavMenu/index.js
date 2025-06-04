import { Link } from "react-router-dom";
import './style.css'

const NavMenu = () => {
    return(
        <div>
            <Link to='/' className="nav">Main page</Link>
            <Link to='/page1' className="nav">Page 1</Link>
            <Link to='/page3' className="nav">Page fake</Link>
        </div>
    )
}
export default NavMenu;