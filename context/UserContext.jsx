"use client";
import { CheckUserLoggedIn } from "@/lib/utils/authentication";
import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export const UserContext = createContext(null);
export const useUserContext = () => useContext(UserContext);

const UserContextProvider = ({ children }) => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [cartProducts, setCartProducts] = useState([]);
  const [isCartProductsLoading, setIsCartProductsLoading] = useState(true);

  useEffect(() => {
    CheckUserLoggedIn()
      .then((result) => {
        setIsLoggedin(result.isLoggedin);
        setUser(result.user);
      })
      .catch((error) => {
        console.error("Error checking user login status:", error);
        setIsLoggedin(false);
        setUser(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (user != null) {
      const cart = user.cart || [];
      cart.forEach(async (elementId) => {
        let product = await findCartItems(elementId);
        if (product) {
          setCartProducts((prevProducts) => [...prevProducts, product]);
        } else {
          setCartProducts((prevProducts) => [
            ...prevProducts,
            { id: elementId, name: "Unknown Product" },
          ]);
        }
      });

      setIsCartProductsLoading(false);
    }
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        isLoggedin,
        setIsLoggedin,
        user,
        setUser,
        isLoading,
        setIsLoading,
        cartProducts,
        setCartProducts,
        isCartProductsLoading,
        setIsCartProductsLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
