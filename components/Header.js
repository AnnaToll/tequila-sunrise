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

    return (
        <nav>
            <ul className="navbar">
                <Link href="/">
                    <a><img src="/IMG/Logo/logo.png" alt="logo" /></a>
                </Link>

                <li>
                    <Link href="/">
                        <a>HEM</a>
                    </Link>
                </li>

                <li>
                    <Link href="/Products">
                        <a>MEDLEMMAR</a>
                    </Link>
                </li>

                <li>
                    {userID ?
                        <Link href="/profile">
                            <a>PROFIL</a>
                        </Link>
                        :
                        <Link href="/login">
                            <a>LOGGA IN</a>
                        </Link>
                    }
                </li>


                {userID ?
                    <button onClick={logout} className="button-small" > LOGGA UT </button>
                    :
                    ""
                }
            </ul>
        </nav>
    )
}


const mapStateToProps = (state) => {
    return {
        itemsInCart: state.cart.itemsInCart,
        userID: state.user.userID
    }
}

export default connect(mapStateToProps)(Header);
