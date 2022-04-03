import Link from "next/link";
import { connect } from "react-redux";
/* import logo from "../public/IMG/Logo/logo.PNG" */

const Header = ({ itemsInCart, userID }) => {

    const logout = () => {
        dispatch({
          type: 'SET_LOGGED_IN',
          id: null
        })
        setLoggedIn(false);
        router.push('/')
      }

    if(userID) {
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
                        <Link href="/profile">
                            <a>Profil</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/shopping-cart">
                            <a>Kundvagn {itemsInCart ? itemsInCart : ''}</a>
                        </Link>
                    </li>
                    <button onClick={logout}> Logout </button>
               </ul>
               <hr />
            </nav>
         )} else {
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
                            <Link href="/shopping-cart">
                                <a>Kundvagn {itemsInCart ? itemsInCart : ''}</a>
                            </Link>
                        </li>
                   </ul>
                   <hr />
                </nav>
             );
         }
        }
   



const mapStateToProps = (state) => {
    return {
        itemsInCart: state.itemsInCart,
        userID: state.userID
    }
}
 
export default connect(mapStateToProps)(Header);
