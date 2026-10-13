import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

const EmailIcon = () => (
  <AiOutlineMail className="icon-orange mx-1 p-0" size={15} />
);

const PhoneIcon = () => (
  <AiOutlinePhone className="icon-orange mx-1 p-0 -scale-x-[100%]" size={15} />
);

const TopHeaderInto = () => {
  return (
    <>
      <div className="flex sm:mx-2 mx-[5px] items-center bg-[#000000]">
        <span className="text-sm z-0 mx-1 block text-white">
          info@iransiruba.com
        </span>
        <EmailIcon />
      </div>
      <div className="flex sm:mx-2 mx-[5px] items-center bg-[#000000]">
        <span
          className="text-sm z-0 mx-1 whitespace-nowrap text-white block"
          dir="ltr"
        >
          02168527
        </span>
        <PhoneIcon />
      </div>
    </>
  );
};
export default TopHeaderInto;
