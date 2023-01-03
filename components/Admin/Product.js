import { motion } from "framer-motion";
import Image from "next/image";

const Product = () => {
  return (
    <motion.div className="min-h-[20rem] min-w-[20rem] flex flex-col ml-4 relative">
      <div className="w-full flex-1 bg-black relative pointer-events-none">
        <Image
          src="/2.jpg"
          fill={true}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full flex justify-between mt-2">
        <h1 className="text-2xl font-medium">A Sparkle</h1>
        <p className="text-2xl font-medium">($45)</p>
      </div>
    </motion.div>
  );
};

export default Product;
