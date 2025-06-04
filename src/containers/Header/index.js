import NavMenu from '../../components/NavMenu';
import './style.css'

const Header = () => {
    return(
        <div className='Header'>
            <div className='logo'></div><div>To the moon - B2B delivery</div>
            <NavMenu/>
            <div className=''>other items</div>
        </div>
    )
}
export default Header;