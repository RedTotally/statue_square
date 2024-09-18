import Favorite from "./content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Favorite | Statue Square",
  description:
    "",
};

export default function BecomeASellerPage(){
    return(
       <Favorite></Favorite>
    )
}