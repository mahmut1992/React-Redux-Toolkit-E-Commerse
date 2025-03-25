import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartTotel } from "../redux/cartSlice";
import CartComp from "../components/CartComp";

const Cart = () => {
  const { carts, totalAmount, itemCount } = useSelector((store) => store.carts);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotel());
  }, [itemCount]);

  return (
    <div>
      {carts?.length > 0 ? (
        <div>
          {carts?.map((cart, i) => (
            <CartComp key={i} cart={cart} />
          ))}
          <div>
            <h1 className="text-4xl my-10 font-bold">
              TOPLAM TUTAR :{" "}
              <span className="text-red-400">{totalAmount.toFixed(2)} ₺ </span>
            </h1>
          </div>
        </div>
      ) : (
        <div className="text-center mt-20">
          <h1 className="text-3xl">Sepetinizde ürün Bulunmamaktadır</h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
