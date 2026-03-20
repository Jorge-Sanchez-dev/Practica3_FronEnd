import { api } from "./axios";
import { Product } from "@/types";

type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export async function getProducts(): Promise<Product[]> {
  const res = await api.get<ProductsResponse>("/products");
  return res.data.products;
}

export async function getProduct(id: string | number) {
  const res = await api.get(`/products/${id}`);
  return res.data;
}

export async function searchProducts(text: string): Promise<Product[]> {
  const res = await api.get<ProductsResponse>(`/products/search?q=${text}`);
  return res.data.products;
}