import Link from "next/link";
import styles from "../styles/Register.module.css";
import { IoLogoFirebase } from "react-icons/io5";
import { NotificationContext } from "../context/NotificationContext";
import { useContext } from "react";
import { FaEye } from "../../node_modules/react-icons/fa";
import { FaEyeSlash } from "../../node_modules/react-icons/fa";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import api from "@/services/config";
import { useMutation } from "@tanstack/react-query";

function Register() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [enterPasswordAgain, setEnterPasswordAgain] = useState("");
  const { push } = useRouter();
  const { notification, allert, alertType } = useContext(NotificationContext);
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  useEffect(() => {
    if (allert) {
      const timer = setTimeout(() => {
        notification("", "");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [allert]);

  const mutationFn = ({ username, password }) => {
    if (username === "") {
      notification("err", "وارد کردن نام کابری اجباری است");
      return;
    }
    if (
      password !== enterPasswordAgain ||
      password === "" ||
      enterPasswordAgain === ""
    ) {
      notification("err", "رمز عبور وارد شده یکسان نمیباشد");
      return;
    }

    api
      .post("/auth/register", {
        username: username,
        password: password,
      })
      .then((res) => {
        res, push("/login");
      })
      .catch((err) => {
        err, notification("err", "این کاربر قبلا ثبت شده");
      });
  };
  const { isPending, mutate } = useMutation({ mutationFn });

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
          <p>فرم ثبت نام </p>
          <input
            type="text"
            placeholder="نام کاربری"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="رمز عبور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <div className={styles.FaEyeSlash1}>
              <FaEyeSlash
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              />
            </div>
          ) : (
            <div className={styles.FaEye1}>
              <FaEye
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              />
            </div>
          )}
          <input
            type={showRepeatPassword ? "text" : "password"}
            placeholder="تکرار رمز عبور"
            value={enterPasswordAgain}
            onChange={(e) => setEnterPasswordAgain(e.target.value)}
          />

          {showRepeatPassword ? (
            <div className={styles.FaEyeSlash2}>
              <FaEyeSlash
                onClick={() =>
                  setShowRepeatPassword(
                    (showRepeatPassword) => !showRepeatPassword
                  )
                }
              />
            </div>
          ) : (
            <div className={styles.FaEye2}>
              <FaEye
                onClick={() =>
                  setShowRepeatPassword(
                    (showRepeatPassword) => !showRepeatPassword
                  )
                }
              />
            </div>
          )}
          <button
            type="submite"
            disabled={isPending}
            onClick={() => mutate({ username, password })}
          >
            ثبت نام
          </button>
          <Link href="/login" className={styles.link}>
            حساب کاربری دارید؟
          </Link>
        </div>
      </div>
    </>
  );
}

export default Register;
