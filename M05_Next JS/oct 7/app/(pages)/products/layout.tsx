import Link from "next/link"
import ProductsCategories from "@/app/(components)/products-categories/ProductsCategories"
function ProductsLayout({children}:LayoutProps<("/")>){

return (<div >
        
          
            {children}
          
    </div>)
}

export default ProductsLayout