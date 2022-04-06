import Link from "next/link";

const Footer = () => {
    return (
        <footer>
            <div className="footerLogo">
            <Link href="/">
                    <a><img src="/IMG/Logo/logo2.png" alt="logo" /></a>
                </Link>
            </div>

            <div className="footerFlex">
                    <div className="footerBox">
                        <h2>Tech-iLa</h2>
                            <p>Isafjordsgatan 32</p>
                            <p>164 40 KISTA</p>
                    </div>

                    <div className="footerBox">
                        <h2>Kontakta oss</h2>
                            <p>Telefon: +46 (0) 736-34 59 10</p>
                            <p>E-mail: Tomas@Tech-iLa.se</p>
                    </div>

                    
                    <div className="footerBox">
                        <h2>Sociala medier</h2>
                        <Link href="http://facebook.com">
                    <a target="_blank"><img src="IMG/Socials/facebook.png" target="_blank" alt="facebook logo" /></a>
                </Link>
                <Link href="http://instagram.com">
                    <a target="_blank"><img src="IMG/Socials/instagram.png" alt="instagram logo" /></a>
                </Link>
                    </div>
            </div>


         
        </footer>

    );
}

export default Footer;