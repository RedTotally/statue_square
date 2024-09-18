import Cart from "./content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Cart | Statue Square",
  description:
    "",
};

export default function CartPage(){
    return(
       <Cart></Cart>
    )
}