import { CONTACT } from "@/app/config/contact";
export default function TermsAndConditionsPage() { 
    return (
        <>
            <section className="container py-5">
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                    <h2 className="wrap-hding_web50 pb-3">
                        Terms & Conditions
                    </h2>

                    <p className="wrap-prgh_web50 pb-4">
                        Welcome to {CONTACT.domainname}. These Terms & Conditions govern your access to and use of our website and travel-related services. By accessing or using this website, you agree to comply with these Terms & Conditions. If you do not agree with any part of these terms, please discontinue using the website.
                    </p>

                    <h3 className="wrap-subhding_web50 pb-3">
                        About Our Website
                    </h3>

                    <p className="wrap-prgh_web50 pb-4">
                        {CONTACT.domainname} is an independent travel services website offering flight search, air ticket reservation assistance, domestic and international tour packages, customized travel planning, and general travel support. Our website is designed to help travelers explore travel options and connect with our travel team for reservation assistance.
                    </p>

                    <p className="wrap-prgh_web50 pb-4">
                        Unless expressly stated, we are not affiliated with, endorsed by, or acting on behalf of any airline, airport, hotel, travel provider, or government agency. References to third-party companies, trademarks, logos, and brand names are used solely for identification purposes.
                    </p>

                    <h3 className="wrap-subhding_web50 pb-3">
                        Information Accuracy
                    </h3>

                    <p className="wrap-prgh_web50 pb-4">
                        We make reasonable efforts to keep the information on our website current and accurate. However, flight schedules, fares, availability, baggage policies, travel requirements, hotel availability, and tour package details may change without prior notice. We cannot guarantee that all information will always be complete, accurate, or up to date.
                    </p>

                    <p className="wrap-prgh_web50 pb-4">
                        We recommend confirming important travel details with our travel team or the relevant travel provider before making reservations or finalizing travel plans.
                    </p>

                    <h3 className="wrap-subhding_web50 pb-3">
                        Reservation Assistance
                    </h3>

                    <p className="wrap-prgh_web50 pb-4">
                        Our website includes a flight search feature to help users explore available travel options. Ticket reservations are not completed directly through the website. If you wish to make a reservation, our travel team can assist you by phone with the booking process and answer travel-related questions.
                    </p>

                    <h3 className="wrap-subhding_web50 pb-3">
                        Third-Party Content
                    </h3>

                    <p className="wrap-prgh_web50 pb-4">
                        Our website may contain references or links to airlines, hotels, travel providers, advertisers, and other third-party websites. Such references do not imply endorsement, sponsorship, partnership, or affiliation unless expressly stated.
                    </p>

                    <p className="wrap-prgh_web50 pb-4">
                        All trademarks, logos, service marks, and brand names displayed on this website remain the property of their respective owners and are used solely for identification purposes.
                    </p>

                    <h3 className="wrap-subhding_web50 pb-3">
                        Limitation of Liability
                    </h3>

                    <p className="wrap-prgh_web50 pb-4">
                        To the fullest extent permitted by applicable law, {CONTACT.domainname} shall not be liable for any losses, delays, cancellations, schedule changes, pricing changes, or other issues arising from services provided by airlines, hotels, tour operators, or other third-party travel providers.
                    </p>

                    <p className="wrap-prgh_web50 pb-4">
                        Travelers are responsible for reviewing their travel plans, confirming reservation details, and ensuring that all required travel documents and information are accurate before travel.
                    </p>
                    </div>
                </div>
                </section>
        </>
    )
}
