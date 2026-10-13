import "../../node_modules/video-react/dist/video-react.css";

import Iframe from "./iframe";
import Iframex from "./iframex";

interface Props {
  label: string;
  link: string;
  fullpage?: boolean;
}

const DisplayVideo = ({ label, link, fullpage }: Props) => {
  if (fullpage) {
    return (
      <section className="w-full flex flex-col items-center justify-center">
        <div className="relative flex flex-col items-center md:w-[80%] w-[95%] aspect-video bg-white rounded-md border-2   ">
          <Iframe label={label} link={link} iconSize={28} autoPlay={false} />
        </div>
        <p className="sm:text-reg text-sm p-2 text-center w-full">{label}</p>
      </section>
    );
  }

  // return (
  //   <section className="flex flex-col items-center py-4 w-full">
  //     <div className="relative flex flex-col items-center sm:w-5/6 w-[96%] bg-white rounded-md border-2 h-[200px] sm:h-[300px] md:h-[400px]">
  //       <Iframe label={label} link={link} iconSize={28} autoPlay={false} />
  //     </div>
  //     <p className="sm:text-reg text-sm p-4 text-center w-full">{label}</p>
  //   </section>
  // );

  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="relative flex flex-col items-center w-full bg-white rounded-md border-2">
        <Iframex label={label} link={link} iconSize={28} autoPlay={false} />
      </div>
      <p className="sm:text-reg text-sm p-2 text-center w-full">{label}</p>
    </section>
  );
};

export default DisplayVideo;
