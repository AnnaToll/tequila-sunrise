import Link from "next/link";
import logo from "../public/IMG/Logo/Tech-ila.PNG"

const Header = () => {
    return ( 
        <nav>
            <img src={logo}></img>
            <ul>
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
           <Link href="/Products">
               <a><button>Logga in</button></a>
           </Link>
           </li>
           </ul>
        </nav>
     );
}
 
export default Header;