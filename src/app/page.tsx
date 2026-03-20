"use client";

import { useState } from "react";
import { searchProducts } from "@/lib/api/products";
import { Product } from "@/types";
import ProductoCard from "./component/productCard";
import CardWrapper from "./component/CardWrapper";
import SearchBar from "./component/SearchBar";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  async function onSearch() {
    if (!searchTerm.trim()) {
      setProducts([]);
      return;
    }

    const res = await searchProducts(searchTerm);
    setProducts(res);
  }

  return (
    <div className="container">
      <h1 className="title">Buscar producto</h1>

      <div className="searchHeader">
        <SearchBar value={searchTerm} setSearchTerm={setSearchTerm} />

        <button className="button" onClick={onSearch}>
          Buscar
        </button>
      </div>

      <p className="counter">Resultados encontrados: {products.length}</p>

      <ul className="resultados">
        {products.map((p) => (
          <li key={p.id} className="item">
            <CardWrapper>
              <ProductoCard producto={p} />
            </CardWrapper>
          </li>
        ))}
      </ul>
    </div>
  );
}