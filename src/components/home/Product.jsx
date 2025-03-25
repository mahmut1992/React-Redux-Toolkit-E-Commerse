import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/products/${product?.id}`)}
      className="w-[420px] mb-5 mx-5 p-3 border border-gray-300 rounded-lg relative cursor-pointer"
    >
      <p className="text-xl absolute font-bold rounded-lg top-0 right-0 bg-black text-white p-1 m-1">
        {product?.price} <span className="text-sm">₺</span>{" "}
      </p>
      <img
        src={product?.image}
        alt=""
        className="w-[200px] h-[200px] object-cover m-auto"
      />
      <p className="text-center px-3 mt-3 text-xl">{product?.title} </p>
    </div>
  );
};

export default Product;
