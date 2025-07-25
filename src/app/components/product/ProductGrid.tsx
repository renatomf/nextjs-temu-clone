import { Product } from "@/sanity.types";
import ProductItem from "./ProductItem";

type ProductGridProps = {
  products: Product[];
}

export const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center">
      {products.map((product) => (
        <ProductItem 
          key={product._id} 
          product={product} 
        />
      ))}
    </div>
  )
}

export default ProductGrid;
