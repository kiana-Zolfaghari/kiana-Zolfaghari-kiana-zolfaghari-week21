import { ProductContext } from "../context/Product";
import { NotificationContext } from "../context/NotificationContext";
import { useContext } from "react";
import styles from "../styles/AddProduct.module.css";
import api from "@/services/config";

function AddProduct({ setShowAddDialog, setRefreshList }) {
  const {
    name,
    setName,
    price,
    setPrice,
    quantity,
    setQuantity,
    isEdit,
    setIsEdit,
    id,
  } = useContext(ProductContext);

  const { notification } = useContext(NotificationContext);

  const addProductHandler = () => {
    api
      .post("/products", {
        name: name,
        price: price,
        quantity: quantity,
      })
      .then((res) => {
        res.data, setRefreshList((refreshList) => !refreshList);
        setShowAddDialog(false);
        setName(""), setPrice(""), setQuantity("");
        notification("success", "محصول با موفقیت ثبت شد");
      })
      .catch((err) => {
        err, notification("err", "مشکلی پیش آمده");
      });
  };

  const editHandeler = (id) => {
    api
      .put(`products/${id}`, {
        name: name,
        price: price,
        quantity: quantity,
      })
      .then((res) => {
        res, setRefreshList((refreshList) => !refreshList);
        setShowAddDialog(false);
        setIsEdit(false);
        setName(""), setPrice(""), setQuantity("");
        notification("success", " محصول با موفقیت ویرایش شد");
      })
      .catch((err) => {
        err, notification("err", "مشکلی پیش آمده");
      });
  };

  return (
    <div className={styles.dialogOverlay}>
      <div className={styles.dialog}>
        {isEdit ? <h1>ویرایش محصول </h1> : <h1>ایجاد محصول جدید</h1>}
        <div className={styles.inputGroup}>
          <label>نام کالا</label>
          <input
            type="text"
            value={name}
            placeholder="نام کالا"
            onChange={(e) => setName(e.target.value)}
          />
          <label>تعداد موجودی</label>
          <input
            type="number"
            value={quantity}
            placeholder="تعداد"
            onChange={(e) => setQuantity(e.target.value)}
          />
          <label>قیمت</label>
          <input
            type="number"
            value={price}
            placeholder=" قیمت"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          {isEdit ? (
            <button onClick={() => editHandeler(id)}> ویرایش</button>
          ) : (
            <button onClick={addProductHandler}>ایجاد محصول</button>
          )}
          <button
            onClick={() => {
              setShowAddDialog(false),
                setIsEdit(false),
                setName(""),
                setPrice(""),
                setQuantity("");
            }}
          >
            انصراف
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
