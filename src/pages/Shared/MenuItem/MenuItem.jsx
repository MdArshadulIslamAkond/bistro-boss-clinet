

const MenuItem = ({item}) => {
    const {name, recipe, image, price} = item;
    return (
        <div className="flex">
           <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[120px] h-[104px] me-8" src={image} alt="" /> 
           <div>
            <h3 className="uppercase">{name}---------</h3>
            <p>{recipe}</p>
           </div>
           <p className="text-[#BB8506] ms-2">${price}</p>
        </div>
    );
};

export default MenuItem;