import React, { useContext } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../contexts/UserContext';
import SocialButton from "./SocialButton";

const socialButtons = [
  {
    name: "Facebook",
    bgColor: "bg-indigo-600",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5bd7f3c8523a782bc8d0fd88f17f061c7ffc7f59fe85461c8426b2938874a37d?placeholderIfAbsent=true&apiKey=38d956dfb74d41e68ea15b3be9162920",
  },
  {
    name: "Twitter",
    bgColor: "bg-cyan-500",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/aebc74e1a1c9b7c94dca79bd5538e6c57169ab64cb7f460989399a4d4e42f0fb?placeholderIfAbsent=true&apiKey=38d956dfb74d41e68ea15b3be9162920",
  },
];

function AccountCreation() {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const { createUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext)

  // Signup using Email & Pass
  const handleSubmit = event => {
    event.preventDefault()

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    //1. Create Account
    createUser(email, password)
      .then(result => {
        console.log(result.user)

        const profile = {
          displayName: name,
        }

        //2. Update Name
        updateUserProfile(profile)
          .then(() => {
            toast.success('Profile Created')
          })
          .catch(error => {
            toast.error(error.message)
          })

      })
      .catch(error => console.log(error))
  }

  // Google Signin
  const handleGoogleSignin = () => {
    signInWithGoogle().then(result => {
      console.log(result.user)
      navigate(from, { replace: true })
    })
  }


  return (
    <div className="flex overflow-hidden flex-col max-w-[699px] border-2 rounded-lg border-sky-500 py-10 px-20">
      <h1 className="relative self-center text-2xl font-bold text-center text-sky-700">
        Create Your Account
      </h1>
      <div className="flex relative flex-wrap gap-6 self-center mt-12 w-full text-lg text-center text-white uppercase whitespace-nowrap max-w-[531px] max-md:mt-10 max-md:max-w-full">
        {socialButtons.map((button) => (
          <SocialButton key={button.name} {...button} />
        ))}
        <button
          onClick={handleGoogleSignin}
          className="flex flex-1 gap-5 px-6 py-2.5 bg-red-600 rounded-lg shadow-2xl max-md:px-5"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3105661cc3d9a8bc836b1ae61abb8e0210b7c329f06993aaa985aeabccdf5557?placeholderIfAbsent=true&apiKey=38d956dfb74d41e68ea15b3be9162920"
            alt="Google icon"
            className="object-contain shrink-0 aspect-square w-[21px]"
          />
          <span>Google</span>
        </button>
      </div>
      <div className="flex relative gap-8 items-center self-center mt-14 max-w-full text-base text-center text-black text-opacity-50 w-[348px] max-md:mt-10">

        <p className="grow shrink self-stretch w-[136px]">
          Or register with email
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate=''
        action=''
      >
        {/* Name */}
        <div className="mt-12 max-md:mt-10">
          <label
            htmlFor='name'
            className={`relative self-start name`}
          >
            Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            className="mt-2 w-full border-b border-gray-300 focus:border-sky-500 outline-none"
            data-temp-mail-org='0'
            required
          />
        </div>

        {/* Email */}
        <div className="mt-12 max-md:mt-10">
          <label
            htmlFor="email"
            className="relative self-start email"
          >
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            className="mt-2 w-full border-b border-gray-300 focus:border-sky-500 outline-none"
            data-temp-mail-org='0'
            required
          />
        </div>

        {/* password */}
        <div className="flex relative flex-wrap gap-4 mt-8 max-md:max-w-full">
          <div className="flex flex-col flex-1 grow shrink-0 items-start whitespace-nowrap basis-0 w-fit">
            <label
              htmlFor='password'
              className="text-xs text-sky-500"
            >
              Password
            </label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='*******'
              className="mt-2 w-full border-b border-gray-300 focus:border-sky-500 outline-none"
              required
            />
          </div>
        </div>

        {/* Terms & Policy */}
        <div className="flex relative flex-wrap gap-10 mt-12 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-auto gap-4 text-lg text-black text-opacity-90">
            <label htmlFor="terms" className="flex gap-4 cursor-pointer">
              <input id="terms" type="checkbox" value="" className="w-6 h-6 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
              <span className="flex-auto">
                I have read and accept the{" "}
                <span className="text-sky-500">
                  Terms of Service & Privacy Policy
                </span>{" "}
                *
              </span>
            </label>
          </div>

          <button type='submit' className="self-start px-10 py-3 text-base font-bold text-center text-white uppercase whitespace-nowrap bg-sky-500 rounded-3xl shadow-2xl max-md:px-5">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default AccountCreation;
