import Link from "next/link";
import { Product } from "@/types";
import "./styles.css";

type Props = {
  producto: Product;
};

export default function ProductoCard({ producto }: Props) {
  return (
    <div className="card">
      <img src={producto.thumbnail} alt={producto.title} />
      <h3>{producto.title}</h3>
      <p>{producto.category}</p>
      <p>{producto.price} €</p>

      <Link href={`/product/${producto.id}`}>
        <button>Ver detalles</button>
      </Link>
    </div>
  );
}