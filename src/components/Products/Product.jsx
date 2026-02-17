import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ErroAlert from "../ErroAlert";
import apiClient from "../../services/api-client";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);

    apiClient
      .get("/products")
      .then((res) => setProducts(res.data.results || []))
      .catch(() => setError("Failed to load products"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="mx-auto py-16 bg-gray-50">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 mb-6 gap-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
          Trending Products
        </h2>
        <a
          href="#"
          className="btn btn-secondary px-6 py-3 rounded-full text-lg whitespace-nowrap"
        >
          View All
        </a>
      </div>

      {/* Loading */}
      {isLoading && (
        <div className="flex justify-center py-10">
          <span className="loading loading-spinner loading-xl text-secondary"></span>
        </div>
      )}

      {/* Error */}
      {!isLoading && error && <ErroAlert error={error} />}

      {/* Products */}
      {!isLoading && !error && products.length > 0 && (
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          navigation
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 1.5 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="mt-6 px-4 sm:px-6 lg:px-8"
        >
          {products.map((product) => (
            <SwiperSlide
              key={product.id}
              className="flex justify-center"
            >
              <ProductItem product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* No Products */}
      {!isLoading && !error && products.length === 0 && (
        <p className="text-center text-gray-500 mt-6">
          No Products Available
        </p>
      )}
    </section>
  );
};

export default Product;