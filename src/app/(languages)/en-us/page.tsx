"use client";

import { getCookie, setCookie } from "cookies-next";
import { useEffect } from "react";

export default function ENUS() {
  const langCookie = getCookie("language");

  async function switchLanguage(lang: string) {
    console.log(langCookie)
    setCookie("language", lang);
    window.location.replace("/");
  }

  useEffect(() => {
    switchLanguage("en");
  });

  return <></>;
}
