import { motion } from "framer-motion";
import Image from "next/image";
import { database } from "../../utils/firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";
import { useRouter } from "next/router";

const Product = ({ title, price, id, desc, isOpened, open, setActive }) => {
  const router = useRouter();

  const deleteProduct = () => {
    deleteDoc(doc(database, "products", `${id}`)).then((res) => {
      alert("deleted");
      router.reload();
    });
  };
  return (
    <motion.div className="min-h-[20rem] min-w-[20rem] flex flex-col ml-4 relative cursor-pointer">
      <div className="w-full flex-1 bg-black relative overflow-hidden group">
        <Image
          src="/2.jpg"
          fill={true}
          className="w-full h-full object-cover"
          alt="hey"
        />
        <div className="w-full h-full absolute top-0 left-0 bg-grad translate-y-full group-hover:translate-y-0 transition-all">
          <div className="w-full h-full relative">
            <div className="w-full absolute bottom-0 py-2 flex justify-center gap-4 items-center text-white">
              <button
                className="px-4 py-2 rounded-full bg-blue-400 cursor-default"
                onClick={() => {
                  open(!isOpened);
                  setActive([
                    { id: id, title: title, desc: desc, price: price },
                  ]);
                }}
              >
                <p className="text-lg font-medium">Edit</p>
              </button>
              <button
                className="px-4 py-2 rounded-full bg-red-400 cursor-default"
                onClick={() => {
                  deleteProduct();
                }}
              >
                <p className="text-lg font-medium">Delete</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between mt-2">
        <h1 className="text-2xl font-medium">{title}</h1>
        <p className="text-2xl font-medium">(${price})</p>
      </div>
    </motion.div>
  );
};

export default Product;
