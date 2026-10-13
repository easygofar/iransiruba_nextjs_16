/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import useNextBlurhash from "use-next-blurhash";

const Slider = (): any | null | undefined => {
  const [blurDataUrl] = useNextBlurhash("LEHV6nWB2yk8pyo0adR*.7kCMdnj");
  return (
    <div className="w-full aspect-16/5">
      <Image
        src="/images/KAULIN.MFG.CO.LTD.jpg"
        alt=" شرکت سیروبا"
        fill={true}
        className="w-full"
        placeholder="blur"
        blurDataURL={blurDataUrl}
      />
    </div>
  );
};
export default Slider;
