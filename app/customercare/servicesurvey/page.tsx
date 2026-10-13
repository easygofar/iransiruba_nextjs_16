"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import CustomerCareImage from "../../components/customer-care-image";
import CehckBoxes from "../../components/form/checkboxes";
import DropdownList from "../../components/form/dropdown-list";
import InputText from "../../components/form/input-text";
import TextArea from "../../components/form/text-area";

const dropdownData = [
	{ value: "--" },
	{ value: "خیلی زیاد" },
	{ value: "متوسط" },
	{ value: "کم" },
	{ value: "خیلی کم" },
	{ value: "نظری ندارم" },
	{ value: "مشمول نمیشود" },
];

const formObject = {
	question_01: [],
	question_02: [],
	question_03: [],
	question_04: [],
	question_05: [],
	question_06: [],
	question_07: [],
	question_08: [],
	question_09: [],
	question_10: [],
	question_11: [],
	question_12: [],
	question_13: [],
	question_14: [],
	question_15: [],
	question_16: [],
	question_17: [],
	question_18: [],
	question_19: [],
	question_20: [],
	question_21: [],
	question_22: [],
	question_23: [],
	question_24: [],
	question_25: [],
	question_26: [],
	question_27: [],
	question_28: [],
	question_29: [],
	question_30: [],
	question_31: [],
	question_32: [],
};

