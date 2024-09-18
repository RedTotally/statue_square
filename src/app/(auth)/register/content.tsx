"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";

export default function Register() {
  const langCookie = getCookie("language");

  const [passwordVisibility, setPasswordVisibility] = useState(false);

  //Language Zone - Content
  const [t1, st1] = useState("");
  const [d1, sd1] = useState("");

  const [e, se] = useState("")
  const [u, su] = useState("");
  const [p, sp] = useState("");

  const [b, sb] = useState("");

  const [d2_1, sd2_1] = useState("");
  const [dt, sdt] = useState("");
  const [d2_2, sd2_2] = useState("");
  const [dp, sdp] = useState("");
  const [d2_3, sd2_3] = useState("");

  const [lt_1, slt_1] = useState("");
  const [lt_2, slt_2] = useState("");
  const [lt_3, slt_3] = useState("");
  //!--

  async function languageProcessor() {
    try {
      if (langCookie == "en") {
        st1("Welcome to Statue Square");
        sd1("You may now establish your own, brand new account.");

        se("Email Address")
        su("Username");
        sp("Password");

        sb("Sign Up");

        sd2_1("By signing up, you acknowledge and agree to the ");
        sdt("terms");
        sd2_2(" and ");
        sdp("policies");
        sd2_3(
          " of this website. This website is protected by Google Recaptcha."
        );

        slt_1("Already have an account? ");
        slt_2("Log In");
        slt_3(" now.");
      } else if (langCookie == "tch") {
        st1("歡迎來到 Statue Square");
        sd1("您現在可以成立一個嶄新的帳戶。");
        
        se("電郵地址")
        su("用戶名稱");
        sp("用戶密碼");

        sb("註冊");

        sd2_1("註冊代表您已閱讀和同意我們的");
        sdt("條款");
        sd2_2("和");
        sdp("政策");
        sd2_3("。這個網站由 Google Recaptcha 保護.");

        slt_1("已經有一個帳戶？ ");
        slt_2("登入");
        slt_3("已有帳戶。");
      } else if (langCookie == "sch") {
        st1("欢迎来到 Statue Square");
        sd1("您现在可以成立一个崭新的帐户。");
       
        se("电邮地址")
        su("用户名称");
        sp("用户密码");
       
        sb("注册");
       
        sd2_1("注册代表您已阅读和同意我们的");
        sdt("条款");
        sd2_2("和");
        sdp("政策");
        sd2_3("。这个网站由 Google Recaptcha 保护.");
       
        slt_1("已经有一个帐户？ ");
        slt_2("登入");
        slt_3("已有帐户。");
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
      <div className="mt-20 lg:p-10 flex justify-center">
        <div>
          <div className="p-10 lg:w-[40em]">
            <p className="text-3xl lg:text-4xl">{t1}</p>
            <p className="text-sm lg:text-base">{d1}</p>
            <input
              placeholder={e}
              className="w-full p-5 mt-5 border-[.1em] border-black outline-none"
            ></input>
            <input
              placeholder={u}
              className="w-full p-5 mt-5 border-[.1em] border-black outline-none"
            ></input>
            <div className="flex items-center mt-5">
              <input
                type={passwordVisibility == false ? "Password" : ""}
                placeholder={p}
                className="p-5 w-full border-[.1em] border-black outline-none"
              ></input>{" "}
              <div className="mx-2"></div>{" "}
              <img
                onClick={() => {
                  passwordVisibility == false
                    ? setPasswordVisibility(true)
                    : setPasswordVisibility(false);
                }}
                className="p-5 border-[.1em] border-black cursor-pointer"
                src={
                  passwordVisibility == false ? "/eye.svg" : "/eye-cross.svg"
                }
              ></img>
            </div>
            <p className="text-xl bg-black mt-5 p-5 text-white group cursor-pointer">
              {b}{" "}
              <span className="opacity-0 group-hover:opacity-100 group-hover:ml-3 duration-300">
                →
              </span>
            </p>
            <p className="text-sm mt-5">
              {d2_1}
              <span className="underline cursor-pointer">{dt}</span>
              {d2_2}
              <span className="underline cursor-pointer">{dp}</span>
              {d2_3}
            </p>

            <hr className="mt-10 mb-10"></hr>

            <div className="bg-gray-50 p-5">
              <p className="text-sm">
                {lt_1}
                <Link
                  href={"/login"}
                  className="text-indigo-500 cursor-pointer"
                >
                  {lt_2}
                </Link>
                {lt_3}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
