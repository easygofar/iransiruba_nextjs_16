// this is server component. you could use `metadata` as well

const title = "تکنولوژی استپینگ موتور سیروبا";
const description =
  "چرخ خیاطی های سیروبا مجهز به استپینگ موتور (موتور های پله ای) می باشند.";

const url = "/technology/stepping-motor/";

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
  },
  metadataBase: new URL("https://iransiruba.com/"),
  alternates: {
    canonical: url,
  },
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default layout;
