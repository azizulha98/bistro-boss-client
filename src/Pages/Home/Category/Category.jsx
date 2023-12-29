import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import categoryImg1 from '../../../assets/home/slide1.jpg'
import categoryImg2 from '../../../assets/home/slide2.jpg'
import categoryImg3 from '../../../assets/home/slide3.jpg'
import categoryImg4 from '../../../assets/home/slide4.jpg'
import categoryImg5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
  return (
    <section>
      <SectionTitle subHeading={'From 11:00am to 10:00pm'} heading={'ORDER ONLINE'} />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-10"
      >
        <SwiperSlide>
          <img src={categoryImg1} alt="" />
          <h3 className='text-xl md:text-4xl uppercase text-center -mt-16 text-base-200'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={categoryImg2} alt="" />
          <h3 className='text-xl md:text-4xl uppercase text-center -mt-16 text-base-200'>pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={categoryImg3} alt="" />
          <h3 className='text-xl md:text-4xl uppercase text-center -mt-16 text-base-200'>Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={categoryImg4} alt="" />
          <h3 className='text-xl md:text-4xl uppercase text-center -mt-16 text-base-200'>desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={categoryImg5} alt="" />
          <h3 className='text-xl md:text-4xl uppercase text-center -mt-16 text-base-200'>Salads</h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;