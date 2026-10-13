"use client";
import { useState, FormEvent } from "react";
import Image from "next/image";
import useNextBlurhash from "use-next-blurhash";
import warningIcon from "../../public/icons/warning.svg";
import rotateIcon from "../../public/icons/icons8-loader-40.png";
import Link from "next/link";
import { bottom } from "@popperjs/core";

const Warning = ({ children }: { children: string }) => {
  return (
    <>
      {children && (
        <div className="flex items-start mr-4">
          <Image src={warningIcon} width={25} height={25} alt="warning icon" />
          <span className="text-sm text-red-400 mx-1">{children}</span>
        </div>
      )}
    </>
  );
};

const Icon = ({ name }: { name: string }) => {
  return (
    <span
      className={`relative md:w-[48px] md:h-[48px] w-[18px] p-[18px] mx-2 md:mx-0 flex items-center justify-center border border-gray-300 md:border-red-500 rounded-full group-hover:scale-110 transition-all duration-200 bg-white`}
    >
      <Image
        src={`/icons/${name}`}
        fill={true}
        className="object-contain md:p-[10px] p-[10px]"
        alt="icon"
      />
    </span>
  );
};

const initialValues = { from: "", name: "", content: "", server: "" };


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "تماس با ایران سیروبا",
  "url": "https://iransiruba.com",
  "description": "اطلاعات تماس با نمایندگی انحصاری سیروبا در ایران برای مشاوره و خرید محصولات.",
  "inLanguage": "fa-IR"
}


