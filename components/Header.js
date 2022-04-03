import Link from "next/link";
/* import logo from "../public/IMG/Logo/logo.PNG" */

const Header = () => {
    return (
        <nav>
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
                        <a>Kundvagn</a>
                    </Link>
                </li>
            </ul>
            <hr />
        </nav>

    );
}

export default Header;