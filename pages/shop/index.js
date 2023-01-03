import Head from "next/head";
import Item from "../../components/Item";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../utils/firebaseConfig";
import { useEffect, useState } from "react";
import { motion as m } from "framer-motion";

const Shop = () => {
  const [data, setData] = useState([]);
  // const q = query(collection(database, "products"));

  useEffect(() => {
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
        <title>Shop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-[50vh] flex justify-center items-center">
        <h1 className="text-7xl relative">
          All Posters
          <p className="text-sm font-light absolute top-0 right-0 translate-x-full">
            ({data.length})
          </p>
        </h1>
      </div>
      <section className="w-full px-4 flex flex-wrap gap-y-12 justify-between">
        {data &&
          data.map((poster) => {
            return (
              <Item
                id={poster.id}
                key={poster.id}
                desc={poster.data.desc}
                title={poster.data.title}
                price={poster.data.price}
              />
            );
          })}
        <Item />
      </section>
    </m.div>
  );
};

export default Shop;
