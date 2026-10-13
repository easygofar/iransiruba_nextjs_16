/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import useNextBlurhash from "use-next-blurhash";
import ButtonIcon from "./buttonIcon";
import { getCategory } from "../../utils/functions";

interface Props {
  farsi: string;
  title: string;
  detail: string;
  image: string;
  category: string;
  sub_category: string;
}

const ModelCard = ({
  farsi,
  title,
  detail,
  image,
  category,
  sub_category,
}: Props) => {
  const [blurDataUrl] = useNextBlurhash("LEHV6nWB2yk8pyo0adR*.7kCMdnj");
  const details = detail + "-" + "چرخ خیاطی صنعتی" + "-" + "سیروبا";
  return (
    <div className="group bg-white border-[#e0e0e0] sm:w-[300px] w-[250px] rounded-[5px] overflow-hidden border-x-[1px] z-100 hover:ring-slate-300/50 hover:ring  hover:ring-offset-4 flex flex-col items-center border-1 sm:mb-8 mb-2 border-y-4 border-y-[#FA461C] p-0">
      <div className="flex justify-center w-full h-auto overflow-hidden">
        <Image
          src={`/images/siruba-swing-machines/webp_tn_${image.split(".")[0]
            }.webp`}
          className="group-hover:scale-105 overflow-hidden w-[250px] h-auto duration-300 ease-in-out"
          width={250}
          height={250}
          priority={true}
          alt={`${title} صنعتی سیروبا مدل  ${farsi} چرخ`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL={blurDataUrl}
        />
      </div>
      <div className="w-full border-t pt-2 border-[#e0e0e0] select-none">
        <h2 className="w-full text-center lg:text-reg font-bold group-hover:font-bold">
          {title}
        </h2>
      </div>
      <div className="w-full pb-2 select-none">
        <h2 className="w-full text-center sm:text-reg text-sm group-hover:font-bold">
          {` چرخ ${sub_category}`}
        </h2>
      </div>

      <div className="w-full pb-2 select-none flex flex-col justify-between grow">
        <div className="w-full text-center sm:text-reg text-sm group-hover:font-bold flex flex-wrap justify-center">
          {details
            ? details.split("-").map((p, index) => (
              <span
                key={p + index}
                className="px-[0.5rem] m-[0.13rem] bg-slate-200 rounded-full"
              >
                {p}
              </span>
            ))
            : ""}
        </div>
        <div>
          <Link
            href={`/products/${getCategory(category)}/${title}`}
            className="flex justify-center items-center rounded-[5px] w-full p-2"
          >
            <ButtonIcon>{`اطلاعات بیشتر`}</ButtonIcon>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
