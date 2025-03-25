import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };
  const increment = () => {
    if (quantity < productDetail?.rating?.count) setQuantity(quantity + 1);
  };
  const addBasket = () => {
    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        price: productDetail?.price,
        quantity: quantity,
      })
    );
  };
  return (
    <div className="flex gap-10 my-10">
      <img
        className="w-[500px] h-[500px] object-cover "
        src={productDetail?.image}
        alt=""
      />
      <div>
        <p className="text-4xl font-bold">{productDetail?.title} </p>
        <p className="my-2 text-2xl">{productDetail?.description}</p>
        <p className="my-2 text-xl text-red-500">
          Rating : {productDetail?.rating?.rate}{" "}
        </p>
        <p className="my-2 text-xl text-red-500">
          Count : {productDetail?.rating?.count}{" "}
        </p>
        <p className="text-4xl my-2 font-bold">
          Price : {productDetail?.price} ₺
        </p>
        <div className="flex items-center gap-5">
          <span
            onClick={decrement}
            className="text-4xl font-bold cursor-pointer"
          >
            -
          </span>
          <span className="text-4xl font-bold">{quantity} </span>
          <span
            onClick={increment}
            className="text-4xl font-bold cursor-pointer"
          >
            +
          </span>
        </div>
        <div>
          <button
            onClick={addBasket}
            className="w-[200px] h-16 flex items-center justify-center bg-gray-200 cursor-pointer my-4 rounded-lg text-xl hover:bg-gray-500 hover:text-white"
          >
            Sepete ekle
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
