import { Parallax } from 'react-parallax';

const Cover = ({ img, title, details }) => {
  return (
    <Parallax
      blur={{ min: -30, max: 30 }}
      bgImage={img}
      bgImageAlt="bgImg"
      strength={-200}
    >
      <div className="hero h-[36rem]">
        <div className="bg-black bg-opacity-50 rounded">
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-3xl px-10 py-4 space-y-5">
              <h1 className="text-5xl font-bold uppercase">{title}</h1>
              <p className="">{details}</p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>

  );
};

export default Cover;