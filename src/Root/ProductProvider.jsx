import { createContext, useEffect, useState } from "react";

export const ElectronicsContext = createContext();

export const ElectronicsProvider = ({ children }) => {
  const [electronics, setElectronics] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([]); // ✅ ADD
  const [loading, setLoading] = useState(true);

  const fetchElectronics = async () => {
    try {
      const res = await fetch("/electronics.json");
      const data = await res.json();

      setElectronics(data.electronics);

      const uniqueCategories = Array.from(
        new Map(
          data.electronics.map((item) => [
            item.category,
            item.categoryImage,
          ])
        )
      ).map(([category, categoryImage]) => ({
        category,
        categoryImage,
      }));

      setCategories(uniqueCategories);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch electronics:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchElectronics();
  }, []);
  return (
    <ElectronicsContext.Provider
      value={{
        electronics,
        categories,
        cart,
        setCart,  
        loading,
      }}
    >
      {children}
    </ElectronicsContext.Provider>
  );
};
