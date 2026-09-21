
import Products from "./products/page";
import Product from "./products/Product";
import Link from "next/link";
export default function Home() {
  return (
    <div className="m-10">
      <h1 className="text-3xl">Welcome to Next JS</h1>
       <Link href={"/products"} className="text-blue-700">Products</Link>
    </div>
  );
}
