import Head from "next/head";
import DisplayVideo from "../../components/display-video";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "تکنولوژی‌های به‌ کار رفته در چرخ‌های سیروبا",
  "url": "https://iransiruba.com",
  "description": "معرفی تکنولوژی‌های پیشرفته مانند استپینگ موتور که در چرخ‌های خیاطی صنعتی سیروبا استفاده می‌شوند.",
  "inLanguage": "fa-IR"
}


export default function SteppingMotor() {
  return (
    <>
      <div className="pt-4 w-full">
        <div className="flex w-full justify-center">
          <div className="w-[96%] md:w-[80%]">
            <DisplayVideo
              label="استپینگ موتور سیروبا"
              link="sez4a67"
              key="sez4a67"
              fullpage={true}
            />
          </div>
        </div>
        <section className="max-w-5xl mx-auto px-4 py-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            تکنولوژی موتور پله‌ای در چرخ خیاطی صنعتی سیروبا | دقت، سرعت، عملکرد هوشمند
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            <strong>موتور پله‌ای (Stepping Motor)</strong> یکی از پیشرفته‌ترین تکنولوژی‌های به‌کاررفته در نسل جدید چرخ‌های خیاطی صنعتی سیروبا است. این فناوری با فراهم‌کردن کنترل دقیق، عملکرد نرم و پاسخ‌دهی سریع، نقش کلیدی در بهبود کیفیت دوخت و افزایش بهره‌وری تولید ایفا می‌کند.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            مزایای استفاده از موتور پله‌ای در چرخ خیاطی سیروبا
          </h2>

          <ul className="space-y-4 text-gray-700 text-base leading-relaxed list-disc pr-6 mb-8">
            <li>
              <strong>دقت موقعیت سوزن:</strong> امکان کنترل میلی‌متری حرکت سوزن، مناسب برای دوخت‌های حساس و دقیق.
            </li>
            <li>
              <strong>افزایش سرعت و بهره‌وری:</strong> کاهش زمان در هر عملیات دوخت و افزایش سرعت خطوط تولید.
            </li>
            <li>
              <strong>کاهش نویز و لرزش:</strong> عملکرد آرام و کم‌صدا که محیط کار را بهبود می‌بخشد.
            </li>
            <li>
              <strong>امکان برنامه‌ریزی حرکات:</strong> قابلیت تنظیم سرعت، جهت و طول دوخت با دقت بالا.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            چرا چرخ‌های صنعتی سیروبا با تکنولوژی stepping motor؟
          </h2>

          <ul className="space-y-4 text-gray-700 list-disc pr-6 mb-8">
            <li>طراحی حرفه‌ای برای استفاده در خطوط تولید سنگین</li>
            <li>پشتیبانی از سیستم‌های کنترل دیجیتال و نمایشگر لمسی</li>
            <li>دوام بالا و عمر طولانی در شرایط کاری سخت</li>
            <li>عملکرد ثابت حتی در استفاده مداوم</li>
          </ul>

          <p className="text-lg font-medium text-gray-800 mt-10">
            📞 برای دریافت مشاوره تخصصی و مشاهده مدل‌های مجهز به موتور پله‌ای، با ما تماس بگیرید یا از بخش <a href="/products" className="text-blue-600 hover:underline">محصولات</a> بازدید کنید.
          </p>
        </section>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

    </>
  );
}

