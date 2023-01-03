import Layout from "../components/Layout";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence initial={false} mode={"wait"}>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
