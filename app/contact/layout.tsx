import React from "react";
// this is server component. you could use `metadata` as well

const title = "تماس با دفتر مرکزی سیروبا در ایران";
const description = "برای خرید و کسب اطلاعات با شرکت ایران سیروبا تماس بگیرید";

const url = "/contact/";

export const metadata = {
	title,
	description,
	openGraph: {
		title,
		description,
		images: [
			{
				url: "https://iransiruba.com/images/siruba-swing-machines/og_image.jpg",
				width: "1200",
				height: "630",
			},
		],

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
