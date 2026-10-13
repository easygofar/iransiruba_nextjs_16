import { useMemo } from "react";
import useNextBlurhash from "use-next-blurhash";
import LeftElement from "../components/leftElement";
import RightElement from "../components/rightElement";
import { history } from "../data/history";
import Image from "next/image";

// Static metadata title
const title = "تاریخ شرکت سیروبا تایوان";
const description =
  " کارخانه تولیدی کائولین و صاحب امتیاز برند سیروبا تایوان در سال 1965 تاسیس شد ";
const url = "/history/";

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


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "تاریخچه برند سیروبا",
  "url": "https://iransiruba.com",
  "description": "نگاهی به تاریخچه برند سیروبا از تأسیس تا تبدیل شدن به یکی از برترین تولیدکنندگان چرخ‌های خیاطی صنعتی.",
  "inLanguage": "fa-IR"
}

const History = () => {
  const [blurDataUrl] = useNextBlurhash("LEHV6nWB2yk8pyo0adR*.7kCMdnj");
  const renderHistoryElements = useMemo(() => {
    return history.map((item, index) => {
      const ElementComponent = index % 2 ? LeftElement : RightElement;
      return (
        <div key={item.year + index}>
          <ElementComponent year={item.year}>{item.value}</ElementComponent>
        </div>
      );
    });
  }, []);

  return (
    <>
      <div className="min-h-screen relative">
        <section className={`relative aspect-[16/5] border bg-top`}>
          <Image
            src="/images/siruba-history.jpg"
            className="object-cover lg:object-fill  object-top"
            fill={true}
            priority={true}
            placeholder="blur"
            blurDataURL={blurDataUrl}
            alt="شهر تهران"
          />
          <div className="absolute top-1 right-1 sm:top-2 sm:right:2 sm:font-bold">
            <h1 className="text-xm sm:text-reg md:text-lg">ایران سیروبا</h1>
          </div>
        </section>
        <div className="sm:px-6 py-6 p-[2px]">
          <section className="md:my-8 sm:my-4 my-2">
            <h1 className="text-reg font-bold sm:text-reg md:text-xlg my-4">
              تاریخ شرکت سیروبا
            </h1>
            <div className="relative text-reg overflow-hidden lg:text-lg my-4 sm:px-4 p-[2px] py-8 sm:bg-slate-200/50 bg-slate-200/75 rounded-lg border">
              <span className="absolute top-[10px] left-[20px] sm:left-[50%] sm:translate-x-[-50%] w-[2px] h-full bg-[#FA805B]/75"></span>
              {renderHistoryElements}
            </div>
          </section>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

    </>
  );
};

export default History;
