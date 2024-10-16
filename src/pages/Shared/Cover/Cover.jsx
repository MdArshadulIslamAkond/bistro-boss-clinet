import { Parallax } from "react-parallax";

const Cover = ({ img, title, height, color = false }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      {/* <div className={`hero min-h-[550px]`} > */}
      <div className={`hero min-h-[${height}px]`} >
        <div className="hero-overlay bg-opacity-0"></div>
        
        <div className={`hero-content w-4/5 h-[300px] text-center ${color ? 'bg-white text-black' :' bg-[rgba(21,21,21,.6)] text-white' }`}>
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
      {/* <div style={{ height: "200px" }} /> */}
    </Parallax>
  );
};

export default Cover;
