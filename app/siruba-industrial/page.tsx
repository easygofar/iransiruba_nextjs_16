export default function SirubaIndustrial() {
    return <>

        <header className="bg-gradient-to-r from-[#0a2b3e] to-[#0f3b4f] text-white border-b-4 border-amber-500">
            <div className="container mx-auto px-6 py-8 flex flex-wrap justify-between items-center gap-4">
                <div className="logo">
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight">چرخ‌خیاطی صنعتی <span className="text-amber-400">سیروبا</span></h1>
                    <p className="text-sm text-slate-300 mt-1">تایوان • استحکام صنعتی • دوخت حرفه‌ای</p>
                </div>
                <div className="bg-amber-500 text-slate-900 px-5 py-2 rounded-full font-bold text-sm shadow-md">
                    <i className="fas fa-industry ml-1"></i> فروشنده تخصصی صنعتی
                </div>
            </div>
        </header>

        {/* <!-- Sticky Navbar --> */}
        <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-slate-200">
            <div className="container mx-auto px-6">
                <ul className="flex flex-wrap justify-center gap-6 md:gap-10 py-4">
                    <li><a href="#why-siruba" className="font-semibold text-slate-700 hover:text-amber-600 transition">چرا سیروبا</a></li>
                    <li><a href="#applications" className="font-semibold text-slate-700 hover:text-amber-600 transition">کاربردها و دوخت‌ها</a></li>
                    <li><a href="#models" className="font-semibold text-slate-700 hover:text-amber-600 transition">مدل‌های صنعتی</a></li>
                    <li><a href="#contact" className="font-semibold text-slate-700 hover:text-amber-600 transition">تماس و سفارش</a></li>
                </ul>
            </div>
        </nav>

        <main>
            {/* <!-- Hero section --> */}
            <section className="bg-white border-b border-slate-200 py-12 md:py-16">
                <div className="container mx-auto px-6 flex flex-wrap lg:flex-nowrap gap-8 items-center">
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#0a2b3e] to-[#2c6e8f] bg-clip-text text-transparent leading-tight">چرخ صنعتی سیروبا<br />محکم، ساده و بی‌حاشیه برای تولید انبوه</h2>
                        <p className="text-lg text-slate-600 mt-4 max-w-xl">مناسب برای کارگاه‌های پوشاک، تولیدی‌های کوچک و بزرگ. استحکام تایوانی، قیمت مقرون‌به‌صرفه، دوختی قابل اتکا برای سال‌ها کار مداوم.</p>
                    </div>
                    <div className="flex-1 bg-slate-100 rounded-3xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-black text-[#0f3b4f]">+۱۵۰۰</div>
                        <div className="text-slate-600">کارگاه فعال با چرخ‌های سیروبا</div>
                        <hr className="my-3 border-slate-300" />
                        <div className="text-2xl font-black text-[#0f3b4f]">صنعتی</div>
                        <div className="text-slate-600">فقط مدل‌های تمام فلز و حرفه‌ای</div>
                    </div>
                </div>
            </section>

            {/* ================= WHY SIRUBA SECTION ================= */}
            <section id="why-siruba" className="py-16 md:py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl md:text-3xl font-bold border-r-4 border-amber-500 pr-4 mb-10 inline-block"><i className="fas fa-check-circle text-amber-500 ml-2"></i> چرا سیروبا را انتخاب کنیم؟</h2>
                    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
                        {/* <!-- reason items --> */}
                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <div className="bg-amber-50 rounded-full w-12 h-12 flex items-center justify-center text-amber-600 text-xl shrink-0"><i className="fas fa-coins"></i></div>
                                <div><h3 className="text-xl font-bold">ارزش خرید و قیمت مناسب</h3><p className="text-slate-600">سیروبا قیمت اولیه بسیار مناسبی دارد. با بودجه محدود، یک چرخ صنعتی واقعی، تمام فلز و بدون حاشیه تهیه کنید.</p></div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="bg-amber-50 rounded-full w-12 h-12 flex items-center justify-center text-amber-600 text-xl shrink-0"><i className="fas fa-cogs"></i></div>
                                <div><h3 className="text-xl font-bold">استحکام در کارهای ساده و سنگین</h3><p className="text-slate-600">ماشین‌های سیروبا برای تولید انبوه در کارگاه‌های پوشاک ساخته شده‌اند. دوام بالا، پایداری مکانیکی عالی و قابلیت کار مداوم.</p></div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="bg-amber-50 rounded-full w-12 h-12 flex items-center justify-center text-amber-600 text-xl shrink-0"><i className="fas fa-gem"></i></div>
                                <div><h3 className="text-xl font-bold">ساختار محکم و بی‌دردسر</h3><p className="text-slate-600">طراحی شده برای اپراتورهایی که به یک چرخ سنگین، ساده و بدون پیچیدگی نیاز دارند. هر دوخت را درست و اصولی انجام می‌دهد.</p></div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="bg-amber-50 rounded-full w-12 h-12 flex items-center justify-center text-amber-600 text-xl shrink-0"><i className="fas fa-charging-station"></i></div>
                                <div><h3 className="text-xl font-bold">مقرون به صرفه برای تمامی کارگاه‌های حرفه‌ای</h3><p className="text-slate-600">اگر به یک ماشین بی‌دردسر و مقرون‌به‌صرفه برای دوخت روزمره نیاز دارید، سیروبا گزینه‌ای بی‌نظیر و قابل اعتماد است.</p></div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="bg-amber-50 rounded-full w-12 h-12 flex items-center justify-center text-amber-600 text-xl shrink-0"><i className="fas fa-thumbs-up"></i></div>
                                <div><h3 className="text-xl font-bold">عملکرد قابل اعتماد در همه مدل‌های صنعتی</h3><p className="text-slate-600">اورلاک، چرخ ساده، زیگزاگ، چنده‌ساله، سردوز، کاور... همه مدل‌های صنعتی سیروبا در کارگاه‌های پوشاک جهان شناخته شده و قابل اتکا هستند.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ================= ALL STITCH TYPES (INDUSTRIAL) ================= --> */}
            <section id="applications" className="py-16 bg-amber-50/50">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl md:text-3xl font-bold border-r-4 border-amber-500 pr-4 mb-6 inline-block"><i className="fas fa-tshirt text-amber-500 ml-2"></i> تمام دوخت های صنعتی با چرخ های سیروبا </h2>
                    <p className="text-slate-700 text-lg mb-8 max-w-4xl">سیروبا طیف کاملی از ماشین‌آلات دوخت صنعتی را پوشش می‌دهد. در زیر انواع دوخت‌هایی که با چرخ‌های صنعتی این برند می‌توانید انجام دهید، آورده شده است:</p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                        <div className="bg-white border border-slate-200 rounded-full py-3 px-4 text-center text-sm font-medium hover:border-amber-400 hover:bg-amber-50 transition flex items-center justify-center gap-2"><i className="fas fa-arrow-right text-amber-500 text-xs"></i> دوخت ساده (Lockstitch)</div>
                        <div className="bg-white border border-slate-200 rounded-full py-3 px-4 text-center text-sm font-medium hover:border-amber-400 hover:bg-amber-50 transition flex items-center justify-center gap-2"><i className="fas fa-arrow-right text-amber-500 text-xs"></i> اورلاک ۳/۴/۵ نخ</div>
                        <div className="bg-white border border-slate-200 rounded-full py-3 px-4 text-center text-sm font-medium hover:border-amber-400 hover:bg-amber-50 transition flex items-center justify-center gap-2"><i className="fas fa-arrow-right text-amber-500 text-xs"></i> زیگزاگ صنعتی</div>
                        <div className="bg-white border border-slate-200 rounded-full py-3 px-4 text-center text-sm font-medium hover:border-amber-400 hover:bg-amber-50 transition flex items-center justify-center gap-2"><i className="fas fa-arrow-right text-amber-500 text-xs"></i> چنده‌ساله (Flatlock)</div>
                        <div className="bg-white border border-slate-200 rounded-full py-3 px-4 text-center text-sm font-medium hover:border-amber-400 hover:bg-amber-50 transition flex items-center justify-center gap-2"><i className="fas fa-arrow-right text-amber-500 text-xs"></i> سردوز (Coverstitch)</div>
                        <div className="bg-white border border-slate-200 rounded-full py-3 px-4 text-center text-sm font-medium hover:border-amber-400 hover:bg-amber-50 transition flex items-center justify-center gap-2"><i className="fas fa-arrow-right text-amber-500 text-xs"></i> کاور (Cover seam)</div>
                        <div className="bg-white border border-slate-200 rounded-full py-3 px-4 text-center text-sm font-medium hover:border-amber-400 hover:bg-amber-50 transition flex items-center justify-center gap-2"><i className="fas fa-arrow-right text-amber-500 text-xs"></i> دکمه و سوراخ دکمه</div>
                        <div className="bg-white border border-slate-200 rounded-full py-3 px-4 text-center text-sm font-medium hover:border-amber-400 hover:bg-amber-50 transition flex items-center justify-center gap-2"><i className="fas fa-arrow-right text-amber-500 text-xs"></i> نازک‌دوزی و جین سنگین</div>
                        <div className="bg-white border border-slate-200 rounded-full py-3 px-4 text-center text-sm font-medium hover:border-amber-400 hover:bg-amber-50 transition flex items-center justify-center gap-2"><i className="fas fa-arrow-right text-amber-500 text-xs"></i> لبه‌دوزی (Edge)</div>
                        <div className="bg-white border border-slate-200 rounded-full py-3 px-4 text-center text-sm font-medium hover:border-amber-400 hover:bg-amber-50 transition flex items-center justify-center gap-2"><i className="fas fa-arrow-right text-amber-500 text-xs"></i> دوخت کشباف (Knits)</div>
                        <div className="bg-white border border-slate-200 rounded-full py-3 px-4 text-center text-sm font-medium hover:border-amber-400 hover:bg-amber-50 transition flex items-center justify-center gap-2"><i className="fas fa-arrow-right text-amber-500 text-xs"></i> چرم سبک و مصنوعی</div>
                        <div className="bg-white border border-slate-200 rounded-full py-3 px-4 text-center text-sm font-medium hover:border-amber-400 hover:bg-amber-50 transition flex items-center justify-center gap-2"><i className="fas fa-arrow-right text-amber-500 text-xs"></i> رودوزی تزئینی</div>
                    </div>

                    <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-slate-200">
                        <p className="text-slate-800"><i className="fas fa-check-circle text-amber-500 ml-1"></i> <strong>کاربردهای حرفه‌ای:</strong> تولید البسه (تیشرت، شلوار جین، مانتو، لباس ورزشی)، دوخت مبلمان، کیف و کفش (مدل‌های سنگین)، تولید البسه بیمارستانی و صنعتی، تولید پوشاک کارگری و ...</p>
                    </div>
                </div>
            </section>

            {/* <!-- ================= INDUSTRIAL MODELS SHOWCASE ================= --> */}
            <section id="models" className="py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl md:text-3xl font-bold border-r-4 border-amber-500 pr-4 mb-10 inline-block"><i className="fas fa-microchip text-amber-500 ml-2"></i> ماشین‌های صنعتی سیروبا (گزیده مدل‌ها)</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition">
                            <i className="fas fa-stitch text-3xl text-amber-500 mb-4 block"></i>
                            <h3 className="text-xl font-bold mb-2">سیروبا L818F</h3>
                            <p className="text-slate-600">چرخ ساده صنعتی مستقیم‌درایو (دیجیتال)، دوخت یکنواخت برای جین، چرم نرم و پارچه‌های ضخیم. ایده‌آل برای تولیدی پوشاک با تیراژ بالا.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition">
                            <i className="fas fa-border-all text-3xl text-amber-500 mb-4 block"></i>
                            <h3 className="text-xl font-bold mb-2">سیروبا ۷۴۷ سری صنعتی</h3>
                            <p className="text-slate-600">کلاسیک‌ترین اورلاک صنعتی ۳/۴ نخ، با قابلیت دوخت فوق‌العاده محکم و لبه‌دوزی سریع برای البسه کشباف و حریر.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition">
                            <i className="fas fa-waveform text-3xl text-amber-500 mb-4 block"></i>
                            <h3 className="text-xl font-bold mb-2">سیروبا ۱۴۱ سری (زیگزاگ)</h3>
                            <p className="text-slate-600">زیگزاگ صنعتی با دوخت زیگزاگ پهن، مناسب برای دوخت لباس‌های ورزشی، کشباف و تعمیرات پارچه‌های الاستیک.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition">
                            <i className="fas fa-layer-group text-3xl text-amber-500 mb-4 block"></i>
                            <h3 className="text-xl font-bold mb-2">سیروبا سری چنده‌ساله (FLAT)</h3>
                            <p className="text-slate-600">دوخت صاف و مسطح برای سجاف و درزهای بازشو در البسه تنی، لباس زیر و پوشاک اسپرت. قابلیت دوخت همزمان با چند سوزن.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition">
                            <i className="fas fa-grip-lines text-3xl text-amber-500 mb-4 block"></i>
                            <h3 className="text-xl font-bold mb-2">سیروبا سردوز (Coverstitch)</h3>
                            <p className="text-slate-600">مدل اختصاصی برای سر دوز یقه و سجاف کشباف، دوخت حرفه‌ای و الاستیک بدون پارگی.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition">
                            <i className="fas fa-industry text-3xl text-amber-500 mb-4 block"></i>
                            <h3 className="text-xl font-bold mb-2">چرخ سیروبا دو سوزن</h3>
                            <p className="text-slate-600">دوخت دوخط موازی، پرکاربرد در شلوار جین، کیف و پوشاک صنعتی، با قابلیت تنظیم فاصله سوزن‌ها.</p>
                        </div>
                    </div>
                    <div className="mt-10 bg-slate-100 rounded-2xl p-4 text-center text-slate-700 font-medium">
                        <i className="fas fa-certificate text-amber-500 ml-1"></i> همه مدل‌های صنعتی سیروبا – دارای قطعات اصلی و گارانتی استحکام
                    </div>
                </div>
            </section>

            {/* <!-- Additional reasons summary (no other brands) --> */}
            <section className="container mx-auto px-6 mb-12">
                <div className="bg-slate-100 rounded-3xl p-6 md:p-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="flex gap-3 items-start">
                            <i className="fas fa-shield-alt text-2xl text-amber-600 mt-1"></i>
                            <div><h4 className="font-bold text-lg">بدون تکنولوژی‌های زائد، فقط استحکام صنعتی</h4><p className="text-slate-600 text-sm">سیروبا روی کارایی و دوام تمرکز دارد. ماشین‌هایی ساده، کم‌استرس و مناسب برای کارگاه‌های واقعی.</p></div>
                        </div>
                        <div className="flex gap-3 items-start">
                            <i className="fas fa-tachometer-alt text-2xl text-amber-600 mt-1"></i>
                            <div><h4 className="font-bold text-lg">سرعت دوخت بالا و صدای کمتر (مدل‌های مستقیم)</h4><p className="text-slate-600 text-sm">مدل‌های جدید سیروبا مجهز به موتور مستقیم (Direct Drive) با مصرف بهینه و عملکرد آرام، بدون کاهش گشتاور.</p></div>
                        </div>
                        <div className="flex gap-3 items-start">
                            <i className="fas fa-wrench text-2xl text-amber-600 mt-1"></i>
                            <div><h4 className="font-bold text-lg">تنظیم آسان و دسترسی به لوازم یدکی اصلی</h4><p className="text-slate-600 text-sm">به عنوان فروشنده تخصصی، تمام قطعات مصرفی و فنی سیروبا موجود است. خدمات پس از فروش حرفه‌ای.</p></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ================= CONTACT SECTION ================= --> */}
            <section id="contact" className="container mx-auto px-6 mb-16">
                <div className="bg-gradient-to-r from-[#0a2b3e] to-[#0f3b4f] text-white rounded-[2.5rem] p-8 md:p-12 text-center shadow-2xl">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3"><i className="fas fa-headset ml-2"></i> مشاوره تخصصی خرید چرخ صنعتی سیروبا</h3>
                    <p className="text-slate-200 max-w-2xl mx-auto">فروش مستقیم چرخ‌های صنعتی Siruba (اورلاک، ساده، زیگزاگ، چنده‌ساله، سردوز و ...). برای استعلام قیمت و مشاوره مدل مناسب کارگاه خود، با ما تماس بگیرید.</p>
                    <div className="inline-block bg-amber-500 text-slate-900 px-6 py-3 rounded-full font-bold text-lg mt-6 shadow-md">
                        <i className="fas fa-phone-alt ml-2"></i> ۰۲۱-XXXXXXXX | ۰۹۱۲XXX۱۲۳۴
                    </div>
                    <div className="mt-6 text-slate-300 text-sm flex justify-center gap-6 flex-wrap">
                        <span><i className="fas fa-envelope ml-1"></i> sales@siruba-industrial.ir</span>
                        <span><i className="fab fa-whatsapp ml-1"></i> واتساپ / ایتا : ۰۹۰۲XXXXXX</span>
                    </div>
                </div>
            </section>
        </main>

        <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
            <div className="container mx-auto px-6 text-center">
                <p>تمام حقوق متعلق به فروشنده تخصصی چرخ‌های صنعتی سیروبا | Siruba Industrial Machines</p>
                <p className="mt-2 text-sm">ارائه دهنده چرخ‌های تمام فلز صنعتی برای کارگاه‌های پوشاک، تولیدی و دوخت حرفه‌ای</p>
                <p className="mt-1 text-xs"><i className="fas fa-certificate text-amber-500 ml-1"></i> فقط مدل‌های صنعتی – بدون ارائه چرخ‌های غیرحرفه‌ای</p>
            </div>
        </footer>

    </>
}