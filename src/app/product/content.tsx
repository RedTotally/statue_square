"use client";

import { getCookie } from "cookies-next";
import { useEffect } from "react";

export default function Product() {
  let langCookie = getCookie("language");

  //Language Zone - Content

  //!--

  async function languageProcessor() {
    try {
      if (langCookie == "en") {

      } else if (langCookie == "tch") {

      } else if (langCookie == "sch") {

      }
    } catch (e) {
      console.log("Error processing language.");
    }
  }

  useEffect(() => {
    languageProcessor();
  });

  return (
    <>
      
    </>
  );
}
