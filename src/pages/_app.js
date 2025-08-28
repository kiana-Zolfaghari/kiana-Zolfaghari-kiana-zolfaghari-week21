import { NotificationProvider } from "@/context/NotificationContext";
import { ProductProvider } from "@/context/Product";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NotificationProvider>
        <ProductProvider>
          <Component {...pageProps} />
        </ProductProvider>
      </NotificationProvider>
    </>
  );
}
