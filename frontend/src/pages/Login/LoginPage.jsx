import React from "react";
import MainFooter from "../../components/Footer/Footer";
import AuthNav from "../Registration/AuthNav";
import RightSide from "../Registration/RightSide";
import UserSignIn from "./UserSignIn";

function LoginPage() {

  return (
    <>
      <AuthNav route={"register"} />
      <section className="mt-20 flex justify-evenly items-center">
        <UserSignIn />
        <RightSide />
      </section>

      <div className="my-20">
        <MainFooter />
      </div>
    </>
  );
}

export default LoginPage;
