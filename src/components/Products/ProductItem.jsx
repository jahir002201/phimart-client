import defaultImage from "../../assets/default_product.jpg";

const ProductItem = ({ product }) => {
  const image =
    product?.images?.length > 0
      ? product.images[0].image
      : defaultImage;

  return (
    <div className="card bg-base-100 w-full max-w-sm shadow-sm">
      {/* Image */}
      <figure className="px-4 pt-4">
        <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 flex items-center justify-center overflow-hidden rounded-xl">
          <img
            src={image}
            alt={product.name}
            className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>
      </figure>

      {/* Body */}
      <div className="card-body items-center text-center">
        <h2 className="card-title line-clamp-2">{product.name}</h2>
        <h3 className="font-bold text-xl text-red-700">${product.price}</h3>
        <p className="line-clamp-3 text-gray-600">{product.description}</p>
        <div className="card-actions mt-2">
          <button className="btn btn-secondary w-full">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;