import banner from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <>
      <div
        className="hero bg-[linear-gradient(90deg,rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('./bannerr.jpg')] py-20 md:py-32 rounded-xl bg-center bg-cover"
        // style={{
        //   backgroundImage: "url(../../assets/banner.jpg)",
        // }}
      >
        <div className="px-10 mx-auto space-y-6 leading-normal text-center text-white md:px-16 lg:px-0 lg:w-2/3">
          <h2 className="text-5xl font-bold leading-normal">
            Discover an exceptional cooking class tailored for you!
          </h2>
          <p className="text-lg leading-normal">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
            Database and solve 500+ coding problems to become an exceptionally
            well world-class Programmer.
          </p>
          <div className="space-x-5">
            <button className="btn rounded-full bg-[#0BE58A] hover:bg-[#0BE58A] border-none font-bold">
              Explore Now
            </button>
            <button className="text-white border-2 border-white rounded-full btn btn-outline hover:bg-transparent hover:border-white">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
