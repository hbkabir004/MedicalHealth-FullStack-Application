import { Banner } from "../components/Banner";
import ClinicFacilities from "../components/ClinicFacilities/ClinicFacilities";
import Doctors from "../components/Doctors";
import MainFooter from "../components/Footer/Footer";
import Nav from "../components/Nav";
import OurClinics from "../components/OurClinics/OurClinics";
import ReadyToStart from "../components/ReadyToStart";
import Services from "../components/Services";
import SpecialtySection from "../components/SpecialtySection/SpecialtySection";
import StatisticsSection from "../components/StatisticsSection/StatisticsSection";
import Testimonials from "../components/Testimonials";

const LandingPage = () => {
    return (
        <div>
            <div className="bg-[url('/bg/header-bg.png')] bg-contain bg-no-repeat bg-right-top">
                <Nav />
                <Banner />
                {/* <BusinessSolution /> */}
                <StatisticsSection />
            </div>
            <ClinicFacilities />
            <SpecialtySection />
            <Doctors />
            <Services />
            <Testimonials />
            {/* <ContactUs /> */}
            <ReadyToStart />

            <div className="bg-[url('/bg/deco.png')] bg-cover bg-center">
                <OurClinics />
                <MainFooter />
            </div>
        </div>
    );
};

export default LandingPage;
