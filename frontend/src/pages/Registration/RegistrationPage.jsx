import React from "react";
import MainFooter from "../../components/Footer/Footer";
import AccountCreation from "./AccountCreation";
import AuthNav from "./AuthNav";
import RightSide from "./RightSide";

function RegistrationPage() {
    return (
        <>
            <AuthNav route={"login"} />
            <section className="mt-20 flex justify-evenly items-center">
                <AccountCreation />
                <RightSide />
            </section>
            <div className="my-20">
                <MainFooter />
            </div>
        </>
    );
}

export default RegistrationPage;
