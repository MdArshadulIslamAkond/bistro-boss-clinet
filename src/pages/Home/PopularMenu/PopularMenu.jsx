import SectionTaitle from "../../../components/SectionTaitle/SectionTaitle";
import MenuItem from "../../Shared/menuItem/MenuItem";
import useMenu from "../../../hooks/useMenu/useMenu";
import { useState } from "react";

const PopularMenu = () => {
  const [menu] = useMenu();
  const [number, setNumber] = useState(6);
//   const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-6">
      <SectionTaitle subHeading={"Check it out"} heading={"FROM OUR MENU"} />
      <div className="grid md:grid-cols-2 gap-6 ms-5 me-5">
        {menu.slice(0, number).map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center">
        <button onClick={()=>{
            if(number < menu.length ){
                setNumber(menu.length);
            }else{
                setNumber(6);
             }
        }} className="btn btn-outline border-0 border-b-4 mt-4">
          {
            number < menu.length
             ? "View Full Menu"
              : "View Menu Less"
          }
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
