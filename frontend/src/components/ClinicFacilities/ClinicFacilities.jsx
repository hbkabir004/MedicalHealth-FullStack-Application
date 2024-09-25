import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const facilitiesData = [
  {
    id: 1,
    title: 'Modern Dental Care',
    description: 'Pellentesque ac bibendum tortor, vel blandit nulla. Nulla eget lobortis lacus.',
    img: 'https://via.placeholder.com/300', // Replace with your image URL
  },
  {
    id: 2,
    title: 'Advanced Surgery Rooms',
    description: 'Pellentesque ac bibendum tortor, vel blandit nulla. Nulla eget lobortis lacus.',
    img: 'https://via.placeholder.com/300', // Replace with your image URL
  },
  {
    id: 3,
    title: 'Laboratory Services',
    description: 'Pellentesque ac bibendum tortor, vel blandit nulla. Nulla eget lobortis lacus.',
    img: 'https://via.placeholder.com/300', // Replace with your image URL
  },
];

const ClinicFacilities = () => {
  return (
    <section className="relative bg-gray-50 p-10">
      {/* Background circles */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-r from-green-200 to-blue-300 rounded-full opacity-50"></div>
      <div className="absolute top-10 left-10 text-5xl font-bold text-gray-900 z-10">Clinic Facilities</div>

      {/* SwiperJS integration */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="relative z-20 mt-16"
      >
        {facilitiesData.map((facility) => (
          <SwiperSlide key={facility.id}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={facility.img} alt={facility.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
                <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                  See Detail
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* "See All" Link */}
      <a href="#" className="text-blue-600 hover:underline absolute right-0 top-5">
        SEE ALL →
      </a>
    </section>
  );
};

export default ClinicFacilities;
