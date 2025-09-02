import api from "@/services/config";
import { CiSearch } from "../../node_modules/react-icons/ci";
import styles from "../styles/Serach.module.css";
import React, { useState } from "react";

function Search({ setList }) {
  const [value, setVlue] = useState("");

  const serachHandeler = () => {
    api
      .get(`/products?page=1&limit=10&name=${value}`)
      .then((res) => setList(res.data.data));
  };
  return (
    <div>
      <input
        name="search"
        type="text"
        placeholder="جست و جو..."
        className={styles.input}
        value={value}
        onChange={(e) => setVlue(e.target.value)}
      />
      <div className={styles.container}>
        <CiSearch className={styles.icon} onClick={serachHandeler} />
      </div>
    </div>
  );
}

export default Search;
