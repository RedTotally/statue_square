"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getCookie, setCookie } from "cookies-next";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const langCookie = getCookie("language");

  //Language Zone - Navigation Bar
  const [li, sli] = useState("");
  const [r, sr] = useState("");
  const [bas, sbas] = useState("");
  const [q, sq] = useState("");

  const [sfaa, ssfaa] = useState("");
  const [s, ss] = useState("");

  const [c, sc] = useState("");
  //--!

  //Language Zone - Footer
  const [ft, sft] = useState("");

  const [l, sl] = useState("");
  const [tos, stos] = useState("");
  const [pp, spp] = useState("");

  const [jup, sjup] = useState("");
  const [fli, sfli] = useState("");
  const [fr, sfr] = useState("");
  const [fbas, sfbas] = useState("");

  const [yi, syi] = useState("");
  const [yfa, syfa] = useState("");
  const [ysc, sysc] = useState("");

  const [m, sm] = useState("");
  const [eog, seog] = useState("");
  //--!

  //Language Zone - Categories

  const [c1, sc1] = useState("");
  const [c2, sc2] = useState("");
  const [c3, sc3] = useState("");
  const [c4, sc4] = useState("");
  const [c5, sc5] = useState("");

  //--!

  const [menuStatus, setMenuStatus] = useState(false);
  const [categoryStatus, setCategoryStatus] = useState(false);

  async function switchLanguage(lang: string) {
    try {
      setCookie("language", lang);
      window.location.reload();
    } catch (e) {
      console.log("Error switching language.");
    }
  }

  async function languageProcessor() {
    try {
      if (langCookie == "en") {
        sli("Log In");
        sr("Register");
        sbas("Become a Seller");
        sq("We take art to another dimension. — Statue Square");

        ssfaa("Search for an art...");
        ss("Search");

        sc("Category");

        sft("We are pleased to connect you to the world of artists.");

        sl("Legal");
        stos("Terms of Service");
        spp("Privacy Policies");

        sjup("Join Us Program");
        sfli("Log In");
        sfr("Register");
        sfbas("Become a Seller");

        syi("Your Items");
        syfa("Your Favorite Art");
        sysc("Your Shopping Cart");

        sm("Marketplace");
        seog("Explore Our Gallery");

        sc1("Oil Paint");
        sc2("Acrylic Paint");
        sc3("Expressionism");
        sc4("Modern Art");
        sc5("Realism");
      } else if (langCookie == "tch") {
        sli("登入");
        sr("註冊");
        sbas("成為賣家");
        sq("我們將藝術帶入另一個維度。 — Statue Square");

        ssfaa("搜尋您心目中的藝術品...");
        ss("搜尋");

        sc("類別");

        sft("我們很高興將您帶入藝術家的世界。");

        sl("法律");
        stos("服務條款");
        spp("私隱政策");

        sjup("加入計劃");
        sfli("登入");
        sfr("註冊");
        sfbas("成為賣家");

        syi("屬於您的項目");
        syfa("您喜愛的藝術品");
        sysc("您的購物車");

        sm("市場");
        seog("探索我們的畫廊");

        sc1("油畫");
        sc2("壓克力顏料畫");
        sc3("表現主義藝術");
        sc4("現代藝術");
        sc5("真實主義藝術");
      } else if (langCookie == "sch") {
        sli("登入");
        sr("注册");
        sbas("成为卖家");
        sq("我们将艺术带入另一个维度。 — Statue Square");

        ssfaa("搜寻您心目中的艺术品...");
        ss("搜寻");

        sc("类别");

        sft("我们很高兴将您带入艺术家的世界。");

        sl("法律");
        stos("服务条款");
        spp("私隐政策");

        sjup("加入计划");
        sfli("登入");
        sfr("注册");
        sfbas("成为卖家");

        syi("属于您的项目");
        syfa("您喜爱的艺术品");
        sysc("您的购物车");

        sm("市场");
        seog("探索我们的画廊");

        sc1("油画");
        sc2("压克力颜料画");
        sc3("表现主义艺术");
        sc4("现代艺术");
        sc5("真实主义艺术");
      }
    } catch (e) {
      console.log("Error processing language.");
    }
  }

  async function languageChecker() {
    try {
      if (!langCookie) {
        setCookie("language", "en"); // Deafult Language
        console.log("Cookie placed.");
window.location.reload();
      }
    } catch (e) {
      console.log("Error sorting out language.");
    }
  }

  useEffect(() => {
    languageChecker();
    languageProcessor();
  });

  return (
    <>
      <nav className="bg-white relative z-[90] flex items-center justify-between p-5 border-b-[.1em]">
        <div className="w-full lg:w-auto flex justify-between items-center">
          <Link
            onClick={() => setMenuStatus(false)}
            href={"/"}
            className="text-2xl font-bold uppercase"
          >
            Statue Square
          </Link>
          <img
            onClick={() => setMenuStatus(true)}
            className="lg:hidden cursor-pointer"
            src="menu.svg"
          ></img>
        </div>
        <div>
          <ul
            className={
              menuStatus == false
                ? "ml-[-100em] lg:ml-0 p-5 lg:p-0 left-0 top-0 lg:left-auto lg:top-auto w-full h-full lg:w-auto lg:h-auto bg-white lg:bg-transparent fixed lg:relative lg:flex items-center duration-300"
                : "p-5 lg:p-0 left-0 top-0 lg:left-auto lg:top-auto w-full h-full lg:w-full lg:h-auto bg-white lg:bg-transparent fixed lg:relative lg:flex items-center duration-300"
            }
          >
            <li className="font-bold text-3xl mb-10 flex justify-between items-center lg:hidden">
              <Link
                onClick={() => setMenuStatus(false)}
                href={"/"}
                className="uppercase"
              >
                Statue Square
              </Link>
              <img
                onClick={() => setMenuStatus(false)}
                className="cursor-pointer"
                src="/close.svg"
              ></img>
            </li>
            <div className="mt-10 lg:mx-3"></div>
            <li className="lg:font-semibold lg:text-gray-600 text-4xl sm:text-6xl lg:text-base">
              <Link onClick={() => setMenuStatus(false)} href={"/login"}>
                {li}
              </Link>
            </li>
            <div className="mt-10 lg:mx-3"></div>
            <li className="lg:font-semibold lg:text-gray-600 text-4xl sm:text-6xl lg:text-base">
              <Link
                onClick={() => setMenuStatus(false)}
                href={"/register"}
              >
                {r}
              </Link>
            </li>
            <div className="mt-10 lg:mx-3"></div>
            <li className="lg:font-semibold lg:text-gray-600 text-4xl sm:text-6xl lg:text-base">
              <Link
                onClick={() => setMenuStatus(false)}
                href={"/become-a-seller"}
              >
                {bas}
              </Link>
            </li>
            <div className="mt-10 lg:mx-3"></div>
            <div className="flex items-center">
              <li className="flex items-center">
                <Link
                  onClick={() => setMenuStatus(false)}
                  href={"/favorite"}
                >
                  <img
                    className="w-[3em] sm:w-[5em] lg:w-auto"
                    src="/star.svg"
                  ></img>
                </Link>
              </li>
              <div className="lg:mx-3"></div>
              <li className="flex items-center">
                <Link href={"/cart"}>
                  <img
                    className="w-[3em] sm:w-[5em] lg:w-auto"
                    src="/shopping_cart.svg"
                  ></img>
                </Link>
              </li>
            </div>
            <div className="mt-10 lg:mt-0 lg:mx-3"></div>
            <li>
              <select
                onChange={(event) => switchLanguage(event.target.value)}
                className="w-full lg:w-[8em] border-[.1em] px-2 py-5 lg:p-2 border-black outline-none"
              >
                <option
                  value={
                    langCookie == "tch"
                      ? "tch"
                      : langCookie == "sch"
                      ? "sch"
                      : "en"
                  }
                >
                  {langCookie == "tch"
                    ? "繁體中文"
                    : langCookie == "sch"
                    ? "简体中文"
                    : "English"}
                </option>
                <option
                  value={
                    langCookie == "tch"
                      ? "en"
                      : langCookie == "sch"
                      ? "en"
                      : "tch"
                  }
                >
                  {langCookie == "tch"
                    ? "English"
                    : langCookie == "sch"
                    ? "English"
                    : "繁體中文"}
                </option>
                <option
                  value={
                    langCookie == "tch"
                      ? "sch"
                      : langCookie == "sch"
                      ? "tch"
                      : "sch"
                  }
                >
                  {langCookie == "tch"
                    ? "简体中文"
                    : langCookie == "sch"
                    ? "繁體中文"
                    : "简体中文"}
                </option>
              </select>
            </li>
            <div className="lg:hidden">
              <img className="mt-5 rounded-xl" src="/banner_2.png"></img>
              <p className="mt-2 text-xs">{q}</p>
            </div>
          </ul>
        </div>
      </nav>
      <div className="bg-white relative z-[30] w-full border-b-[.01em] flex justify-between items-center">
        <input className="outline-none p-5 w-full" placeholder={sfaa}></input>
        <a className="w-[15em] bg-black text-white p-5 text-center hover:brightness-[90%] duration-300 cursor-pointer">
          {s}
        </a>
      </div>
      <div className="lg:p-5 border-b-[.1em]">
        <p
          onClick={
            categoryStatus == false
              ? () => setCategoryStatus(true)
              : () => setCategoryStatus(false)
          }
          className="bg-white relative z-[20] lg:hidden text-center w-full cursor-pointer p-5 font-semibold text-gray-600"
        >
          {c}
        </p>
        <li
          className={
            categoryStatus == false
              ? "relative z-[10] mt-[-20em] lg:mt-0 p-10 lg:p-0 list-none lg:border-t-[.1em] lg:border-none lg:flex duration-300"
              : "relative z-[10] mt-0 lg:mt-0 p-10 lg:p-0 list-none lg:border-t-[.1em] lg:border-none lg:flex duration-300"
          }
        >
          <ul className="text-2xl lg:text-base">
            <Link href={"/gallery"}>{c1}</Link>
          </ul>
          <div className="mt-5 lg:mx-3"></div>
          <ul className="text-2xl lg:text-base">
            <Link href={"/gallery"}>{c2}</Link>
          </ul>
          <div className="mt-5 lg:mx-3"></div>
          <ul className="text-2xl lg:text-base">
            <Link href={"/gallery"}>{c3}</Link>
          </ul>
          <div className="mt-5 lg:mx-3"></div>
          <ul className="text-2xl lg:text-base">
            <Link href={"/gallery"}>{c4}</Link>
          </ul>
          <div className="mt-5 lg:mx-3"></div>
          <ul className="text-2xl lg:text-base">
            <Link href={"/gallery"}>{c5}</Link>
          </ul>
        </li>
      </div>
      {children}
      <footer className="mt-20 mb-20 p-10">
        <hr></hr>
        <div className="flex justify-center mt-20 mb-20">
          <div>
            <div className="flex justify-center">
              <img className="w-[15em]" src="statue_square_logo.png"></img>
            </div>
            <p className="text-center text-xs">{ft}</p>
          </div>
        </div>
        <div className="flex justify-center lg:block">
          <div className="lg:flex justify-between items-center">
            <div>
              <p className="font-bold uppercase text-xl">Statue Square</p>
              <p>© Statue Square 2024</p>
            </div>
            <div className="xl:flex mt-10 lg:mt-0">
              <ul>
                <li className="text-xl mb-2">{m}</li>
                <li>
                  <Link className="text-gray-600" href={"/gallery"}>{eog}</Link>
                </li>
              </ul>
              <div className="mt-10 xl:mt-0 xl:mx-10"></div>
              <ul>
                <li className="text-xl mb-2">{yi}</li>
                <li>
                  <Link className="text-gray-600" href={"/favorite"}>{yfa}</Link>
                </li>
                <li>
                  <Link className="text-gray-600" href={"/cart"}>{ysc}</Link>
                </li>
              </ul>
              <div className="mt-10 xl:mt-0 xl:mx-10"></div>
              <ul>
                <li className="text-xl mb-2">{jup}</li>
                <li>
                  <Link className="text-gray-600" href={"/login"}>{fli}</Link>
                </li>
                <li>
                  <Link className="text-gray-600" href={"/register"}>{fr}</Link>
                </li>
                <li>
                  <Link className="text-gray-600" href={"/become-a-seller"}>{fbas}</Link>
                </li>
              </ul>

              <div className="mt-10 xl:mt-0 xl:mx-10"></div>
              <ul>
                <li className="text-xl mb-2">{l}</li>
                <li className="text-gray-600">{tos}</li>
                <li className="text-gray-600">{pp}</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
