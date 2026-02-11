import { FaShoppingCart, FaTags } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { BsShieldLock } from "react-icons/bs";

const Features = () => {
  const features = [
    {
      icon: FaShoppingCart,
      title: "Free Delivery",
      description: "Get your orders delivered at no extra cost, fast and hassle-free.",
    },
    {
      icon: MdVerified,
      title: "Quality Guarantee",
      description: "We ensure top-notch quality for every product you purchase.",
    },
    {
      icon: FaTags,
      title: "Daily Offers",
      description: "Exclusive discounts and special deals available every day.",
    },
    {
      icon: BsShieldLock,
      title: "100% Secure Payment",
      description: "Your payment information is encrypted and completely secure.",
    },
  ];

  return (
    <section className="px-4 md:px-8 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map(({ icon: Icon, title, description }, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition"
          >
            <Icon className="text-red-400 text-4xl mb-3" />
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-500 text-sm mt-1">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;