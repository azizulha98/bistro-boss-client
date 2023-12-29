import { useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('reviews.json')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])
  return (
    <section className="my-10 space-y-6">
      <SectionTitle heading={'testimonials'} subHeading={'What Our Clients Say'} />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
          reviews.map(review =>
            <SwiperSlide key={review._id}>
              <div className="px-16 flex items-center flex-col justify-center space-y-3">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <FaQuoteLeft />
                <p className="text-center">{review.details}</p>
                <h3 className="text-2xl text-orange-500">{review.name}</h3>
              </div>
            </SwiperSlide>
          )
        }
      </Swiper>
    </section>
  );
};

export default Testimonials;