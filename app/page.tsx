// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }

import ListCategories from "./components/listCategories";
import useNextBlurhash from "use-next-blurhash";
import SliderSwiperJs from "./components/slider-swiperjs";
import Head from "next/head";

const description =
  "ایران سیروبا نمایندگی رسمی چرخ خیاطی صنعتی سیروبا در ایران. فروش انواع چرخ خیاطی، خدمات پس از فروش، مشاوره رایگان.";
const title = "نمایندگی رسمی چرخ خیاطی صنعتی سیروبا | ایران سیروبا";
export const metadata = {
  title: title,
  description: description,
  "DC.Title": title,
  "DC.Description": description,
  metadataBase: new URL("https://iransiruba.com/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "https://iransiruba.com",
    siteName: "شرکت ایران سیروبا | Iran SiRUBA",
    title: title,
    type: "website",
    description: description,
    locale: "fa_IR",
    images: [
      {
        url: "https://iransiruba.com/images/siruba-swing-machines/og_image.jpg",
        width: "1200",
        height: "630",
      },
    ],
  },
  appleWebApp: {
    title: "Iran SiRUBA",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "ایران سیروبا - نمایندگی انحصاری چرخ خیاطی صنعتی سیروبا",
  "url": "https://iransiruba.com",
  "description": "نماینده انحصاری چرخ خیاطی صنعتی سیروبا در ایران، ارائه‌دهنده انواع چرخ‌های صنعتی با کیفیت بالا و خدمات پس از فروش.",
  "inLanguage": "fa-IR"
}

const HomePage = () => {
  const [blurDataUrl] = useNextBlurhash("LEHV6nWB2yk8pyo0adR*.7kCMdnj");
  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="چرخ خیاطی صنعتی, سیروبا, نمایندگی سیروبا, ایران سیروبا, فروش چرخ خیاطی, تعمیر چرخ خیاطی صنعتی" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="canonical" href="https://iransiruba.com/" />
        <meta property="og:title" content="نمایندگی چرخ خیاطی صنعتی سیروبا | ایران سیروبا" />
        <meta property="og:description" content="ایران سیروبا نمایندگی رسمی چرخ خیاطی صنعتی سیروبا در ایران. فروش انواع چرخ خیاطی، خدمات پس از فروش، مشاوره رایگان." />
        <meta property="og:url" content="https://iransiruba.com/" />
        <meta property="og:type" content="website"></meta>
      </Head>
      <section>
        <SliderSwiperJs />
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", margin: "2rem" }}>
          شرکت سیروبا
        </h1>
        <section className="pb-6">
          <article className="md:my-8 sm:my-4 my-2">
            <h2 className="text-reg font-bold sm:text-reg md:text-xlg my-4">
              سیروبا، چرخ خیاطی‌های صنعتی با تمرکز بر کیفیت و نوآوری
            </h2>
            <p className="text-reg lg:text-lg my-4">
              نام برند سیروبا یکی از بهترین و خوشنام ترین برند
              <em> چرخ خیاطی صنعتی </em>
              دنیاست. با تاسیس شرکت تولیدی کائولین در سال 1965 میلادی، طراحی و
              ساخت چرخ خياطي های صنعتی با برند سیروبا شکل گرفت.
            </p>
            <p className="text-reg lg:text-lg my-4">
              سیروبا با رعایت استانداردهای بالای کیفیت، آموزش جامع و همکاری در
              انتقال دانش فنی، پیشتاز در بین شرکت های مبتنی بر تحقیق و پژوهش است.
              سیروبا با تکیه بر بخش &quot;تحقیق و توسعه &quot; چرخ خیاطی های خود
              را به روز رسانی می کند و از رقبای خود پیشی می گیرد. سیروبا انواع چرخ
              خياطي صنعتی را برای پارچه های مختلف و کاربردهای متنوع ارائه می دهد.
            </p>
          </article>
          <div className="w-full flex justify-center md:my-8 sm:my-4 my-2">
            <section
              className={`relative w-full aspect-[16/6] bg-top bg-cover bg-[url("../public/webp_siruba-industrial-sewing-machine.webp")]`}
            >
              <div className="absolute top-1 right-1 sm:top-2 sm:right:2 sm:font-bold">
                <h2 className="text-xm sm:text-reg md:text-lg">ایران سیروبا</h2>
              </div>
            </section>
          </div>

          <article className="md:my-8 sm:my-4 my-2">
            <h2 className="text-reg font-bold sm:text-reg md:text-xlg my-4">
              چرا سیروبا بهترین گزینه برای خرید <em> چرخ خیاطی صنعتی </em> است؟
            </h2>

            <p className="text-reg lg:text-lg my-4">
              با تمرکز بر کیفیت، مهندسین و طراحان<em> چرخ خیاطی صنعتی </em> سیروبا
              می‌توانند چالش‌های روز بازار را درک کرده و برای آن‌ها راه‌حل مناسب
              پیدا کنند. تعهد سیروبا بر توسعه چرخ خیاطی های صنعتی بهتر برای برآورد
              کردن تمام نیازهای مشتریان است. در حال حاضر، سیروبا 12 خط مختلف
              <em> چرخ خیاطی صنعتی </em>
              تولید می‌کند که به 129 مدل مختلف تبدیل می‌شود. با وجود چنین طیف
              گسترده‌ای از طراحی و تولید، سیروبا همچنان بر درک بازار و نیازهای
              مشتریان خود متمرکز است و دائماً در حال بهبود همه خطوط تولید محصولات
              خود است.
            </p>
          </article>
          <article className="md:my-8 sm:my-4 my-1">
            <h2 className="text-reg font-bold sm:text-reg md:text-xlg my-4">
              شرکت
              <span className="text-red-600"> قطعه سازان چرخ دوخت نماینده </span>
              نمایندگی انحصاری سیروبا در ایران
            </h2>
            <p className="text-reg lg:text-lg my-4">
              شرکت قطعه سازان چرخ دوخت نماینده انحصاری برند معتبر سیروبا در ایران
              است. سیروبا یکی از پیشروان تولید <em> چرخ خياطي صنعتي </em> با کیفیت
              و نوآوری در جهان محسوب می‌شود.
            </p>
            <p className="text-reg lg:text-lg my-4">
              شرکت قطعه سازان چرخ دوخت با ارائه 26 مدل <em>چرخ اطی صنعتی</em>{" "}
              سیروبا در{" "}
              <a className="internal_link" href="/products/">
                {" "}
                18 گروه بندی مختلف
              </a>{" "}
              و خدمات پس از فروش، علاقمندان دوخت صنعتی در ایران را یاری می‌کند.
              اگر به دنبال <em> چرخ خياطي صنعتي </em> با کارایی بالا و قابل اعتماد
              هستید، سیروبا را انتخاب کنید.
            </p>

            <p className="text-reg lg:text-lg my-4">
              برای مشاوره و خرید با دفتر مرکزی شرکت قطعه سازان چرخ دوخت در تهران{" "}
              <a className="internal_link" href="/contact/">
                تماس
              </a>{" "}
              بگیرید.
            </p>
          </article>
          <div>
            <ListCategories />
          </div>
        </section>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

    </>
  );
};

export default HomePage;
