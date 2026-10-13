import ListCategories from "../components/listCategories";
import Slider from "../components/slider";

const title = "معرفی شرکت سیروبا تایوان";
const description =
  "معرفی شرکت سیروبا تایوان. سیروبا با تولید چرخ خیاطی های صنعتی سردوز، راسته دوز، میادوز، و کامپیوتری نیاز مشتری خود را برطرف کرده.";
const url = "/introduction/";

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
  "name": "معرفی برند سیروبا",
  "url": "https://iransiruba.com",
  "description": "برند سیروبا، پیشرو در تولید چرخ‌های خیاطی صنعتی با تمرکز بر کیفیت و نوآوری از سال 1965.",
  "inLanguage": "fa-IR"
}

const Introduction = () => (
  <>
    <section className="w-full aspect-[16/5] relative border">
      <Slider />
    </section>
    <div className="p-6">
      <article className="my-2">
        <h1 className="text-reg font-bold sm:text-reg md:text-xlg my-4">
          معرفی شرکت کائولین
        </h1>
        <p className="text-reg lg:text-lg my-4">
          <strong>سیروبا</strong>، نام برندی است که کارخانه تولیدی چرخ دوختهای
          صنعتی کائولین (KAULIN MFG. CO. LTD) واقع در تایوان آن را تولید می‌کند.
          این کارخانه در سال 1965 میلادی تأسیس شده و بیش از 50 سال است که در
          تولید چرخ های دوخت صنعتی فعالیت می‌کند و به مشتریان و شرکای خود در
          سراسر دنیا سرویس ارائه می‌دهد.
        </p>
        <p className="text-reg lg:text-lg my-4">
          تکنولوژی به سرعت در حال تغییر است. در این عصر تحول، چرخهای دوخت صنعتی
          هم در تحول و تکامل هستند. <strong>سیروبا</strong> این مسیر تحول پر
          چالش را با توسعه و تغییر و با اطمینان طی کرده و می‌کند.{" "}
          <strong>سیروبا</strong> با دقت به جزییات، تمام مراحل سفارش، تولید، و
          ارسال را زیر نظر می‌گیرد تا مشتریان خود را راضی نگه دارد.
        </p>
        <p className="text-reg lg:text-lg my-4">
          <strong>سیروبا</strong> با تولید محصولات مختلف مانند چرخ های دوخت
          سردوزی، سوزنی، کامپیوتری، و خط تولید کامل نیاز مشتری در گروه های دوخت
          پارچه جین، لباس ورزشی و لباس بافتنی وقت خود را صرف کمک به صنعت دوخت
          کرده است.
        </p>
      </article>
      <section className="my-2">
        <div className="blockquote-siruba lg:text-4xlg md:text-2xlg text-reg w-[85%] sm:w-[70%] font-bold text-green bg-green-200 px-4 sm:py-8 py-4">
          “عالی تر بدوزید”
        </div>
      </section>
      <article className="my-2">
        <p className="text-reg lg:text-lg my-4">
          با شعار “عالی تر بدوزید”، <strong>سیروبا</strong> شبکه سرویس هوشمندی
          ایجاد کرده است. با ایجاد سایت فروش چرخهای دوخت صنعتی جدید و قطعات آن،
          مشتریان می‌توانند راحت‌تر و بهتر از قبل محصولات خود را تهیه کنند.
          مشتریان می‌توانند با برنامه موبایل SiRUBA APP کد چرخ خود را اسکن و
          گواهی اصالت آن را چک کنند و سرویس و خدمات دریافت نمایند و گزارش سرویس
          دهند.
        </p>
        <p className="text-reg lg:text-lg my-4">
          <strong>سیروبا</strong> در تمام نقاط دنیا که نیازی بوده عرضه شده است.{" "}
          <strong>سیروبا</strong> جوابگوی تمام تماس های مشتریان خود می‌باشد و
          راه حل برای نیازشان ارائه می‌دهد.
        </p>
        <p className="text-reg lg:text-lg my-4 font-bold">
          با ما تماس بگیرید تا با بهترین سرویس همراه شما باشیم..
        </p>
      </article>
      <div>
        <ListCategories />
      </div>
    </div>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />

  </>
);

export default Introduction;
