import products from "@/data/products";

// Produk populer
const shopData = products
  .filter((product) => product.popular === true)
  .sort((a, b) => (a.priority ?? 9999) - (b.priority ?? 9999));

// Produk terkait berdasarkan kategori dan exclude ID
const relatedProduct = ({
  categoryId,
  excludeId,
}: {
  categoryId?: number;
  excludeId?: number;
} = {}) => {
  return products
    .filter((product) => {
      if (excludeId !== undefined && product.id === excludeId) return false;
      if (categoryId !== undefined && product.categoryId !== categoryId) return false;
      return true;
    })
    .sort((a, b) => (a.priority ?? 9999) - (b.priority ?? 9999))
    .slice(0, 10);
};

export { relatedProduct };
export default shopData;
