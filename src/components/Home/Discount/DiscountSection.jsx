import bgImg from "../../../assets/images/banner-image-bg-1.jpg";
import bannerImg from "../../../assets/images/banner-image3.png";
import DiscountTimer from "./DiscountTimer";

const DiscountSection = () => {
  return (
    <section
      className="w-full h-150 bg-cover bg-center flex justify-center items-center px-4 md:px-8"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="container w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
        {/* Left Image */}
        <div className="max-w-md md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            className="w-2/3 sm:w-1/2 md:w-full object-contain"
            src={bannerImg}
            alt="Discount Banner"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            30% Discount On All Items. Hurry Up !!!
          </h1>

          {/* Countdown Timer */}
          <DiscountTimer />

          <button className="btn btn-secondary px-6 py-3 rounded-full shadow-md mt-4">
            Shop Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;