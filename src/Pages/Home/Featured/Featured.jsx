import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'

const Featured = () => {
  return (
    <section className="my-10 bg-fixed bg-featuredImg bg-cover bg-center bg-no-repeat text-white  ">
      <div className="bg-black bg-opacity-30 md:px-36 md:py-20 space-y-10">
        <SectionTitle heading={'featured item'} subHeading={'Check it out'} />
        <div className="md:flex justify-center items-center gap-10 ">
          <div>
            <img src={featuredImg} alt="" className="rounded" />
          </div>
          <div className="space-y-3">
            <h2>March 20, 2023</h2>
            <h2>WHERE CAN I GET SOME?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
            <button className="btn btn-outline btn-sm border-0 border-b-2 text-yellow-700 uppercase font-bold tracking-widest">Order now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;