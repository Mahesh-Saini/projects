import { Link } from "react-router-dom"
import "./Header.scss"


const Header = () => {
    return (
        <div className="Header">
            <div className="wrapper">
                <div className="left">
                    <Link to="/" className="link">
                        <h3>SainiShop</h3>
                    </Link>
                </div>
                <div className="right">
                    <Link className="link" to="/shop">Shop</Link>
                </div>
            </div>
        </div>
    )
}

export default Header