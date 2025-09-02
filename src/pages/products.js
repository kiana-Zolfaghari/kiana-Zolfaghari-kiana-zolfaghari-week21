import styles from "../styles/products.module.css";
import React, { useState, useEffect, useRef } from "react";
import { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";
import Search from "../components/Search";
import api from "../services/config";
import ShowUsername from "@/components/ShowUserName";
import List from "../components/List";
import { useRouter } from "next/router";
import AddProduct from "@/components/AddProducts";
import { ProductContext } from "@/context/Product";
import GroupDelete1 from "@/components/GroupDelete";
import Paginations from "@/components/Pagination";

function Products() {
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showGroupDeleteDialog, setShowGroupDeleteDialog] = useState(false);
  const [list, setList] = useState([]);
  const [refreshList, setRefreshList] = useState(false);
  const [page, setPage] = useState(1);
  const router = useRouter();
  const { ids } = useContext(ProductContext);
  const { allert, alertType, notification } = useContext(NotificationContext);
  const [totalPage, setTotalPage] = useState();

  useEffect(() => {
    if (allert) {
      const timer = setTimeout(() => {
        notification("", "");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [allert]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }
  }, []);

  useEffect(() => {
    api
      .get(`/products?page=${page}&limit=10`)
      .then((res) => {
        setList(res.data.data), setTotalPage(res.data.totalPages);
      })
      .catch((err) => {
        err, setList([]);
      });
  }, [refreshList, page]);

  const logoutHandeler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    router.push("/login");
  };

  return (
    <div>
      <Search setList={setList} />
      <ShowUsername />
      {allert && (
        <p
          className={
            alertType === "success" ? styles.alertSuccess : styles.alertError
          }
        >
          {allert}
        </p>
      )}
      <div className={styles.logout}>
        <button className={styles.logoutBtn} onClick={logoutHandeler}>
          خروج
        </button>
      </div>
      <p className={styles.p}>مدیریت کالا</p>
      <div className={styles.head}>
        <button className={styles.btn} onClick={() => setShowAddDialog(true)}>
          افزودن محصول
        </button>
      </div>
      <hr />
      {ids.length > 0 ? (
        <button
          className={styles.deleteGroup}
          onClick={() => setShowGroupDeleteDialog(true)}
        >
          حذف گزینه های انتخاب شده
        </button>
      ) : null}
      {showGroupDeleteDialog && (
        <GroupDelete1
          setShowGroupDeleteDialog={setShowGroupDeleteDialog}
          setRefreshList={setRefreshList}
        />
      )}
      {showAddDialog && (
        <AddProduct
          setShowAddDialog={setShowAddDialog}
          setRefreshList={setRefreshList}
        />
      )}
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.tr}>
              <th className={styles.th}>ردیف</th>
              <th className={styles.th}>نام کالا</th>
              <th className={styles.th}>موجودی</th>
              <th className={styles.th}>قیمت</th>
              <th className={styles.th}>شناسه کالا</th>
              <th className={styles.th}>عملگرها</th>
            </tr>
          </thead>
          {list.length > 0 ? (
            <tbody>
              {list.map((product, index) => (
                <List
                  key={product.id}
                  product={product}
                  index={index}
                  setRefreshList={setRefreshList}
                  setShowAddDialog={setShowAddDialog}
                  page={page}
                />
              ))}
            </tbody>
          ) : (
            <tfoot>
              <tr>
                <td className={styles.noMoreProduct} colSpan="5">
                  هیچ محصولی موجود نیست
                </td>
              </tr>
            </tfoot>
          )}
        </table>
      </div>
      <Paginations setPage={setPage} totalPage={totalPage} />
    </div>
  );
}

export default Products;
