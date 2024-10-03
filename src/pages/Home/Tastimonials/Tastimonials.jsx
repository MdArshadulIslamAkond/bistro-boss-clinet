import SectionTaitle from "../../../components/SectionTaitle/SectionTaitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "./styles.css";
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaQuoteLeft } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Tastimonials = () => {
  const [reviews, setReviews] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic
      .get("/reviews")
      .then((res) => setReviews(res.data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <section className="my-8">
      <SectionTaitle
        subHeading={"What Our Clients Say"}
        heading={"TESTIMONIALS"}
      />
      <div className="mx-[200px] relative border">
        <Swiper
          // navigation={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="mx-24 my-16 flex flex-col items-center">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <FaQuoteLeft className="text-6xl mt-4" />
                <p className="py-8">{review.details}</p>
                <h3 className="text-2xl text-[#CD9003]">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom navigation buttons */}
        <div className="swiper-button-prev"> &lt; </div> 
        <div className="swiper-button-next"> &gt; </div> 
      </div>
    </section>
  );
};

export default Tastimonials;
