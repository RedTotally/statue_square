"use client";

import { getCookie, setCookie } from "cookies-next";
import { useEffect } from "react";

export default function ZHTW() {
  let langCookie = getCookie("language");

  async function switchLanguage(lang: string) {
    setCookie("language", lang);
    window.location.replace("/");
  }

  useEffect(() => {
    switchLanguage("tch");
  });

  return <></>;
}
