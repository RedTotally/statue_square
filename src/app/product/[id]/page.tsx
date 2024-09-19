import Product from "./content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product | Statue Square",
  description:
    "",
};

export default function BecomeASellerPage(){
  return(
       <Product></Product>
    )
}