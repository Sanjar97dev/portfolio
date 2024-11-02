import React, { useState } from "react";


const Testimonial = () => {
  const [testimonials] = useState([
    {
      id: 1,
      name: "Алмаз",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMQKpdxPpuOXkr58G456oz8HKjQPZ6YOwUlw&s",
      testimonial: "Мыкты сонун жасайт экен",
    },
    {
      id: 2,
      name: "Michael Johnson",
      image: "https://picsum.photos/200/300?2",
      testimonial: "A wonderful service, highly recommended to everyone!",
    },
    {
      id: 3,
      name: "Emily Davis",
      image: "https://picsum.photos/200/300?3",
      testimonial: "The attention to detail was fantastic, and the support was unmatched.",
    },
    {
      id: 4,
      name: "John Doe",
      image: "https://picsum.photos/200/300?4",
      testimonial: "A pleasure to work with. They made everything so easy!",
    },
  ]);

  return (
    <div className="bg-indigo-800 p-5 md:p-20">
      <h2 className="text-center text-white text-3xl font-bold mb-10">Testimonials</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg p-6 max-w-xs md:max-w-sm flex flex-col items-center transform transition duration-300 hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 rounded-full mb-4 border-4 border-indigo-500 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
            <p className="text-gray-700 text-center mb-4">{item.testimonial}</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26 6.91 1-5 4.87 1.18 6.87L12 17.77l-6.18 3.26L7 14.13 2 9.26l6.91-1L12 2z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
