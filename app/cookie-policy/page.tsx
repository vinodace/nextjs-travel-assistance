import { CONTACT } from "@/app/config/contact";;


export default function CookiePolicyPage() {
    return (
        <>
            <section className="container py-5">
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                        <h2 className="wrap-hding_web50 pb-3">
                            Cookie Policy
                        </h2>

                        <p className="wrap-prgh_web50 pb-4">
                            {CONTACT.domainname} uses cookies to enhance your experience on our website. This Cookie Policy explains how we use cookies and similar technologies.
                        </p>

                        <h3 className="wrap-subhding_web50 pb-3">
                            What Are Cookies?
                        </h3>

                        <p className="wrap-prgh_web50 pb-4">
                            Cookies are small text files that are stored on your device when you visit a website. They help us understand how you use our website and improve your browsing experience.
                        </p>

                        <h3 className="wrap-subhding_web50 pb-3">
                            How We Use Cookies
                        </h3>

                        <p className="wrap-prgh_web50 pb-4">
                            We use cookies for various purposes, including:
                        </p>

                        <ul className="wrap-list_web50 pb-4">
                            <li>Functional cookies: These are necessary for the website to function properly.</li>
                            <li>Performance cookies: These help us understand how the website is performing and identify areas for improvement.</li>
                            <li>Analytics cookies: These allow us to track user behavior and improve the website.</li>
                        </ul>

                        <h3 className="wrap-subhding_web50 pb-3">
                            Managing Cookies
                        </h3>

                        <p className="wrap-prgh_web50 pb-4">
                            You can manage your cookie preferences at any time by adjusting your browser settings. However, please note that disabling certain cookies may affect your ability to use the website.
                        </p>

                    </div>
                </div>
            </section>
        </>
    )
}