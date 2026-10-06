import Link from "next/link"
import ProductsCategories from "@/app/(components)/products-categories/ProductsCategories"
function ProductsLayout({children}:LayoutProps<("/")>){

return (<div className="h-[500px] my-10 mx-auto w-[90%] shadow-2xl  grid grid-cols-2">
         <ProductsCategories />
          
            {children}
          
    </div>)
}

export default ProductsLayout