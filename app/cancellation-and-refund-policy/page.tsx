import { CONTACT } from "@/app/config/contact";

export default function CancellationAndRefundPolicyPage() {
    return (
        <>
            <section className="container py-5">
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                    
                        <h2 className="wrap-hding_web50 pb-3">
                            Cancellation & Refund Policy
                        </h2>

                        <p className="wrap-prgh_web50 pb-4">
                            At {CONTACT.domainname}, we provide flight search, air ticket reservation assistance, domestic and international tour packages, and travel planning services. This Cancellation & Refund Policy explains how cancellation and refund requests are handled for the travel services we assist with.
                        </p>

                        <p className="wrap-prgh_web50 pb-4">
                            Cancellation requests and refund eligibility are subject to the terms and conditions of the applicable airline, tour operator, or other travel provider. Policies may vary depending on the fare type, travel service, booking conditions, and supplier requirements.
                        </p>

                        <h3 className="wrap-subhding_web50 pb-3">
                            Reservation Assistance
                        </h3>

                        <p className="wrap-prgh_web50 pb-4">
                            Our website includes a flight search tool that allows visitors to explore available travel options. Ticket reservations are assisted by our travel team and are not completed directly through the website. If you need to cancel or modify a reservation that we assisted with, please contact our travel team as soon as possible.
                        </p>

                        <h3 className="wrap-subhding_web50 pb-3">
                            Cancellation Requests
                        </h3>

                        <p className="wrap-prgh_web50 pb-4">
                            Cancellation requests are processed in accordance with the applicable airline or travel provider's policies. Cancellation charges, service fees, and eligibility for refunds or travel credits may apply depending on the booking conditions.
                        </p>

                        <h3 className="wrap-subhding_web50 pb-3">
                            Refund Policy
                        </h3>

                        <p className="wrap-prgh_web50 pb-4">
                            Refund approval, refund amount, and processing time are determined by the applicable airline, tour operator, or other travel provider. Where applicable, our travel team will assist in submitting refund requests and provide updates based on the information received from the travel provider.
                        </p>

                        <h3 className="wrap-subhding_web50 pb-3">
                            Changes to Travel Plans
                        </h3>

                        <p className="wrap-prgh_web50 pb-4">
                            Requests to change travel dates, passenger details, destinations, or other reservation information are subject to the policies and availability of the applicable travel provider. Additional charges or fare differences may apply.
                        </p>

                        <h3 className="wrap-subhding_web50 pb-3">
                            Independent Travel Services
                        </h3>

                        <p className="wrap-prgh_web50 pb-4">
                            {CONTACT.domainname} operates as an independent travel services provider. Unless expressly stated otherwise, we are not affiliated with, endorsed by, or acting on behalf of any airline, airport, tour operator, or government agency. All trademarks, logos, and brand names remain the property of their respective owners and are used solely for identification purposes.
                        </p>

                        <h3 className="wrap-subhding_web50 pb-3">
                            Contact Us
                        </h3>

                        <p className="wrap-prgh_web50 pb-4">
                            If you need assistance with a cancellation, refund request, or reservation change, please contact our travel team through our <a href="/contact-us">Contact Us</a> page or by using the contact information provided on our website. We will make reasonable efforts to assist you throughout the process.
                        </p>

                        <p className="wrap-prgh_web50 small">
                            <em>
                                We recommend reviewing the applicable fare rules and travel provider policies before confirming any reservation, as cancellation terms and refund eligibility may vary by provider and booking type.
                            </em>
                        </p>


                    </div>
                </div>
            </section>
        </> 
    )
}