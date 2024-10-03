import SectionTaitle from "../../../components/SectionTaitle/SectionTaitle";
import featured from "../../../assets/home/featured.jpg";
import "./featured.css";
const Featured = () => {
  return (
    // bg-[url('/src/assets/home/featured.jpg')]
    // css styles
    // featured-item
    <div className="pt-8 my-10">
        <div className="featured-item bg-fixed text-white">
      <div className="bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
        <SectionTaitle subHeading={"Check it out"} heading={"FROM OUR MENU"} />
        <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
          <div>
            <img src={featured} alt="" />
          </div>
          <div className="md:ml-10">
            <div className="mb-6">
              <p>March 20, 2023</p>
              <p className="uppercase">WHERE CAN I GET SOME?</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </p>
            </div>
            <button className="btn btn-outline border-0 border-b-4 border-white text-white">Order Now</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Featured;
