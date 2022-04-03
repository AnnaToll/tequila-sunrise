import Link from "next/link";

const Header = () => {
    return (
        <nav>
            <img src="IMG/Logo/logo.png"/>
            <ul className="navbar">
                <li>
                    <Link href="/">
                        <a>Hem</a>
                    </Link>
                </li>
                <li>
                
                    <Link href="/Products">
                        <a>Produkter</a>
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