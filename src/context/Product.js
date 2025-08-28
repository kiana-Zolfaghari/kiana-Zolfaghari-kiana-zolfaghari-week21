import { createContext, useState } from "react";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(null);
  const [ids, setIds] = useState([]);

  return (
    <ProductContext.Provider
      value={{
        name,
        setName,
        price,
        setPrice,
        quantity,
        setQuantity,
        isEdit,
        setIsEdit,
        id,
        setId,
        ids,
        setIds,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
