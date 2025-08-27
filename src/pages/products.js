import styles from "../styles/products.module.css"

function Products() {
    return (
        <>
          {/* <Search setList={setList} /> */}
          {/* <ShowUsername />
          {allert && (
            <p
              className={
                alertType === "success" ? styles.alertSuccess : styles.alertError
              }
            >
              {allert}
            </p>
          )} */}
          <button  className={styles.logoutBtn}>
            خروج
          </button>
          <p className={styles.p}>مدیریت کالا</p>
          <button className={styles.btn}>
            افزودن محصول
          </button>
          <hr />
          {/* {ids.length > 0 ? (
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
          )} */}
          {/* {showAddDialog && (
            <AddProduct
              setShowAddDialog={setShowAddDialog}
              setRefreshList={setRefreshList}
            />
          )} */}
          <table >
            <thead>
              <tr>
                <th>ردیف</th>
                <th>نام کالا</th>
                <th>موجودی</th>
                <th>قیمت</th>
                <th>شناسه کالا</th>
                <th>عملگرها</th>
              </tr>
            </thead>
            {/* {list.length > 0 ? (
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
            )} */}
          </table>
          {/* <Paginations setPage={setPage} /> */}
        </>
      );
}

export default Products;