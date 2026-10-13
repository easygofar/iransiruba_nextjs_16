import React from "react";
import Link from "next/link";
import _ from "lodash";
// import { machines} from "../data/machines";
import useNextBlurhash from "use-next-blurhash";
// import { catalogues } from "../data/machines";
import { IfMachineType } from "../../utils/types";
import { getData } from "../../lib";
import { getCategory } from "../../utils/functions";
import Image from "next/image";

const title = "دانلود کاتالوگ های سیروبا";
const description =
  "دانلود کاتالوگ‌ چرخ خیاطی صنعتی سیروبا. با استفاده از این منابع به فرمت فایل های PDF، می‌توانید اطلاعات دقیق‌تری درباره هر چرخ خیاطی سیروبا کسب کنید.";
const url = "/downloads/";

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://iransiruba.com" + url,
    siteName: "شرکت ایران سیروبا | Iran SiRUBA",
    locale: "fa_IR",
    images: [
      {
        url: "https://iransiruba.com/images/siruba-swing-machines/og_image.jpg",
        width: "1200",
        height: "630",
      },
    ],
  },
  metadataBase: new URL("https://iransiruba.com/"),
  alternates: {
    canonical: url,
  },
};

const renderDownloads = (download: { label: string; link: string }) => {
  return (
    <a href={download.link} className="h-full w-full mx-2">
      {download.label}
    </a>
  );
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "دانلود کاتالوگ‌های محصولات سیروبا",
  "url": "https://iransiruba.com",
  "description": "دسترسی به کاتالوگ‌های محصولات چرخ خیاطی صنعتی سیروبا برای مشاهده مشخصات فنی و ویژگی‌ها.",
  "inLanguage": "fa-IR"
}


const renderMachineSections = async () => {
  // const { data } = await getData();
  // const machines = convertToJson(data);
  const machines: any[] = getData();
  // machines.push(catalogues[0]);

  return _.sortBy(machines, ["id"]).map((m: IfMachineType) => (
    <span key={m.id} className="m-0 p-0 w-full">
      <section
        key={m.id}
        className="w-full mb-4 sm:mb-16 flex-1 flex flex-col justify-center overflow-hidden items-around border rounded-t-md border-[#FA461E]"
      >
        <h2 className="font-bold w-full text-sm sm:text-reg flex-1 text-center p-2 bg-slate-100 border-b border-slate-300">
          <Link
            className="w-full h-full hover:text-blue-500"
            href={`/products/${getCategory(m.category)}`}
          >
            {m.farsi}
          </Link>
        </h2>
        <ul
          key={m.farsi}
          className="mb-4 flex flex-wrap w-full justify-center p-4 "
        >
          {m.models.map((mo, index) => {
            const resource_id = mo.resource_id;
            const resources = m.resources
              .filter((r) => r.id === resource_id)[0]
              .downloads.map((download) => (
                <React.Fragment key={download.label}>
                  {renderDownloads(download)}
                </React.Fragment>
              ));
            return (
              <li key={mo.id + index}
                className="sm:mx-2 flex flex-col my-2 md:my-4 pb-4 lg:w-70 md:w-1/3 w-full items-start border border-slate-300 border-b-slate-400 rounded-md"

              >
                <div className="flex flex-col bg-slate-200 w-full p-2 sm:mb-4 mb-2 rounded-t-md">
                  <span className="mx-1 font-bold text-center text-sm sm:text-reg">
                    <Link
                      className="w-full h-full hover:text-blue-500"
                      href={`/products/${getCategory(m.category) + "/" + mo.title
                        }`}
                    >
                      {mo.sub_category}
                    </Link>
                  </span>
                  <span className="mx-1 font-bold text-center text-sm sm:text-reg">
                    {/* {mo.title} */}
                    <Link
                      className="w-full h-full hover:text-blue-500"
                      href={`/products/${getCategory(m.category) + "/" + mo.title
                        }`}
                    >
                      {mo.title}
                    </Link>
                  </span>
                </div>
                {resources.map((text, index) => (
                  <span
                    key={index}
                    className="relative group mr-4 w-[90%] text-blue-500 hover:underline cursor-pointer text-reg hover:font-bold flex items-end"
                  >
                    <span className="absolute -top-[5px] duration-200 transiton-all group-hover:-top-[2px] -right-[8px] inline-block group-hover:after:content-['\2193'] text-[#fa461e]"></span>
                    <span className="text-sm sm:text-reg">{text}</span>
                  </span>
                ))}
              </li>

            );
          })}
        </ul>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

    </span>
  ));
};

