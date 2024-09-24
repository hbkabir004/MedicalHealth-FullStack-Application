import { Banner } from "../components/Banner";
import ContactUs from "../components/Contacts";
import Doctors from "../components/Doctors";
import Nav from "../components/Nav";
import Services from "../components/Services";
import StatisticsSection from "../components/StatisticsSection/StatisticsSection";
import Testimonials from "../components/Testimonials";

const LandingPage = () => {
    return (
        <div>
            <Nav />
            <Banner />
            {/* <BusinessSolution /> */}
            <StatisticsSection />
            <Doctors />
            <Services />
            <Testimonials />
            <ContactUs />
        </div>
    );
};

export default LandingPage;
