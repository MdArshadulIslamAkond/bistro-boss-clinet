import FoodCard from "../../../components/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import Paginations from "../../../components/Pagination/Paginations";
const OrderTabPanel = ({ items }) => {
  // console.log(items.length);
  // const [data, setData] = useState(items);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const pages = [];
  for (let i = 1; i <= Math.ceil(items.length / postsPerPage); i++) {
    pages.push(i);
  }
  // console.log(pages);
  // console.log(currentPage);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      // console.log(index);
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="relative">
      {/* <Paginations totalPosts ={items.length} postsPerPage ={postsPerPage} /> */}
      <Swiper
        pagination={pagination}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        onSlideChange={(swiper) => {
          setCurrentPage(swiper.realIndex + 1); // Update page number when slides change
        }}
      >
        {pages.map((page) => (
          <SwiperSlide key={page}>
            <div className="grid md:grid-cols-3 gap-6">
              {items.slice(firstPostIndex, lastPostIndex).map((item) => {
                
                return <FoodCard key={item._id} item={item} />;
              })}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom navigation buttons */}
      <div className="swiper-button-prev"> &lt; </div> {/* Left arrow */}
      <div className="swiper-button-next"> &gt; </div> {/* Right arrow */}
    </div>
  );
};

export default OrderTabPanel;
