
import localFont from "next/font/local";
import MenuResponsive from "./components/menuResponsive";
import TopHeaderInto from "./components/topHeaderInfo";
import GoogleAnalytics from "./GoogleAnalytics";
// import { CiFacebook, CiInstagram } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import "./global.css";
const myFont = localFont({
  src: [
    {
      path: "./iranyekanwebregular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./iranyekanwebbold.woff2",
      weight: "600",
      style: "bold",
    },
  ],
});

export const metadata = {
  openGraph: {
    siteName: "شرکت ایران سیروبا | Iran SiRUBA",
    type: "website",
    locale: "fa_IR",
  },
  keywords: [
    "چرخ خیاطی",
    "چرخ خیاطی صنعتی",
    "چرخ خیاطی سیروبا",
    "شرکت سیروبا",
    "ایران سیروبا",
    "نمایندگی چرخ سیروبا",
    "خياطي",
    "راسته دوز",
    "سردوز",
    "ماشين خياطي",
    "میاندوز",
    "چرخ صنعتی",
  ],
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${myFont.className} text-right text-reg antialiased`}
    >
      <head>
        <link
          rel="apple-touch-icon"
          href="https://iransiruba.com/apple-icon.png"
          type="image/png"
          sizes="180x180"
        />

        <meta name="language" content="fa" />
        <meta property="fb:app_id" content="136127169587782" />
        <meta property="place:location:latitude" content="35.6959543" />
        <meta property="place:location:longitude" content="51.3984215" />
        <meta
          property="business:contact_data:street_address"
          content="خیابان جمهوری اسلامی - ساختمان سجاد"
        />
        <meta property="business:contact_data:locality" content="Tehran" />
        <meta property="business:contact_data:country_name" content="Iran" />
        <meta
          property="business:contact_data:postal_code"
          content="3354718342"
        />
        <meta
          property="business:contact_data:phone_number"
          content="02168527"
        />
        <meta
          property="business:contact_data:website"
          content="https://iransiruba.com"
        />
        <meta
          property="business:contact_data:email"
          content="info@iransiruba.com"
        />
        <GoogleAnalytics />
      </head>
      <body className="sm:leading-8 leading-6 font-extralight">

        <main className="relative bg-[#ffffff] min-h-screen flex flex-col items-center p-0 m-0 w-full">
          <div className="relative w-full h-[40px] bg-[#000000] p-0 m-0 flex justify-center">
            <div className="absolute top-0 z-[100] xl:w-[1250px] sm:w-[85%] w-[96%]  h-[40px] bg-[#000000] flex flex-row sm:justify-end justify-center items-center m-0 p-0">
              <TopHeaderInto />
            </div>
            <div className="absolute z-[310] w-full top-0 h-[40px] flex justify-center shadow-bottom"></div>
          </div>
          <section className="relative xl:w-[1250px] sm:w-[85%] w-[96%] flex flex-col items-center">
            <MenuResponsive />

            <section className="w-full mb-10 p-1 bg-white shadow-md">
              <div className="w-full flex flex-col z-[50]">{children}</div>
            </section>
          </section>
        </main>
        <footer className="w-full justify-center items-center flex-col p-2 bg-[#000000] text-[#f37025] border-t-2 border-teal-300">
          <span className="flex justify-center">
            {/* <a
              href="https://facebook.com/iransiruba"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiFacebook size={28} />
            </a> */}
            <a
              href="https://www.instagram.com/siruba.ir/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiInstagram size={28} />
            </a>
          </span>
          <span
            className="sm:mr-4 p-4 pb-2 sm:p-0 flex justify-center text-white"
            dir="ltr"
          >
            Copyright &copy; 2026, Iran SiRUBA&reg;
          </span>
        </footer>
      </body>
    </html>
  );
};
export default RootLayout;
