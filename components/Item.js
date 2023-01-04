import Link from "next/link";
import Image from "next/image";

const Item = ({ id, title, price, image }) => {
  return (
    <div className="w-full md:w-[32.75%] mb-4">
      <Link href={`/shop/${id}`}>
        <div className="h-96 w-full bg-black mb-2 relative">
          <Image
            src={image}
            fill={true}
            className="w-full h-full object-cover"
            alt="hey"
          />
        </div>
        <div className="flex justify-between w-full">
          <h1 className="text-2xl font-medium">{title}</h1>
          <p className="text-2xl font-medium">(${price})</p>
        </div>
      </Link>
    </div>
  );
};

export default Item;
