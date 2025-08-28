import Link from "next/link";
import styles from "../styles/Login.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import api from "@/services/config";
import { IoLogoFirebase } from "react-icons/io5";
import { FaEye } from "../../node_modules/react-icons/fa";
import { FaEyeSlash } from "../../node_modules/react-icons/fa";
import { NotificationContext } from "../context/NotificationContext";
import { useContext } from "react";

function Login() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const { notification, allert, alertType } = useContext(NotificationContext);
  const [massage, setMassage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    if (allert) {
      const timer = setTimeout(() => {
        notification("", "");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [allert]);

  const loginHandeler = () => {
    if (username === "") {
      setMassage("نام  کاربری را وارد کنید!");
      return;
    }
    api
      .post("/auth/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("token", `${res.data.token}`);
        localStorage.setItem("username", `${username}`);
        push("/products");
      })
      .catch((err) => {
        err, notification("err", "نام کاربری یا رمز عبور اشتباه است");
      });
  };
  return (
    <>
      {allert && (
        <p
          className={
            alertType === "success" ? styles.alertSuccess : styles.alertError
          }
        >
          {allert}
        </p>
      )}
      <h1 className={styles.p}>به سایت ما خوش آمدین</h1>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.logo}>
            <IoLogoFirebase color="#55A3F0" fontSize="50px" />
          </div>
          <p>فرم ورود </p>
          <input
            type="text"
            placeholder="نام کاربری"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
          {massage && <p className={styles.massage}>{massage}</p>}
          <input
            type={showPassword ? "text" : "password"}
            placeholder="رمز عبور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <div className={styles.FaEyeSlash3}>
              <FaEyeSlash
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              />
            </div>
          ) : (
            <div className={styles.FaEye3}>
              <FaEye
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              />
            </div>
          )}
          <button type="submite" onClick={loginHandeler}>
            ورود
          </button>
          <Link href="/register" className={styles.link}>
            ایجاد حساب کاربری!
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
