import BgImg from "../../../assets/images/banner-image-bg.jpg";

const CarouselSlide = ({ title, subtitle, image }) => {
  return (
    <section
      className="w-full h-162.5 bg-cover bg-center flex items-center px-4 md:px-8"
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Left content */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            {title}
          </h1>
          <p className="text-gray-600 my-4">
            {subtitle}
          </p>
          <button className="btn btn-secondary px-6 py-3 rounded-full shadow-md">
            Shop Product
          </button>
        </div>

        {/* Right image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={image}
            alt={title}
            className="max-w-full md:max-w-md drop-shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default CarouselSlide;