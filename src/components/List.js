import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";
import styles from "../styles/List.module.css";
// import image from "../assets/Close.png";
import { useContext } from "react";
import { ProductContext } from "../context/Product";
import { NotificationContext } from "../context/NotificationContext";
import api from "../services/config";

function List({ product, setRefreshList, setShowAddDialog, page, index }) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const { notification } = useContext(NotificationContext);
  const { setName, setPrice, setQuantity, setIsEdit, setId, setIds } =
    useContext(ProductContext);

  const deleteHandeler = (id) => {
    api
      .delete(`/products/${id}`)
      .then(() => {
        setRefreshList((refreshList) => !refreshList);
        setShowDeleteDialog(false);
        notification("success", "محصول با موفقیت حذف شد");
      })
      .catch((err) => {
        err, notification("err", "مشکلی پیش آمده");
        setShowDeleteDialog(false);
      });
  };

  const showEdit = (id) => {
    setShowAddDialog(true);
    setIsEdit(true);
    api.get(`/products/${id}`).then((res) => {
      setName(res.data.name);
      setPrice(res.data.price);
      setQuantity(res.data.quantity);
      setId(id);
    });
  };

  return (
    <tr className={styles.tr}>
      <td className={styles.index}>{index + 1 + (page - 1) * 10}</td>
      <td className={styles.td}>
        <div className={styles.input}>
          <input
            type="checkbox"
            className={styles.checkbox}
            onChange={(e) => {
              const checked = e.target.checked;
              setIds((ids) => {
                if (checked) {
                  return [...ids, product.id];
                } else {
                  return ids.filter((id) => id !== product.id);
                }
              });
            }}
          />
        </div>
        {product.name === "" ? (
          <p className={styles.noData}>ثبت نشده</p>
        ) : (
          product.name
        )}
      </td>
      <td className={styles.td}>
        {product.quantity === "" ? (
          <p className={styles.noData}>ثبت نشده</p>
        ) : (
          product.quantity
        )}
      </td>
      <td className={styles.td}>
        {product.price === "" ? (
          <p className={styles.noData}>ثبت نشده</p>
        ) : (
          Number(product.price).toLocaleString()
        )}
      </td>
      <td className={styles.id}>{product.id}</td>
      <td className={styles.td}>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <FiEdit
            className={styles.edit}
            onClick={() => showEdit(product.id)}
          />
          <MdDeleteOutline
            className={styles.delete}
            onClick={() => setShowDeleteDialog(true)}
          />
        </div>
        {showDeleteDialog && (
          <div className={styles.dialogOverlay}>
            <div className={styles.dialog}>
              <div className={styles.image}>
                {/* <img src={image} alt="image" className={styles.image} /> */}
              </div>
              <p>آیا از حذف این محصول مطمئنید؟</p>
              <button
                onClick={() => deleteHandeler(product.id)}
                className={styles.deleteDialog}
              >
                حذف
              </button>
              <button
                onClick={() => setShowDeleteDialog(false)}
                className={styles.cancel}
              >
                انصراف
              </button>
            </div>
          </div>
        )}
      </td>
    </tr>
  );
}

export default List;