const Contact = () => {
  const [blurDataUrl] = useNextBlurhash("LEHV6nWB2yk8pyo0adR*.7kCMdnj");
  const [error, setError] = useState(initialValues);
  const [emailSent, setEmailSent] = useState(false);
  const [post, setPost] = useState(initialValues);
  const [isLoading, setLoading] = useState(false);

  const handleOnChange = (e: any) => {
    setPost({ ...post, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError({ ...initialValues });
    setEmailSent(false);
    setLoading(true);

    try {
      const result: Response = await fetch("https://localhost/mail.php", {
        method: "post",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...post }),
      });
      const data = await result.json();
      if (!data.success) {
        setError({ ...initialValues, [data.code]: data.message });
        setLoading(false);
        setEmailSent(false);
        console.log(data.message);
        return;
      }
      setError({ ...initialValues });
      setPost({ ...initialValues });
      setLoading(false);
      setEmailSent(true);
    } catch (e: any) {
      setError({ ...initialValues, server: e.message });
      console.log("error", e);
      setLoading(false);
      setEmailSent(false);
    }
  };
  return (
    <>
      <div>
        <section className={`relative aspect-16/5 border bg-top`}>
          <Image
            src="/images/iransiruba-contact-us.jpg"
            className="object-cover lg:object-fill  object-top"
            fill={true}
            priority={true}
            placeholder="blur"
            blurDataURL={blurDataUrl}
            alt="tehran"
          />
          <div className="absolute top-1 right-1 sm:top-2 sm:right:2 sm:font-bold">
            <h1 className="text-xm sm:text-reg md:text-lg">ایران سیروبا</h1>
          </div>
        </section>

        <div className="sm:p-4 p-0.5">
          <section className="sm:my-4 my-0.5">
            <h2 className="text-reg font-bold sm:text-reg md:text-xlg my-4">
              تماس با شرکت ایران سیروبا
            </h2>

            <div className="relative text-reg sm:my-4 my-2 sm:mt-8 mt-4 flex sm:justify-bwetween sm:items-stretch w-full flex-wrap px-2 md:px-0">
              <div className="group grow shadow flex md:flex-col mb-2 py-2 items-center md:justify-center gap-2 sm:w-1/2 md:w-1/4 mx-1 w-[98%] bg-slate-200 hover:bg-indigo-100 hover:rounded-lg hover:font-bold">
                <Icon name="placeholder.svg" />
                <address className="md:py-4 px-2 text-right md:text-center text-reg">
                  تهران – خیابان جمهوری <br /> ساختمان سجاد - پلاک 945
                </address>
              </div>

              <div className="group grow shadow flex md:flex-col mb-2 py-2 items-center md:justify-center gap-2 sm:w-1/2 md:w-1/4 mx-1 w-[98%] bg-slate-200 hover:bg-indigo-100 hover:rounded-lg hover:font-bold">
                <Icon name="telephone.svg" />
                <Link
                  href="tel:02168527"
                  className="md:py-4 px-2 text-center text-reg"
                  aria-label="Telephone Number"
                >
                  02168527
                </Link>
              </div>

              <div className="group grow shadow flex md:flex-col mb-2 py-2 items-center md:justify-center gap-2 sm:w-1/2 md:w-1/4 mx-1 w-[98%] bg-slate-200 hover:bg-indigo-100 hover:rounded-lg hover:font-bold">
                <Icon name="envelope.svg" />
                <p className="md:py-4 px-2 text-center text-reg">
                  info@iransiruba.com
                </p>
              </div>

              <div className="group grow shadow flex md:flex-col mb-2 py-2 items-center md:justify-center gap-2 sm:w-1/2 md:w-1/4 mx-1 w-[98%] bg-slate-200 hover:bg-indigo-100 hover:rounded-lg hover:font-bold">
                <Icon name="web.svg" />
                <p className="md:py-4 px-2 text-center text-reg">
                  <Link
                    href="https://iransiruba.com"
                    className="md:py-4 px-2 text-center text-reg"
                    aria-label="Home Page"
                  >
                    www.iransiruba.com
                  </Link>
                </p>
              </div>
            </div>
          </section>

          <div className="flex w-full mb-4 md:my-8 sm:my-4 my-2 flex-wrap">
            <section className="relative bg-slate-100 sm:p-8 p-2 lg:w-1/2 w-full rounded-lg border-2 border-slate-200">
              <h2 className="text-reg font-bold sm:text-reg md:text-xlg mb-2 sm:mb-4 md:mb-8">
                فرم تماس با ما
              </h2>
              <form className={`text-reg lg:text-lg my-4`}>
                <div className="mb-3" style={{ marginBottom: 12 }}>
                  <div className="flex items-center mb-2">
                    <label
                      className="inline-block text-gray-700 sm:text-reg text-sm font-bold"
                      htmlFor="exampleInputname1"
                    >
                      نام و نام خانوادگی
                    </label>
                    <Warning>{error.name}</Warning>
                  </div>

                  <input
                    onChange={handleOnChange}
                    type="text"
                    name="name"
                    className={`bootstrap-input focus:outline-none focus:ring-1 focus:ring-blue-300 ${isLoading ? "animate-pulse" : ""
                      }`}
                    id="exampleInputname1"
                    aria-describedby="nameHelp"
                    value={post.name}
                    disabled={isLoading}
                    autoComplete="true"
                  />
                </div>

                <div className="mb-3">
                  <div className="flex items-center mb-2">
                    <label
                      className="inline-block text-gray-700 sm:text-reg text-sm font-bold"
                      htmlFor="exampleInputemail1"
                    >
                      ایمیل
                    </label>
                    <Warning>{error.from}</Warning>
                  </div>
                  <input
                    onChange={handleOnChange}
                    type="email"
                    name="from"
                    className={`bootstrap-input focus:outline-none focus:ring-1 focus:ring-blue-300 ${isLoading ? "animate-pulse" : ""
                      }`}
                    id="exampleInputemail1"
                    aria-describedby="emailHelp"
                    value={post.from}
                    disabled={isLoading}
                    autoComplete="true"
                  />
                </div>

                <div className="mb-3">
                  <div className="flex items-center mb-2">
                    <label
                      className="inline-block text-gray-700 sm:text-reg text-sm font-bold"
                      htmlFor="exampleFormControlTextarea1"
                    >
                      متن پیام
                    </label>
                    <Warning>{error.content}</Warning>
                  </div>

                  <textarea
                    onChange={handleOnChange}
                    name="content"
                    className={`bootstrap-input focus:outline-none focus:ring-1 focus:ring-blue-300 ${isLoading ? "animate-pulse" : ""
                      }`}
                    id="exampleFormControlTextarea1"
                    rows={7}
                    value={post.content}
                    disabled={isLoading}
                    autoComplete="true"
                  ></textarea>
                </div>
                <div className="relative flex items-center">
                  <button
                    type="submit"
                    onClick={handleOnSubmit}
                    className="transition-all duration-200 py-[0.375rem] px-[1.2rem] border-2 flex items-center  bg-blue-500 hover:bg-blue-600 text-white text-reg rounded-md"
                    disabled={isLoading}
                  >
                    ارسال
                    {isLoading ? (
                      <span className="animate-spin w-5 h-5 mr-4 left-0 z[20]">
                        <Image
                          src={rotateIcon}
                          alt="rotate icon"
                          width={25}
                          height={25}
                        />
                      </span>
                    ) : (
                      ""
                    )}
                  </button>
                  <span className={`mr-3 text-sm`}>
                    {emailSent ? (
                      <span className="text-green-500">
                        {"پیام شما ارسال شد"}
                      </span>
                    ) : (
                      <span className="text-red-500">{error.server}</span>
                    )}
                  </span>
                </div>
              </form>
            </section>
            <section
              id="map"
              className="relative w-full lg:w-1/2 h-full hidden sm:block rounded-lg border-0"
            >
              <span className="top-[50%] left-[50%] border-2 border-blue-900 bg-blue-500 absolute animate-ping w-2 h-2 rounded-full ring-blue-500 z-[40] opacity-75"></span>
              <iframe
                src="https://balad.ir/embed?p=PX2Xpbwr1H2L6k"
                title="مشاهده «ساختمان تجاری و اداری سجاد» روی نقشه بلد"
                aria-hidden="false"
                className="relative border-2 border-slate-200 sm:border-r-0 w-full lg:h-150 h-50 z-50 rounded-lg p-4"
              ></iframe>
            </section>
          </div>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

    </>
  );
};
export default Contact;
