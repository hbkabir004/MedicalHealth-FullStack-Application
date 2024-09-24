import ContactUs from "../components/Contacts";
import Doctors from "../components/Doctors";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

const LandingPage = () => {
    return (
        <div>
            <Nav />
            <Hero />
            <Doctors />
            <Services />
            <Testimonials />
            <ContactUs />
        </div>
    );
};

export default LandingPage;
