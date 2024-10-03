import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// import './styles.css';

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTaitle from "../../../components/SectionTaitle/SectionTaitle";

const Category = () => {
  return (
    <>
      <section className="mb-24">
        <SectionTaitle subHeading={"From 11:00am to 10:00pm"} heading ={"ORDER ONLINE"} />
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mb-4"
        >
          <SwiperSlide className="mb-4">
            <img src={slide1} alt="" />
            <h2 className="text-4xl uppercase ms-12 -mt-16 text-white">
              Salads
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
            <h2 className="text-4xl uppercase ms-12 -mt-16 text-white">
              Pizzas
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            <h2 className="text-4xl uppercase ms-12 -mt-16 text-white">
              Soups
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            <h2 className="text-4xl uppercase ms-12 -mt-16 text-white">
              Desserts
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" />
            <h2 className="text-4xl uppercase ms-12 -mt-16 text-white">
              Salads
            </h2>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Category;
