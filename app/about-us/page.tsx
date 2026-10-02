// import Hero from "./Hero";
// import CompanyInfo from "./CompanyInfo";
// import Mission from "./Mission";
// import Team from "./Team";
import { CONTACT } from "@/app/config/contact";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
//   description: "Get info about us and our travel services.",
};

export default function AboutUsPage() {
  return (
    <>
      {/* <Hero />
      <CompanyInfo />
      <Mission />
      <Team /> */}
       <section className="container py-md-5 pt-5">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">

                <h2 className="wrap-hding_web50 pb-4">Who We Are</h2>

                <p className="wrap-prgh_web50 pb-3">
                    Welcome to {CONTACT.domainname}, your trusted travel partner based in <strong>{CONTACT.address}</strong>. We provide flight search, air ticket reservation assistance, domestic and international tour packages, and customized travel planning to help make every journey simple and enjoyable.
                </p>

                <p className="wrap-prgh_web50 pb-3">
                    Whether you're planning a family vacation, business trip, honeymoon, weekend getaway, or international holiday, our experienced travel team is here to help you explore travel options, choose suitable itineraries, and receive assistance throughout the reservation process.
                </p>

                <p className="wrap-prgh_web50 pb-3">
                    Our website includes a flight search tool that allows travelers to explore available flight options and travel information. Ticket reservations are assisted by our travel team, who are available to guide you through the booking process and answer your travel-related questions.
                </p>

                <p className="wrap-prgh_web50 pb-4">
                    Unless otherwise stated, {CONTACT.domainname} operates independently and is not affiliated with or endorsed by any airline, airport, travel provider, or government agency. 
                </p>

                <h3 className="wrap-subhding_web50 pb-3">Our Mission</h3>

                <p className="wrap-prgh_web50 pb-3">
                    Our mission is to make travel planning easier by providing reliable travel solutions, personalized reservation assistance, and carefully designed tour packages that help travelers enjoy a smooth and memorable experience.
                </p>

                <h3 className="wrap-subhding_web50 pb-3">Our Vision</h3>

                <p className="wrap-prgh_web50 pb-3">
                    Our vision is to become a trusted travel partner by delivering quality travel services, responsive customer support, and personalized travel experiences for every journey.
                </p>
                

                <h3 className="wrap-subhding_web50 pb-3">Our Services</h3>

                <p className="wrap-prgh_web50 pb-4">
                    Our services include flight search, air ticket reservation assistance, domestic and international tour packages, customized travel itineraries, holiday planning, and general travel guidance. We work with travelers to help them find suitable travel options based on their requirements.
                </p>

                <h3 className="wrap-subhding_web50 pb-3">Why Choose {CONTACT.domainname}?</h3>

                <p className="wrap-prgh_web50 pb-3">
                    We combine easy-to-use travel search tools with personalized assistance from our travel team. Whether you're searching for flights or planning a complete vacation, we strive to provide clear information, dependable support, and travel solutions tailored to your needs.
                </p>

                <p className="wrap-prgh_web50 pb-4">
                    Our goal is to make travel planning convenient by offering a user-friendly platform, responsive assistance, and travel services designed to help you plan your journey with confidence.
                </p>

                <h3 className="wrap-subhding_web50 pb-3">Our Commitment</h3>

                <p className="wrap-prgh_web50 pb-3">
                    We are committed to delivering professional travel assistance and quality customer service. Our team works to provide helpful guidance, accurate travel information, and practical travel solutions for every customer.
                </p>

                <p className="wrap-prgh_web50 pb-3">
                    Flight schedules, fares, availability, travel policies, and package details may change over time. We recommend confirming important travel information with our team or the relevant travel provider before finalizing your travel plans.
                </p>

                </div>
            </div>
            </section>   
    </>
  );
}