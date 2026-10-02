import ProductCard from "./productCard";

function ProductsGrid({products}) {
  return (
    <div className="row g-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
export default ProductsGrid;