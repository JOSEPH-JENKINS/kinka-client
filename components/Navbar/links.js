import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <div className="ml-4">
      <Link href={`${href}`}>
        <h1 className="text-2xl uppercase">{title}</h1>
      </Link>
    </div>
  );
};

export const Links = () => {
  return (
    <div className="flex">
      <NavLink href={"/projects"} title="index" />
      <NavLink href={"/about"} title="about" />
      <NavLink href={"/shop"} title="shop" />
    </div>
  );
};
