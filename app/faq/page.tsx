import { CONTACT } from "@/app/config/contact";

export default function ContactUsPage() {
    return (
        <section className="pb-5">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-md-12 col-lg-8">
                    <h2 className="wrap-hding_web50 text-center pb-2">Frequently Asked Questions</h2>
                    <p className="wrap-prgh_web50 text-center pb-5">
                    Find answers to common questions about flight search, reservation assistance, tour packages, and travel support offered by {CONTACT.domainname}.
                    </p>
                </div>

                <div className="col-md-12 col-lg-10">
                    <div className="accordion accordion-flush" id="accordionFlushExample">

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne">
                            What services does {CONTACT.domainname} provide?
                        </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                We provide flight search information, reservation assistance, domestic and international tour packages, customized travel planning, and general travel support.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo">
                            Can I book flight tickets directly on this website?
                        </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            No. Our website provides a flight search tool to help you explore available flight options and travel information. Flight ticket bookings are completed through our travel assistance team over the phone.
                        </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree">
                            How does the flight search tool work?
                        </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            The flight search tool allows you to search and view available flight options, schedules, and fare-related information for your selected route and travel dates.
                        </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour">
                            How can I book a flight ticket after searching for a flight?
                        </button>
                        </h2>
                        <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            After reviewing the flight options on our website, you can contact our travel assistance team by phone. Our team will help you with the reservation process and provide booking assistance.
                        </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive">
                            Do you provide assistance with flight reservations?
                        </button>
                        </h2>
                        <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            Yes. Our travel assistance team can help you with flight reservation inquiries, booking guidance, itinerary planning, and general travel-related support.
                        </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingSix">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix">
                            Do you offer tour packages?
                        </button>
                        </h2>
                        <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            Yes. We offer domestic and international tour packages, customized travel itineraries, and holiday planning services for different travel preferences.
                        </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingSeven">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven">
                            Can you create a customized travel plan?
                        </button>
                        </h2>
                        <div id="flush-collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            Yes. We can help customize your travel itinerary based on your destination, travel dates, interests, group size, and budget.
                        </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingEight">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight">
                            How can I contact your travel assistance team?
                        </button>
                        </h2>
                        <div id="flush-collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            You can contact our travel assistance team through our <a href="contact-us.php">Contact Us</a> page or by phone for help with flight reservations, tour packages, and travel-related inquiries.
                        </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingNine">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine">
                            Do you provide both domestic and international flight reservation assistance?
                        </button>
                        </h2>
                        <div id="flush-collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            Yes. Our travel assistance team can help you with reservation assistance for both domestic and international flights based on your travel requirements.
                        </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTen">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen">
                            Can I request assistance for group travel?
                        </button>
                        </h2>
                        <div id="flush-collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            Yes. We can assist with travel arrangements for families, corporate groups, educational tours, and other group travel requirements.
                        </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingEleven">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEleven">
                            What types of tour packages do you offer?
                        </button>
                        </h2>
                        <div id="flush-collapseEleven" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            We offer a variety of tour packages, including family vacations, honeymoon trips, weekend getaways, group tours, adventure holidays, and customized travel experiences.
                        </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwelve">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwelve">
                            Can you help me choose the right tour package?
                        </button>
                        </h2>
                        <div id="flush-collapseTwelve" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            Yes. Our travel team can recommend tour packages based on your destination, travel dates, budget, and personal travel preferences.
                        </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThirteen">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThirteen">
                            Can I get assistance with itinerary planning?
                        </button>
                        </h2>
                        <div id="flush-collapseThirteen" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            Yes. We can help you plan your itinerary by suggesting suitable destinations, travel schedules, and tour options based on your travel plans.
                        </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFourteen">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFourteen">
                            What information should I have before contacting your travel team?
                        </button>
                        </h2>
                        <div id="flush-collapseFourteen" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            Having your departure city, destination, travel dates, number of travelers, and any special travel preferences will help our team assist you more efficiently.
                        </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFifteen">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFifteen">
                            Can I contact your team before making a travel decision?
                        </button>
                        </h2>
                        <div id="flush-collapseFifteen" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            Yes. You are welcome to contact our travel assistance team with questions about flight options, tour packages, destinations, or travel planning before making a reservation.
                        </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingSixteen">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSixteen">
                            How do I get started with planning my trip?
                        </button>
                        </h2>
                        <div id="flush-collapseSixteen" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            Start by searching for flights on our website or contact our travel assistance team directly. We'll help you explore travel options, discuss tour packages, and guide you through the reservation process.
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
    )
}