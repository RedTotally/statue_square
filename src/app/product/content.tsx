"use client";

import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";

export default function Product() {
  const langCookie = getCookie("language");

  //Language Zone - Content

  //!--

  async function languageProcessor() {
    try {
      if (langCookie == "en") {
      } else if (langCookie == "tch") {
      } else if (langCookie == "sch") {
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
      <div className="flex justify-center">
        <div className="p-10 w-[70em]">
          <div className="lg:grid gap-10 grid-cols-10">
            <div>
              <div
                style={{ backgroundImage: "url(/art.jpg)" }}
                className="border-black cursor-pointer border-2
               bg-cover bg-center w-[5em] h-[5em] bg-black"
              ></div>
            </div>
            <div className="col-span-5 mt-5 lg:mt-0">
              <img src="/art.jpg"></img>
            </div>
            <div className="col-span-4 bg-gray-50 p-10">
              <p className="text-2xl">Art Demostration</p>
              <p className="text-indigo-500 cursor-pointer">Sandio Cavorlan</p>
              <p className="mt-5">Painting, Oil on Canvas</p>
              <p className="text-sm">22.9 W x 30.5 H x 1.8 D</p>

              <p className="text-3xl mt-10">HK$8,900,732</p>

              <div className="flex items-center">
                <img src="/filled-star.svg"></img>
                <img src="/filled-star.svg"></img>
                <img src="/filled-star.svg"></img>
                <img src="/filled-star.svg"></img>
                <img src="/filled-star.svg"></img>
                <p className="ml-2 underline curpo">0 Reviews</p>
              </div>

              <p className="text-white bg-black p-5 text-center mt-3 cursor-pointer">
                Add to Cart
              </p>
              <p className="p-5 text-center cursor-pointer underline">
                Have a Conversation With the Seller
              </p>
              <hr className="mt-10 mb-10"></hr>
              <p className="flex items-center">
                <img className="mr-2" src="/tick.svg"></img>Unsatisfactory
                Return Included
              </p>
              <p className="flex items-center">
                <img className="mr-2" src="/tick.svg"></img>Safety Enhanced
                Process
              </p>
              <p className="text-xs underline cursor-pointer">
                Learn More About Safety Enhanced Process
              </p>

              <hr className="mt-10 mb-10"></hr>

              <div className="flex justify-between items-center">
                <p className="flex items-center">
                  <img className="cursor-pointer" src="/star.svg"></img>0
                  Favorited
                </p>
                <p>0 Views</p>
              </div>
            </div>
          </div>
          <hr className="mt-20 mb-20"></hr>
          <p className="p-5 bg-black text-white font-bold flex items-center">
            <img className="mr-2" src="/verified.svg"></img>Statue Square
            Verified Artwork
          </p>
          <p className="text-xs underline cursor-pointer">
            Learn More About Our Verification Process
          </p>

          <p className="text-2xl mt-10">The Story Behind The Art</p>
          <p className="mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            laborum possimus inventore dolores, accusamus quas omnis adipisci
            natus, veniam sunt autem maxime amet ad explicabo asperiores! Esse
            eveniet fugit reiciendis animi voluptatibus, praesentium qui harum
            laudantium quia tempora ipsa nobis et tenetur facilis assumenda,
            ratione enim aut repudiandae aspernatur eos cumque commodi aliquam
            ipsam. Deserunt repellendus temporibus voluptates labore laboriosam,
            eum officiis exercitationem ipsam eius cumque obcaecati incidunt,
            illum doloribus sit laudantium dolores repellat velit tenetur, sed
            corporis? Quos ex voluptates voluptatibus! Alias consequatur aperiam
            voluptates, iusto eos, dicta dolores vel ipsam unde obcaecati, sint
            voluptas. Quo fuga numquam eaque repellendus, explicabo adipisci,
            nulla, facere accusantium harum consequatur id reiciendis saepe aut
            omnis iste veritatis repellat praesentium similique ullam hic
            voluptatem vero sit? Aliquam impedit id nulla minus nobis maxime
            laborum? Quasi corporis molestias laborum iure error, eos maiores
            assumenda consequatur unde optio illum. Impedit iste culpa magni eos
            voluptates praesentium perferendis veritatis sequi! Ratione totam
            quidem impedit veniam doloribus harum eum sunt est. Harum,
            perferendis exercitationem iste voluptatibus veniam eaque
            praesentium eius aperiam fuga ducimus accusantium, vero natus magni
            ipsam dicta deserunt ab omnis explicabo voluptate neque, consequatur
            accusamus voluptatem. Ducimus saepe asperiores praesentium? Dicta
            mollitia dolorum voluptas eos, autem harum sint, praesentium
            temporibus odit porro exercitationem quas iure debitis ut
            consequuntur enim nisi aperiam asperiores saepe quidem in a quod!
            Saepe amet sit vitae iure provident unde dolor fuga, ullam aut,
            autem, facilis adipisci totam rem magnam aperiam dignissimos
            nesciunt quibusdam molestias. Explicabo sequi facilis quaerat nobis
            cum ut laboriosam velit placeat facere est laborum, aperiam alias
            autem perspiciatis rerum omnis necessitatibus asperiores ratione qui
            debitis eligendi consequuntur eum. Id eos eius veritatis consequatur
            delectus tenetur commodi esse hic incidunt sapiente expedita earum
            sit cumque quasi, repudiandae animi! Amet minus magni beatae saepe
            ad ab, obcaecati rerum fuga.
          </p>

          <p className="text-2xl mt-10">The Origin of The Art</p>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos et magnam aliquam hic earum iusto praesentium minima
            ratione, nam ullam voluptates eveniet ipsa eligendi delectus. Quas
            debitis impedit doloremque aspernatur quidem eius? Numquam
            dignissimos perspiciatis corrupti mollitia repellat reprehenderit
            ullam eos, esse laboriosam cum obcaecati repellendus necessitatibus
            facilis voluptates accusamus ut possimus nisi quis sequi reiciendis
            modi ad quo quod? Ullam molestiae natus ab pariatur veritatis, ex
            iusto rerum maiores dolores? Non molestiae quidem dignissimos, modi,
            sequi illum corrupti minima sed voluptatibus, harum eaque obcaecati
            quisquam aspernatur facilis animi aliquam officia consequatur ex
            excepturi adipisci dolor quo! Nulla, impedit nisi?
          </p>

          <p className="text-2xl mt-10">Delivery Time</p>
          <p className="mt-5">Typically 10-14 business days.</p>

          <div className="mt-20">
            <div className="lg:flex items-center">
              <div style={{backgroundImage: "url(/artist.jpg)"}} className="w-full lg:w-[15em] h-[15em] bg-black lg:rounded-full bg-cover bg-center"></div>
              <div className="mt-5 lg:mt-0 lg:ml-10">
                <p className="text-3xl lg:text-6xl">Sandio Cavorlan</p>
                <p className="mt-5 p-5 bg-black text-white font-bold flex items-center">
            <img className="mr-2" src="/verified.svg"></img>Statue Square
            Verified Artist
          </p>
          <p className="text-xs underline cursor-pointer">
            Learn More About Our Verification Process
          </p>
                <p className="text-xs mt-5 lg:w-[50em]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae, molestias pariatur totam est sequi, dolores ipsa,
                  modi ipsum voluptatum vel tempora blanditiis! Aspernatur illo
                  voluptatum tempora reprehenderit fugiat velit harum repellat
                  expedita recusandae, dolorem ullam perferendis soluta maiores
                  quia, voluptatem accusantium id natus cupiditate. Modi unde
                  quaerat odit dolores soluta voluptatibus maxime veniam
                  repudiandae labore, officiis deserunt a doloribus illo
                  obcaecati velit, reprehenderit fugiat architecto possimus
                  amet? Similique, labore odit? Velit modi sapiente libero
                  blanditiis doloribus error alias animi sint culpa maxime a,
                  dolore tempore natus, necessitatibus ut id cum asperiores
                  pariatur sequi possimus deleniti autem? Hic quod eveniet
                  voluptatem est eius, animi ea officiis temporibus quae?
                  Facilis inventore, sed aut, neque et sit quae hic eos
                  voluptatem quia non voluptate, sunt exercitationem perferendis
                  aspernatur cumque enim. Et tempora sit aliquid voluptate
                  delectus molestias temporibus voluptatem vitae magni harum
                  nesciunt, laudantium optio aperiam consequatur veritatis quas
                  quidem. Natus, aspernatur voluptatibus!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
