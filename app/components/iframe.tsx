import { ImSpinner9 } from "react-icons/im";

interface Props {
  label: string;
  link: string;
  iconSize: number;
  autoPlay: boolean;
}

const Iframe = ({ label, link, iconSize, autoPlay }: Props) => {
  return (
    <>
      <iframe
        src={`https://www.aparat.com/video/video/embed/videohash/${link}/vt/frame?autoplay=${
          autoPlay ? "true" : "false"
        }`}
        allow={autoPlay ? "autoplay" : ""}
        allowFullScreen={true}
        className="relative w-full aspect-video z-10 top-0 left-0"
      >
        <div className="absolute flex items-center justify-center z-1 top-[50%] -translate-y-[50%]">
          <ImSpinner9 size={iconSize} className="animate-spin" />
        </div>
      </iframe>
    </>
  );
};

export default Iframe;
