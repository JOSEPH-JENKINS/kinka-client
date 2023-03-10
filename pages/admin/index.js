import Head from "next/head";
import { motion } from "framer-motion";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../utils/firebaseConfig";
import { useEffect, useRef, useState } from "react";
import Product from "../../components/Admin/Product";
import Modal from "../../components/Modal";
import { motion as m } from "framer-motion";

const Admin = () => {
  const [width, setWidth] = useState(0);
  const [isOpened, setOpen] = useState(false);
  const [activeData, setActiveData] = useState();
  const [data, setData] = useState([]);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    getDocs(collection(database, "products")).then((querySnapshot) => {
      let d = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        d.push({ id: doc.id, data: doc.data() });
      });
      setData(d);
    });
  }, []);
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
    >
      <Head>
        <title>Admin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hidden md:block">
        <div className="w-full h-[50vh] flex justify-center items-center">
          <h1 className="text-7xl relative">Admin Dashboard</h1>
        </div>
        <section className="w-full px-4 py-2 mb-2 flex items-center justify-between">
          <h1 className="text-5xl inline relative">
            Products
            <p className="text-sm font-light absolute top-0 right-0 translate-x-full">
              ({data.length})
            </p>
          </h1>
          <button
            className="px-4 py-2 rounded-md hover:bg-black hover:text-white transition-all"
            onClick={() => setOpen(!isOpened)}
          >
            <h1 className="text-xl font-medium">+ Add Product</h1>
          </button>
        </section>
        <motion.div
          ref={carousel}
          className="carousel cursor-grab overflow-hidden"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel flex"
          >
            {data &&
              data.map((poster) => {
                return (
                  <Product
                    id={poster.id}
                    key={poster.id}
                    title={poster.data.title}
                    price={poster.data.price}
                    isOpened={isOpened}
                    open={setOpen}
                    setActive={setActiveData}
                  />
                );
              })}
          </motion.div>
        </motion.div>
        <div className="w-full h-4"></div>
        <Modal isOpened={isOpened} open={setOpen} active={activeData} />
      </div>
      <div className="md:hidden h-full w-full absolute top-0 left-0 -z-10 flex justify-center items-center">
        <p className="text-xl text-center">
          This page is available on your tablet, iPad, laptops and PCs. Not on
          your mobile ????
        </p>
      </div>
    </m.div>
  );
};

export default Admin;
