export const Author = () => {
  return (
    <>
      <Hero />
    </>
  );
};

export const Hero = () => {
  return (
    <div className="px-4 container-fluid homeHeroBg d-flex pt-3 pb-4 align-items-center">
      <div className="gradientBg overlayBg"></div>
      <div className="row justify-content-start">
        <div className="col-lg-8 col-md-8 col-sm-12 px-lg-5">
          <h2 className="d-none d-lg-block d-md-none d-sm-none d-xs-none ms-5 heroTextColor homeHeroText">
            Lorem ipsum dolor sit amet consectetur adipiscing
          </h2>
          <h3 className="d-xs-block d-sm-block d-md-block d-lg-none heroTextColor homeHeroTextTwo">
            Lorem ipsum dolor sit amet consectetur adipiscing
          </h3>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipiscing lorem ipsum dolor
            sit amet consectetur adipiscing
          </p>
        </div>
      </div>
    </div>
  );
};
