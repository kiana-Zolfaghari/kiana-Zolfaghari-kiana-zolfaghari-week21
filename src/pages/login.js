import Link from "next/link"
import styles from "../styles/Login.module.css"

function Login() {
    return (
        <>
        {/* {allert && (
          <p
            className={
              alertType === "success" ? styles.alertSuccess : styles.alertError
            }
          >
            {allert}
          </p>
        )} */}
        <h1 className={styles.p}>به سایت ما خوش آمدین</h1>
        <div className={styles.container}>
          <div className={styles.box}>
            {/* <div className={styles.logo}>
              <IoLogoFirebase color="#55A3F0" fontSize="50px" />
            </div> */}
            <p>فرم ورود </p>
            <input
              type="text"
              placeholder="نام کاربری"
            //   value={username}
            //   onChange={(e) => setusername(e.target.value)}
            />
            {/* {massage && <p className={styles.massage}>{massage}</p>} */}
            <input
              type="text"
              placeholder="رمز عبور"
            //   value={password}
            //   onChange={(e) => setPassword(e.target.value)}
            />
            {/* {showPassword ? (
              <FaEyeSlash
                className={styles.FaEyeSlash1}
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              />
            ) : (
              <FaEye
                className={styles.FaEye1}
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              />
            )} */}
            <button type="submite" >
              ورود
            </button>
            <Link href="/register" className={styles.link}>
              ایجاد حساب کاربری!
            </Link>
          </div>
        </div>
      </>
    )
}

export default Login