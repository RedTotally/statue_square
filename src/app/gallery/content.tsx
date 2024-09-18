"use client";

import { getCookie } from "cookies-next";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Gallery() {
  let langCookie = getCookie("language");

  const [filerOptionsVisibility, setFilterOptionsVisibility] = useState(false);

  //Language Zone - Content
  const [aa, saa] = useState("");
  const [afs, safs] = useState("");
  const [d, sd] = useState("");

  const [f, sf] = useState("");

  const [c, sc] = useState("");
  const [op, sop] = useState("");
  const [ap, sap] = useState("");
  const [e, se] = useState("");
  const [ma, sma] = useState("");
  const [r, sr] = useState("");

  const [pr, spr] = useState("");
  const [u, su] = useState("");
  const [o, so] = useState("");

  const [s, ss] = useState("");
  const [sm, ssm] = useState("");
  const [me, sme] = useState("");
  const [l, sl] = useState("");
  const [os, sos] = useState("");

  const [or, sor] = useState("");
  const [h, sh] = useState("");
  const [v, sv] = useState("");
  const [sq, ssq] = useState("");

  const [ab, sab] = useState("");

  const [d2, sd2] = useState("");

  //!--

  //Language Zone - Art
  const [a_1, sa_1] = useState("");
  const [a_2, sa_2] = useState("");
  const [a_3, sa_3] = useState("");
  const [a_4, sa_4] = useState("");

  const [ac, sac] = useState("");

  const [w, sw] = useState("");
  const [he, she] = useState("");
  const [de, sde] = useState("");

  const [by, sby] = useState("");
  //!--

  async function languageProcessor() {
    try {
      if (langCookie == "en") {
        saa("All Artworks");
        safs("Artworks for Sale");
        sd(
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores impedit amet, aliquid saepe quod, commodi suscipit corporis natus quo eligendi itaque labore hic. Quibusdam facere rem labore dignissimos reprehenderit architecto corporis nesciunt ad. Ratione, exercitationem consectetur repudiandae libero repellat odio, perspiciatis molestiae dolorum voluptas pariatur veritatis, qui sequi consequuntur provident atque? Ad optio saepe quo quibusdam distinctio quisquam modi veniam, iste dolorum pariatur? Commodi id quisquam neque consequatur similique dolore et deleniti, cumque est quod consequuntur, dolorem, quam ducimus libero quas culpa suscipit in magni cum illo architecto vitae quae provident velit. Illum tempora porro quisquam saepe unde dolor rem."
        );

        sf("Filter");

        sc("Category");
        sop("Oil Paint");
        sap("Acrylic Paint");
        se("Expressionism");
        sma("Modern Art");
        sr("Realism");

        spr("Price Range");
        su("Under");
        so("Over");

        ss("Size");
        ssm("Small");
        sme("Medium");
        sl("Large");
        sos("Oversized");

        sor("Orientation");
        sh("Horizontal");
        sv("Vertical");
        ssq("Square");

        sab("Apply");
        sd2(
          "We provide you with the best experience in finding the right art for yourself. A seamless system is also one of the things we are proud of."
        );

        sa_1("Mona Lisa");
        sa_2("Fearless");
        sa_3("Creativity");
        sa_4("Alphabetical");

        sac("Paintings");
        sw("W");
        she("H");
        sde("D");

        sby("By");
      } else if (langCookie == "tch") {
        saa("全部藝術品");
        safs("供出售的藝術品");
        sd(
          "我們都知道，只要有意義，那麽就必須慎重考慮。了解清楚供出售的藝術品到底是一種怎麽樣的存在，是解決一切問題的關鍵。經過上述討論，韓愈在不經意間這樣說過，仰不愧天，俯不愧人，內不愧心。這讓我深深地想到，帶著這些問題，我們來審視一下供出售的藝術品。俾斯麥曾經講過，對於不屈不撓的人來說，沒有失敗這回事。這啟發了我，為什麼供出售的藝術品對我們來說這麼重要？所以說，一般來說，就我個人來說，供出售的藝術品對我的意義，不能不說非常重大。供出售的藝術品，發生了會如何，不發生又會如何。問題的關鍵究竟為何？那麽，你真的了解供出售的藝術品嗎？"
        );

        sf("過濾器");

        sc("類別");
        sop("油畫");
        sap("壓克力顏料畫");
        se("表現主義藝術");
        sma("現代藝術");
        sr("真實主義藝術");

        spr("價格範圍");
        su("低於");
        so("高於");

        ss("大小");
        ssm("小");
        sme("中");
        sl("大");
        sos("加大");

        sor("方向");
        sh("橫向");
        sv("直向");
        ssq("正方");

        sab("套用");
        sd2(
          "我們為您提供尋找適合自己的藝術的最佳體驗。無縫連接的系統也是我們引以為傲的事情之一。"
        );

        sa_1("蒙娜麗莎");
        sa_2("無所畏懼");
        sa_3("創造力");
        sa_4("子母序列");

        sac("畫");
        sw("寬");
        she("高");
        sde("深");

        sby("由藝術家");
      } else if (langCookie == "sch") {
        saa("全部艺术品");
        safs("供出售的艺术品");
        sd(
          "我们都知道，只要有意义，那么就必须慎重考虑。了解清楚供出售的艺术品到底是一种怎么样的存在，是解决一切问题的关键。经过上述讨论，韩愈在不经意间这样说过，仰不愧天，俯不愧人，内不愧心。这让我深深地想到，带着这些问题，我们来审视一下供出售的艺术品。俾斯麦曾经讲过，对于不屈不挠的人来说，没有失败这回事。这启发了我，为什么供出售的艺术品对我们来说这么重要？所以说，一般来说，就我个人来说，供出售的艺术品对我的意义，不能不说非常重大。供出售的艺术品，发生了会如何，不发生又会如何。问题的关键究竟为何？那么，你真的了解供出售的艺术品吗？"
        );

        sf("过滤器");

        sc("类别");
        sop("油画");
        sap("压克力颜料画");
        se("表现主义艺术");
        sma("现代艺术");
        sr("真实主义艺术");

        spr("价格范围");
        su("低于");
        so("高于");

        ss("大小");
        ssm("小");
        sme("中");
        sl("大");
        sos("加大");

        sor("方向");
        sh("横向");
        sv("直向");
        ssq("正方");

        sab("套用");
        sd2(
          "我们为您提供寻找适合自己的艺术的最佳体验。无缝连接的系统也是我们引以为傲的事情之一。"
        );

        sa_1("蒙娜丽莎");
        sa_2("无所畏惧");
        sa_3("创造力");
        sa_4("子母序列");

        sac("画");
        sw("宽");
        she("高");
        sde("深");

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
      <div className="p-10">
        <div>
          <p>{aa}</p>
        </div>
        <p className="text-4xl lg:text-6xl xl:text-9xl mt-5">{afs}</p>
        <p className="text-xs lg:w-[60em] xl:w-[90em] mt-5 text-gray-600">
          {d}
        </p>

        <hr className="mt-10 mb-10"></hr>

        <div className="lg:grid gap-10 2xl:gap-20 grid-cols-5">
          <div className="lg:hidden">
            <p
              onClick={() => {
                filerOptionsVisibility == false
                  ? setFilterOptionsVisibility(true)
                  : setFilterOptionsVisibility(false);
              }}
              className="bg-black text-center p-5 text-white mb-10 cursor-pointer flex justify-center items-center lg:hidden"
            >
              {f} <img className="ml-2" src="/filter.svg"></img>
            </p>
          </div>
          <div
            className={
              filerOptionsVisibility == false
                ? "mb-10 lg:mb-0 hidden lg:block"
                : "mb-10 lg:mb-0 block"
            }
          >
            <p className="text-xl uppercase">{c}</p>
            <select className="mt-2 outline-none border-black border-[.1em] w-full p-3">
              <option value={""}>--</option>
              <option value={"oil_paint"}>{op}</option>
              <option value={"acrylic_paint"}>{ap}</option>
              <option value={"expressionism"}>{e}</option>
              <option value={"modern_art"}>{ma}</option>
              <option value={"realism"}>{r}</option>
            </select>

            <hr className="mt-5 mb-5"></hr>

            <p className="text-xl uppercase">{pr}</p>
            <select className="mt-2 outline-none border-black border-[.1em] w-full p-3">
              <option value={""}>--</option>
              <option value={""}>{u} HK$500</option>
              <option value={""}>HK$500 - HK$1,000</option>
              <option value={""}>HK$1,000 - HK$2,000</option>
              <option value={""}>HK$2,000 - HK$5,000</option>
              <option value={""}>HK$5,000 - HK$10,000</option>
              <option value={""}>{o} HK$10,000</option>
            </select>

            <hr className="mt-5 mb-5"></hr>

            <p className="text-xl uppercase">{s}</p>
            <select className="mt-2 outline-none border-black border-[.1em] w-full p-3">
              <option value={""}>--</option>
              <option value={"small"}>{sm}</option>
              <option value={"medium"}>{me}</option>
              <option value={"large"}>{l}</option>
              <option value={"oversized"}>{os}</option>
            </select>

            <hr className="mt-5 mb-5"></hr>

            <p className="text-xl uppercase">{or}</p>
            <select className="mt-2 outline-none border-black border-[.1em] w-full p-3">
              <option value={""}>--</option>
              <option value={"horizontal"}>{h}</option>
              <option value={"vertical"}>{v}</option>
              <option value={"square"}>{sq}</option>
            </select>

            <hr className="mt-5 mb-5"></hr>

            <p className="text-center p-5 bg-black text-white cursor-pointer">
              {ab}
            </p>
            <p className="text-xs mt-5">{d2}</p>
          </div>
          <div className="col-span-4">
            <div className="overflow-x-auto">
              <div className="grid grid-rows-4 lg:grid-rows-1 lg:grid-cols-4 gap-5 Gallery">
                <Link
                  href={"/product"}
                  className="group cursor-pointer border-[.01em] hover:brightness-[90%] duration-300"
                >
                  <div className="absolute flex items-center opacity-0 duration-300 group-hover:opacity-100 p-2">
                    <img
                      className="w-10 bg-white border-[.1em] border-black rounded-full p-1"
                      src="/star.svg"
                    ></img>{" "}
                    <img
                      className="w-10 bg-white border-[.1em] border-black rounded-full ml-2 p-1"
                      src="/shopping_cart.svg"
                    ></img>
                  </div>
                  <div
                    style={{ backgroundImage: "url(painting_1.png)" }}
                    className="w-full h-[30em] lg:h-[15em] xl:h-[15em] 2xl:h-[25em] bg-black bg-cover bg-center"
                  ></div>
                  <div className="p-5 border-t-[.01em]">
                    <p className="text-xl">{a_1}</p>
                    <p className="text-sm">
                      {ac} , 22.9 {w} x 30.5 {he} x 1.8 {de} cm
                    </p>
                    <p className="mt-2">
                      {by} <span>Leonardo da Vinci</span>
                    </p>
                    <p>HK$5,000,000</p>
                  </div>
                </Link>
                <Link
                  href={"/product"}
                  className="group cursor-pointer border-[.01em] hover:brightness-[90%] duration-300"
                >
                  <div className="absolute flex items-center opacity-0 duration-300 group-hover:opacity-100 p-2">
                    <img
                      className="w-10 bg-white border-[.1em] border-black rounded-full p-1"
                      src="/star.svg"
                    ></img>{" "}
                    <img
                      className="w-10 bg-white border-[.1em] border-black rounded-full ml-2 p-1"
                      src="/shopping_cart.svg"
                    ></img>
                  </div>
                  <div
                    style={{ backgroundImage: "url(painting_2.jpg)" }}
                    className="w-full h-[30em] lg:h-[15em] xl:h-[15em] 2xl:h-[25em] bg-black bg-cover bg-center"
                  ></div>
                  <div className="p-5 border-t-[.01em]">
                    <p className="text-xl">{a_2}</p>
                    <p className="text-sm">
                      {ac} , 22.9 {w} x 30.5 {he} x 1.8 {de} cm
                    </p>
                    <p className="mt-2">
                      {by} <span>James Healy</span>
                    </p>
                    <p>HK$5,000</p>
                  </div>
                </Link>
                <Link
                  href={"/product"}
                  className="group cursor-pointer border-[.01em] hover:brightness-[90%] duration-300"
                >
                  <div className="absolute flex items-center opacity-0 duration-300 group-hover:opacity-100 p-2">
                    <img
                      className="w-10 bg-white border-[.1em] border-black rounded-full p-1"
                      src="/star.svg"
                    ></img>{" "}
                    <img
                      className="w-10 bg-white border-[.1em] border-black rounded-full ml-2 p-1"
                      src="/shopping_cart.svg"
                    ></img>
                  </div>
                  <div
                    style={{ backgroundImage: "url(painting_3.jpg)" }}
                    className="w-full h-[30em] lg:h-[15em] xl:h-[15em] 2xl:h-[25em] bg-black bg-cover bg-center"
                  ></div>
                  <div className="p-5 border-t-[.01em]">
                    <p className="text-xl">{a_3}</p>
                    <p className="text-sm">
                      {ac} , 22.9 {w} x 30.5 {he} x 1.8 {de} cm
                    </p>
                    <p className="mt-2">
                      {by} <span>Dmitry Mashkin</span>
                    </p>
                    <p>HK$70,000</p>
                  </div>
                </Link>
                <Link
                  href={"/product"}
                  className="group cursor-pointer border-[.01em] hover:brightness-[90%] duration-300"
                >
                  <div className="absolute flex items-center opacity-0 duration-300 group-hover:opacity-100 p-2">
                    <img
                      className="w-10 bg-white border-[.1em] border-black rounded-full p-1"
                      src="/star.svg"
                    ></img>{" "}
                    <img
                      className="w-10 bg-white border-[.1em] border-black rounded-full ml-2 p-1"
                      src="/shopping_cart.svg"
                    ></img>
                  </div>
                  <div
                    style={{ backgroundImage: "url(art.jpg)" }}
                    className="w-full h-[30em] lg:h-[15em] xl:h-[15em] 2xl:h-[25em] bg-black bg-cover bg-center"
                  ></div>
                  <div className="p-5 border-t-[.01em]">
                    <p className="text-xl">{a_4}</p>
                    <p className="text-sm">
                      {ac} , 22.9 {w} x 30.5 {he} x 1.8 {de} cm
                    </p>
                    <p className="mt-2">
                      {by} <span>Sandio Cavorlan</span>
                    </p>
                    <p>HK$8,900,732</p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="overflow-x-auto mt-5">
              <div className="grid grid-rows-4 lg:grid-rows-1 lg:grid-cols-4 gap-5 Gallery">
                <Link
                  href={"/product"}
                  className="group cursor-pointer border-[.01em] hover:brightness-[90%] duration-300"
                >
                  <div className="absolute flex items-center opacity-0 duration-300 group-hover:opacity-100 p-2">
                    <img
                      className="w-10 bg-white border-[.1em] border-black rounded-full p-1"
                      src="/star.svg"
                    ></img>{" "}
                    <img
                      className="w-10 bg-white border-[.1em] border-black rounded-full ml-2 p-1"
                      src="/shopping_cart.svg"
                    ></img>
                  </div>
                  <div
                    style={{ backgroundImage: "url(painting_1.png)" }}
                    className="w-full h-[30em] lg:h-[15em] xl:h-[15em] 2xl:h-[25em] bg-black bg-cover bg-center"
                  ></div>
                  <div className="p-5 border-t-[.01em]">
                    <p className="text-xl">{a_1}</p>
                    <p className="text-sm">
                      {ac} , 22.9 {w} x 30.5 {he} x 1.8 {de} cm
                    </p>
                    <p className="mt-2">
                      {by} <span>Leonardo da Vinci</span>
                    </p>
                    <p>HK$5,000,000</p>
                  </div>
                </Link>
                <Link
                  href={"/product"}
                  className="group cursor-pointer border-[.01em] hover:brightness-[90%] duration-300"
                >
                  <div className="absolute flex items-center opacity-0 duration-300 group-hover:opacity-100 p-2">
                    <img
                      className="w-10 bg-white border-[.1em] border-black rounded-full p-1"
                      src="/star.svg"
                    ></img>{" "}
                    <img
                      className="w-10 bg-white border-[.1em] border-black rounded-full ml-2 p-1"
                      src="/shopping_cart.svg"
                    ></img>
                  </div>
                  <div
                    style={{ backgroundImage: "url(painting_2.jpg)" }}
                    className="w-full h-[30em] lg:h-[15em] xl:h-[15em] 2xl:h-[25em] bg-black bg-cover bg-center"
                  ></div>
                  <div className="p-5 border-t-[.01em]">
                    <p className="text-xl">{a_2}</p>
                    <p className="text-sm">
                      {ac} , 22.9 {w} x 30.5 {he} x 1.8 {de} cm
                    </p>
                    <p className="mt-2">
                      {by} <span>James Healy</span>
                    </p>
                    <p>HK$5,000</p>
                  </div>
                </Link>
                <Link
                  href={"/product"}
                  className="group cursor-pointer border-[.01em] hover:brightness-[90%] duration-300"
                >
                  <div className="absolute flex items-center opacity-0 duration-300 group-hover:opacity-100 p-2">
                    <img
                      className="w-10 bg-white border-[.1em] border-black rounded-full p-1"
                      src="/star.svg"
                    ></img>{" "}
                    <img
                      className="w-10 bg-white border-[.1em] border-black rounded-full ml-2 p-1"
                      src="/shopping_cart.svg"
                    ></img>
                  </div>
                  <div
                    style={{ backgroundImage: "url(painting_3.jpg)" }}
                    className="w-full h-[30em] lg:h-[15em] xl:h-[15em] 2xl:h-[25em] bg-black bg-cover bg-center"
                  ></div>
                  <div className="p-5 border-t-[.01em]">
                    <p className="text-xl">{a_3}</p>
                    <p className="text-sm">
                      {ac} , 22.9 {w} x 30.5 {he} x 1.8 {de} cm
                    </p>
                    <p className="mt-2">
                      {by} <span>Dmitry Mashkin</span>
                    </p>
                    <p>HK$70,000</p>
                  </div>
                </Link>
                <Link
                  href={"/product"}
                  className="group cursor-pointer border-[.01em] hover:brightness-[90%] duration-300"
                >
                  <div className="absolute flex items-center opacity-0 duration-300 group-hover:opacity-100 p-2">
                    <img
                      className="w-10 bg-white border-[.1em] border-black rounded-full p-1"
                      src="/star.svg"
                    ></img>{" "}
                    <img
                      className="w-10 bg-white border-[.1em] border-black rounded-full ml-2 p-1"
                      src="/shopping_cart.svg"
                    ></img>
                  </div>
                  <div
                    style={{ backgroundImage: "url(art.jpg)" }}
                    className="w-full h-[30em] lg:h-[15em] xl:h-[15em] 2xl:h-[25em] bg-black bg-cover bg-center"
                  ></div>
                  <div className="p-5 border-t-[.01em]">
                    <p className="text-xl">{a_4}</p>
                    <p className="text-sm">
                      {ac} , 22.9 {w} x 30.5 {he} x 1.8 {de} cm
                    </p>
                    <p className="mt-2">
                      {by} <span>Sandio Cavorlan</span>
                    </p>
                    <p>HK$8,900,732</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
