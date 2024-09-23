import React, { useEffect, useState } from 'react';
import DoctorCard from '../cards/DoctorCard';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetchDoctors();
    }, []);

    const fetchDoctors = async () => {
        const res = await fetch('https://medical-health-eight.vercel.app/doctors');
        const data = await res.json();
        setDoctors(data);
    };

    return (
        <section className="py-20">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold">Our Services</h2>
                <p className="mt-4">Providing top-quality health services for the community.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    {
                        doctors.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;