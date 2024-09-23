import React from 'react';

const Testimonials = () => {
    return (
        <section className="bg-gray-50 py-20">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    <div className="bg-white p-8 rounded-lg shadow">
                        <p className="text-lg italic">"Excellent service!"</p>
                        <h4 className="mt-4 font-bold">John Doe</h4>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow">
                        <p className="text-lg italic">"Highly recommend."</p>
                        <h4 className="mt-4 font-bold">Jane Smith</h4>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow">
                        <p className="text-lg italic">"Best health service!"</p>
                        <h4 className="mt-4 font-bold">Mary Lee</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;