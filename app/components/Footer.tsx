// import { CONTACT } from "../config/contact";
import { CONTACT } from "@/app/config/contact";
import Link from "next/link";
export default function Footer() {
  return (
        <>
            <footer>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-12 col-md-6">
                            <div className="row">
                                <div className="col-6 col-md-6">
                                    <h2 className="ftr-main-hding_web50">Important Links</h2>
                                    <ul className="ftr_bot_menu_web50 mb-3">
                                        <li><Link href="/">Home</Link></li>
                                        <li><Link href="/about-us">About Us</Link></li>
                                        <li><Link href="/contact-us">Contact Us</Link></li>
                                        <li><Link href="/faq">Faq</Link></li>
                                        <li><Link href="/disclaimer">Disclaimer</Link></li>
                                    </ul>
                                </div>
                                <div className="col-6 col-md-6">
                                    <h2 className="ftr-main-hding_web50">Legal Links</h2>
                                    <ul className="ftr_bot_menu_web50 mb-3">
                                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                        <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
                                        <li><Link href="/cancellation-and-refund-policy">Cancellation & Refund Policy</Link></li>
                                        <li><Link href="/cookie-policy">Cookie Policy</Link></li>
                                        <li><Link href="/gdpr-compliance">GDPR Compliance</Link></li>
                                    </ul>
                                </div>
                            </div>	
                            
                            
                        </div>
                        <div className="col-md-5">
                            <h2 className="ftr-main-hding_web50">Contact Us</h2>
                            <div className="footer-contact-bg_web50 mt-md-3">
                                <div className="ftr-contact-item_web50">
                                    <div className="ftr-contact-item-icon_web50">
                                        <i className="fa-solid fa-house"></i>
                                    </div>
                                    <div className="ftr-contact-item-txt_web50">
                                        <span className="d-block">Address</span>
                                        {CONTACT.address}
                                    </div>
                                </div>
                                <div className="ftr-contact-item_web50">
                                    <div className="ftr-contact-item-icon_web50">
                                        <i className="fa-solid fa-phone-volume"></i>
                                    </div>
                                    <div className="ftr-contact-item-txt_web50">
                                        <span className="d-block">Talk to an Agent</span>
                                        { CONTACT.phone}						
                                    </div>
                                </div>
                                <div className="ftr-contact-item_web50">
                                    <div className="ftr-contact-item-icon_web50">
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <div className="ftr-contact-item-txt_web50">
                                        <span className="d-block">Email</span>
                                        {CONTACT.email}  
                                    </div>
                                </div>
                            </div>	
                            
                        </div>
                        <div className="col-sm-12">
                            <div className="ftr-text_web50">
                                <strong>Disclaimer</strong><br />
                                {CONTACT.domainname} is an independent travel services and reservation assistance website. We provide flight search, travel planning support, air ticket reservation assistance, and domestic and international tour package services. We are not affiliated with, endorsed by, or acting on behalf of any airline, airport,travel service provider, or government agency unless expressly stated. All trademarks, logos, brand names, and service marks displayed on this website are the property of their respective owners and are used solely for identification and informational purposes. Flight schedules, fares, availability, travel policies, and other travel information are subject to change without prior notice. We encourage travelers to verify important travel details with the relevant travel providers before making travel plans or reservations.

                                <Link href="/disclaimer">
                                    Read Full DisclaimerLink..
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>	
                <div className="copyright_bg_web50">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <p className="ftr-copyright_web50 text-center">
                                    Copyright © {new Date().getFullYear()} {CONTACT.domainname} All Right Reserved
                                </p>
                            </div>

                        </div>
                    </div>
                </div>	
            </footer>
        </>
  );
}