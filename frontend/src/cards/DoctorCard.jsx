import React from 'react';

const DoctorCard = ({ doctor }) => {
    return (
        <div className="bg-gray-100 p-8 rounded-lg shadow">
            <h3 className="text-xl font-bold">{doctor.name}</h3>
            <p className="mt-4">{doctor.specialization}</p>
        </div>
    );
};

export default DoctorCard;