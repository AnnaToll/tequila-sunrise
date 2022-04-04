import Link from "next/link";

const Header = () => {
    return (
        <nav>
            <ul className="navbar">
                <Link href="/">
                    <a><img src="IMG/Logo/logo2.png" alt="logo" /></a>
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
                        <a>KUNDVAGN</a>
                    </Link>
                </li>
            </ul>
        </nav>

    );
}

export default Header;