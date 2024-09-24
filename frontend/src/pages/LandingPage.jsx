import { Banner } from "../components/Banner";
import Doctors from "../components/Doctors";
import FooterContainer from "../components/Footer/FooterContainer";
import Nav from "../components/Nav";
import ReadyToStart from "../components/ReadyToStart";
import Services from "../components/Services";
import SpecialtySection from "../components/SpecialtySection/SpecialtySection";
import StatisticsSection from "../components/StatisticsSection/StatisticsSection";
import Testimonials from "../components/Testimonials";

const LandingPage = () => {
    return (
        <div>
            <Nav />
            <Banner />
            {/* <BusinessSolution /> */}
            <StatisticsSection />
            <SpecialtySection />
            <Doctors />
            <Services />
            <Testimonials />
            {/* <ContactUs /> */}
            <ReadyToStart />
            <FooterContainer />

        </div>
    );
};

export default LandingPage;
