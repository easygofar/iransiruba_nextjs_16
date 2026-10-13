"use client";
import React, { useState } from "react";
import FunctionsTable from "./functionsTable";
import InfoTable from "./infoTable";
import { trainings } from "../data/trainings";
import DisplayVideo from "./display-video";
import TabsItem from "./tabs-item";

const Tabs = ({ machinesObject, machine_id, model_id }) => {
  const [tab, setTab] = useState(1);
  // const [model] = useFetchMachine(machinesObject,machine_id, model_id);
  const [machines, setMachines] = useState(machinesObject);
  // const [model, setModel] = useState([]);

  const machine = machines.filter(
    (ma) => parseInt(ma.id) === parseInt(machine_id)
  )[0];
  const model = machine.models.filter((mo) => mo.id === model_id);

  // if (!model[0]?.id)
  // 	return <div>در حال بارگذاری...</div>;

  const { videos } = trainings.filter((t) => t.title === model[0].title)[0];

  return (
    <nav
      aria-label="Tabs"
      className="w-full bg-white rounded-t-md overflow-hidden mt-8"
    >
      <ul className="flex flex-wrap">
        {model[0]?.technical_specs?.length ? (
          <TabsItem
            title="مشخصات فنی"
            tabNumber={1}
            tab={tab}
            setTab={setTab}
          />
        ) : null}

        {model[0]?.general_specs?.length ? (
          <TabsItem
            title="ویژگی های عمومی"
            tabNumber={2}
            tab={tab}
            setTab={setTab}
          />
        ) : null}

        {model[0]?.application?.length ? (
          <TabsItem title="کاربرد" tabNumber={3} tab={tab} setTab={setTab} />
        ) : null}

        {model[0]?.appearance?.length ? (
          <TabsItem
            title="ویژگی های ظاهری"
            tabNumber={4}
            tab={tab}
            setTab={setTab}
          />
        ) : null}

        {model[0]?.accessories?.length ? (
          <TabsItem
            title="لوازم جانبی"
            tabNumber={5}
            tab={tab}
            setTab={setTab}
          />
        ) : null}

        {model[0]?.services?.length ? (
          <TabsItem title="خدمات" tabNumber={6} tab={tab} setTab={setTab} />
        ) : null}

        <TabsItem title="آموزش‌ها" tabNumber={7} tab={tab} setTab={setTab} />
      </ul>
      <section className={`my-4 md:my-8 w-full min-h-[${model[0].technical_specs.length ? "300px" : "20px"}]`}>
        <div className="bg-slate-200/50 sm:rounded-lg overflow-x-auto shadow-md">
          {tab == 1 ? <InfoTable info={model[0].technical_specs} /> : null}
          {tab == 2 ? <InfoTable info={model[0].general_specs} /> : null}

          {tab == 3 ? <FunctionsTable fns={model[0].application} /> : null}

          {tab == 4 ? <InfoTable info={model[0].appearance} /> : null}

          {tab == 5 ? <InfoTable info={model[0].accessories} /> : null}

          {tab == 6 ? <InfoTable info={model[0].services} /> : null}

          {tab == 7
            ? videos.service?.map((service) => (
              <DisplayVideo
                key={service.poster}
                label={service.label}
                link={service.link}
                poster={service.poster}
              />
            ))
            : null}

          {/* {tab == 1 && !model[0].technical_specs.length && (
						<div className="flex justify-center items-center h-72 w-full">
							اطلاعات این بخش بزودی بارگذاری میشود
						</div>
					)} */}

          {/* {tab == 2 && !model[0].application.length && (
						<div className="flex justify-center items-center h-72 w-full">
							اطلاعات این بخش بزودی بارگذاری میشود
						</div>
					)} */}

          {tab == 7 &&
            !videos.service?.length > 0 &&
            !videos.introduction?.length && (
              <div className="flex justify-center items-center h-72 w-full bg-slate-100">
                فیلم های این بخش بزودی بارگذاری میشود
              </div>
            )}
        </div>
      </section>
    </nav>
  );
};

export default Tabs;
