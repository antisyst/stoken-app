import './navbar.scss';
import { Link } from 'react-router-dom';
import ImportLogo from '../../import-logo';

const Navbar = () => {
    return(
        <div className='flex-row justify-between align-center custom-navbar-component'>
            <div>
            <Link to='/'>
                <ImportLogo className='nav-return-logo custom-cursor-pointer-element'/>
            </Link>
            </div>
            <div>
                <Link to='/transaction' className='color-black font-bold custom-navbar-router-action font-chakra'>Transaction</Link>
            </div>
        </div>
    )
}

export default Navbar;