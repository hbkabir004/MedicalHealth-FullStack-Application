import React, { useEffect, useState } from 'react';

export function FetchData() {
  const [doctors, setDoctors] = useState([]);
  const [clients, setClients] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetchDoctors();
    fetchClients();
    fetchTestimonials();
  }, []);

  const fetchDoctors = async () => {
    const res = await fetch('https://medical-health-eight.vercel.app/doctors');
    const data = await res.json();
    setDoctors(data);
  };

  const fetchClients = async () => {
    const res = await fetch('https://medical-health-eight.vercel.app/clients');
    const data = await res.json();
    setClients(data);
  };

  const fetchTestimonials = async () => {
    const res = await fetch('https://medical-health-eight.vercel.app/testimonials');
    const data = await res.json();
    setTestimonials(data);
  };

  return (
    <div className="h-screen flex justify-evenly items-center">
      <h1>Doctors</h1><span>=</span>
      <ul>
        {doctors.map((doc) => (
          <li key={doc._id}>{doc.name}</li>
        ))}
      </ul>
      <h1>Clients</h1><span>=</span>
      <ul>
        {clients.map((client) => (
          <li key={client._id}>{client.name}</li>
        ))}
      </ul>
      <h1>Testimonials</h1><span>=</span>
      <ul>
        {testimonials.map((testimonial) => (
          <li key={testimonial._id}>{testimonial.feedback}</li>
        ))}
      </ul>
    </div>
  );
}
