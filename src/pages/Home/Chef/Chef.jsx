import FoodCard from "../../../components/FoodCard/FoodCard";
import SectionTaitle from "../../../components/SectionTaitle/SectionTaitle";
import useMenu from "../../../hooks/useMenu/useMenu";

const Chef = () => {
  const [menu] = useMenu();
  return (
    <div>
      <SectionTaitle
        subHeading={"From 11:00am to 10:00pm"}
        heading={"ORDER ONLINE"}
      />

      <div className="grid md:grid-cols-3 gap-6">
        {menu.slice(0, 3).map((item) => {
          return <FoodCard key={item._id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Chef;
