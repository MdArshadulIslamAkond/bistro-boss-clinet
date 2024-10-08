import { useState } from "react";
import SectionTaitle from "../../components/SectionTaitle/SectionTaitle";
import ReCAPTCHA from "react-google-recaptcha";
import { FaPaperPlane } from "react-icons/fa";
const ContactForm = () => {
  const [capVal, setCapVal] = useState(null);
  const onChange = (value) => {
    // console.log("Captcha value:", value);
    setCapVal(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send the form data to the server
    // console.log("Captcha");
    setCapVal(null);
  };
  return (
    <div className="mb-[700px]">
      <SectionTaitle
        subHeading={"Send Us a Message"}
        heading={"CONTACT FORM"}
      />
      <div className="bg-[#F3F3F3]">
        <form onSubmit={handleSubmit} className="p-20">
          <div className="md:flex gap-x-6">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Name*</span>
              </div>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Email*</span>
              </div>
              <input
                type="text"
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Phone**</span>
              </div>
              <input
                type="number"
                placeholder="Enter your phone number"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="mt-6">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Message*</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="Write your message here"
              ></textarea>
            </label>
          </div>
          <div className="mt-9">
            <ReCAPTCHA
              sitekey="6Lcnn1oqAAAAANHyzfVTQvEOuxJVAsa6sbkmv4mD"
              onChange={onChange}
            />
            ,
          </div>
          <div className="my-36 text-center">
            <button
              disabled={!capVal}
              type="submit"
              className="btn btn-lg text-white bg-gradient-to-r from-[#835D23] to-[#B58130] py-4 px-8"
            >
              <span className="text-2xl font-bold"> Send Message</span>
              <FaPaperPlane className="inline-block text-2xl" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
