"use client";
import { useState } from "react";
import { CONTACT } from "@/app/config/contact";


export default function ContactUsPage() {
    const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    });
    const [loading, setLoading] = useState(false);

    // submit handler
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/enquiry", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            console.log("Response:", data);
            console.log("Status:", res.status);

            if (data.success) {
                alert("✓ " + data.message);
                setForm({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                });
            } else {
                alert("✗ Error: " + data.message);
            }
        } catch (error) {
            console.error("Fetch error:", error);
            alert("✗ Network error: " + (error instanceof Error ? error.message : "Unknown error"));
        } finally {
            setLoading(false);
        }
    };


    
    return (
        <>
            <section className="py-lg-0">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-6">
                        <div className="pe-md-4">
                        <h2 className="wrap-hding_web50 text-center text-md-start pb-2 pt-md-5">Contact Us</h2>
                        <p className="wrap-prgh_web50 text-center text-md-start pb-5">
                            At <strong>{CONTACT.domainname}</strong>, we help make travel planning simple with flight search, air ticket reservation assistance, domestic and international tour packages, and customized travel solutions. Explore available travel options, discover exciting destinations, and connect with our travel specialists for personalized assistance throughout your journey.
                        </p>
                        </div>  
                        <div className="row pe-md-4">
                        <div className="col-md-6">
                            <div className="contact-box_web50">
                                <p className="contact-icon_web50">
                                <i className="fa-solid fa-phone-volume"></i>
                                </p>
                                <div>
                                <h3 className="wrap-subhding_web50 text-center">Call Now</h3>
                                <a href={`tel:${CONTACT.phone}`} className="wrap-prgh_web50 text-center d-block text-decoration-none pt-1">{CONTACT.phone}</a>
                                </div>  
                            </div> 
                        </div>
                        <div className="col-md-6">
                            <div className="contact-box_web50">
                            <p className="contact-icon_web50">
                                <i className="fa-solid fa-envelope"></i>
                            </p>
                            <div>
                                <h3 className="wrap-subhding_web50 text-center">Email</h3>
                            <a href={`mailto:${CONTACT.email}`} className="wrap-prgh_web50  text-center d-block text-decoration-none pt-1">{CONTACT.email}</a>
                            </div>  
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="contact-box_web50 mt-3">
                            <p className="contact-icon_web50">
                                <i className="fa-solid fa-building"></i>
                            </p>
                            <div>
                                <h3 className="wrap-subhding_web50 text-center">Address</h3>
                                <p className="wrap-prgh_web50 text-center d-block text-decoration-none pt-1">
                                {CONTACT.address}
                                </p>
                            </div>  
                            </div>
                        </div>
                        </div>  
                    </div>
                    <div className="col-lg-6 ps-md-0 d-none d-lg-block">
                        <img src="/images/contact-bg.jpg" alt="" className="contact-rit-img_web50" />
                    </div>

                    </div>
                </div>
            </section>
            <section className="position-relative py-lg-0 pt-0">
        
                <div>
                    <div className="container h-100">
                    <div className="row justify-content-end h-100">
                        <div className="col-md-12">
                        <div className="frame-above-box_web50">
                            <div className="row">
                            <div className="col-md-6 pe-md-0">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2959.730119938508!2d-87.89615032464985!3d42.113250471216986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb8e21d447957%3A0x87c7bac68f048aba!2sParking%20lot%2C%201098%20S%20Milwaukee%20Ave%20%23200%2C%20Wheeling%2C%20IL%2060090%2C%20USA!5e0!3m2!1sen!2sin!4v1783329077831!5m2!1sen!2sin" className="contact-ifram_web50" allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                            </div>
                            <div className="col-md-6 ps-md-0">
                                <div className="contact-form_web50">
                                <h2 className="wrap-hding_web50 pb-2">Get in Touch With Our Team</h2>
                                <p className="wrap-prgh_web50 pb-4">
                                    Have questions about travel resources or destination information? Send us your inquiry, and we'll be happy to assist with general travel guidance and support.
                                </p>

                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-group">
                                        <label className="contact-lbl_web50">Name<span className="abstract">*</span></label>
                                        {/* <input type="text" name="name" className="contact-field_web50" pattern="[A-Z a-z]+" required /> */}
                                        <input
                                        type="text"
                                        name="name"
                                        className="contact-field_web50"
                                        value={form.name}
                                        onChange={(e) =>
                                            setForm({ ...form, name: e.target.value })
                                        }
                                        required
                                        />
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-group">
                                            <label className="contact-lbl_web50">Phone Number<span className="abstract">*</span></label>
                                            <input type="text" name="phone" className="contact-field_web50" value={form.phone}
                                        onChange={(e) =>
                                            setForm({ ...form, phone: e.target.value })
                                        } maxLength={10} pattern="^[0-9]{10}$" required />
                                                                
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-12">
                                        <div className="form-group">
                                        <label className="contact-lbl_web50">Email<span className="abstract">*</span></label>
                                        <input type="email" name="email" className="contact-field_web50" value={form.email}
                                        onChange={(e) =>
                                            setForm({ ...form, email: e.target.value })
                                        } required />
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-12">
                                        <div className="form-group">
                                        <label className="contact-lbl_web50">Message<span className="abstract">*</span></label>
                                        <textarea rows={4} name="message" className="contact-field_web50" value={form.message}
                                        onChange={(e) =>
                                            setForm({ ...form, message: e.target.value })
                                        } required></textarea>
                                        </div>
                                        <button type="submit" name="submit" className="wrap-btn_web50" disabled={loading}>
                                            {loading ? "Sending..." : "Send Message"}
                                        </button>
                                    </div>
                                    </div>
                                </form>
                                
                                </div>
                            </div>
                            
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>  
                </div>
        
            </section>
        </>
    )
}