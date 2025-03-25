import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");

  if (!cart) {
    return []; // Eğer localStorage boşsa, boş bir dizi döndür
  }

  try {
    return JSON.parse(cart);
  } catch (error) {
    console.error("LocalStorage JSON parse hatası:", error);
    return []; // JSON parse hatası varsa, varsayılan olarak boş dizi döndür
  }
};

const storeInLocalstorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};
const initialState = {
  carts: fetchFromLocalStorage(),
  itemCount: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isItemCart = state.carts.find(
        (cart) => cart.id === action.payload.id
      );
      if (isItemCart) {
        const tempCart = state.carts.map((cart) => {
          if (cart.id === action.payload.id) {
            let tempQuantity = cart.quantity + action.payload.quantity;
            let tempTotalPrice = tempQuantity * cart.price;
            return {
              ...cart,
              quantity: tempQuantity,
              totalPrice: tempTotalPrice,
            };
          } else {
            return cart;
          }
        });
        state.carts = tempCart;
        storeInLocalstorage(state.carts);
      } else {
        const newItem = {
          ...action.payload,
          totalPrice: action.payload.price * action.payload.quantity,
        };
        state.carts.push(newItem);
        storeInLocalstorage(state.carts);
      }
    },
    removeFromCart: (state, action) => {
      const tempCart = state.carts.filter((cart) => cart.id !== action.payload);
      state.carts = tempCart;
      storeInLocalstorage(state.carts);
    },
    clearCart: (state) => {
      state.carts = [];
      storeInLocalstorage(state.carts);
    },
    getCartTotel: (state) => {
      state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
        return (cartTotal += cartItem.totalPrice);
      }, 0);
      state.itemCount = state.carts.length;
    },
  },
});
export default cartSlice.reducer;

export const { addToCart, removeFromCart, clearCart, getCartTotel } =
  cartSlice.actions;