const Downloads = () => {
  const [blurDataUrl] = useNextBlurhash("LEHV6nWB2yk8pyo0adR*.7kCMdnj");
  return (
    <div>
      <section className={`relative aspect-[16/4] border bg-top`}>
        <Image
          src="/images/downloads.jpg"
          className="object-cover lg:object-fill  object-top"
          fill={true}
          priority={true}
          placeholder="blur"
          blurDataURL={blurDataUrl}
          alt="download icon"
        />
        <div className="absolute top-1 right-1 sm:top-2 sm:right:2 sm:font-bold">
          <h1 className="text-xm sm:text-reg md:text-lg">ایران سیروبا</h1>
        </div>
      </section>

      <section className="p-4 md:p-8">
        <h1 className="w-full py-4 font-bold text-right text-reg md:text-lg lg:text-xlg">
          کاتالوگ، دستورالعمل و لیست قطعات
        </h1>
        <p className="text-sm sm:text-reg">
          این بخش شامل دانلود کاتالوگ، دستورالعمل و لیست قطعات برای چرخ خیاطی
          های صنعتی موجود در لیست محصولات سایت است. با استفاده از این منابع به
          فرمت فایل های PDF، می‌توانید اطلاعات دقیق‌تری درباره هر چرخ خیاطی
          سیروبا کسب کنید.{" "}
        </p>
        <p className="text-sm sm:text-reg">
          برای پاسخگویی به سئوالات خود با شرکت ایران سیروبا&nbsp;
          <a className="internal_link" href="/contact/">
            تماس
          </a>
          &nbsp;بگیرید.
        </p>
      </section>
      <section className="sm:mx-2 p-4 flex flex-col items-center">
        {renderMachineSections()}

      </section>
    </div>
  );
};

export default Downloads;


{/* <section className="max-w-7xl mx-auto px-4 py-12">
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
    دانلود کاتالوگ‌ها و دستورالعمل‌های چرخ‌های خیاطی صنعتی سیروبا
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <!-- کارت نمونه -->
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden">
      <img src="/images/dl720-m1.jpg" alt="راسته دوز نیمه اتوماتیک DL720-M1" className="w-full h-48 object-cover">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">راسته دوز نیمه اتوماتیک DL720-M1</h3>
        <p className="text-gray-600 text-sm mb-4">
          دانلود کاتالوگ، لیست قطعات، پارامترها و کدهای خطا برای مدل DL720-M1.
        </p>
        <div className="flex flex-wrap gap-2">
          <a href="/downloads/dl720-m1-catalog.pdf" className="text-blue-600 text-sm font-medium hover:underline">کاتالوگ</a>
          <a href="/downloads/dl720-m1-parts.pdf" className="text-blue-600 text-sm font-medium hover:underline">لیست قطعات</a>
          <a href="/downloads/dl720-m1-params.pdf" className="text-blue-600 text-sm font-medium hover:underline">پارامترها</a>
          <a href="/downloads/dl720-m1-errors.pdf" className="text-blue-600 text-sm font-medium hover:underline">کدهای خطا</a>
        </div>
      </div>
    </div>
    <!-- کارت‌های دیگر را به همین صورت اضافه کنید -->
  </div>
</section> */}
