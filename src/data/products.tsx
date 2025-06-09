import { Product } from "@/types/product";
import laptop from "@/data/products/laptop";
import komputer from "@/data/products/komputer";
import tv from "@/data/products/tv";

const products: Product[] = [
  ...laptop,
  ...komputer,
  ...tv,
];

export default products;