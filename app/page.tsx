import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/app/config/contact";


export default function Home() {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide carousel-banner">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image src="/images/home-banner.webp" loading="eager" className="d-block w-100" alt="Banner-1" fill  />
            <div className="carousel-caption d-md-block">
              <div className="container">
                <div className="row">
                  <div className="col-md-8">
                    <div className="carousel-textarea">
                      <h5 className="banner-hding_web50 text-white">Explore the World, Your Way</h5>
                      <p className="banner-subhding_web50"> Discover domestic and international tour packages, exciting destinations, and travel planning assistance to help make every journey memorable.</p>
                    </div>  
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <Image src="/images/banner-2.jpg" className="d-block w-100" alt="Banner-2" fill  />
            <div className="carousel-caption d-md-block">
              <div className="container">
                <div className="row">
                  <div className="col-md-8">
                    <div className="carousel-textarea">
                      <h5 className="banner-hding_web50 text-white">Search Flights & Plan Your Perfect Trip</h5>
                      <p className="banner-subhding_web50">Explore domestic and international destinations with helpful travel resources  </p>
                    </div>  
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <Image src="/images/banner-3.jpg" loading="eager" className="d-block w-100" alt="Banner-3" fill />
            <div className="carousel-caption d-md-block">
              <div className="container">
                <div className="row">
                  <div className="col-md-8">
                    <div className="carousel-textarea">
                      <h5 className="banner-hding_web50 text-white">Plan Your Next Adventure</h5>
                      <p className="banner-subhding_web50">Search flights, explore tour packages, and connect with our travel specialists for personalized travel planning and reservation assistance.</p>
                    </div>  
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="offer-card_web50 offer-card-bg1 mb-3 mb-md-0">
                <div className="row align-items-center">
                  <div className="col-md-auto">
                    <img src="/images/domestic-tour.png" alt="" className="offer-card-iconimg_web50" />
                  </div>
                  <div className="col">
                    <h3 className="offer-card-hding_web50">Domestic Tour Packages</h3>
                    <p className="offer-card-prgh_web50">
                      Explore Your Favorite Destinations
                    </p>
                  </div>
                  <div className="col-sm-12">
                    <Link href="/contact-us" className="offer-card-btn_web50">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="offer-card_web50 offer-card-bg2 mb-3 mb-md-0">
                <div className="row align-items-center">
                  <div className="col-md-auto">
                    <img src="/images/world-tour.png" alt="" className="offer-card-iconimg_web50" />
                  </div>
                  <div className="col">
                    <h3 className="offer-card-hding_web50">International Tour Holidays</h3>
                    <p className="offer-card-prgh_web50">
                      Travel Beyond Borders
                    </p>
                  </div>
                  <div className="col-sm-12">
                    <Link href="/contact-us" className="offer-card-btn_web50">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="offer-card_web50 offer-card-bg3 mb-3 mb-md-0">
                <div className="row align-items-center">
                  <div className="col-md-auto">
                    <img src="/images/custom-tour.png" alt="" className="offer-card-iconimg_web50" />
                  </div>
                  <div className="col">
                    <h3 className="offer-card-hding_web50">Customized Travel Plans</h3>
                    <p className="offer-card-prgh_web50">
                      Trips Designed Around You
                    </p>
                  </div>
                  <div className="col-sm-12">
                    <Link href="/contact-us" className="offer-card-btn_web50">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-0 pb-4">
        <div className="container">
          <div className="row align-items-center">
            
            <div className="col-md-12 col-lg-12">
              <h2 className="wrap-hding_web50 pb-3 pt-4">About Us </h2>
              
              <p className="wrap-prgh_web50 pb-3">
                <strong>{CONTACT.domainname}</strong> is your trusted travel partner, offering a complete range of travel services through a modern and user-friendly platform. We provide air ticket reservations, domestic and international tour packages, and customized travel solutions to help make every journey smooth and enjoyable.
                <br /><br />
                Our platform is designed to support both individual travelers and travel businesses with reliable travel management solutions. Built using modern technology and an intuitive design, we focus on delivering a fast, seamless, and convenient experience for planning and managing your travel needs.
              </p>


              <Link href="/about-us" className="1wrap-btn_web50 wrap-prgh_web50">
                Learn More About Us
                <span className="ps-2"><i className="fa-solid fa-arrow-right-long"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="service_area_web50">
                <div>
                  <div className="service-icon_web50"><i className="fa-solid fa-person-walking-luggage"></i></div>
                  <h3>Discover Tour Packages</h3>
                  <p>
                    Explore thoughtfully planned tour packages featuring popular destinations, comfortable stays, and memorable travel experiences for every type of traveler.
                  </p>
                </div>  
              </div>
            </div>

            <div className="col-md-4">
              <div className="row g-0">
                <div className="service_area_web50 col-12">
                  <div>
                    <div className="service-icon_web50"><i className="fa-solid fa-torii-gate"></i></div>
                    <h3>Personalized Travel Planning</h3>
                    <p>
                      Discover travel options tailored to your interests, whether you're planning a family vacation, honeymoon, weekend getaway, or group adventure.
                    </p>
                  </div> 
                </div>
              </div>  
            </div>

            <div className="col-md-4">
              <div className="service_area_web50">
                <div>
                  <div className="service-icon_web50"><i className="fa-solid fa-earth-asia"></i></div>
                  <h3>Explore Incredible Destinations</h3>
                  <p>
                    From scenic beaches and mountain escapes to cultural landmarks and city breaks, find inspiring destinations for your next unforgettable journey.
                  </p>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why_choose_web50 py-5">
        <div className="container">

            <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
              <h2 className="wrap-hding_web50">Why Choose {CONTACT.domainname}?</h2>
                    <p className="wrap-prgh_web50 pt-2 pb-5">
                        We make travel planning simple by combining flight search, reservation assistance, customized tour packages, and dedicated travel support—all in one convenient platform.
                    </p>
                </div>
            </div>

            <div className="row g-4">

                <div className="col-md-6 col-lg-4">
                    <div className="why-card_web50">
                        <div className="why-icon_web50">
                            <i className="fa-solid fa-plane-departure"></i>
                        </div>

                        <h4>Flight Search</h4>

                        <p>
                            Search available flight options for domestic and international destinations to help plan your journey.
                        </p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                    <div className="why-card_web50">
                        <div className="why-icon_web50">
                            <i className="fa-solid fa-headset"></i>
                        </div>

                        <h4>Reservation Assistance</h4>

                        <p>
                            Our travel specialists are available to assist with flight reservations, itinerary planning, and travel-related questions.
                        </p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                    <div className="why-card_web50">
                        <div className="why-icon_web50">
                            <i className="fa-solid fa-earth-americas"></i>
                        </div>

                        <h4>Domestic & International Tours</h4>

                        <p>
                            Explore holiday packages and travel experiences designed for families, couples, solo travelers, and groups.
                        </p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                    <div className="why-card_web50">
                        <div className="why-icon_web50">
                            <i className="fa-solid fa-map-location-dot"></i>
                        </div>

                        <h4>Customized Travel Planning</h4>

                        <p>
                            Receive personalized travel recommendations based on your destination, schedule, budget, and preferences.
                        </p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                    <div className="why-card_web50">
                        <div className="why-icon_web50">
                            <i className="fa-solid fa-shield-halved"></i>
                        </div>

                        <h4>Reliable Travel Support</h4>

                        <p>
                            Our team is committed to providing helpful travel guidance before, during, and after your reservation process.
                        </p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                    <div className="why-card_web50">
                        <div className="why-icon_web50">
                            <i className="fa-solid fa-clock"></i>
                        </div>

                        <h4>Easy Planning Experience</h4>

                        <p>
                            From searching flights to planning vacations, we strive to make every step of your travel journey straightforward.
                        </p>
                    </div>
                </div>

            </div>

        </div>
      </section>
      
      <section className="popular_destination_web50 py-5">
        <div className="container">

            <div className="text-center mb-5">
                <h2 className="wrap-hding_web50">Popular Destinations</h2>
                <p className="wrap-prgh_web50">
                    Explore some of the most popular domestic and international destinations for your next vacation, business trip, or weekend getaway.
                </p>
            </div>

            <div className="row g-4">

                <div className="col-md-6 col-lg-3">
                    <div className="destination-card_web50">
                        <div className="destination-image_web50">
                            <img src="/images/destinations/new-york.jpg" alt="New York" />
                            <span className="destination-tag_web50">USA</span>
                        </div>

                        <div className="destination-content_web50">
                            <h4>New York</h4>
                            <p>Experience world-famous landmarks, shopping, entertainment, and unforgettable city life.</p>

                            <Link href="/contact-us" className="destination-btn_web50">
                                Explore Now
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3">
                    <div className="destination-card_web50">
                        <div className="destination-image_web50">
                            <img src="/images/destinations/paris.jpg" alt="Paris" />
                            <span className="destination-tag_web50">France</span>
                        </div>

                        <div className="destination-content_web50">
                            <h4>Paris</h4>
                            <p>Discover iconic attractions, romantic streets, museums, and rich cultural experiences.</p>

                            <Link href="/contact-us" className="destination-btn_web50">
                                Explore Now
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3">
                    <div className="destination-card_web50">
                        <div className="destination-image_web50">
                            <img src="/images/destinations/dubai.jpg" alt="Dubai" />
                            <span className="destination-tag_web50">UAE</span>
                        </div>

                        <div className="destination-content_web50">
                            <h4>Dubai</h4>
                            <p>Enjoy luxury shopping, modern architecture, desert adventures, and family attractions.</p>

                            <Link href="/contact-us" className="destination-btn_web50">
                                Explore Now
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3">
                    <div className="destination-card_web50">
                        <div className="destination-image_web50">
                            <img src="/images/destinations/bali.jpg" alt="Bali" />
                            <span className="destination-tag_web50">Indonesia</span>
                        </div>

                        <div className="destination-content_web50">
                            <h4>Bali</h4>
                            <p>Relax on beautiful beaches, explore temples, and enjoy peaceful tropical scenery. <br /></p>

                            <Link href="/contact-us" className="destination-btn_web50">
                                Explore Now
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3">
                  <div className="destination-card_web50">
                      <div className="destination-image_web50">
                          <img src="/images/destinations/london.jpg" alt="London" />
                          <span className="destination-tag_web50">United Kingdom</span>
                      </div>

                      <div className="destination-content_web50">
                          <h4>London</h4>
                          <p>Visit iconic landmarks, historic attractions, world-class museums, and vibrant neighborhoods throughout the city.</p>

                          <Link href="/contact-us" className="destination-btn_web50">
                              Explore Now
                          </Link>
                      </div>
                  </div>
              </div>

              <div className="col-md-6 col-lg-3">
                  <div className="destination-card_web50">
                      <div className="destination-image_web50">
                          <img src="/images/destinations/singapore.jpg" alt="Singapore" />
                          <span className="destination-tag_web50">Singapore</span>
                      </div>

                      <div className="destination-content_web50">
                          <h4>Singapore</h4>
                          <p>Experience modern attractions, beautiful gardens, diverse cuisine, and exciting entertainment for all travelers.</p>

                          <Link href="/contact-us" className="destination-btn_web50">
                              Explore Now
                          </Link>
                      </div>
                  </div>
              </div>

              <div className="col-md-6 col-lg-3">
                  <div className="destination-card_web50">
                      <div className="destination-image_web50">
                          <img src="/images/destinations/tokyo.jpg" alt="Tokyo" />
                          <span className="destination-tag_web50">Japan</span>
                      </div>

                      <div className="destination-content_web50">
                          <h4>Tokyo</h4>
                          <p>Discover a unique blend of traditional culture, modern attractions, shopping districts, and exceptional dining.</p>

                          <Link href="/contact-us" className="destination-btn_web50">
                              Explore Now
                          </Link>
                      </div>
                  </div>
              </div>

              <div className="col-md-6 col-lg-3">
                  <div className="destination-card_web50">
                      <div className="destination-image_web50">
                          <img src="/images/destinations/rome.jpg" alt="Rome" />
                          <span className="destination-tag_web50">Italy</span>
                      </div>

                      <div className="destination-content_web50">
                          <h4>Rome</h4>
                          <p>Explore ancient landmarks, remarkable architecture, charming streets, and authentic Italian culture and cuisine.</p>

                          <Link href="/contact-us" className="destination-btn_web50">
                              Explore Now
                          </Link>
                      </div>
                  </div>
              </div>
            </div>

        </div>
      </section>
      
      <section className="pb-0">
        <div className="container">
          <div className="row align-items-center pb-3">
            <div className="col-md-12 col-lg-12">
              <h3 className="wrap-hding_web50 text-center pb-5">
                Our Travel Services
              </h3>
            </div>

            <div className="col-md-12 col-lg-12">
              <div className="row">

                <div className="col-md-6 col-lg-3 mb-3">
                  <div className="wc-box_web50">
                    <div className="d-flex gap-3 align-items-center">
                      <div className="wc-icon_web50">
                        <i className="fa-solid fa-plane-departure"></i>
                      </div>

                      <h6 className="wrap-subhding_web50 pb-2">Air Ticket Booking</h6>
                    </div>

                    <div className="wc-content_web50">
                      <p className="wrap-prgh_web50">
                        Book domestic and international flights with convenient travel options and dependable booking support for your journey.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3 mb-3">
                  <div className="wc-box_web50">
                    <div className="d-flex gap-3 align-items-center">
                      <div className="wc-icon_web50">
                        <i className="fa-solid fa-earth-asia"></i>
                      </div>

                      <h6 className="wrap-subhding_web50 pb-2">Holiday Packages</h6>
                    </div>

                    <div className="wc-content_web50">
                      <p className="wrap-prgh_web50">
                        Explore domestic and international holiday packages designed for families, couples, solo travelers, and groups.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3 mb-3">
                  <div className="wc-box_web50">
                    <div className="d-flex gap-3 align-items-center">
                      <div className="wc-icon_web50">
                        <i className="fa-solid fa-map-location-dot"></i>
                      </div>

                      <h6 className="wrap-subhding_web50 pb-2">Customized Tours</h6>
                    </div>

                    <div className="wc-content_web50">
                      <p className="wrap-prgh_web50">
                        Create personalized travel itineraries based on your destination, schedule, budget, and travel preferences.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3 mb-3">
                  <div className="wc-box_web50">
                    <div className="d-flex gap-3 align-items-center">
                      <div className="wc-icon_web50">
                        <i className="fa-solid fa-headset"></i>
                      </div>

                      <h6 className="wrap-subhding_web50 pb-2">Travel Assistance</h6>
                    </div>

                    <div className="wc-content_web50">
                      <p className="wrap-prgh_web50">
                        Get assistance with travel planning, booking inquiries, itinerary updates, and general travel-related questions.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="how-work_web50 py-5">
        <div className="container">

            <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                    <h2 className="wrap-hding_web50">How It Works</h2>
                    <p className="wrap-prgh_web50 pt-2 pb-5">
                        Planning your next trip is easy. Follow these simple steps to search flights, receive travel assistance, and complete your reservation.
                    </p>
                </div>
            </div>

            <div className="row g-4 position-relative">

                <div className="col-md-6 col-lg-3">
                    <div className="how-card_web50">
                        <span className="step-number_web50">01</span>

                        <div className="how-icon_web50">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>

                        <h4>Search Flights</h4>

                        <p>
                            Search available domestic and international flight options based on your preferred destination and travel dates.
                        </p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3">
                    <div className="how-card_web50">
                        <span className="step-number_web50">02</span>

                        <div className="how-icon_web50">
                            <i className="fa-solid fa-phone-volume"></i>
                        </div>

                        <h4>Contact Our Team</h4>

                        <p>
                            Speak with our travel specialists to discuss flight availability, tour packages, and your travel requirements.
                        </p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3">
                    <div className="how-card_web50">
                        <span className="step-number_web50">03</span>

                        <div className="how-icon_web50">
                            <i className="fa-solid fa-file-circle-check"></i>
                        </div>

                        <h4>Confirm Reservation</h4>

                        <p>
                            Our team will guide you through the reservation process and help finalize your travel arrangements.
                        </p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3">
                    <div className="how-card_web50">
                        <span className="step-number_web50">04</span>

                        <div className="how-icon_web50">
                            <i className="fa-solid fa-plane-departure"></i>
                        </div>

                        <h4>Enjoy Your Journey</h4>

                        <p>
                            Receive your travel details and get ready to enjoy your domestic or international trip with confidence.
                        </p>
                    </div>
                </div>

            </div>

        </div>
      </section>
      
      <section className="mb-5">
        <div className="container">
          <div className="">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-12 col-lg-10">
                <h2 className="wrap-hding_web50 text-center pb-2">Frequently Asked Questions</h2>
                <p className="wrap-prgh_web50 text-center pb-4">
                  Find answers to common questions about flight search, reservation assistance, tour packages, and travel support offered by {CONTACT.domainname}.
                </p>
              </div>
              <div className="col-md-12 col-lg-12">  
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
                        You can contact our travel assistance team through our <Link href="/contact-us">Contact Us</Link> page or by phone for help with flight reservations, tour packages, and travel-related inquiries.
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="/faq" className="wrap-btn_web50 my-3 ">View All FAQ's Questions <span className="ps-2"><i className="fa-solid fa-arrow-right-long"></i></span></Link>
              </div>
            </div>
          </div>  
        </div>
      </section>

      <section className="pt-0">
        <div className="container">
          <div className="row pb-5">
            <div className="col-md-12">
              <div className="cta-bg_web50">
                <div className="row justify-content-center">
                  <div className="col-md-9">
                    <h2 className="wrap-hding_web50 text-center">Need Help Planning Your Trip?</h2>
                    <p className="wrap-prgh_web50 text-center text-white">Search for flights, explore domestic and international tour packages, and connect with our travel specialists for personalized reservation assistance and travel planning.</p>
                    <Link href={`tel:${CONTACT.phone}`} className="mx-auto d-table mt-3"><div className="cta-btn_web50"><i className="fa-solid fa-phone-volume"></i> Contact Our Travel Specialist</div></Link>
                  </div>  
                </div>
              </div>  
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
