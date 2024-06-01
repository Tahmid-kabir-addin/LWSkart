import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import StoreProvider from "../redux/StoreProvider";

export default function RootLayout({ children, params: { lang } }) {
  return (
    <>
      <StoreProvider>
        <Header lang={lang} />
        <Navbar lang={lang} />
        {children}
      </StoreProvider>
      <Footer lang={lang} />
      <ToastContainer />
    </>
  );
}
