"use client";
import ContentList from "./contentList";
import {IoCalendarSharp} from 'react-icons/io5'

const CalendarIcon = () => <IoCalendarSharp className="icon-white w-[13px] h-[13px] sm:w-[18px] sm:h-[18px]"/>

const RightElement = ({
	children,
	year,
}: {
	children: string;
	year: string;
}) => {
	return (
		<div>
			{/* vertical element */}
			<div className="relative table w-full md:mb-8 mb-4">
				{/* arrow wrapper */}
				<div className="arrow-wrapper absolute sm:w-[40%] w-[70%] rounded-md sm:rounded-lg bg-[#ffffff] z-[50] right-0">
					{/* arrow */}
					<span className="absolute top-[17px] z-[10] rotate-45 bg-[#ffffff] border-l-1 sm:left-[-5px] left-[-3px] sm:h-[15px] sm:w-[15px] h-[12px] w-[12px]"></span>
				</div>
				{/* calendar days icon */}
				<div className="work-con absolute sm:top-0 top-[7px] sm:left-[50%] left-[3px] sm:translate-x-[-50%] sm:w-[49px] sm:h-[49px] w-[32px] h-[32px] rounded-full bg-[#F9461C] flex justify-center items-center ring-[1px] ring-offset-2 ring-offset-blue z-[50]">
					<CalendarIcon />
					{/* year */}
					<span className="absolute text-shadow top-[50%] text-sm sm:text-reg translate-y-[-50%] z-[30]  sm:left-[-60px] left-[38px] font-bold text-reg select-none">
						{year}
					</span>
				</div>

				{/* content */}
				<div className="w-full flex justify-start">
					<section className="relative top-0 sm:w-[40%] w-[70%] rounded-md sm:rounded-lg drop-shadow-lg text-reg leading-6 bg-[#fff] border-[1px] sm:p-4 p-[6px] md:px-8">
						{<ContentList>{children}</ContentList>}
					</section>
				</div>
			</div>
		</div>
	);
}
export default RightElement