"use client";

import Link from "next/link";
import { getCookie, setCookie } from "cookies-next";
import { useEffect, useState } from "react";

export default function Home() {
  const langCookie = getCookie("language");

  //Language Zone - Content
  var [ht1_1, sht1_1] = useState("");
  var [ht1_2, sht1_2] = useState("");
  var [hb1, shb1] = useState("");

  var [ht2, sht2] = useState("");
  var [heog, sheog] = useState("");

  var [ht3, sht3] = useState("");
  var [hs, shs] = useState("");

  var [haotw, shaotw] = useState("");

  var [tsbta, stsbta] = useState("");
  var [tsbtat, stsbtat] = useState("");

  var [toota, stoota] = useState("");
  var [tootat, stootat] = useState("");

  var [ata, sata] = useState("");
  var [atat, satat] = useState("");

  var [lmata, slmata] = useState("");

  var [ht4_1, sht4_1] = useState("");
  var [ht4_2, sht4_2] = useState("");
  var [ht4_3, sht4_3] = useState("");

  var [mikd_1, smikd_1] = useState("");
  var [mikd_2, smikd_2] = useState("");

  var [ht5_1, sht5_1] = useState("");
  var [ht5_2, sht5_2] = useState("");

  var [nrd, snrd] = useState("");

  var [futbk, sfutbk] = useState("");
  var [futbkt, sfutbkt] = useState("");

  var [ptae, sptae] = useState("");
  var [ptaet, sptaet] = useState("");

  var [sfbs, ssfbs] = useState("");
  var [sfbst, ssfbst] = useState("");
  //--!

  //Language Zone - Art

  var [a_1, sa_1] = useState("");
  var [a_2, sa_2] = useState("");
  var [a_3, sa_3] = useState("");
  var [a_4, sa_4] = useState("");

  var [by, sby] = useState("");

  var [d, sd] = useState("");

  //--~

  async function languageProcessor() {
    try {
      if (langCookie == "en") {
        sht1_1("We Sell Art, ");
        sht1_2("The Extraordinary Ones.");

        shb1("Explore Our Gallery");

        sht2("Discover the Unleashed Creativity by Our Marvellous Artist");
        sheog("Explore Our Gallery");

        sa_1("Mona Lisa");
        sa_2("Fearless");
        sa_3("Creativity");
        sa_4("Alphabetical");

        sby("By");

        sht3("Enter your budget, and shop by it.");
        shs("Submit");

        sd(
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cumque exercitationem quia quisquam labore assumenda beatae deserunt qui possimus et veniam maxime explicabo numquam, ab voluptate provident ullam asperiores totam soluta harum laboriosam adipisci? In asperiores amet nihil doloribus consequatur aspernatur culpa doloremque, totam at ea, quam iste modi laboriosam?"
        );

        shaotw("Art of the Week.");

        stsbta("The Story Behind The Art");
        stsbtat(
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque laborum possimus inventore dolores, accusamus quas omnis adipisci natus, veniam sunt autem maxime amet ad explicabo asperiores! Esse eveniet fugit reiciendis animi voluptatibus, praesentium qui harum laudantium quia tempora ipsa nobis et tenetur facilis assumenda, ratione enim aut repudiandae aspernatur eos cumque commodi aliquam ipsam. Deserunt repellendus temporibus voluptates labore laboriosam, eum officiis exercitationem ipsam eius cumque obcaecati incidunt, illum doloribus sit laudantium dolores repellat velit tenetur, sed corporis? Quos ex voluptates voluptatibus! Alias consequatur aperiam voluptates, iusto eos, dicta dolores vel ipsam unde obcaecati, sint voluptas. Quo fuga numquam eaque repellendus, explicabo adipisci, nulla, facere accusantium harum consequatur id reiciendis saepe aut omnis iste veritatis repellat praesentium similique ullam hic voluptatem vero sit? Aliquam impedit id nulla minus nobis maxime laborum? Quasi corporis molestias laborum iure error, eos maiores assumenda consequatur unde optio illum. Impedit iste culpa magni eos voluptates praesentium perferendis veritatis sequi! Ratione totam quidem impedit veniam doloribus harum eum sunt est. Harum, perferendis exercitationem iste voluptatibus veniam eaque praesentium eius aperiam fuga ducimus accusantium, vero natus magni ipsam dicta deserunt ab omnis explicabo voluptate neque, consequatur accusamus voluptatem. Ducimus saepe asperiores praesentium? Dicta mollitia dolorum voluptas eos, autem harum sint, praesentium temporibus odit porro exercitationem quas iure debitis ut consequuntur enim nisi aperiam asperiores saepe quidem in a quod! Saepe amet sit vitae iure provident unde dolor fuga, ullam aut, autem, facilis adipisci totam rem magnam aperiam dignissimos nesciunt quibusdam molestias. Explicabo sequi facilis quaerat nobis cum ut laboriosam velit placeat facere est laborum, aperiam alias autem perspiciatis rerum omnis necessitatibus asperiores ratione qui debitis eligendi consequuntur eum. Id eos eius veritatis consequatur delectus tenetur commodi esse hic incidunt sapiente expedita earum sit cumque quasi, repudiandae animi! Amet minus magni beatae saepe ad ab, obcaecati rerum fuga."
        );

        stoota("The Origin of The Art");
        stootat(
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos et magnam aliquam hic earum iusto praesentium minima ratione, nam ullam voluptates eveniet ipsa eligendi delectus. Quas debitis impedit doloremque aspernatur quidem eius? Numquam dignissimos perspiciatis corrupti mollitia repellat reprehenderit ullam eos, esse laboriosam cum obcaecati repellendus necessitatibus facilis voluptates accusamus ut possimus nisi quis sequi reiciendis modi ad quo quod? Ullam molestiae natus ab pariatur veritatis, ex iusto rerum maiores dolores? Non molestiae quidem dignissimos, modi, sequi illum corrupti minima sed voluptatibus, harum eaque obcaecati quisquam aspernatur facilis animi aliquam officia consequatur ex excepturi adipisci dolor quo! Nulla, impedit nisi?"
        );

        sata("About the Artist");
        satat(
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, molestias pariatur totam est sequi, dolores ipsa, modi ipsum voluptatum vel tempora blanditiis! Aspernatur illo voluptatum tempora reprehenderit fugiat velit harum repellat expedita recusandae, dolorem ullam perferendis soluta maiores quia, voluptatem accusantium id natus cupiditate. Modi unde quaerat odit dolores soluta voluptatibus maxime veniam repudiandae labore, officiis deserunt a doloribus illo obcaecati velit, reprehenderit fugiat architecto possimus amet? Similique, labore odit? Velit modi sapiente libero blanditiis doloribus error alias animi sint culpa maxime a, dolore tempore natus, necessitatibus ut id cum asperiores pariatur sequi possimus deleniti autem? Hic quod eveniet voluptatem est eius, animi ea officiis temporibus quae? Facilis inventore, sed aut, neque et sit quae hic eos voluptatem quia non voluptate, sunt exercitationem perferendis aspernatur cumque enim. Et tempora sit aliquid voluptate delectus molestias temporibus voluptatem vitae magni harum nesciunt, laudantium optio aperiam consequatur veritatis quas quidem. Natus, aspernatur voluptatibus!"
        );

        slmata("Learn more about the artist");

        sht4_1("We Started From Hong Kong, ");
        sht4_2("An Organization That is Made in");
        sht4_3(" Hong Kong.");

        smikd_1(
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam quibusdam saepe laudantium magni. Consequatur voluptate quisquam earum dolore, inventore quos voluptas at similique nesciunt eos, doloremque consectetur! Nobis reiciendis ea quisquam eaque, nam ad voluptate aperiam, maiores praesentium magni aspernatur laborum sequi eos fugit, possimus eius esse non reprehenderit. Eos voluptate sequi esse dolorum nisi iusto commodi temporibus, aperiam maxime facilis ex. Perspiciatis neque officiis nulla harum, eveniet laborum quae."
        );
        smikd_2("Lorem ipsum dolor sit amet.");

        sht5_1("Reserving the Name");
        sht5_2("Statue Square.");

        snrd(
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit voluptatem at, quas, enim eius suscipit iste quo culpa dolore consectetur minus voluptas ab unde hic adipisci mollitia, recusandae alias ea vitae maiores a architecto quis! Minus, atque! Delectus sed voluptate minima aliquid iusto voluptatem cupiditate eos fugiat quasi consectetur, labore molestias maiores reiciendis nobis sint tempore vero, dignissimos provident hic. Nemo consectetur, non tempora reprehenderit fugiat odit velit voluptatum at natus eum praesentium facere quos debitis rerum voluptate consequuntur reiciendis quidem, veniam ad eius accusamus. Sequi, illo. Labore earum praesentium sed enim ducimus autem, porro aliquid totam, accusamus quas iure."
        );

        sfutbk("From Underrated to Be Known");
        sfutbkt(
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, minima sequi esse hic placeat distinctio consequuntur facilis beatae a dicta laboriosam magnam reiciendis! Tenetur voluptate sapiente maxime. Vero recusandae excepturi consequatur ratione deserunt. Ex, velit."
        );

        sptae("Preserving the Artists' Ecosystem");
        sptaet(
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, minima sequi esse hic placeat distinctio consequuntur facilis beatae a dicta laboriosam magnam reiciendis! Tenetur voluptate sapiente maxime. Vero recusandae excepturi consequatur ratione deserunt. Ex, velit."
        );

        ssfbs("Safe for Both Stakeholders");
        ssfbst(
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, minima sequi esse hic placeat distinctio consequuntur facilis beatae a dicta laboriosam magnam reiciendis! Tenetur voluptate sapiente maxime. Vero recusandae excepturi consequatur ratione deserunt. Ex, velit."
        );
      } else if (langCookie == "tch") {
        sht1_1("我們售賣藝術品，");
        sht1_2("每一個都將創造非凡。");

        shb1("探索我們的畫廊");

        sht2("探索我們平台上超越創意框架的藝術家他們的藝術品");
        sheog("探索我們的畫廊");

        sa_1("蒙娜麗莎");
        sa_2("無所畏懼");
        sa_3("創造力");
        sa_4("子母序列");

        sby("由藝術家");

        sht3("輸入您的預算，我們將幫你梳理您心目中的心頭好。");
        shs("提交");

        sd(
          "要想清楚，子母序列，到底是一種怎麽樣的存在。而這些並不是完全重要，更加重要的問題是，我認為，總結的來說，雪萊曾經說過這麼一句話，過去屬於死神，未來屬於你自己。這句話語雖然很短，但令我浮想聯翩。子母序列的意義其實就隱藏在我們的生活中，我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。在這種困難的抉擇下，本人思來想去，寢食難安。都德曾經說過這麼一句話，好脾氣是一個人在社交中所能穿著的最佳服飾。這似乎非常的有道理，對吧？西班牙曾經講過，自知之明是最難得的知識。這讓我深深地想到，子母序列真的是很值得探究，為什麼是這樣呢？經過上述討論，所謂子母序列，關鍵是子母序列需要如何寫。就我個人來說，子母序列對我的意義，不能不說非常重大。生活中，若子母序列出現了，我們就不得不考慮它出現了的事實。"
        );

        shaotw("本星期藝術之星");

        stsbta("藝術背後的故事");
        stsbtat(
          "藝術背後的故事，發生了會如何，不發生又會如何。既然是這樣，裴斯泰洛齊曾經告訴世人，今天應做的事沒有做，明天再早也是耽誤了。這讓我深深地想到，了解清楚藝術背後的故事到底是一種怎麽樣的存在，是解決一切問題的關鍵。我認為，至於為什麼要思考藝術背後的故事呢？其實是有更深層的原因，米歇潘有說過一句話，生命是一條艱險的峽谷，只有勇敢的人才能通過。這似乎非常的有道理，對吧？一般來說，藝術背後的故事因何而發生？卡耐基曾經告訴世人，我們若已接受最壞的，就再沒有什麽損失。這讓我深深地想到，為什麼是這樣呢？畢卡索曾經告訴世人，呵！高尚的風度！多可怕的東西！風度乃是創造力的敵人。帶著這句話，我們還要更加慎重的審視這個問題：我這幾天一直在思索這個問題，問題的關鍵究竟為何？愛因斯坦曾經告訴世人，人只有獻身於社會，才能找出那短暫而有風險的生命的意義。我希望諸位也能好好地體會這句話。更多藝術背後的故事的意義是這樣的，一般來講，我們都必須務必慎重的考慮考慮。"
        );

        stoota("藝術的來源");
        stootat(
          "每個人都不得不面對這些問題。 在面對這種問題時，現在，解決藝術的來源的問題，是非常非常重要的。 所以，蘇軾曾經說過，古之立大事者，不惟有超世之才，亦必有堅忍不拔之志。我希望諸位也能好好地體會這句話。藝術的來源的發生，到底需要如何做到，不藝術的來源的發生，又會如何產生。黑格爾講過一句話，只有永遠躺在泥坑里的人，才不會再掉進坑里。這似乎非常的有道理，對吧？在這種困難的抉擇下，本人思來想去，寢食難安。其實藝術的來源是非常值得我們深思的。藝術的來源真的是很值得探究，我認為，既然如此，富蘭克林曾經講過，讀書是易事，思索是難事，但兩者缺一，便全無用處。這讓我思索了許久，要想清楚，藝術的來源，到底是一種怎麽樣的存在。"
        );

        sata("關於此藝術家");
        satat(
          "鄧拓曾經講過，越是沒有本領的就越加自命不凡。帶著這句話，我們還要更加慎重的審視這個問題：所以說，就我個人來說，關於此藝術家對我的意義，不能不說非常重大。問題的關鍵究竟為何？總結的來說，佚名曾經講過，感激每一個新的挑戰，因為它會鍛造你的意志和品格。這句話語雖然很短，但令我浮想聯翩。那麽，我們都知道，只要有意義，那麽就必須慎重考慮。這種事實對本人來說意義重大，相信對這個世界也是有一定意義的。我這幾天一直在思索這個問題，關於此藝術家真的是很值得探究，黑塞有一句座右銘，有勇氣承擔命運這才是英雄好漢。這不禁令我深思。你真的了解關於此藝術家嗎？關於此藝術家，到底應該如何實現。關於此藝術家的意義其實就隱藏在我們的生活中，陶淵明講過一句話，盛年不重來，一日難再晨。及時當勉勵，歲月不待人。這似乎非常的有道理，對吧？我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。為什麼是這樣呢？我認為，既然是這樣，經過上述討論，其實關於此藝術家是非常值得我們深思的。更多關於此藝術家的意義是這樣的，既然如此，生活中，若關於此藝術家出現了，我們就不得不考慮它出現了的事實。"
        );

        slmata("了解更多關於此藝術家");

        sht4_1("我們始於香港，");
        sht4_2(`一個機構，由源於`);
        sht4_3("香港製造。");

        smikd_1(
          "至於為什麼要思考香港製造呢？其實是有更深層的原因，就我個人來說，香港製造對我的意義，不能不說非常重大。而這些並不是完全重要，更加重要的問題是，在這種困難的抉擇下，本人思來想去，寢食難安。為什麼是這樣呢？香港製造因何而發生？每個人都不得不面對這些問題。 在面對這種問題時，帶著這些問題，我們來審視一下香港製造。香港製造真的是很值得探究，香港製造，到底應該如何實現。了解清楚香港製造到底是一種怎麽樣的存在，是解決一切問題的關鍵。"
        );
        smikd_2("一切源至於香港，我們敢想；我們敢做。");

        sht5_1("保存你我記得的那個名字");
        sht5_2("皇后像廣場 (Statue Square) 。");

        snrd(
          "其實皇后像廣場是非常值得我們深思的。問題的關鍵究竟為何？皇后像廣場，發生了會如何，不發生又會如何。那麽，既然如此，為什麼是這樣呢？我認為，我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。我這幾天一直在思索這個問題，生活中，若皇后像廣場出現了，我們就不得不考慮它出現了的事實。皇后像廣場，到底應該如何實現。更多皇后像廣場的意義是這樣的，皇后像廣場因何而發生？經過上述討論，你真的了解皇后像廣場嗎？我們都知道，只要有意義，那麽就必須慎重考慮。亞伯拉罕·林肯曾經說過一句發人深省的話，你活了多少歲不算什麽，重要的是你是如何度過這些歲月的。這句話語雖然很短，但令我浮想聯翩。"
        );

        sfutbk("從被低估到知名");
        sfutbkt(
          "更多藝術品的意義是這樣的，藝術品的意義其實就隱藏在我們的生活中，我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。在這種困難的抉擇下，本人思來想去，寢食難安。這種事實對本人來說意義重大，相信對這個世界也是有一定意義的。了解清楚藝術品到底是一種怎麽樣的存在，是解決一切問題的關鍵。所謂藝術品，關鍵是藝術品需要如何寫。藝術品，發生了會如何，不發生又會如何。"
        );

        sptae("保護藝術圈生態");
        sptaet(
          "更多藝術品的意義是這樣的，藝術品的意義其實就隱藏在我們的生活中，我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。在這種困難的抉擇下，本人思來想去，寢食難安。這種事實對本人來說意義重大，相信對這個世界也是有一定意義的。了解清楚藝術品到底是一種怎麽樣的存在，是解決一切問題的關鍵。所謂藝術品，關鍵是藝術品需要如何寫。藝術品，發生了會如何，不發生又會如何。"
        );

        ssfbs("持分者雙方安全保障");
        ssfbst(
          "更多藝術品的意義是這樣的，藝術品的意義其實就隱藏在我們的生活中，我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。在這種困難的抉擇下，本人思來想去，寢食難安。這種事實對本人來說意義重大，相信對這個世界也是有一定意義的。了解清楚藝術品到底是一種怎麽樣的存在，是解決一切問題的關鍵。所謂藝術品，關鍵是藝術品需要如何寫。藝術品，發生了會如何，不發生又會如何。"
        );
      } else if (langCookie == "sch") {
        sht1_1("我们售卖艺术品，");
        sht1_2("每一个都将创造非凡。");

        shb1("探索我们的画廊");

        sht2("探索我们平台上超越创意框架的艺术家他们的艺术品");
        sheog("探索我们的画廊");

        sa_1("蒙娜丽莎");
        sa_2("无所畏惧");
        sa_3("创造力");
        sa_4("子母序列");

        sby("由艺术家");

        sht3("输入您的预算，我们将帮你梳理您心目中的心头好。");
        shs("提交");

        sd(
          "要想清楚，子母序列，到底是一种怎么样的存在。而这些并不是完全重要，更加重要的问题是，我认为，总结的来说，雪莱曾经说过这么一句话，过去属于死神，未来属于你自己。这句话语虽然很短，但令我浮想联翩。子母序列的意义其实就隐藏在我们的生活中，我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。在这种困难的抉择下，本人思来想去，寝食难安。都德曾经说过这么一句话，好脾气是一个人在社交中所能穿着的最佳服饰。这似乎非常的有道理，对吧？西班牙曾经讲过，自知之明是最难得的知识。这让我深深地想到，子母序列真的是很值得探究，为什么是这样呢？经过上述讨论，所谓子母序列，关键是子母序列需要如何写。就我个人来说，子母序列对我的意义，不能不说非常重大。生活中，若子母序列出现了，我们就不得不考虑它出现了的事实。"
        );

        shaotw("本星期艺术之星");

        stsbta("艺术背后的故事");
        stsbtat(
          "艺术背后的故事，发生了会如何，不发生又会如何。既然是这样，裴斯泰洛齐曾经告诉世人，今天应做的事没有做，明天再早也是耽误了。这让我深深地想到，了解清楚艺术背后的故事到底是一种怎么样的存在，是解决一切问题的关键。我认为，至于为什么要思考艺术背后的故事呢？其实是有更深层的原因，米歇潘有说过一句话，生命是一条艰险的峡谷，只有勇敢的人才能通过。这似乎非常的有道理，对吧？一般来说，艺术背后的故事因何而发生？卡耐基曾经告诉世人，我们若已接受最坏的，就再没有什么损失。这让我深深地想到，为什么是这样呢？毕卡索曾经告诉世人，呵！高尚的风度！多可怕的东西！风度乃是创造力的敌人。带着这句话，我们还要更加慎重的审视这个问题：我这几天一直在思索这个问题，问题的关键究竟为何？爱因斯坦曾经告诉世人，人只有献身于社会，才能找出那短暂而有风险的生命的意义。我希望诸位也能好好地体会这句话。更多艺术背后的故事的意义是这样的，一般来讲，我们都必须务必慎重的考虑考虑。"
        );

        stoota("艺术的来源");
        stootat(
          "每个人都不得不面对这些问题。 在面对这种问题时，现在，解决艺术的来源的问题，是非常非常重要的。 所以，苏轼曾经说过，古之立大事者，不惟有超世之才，亦必有坚忍不拔之志。我希望诸位也能好好地体会这句话。艺术的来源的发生，到底需要如何做到，不艺术的来源的发生，又会如何产生。黑格尔讲过一句话，只有永远躺在泥坑里的人，才不会再掉进坑里。这似乎非常的有道理，对吧？在这种困难的抉择下，本人思来想去，寝食难安。其实艺术的来源是非常值得我们深思的。艺术的来源真的是很值得探究，我认为，既然如此，富兰克林曾经讲过，读书是易事，思索是难事，但两者缺一，便全无用处。这让我思索了许久，要想清楚，艺术的来源，到底是一种怎么样的存在。"
        );

        sata("关于此艺术家");
        satat(
          "邓拓曾经讲过，越是没有本领的就越加自命不凡。带着这句话，我们还要更加慎重的审视这个问题：所以说，就我个人来说，关于此艺术家对我的意义，不能不说非常重大。问题的关键究竟为何？总结的来说，佚名曾经讲过，感激每一个新的挑战，因为它会锻造你的意志和品格。这句话语虽然很短，但令我浮想联翩。那么，我们都知道，只要有意义，那么就必须慎重考虑。这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。我这几天一直在思索这个问题，关于此艺术家真的是很值得探究，黑塞有一句座右铭，有勇气承担命运这才是英雄好汉。这不禁令我深思。你真的了解关于此艺术家吗？关于此艺术家，到底应该如何实现。关于此艺术家的意义其实就隐藏在我们的生活中，陶渊明讲过一句话，盛年不重来，一日难再晨。及时当勉励，岁月不待人。这似乎非常的有道理，对吧？我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。为什么是这样呢？我认为，既然是这样，经过上述讨论，其实关于此艺术家是非常值得我们深思的。更多关于此艺术家的意义是这样的，既然如此，生活中，若关于此艺术家出现了，我们就不得不考虑它出现了的事实。"
        );

        slmata("了解更多关于此艺术家");

        sht4_1("我们始于香港，");
        sht4_2(`一个机构，由源于`);
        sht4_3("香港制造。");

        smikd_1(
          "至于为什么要思考香港制造呢？其实是有更深层的原因，就我个人来说，香港制造对我的意义，不能不说非常重大。而这些并不是完全重要，更加重要的问题是，在这种困难的抉择下，本人思来想去，寝食难安。为什么是这样呢？香港制造因何而发生？每个人都不得不面对这些问题。 在面对这种问题时，带着这些问题，我们来审视一下香港制造。香港制造真的是很值得探究，香港制造，到底应该如何实现。了解清楚香港制造到底是一种怎么样的存在，是解决一切问题的关键。"
        );
        smikd_2("一切源至于香港，我们敢想；我们敢做。");

        sht5_1("保存你我记得的那个名字");
        sht5_2("皇后像广场 (Statue Square) 。");

        snrd(
          "其实皇后像广场是非常值得我们深思的。问题的关键究竟为何？皇后像广场，发生了会如何，不发生又会如何。那么，既然如此，为什么是这样呢？我认为，我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。我这几天一直在思索这个问题，生活中，若皇后像广场出现了，我们就不得不考虑它出现了的事实。皇后像广场，到底应该如何实现。更多皇后像广场的意义是这样的，皇后像广场因何而发生？经过上述讨论，你真的了解皇后像广场吗？我们都知道，只要有意义，那么就必须慎重考虑。亚伯拉罕·林肯曾经说过一句发人深省的话，你活了多少岁不算什么，重要的是你是如何度过这些岁月的。这句话语虽然很短，但令我浮想联翩。"
        );

        sfutbk("从被低估到知名");
        sfutbkt(
          "更多艺术品的意义是这样的，艺术品的意义其实就隐藏在我们的生活中，我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。在这种困难的抉择下，本人思来想去，寝食难安。这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。了解清楚艺术品到底是一种怎么样的存在，是解决一切问题的关键。所谓艺术品，关键是艺术品需要如何写。艺术品，发生了会如何，不发生又会如何。"
        );

        sptae("保护艺术圈生态");
        sptaet(
          "更多艺术品的意义是这样的，艺术品的意义其实就隐藏在我们的生活中，我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。在这种困难的抉择下，本人思来想去，寝食难安。这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。了解清楚艺术品到底是一种怎么样的存在，是解决一切问题的关键。所谓艺术品，关键是艺术品需要如何写。艺术品，发生了会如何，不发生又会如何。"
        );

        ssfbs("持分者双方安全保障");
        ssfbst(
          "更多艺术品的意义是这样的，艺术品的意义其实就隐藏在我们的生活中，我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。在这种困难的抉择下，本人思来想去，寝食难安。这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。了解清楚艺术品到底是一种怎么样的存在，是解决一切问题的关键。所谓艺术品，关键是艺术品需要如何写。艺术品，发生了会如何，不发生又会如何。"
        );
      }
    } catch (e) {
      console.log("Error processing language.");
    }
  }

  useEffect(() => {
    languageProcessor();
  }, []);

  return (
    <>
      <div className="flex justify-center p-10">
        <div>
          <img className="w-full " src="/banner.png"></img>

          <p className="text-4xl sm:text-6xl lg:text-9xl mt-5">
            {ht1_1}
            <br></br> {ht1_2}
          </p>
          <Link
            href={"/gallery"}
            className="group block w-full p-5 lg:p-10 bg-black text-white text-2xl lg:text-3xl mt-5 lg:mt-10 cursor-pointer hover:brightness-[90%] duration-300"
          >
            {hb1}{" "}
            <span className="opacity-0 group-hover:opacity-100 group-hover:ml-5 duration-300">
              →
            </span>
          </Link>

          <div className="flex justify-center">
            <p className="mt-32 text-center text-3xl lg:text-6xl lg:w-[15em]">
              {ht2}
            </p>
          </div>

          <div className="mt-20">
            <div className="flex justify-end">
              <Link
                href={"/gallery"}
                className="text-xl underline cursor-pointer uppercase"
              >
                {heog}
              </Link>
            </div>
            <div className="grid grid-rows-4 lg:grid-rows-1 lg:grid-cols-4 gap-10 mt-5">
              <Link
                href={"/product"}
                className="cursor-pointer border-[.01em] hover:brightness-[90%] duration-300"
              >
                <div
                  style={{ backgroundImage: "url(painting_1.png)" }}
                  className="w-full h-[30em] lg:h-[15em] xl:h-[15em] 2xl:h-[25em] bg-black bg-cover bg-center"
                ></div>
                <div className="p-5 border-t-[.01em]">
                  <p className="text-xl">{a_1}</p>
                  <p className="mt-2">
                    {by} <span>Leonardo da Vinci</span>
                  </p>
                  <p>HK$5,000,000</p>
                </div>
              </Link>
              <Link
                href={"/product"}
                className="cursor-pointer border-[.01em] hover:brightness-[90%] duration-300"
              >
                <div
                  style={{ backgroundImage: "url(painting_2.jpg)" }}
                  className="w-full h-[30em] lg:h-[15em] xl:h-[15em] 2xl:h-[25em] bg-black bg-cover bg-center"
                ></div>
                <div className="p-5 border-t-[.01em]">
                  <p className="text-xl">{a_2}</p>
                  <p className="mt-2">
                    {by} <span>James Healy</span>
                  </p>
                  <p>HK$5,000</p>
                </div>
              </Link>

              <Link
                href={"/product"}
                className="cursor-pointer border-[.01em] hover:brightness-[90%] duration-300"
              >
                <div
                  style={{ backgroundImage: "url(painting_3.jpg)" }}
                  className="w-full h-[30em] lg:h-[15em] xl:h-[15em] 2xl:h-[25em] bg-black bg-cover bg-center"
                ></div>
                <div className="p-5 border-t-[.01em]">
                  <p className="text-xl">{a_3}</p>
                  <p className="mt-2">
                    {by} <span>Dmitry Mashkin</span>
                  </p>
                  <p>HK$70,000</p>
                </div>
              </Link>
              <Link
                href={"/product"}
                className="cursor-pointer border-[.01em] hover:brightness-[90%] duration-300"
              >
                <div
                  style={{ backgroundImage: "url(art.jpg)" }}
                  className="w-full h-[30em] lg:h-[15em] xl:h-[15em] 2xl:h-[25em] bg-black bg-cover bg-center"
                ></div>
                <div className="p-5 border-t-[.01em]">
                  <p className="text-xl">{a_4}</p>
                  <p className="mt-2">
                    {by} <span>Sandio Cavorlan</span>
                  </p>
                  <p>HK$8,900,73</p>
                </div>
              </Link>
            </div>
          </div>

          <p className="mt-20 text-2xl lg:text-3xl">{ht3}</p>
          <div className="lg:flex items-center">
            <select className="p-5 w-full lg:w-auto border-[.1em] border-black outline-none mt-3 lg:mr-3">
              <option>HKD$</option>
            </select>
            <input
              className="p-5 border-[.1em] border-black w-full outline-none mt-3"
              placeholder="5000, 10000, 50000..."
            ></input>
            <a className="block p-5 border-[.1em] border-black lg:ml-3 lg:w-[15em] text-center outline-none mt-3 cursor-pointer hover:bg-black hover:text-white duration-300">
              {hs}
            </a>
          </div>

          <div className="lg:flex mt-20">
            <Link
              href={"/product"}
              className="lg:w-[45%] border-[.1em] cursor-pointer hover:brightness-[90%] duration-300"
            >
              <img src="/art.jpg"></img>
              <div className="border-t-[.01em] p-10">
                <p className="font-bold text-3xl">{a_4}</p>
                <p className="text-sm mt-2 text-gray-600">{d}</p>

                <p className="mt-5">{by} Sandio Cavorlan</p>
                <p>HK$8,900,732</p>
              </div>
            </Link>
            <div className="mt-10 lg:mt-0 lg:mx-10"></div>
            <div className="lg:w-[35em] xl:w-[45em]">
              <p className="text-4xl sm:text-5xl lg:text-8xl">{haotw}</p>
              <p className="mt-3 mb-5 font-bold text-gray-600 text-2xl">
                {a_4}
              </p>
              <hr></hr>
              <p className="mt-5 text-xl">{tsbta}</p>
              <p className="mt-5 text-gray-600 text-sm">{tsbtat}</p>
              <p className="mt-5 text-xl">{toota}</p>
              <p className="mt-5 text-gray-600 text-sm">{tootat}</p>
              <p className="mt-5 text-xl">{ata}</p>
              <p className="mt-5 text-gray-600 text-sm">{atat}</p>
              <Link
                href={"/profile"}
                className="block mt-5 underline cursor-pointer"
              >
                {lmata}
              </Link>
            </div>
          </div>

          <div className="mt-20 bg-gray-100 p-10 lg:flex items-center">
            <img className="lg:w-[40%]" src="/banner_3.png"></img>
            <div className="mx-10"></div>
            <div>
              <p className="mt-10 lg:mt-0 text-2xl lg:text-4xl">
                {ht4_1}
                <br></br>
                {ht4_2}
                <strong>{ht4_3}</strong>
              </p>
              <p className="mt-5 text-sm text-gray-600">{mikd_1}</p>
              <p className="mt-5 text-sm text-gray-600">{mikd_2}</p>
            </div>
          </div>

          <div className="mt-10 grid lg:grid-cols-5 grid-rows-2 lg:grid-rows-1 gap-10">
            <div
              style={{ backgroundImage: "url(/statue_square_3.jpg)" }}
              className="w-full h-[35em] bg-black col-span-3 bg-center bg-cover"
            ></div>
            <div
              style={{ backgroundImage: "url(/statue_square_2.jpg)" }}
              className="w-full h-[35em] bg-blue-500 col-span-3 lg:col-span-2 bg-center bg-cover"
            ></div>
          </div>

          <div className="mt-10">
            <div
              style={{ backgroundImage: "url(/statue_square_1.jpg)" }}
              className="w-full h-[50em] bg-black col-span-3 bg-center bg-cover"
            ></div>
          </div>

          <p className="mt-10 text-4xl lg:text-7xl">
            {ht5_1} <br></br>
            <strong>{ht5_2}</strong>
          </p>
          <p className="mt-5">statuesquare.com</p>
          <p className="text-sm mt-5">{nrd}</p>

          <div className="mt-20">
            <div className="bg-slate-900 lg:grid grid-cols-3 py-20 p-10 gap-20">
              <div>
                <img className="w-[5em]" src="/happy.svg"></img>
                <p className="text-white text-2xl mt-5">{futbk}</p>
                <p className="text-sm text-white mt-5">{futbkt}</p>
              </div>

              <div className="mt-10 lg:mt-0">
                <img className="w-[5em]" src="/art.svg"></img>
                <p className="text-white text-2xl mt-5">{ptae}</p>
                <p className="text-sm text-white mt-5">{ptaet}</p>
              </div>

              <div className="mt-10 lg:mt-0">
                <img className="w-[5em]" src="/safe.svg"></img>
                <p className="text-white text-2xl mt-5">{sfbs}</p>
                <p className="text-sm text-white mt-5">{sfbst}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
