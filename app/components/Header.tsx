import Link from "next/link";
import { CONTACT } from "@/app/config/contact";

export default function Header() {
  return (
    <header>	
        <div className="container">
            <div className="">
                <nav className="navbar navbar-expand-lg navbar-light nav-px">
                    <Link  href="/">
                        <img src="images/logo.png" alt="" className="logo" loading="lazy" />
                    </Link>
                    {/* <Link href="tel:+1-800-123-4567" className="header_tfn_web50 gap-2 d-md-flex d-lg-none align-items-center">
                        <div className="header_tfn_icon_web50">
                            <img src="images/call-gif.gif" alt="USA" />
                        </div>	
                        
                        <div>
                            <span className="header_tfn-text_web50">Call Now</span>
                            <span>+1-800-123-4567</span>
                        </div>		
                    </Link> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        
                        
                    <ul className="navbar-nav ms-auto me-lg-4">
                        <li className="nav-item">
                            <Link className="nav-link" href="/"> Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/about-us"> About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/faq"> FAQ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/contact-us"> Contact Us</Link>
                        </li>
                    </ul>
                    <Link href={`tel:${CONTACT.phone}`} className="header_tfn_web50 gap-2 d-flex align-items-center ">
                            <div className="header_tfn_icon_web50">
                                <img src="/images/call-gif.gif" alt="USA" />
                            </div>	
                            
                            <div>
                                <span className="header_tfn-text_web50">Call Now</span>
                                <span>{CONTACT.phone}</span>
                            </div>		
                    </Link>
                    
                    
                    </div>
                </nav>
            </div>
        </div>	
    </header>
  );
}