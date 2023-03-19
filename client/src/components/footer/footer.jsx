import ImportLogo from "../../import-logo";
import './footer.scss';

const Footer = () => {
    return(
        <div className="custom-component-footer">
            <div>
            <ImportLogo/>
            </div>
            <h2 className="font-lexend font-bold color-advanced">The New Generation in Blockchain World</h2>
            <h3 className="font-poppins font-bold color-advanced">Developed by <a href="" className="font-chakra">Ramazan Azimli</a></h3>
            <p className="font-chakra color-advanced font-bold">Copyright 2023 © <span>All Rights Reserved by <ImportLogo/></span></p>
        </div>
    )
}

export default Footer;