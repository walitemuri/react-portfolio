import React from "react";
import "./quote.css";
import AVTR1 from "../../assets/HeroN.png";
import AVTR2 from "../../assets/heroFive.png";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Friedrich Neitzsche",
    review:
      '"Whoever fights monsters should see to it that in the process he does not become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you."',
  },

  {
    avatar: AVTR2,
    name: "Mohammad Ali",
    review:
      '"Only a man who knows what it is like to be defeated can reach down to the bottom of his soul and come up with the extra ounce of power it takes to win when the match is even."',
  },
];

const Quote = () => {
  return (
    <section id="quote">
      <h5>Quote of the Day</h5>
      <h2>Daily Inspiration</h2>
      <Swiper
        className="container testimonials__container"
        //Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Quote;
