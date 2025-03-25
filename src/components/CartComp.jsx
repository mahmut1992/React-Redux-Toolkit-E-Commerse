import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between">
      <img
        className="w-[150px] h-[150px] object-cover  my-5"
        src={cart.image}
        alt=""
      />
      <div>
        <p className="font-semibold text-2xl max-w-[250px] ">{cart?.title} </p>
        <p>{cart?.description} </p>
      </div>
      <div className="flex-col">
        <p className="text-2xl font-bold">{cart?.price} ₺</p>
        <span className="text-xl">{cart?.quantity} adet</span>
      </div>
      <div>
        <button
          onClick={() => dispatch(removeFromCart(cart?.id))}
          className="bg-red-500 text-white w-[150px] h-12 flex items-center justify-center rounded-lg text-xl cursor-pointer"
        >
          Ürünü Sil
        </button>
      </div>
    </div>
  );
};

export default CartComp;
