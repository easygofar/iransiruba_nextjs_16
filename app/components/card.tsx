"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import useNextBlurhash from "use-next-blurhash";
import numberIcons, {
  SewingMachineIcon,
  getCategory,
  getMachineInfo,
} from "../../utils/functions";
import { IfMachineType } from "../../utils/types";

interface Props {
  machines: IfMachineType[];
  id: string;
}

const Card = ({ machines, id }: Props) => {
  const [blurDataUrl] = useNextBlurhash("LEHV6nWB2yk8pyo0adR*.7kCMdnj");

  const machineInfo = getMachineInfo(machines, id);

  if (machineInfo === undefined) return null;

  const NumberIcon = numberIcons[machineInfo.models.length];

  return (
    <div className="group bg-white m-2.5 sm:my-4 rounded-[5px] overflow-hidden z-100 hover:ring-slate-300/50 hover:ring-1 hover:ring-offset-4 hover:border-slate-300 hover:cursor-pointer hover:shadow hover:outline-stone-900 flex flex-col p-1 border-2 border-slate-200">
      <Link href={`/products/${getCategory(machineInfo.category) || ""}`} className="flex flex-col items-between justify-between">
        <section className="relative sm:w-50 sm:h-62.5 w-45 h-45 overflow-hidden m-auto">
          <Image
            src={`/images/siruba-swing-machines/webp_tn_${machineInfo.main_image.split(".")[0]
              }.webp`}
            fill={true}
            alt={`صنعتی سیروبا ${machineInfo.farsi} چرخ `}
            className="object-contain w-full aspect-square group-hover:scale-105 overflow-hidden duration-300 ease-in-out"
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL={blurDataUrl}
          />
        </section>
        <section className="flex justify-center shadow items-center rounded-[5px] w-full mt-1 text-white sm:py-2 p-1 bg-[#ed461d] hover:bg-red-700">
          <div className="w-full mx-2 ">
            <h3 className="text-center font-bold w-full text-sm  group-hover:text-yellow-200 select-none">
              {machineInfo.farsi}
              {/* <span className="relative group-hover:icon-yellow flex items-center">
                <SewingMachineIcon
                  className="icon-white group-hover:icon-yellow sm:w-[20px] w-[14px]"
                  size={18}
                />
                <NumberIcon
                  size={15}
                  className="icon-white group-hover:icon-yellow sm:w-[15px] w-[12px]"
                  id="svg-number"
                />
              </span> */}
            </h3>
          </div>
        </section>
      </Link>
    </div>
  );
};

export default Card;
