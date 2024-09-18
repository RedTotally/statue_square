"use client";

import { getCookie, setCookie } from "cookies-next";
import { useEffect } from "react";

export default function ZHCN() {
  const langCookie = getCookie("language");

  async function switchLanguage(lang: string) {
    console.log(langCookie)
    setCookie("language", lang);
    window.location.replace("/");
  }

  useEffect(() => {
    switchLanguage("sch");
  });

  return <></>;
}
