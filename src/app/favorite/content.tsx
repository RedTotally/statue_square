"use client";

import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";

export default function Favorite() {
  const langCookie = getCookie("language");

  //Language Zone - Content
  const [s, ss] = useState("");
  const [sb, ssb] = useState("");
  const [rs, srs] = useState("");
  //!--

  //Language Zone - Art
  const [a_1, sa_1] = useState("");
  const [by, sby] = useState("");
  //!--

  async function languageProcessor() {
    try {
      if (langCookie == "en") {
        ss("Search...");
        ssb("Search");
        srs("Remove Selected");

        sa_1("Alphabetical");
        sby("By");
      } else if (langCookie == "tch") {
        ss("搜尋...");
        ssb("搜尋");
        srs("刪除已選選項");

        sa_1("子母序列");
        sby("由藝術家");
      } else if (langCookie == "sch") {
        ss("搜寻...");
        ssb("搜寻");
        srs("删除已选选项");

        sa_1("子母序列");
        sby("由艺术家");
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
      <div className="p-10 mt-24">
        <div className="mb-5 lg:flex items-center">
          <input
            className="border-black border-[.1em] mt-5 lg:mt-0 p-5 w-full outline-none"
            placeholder={s}
          ></input>
          <div className="lg:mx-2"></div>
          <p className="p-5 border-black border-[.1em] mt-5 lg:mt-0 lg:w-[15em] text-center hover:bg-black hover:text-white cursor-pointer duration-300">
            {sb}
          </p>
        </div>

        <p className="mb-5 p-5 border-black border-[.1em] text-center hover:bg-red-500 hover:text-white cursor-pointer duration-300">
          {rs}
        </p>

        <div className="border-2 p-10 overflow-x-auto">
          <div className="flex items-center justify-between w-[108.70em]">
            <div className="flex items-center">
              <div>
                <input type="checkbox"></input>
              </div>
              <div className="mx-10"></div>
              <div
                style={{ backgroundImage: "url(/art.jpg)" }}
                className="bg-cover bg-center w-[10em] h-[10em] bg-black"
              ></div>
              <div className="mx-10"></div>
              <div>
                <p className="text-2xl">{a_1}</p>
                <p className="mt-2">{by} Sandio Cavorlan</p>
                <p>HK$8,900,732</p>
              </div>
            </div>

            <img className="cursor-pointer" src="/trash.svg"></img>
          </div>
        </div>
      </div>
    </>
  );
}
