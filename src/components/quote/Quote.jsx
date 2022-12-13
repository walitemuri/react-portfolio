import React from 'react'
import './quote.css'
import AVTR1 from '../../assets/heroThree.png'
import AVTR2 from '../../assets/heroFive.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Thomas Shelby',
    review: 'Never Parlay on the backfoot. a bee, your hand a bee, your hand a bee, your hand a bee, your hand a bee, your hand a bee, your hand a bee, your hand'
  },

  {
    avatar: AVTR2,
    name: 'Mohammad Ali',
    review: 'Float like a butterfly and sting like a bee, your hands can\'t hit what your eyes can\'t see. a bee, your hand a bee, your hand a bee, your hand a bee, your hand'
  }
]

const Quote = () => {
  return (
    <section id='quote'>
      <h5>Quote of the Day</h5>
      <h2>Daily Inspiration</h2>
      <Swiper className="container testimonials__container"
        //Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Quote