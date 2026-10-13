"use client";

import { useState } from "react";
import Image from "next/image";
import { IfInfoType } from "../../utils/types";

interface Props {
  info: IfInfoType[];
}

const InfoTable = ({ info }: Props) => {
  const [tableInfo, setTableInfo] = useState<IfInfoType[]>(
    info?.length ? [...info] : []
  );

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm sm:text-reg text-left text-blue-900">
          <tbody>
            {tableInfo.map((item) => {
              let cellValue = <span>{item.value}</span>;
              if (item.value.endsWith(".png") || item.value.endsWith(".jpg"))
                cellValue = (
                  <Image
                    src={`/images/stitches/${item.value}`}
                    alt="طرح دوخت چرخ خیاطی صنعتی سیروبا"
                    width={281}
                    height={133}
                  />
                );
              return (
                <tr
                  key={item.id}
                  className="border-b border-slate-300 hover:bg-slate-200"
                >
                  <td className="w-1/2 px-4 py-2 border-l text-left  broder-slate-300">
                    {item.label}
                  </td>
                  <td className="w-1/2 px-4 py-2 border-l text-right broder-slate-300">
                    {cellValue}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default InfoTable;
