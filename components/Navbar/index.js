import Link from "next/link";
import { Links } from "./links";

const Navbar = () => {
  return (
    <div className="w-full px-4 py-2 z-[1000] relative flex justify-between">
      <div className="inline">
        <h1 className="text-2xl uppercase">
          <Link href="/">Kinka</Link>
        </h1>
      </div>
      <Links />
    </div>
  );
};

export default Navbar;
