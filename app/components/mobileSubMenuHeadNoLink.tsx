import { More } from "./menu/signs";

interface Props {
  farsi: string;
  handleProductMouseOver: (e: any) => void;
}

function MobileSubMenuHeadNoLink({ farsi, handleProductMouseOver }: Props) {
  return (
    <span
      className="flex items-center h-full grow hover:transition-all duration-300"
      onClick={(e) => {
        handleProductMouseOver(e);
      }}
    >
      <span>{farsi}</span>
      <span className="icon more md:hidden block mx-1 w-2 h-2 left-[10px] absolute pointer-events-none">
        <More />
      </span>
    </span>
  );
}

export default MobileSubMenuHeadNoLink;
