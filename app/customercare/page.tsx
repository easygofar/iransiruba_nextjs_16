import Link from "next/link";
import useNextBlurhash from "use-next-blurhash";
import CustomerCareImage from "../components/customer-care-image";
import Image from "next/image";

const title = "خدمات و پشتیبانی شرکت ایران سیروبا";
const description = "خدمات و پشتیبانی شرکت ایران سیروبا در کنار شماست";

const url = "/customercare/";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "پشتیبانی و خدمات پس از فروش",
  "url": "https://iransiruba.com",
  "description": "ارائه خدمات پشتیبانی و مشاوره برای محصولات چرخ خیاطی صنعتی سیروبا در ایران.",
  "inLanguage": "fa-IR"
}


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

const Contact = () => {
  const [blurDataUrl] = useNextBlurhash("LEHV6nWB2yk8pyo0adR*.7kCMdnj");

  return (
    <>
      <div>
        {/* <CustomerCareImage title="خدمات و پشتیبانی" /> */}

        <section className={`relative aspect-[16/5] border bg-top`}>
          <Image
            src="/images/customer-care.jpg"
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

        <div className="sm:p-4 p-[2px]">
          <section className="sm:my-4 my-[2px]">
            <h2 className="text-reg font-bold sm:text-reg md:text-xlg my-4">
              پشتیبانی، نظرسنجی و رسیدگی به شکایات
            </h2>
            <div className="relative text-reg sm:my-4 my-2 sm:mt-8 mt-4 flex sm:justify-bwetween sm:items-stretch w-full flex-wrap px-2 md:px-0"></div>
            <p className="text-reg lg:text-lg my-4">
              یک عنصر ضروری در بنیان اجرایی شرکت قطعه سازان چرخ دوخت احترام به
              مشتری و ارائه خدمات مناسب است. ارائه این خدمات توسط همکارانی حرفه ای
              صورت می گیرد که در تماس روزانه با مشتریان و در خانه هایشان کار می
              کنند. این حرفه ای ها در واقع همان کارشناسان خدمات پس از فروش شرکت
              هستند.
            </p>

            <p className="text-reg lg:text-lg my-4">
              شرکت قطعه سازان چرخ دوخت به منظور فراهم آوردن کیفیت محصولات با خدمات
              به همان اندازه برجسته، پرسنل نصب و نگهداری خود را با آموزش سطح بالا
              پروش می دهد و بر روی آخرین استانداردها و فن آوری ها تمرکز نموده و
              خدمات نوین و سریع خود را به مصرف کنندگان کالاهای خود عرضه می دارد.
              بدین ترتیب تکنیسین های شرکت قطعه سازان چرخ دوخت دارای بهترین آگاهی
              کامل از محصولات و سیستم ها هستند و با آخرین راه حل های جدید به روز
              می شوند و استانداردهای نگهداری کالا را تضمین می کنند.
            </p>
            <p className="text-reg lg:text-lg my-4">
              شبکه خدمات پس از فروش و مرکز امدادرسانی مجاز شرکت ایران سیروبا در
              طول سال ها رشد کرده است و اکنون از طریق کسب اعتماد، فروش گسترده ای
              به دست آورده است. امروزه مرکز پشتیبانی فنی شرکت متشکل از تکنسین های
              متخصص، قابل اعتماد و سازماندهی شده است. شبکه خدمات پس از فروش حرفه
              ای، تضمین بالاترین سطح خدمات، رعایت الزامات قانونی، و سیستم های امن
              و کارآمد برای حداقل مصرف انرژی دارا می باشد.
            </p>

            <p className="text-reg lg:text-lg my-4">
              مشتریان گرامی می توانند با تکمیل فرم های زیر می توانند ما را در
              ارایه خدمات مناسب و برگزیده یاری کنند.
            </p>

            <div className="w-full flex justify-around md:p-10 p-4 my-10">
              <Link
                href="/customercare/servicesurvey"
                className="sm:px-4 sm:py-2 px-[10px] py-[5px] sm:text-reg text-sm bg-red-500 shadow rounded-md border-[1px] border-red-300 hover:bg-red-600 text-white"
              >
                نظرسنجی خدمات
              </Link>

              <Link
                href="/customercare/registercomplaints"
                className="sm:px-4 sm:py-2 px-[10px] py-[5px] sm:text-reg text-sm bg-red-500 shadow rounded-md border-[1px] border-red-300 hover:bg-red-600 text-white"
              >
                ثبت شکایات
              </Link>
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
export default Contact;
