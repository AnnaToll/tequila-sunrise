import Link from "next/link";
import { connect } from "react-redux";
/* import logo from "../public/IMG/Logo/logo.PNG" */

const Header = ({ itemsInCart }) => {
    return ( 
        <nav>
            {/* <img src={logo}/> */}
            <ul className="navbar">
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/Products">
                        <a>Products</a>
                    </Link>
                </li>
                <li>
                    <Link href="/login">
                        <a>Logga in</a>
                    </Link>
                </li>
                <li>
                    <Link href="/profile">
                        <a>Profil</a>
                    </Link>
                </li>
                <li>
                    <Link href="/shopping-cart">
                        <a>Kundvagn {itemsInCart ? itemsInCart : ''}</a>
                    </Link>
                </li>
           </ul>
           <hr />
        </nav>
        
     );

}

const mapStateToProps = (state) => {
    return {
        itemsInCart: state.itemsInCart
    }
}
 
export default connect(mapStateToProps)(Header);