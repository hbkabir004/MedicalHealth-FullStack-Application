import { Link } from 'react-router-dom';
export const Banner = () => {
    return (
        <div className="relative z-0 flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
            <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
                <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                    <div className="max-w-xl mb-6">
                        <h1 className="md:text-4xl text-xl text-black text-opacity-90 max-md:max-w-full max-md:text-4xl font-semibold">
                            Lorem ipsum dolor amet
                        </h1>
                        <p className="md:text-3xl text-xl self-stretch mt-11 leading-10 text-black text-opacity-50 max-md:mt-10 max-md:max-w-full text-semibold">
                            Nam sollicitud nunc, cursus eros vulputate sed. Vestibulum lobortis.
                        </p>
                    </div>

                    <div className="flex justify-start mt-14 md:text-2xl text-lg uppercase max-md:mt-10">
                        {/* <Link> */}
                        <p className="font-semibold mr-6 my-auto text-green-600 hover:text-green-500 cursor-pointer">
                            More Info
                        </p>
                        {/* </Link> */}
                        <Link to="register">
                            <button className="px-9 py-3.5 text-center text-white bg-sky-400 rounded-3xl shadow-2xl w-fit max-md:px-5 hover:bg-sky-600 uppercase">
                                Register now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
                <img
                    className="object-contain grow w-full aspect-[1.73] max-md:mt-10 max-md:max-w-full"
                    src="/Banner1.png"
                    alt="banner"
                />
            </div>
        </div>
    );
};