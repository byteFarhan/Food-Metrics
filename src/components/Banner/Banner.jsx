const Banner = () => {
  return (
    <>
      <section
        id="banner"
        className="hero bg-[linear-gradient(90deg,rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('/bannerr.jpg')] py-20 md:py-32 rounded-xl bg-center bg-cover"
        // style={{
        //   backgroundImage: "url(../../assets/banner.jpg)",
        // }}
      >
        <div className="px-10 mx-auto space-y-6 leading-normal text-center text-white md:px-16 lg:px-0 lg:w-2/3">
          <h2 className="text-5xl font-bold leading-normal">
            Discover an exceptional cooking class tailored for you!
          </h2>
          <p className="text-lg leading-normal">
            Savor Culinary Delights: Explore Our Delectable Menu! Indulge in
            Exquisite Flavors & Irresistible Creations. Taste the Difference
            Today. Discover Gourmet Delights Await!
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
      </section>
    </>
  );
};

export default Banner;
