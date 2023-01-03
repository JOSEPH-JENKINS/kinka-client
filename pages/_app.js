import Layout from "../components/Layout";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence initial={false} mode={"wait"}>
      <Layout>
        <Component key={router.pathname} {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;
