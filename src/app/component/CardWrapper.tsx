import { ReactNode } from "react";
import "./styles.css";


export default function CardWrapper({ children }: { children: ReactNode }) {
  return <div className="cardWrapper">{children}</div>;
}