const ServiceSurvey = () => {
	const [formInfo, setFormInfo] = useState(formObject);
	const [emailSent, setEmailSent] = useState(false);
	const handleOnSubmit = async (e: FormEvent) => {
		e.preventDefault();

		let info: any = { ...formInfo };

		// check name and last name not empty
		if (!info["question_26"].length) {
			alert("نام و نام خانوادگی را کامل وارد کنید");
			const element = document.getElementById('customerName')
			element?.scrollIntoView();
			window.scrollTo({
				top: element?.offsetTop,
				behavior: 'smooth'
			})
			element?.focus()
			return;
		}

		try {
			const result: Response = await fetch(
				"https://iransiruba.com/mail3.php",
				{
					method: "POST",
					mode: "cors",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(info),
				}
			);
			if (result.ok) setEmailSent(true);
			else throw Error(JSON.stringify(result));
		} catch (e: any) {
			console.log("error", e);
		}
	};

	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		let info: any = { ...formInfo };
		if (e.target.type === "checkbox") {
			if (e.target.checked) {
				info[e.target.name].push(e.target.value);
				// info = { ...formInfo, [e.target.name]: e.target.value }
			} else {
				const answer = info[e.target.name].filter(
					(ans: string) => ans !== e.target.value
				);
				if (answer.length) info[e.target.name] = [answer];
				else info[e.target.name] = [];
			}
		} else {
			if (e.target.value.trim() !== "")
				info[e.target.name] = [e.target.value];
			else info[e.target.name] =[]
		}
		setFormInfo(info);
	};

	const handleOnTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
		let info: any = { ...formInfo };
		if (e.target.value.trim() !== "" && e.target.value.trim() !== "--")
			info[e.target.name] = [e.target.value];
			else info[e.target.name] =[]
		setFormInfo(info);
	};

	const handleOnSelect = (e: any) => {
		let info: any = { ...formInfo };
		if (e.target.value.trim() !== "" && e.target.value.trim() !== "--")
			info[e.target.name] = [e.target.value];
		setFormInfo(info);
	};
	return (
		<div>
			<CustomerCareImage title="نظرسنجی خدمات" />

			<div className="sm:p-4 p-[2px]">
				{emailSent ? (
					<section className="sm:my-4 my-[2px]">
						<h2 className="text-reg font-bold sm:text-reg md:text-xlg my-4">
							نظرسنجی خدمات
						</h2>
						<hr color="red" />
						<div className="relative text-reg h-screen sm:my-4 my-2 sm:mt-8 mt-4 flex flex-col items-center w-full flex-wrap px-2 md:px-0">
							<p className="text-reg lg:text-lg my-4 text-center p-2">
								نظر سنجی شما ارسال شد.
							</p>
							<p className="text-reg lg:text-lg text-center p-2">
								از همکاری شما متشکریم. به زودی با شما تماس می
								گیریم.
							</p>
						</div>
					</section>
				) : (
					<>
						<section className="sm:my-4 my-[2px]">
							<h2 className="text-reg font-bold sm:text-reg md:text-xlg my-4">
								نظرسنجی خدمات
							</h2>
							<div className="relative text-reg sm:my-4 my-2 sm:mt-8 mt-4 flex sm:justify-bwetween sm:items-stretch w-full flex-wrap px-2 md:px-0"></div>
							<p className="text-reg lg:text-lg my-4">
								با تکمیل فرم زیر ما را در ارزیابی خدمات انجام
								شده یاری خواهید کرد. این اطمینان را به شما می
								دهیم نظرات شما به دقت ارزیابی شده و در اصلاح و
								بهبود امور بکار گرفته خواهد شد:
							</p>

							<hr color="red" />
						</section>
						<section>
							<form>
								<CehckBoxes
									onChange={handleOnChange}
									name="question_01"
									legend="۱- به چه دلیل باخدمات پس از فروش شرکت تماس گرفته اید؟"
									data={[
										{ value: "نصب" },
										{ value: "تعمیر" },
									]}
								/>

								<DropdownList
									onChange={handleOnSelect}
									name="question_02"
									legend="۲- آیا بابت انجام تعمیرات / نصب هزینه ای پرداخت کرده اید؟"
									data={[
										{ value: "--" },
										{ value: "خیر" },
										{ value: "بلی" },
									]}
								/>

								<CehckBoxes
									onChange={handleOnChange}
									name="question_03"
									legend="۳- این هزینه بابت چه بود ؟"
									data={[
										{ value: "ایاب‌ و‌ ذهاب" },
										{ value: "دسنمزد نصب" },
										{ value: "دستمزد تعمیرات" },
										{ value: "قطعات یدکی" },
										{
											value: "هزینه‌های غیرمتعارف(طلب انعام و ...)",
										},
										{ value: "سایر موارد" },
									]}
								/>

								<DropdownList
									onChange={handleOnSelect}
									name="question_04"
									legend="۴- آیا قبل از انجام تعمیرات حدود هزینه به شما اعلام شد؟"
									data={[
										{ value: "--" },
										{ value: "خیر" },
										{ value: "بلی" },
									]}
								/>

								<DropdownList
									onChange={handleOnSelect}
									name="question_05"
									legend="۵- آیا فاکتور تعمیرات صورت گرفته و قطعات تعویض شده به شما ارائه شد؟"
									data={[
										{ value: "--" },
										{ value: "خیر" },
										{ value: "بلی" },
									]}
								/>

								<DropdownList
									onChange={handleOnSelect}
									name="question_06"
									legend="۶- آیا ایراداتی که توسط شما مطرح گردید به طور کامل رفع گردید؟"
									data={[
										{ value: "--" },
										{ value: "خیر" },
										{ value: "بلی" },
									]}
								/>

								<CehckBoxes
									onChange={handleOnChange}
									name="question_07"
									legend="۷- علت عدم رفع ایرادات چه بود؟"
									data={[
										{ value: "نبود قطعات یدکی مورد نیاز" },
										{ value: "کیفیت پایین قطعات یدکی" },
										{ value: "عدم تشخیص عیب" },
										{ value: "کیفیت نامناسب تعمیرات" },
										{ value: "سایر موارد" },
									]}
								/>

								<DropdownList
									onChange={handleOnSelect}
									name="question_08"
									legend="۸- سهولت در برقراری تماس و دسترسی به شرکت، تا چه حد از خصوصیت های مطرح شده زیر رضایت دارید:"
									data={dropdownData}
								/>

								<DropdownList
									onChange={handleOnSelect}
									name="question_09"
									legend="۹- فاصله زمان درخواست تعمیر/ نصب تا مراجعه نماینده"
									data={dropdownData}
								/>

								<DropdownList
									onChange={handleOnSelect}
									name="question_10"
									legend="۱۰- مراجعه به موقع"
									data={dropdownData}
								/>

								<DropdownList
									onChange={handleOnSelect}
									name="question_11"
									legend="۱۱- نحوه برخورد نماینده"
									data={dropdownData}
								/>

								<DropdownList
									onChange={handleOnSelect}
									name="question_12"
									legend="۱۲- آراستگی ظاهری نماینده"
									data={dropdownData}
								/>

								<DropdownList
									onChange={handleOnSelect}
									name="question_13"
									legend="۱۳- رعایت نظافت پس از تعمیر/ نصب توسط نماینده"
									data={dropdownData}
								/>

								<DropdownList
									onChange={handleOnSelect}
									name="question_14"
									legend="۱۴- راهنمایی ها و آموزش های لازم در خصوص نحوه استفاده از محصول توسط نماینده"
									data={dropdownData}
								/>

								<DropdownList
									onChange={handleOnSelect}
									name="question_15"
									legend="۱۵- نحوه پاسخگویی به سوالات"
									data={dropdownData}
								/>

								<DropdownList
									onChange={handleOnSelect}
									name="question_16"
									legend="۱۶- کیفیت کلی خدمات دریافتی"
									data={dropdownData}
								/>

								<DropdownList
									onChange={handleOnSelect}
									name="question_17"
									legend="۱۷- کامل بودن ابزار آلات و تجهیزات مورد نیاز"
									data={dropdownData}
								/>

								<DropdownList
									onChange={handleOnSelect}
									name="question_18"
									legend="۱۸- سرعت عمل در تعمیر/ نصب"
									data={dropdownData}
								/>

								<DropdownList
									onChange={handleOnSelect}
									name="question_19"
									legend="۱۹- به طور کلی چه میزان از خدمات پس از فروش ارائه شده رضایت دارید؟"
									data={dropdownData}
								/>

								<DropdownList
									onChange={handleOnSelect}
									name="question_20"
									legend="۲۰- آیا تاکنون در خصوص نحوه ارائه خدمات پس از فروش شکایتی به شرکت مطرح کرده اید؟ (در خصوص مشتریان ناراضی)"
									data={[
										{ value: "--" },
										{ value: "خیر" },
										{ value: "بلی" },
									]}
								/>

								<DropdownList
									onChange={handleOnSelect}
									name="question_21"
									legend="۲۱- نحوه رسیدگی و پیگیری شکایات نهایتاً منجر به رضایت شما گردید؟"
									data={[
										{ value: "--" },
										{ value: "خیر" },
										{ value: "بلی" },
									]}
								/>

								<TextArea
									onChange={handleOnTextArea}
									name="question_22"
									legend="۲۲- پیشنهادات و انتقادات خود را با ما درمیانبگذارید:"
									rows={5}
									data={formInfo}
								/>

								<p className="text-reg lg:text-lg my-4">
									مشخصات مشتری
								</p>
								<hr color="red" />

								<div className="w-full" id='customerName'>
									<InputText
										onChange={handleOnChange}
										name="question_26"
										legend="نام و نام خانوادگی (الزامی) *"
										data={formInfo}
									/>
								</div>

								<DropdownList
									onChange={handleOnSelect}
									name="question_23"
									legend="جنسیت"
									data={[
										{ value: "--" },
										{ value: "مرد" },
										{ value: "زن" },
									]}
								/>

								<DropdownList
									onChange={handleOnSelect}
									name="question_24"
									legend="سن"
									data={[
										{ value: "--" },
										{ value: "زیر 20 سال" },
										{ value: "21 - 30" },
										{ value: "31 - 40" },
										{ value: "41 - 50" },
										{ value: "بالای 50 سال" },
									]}
								/>

								<DropdownList
									onChange={handleOnSelect}
									name="question_25"
									legend="میزان تحصیلات"
									data={[
										{ value: "--" },
										{ value: "زیر دیپلم" },
										{ value: "دیپلم" },
										{ value: "فوق دیپلم" },
										{ value: "لیسانس" },
										{ value: "فوق لیسانس و بالاتر" },
									]}
								/>

								<InputText
									onChange={handleOnChange}
									name="question_27"
									legend="تلفن ثابت"
									data={formInfo}
								/>
								<InputText
									onChange={handleOnChange}
									name="question_28"
									legend="موبایل"
									data={formInfo}
								/>

								<TextArea
									onChange={handleOnTextArea}
									name="question_29"
									legend="آدرس:"
									rows={3}
									data={formInfo}
								/>

								<InputText
									onChange={handleOnChange}
									name="question_30"
									legend="مدل محصول"
									data={formInfo}
								/>

								<InputText
									onChange={handleOnChange}
									name="question_31"
									legend="تاریخ خرید"
									data={formInfo}
								/>

								<CehckBoxes
									onChange={handleOnChange}
									name="question_32"
									legend="وضعیت گارانتی"
									data={[
										{ value: "گارانتی" },
										{ value: "خارج از گارانتی" },
									]}
								/>
								<div className="my-4 md:p-10">
									<button
										onClick={handleOnSubmit}
										className="sm:px-4 sm:py-2 px-[10px] py-[5px] sm:text-reg text-sm bg-teal-500 shadow rounded-md border-[1px] border-teal-300 hover:bg-teal-600 text-white"
									>
										ثبت نظرسنجی
									</button>
								</div>
							</form>
						</section>
					</>
				)}
			</div>
		</div>
	);
};
export default ServiceSurvey;
