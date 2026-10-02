import { CONTACT } from "@/app/config/contact";

export default function Disclaimer() { 
    return (
        <>
            <section className="container py-md-5 pt-5">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <h2 className="wrap-hding_web50 pb-4">
                            Travel Services Disclaimer
                        </h2>

                        <p className="wrap-prgh_web50 pb-4">
                            Welcome to {CONTACT.domainname}. We are an independent travel services website offering flight search, air ticket reservation assistance, domestic and international tour packages, and customized travel planning. Our goal is to help travelers explore suitable travel options and receive personalized assistance throughout their journey.
                        </p>

                        <p className="wrap-prgh_web50 pb-4">
                            The information and services available on this website are provided for general informational purposes. While we make reasonable efforts to keep travel information current and accurate, flight schedules, fares, availability, travel requirements, and tour package details may change without prior notice. We encourage travelers to verify important information before making travel decisions.
                        </p>

                        <p className="wrap-prgh_web50 pb-4">
                            {CONTACT.domainname} operates independently and is not affiliated with, endorsed by, or acting on behalf of any airline, airport, travel provider, or government agency unless expressly stated. References to third-party brands, trademarks, airline names, or logos are used solely for identification purposes and remain the property of their respective owners.
                        </p>


                        <h3 className="wrap-subhding_web50 pb-3">
                            Independent Travel Services
                        </h3>

                        <p className="wrap-prgh_web50 pb-4">
                            We operate as an independent travel services provider and are not affiliated with, endorsed by, or officially connected to any airline, airport, travel provider, or government agency unless expressly stated. References to third-party organizations are provided only where relevant to the travel services we offer.
                        </p>


                        <h3 className="wrap-subhding_web50 pb-3">
                            User Responsibility
                        </h3>

                        <p className="wrap-prgh_web50 pb-4">
                            Travelers are responsible for reviewing their travel plans and ensuring that all reservation details, passenger information, travel documents, visa requirements, and other applicable requirements are correct before travel.
                        </p>

                        <p className="wrap-prgh_web50 pb-4">
                            If you require assistance with your travel plans, our travel team is available to answer questions and provide reservation support based on your travel requirements.
                        </p>

                        <h3 className="wrap-subhding_web50 pb-3">
                            User Acknowledgment of Risk
                        </h3>

                        <p className="wrap-prgh_web50 pb-4">
                            While we strive to provide professional travel assistance and accurate information, {CONTACT.domainname} shall not be responsible for losses, delays, schedule changes, cancellations, or other issues resulting from actions taken by airlines, hotels, tour operators, or other third-party travel providers.
                        </p>

                    </div>
                </div>
            </section>
        </>
    )
}