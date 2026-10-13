import React from "react";
// this is server component. you could use `metadata` as well

const title = "فرم نظرسنجی خدمات ایران سیروبا";
const description = "فرم نظرسنجی خدمات. با تکمیل فرم پیشنهادات شرکت ایران سیروبا ما را در ارزیابی خدمات انجام شده یاری خواهید کرد.";
const url = "/customercare/servicesurvey/";

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

const layout = ({ children }: { children: React.ReactNode }) => {
	return <div>{children}</div>;
};

export default layout;
