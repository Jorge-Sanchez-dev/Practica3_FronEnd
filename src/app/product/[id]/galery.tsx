"use client";

import { useState } from "react";
import { Product } from "@/types";

type Props = {
  product: Product;
};

export default function Gallery({ product }: Props) {
  const images =
    product.images && product.images.length > 0
      ? product.images
      : [product.thumbnail];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <section>
      <img
        src={selectedImage}
        alt={product.title}
        style={{ width: "300px", display: "block" }}
      />

      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${product.title} ${index + 1}`}
            style={{
              width: "60px",
              cursor: "pointer",
              border:
                selectedImage === img
                  ? "2px solid black"
                  : "1px solid #ccc",
            }}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
    </section>
  );
}