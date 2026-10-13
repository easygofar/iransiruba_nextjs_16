import { Metadata } from "next";
import { notFound } from "next/navigation";

import DetailImageDisplay from "../../../components/detail-image-display";
import DownloadResources from "../../../components/downloadResources";
import { getCategory } from "../../../../utils/functions";
import Pathname from "../../../components/pathname";
import SideList from "../../../components/sideList";
import { trainings } from "../../../data/trainings";
import Tabs from "../../../components/tabs";
import { getData, getProductJsonLd } from "../../../../lib";
import { IfModelType } from "../../../../utils/types";
import Link from "next/link";

function truncate(str: string, n: number) {
  return str.length > n ? str.slice(0, n - 1) + "&hellip;" : str;
}

interface Props {
  params: { category: string; title: string };
}

export const generateMetadata = async ({
  params,
}: { params: Promise<{ category: string; title: string }> }): Promise<Metadata> => {
  const { category, title } = await params;
  //backend db call
  // const { data } = await getData();
  // const machines: IfMachineType[] = convertToJson(data);

  const machines = getData();

  const machine = machines.filter((m) => getCategory(m.category) === category);

  // if (!machine.length) {
  //   return {
  //     title: "no machine found",
  //   };
  // }

  const model = machine.length
    ? machine[0]?.models.filter(
      (model: IfModelType) => model.title === title
    )[0]
    : { sub_category: "", description: "", title: "", image: "", detail: "" };
  const training = trainings.filter((t) => t.title === model?.title)[0];
  const isTeaser = training ? training.videos.teaser.length : false;
  const sub_category = model.sub_category;
  const description =
    model.description.length < 130
      ? model.description
      : truncate(model.description, 130);
  const dynamicTitle = machine[0]?.category === "" ? ` چرخ خیاطی صنعتی` : ` دستگاه ` + `${sub_category}  مدل ${title} سیروبا`
  // ` چرخ خیاطی ${sub_category} صنعتی مدل ${title} سیروبا`;
  const url = `/products/${getCategory(
    machine.length ? machine[0].category : ""
  )}/${model.title}/`;



  return {
    title: dynamicTitle,
    description,
    metadataBase: new URL("https://iransiruba.com/"),
    alternates: {
      canonical: url,
    },

    openGraph: {
      title: `${dynamicTitle}`,
      description,
      type: "website",

      url: "https://iransiruba.com" + url,
      siteName: "شرکت ایران سیروبا | Iran SiRUBA",
      locale: "fa_IR",
      images: [
        {
          url: `https://iransiruba.com/images/siruba-swing-machines/webp_${model.image.split(".")[0]
            }_og.jpg`,
          width: 1200,
          height: 630,
          alt: `${dynamicTitle}`,
        },
      ],
    },
  };
};

export async function generateStaticParams() {
  // const { data } = await getData();
  // const machines = convertToJson(data);

  const machines = getData();

  return machines.flatMap((machine) => {
    return machine.models.map((model: IfModelType) => {
      // console.log("Cat: products/",getCategory(machine.category),"/",model.title);
      return {
        category: getCategory(machine.category) || "/",
        title: model.title,
      };
    });
  });
}

const ModelTitle = async ({
  params,
}: {
  params: Promise<{ category: string; title: string }>;
}) => {
  const { category, title } = await params;
  // const { data } = await getData();
  // const machines = convertToJson(data);

  const machines = getData();

  const machine = machines.find(
    (machine) => getCategory(machine.category) === category
  );

  if (!machine) {
    console.log("machine", machine);
    notFound();
  }

  const model: IfModelType | undefined = machine.models.find(
    (m: IfModelType) => m.title === title
  );
  const { category_title, farsi } = machine
  if (!model) {
    console.log("model", model);
    notFound();
  }

  const training = trainings.find((t) => t.title === model?.title);

  // if (!training) {
  //   console.log("training", training);
  //   notFound();
  // }

  const { image, sub_category, description } = model;

  const jsonLd = getProductJsonLd(machine.id, model.id);


  return (
    <>
      <h1 className="w-full p-1 sm:p-3 font-bold text-center bg-[#FA461C] text-sm sm:text-lg lg:text-xlg text-white rounded-md">
        {category_title === "" ? ` چرخ خیاطی صنعتی ` : ` دستگاه `} {sub_category} سیروبا
      </h1>
      <Pathname machines={machines} />
      <section className="flex md:flex-row flex-col my-2 w-full">
        <section className="hidden lg:block md:w-2/5 lg:w-1/4 pb-2 md:mx-0 px-2 sm:px-4 sm:m-1 mb-2">
          <div>
            <SideList machines={machines} />

            <div>
              <DownloadResources category={category} model={title} />
            </div>
          </div>
        </section>
        <section className="w-full aspect-video px-2 flex flex-col justify-start items-center">
          {training ? (
            <DetailImageDisplay
              image={image}
              title={title}
              isTeaser={training.videos.teaser.length > 0}
              model={model}
              subCategory={sub_category}
            />
          ) : (
            ""
          )}

          <article className="my-2">
            <h2 className="text-reg font-bold sm:text-reg md:text-xlg my-4">
              {`${sub_category} ${title}`}
            </h2>
            <p
              className="text-reg lg:text-lg my-4 select-none"
              dangerouslySetInnerHTML={{ __html: description }}
              suppressHydrationWarning
            />
          </article>

          <Tabs
            machinesObject={machines}
            model_id={model.id}
            machine_id={machine.id}
          />
        </section>
      </section>
      {/* <div className="p-10 my-20 w-[90%] border rounded-lg border-gray-300 mx-auto">

        <SliderRelatedProducts models={machine.models} />
      </div> */}
      {machine.models.length > 1 && <><section className="mb-5"><h3 className="mt-20 p-6 text-blue-900 bg-slate-200 w-[98%] rounded-t-lg m-auto font-bold text-center">چرخ خیاطی‌های صنعتی {machine.farsi} سیروبا</h3><div className={`p-10 w-[98%] text-gray-800 flex justify-center flex-wrap gap-4 border-[1px] border-t-0 rounded-b-lg border-gray-200 shadow-lg mx-auto`}>

        {machine.models.map(model => {
          return <div className="w-[250px]" key={model.title}>
            <Link href={`/products/${getCategory(category)}/${title}`} key={model.sub_category} className="px-4 py-2 rounded-lg flex flex-col items-center justify-between border-[1px] border-gray-300 cursor-pointer"><img src={`/images/siruba-swing-machines/webp_${model.image.split(".")[0]
              }.webp`}
              alt={`چرخ صنعتی ${model.sub_category} سیروبا`} className="w-40" /><span className="text-center text-sm">{model.title}<br />{model.sub_category}</span></Link>
          </div>
        })}
      </div></section></>}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
};

export default ModelTitle;
