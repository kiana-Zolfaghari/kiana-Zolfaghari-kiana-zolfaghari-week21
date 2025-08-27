import Link from "next/link"
import styles from "../styles/Login.module.css"

function Register() {
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
          <p className={styles.p}> ثبت نام در سایت</p>
          <div className={styles.container}>
            <div className={styles.box}>
              {/* <div className={styles.logo}>
                <IoLogoFirebase color="#55A3F0" fontSize="50px" />
              </div> */}
              <p>فرم ثبت نام </p>
              <input
                type="text"
                placeholder="نام کاربری"
                // value={username}
                // onChange={(e) => setusername(e.target.value)}
              />
              <input
                type="text"
                placeholder="رمز عبور"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
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
              <input
                type="text"
                placeholder="تکرار رمز عبور"
                // value={enterPasswordAgain}
                // onChange={(e) => setEnterPasswordAgain(e.target.value)}
              />
              {/* {showRepeatPassword ? (
                <FaEyeSlash
                  className={styles.FaEyeSlash2}
                  onClick={() =>
                    setShowRepeatPassword(
                      (showRepeatPassword) => !showRepeatPassword
                    )
                  }
                />
              ) : (
                <FaEye
                  className={styles.FaEye2}
                  onClick={() =>
                    setShowRepeatPassword(
                      (showRepeatPassword) => !showRepeatPassword
                    )
                  }
                />
              )} */}
              <button type="submite" >
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