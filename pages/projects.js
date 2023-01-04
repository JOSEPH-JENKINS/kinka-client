import Head from "next/head";
import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { database } from "../utils/firebaseConfig";
import Image from "next/image";

const Projects = () => {
  const [data, setData] = useState([]);

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
        <title>Index</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="w-full px-4 py-2 mt-12 flex gap-x-8 gap-y-24 flex-wrap">
        {data &&
          data.map((poster) => {
            return (
              <div className="w-24 h-24 bg-black relative hover:grayscale">
                <Image
                  src={poster.data.image}
                  fill={true}
                  className="w-full h-full object-cover"
                  alt="heyy"
                />
              </div>
            );
          })}
      </section>
    </m.div>
  );
};

export default Projects;
