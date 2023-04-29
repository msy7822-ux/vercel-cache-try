import Link from "next/link";
import { ReactNode } from "react";

const Layout = ({ children }: Props) => {
  return (
    <div>
      <nav className="flex flex-rows p-2 bg-red-500 text-white font-bold">
        <Link href="/">
          <span>Home</span>
        </Link>
        <Link href="/about">
          <span>About</span>
        </Link>
      </nav>
      {children}
    </div>
  );
};

type Props = {
  children?: ReactNode;
};

export default Layout;
