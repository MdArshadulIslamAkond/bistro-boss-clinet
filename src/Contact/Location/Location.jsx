import { PiPhoneCallFill } from "react-icons/pi";
import SectionTaitle from "../../components/SectionTaitle/SectionTaitle";

const Location = () => {
  return (
    <div>
      <SectionTaitle subHeading={"Visit Us"} heading={"OUR LOCATION"} />
      <div>
        <div className="md:grid grid-cols-3 gap-x-6">
          <div className="card border-none rounded-none w-96 shadow-xl ">
            <figure className="bg-[#D1A054] h-[80px] flex justify-center items-center text-white">
              {/* <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              /> */}
              <PiPhoneCallFill className="text-2xl" />
            </figure>
            <div className="card-body h-[240px] mx-8 mb-8 flex justify-center items-center  bg-[#F3F3F3]">
              <div className="">
                <h2 className="card-title">PHONE</h2>
                <p>+38 (012) 34 56 789</p>
              </div>
            </div>                                                                                                  
          </div>
          <div className="card border-none rounded-none w-96 shadow-xl ">
            <figure className="bg-[#D1A054] h-[80px] flex justify-center items-center text-white">
              {/* <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              /> */}
              <PiPhoneCallFill className="text-2xl" />
            </figure>
            <div className="card-body h-[240px] mx-8 mb-8 flex justify-center items-center  bg-[#F3F3F3]">
              <div className="">
                <h2 className="card-title">ADDRESS</h2>
                <p>+38 (012) 34 56 789</p>
              </div>
            </div>                                                                                                  
          </div>
          <div className="card border-none rounded-none w-96 shadow-xl ">
            <figure className="bg-[#D1A054] h-[80px] flex justify-center items-center text-white">
              {/* <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              /> */}
              <PiPhoneCallFill className="text-2xl" />
            </figure>
            <div className="card-body h-[240px] mx-8 mb-8 flex justify-center items-center  bg-[#F3F3F3]">
              <div className="">
                <h2 className="card-title">WORKING HOURS</h2>
                <p>Mon - Fri: 08:00 - 22:00</p>
                <p>Sat - Sun: 10:00 - 23:00</p>
              </div>
            </div>                                                                                                  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
