import { connect } from "react-redux";
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router'
import Link from "next/link";

const Header = ({ itemsInCart, userID }) => {
    const dispatch = useDispatch();
    const router = useRouter()

    const logout = () => {
        dispatch({
            type: 'SET_LOGGED_IN',
            id: null
        })
        router.push('/')
    }

    if (userID) {
        return (
            <nav>
                <ul className="navbar">
                    <Link href="/">
                        <a><img src="/IMG/Logo/logo2.png" alt="logo" /></a>
                    </Link>
                    <li>
                        <Link href="/">
                            <a>HEM</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Products">
                            <a>PRODUKTER</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/profile">
                            <a>PROFIL</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/shopping-cart">
                            <a>KUNDVAGN {itemsInCart ? itemsInCart : ''}</a>
                        </Link>
                    </li>

                    <button onClick={logout}> LOGGA UT </button>
                </ul>
            </nav>
        )
    } else {
        return (
            <nav>
                <ul className="navbar">
                    <Link href="/">
                        <a><img src="/IMG/Logo/logo2.png" alt="logo" /></a>
                    </Link>
                    <li>
                        <Link href="/">
                            <a>HEM</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Products">
                            <a>PRODUKTER</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/login">
                            <a>MEDLEM</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/shopping-cart">
                            <a>KUNDVAGN {itemsInCart ? itemsInCart : ''}</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        itemsInCart: state.cart.itemsInCart,
        userID: state.user.userID
    }
}

export default connect(mapStateToProps)(Header);
