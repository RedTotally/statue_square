import Gallery from "./content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Statue Square",
  description:
    "",
};

export default function GalleryPage(){
    return(
       <Gallery></Gallery>
    )
}