import { getData } from "../../lib";
// import { machines } from "../data/machines";
import Card from "./card";
import { IfMachineType } from "../../utils/types";

const ListCategories = async () => {
  // const {data} = await getData();
  // const machines = convertToJson(data)

  const machines: IfMachineType[] = getData();

  return (
    <>
      <h2 className="text-reg font-bold sm:text-reg md:text-xlg my-4 pt-8">
        لیست چرخ خیاطی های صنعتی شرکت سیروبا
      </h2>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 md:my-8 sm:my-4 my-2">
        {machines.map((machine) => {
          return machine.id ? (
            <Card key={machine.id} machines={machines} id={machine.id} />
          ) : null;
        })}
      </section>
    </>
  );
};

export default ListCategories;
