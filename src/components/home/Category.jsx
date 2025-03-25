import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/actions/act.on";

const Category = ({ setCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((store) => store.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <div className="min-w-[25%] bg-gray-100 p-4 rounded-lg max-h-screen">
      <h3 className="border-b border-gray-300 pb-1 text-xl font-bold text-center">
        Kategori
      </h3>
      {categories?.map((category, index) => (
        <div
          onClick={() => setCategory(category)}
          className="text-lg text-nowrap cursor-pointer hover:bg-gray-200 p-2 rounded-lg text-center"
          key={index}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Category;
