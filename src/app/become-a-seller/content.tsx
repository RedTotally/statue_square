"use client";

import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";

export default function BecomeASeller() {
  let langCookie = getCookie("language");

  //Language Zone - Content
  const [t, st] = useState("");
  //!--

  async function languageProcessor() {
    try {
      if (langCookie == "en") {
        st("We are waiting for you to join us, on the path of art.");
      } else if (langCookie == "tch") {
        st("我們正在等待您的加入，行駛在藝術的道路上。");
      } else if (langCookie == "sch") {
        st("我們正在等待您的加入，行駛在藝術的道路上。");
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
      <div className="flex justify-center items-center mt-24">
        <div>
          <div className="flex justify-center">
            {" "}
            <img className="w-[25em]" src="/join_us.svg"></img>
          </div>
          <div className="flex justify-center">
            <p className="text-center text-sm mt-5">{t}</p>
          </div>
        </div>
      </div>
    </>
  );
}
