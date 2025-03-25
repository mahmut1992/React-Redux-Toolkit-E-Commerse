import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { SlBasketLoaded } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotel } from "../../../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { setSearchTerm } from "../../../redux/searchSlice";

const NavbarRight = () => {
  const dispatch = useDispatch();
  const { itemCount } = useSelector((store) => store.carts);
  const { searchTerm } = useSelector((store) => store.search);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value)); // Redux'a arama terimini kaydediyoruz
  };

  useEffect(() => {
    dispatch(getCartTotel());
  }, []);

  return (
    <div className="flex items-center gap-8">
      <div className="flex items-center  p-3 rounded-full bg-gray-200">
        <input
          onChange={handleSearch}
          className="bg-gray-200 outline-none "
          type="text"
          placeholder="Arama yapınız..."
          value={searchTerm}
        />
        <BiSearch size={25} />
      </div>
      <AiOutlineHeart size={25} />
      <div onClick={() => navigate("cart")} className="relative">
        <div className="absolute -top-3 -right-3 text-white rounded-full w-5 h-5 bg-red-500 flex items-center justify-center ">
          {itemCount}
        </div>
        <SlBasketLoaded size={25} />
      </div>
    </div>
  );
};

export default NavbarRight;
