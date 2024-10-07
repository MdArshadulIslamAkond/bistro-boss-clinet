import { BiSolidPhoneCall } from "react-icons/bi";
import SectionTaitle from "../../../components/SectionTaitle/SectionTaitle";
import { HiLocationMarker } from "react-icons/hi";
import { FaClipboardList, FaClock } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Reservation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-white m-0 p-4">
      <div className="md:mx-6">
        <SectionTaitle heading="book a table" subHeading="Reservation" />
        <section className="md:ms-36">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="md:flex gap-6">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Date*</span>
                </div>
                <input
                  type="date"
                  {...register("date", { required: "This field is required" })}
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Time*</span>
                </div>
                <input
                  type="time"
                  {...register("time", { required: "This field is required" })}
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Guest*</span>
                </div>

                <select
                  {...register("guest", { required: "This field is required" })}
                  className="select select-bordered"
                >
                  <option disabled selected>
                    1 Person
                  </option>
                  <option> 2 Person</option>
                  <option> 3 Person</option>
                  <option> 4 Person</option>
                  <option> 5 Person</option>
                  <option> 7 Person</option>
                  <option> 8 Person</option>
                  <option> 9 Person</option>
                  <option> 10 Person</option>
                </select>
              </label>
            </div>
            <div className="md:flex gap-6">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Name*</span>
                </div>
                <input
                  type="text"
                  {...register("name", { required: "This field is required" })}
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Phone*</span>
                </div>
                <input
                  type="text"
                  {...register("phone", { required: "This field is required" })}
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Email*</span>
                </div>
                <input
                  type="email"
                  {...register("email", { required: "This field is required" })}
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            <div className="my-8 text-center">
              <button
                type="submit"
                className="btn btn-lg text-white bg-gradient-to-r from-[#835D23] to-[#B58130]  py-4 px-8"
              >
                <span className="text-2xl font-bold"> Book A Table</span>
                <FaClipboardList className="inline-block text-2xl" />
              </button>
            </div>
          </form>
        </section>
        <section>
          <SectionTaitle heading="our loacation" subHeading="Visit Us" />
          <div>
            <div className="flex gap-2 text-white bg-white">
              <div className="bg-[#D1A054] w-1/3 py-4">
                <BiSolidPhoneCall className="border text-2xl mx-auto" />
              </div>
              <div className="bg-[#D1A054] w-1/3 py-4">
                <HiLocationMarker className=" text-2xl mx-auto" />
              </div>
              <div className="bg-[#D1A054] w-1/3 py-4">
                <FaClock className=" text-2xl mx-auto" />
              </div>
            </div>
            <div className="grid md:grid-cols-3 justify-items-center items-center bg-[#F3F3F3] py-6 gap-y-2">
              <div>
                <h6 className="text-2xl">PHONE</h6>
                <p>+38 (012) 34 56 789</p>
              </div>
              <div>
                <h6 className="text-2xl">ADDRESS</h6>
                <p>+38 (012) 34 56 789</p>
              </div>
              <div>
                <h6 className="text-2xl">WORKING HOURS</h6>
                <p>Mon - Fri: 08:00 - 22:00</p>
                <p>Sat - Sun: 10:00 - 23:00</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Reservation;
