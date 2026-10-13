// import { machines } from "../data/machines";
import { getCategory } from "../../utils/functions";
import { BsFileEarmarkArrowDown } from "react-icons/bs";
import { IfResourceType } from "../../utils/types";
import { getData } from "../../lib";

const FileDownload = () => <BsFileEarmarkArrowDown size={15} className="p-0" />;

interface Props {
  category: string;
  model?: string;
}

const DownloadResources = async ({ category, model }: Props) => {
  const machines = getData();
  // console.log("machines.length", machines.length);
  // const {data} = await getData();
  // const machines = convertToJson(data);

  const machine = machines.find(
    (machine) => getCategory(machine.category) === category
  );

  let resources: IfResourceType[] = [];
  if (model && machine) {
    const machineModel = machine.models.find((m: any) => m.title === model);
    if (machineModel) {
      const resource_id = machineModel.resource_id;
      // console.log("machine.id", machine.id);
      resources = machine.resources.filter((r: any) => r.id === resource_id);
    }
  } else if (machine) {
    resources = machine.resources;
  }

  return (
    <ul className="md:flex md:flex-row md:flex-wrap flex-end">
      {resources.map((resource: IfResourceType) => {
        const { id, title, downloads } = resource;
        return (
          <li
            key={id}
            className="flex flex-col justify-center w-full items-start md:mt-8 sm:mt-0 mt-4 bg-slate-100 drop-shadow"
          >
            <h3 className="font-bold w-full px-2 bg-slate-200 rounded-t-md text-center text-sm sm:text-reg">
              {title}
            </h3>
            <ul className="text-sm sm:pr-8 pr-4 mt-2 w-full sm:text-reg">
              {downloads.map((d) => (
                <li
                  key={d.label}
                  className="flex items-center flex-row hover:text-blue-500 text-sm sm:text-reg"
                >
                  <span className="ml-2  flex h-full w-full items-center p-0">
                    <FileDownload />
                    <a
                      href={d.link}
                      className="h-full w-full mx-2 pt-1"
                      download
                    >
                      {d.label}
                    </a>

                  </span>
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default DownloadResources;
