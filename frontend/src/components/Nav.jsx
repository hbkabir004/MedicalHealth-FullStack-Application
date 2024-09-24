import { useState } from "react";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="relative flex items-center justify-between">
                <div className="flex items-center">
                    <a
                        href="/"
                        aria-label="Medical"
                        title="Medical"
                        className="inline-flex items-center mr-8"
                    >
                        <img src="/Luxi-Hosting-Logo.svg" alt="site-logo" />
                        <span className="ml-2 text-3xl font-semibold tracking-wide text-black">
                            Medical
                        </span>
                    </a>
                    <ul className="flex items-center hidden space-x-8 lg:flex">
                        <li>
                            <a
                                href="/"
                                aria-label="Menu1"
                                title="Menu1"
                                className="text-lg font-semibold tracking-wide text-black transition-colors duration-200 hover:text-blue-500 hover:underline hover:underline-offset-8 hover:decoration-4"
                            >
                                Menu1
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                aria-label="Menu2"
                                title="Menu2"
                                className="text-lg font-semibold tracking-wide text-black transition-colors duration-200 hover:text-blue-500 hover:underline hover:underline-offset-8 hover:decoration-4"
                            >
                                Menu2
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                aria-label="Menu3"
                                title="Menu3"
                                className="text-lg font-semibold tracking-wide text-black transition-colors duration-200 hover:text-blue-500 hover:underline hover:underline-offset-8 hover:decoration-4"
                            >
                                Menu3
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                aria-label="Menu4"
                                title="Menu4"
                                className="text-lg font-semibold tracking-wide text-black transition-colors duration-200 hover:text-blue-500 hover:underline hover:underline-offset-8 hover:decoration-4"
                            >
                                Menu4
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                aria-label="Menu5"
                                title="Menu5"
                                className="text-lg font-semibold tracking-wide text-black transition-colors duration-200 hover:text-blue-500 hover:underline hover:underline-offset-8 hover:decoration-4"
                            >
                                Menu5
                            </a>
                        </li>
                    </ul>
                </div>
                <ul className="flex items-center hidden space-x-8 lg:flex">
                    <li>
                        <a
                            href="/login"
                            aria-label="Login"
                            title="Login"
                            className="font-semibold tracking-wide text-black transition-colors duration-200 hover:text-blue-500 hover:underline hover:underline-offset-8 hover:decoration-4 uppercase"
                        >
                            Login
                        </a>
                    </li>
                    <li>
                        <a
                            href="/register"
                            className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded-full shadow-md bg-green-500 hover:bg-green-700 focus:shadow-outline focus:outline-none uppercase"
                            aria-label="Register"
                            title="Register"
                        >
                            Register
                        </a>
                    </li>

                    <li>
                        <img
                            loading="lazy"
                            src="/Line.png"
                            className="object-contain shrink-0 self-stretch my-auto w-0.5 aspect-[0.08]"
                            alt=""
                        />
                    </li>
                    <li>
                        <img
                            loading="lazy"
                            src="/android-settings.png"
                            className="object-contain shrink-0 self-stretch my-auto aspect-[0.97] w-[29px]"
                            alt="Language selector"
                        />
                    </li>
                </ul>

                {/* For Small Devices */}
                <div className="lg:hidden">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className="w-5 text-black" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className="absolute z-50 top-0 left-0 w-full">
                            <div className="p-5 bg-white border rounded shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <a
                                            href="/"
                                            aria-label="Medical"
                                            title="Medical"
                                            className="inline-flex items-center"
                                        >
                                            <img src="/Luxi-Hosting-Logo.svg" alt="site-logo" />
                                            <span className="ml-2 text-3xl font-semibold tracking-wide text-black">
                                                Medical
                                            </span>
                                        </a>
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className="w-5 text-black" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="space-y-4">
                                        <li>
                                            <a
                                                href="/"
                                                aria-label="Menu"
                                                title="Menu1"
                                                className="font-semibold tracking-wide text-black transition-colors duration-200 hover:text-blue-500 hover:underline hover:underline-offset-8 hover:decoration-4"
                                            >
                                                Menu1
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                aria-label="Menu2"
                                                title="Menu2"
                                                className="font-semibold tracking-wide text-black transition-colors duration-200 hover:text-blue-500 hover:underline hover:underline-offset-8 hover:decoration-4"
                                            >
                                                Menu2
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                aria-label="Menu3"
                                                title="Menu3"
                                                className="font-semibold tracking-wide text-black transition-colors duration-200 hover:text-blue-500 hover:underline hover:underline-offset-8 hover:decoration-4"
                                            >
                                                Menu3
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                aria-label="Menu4"
                                                title="Menu4"
                                                className="font-semibold tracking-wide text-black transition-colors duration-200 hover:text-blue-500 hover:underline hover:underline-offset-8 hover:decoration-4"
                                            >
                                                Menu4
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                aria-label="Menu5"
                                                title="Menu5"
                                                className="font-semibold tracking-wide text-black transition-colors duration-200 hover:text-blue-500 hover:underline hover:underline-offset-8 hover:decoration-4"
                                            >
                                                Menu5
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/login"
                                                aria-label="Login"
                                                title="Login"
                                                className="text-xl font-semibold tracking-wide md:text-black transition-colors duration-200 hover:text-blue-500 hover:underline hover:underline-offset-8 hover:decoration-4 hover:font-bold text-blue-700"
                                            >
                                                Login
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/register"
                                                className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-white transition duration-200 pill shadow-md bg-green-500 focus:shadow-outline focus:outline-none"
                                                aria-label="Register"
                                                title="Register"
                                            >
                                                Register
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Nav