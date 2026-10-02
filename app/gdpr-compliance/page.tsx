import { CONTACT} from "@/app/config/contact";

export default function GDPRCompliancePage() { 
    return (
        <>
            <section className="container py-5">
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                    <h2 className="wrap-hding_web50">
                        GDPR Compliance & Data Privacy
                    </h2>

                    <p className="wrap-prgh_web50 pt-2 pb-3">
                        At {CONTACT.domainname}, we are committed to protecting your personal information and respecting your privacy. This page explains how we collect, use, store, and safeguard personal data when you visit our website, search for flights, request reservation assistance, inquire about tour packages, or communicate with our travel team.
                    </p>

                    <p className="wrap-prgh_web50 pb-3">
                        We process personal information responsibly and, where applicable, in accordance with the General Data Protection Regulation (GDPR) and other applicable data protection laws. We are committed to maintaining transparency and giving you control over your personal information.
                    </p>

                    <h3 className="wrap-subhding_web50">
                        Personal Information We Collect
                    </h3>

                    <p className="wrap-prgh_web50 pt-2 pb-3">
                        Depending on how you use our website, we may collect:
                    </p>

                    <ul className="wrap-ullist_web50">
                        <li>Your name, email address, phone number, and other contact information when you contact us or request travel assistance.</li>

                        <li>Travel-related details you voluntarily provide, such as departure and destination locations, travel dates, number of travelers, and tour package preferences.</li>

                        <li>Technical information including your IP address, browser type, operating system, device information, and approximate location.</li>

                        <li>Website usage information such as pages visited, search activity, session duration, and interactions with website features.</li>
                    </ul>

                    <h3 className="wrap-subhding_web50">
                        How We Use Your Information
                    </h3>

                    <p className="wrap-prgh_web50 pt-2 pb-3">
                        We may use your information to:
                    </p>

                    <ul className="wrap-ullist_web50">
                        <li>Respond to travel inquiries and customer support requests.</li>

                        <li>Assist with flight reservations, travel planning, and tour package inquiries.</li>

                        <li>Communicate regarding requested travel services.</li>

                        <li>Improve website functionality, performance, and user experience.</li>

                        <li>Maintain website security and prevent fraudulent or unauthorized activities.</li>

                        <li>Analyze website traffic and improve our services.</li>
                    </ul>

                    <h3 className="wrap-subhding_web50">
                        Cookies & Similar Technologies
                    </h3>

                    <p className="wrap-prgh_web50 pt-2 pb-3">
                        We use cookies and similar technologies to improve website functionality, remember your preferences, analyze website performance, and enhance your browsing experience. Additional information about our use of cookies is available in our <a href="cookie-policy.php">Cookie Policy</a>.
                    </p>

                    <h3 className="wrap-subhding_web50">
                        Third-Party Services
                    </h3>

                    <p className="wrap-prgh_web50 pt-2 pb-3">
                        We may use trusted third-party providers for services such as website hosting, analytics, flight search technology, advertising, communication tools, payment processing (where applicable), and website security. These providers process information only as necessary to provide their respective services and are subject to their own privacy policies.
                    </p>

                    <h3 className="wrap-subhding_web50">
                        Data Security
                    </h3>

                    <p className="wrap-prgh_web50 pt-2 pb-3">
                        We implement reasonable administrative, technical, and organizational safeguards designed to protect personal information against unauthorized access, disclosure, alteration, or misuse. While we strive to maintain appropriate security measures, no method of electronic transmission or storage is completely secure.
                    </p>

                    <h3 className="wrap-subhding_web50">
                        Your GDPR Rights
                    </h3>

                    <p className="wrap-prgh_web50 pt-2 pb-3">
                        Where GDPR applies, you may have the right to request access to your personal information, request correction of inaccurate data, request deletion of your information, restrict or object to certain processing activities, request data portability, and withdraw consent where processing is based on consent.
                    </p>

                    <p className="wrap-prgh_web50 pb-3">
                        If you wish to exercise any of these rights, please contact us using the information provided on our <a href="contact-us.php">Contact Us</a> page. We will respond in accordance with applicable data protection laws.
                    </p>

                    <h3 className="wrap-subhding_web50">
                        Data Retention
                    </h3>

                    <p className="wrap-prgh_web50 pt-2 pb-3">
                        We retain personal information only for as long as necessary to provide our services, respond to inquiries, comply with legal obligations, resolve disputes, and enforce our agreements.
                    </p>

                    <h3 className="wrap-subhding_web50">
                        Updates to This Page
                    </h3>

                    <p className="wrap-prgh_web50 pt-2 pb-3">
                        We may revise this GDPR Compliance & Data Privacy page from time to time to reflect changes in our services, legal requirements, or data handling practices. Any updates will be posted on this page and become effective upon publication.
                    </p>

                    <h3 className="wrap-subhding_web50">
                        Contact Us
                    </h3>

                    <p className="wrap-prgh_web50 pt-2 pb-3">
                        If you have questions regarding this page, your personal information, or our privacy practices, please visit our <a href="contact-us.php">Contact Us</a> page. Our team will be happy to assist you.
                    </p>

                    <p className="wrap-prgh_web50 small">
                        <em>
                            {CONTACT.domainname} is committed to handling personal information responsibly, protecting visitor privacy, and maintaining transparent data processing practices.
                        </em>
                    </p>

                    </div>
                </div>
                </section>
        </>
    )
}