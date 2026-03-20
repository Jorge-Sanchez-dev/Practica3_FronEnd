import Link from "next/link";
import { getProduct } from "@/lib/api/products";
import { Product } from "@/types";
import Gallery from "./galery";
import "./styles.css";

type Props = {
  params: Promise<{
    id: string;
  }>;
};
export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product: Product = await getProduct(id);

  return (
    <main>
      <Link href="/" className="back">← Volver</Link>

      <div className="contenedor">
        <div className="fotos">
          <Gallery product={product} />
        </div>

        <div className="derecha">
          <h1 className="titulo">{product.title}</h1>

          <p> <strong>Marca:</strong> {product.brand}</p>
          <p><strong>Descripción:</strong> {product.description}</p>
          <p><strong>Categoría:</strong> {product.category}</p>

            <p><strong>Precio:</strong> {product.price} €</p>
            <p>
              <strong>Stock:</strong> {product.stock}{" "}
               {product.stock < 5 && "Pocas unidades"}
            </p>
    
          <div className="valoracion">
            <p>
              <strong>Valoración:</strong>
              {Array.from({ length: 5 }, (_, i) =>
                i < Math.round(product.rating) ? "⭐" : "☆",
              )} {" "}{product.rating}
            </p>
            <p> <strong>Peso:</strong> {product.weight} kg</p>
            <p>
              <strong>Dimensiones:</strong> {product.dimensions.width} x{" "}
              {product.dimensions.height} x {product.dimensions.depth}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}