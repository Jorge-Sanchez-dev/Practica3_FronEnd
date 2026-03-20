"use client";

import { useState } from "react";
import { searchProducts } from "@/lib/api/products";
import { Product } from "@/types";
import ProductoCard from "./component/productCard";

export default function Home() {
  const [text, setText] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  async function onSearch() {
    if (!text.trim()) {
      setProducts([]);
      return;
    }

    const res = await searchProducts(text);
    setProducts(res);
  }

  return (
    <div className="container">
      <h1 className="title">Buscar producto</h1>

      <div className="searchHeader">
        <input
          className="input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escribe un producto"
        />
        <button className="button" onClick={onSearch}>
          Buscar
        </button>
      </div>

      <p className="counter">Resultados encontrados: {products.length}</p>

      <ul className="resultados">
        {products.map((p) => (
          <li key={p.id} className="item">
            <ProductoCard producto={p} />
          </li>
        ))}
      </ul>
    </div>
  );
}
