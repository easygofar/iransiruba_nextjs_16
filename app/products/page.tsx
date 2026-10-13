import Link from "next/link";
import ListCategories from "../components/listCategories";
import { IfMachineType } from "../../utils/types";
import { getData } from "../../lib";

const url = "/products/";

export const metadata = {
  title: "گروه بندی چرخ خیاطی های صنعتی سیروبا",
  description:
    "گروه بندی چرخ خیاطی های صنعتی سیروبا. چرخ خیاطی های صنعتی سیروبا با بیش از 50 سال تجربه در صنعت خیاطی، به دلیل کیفیت بالای محصولات خود شناخته شده اند.",
  openGraph: {
    type: "website",
    title: "گروه بندی چرخ خیاطی های صنعتی سیروبا",
    description:
      "گروه بندی چرخ خیاطی های صنعتی سیروبا. چرخ خیاطی های صنعتی سیروبا با بیش از 50 سال تجربه در صنعت خیاطی، به دلیل کیفیت بالای محصولات خود شناخته شده اند.",
    url: "https://iransiruba.com/products/",
    siteName: "شرکت ایران سیروبا | Iran SiRUBA",
    locale: "fa_IR",
    images: [
      {
        url: "https://iransiruba.com/images/siruba-swing-machines/og_image.jpg",
        width: "1200",
        height: "630",
        alt: "چرخ خیاطی صنعتی سیروبا",
      },
    ],
  },
  metadataBase: new URL("https://iransiruba.com"),
  alternates: {
    canonical: "/products/",
  },
};

const Products = async () => {
  // const { data } = await getData();
  // const machines: IfMachineType[] = convertToJson(data);

  const machines = getData();


  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "محصولات چرخ خیاطی صنعتی سیروبا",
    "url": "https://iransiruba.com",
    "description": "مجموعه‌ای از چرخ‌های خیاطی صنعتی سیروبا شامل راسته‌دوز، سردوز، میاندوز و سایر مدل‌ها با کیفیت بالا.",
    "inLanguage": "fa-IR"
  }

  return (
    <>
      <p className="text-xs sm:text-sm mx-2 text-blue-500">
        <Link href="/" className="text-blue-500 hover:underline">
          ایران سیروبا
        </Link>{" "}
        / <span className="text-slate-500 font-bold">محصولات</span>
      </p>
      <section className="p-6">
        <h1 className="w-full text-reg font-bold sm:text-reg md:text-xlg my-4 text-center lg:text-2xlg">
          سیروبا بهترین چرخ خیاطی های صنعتی در دنیا
        </h1>
        <p>
          چرخ خیاطی های صنعتی سیروبا با بیش از 50 سال تجربه در صنعت خیاطی، به
          دلیل کیفیت بالای محصولات خود شناخته شده اند. شرکت سیروبا محصولات
          گسترده ای را ارائه می دهند، از جمله سردوز خودکار، میاندوز چند سوزنه،
          راسته دوز تک سوزنه و غیره. شرکت سیروبا در انجام کیفیت و زیبایی دوخت در
          سراسر جهان متعهد و شناخته شده هستند. شرکت سیروبا همچنین خدمات و راه‌حل
          های مختلفی را برای مشتریان و شرکای خود در سراسر جهان ارائه می دهد.
          برای کسب اطلاعات بیشتر در مورد چرخ خیاطی های صنعتی سیروبا با ما{" "}
          <a className="internal_link" href="/contact/">
            تماس
          </a>{" "}
          بگیرید.
        </p>
        <section className="flex flex-wrap sm:justify-around justify-center md:my-8 sm:my-4 my-2">
          <ListCategories />
        </section>
        <p className="mt-6 text-gray-100">
          {machines.map((m: IfMachineType) => {
            const hashtag = m.farsi.replace(" ", "_");
            return <span key={m.id}>#{hashtag} ، </span>;
          })}{" "}
          #چرخ_خیاطی
        </p>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

    </>
  );
};
export default Products;
