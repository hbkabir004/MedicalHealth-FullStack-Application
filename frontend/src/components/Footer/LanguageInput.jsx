import React, { useState } from 'react';

const LanguageInput = () => {
    const [selected, setSelected] = useState('English - US');
    const [open, setOpen] = useState(false);

    const options = [
        { value: 'US', label: 'English - US', icon: '/icons/globe.png' },
        { value: 'BD', label: 'বাংলা - BD', icon: '/icons/globe.png' },
        { value: 'IN', label: 'हिन्दी - IN', icon: '/icons/globe.png' },
        { value: 'UK', label: 'English - UK', icon: '/icons/globe.png' }
    ];

    const handleSelect = (option) => {
        setSelected(option.label);
        setOpen(false);
    };

    return (
        <div className="relative mt-10 w-64">
            <button
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-sky-500 w-full p-2.5 flex items-center justify-around"
                onClick={() => setOpen(!open)}
            >
                <img
                    loading="lazy"
                    src="/icons/globe.png"
                    alt="globe"
                    className="object-contain shrink-0 w-5 aspect-[1.05]"
                />
                <span className='pr-10 text-xl font-semibold'>{selected}</span>
                <img src="/icons/chevron-down.png" alt="input-icon" />
            </button>

            {open && (
                <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                    {options.map((option) => (
                        <li
                            key={option.value}
                            className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSelect(option)}
                        >
                            <img
                                loading="lazy"
                                src={option.icon}
                                alt=""
                                className="w-5 h-5 mr-2"
                            />
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LanguageInput;
