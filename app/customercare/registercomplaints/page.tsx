"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import CustomerCareImage from "../../components/customer-care-image";
import CehckBoxes from "../../components/form/checkboxes";
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
};

const RegisterComplaints = () => {
	const [formInfo, setFormInfo] = useState(formObject);
	const [emailSent, setEmailSent] = useState(false);
	const handleOnSubmit = async (e: FormEvent) => {
		e.preventDefault();

		let info: any = { ...formInfo };

		// check name and last name not empty
		if (!info["question_01"].length) {
			alert("نام و نام خانوادگی را کامل وارد کنید");
			return;
		}

		if (!info["question_02"].length) {
			alert("ایمیل حود را کامل وارد کنید");
			return;
		}


	    const emailPatterRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		if (!info["question_02"][0].match(emailPatterRegex)) {
			alert("فرمت ایمیل را درست وارد کنید");
			return;
		}

		if (!info["question_03"].length) {
			alert("شماره موبایل حود را کامل وارد کنید");
			return;
		}

	    const mobileNumber = info["question_03"][0]
		if (!mobileNumber.startsWith('09') && mobileNumber.length !== 10 ) {
			alert("  فرمت موبایل را درست وارد کنید \n  فرمت صحیح 09121234567 ");
			return;
		}

		if (!info["question_04"].length) {
			alert("شماره ثابت خود را کامل وارد کنید");
			return;
		}


    try {
			const result: Response = await fetch("https://iransiruba.com/mail4.php", {
				method: "POST",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(info),
			});
			if(result.ok)
				setEmailSent(true)
			else 
				throw Error(JSON.stringify(result))
		} catch (e:any) {
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
		}
		setFormInfo(info);
	};

	const handleOnTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
		let info: any = { ...formInfo };
		if (e.target.value.trim() !== "" && e.target.value.trim() !== "--")
			info[e.target.name] = [e.target.value];
		setFormInfo(info);
	};

	return (
		<div>
			<CustomerCareImage title="ثبت شکایات" />

			<div className="sm:p-4 p-[2px]">
				{emailSent ? (
					<section className="sm:my-4 my-[2px]">
						<h2 className="text-reg font-bold sm:text-reg md:text-xlg my-4">
							ثبت شکایات
						</h2>
						<hr color="red" />
						<div className="relative text-reg h-screen sm:my-4 my-2 sm:mt-8 mt-4 flex flex-col items-center w-full flex-wrap px-2 md:px-0">
							<p className="text-reg lg:text-lg my-4 text-center p-2">
								ثبت شکایت شما انجام شد.
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
								ثبت شکایات
							</h2>
							<div className="relative text-reg sm:my-4 my-2 sm:mt-8 mt-4 flex sm:justify-bwetween sm:items-stretch w-full flex-wrap px-2 md:px-0"></div>
							<p className="text-reg lg:text-lg my-4">
								درصورت بروز هرگونه مشکل می توانید با تکمیل فرم
								زیر ما را در جریان قرار دهید. این اطمینان را به
								شما می دهیم موارد اعلامی شما به دقت ارزیابی شده
								و نتیجه به اطلاع خواهد رسید:
							</p>

							<hr color="red" />
						</section>
						<section>
							<form>
								<InputText
									onChange={handleOnChange}
									name="question_01"
									legend="نام و نام خانوادگی (الزامی) *"
									data={formInfo}
								/>
								<InputText
									onChange={handleOnChange}
									name="question_02"
									legend="ایمیل شما (الزامی) *"
									data={formInfo}
								/>
								<InputText
									onChange={handleOnChange}
									name="question_03"
									legend="موبایل (الزامی) *"
									data={formInfo}
								/>

								<InputText
									onChange={handleOnChange}
									name="question_04"
									legend="تلقن ثابت (الزامی) *"
									data={formInfo}
								/>

								<TextArea
									onChange={handleOnTextArea}
									name="question_05"
									legend="آدرس:"
									rows={3}
									data={formInfo}
								/>

								<p className="text-reg lg:text-lg my-4">
									مشخصات محصول
								</p>
								<hr color="red" />

								<InputText
									onChange={handleOnChange}
									name="question_06"
									legend="مدل محصول"
									data={formInfo}
								/>

								<InputText
									onChange={handleOnChange}
									name="question_07"
									legend="شماره سریال دستگاه"
									data={formInfo}
								/>

								<InputText
									onChange={handleOnChange}
									name="question_08"
									legend="تاریخ دریافت خدمت"
									data={formInfo}
								/>

								<CehckBoxes
									onChange={handleOnChange}
									name="question_09"
									legend="نوع خدمت"
									data={[
										{ value: "نصب" },
										{ value: "تعمیر" },
									]}
								/>

								<TextArea
									onChange={handleOnTextArea}
									name="question_10"
									legend="شرح شکایت:"
									rows={5}
									data={formInfo}
								/>

								<div className="my-4 md:p-10">
									<button
										onClick={handleOnSubmit}
										className="sm:px-4 sm:py-2 px-[10px] py-[5px] sm:text-reg text-sm bg-teal-500 shadow rounded-md border-[1px] border-teal-300 hover:bg-teal-600 text-white"
									>
										ثبت شکایت
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
export default RegisterComplaints;
