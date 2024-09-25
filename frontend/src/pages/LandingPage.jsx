import { Banner } from "../components/Banner";
import MainFooter from "../components/Footer/Footer";
import MainNav from "../components/MAinNav";

import OurClinics from "../components/OurClinics/OurClinics";
import ReadyToStart from "../components/ReadyToStart";
import SpecialtySection from "../components/SpecialtySection/SpecialtySection";
import StatisticsSection from "../components/StatisticsSection/StatisticsSection";

const LandingPage = () => {
    return (
        <div className="light:bg-white light:text-black dark:text-white dark:bg-gray-600">
            <div className="bg-[url('/bg/header-bg.png')] bg-contain bg-no-repeat bg-right-top">
                <MainNav />
                <Banner />
                <StatisticsSection />
            </div>

            {/* <ClinicFacilities /> */}
            <SpecialtySection />
            <ReadyToStart />

            <div className="bg-[url('/bg/deco.png')] bg-cover bg-center">
                <OurClinics />
                <MainFooter />
            </div>
        </div>
    );
};

export default LandingPage;
