"use client";

import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";

export default function Cart() {
  const langCookie = getCookie("language");

  //Language Zone - Content
  const [yc, syc] = useState("");

  const [pc, spc] = useState("");
  const [a, sa] = useState("");

  const [yr, syr] = useState("");

  const [pi, spi] = useState("");
  const [et, set] = useState("");

  const [pb, spb] = useState("");

  const [wbsy, swbsy] = useState("");
  const [wbsyt, swbsyt] = useState("");

  const [sg, ssg] = useState("");
  const [sgt, ssgt] = useState("");

  const [sss, ssss] = useState("");
  const [ssst, sssst] = useState("");

  const [aep, saep] = useState("");
  const [aept, saept] = useState("");
  //!--

  //Language Zone - Art
  const [a_1, sa_1] = useState("");
  const [a_2, sa_2] = useState("");
  const [a_3, sa_3] = useState("");

  const [by, sby] = useState("");
  //!--

  async function languageProcessor() {
    try {
      if (langCookie == "en") {
        syc("Your Cart");

        sby("By");
        sa_1("Fearles");
        sa_2("Creativity");
        sa_3("Alphabetical");

        spc("Promo code...");
        sa("Apply");

        syr("Your Receipt");
        spi("Purchase Item(s)");

        set("Estimated Total");

        spb("Go to Secure Payment Methods");

        swbsy("We Best Serve You");
        swbsyt(
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, necessitatibus, quasi eos earum adipisci officia totam possimus nesciunt doloremque suscipit tempore. Animi quam deleniti libero voluptate. Minus alias cumque blanditiis tempore facere officiis soluta sit dignissimos ipsum quas deserunt beatae quod, odio, vero culpa natus? Fuga omnis dicta similique reiciendis?"
        );

        ssg("Satisfaction Guaranteed");
        ssgt(
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, necessitatibus, quasi eos earum adipisci officia totam possimus nesciunt doloremque suscipit tempore. Animi quam deleniti libero voluptate. Minus alias cumque blanditiis tempore facere officiis soluta sit dignissimos ipsum quas deserunt beatae quod, odio, vero culpa natus? Fuga omnis dicta similique reiciendis?"
        );

        ssss("Safe & Secure Shopping");
        sssst(
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, necessitatibus, quasi eos earum adipisci officia totam possimus nesciunt doloremque suscipit tempore. Animi quam deleniti libero voluptate. Minus alias cumque blanditiis tempore facere officiis soluta sit dignissimos ipsum quas deserunt beatae quod, odio, vero culpa natus? Fuga omnis dicta similique reiciendis?"
        );

        saep("Artists' Ecosystem Preservation");
        saept(
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, necessitatibus, quasi eos earum adipisci officia totam possimus nesciunt doloremque suscipit tempore. Animi quam deleniti libero voluptate. Minus alias cumque blanditiis tempore facere officiis soluta sit dignissimos ipsum quas deserunt beatae quod, odio, vero culpa natus? Fuga omnis dicta similique reiciendis?"
        );
      } else if (langCookie == "tch") {
        syc("您的購物車");

        sby("由藝術家");
        sa_1("無所畏懼");
        sa_2("創造力");
        sa_3("子母序列");

        spc("優惠碼...");
        sa("套用");

        syr("您的收據");
        spi("購買項目");

        set("預計總數");

        spb("前往安全性支付工具");

        swbsy("我們最好地服務您");
        swbsyt(
          "每個人都不得不面對這些問題。 在面對這種問題時，生活中，若我們最好地服務您出現了，我們就不得不考慮它出現了的事實。文森特·皮爾在不經意間這樣說過，改變你的想法，你就改變了自己的世界。這讓我深深地想到，其實我們最好地服務您是非常值得我們深思的。既然如此，我們都知道，只要有意義，那麽就必須慎重考慮。一般來講，我們都必須務必慎重的考慮考慮。更多我們最好地服務您的意義是這樣的，我們不得不面對一個非常尷尬的事實，那就是，為什麼我們最好地服務您對我們來說這麼重要？"
        );

        ssg("滿意保證");
        ssgt(
          "列夫·托爾斯泰有講過一句名言，人生不是一種享樂，而是一樁十分沉重的工作。這讓我思索了許久，愛因斯坦有說過一句話，人的差異在於業餘時間。這似乎非常的有道理，對吧？滿意保證因何而發生？我認為，要想清楚，滿意保證，到底是一種怎麽樣的存在。培根有一句座右銘，要知道對好事的稱頌過於誇大，也會招來人們的反感輕蔑和嫉妒。這讓我深深地想到，我們不得不面對一個非常尷尬的事實，那就是，就我個人來說，滿意保證對我的意義，不能不說非常重大。所以說，那麽，在這種困難的抉擇下，本人思來想去，寢食難安。"
        );

        ssss("受安全保障的購物體驗");
        sssst(
          "愛爾蘭有講過一句名言，越是無能的人，越喜歡挑剔別人的錯兒。這果然是一句至理名言。經過上述討論，現在，解決受安全保障的購物體驗的問題，是非常非常重要的。 所以，奧斯特洛夫斯基曾經說過，人的一生可能燃燒也可能腐朽，我不能腐朽，我願意燃燒起來！這似乎非常的有道理，對吧？其實受安全保障的購物體驗是非常值得我們深思的。樂府《長歌行》曾經講過，少壯不努力，老大徒傷悲。這似乎非常的有道理，對吧？"
        );

        saep("藝術家生態保育");
        saept(
          "所謂藝術家生態保育，關鍵是藝術家生態保育需要如何寫。藝術家生態保育真的是很值得探究，歌德曾經說過一句發人深省的話，決定一個人的一生，以及整個命運的，只是一瞬之間。這讓我思索了許久，為什麼是這樣呢？培根告訴我們，合理安排時間，就等於節約時間。我希望諸位也能好好地體會這句話。總結的來說，其實藝術家生態保育是非常值得我們深思的。"
        );
      } else if (langCookie == "sch") {
        syc("您的购物车");

        sby("由艺术家");
        sa_1("无所畏惧");
        sa_2("创造力");
        sa_3("子母序列");

        spc("优惠码...");
        sa("套用");

        syr("您的收据");
        spi("购买项目");

        set("预计总数");

        spb("前往安全性支付工具");

        swbsy("我们最好地服务您");
        swbsyt(
          "每个人都不得不面对这些问题。 在面对这种问题时，生活中，若我们最好地服务您出现了，我们就不得不考虑它出现了的事实。文森特·皮尔在不经意间这样说过，改变你的想法，你就改变了自己的世界。这让我深深地想到，其实我们最好地服务您是非常值得我们深思的。既然如此，我们都知道，只要有意义，那么就必须慎重考虑。一般来讲，我们都必须务必慎重的考虑考虑。更多我们最好地服务您的意义是这样的，我们不得不面对一个非常尴尬的事实，那就是，为什么我们最好地服务您对我们来说这么重要？"
        );

        ssg("满意保证");
        ssgt(
          "列夫·托尔斯泰有讲过一句名言，人生不是一种享乐，而是一桩十分沉重的工作。这让我思索了许久，爱因斯坦有说过一句话，人的差异在于业余时间。这似乎非常的有道理，对吧？满意保证因何而发生？我认为，要想清楚，满意保证，到底是一种怎么样的存在。培根有一句座右铭，要知道对好事的称颂过于夸大，也会招来人们的反感轻蔑和嫉妒。这让我深深地想到，我们不得不面对一个非常尴尬的事实，那就是，就我个人来说，满意保证对我的意义，不能不说非常重大。所以说，那么，在这种困难的抉择下，本人思来想去，寝食难安。"
        );

        ssss("受安全保障的购物体验");
        sssst(
          "爱尔兰有讲过一句名言，越是无能的人，越喜欢挑剔别人的错儿。这果然是一句至理名言。经过上述讨论，现在，解决受安全保障的购物体验的问题，是非常非常重要的。所以，奥斯特洛夫斯基曾经说过，人的一生可能燃烧也可能腐朽，我不能腐朽，我愿意燃烧起来！这似乎非常的有道理，对吧？其实受安全保障的购物体验是非常值得我们深思的。乐府《长歌行》曾经讲过，少壮不努力，老大徒伤悲。这似乎非常的有道理，对吧？"
        );

        saep("艺术家生态保育");
        saept(
          "所谓艺术家生态保育，关键是艺术家生态保育需要如何写。艺术家生态保育真的是很值得探究，歌德曾经说过一句发人深省的话，决定一个人的一生，以及整个命运的，只是一瞬之间。这让我思索了许久，为什么是这样呢？培根告诉我们，合理安排时间，就等于节约时间。我希望诸位也能好好地体会这句话。总结的来说，其实艺术家生态保育是非常值得我们深思的。"
        );
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
      <div className="p-10 lg:grid grid-cols-5">
        <div className="col-span-3 p-5">
          <p className="text-3xl lg:text-6xl">{yc}</p>
          <div className="mt-5 p-10 overflow-x-auto">
            <div className="flex items-center justify-between w-[60em]">
              <div className="flex items-center">
                <div>
                  <input type="checkbox"></input>
                </div>
                <div className="mx-10"></div>
                <div
                  style={{ backgroundImage: "url(/painting_2.jpg)" }}
                  className="bg-cover bg-center w-[10em] h-[10em] bg-black"
                ></div>
                <div className="mx-10"></div>
                <div>
                  <p className="text-2xl">{a_1}</p>
                  <p className="mt-2">{by} James Healy</p>
                  <p>HK$5,000</p>
                </div>
              </div>

              <img className="cursor-pointer" src="/trash.svg"></img>
            </div>

            <div className="my-5"></div>

            <div className="flex items-center justify-between w-[60em]">
              <div className="flex items-center">
                <div>
                  <input type="checkbox"></input>
                </div>
                <div className="mx-10"></div>
                <div
                  style={{ backgroundImage: "url(/painting_3.jpg)" }}
                  className="bg-cover bg-center w-[10em] h-[10em] bg-black"
                ></div>
                <div className="mx-10"></div>
                <div>
                  <p className="text-2xl">{a_2}</p>
                  <p className="mt-2">{by} Dmitry Mashkin</p>
                  <p>HK$70,000</p>
                </div>
              </div>

              <img className="cursor-pointer" src="/trash.svg"></img>
            </div>
            <div className="my-5"></div>

            <div className="flex items-center justify-between w-[60em]">
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
                  <p className="text-2xl">{a_3}</p>
                  <p className="mt-2">{by} Sandio Cavorlan</p>
                  <p>HK$8,900,732</p>
                </div>
              </div>

              <img className="cursor-pointer" src="/trash.svg"></img>
            </div>
            <div className="mt-20 lg:flex items-center">
              <input
                placeholder={pc}
                className="outline-none border-[.1em] border-black w-full p-5"
              ></input>
              <div className="lg:mx-2"></div>
              <p className="mt-5 lg:mt-0 border-[.1em] border-black p-5 lg:w-[15em] text-center hover:bg-black hover:text-white duration-300 cursor-pointer">
                {a}
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-2 mt-10 lg:mt-0">
          <div className="bg-black p-5">
            <p className="text-3xl lg:text-6xl text-white">{yr}</p>
            <div className="p-5">
              <p className="text-white text-3xl">{pi}</p>
              <ul className="mt-5">
                <li className="text-white flex justify-between text-sm">
                  {a_1} <span>HK$5,000</span>
                </li>
                <li className="text-white flex justify-between text-sm">
                  {a_2} <span>HK$70,000</span>
                </li>
                <li className="text-white flex justify-between text-sm">
                  {a_3} <span>HK$8,900,732</span>
                </li>
              </ul>
              <hr className="mt-5 mb-5"></hr>
              <p className="text-white lg:flex justify-between text-xl">
                {et}
                <br className="lg:hidden"></br> <span>HK$8,975,732</span>
              </p>
            </div>
          </div>
          <div className="mt-5">
            <p className="text-center bg-lime-500 text-white p-5 cursor-pointer duration-300 hover:brightness-[90%]">
              {pb}
            </p>
          </div>

          <div className="mt-10">
            <div className="flex items-center">
              <img className="w-[5em]" src="/star.svg"></img>
              <div className="mx-2"></div>
              <div className="w-[35em]">
                <p className="text-3xl">{wbsy}</p>
                <p className="text-xs mt-2 text-gray-600">{wbsyt}</p>
              </div>
            </div>

            <div className="flex items-center mt-10">
              <img className="w-[5em]" src="/happy-black.svg"></img>
              <div className="mx-2"></div>
              <div className="w-[35em]">
                <p className="text-3xl">{sg}</p>
                <p className="text-xs mt-2 text-gray-600">{sgt}</p>
              </div>
            </div>

            <div className="flex items-center mt-10">
              <img className="w-[5em]" src="/safe-black.svg"></img>
              <div className="mx-2"></div>
              <div className="w-[35em]">
                <p className="text-3xl">{sss}</p>
                <p className="text-xs mt-2 text-gray-600">{ssst}</p>
              </div>
            </div>

            <div className="flex items-center mt-10">
              <img className="w-[5em]" src="/paid.svg"></img>
              <div className="mx-2"></div>
              <div className="w-[35em]">
                <p className="text-3xl">{aep}</p>
                <p className="text-xs mt-2 text-gray-600">{aept}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
