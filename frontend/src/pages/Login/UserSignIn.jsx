import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/UserContext";

function UserSignIn() {
    const [userEmail, setUserEmail] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { signin, signInWithGoogle } = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log({ email, password });

        signin(email, password)
            .then(result => {
                toast.success('Login Success!')
                navigate(from, { replace: true })
                console.log(result.user)
            })
            .catch(error => toast.error(error.message))
    }

    // Google Signin
    const handleGoogleSignin = () => {
        signInWithGoogle().then(result => {
            console.log(result.user)
            navigate(from, { replace: true })
        })
    }

    return (
        <div className="flex overflow-hidden flex-col max-w-[699px] border-2 rounded-lg border-sky-500 py-20 px-40">
            <h1 className="relative self-center text-2xl font-bold text-center text-sky-700">
                SignIn with your Account
            </h1>
            <div className="flex relative flex-wrap gap-6 self-center mt-12 w-full text-lg text-center text-white uppercase whitespace-nowrap max-w-[531px] max-md:mt-10 max-md:max-w-full">
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

            <form
                onSubmit={handleSubmit}
                noValidate=''
                action=''
            >
                {/* Email */}
                <div className="mt-12 max-md:mt-10">
                    <label
                        htmlFor="email"
                        className="relative self-start email"
                    >
                        Email
                    </label>
                    <input
                        onBlur={event => setUserEmail(event.target.value)}
                        type='email'
                        name='email'
                        id='email'
                        className="mt-2 w-full border-b border-gray-300 focus:border-sky-500 outline-none"
                        data-temp-mail-org='0'
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
                    <button type='submit' className="self-start px-10 py-3 text-base font-bold text-center text-white uppercase whitespace-nowrap bg-sky-500 rounded-3xl shadow-2xl max-md:px-5">
                        Sign In
                    </button>
                </div>
            </form>

        </div>
    );
}

export default UserSignIn;
