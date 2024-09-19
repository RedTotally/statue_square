"use client";

import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function Product() {
  const { id } = useParams();

  const langCookie = getCookie("language");

  //Language Zone - Product
  const [ad, sad] = useState("");

  const [ac, sac] = useState("");

  const [w, sw] = useState("");
  const [h, sh] = useState("");
  const [d, sd] = useState("");

  const [r, sr] = useState("");
  const [atcb, satcb] = useState("");
  const [hacwts, shacwts] = useState("");

  const [uri, suri] = useState("");
  const [sep, ssep] = useState("");
  const [lmasep, slmasep] = useState("");

  const [f, sf] = useState("");
  const [v, sv] = useState("");
  //!--

  //Language Zone - Description
  const [ssva, sssva] = useState("");
  const [lmaovp, slmaovp] = useState("");

  const [tsbta, stsbta] = useState("");
  const [tsbtat, stsbtat] = useState("");

  const [toota, stoota] = useState("");
  const [tootat, stootat] = useState("");

  const [dt, sdt] = useState("");
  const [dtt, sdtt] = useState("");

  const [ssva2, sssva2] = useState("");

  const [ai, sai] = useState("");
  //!--

  //Art
  const [photoLink, setPhotoLink] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  //!--

  async function languageProcessor() {
    try {
      if (langCookie == "en") {
        sad("Art Demostration");
        sac("Painting, Oil on Canvas");
        sw("W");
        sh("H");
        sd("D");
        sr("Reviews");
        satcb("Add to Cart");
        shacwts("Have a Conversation With the Seller");
        suri("Unsatisfactory Return Included");
        ssep("Safety Enhanced Process");
        slmasep("Learn More About Safety Enhanced Process");
        sf(" Favorited");
        sv("Views");

        sssva("Statue Square Verified Artwork");
        slmaovp("Learn More About Our Verification Process");
        stsbta("The Story Behind The Art");
        stsbtat(
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque laborum possimus inventore dolores, accusamus quas omnis adipisci natus, veniam sunt autem maxime amet ad explicabo asperiores! Esse eveniet fugit reiciendis animi voluptatibus, praesentium qui harum laudantium quia tempora ipsa nobis et tenetur facilis assumenda, ratione enim aut repudiandae aspernatur eos cumque commodi aliquam ipsam. Deserunt repellendus temporibus voluptates labore laboriosam, eum officiis exercitationem ipsam eius cumque obcaecati incidunt, illum doloribus sit laudantium dolores repellat velit tenetur, sed corporis? Quos ex voluptates voluptatibus! Alias consequatur aperiam voluptates, iusto eos, dicta dolores vel ipsam unde obcaecati, sint voluptas. Quo fuga numquam eaque repellendus, explicabo adipisci, nulla, facere accusantium harum consequatur id reiciendis saepe aut omnis iste veritatis repellat praesentium similique ullam hic voluptatem vero sit? Aliquam impedit id nulla minus nobis maxime laborum? Quasi corporis molestias laborum iure error, eos maiores assumenda consequatur unde optio illum. Impedit iste culpa magni eos voluptates praesentium perferendis veritatis sequi! Ratione totam quidem impedit veniam doloribus harum eum sunt est. Harum, perferendis exercitationem iste voluptatibus veniam eaque praesentium eius aperiam fuga ducimus accusantium, vero natus magni ipsam dicta deserunt ab omnis explicabo voluptate neque, consequatur accusamus voluptatem. Ducimus saepe asperiores praesentium? Dicta mollitia dolorum voluptas eos, autem harum sint, praesentium temporibus odit porro exercitationem quas iure debitis ut consequuntur enim nisi aperiam asperiores saepe quidem in a quod! Saepe amet sit vitae iure provident unde dolor fuga, ullam aut, autem, facilis adipisci totam rem magnam aperiam dignissimos nesciunt quibusdam molestias. Explicabo sequi facilis quaerat nobis cum ut laboriosam velit placeat facere est laborum, aperiam alias autem perspiciatis rerum omnis necessitatibus asperiores ratione qui debitis eligendi consequuntur eum. Id eos eius veritatis consequatur delectus tenetur commodi esse hic incidunt sapiente expedita earum sit cumque quasi, repudiandae animi! Amet minus magni beatae saepe ad ab, obcaecati rerum fuga."
        );
        stoota("The Origin of The Art");
        stootat(
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos et magnam aliquam hic earum iusto praesentium minima ratione, nam ullam voluptates eveniet ipsa eligendi delectus. Quas debitis impedit doloremque aspernatur quidem eius? Numquam dignissimos perspiciatis corrupti mollitia repellat reprehenderit ullam eos, esse laboriosam cum obcaecati repellendus necessitatibus facilis voluptates accusamus ut possimus nisi quis sequi reiciendis modi ad quo quod? Ullam molestiae natus ab pariatur veritatis, ex iusto rerum maiores dolores? Non molestiae quidem dignissimos, modi, sequi illum corrupti minima sed voluptatibus, harum eaque obcaecati quisquam aspernatur facilis animi aliquam officia consequatur ex excepturi adipisci dolor quo! Nulla, impedit nisi?"
        );
        sdt("Delivery Time");
        sdtt("Typically 10-14 business days.");

        sssva2("Statue Square Verified Artist");
        sai(
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, molestias pariatur totam est sequi, dolores ipsa, modi ipsum voluptatum vel tempora blanditiis! Aspernatur illo voluptatum tempora reprehenderit fugiat velit harum repellat expedita recusandae, dolorem ullam perferendis soluta maiores quia, voluptatem accusantium id natus cupiditate. Modi unde quaerat odit dolores soluta voluptatibus maxime veniam repudiandae labore, officiis deserunt a doloribus illo obcaecati velit, reprehenderit fugiat architecto possimus amet? Similique, labore odit? Velit modi sapiente libero blanditiis doloribus error alias animi sint culpa maxime a, dolore tempore natus, necessitatibus ut id cum asperiores pariatur sequi possimus deleniti autem? Hic quod eveniet voluptatem est eius, animi ea officiis temporibus quae? Facilis inventore, sed aut, neque et sit quae hic eos voluptatem quia non voluptate, sunt exercitationem perferendis aspernatur cumque enim. Et tempora sit aliquid voluptate delectus molestias temporibus voluptatem vitae magni harum nesciunt, laudantium optio aperiam consequatur veritatis quas quidem. Natus, aspernatur voluptatibus!"
        );
      } else if (langCookie == "tch") {
        sad("藝術品演示");
        sac("繪畫、布面油畫");
        sw("闊");
        sh("高");
        sd("深");
        sr("評論");
        satcb("加入至購物車");
        shacwts("與賣家對話");
        suri("包含不滿意退貨");
        ssep("安全強化流程");
        slmasep("了解有關安全增強流程的更多信息");
        sf(" 喜愛");
        sv("觀看過");

        sssva("Statue Square 已驗證的藝術品");
        slmaovp("了解有關我們驗證流程的更多信息");
        stsbta("藝術品背後的故事");
        stsbtat(
          "藝術背後的故事，發生了會如何，不發生又會如何。既然是這樣，裴斯泰洛齊曾經告訴世人，今天應做的事沒有做，明天再早也是耽誤了。這讓我深深地想到，了解清楚藝術背後的故事到底是一種怎麽樣的存在，是解決一切問題的關鍵。我認為，至於為什麼要思考藝術背後的故事呢？其實是有更深層的原因，米歇潘有說過一句話，生命是一條艱險的峽谷，只有勇敢的人才能通過。這似乎非常的有道理，對吧？一般來說，藝術背後的故事因何而發生？卡耐基曾經告訴世人，我們若已接受最壞的，就再沒有什麽損失。這讓我深深地想到，為什麼是這樣呢？畢卡索曾經告訴世人，呵！高尚的風度！多可怕的東西！風度乃是創造力的敵人。帶著這句話，我們還要更加慎重的審視這個問題：我這幾天一直在思索這個問題，問題的關鍵究竟為何？愛因斯坦曾經告訴世人，人只有獻身於社會，才能找出那短暫而有風險的生命的意義。我希望諸位也能好好地體會這句話。更多藝術背後的故事的意義是這樣的，一般來講，我們都必須務必慎重的考慮考慮。"
        );
        stoota("藝術品的起源");
        stootat(
          "每個人都不得不面對這些問題。 在面對這種問題時，現在，解決藝術的來源的問題，是非常非常重要的。 所以，蘇軾曾經說過，古之立大事者，不惟有超世之才，亦必有堅忍不拔之志。我希望諸位也能好好地體會這句話。藝術的來源的發生，到底需要如何做到，不藝術的來源的發生，又會如何產生。黑格爾講過一句話，只有永遠躺在泥坑里的人，才不會再掉進坑里。這似乎非常的有道理，對吧？在這種困難的抉擇下，本人思來想去，寢食難安。其實藝術的來源是非常值得我們深思的。藝術的來源真的是很值得探究，我認為，既然如此，富蘭克林曾經講過，讀書是易事，思索是難事，但兩者缺一，便全無用處。這讓我思索了許久，要想清楚，藝術的來源，到底是一種怎麽樣的存在。"
        );
        sdt("運送時間");
        sdtt("通常為 10-14 個工作天。");

        sssva2("Statue Square 已驗證藝術家");
        sai(
          "鄧拓曾經講過，越是沒有本領的就越加自命不凡。帶著這句話，我們還要更加慎重的審視這個問題：所以說，就我個人來說，關於此藝術家對我的意義，不能不說非常重大。問題的關鍵究竟為何？總結的來說，佚名曾經講過，感激每一個新的挑戰，因為它會鍛造你的意志和品格。這句話語雖然很短，但令我浮想聯翩。那麽，我們都知道，只要有意義，那麽就必須慎重考慮。這種事實對本人來說意義重大，相信對這個世界也是有一定意義的。我這幾天一直在思索這個問題，關於此藝術家真的是很值得探究，黑塞有一句座右銘，有勇氣承擔命運這才是英雄好漢。這不禁令我深思。你真的了解關於此藝術家嗎？關於此藝術家，到底應該如何實現。關於此藝術家的意義其實就隱藏在我們的生活中，陶淵明講過一句話，盛年不重來，一日難再晨。及時當勉勵，歲月不待人。這似乎非常的有道理，對吧？我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。為什麼是這樣呢？我認為，既然是這樣，經過上述討論，其實關於此藝術家是非常值得我們深思的。更多關於此藝術家的意義是這樣的，既然如此，生活中，若關於此藝術家出現了，我們就不得不考慮它出現了的事實。"
        );
      } else if (langCookie == "sch") {
        sad("艺术品演示");
        sac("绘画、布面油画");
        sw("阔");
        sh("高");
        sd("深");
        sr("评论");
        satcb("加入至购物车");
        shacwts("与卖家对话");
        suri("包含不满意退货");
        ssep("安全强化流程");
        slmasep("了解有关安全增强流程的更多信息");
        sf(" 喜爱");
        sv("观看过");

        sssva("Statue Square 已验证的艺术品");
        slmaovp("了解有关我们验证流程的更多信息");
        stsbta("艺术品背后的故事");
        stsbtat(
          "艺术背后的故事，发生了会如何，不发生又会如何。既然是这样，裴斯泰洛齐曾经告诉世人，今天应做的事没有做，明天再早也是耽误了。这让我深深地想到，了解清楚艺术背后的故事到底是一种怎么样的存在，是解决一切问题的关键。我认为，至于为什么要思考艺术背后的故事呢？其实是有更深层的原因，米歇潘有说过一句话，生命是一条艰险的峡谷，只有勇敢的人才能通过。这似乎非常的有道理，对吧？一般来说，艺术背后的故事因何而发生？卡耐基曾经告诉世人，我们若已接受最坏的，就再没有什么损失。这让我深深地想到，为什么是这样呢？毕卡索曾经告诉世人，呵！高尚的风度！多可怕的东西！风度乃是创造力的敌人。带着这句话，我们还要更加慎重的审视这个问题：我这几天一直在思索这个问题，问题的关键究竟为何？爱因斯坦曾经告诉世人，人只有献身于社会，才能找出那短暂而有风险的生命的意义。我希望诸位也能好好地体会这句话。更多艺术背后的故事的意义是这样的，一般来讲，我们都必须务必慎重的考虑考虑。"
        );
        stoota("艺术品的起源");
        stootat(
          "每个人都不得不面对这些问题。 在面对这种问题时，现在，解决艺术的来源的问题，是非常非常重要的。 所以，苏轼曾经说过，古之立大事者，不惟有超世之才，亦必有坚忍不拔之志。我希望诸位也能好好地体会这句话。艺术的来源的发生，到底需要如何做到，不艺术的来源的发生，又会如何产生。黑格尔讲过一句话，只有永远躺在泥坑里的人，才不会再掉进坑里。这似乎非常的有道理，对吧？在这种困难的抉择下，本人思来想去，寝食难安。其实艺术的来源是非常值得我们深思的。艺术的来源真的是很值得探究，我认为，既然如此，富兰克林曾经讲过，读书是易事，思索是难事，但两者缺一，便全无用处。这让我思索了许久，要想清楚，艺术的来源，到底是一种怎么样的存在。"
        );
        sdt("运送时间");
        sdtt("通常为 10-14 个工作天。");

        sssva2("Statue Square 已验证艺术家");
        sai(
          "邓拓曾经讲过，越是没有本领的就越加自命不凡。带着这句话，我们还要更加慎重的审视这个问题：所以说，就我个人来说，关于此艺术家对我的意义，不能不说非常重大。问题的关键究竟为何？总结的来说，佚名曾经讲过，感激每一个新的挑战，因为它会锻造你的意志和品格。这句话语虽然很短，但令我浮想联翩。那么，我们都知道，只要有意义，那么就必须慎重考虑。这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。我这几天一直在思索这个问题，关于此艺术家真的是很值得探究，黑塞有一句座右铭，有勇气承担命运这才是英雄好汉。这不禁令我深思。你真的了解关于此艺术家吗？关于此艺术家，到底应该如何实现。关于此艺术家的意义其实就隐藏在我们的生活中，陶渊明讲过一句话，盛年不重来，一日难再晨。及时当勉励，岁月不待人。这似乎非常的有道理，对吧？我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。为什么是这样呢？我认为，既然是这样，经过上述讨论，其实关于此艺术家是非常值得我们深思的。更多关于此艺术家的意义是这样的，既然如此，生活中，若关于此艺术家出现了，我们就不得不考虑它出现了的事实。"
        );
      }
    } catch (e) {
      console.log("Error processing language.");
    }
  }

  async function productProcessor() {
    console.log(id);

    //Product 1
    if (id == "1") {
      setPhotoLink("/painting_1.png");
      setAuthor("Leonardo da Vinci");
      setPrice("5,000,000");
      if (langCookie == "en") {
        sad("Mona Lisa");
      } else if (langCookie == "tch") {
        sad("蒙娜麗莎");
      } else if (langCookie == "sch") {
        sad("蒙娜丽莎");
      }
    }
    //!--

    //Product 2
    if (id == "2") {
      setPhotoLink("/painting_2.jpg");
      setAuthor("James Healy");
      setPrice("5,000");
      if (langCookie == "en") {
        sad("Fearless");
      } else if (langCookie == "tch") {
        sad("無所畏懼");
      } else if (langCookie == "sch") {
        sad("无所畏惧");
      }
    }
    //!--

    //Product 3
    if (id == "3") {
      setPhotoLink("/painting_3.jpg");
      setAuthor("Dmitry Mashkin");
      setPrice("70,000");
      if (langCookie == "en") {
        sad("Creativity");
      } else if (langCookie == "tch") {
        sad("創造力");
      } else if (langCookie == "sch") {
        sad("创造力");
      }
    }
    //!--

    //Product 4
    if (id == "4") {
      setPhotoLink("/art.jpg");
      setAuthor("Sandio Cavorlan");
      setPrice("8,900,732");
      if (langCookie == "en") {
        sad("Alphabetical");
      } else if (langCookie == "tch") {
        sad("子母序列");
      } else if (langCookie == "sch") {
        sad("子母序列");
      }
    }
    //!--
  }

  useEffect(() => {
    languageProcessor();
    productProcessor();
  });

  return (
    <>
      <div className="flex justify-center">
        <div className="p-10 w-[70em]">
          <div className="lg:grid gap-10 grid-cols-10">
            <div>
              <div
                style={{ backgroundImage: `url(${photoLink})` }}
                className="border-black cursor-pointer border-2
               bg-cover bg-center w-[5em] h-[5em] bg-black"
              ></div>
            </div>
            <div className="col-span-5 mt-5 lg:mt-0">
              <img src={photoLink}></img>
            </div>
            <div className="col-span-4 bg-gray-50 p-10">
              <p className="text-2xl">{ad}</p>
              <p className="text-indigo-500 cursor-pointer">{author}</p>
              <p className="mt-5">{ac}</p>
              <p className="text-sm">
                22.9 {w} x 30.5 {h} x 1.8 {d}
              </p>

              <p className="text-3xl mt-10">HK${price}</p>

              <div className="flex items-center">
                <img src="/filled-star.svg"></img>
                <img src="/filled-star.svg"></img>
                <img src="/filled-star.svg"></img>
                <img src="/filled-star.svg"></img>
                <img src="/filled-star.svg"></img>
                <p className="ml-2 underline curpo">0 {r}</p>
              </div>

              <p className="text-white bg-black p-5 text-center mt-3 cursor-pointer">
                {atcb}
              </p>
              <p className="p-5 text-center cursor-pointer underline">
                {hacwts}
              </p>
              <hr className="mt-10 mb-10"></hr>
              <p className="flex items-center">
                <img className="mr-2" src="/tick.svg"></img>
                {uri}
              </p>
              <p className="flex items-center">
                <img className="mr-2" src="/tick.svg"></img>
                {sep}
              </p>
              <p className="text-xs underline cursor-pointer">{lmasep}</p>

              <hr className="mt-10 mb-10"></hr>

              <div className="flex justify-between items-center">
                <p className="flex items-center">
                  <img className="cursor-pointer" src="/star.svg"></img>0{f}
                </p>
                <p>0 {v}</p>
              </div>
            </div>
          </div>
          <hr className="mt-20 mb-20"></hr>
          <p className="p-5 bg-black text-white font-bold flex items-center">
            <img className="mr-2" src="/verified.svg"></img>
            {ssva}
          </p>
          <p className="text-xs underline cursor-pointer">{lmaovp}</p>

          <p className="text-2xl mt-10">{tsbta}</p>
          <p className="mt-5">{tsbtat}</p>

          <p className="text-2xl mt-10">{toota}</p>
          <p className="mt-5">{tootat}</p>

          <p className="text-2xl mt-10">{dt}</p>
          <p className="mt-5">{dtt}</p>

          <div className="mt-20">
            <div className="lg:flex items-center">
              <div
                style={{ backgroundImage: "url(/artist.jpg)" }}
                className="w-full lg:w-[15em] h-[15em] bg-black lg:rounded-full bg-cover bg-center"
              ></div>
              <div className="mt-5 lg:mt-0 lg:ml-10">
                <p className="text-3xl lg:text-6xl">{author}</p>
                <p className="mt-5 p-5 bg-black text-white font-bold flex items-center">
                  <img className="mr-2" src="/verified.svg"></img>
                  {ssva2}
                </p>
                <p className="text-xs underline cursor-pointer">{lmaovp}</p>
                <p className="text-xs mt-5 lg:w-[50em]">{ai}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
