import React from 'react';
import SpecialtyButton from './SpecialtyButton';

const SpecialityContent = ({ specialties }) => {
    return (
        <div className="flex flex-col w-5/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start self-stretch my-auto w-full text-sm text-black text-opacity-90 max-md:mt-10 max-md:max-w-full">
                <h2 className="z-10 -mt-5 text-5xl font-black max-md:text-4xl">
                    Our Speciality
                </h2>
                <p className="self-stretch mt-6 text-2xl leading-9 max-md:max-w-full">
                    Curabitur egestas consequat lorem, vel fermentum augue porta id.
                    Aliquam lobortis magna neque, gravida consequat velit venenatis at.
                </p>
                <div className="flex flex-wrap gap-4 mt-14 max-md:mt-10">
                    {specialties.map((specialty, index) => (
                        <SpecialtyButton
                            key={index}
                            name={specialty.name}
                            active={specialty.active}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SpecialityContent;