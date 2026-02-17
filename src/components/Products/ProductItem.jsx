import { Link } from "react-router";
import defaultImage from "../../assets/default_product.jpg";

const ProductItem = ({ product }) => {
  const image =
    product?.images?.length > 0
      ? product.images[0].image
      : defaultImage;

  return (
    <Link to={`/shop/${product.id}`} className="group">
      <div className="card bg-base-100 w-full max-w-sm shadow-sm hover:shadow-lg transition-shadow duration-300">
        {/* Image */}
        <figure className="w-full aspect-square p-4">
          <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-xl bg-gray-50">
            <img
              src={image}
              alt={product.name}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </figure>

        {/* Body */}
        <div className="card-body items-center text-center">
          <h2 className="card-title line-clamp-2">{product.name}</h2>
          <h3 className="font-bold text-xl text-red-700">${product.price}</h3>
          <p className="line-clamp-3 text-gray-600">{product.description}</p>
          <div className="card-actions mt-2 w-full">
            <button className="btn btn-secondary w-full">Buy Now</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;