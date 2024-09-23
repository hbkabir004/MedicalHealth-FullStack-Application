import React from 'react';

const Services = () => {
    return (
        <section className="py-20">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold">Our Services</h2>
                <p className="mt-4">Providing top-quality health services for the community.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    <div className="bg-gray-100 p-8 rounded-lg shadow">
                        <h3 className="text-xl font-bold">Service 1</h3>
                        <p className="mt-4">Description of service 1.</p>
                    </div>
                    <div className="bg-gray-100 p-8 rounded-lg shadow">
                        <h3 className="text-xl font-bold">Service 2</h3>
                        <p className="mt-4">Description of service 2.</p>
                    </div>
                    <div className="bg-gray-100 p-8 rounded-lg shadow">
                        <h3 className="text-xl font-bold">Service 3</h3>
                        <p className="mt-4">Description of service 3.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;