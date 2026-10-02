import { CONTACT } from "@/app/config/contact"

export default function PrivacyPolicyPage() {
    return (
        <>
            <section className="container py-5">
            <div className="row">
                <div className="col-sm-12 col-md-12">
                <h2 className="wrap-hding_web50 pb-3">
                    Privacy Policy
                </h2>

                <p className="wrap-prgh_web50 pb-4">
                        At { CONTACT.domainname}, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect information when you visit our website, use our flight search features, contact our travel team, request reservation assistance, or inquire about our travel services and tour packages.
                </p>

                <p className="wrap-prgh_web50 pb-4">
                    By using our website, you acknowledge the practices described in this Privacy Policy. If you do not agree with this policy, you should discontinue use of the website.
                </p>

                <h3 className="wrap-subhding_web50 pb-3">
                    Information We Collect
                </h3>

                <p className="wrap-prgh_web50 pb-3">
                    Depending on how you interact with our website, we may collect the following information:
                </p>

                <ul className="wrap-ullist_web50">
                    <li>Your name, email address, phone number, and other contact details when you contact us or request travel assistance.</li>

                    <li>Travel-related information you choose to provide, such as departure and destination locations, travel dates, number of travelers, and other details needed to assist with reservations or travel planning.</li>

                    <li>Technical information including your IP address, browser type, device information, operating system, and general location derived from your IP address.</li>

                    <li>Website usage information such as pages visited, search activity, referral sources, and interactions with website features.</li>
                </ul>

                <h3 className="wrap-subhding_web50 pb-3">
                    How We Use Your Information
                </h3>

                <p className="wrap-prgh_web50 pb-3">
                    We may use your information to:
                </p>

                <ul className="wrap-ullist_web50">
                    <li>Respond to your inquiries and provide customer support.</li>

                    <li>Assist with flight reservations, travel planning, and tour package requests.</li>

                    <li>Communicate with you regarding your travel inquiries or requested services.</li>

                    <li>Improve our website, travel services, and overall user experience.</li>

                    <li>Maintain website security, prevent fraud, and monitor system performance.</li>

                    <li>Analyze website traffic and visitor engagement.</li>
                </ul>

                <h3 className="wrap-subhding_web50 pb-3">
                    Third-Party Services
                </h3>

                <p className="wrap-prgh_web50 pb-4">
                    Our website may include links to third-party websites or use third-party services, including flight search providers, analytics services, advertisers, payment providers (where applicable), airlines, hotels, and other travel-related businesses. These third parties operate independently and have their own privacy policies, which we encourage you to review.
                </p>

                <p className="wrap-prgh_web50 pb-4">
                    We are not responsible for the privacy practices, content, or policies of third-party websites or services.
                </p>

                <h3 className="wrap-subhding_web50 pb-3">
                    Contact Us
                </h3>

                <p className="wrap-prgh_web50 pb-4">
                    If you have questions about this Privacy Policy or how we handle your information, please visit our <a href="contact-us.php">Contact Us</a> page. Our team will be happy to assist you.
                </p>

                <p className="wrap-prgh_web50 pb-4">
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with immediate effect unless otherwise stated.
                </p>

                </div>
            </div>
            </section>
        </>    
    )
}