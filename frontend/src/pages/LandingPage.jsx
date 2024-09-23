import ContactUs from "../components/Contacts";
import Doctors from "../components/Doctors";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

const LandingPage = () => {
    return (
        <div>
            <Hero />
            <Doctors />
            <Services />
            <Testimonials />
            <ContactUs />
        </div>
    );
};

export default LandingPage;
