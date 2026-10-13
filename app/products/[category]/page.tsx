import { Metadata } from "next";
import _ from "lodash";
// import { machines } from "../../data/machines";
import { getCategory } from "../../../utils/functions";
import { notFound } from "next/navigation";
import ModelCard from "../../components/modelCard";
import SideList from "../../components/sideList";
import DownloadResources from "../../components/downloadResources";
import Pathname from "../../components/pathname";
import { IfMachineType, IfModelType } from "../../../utils/types";
import { getData, getCategoryJsonLd } from "../../../lib";

function truncate(str: string, n: number) {
  return str.length > n ? str.slice(0, n - 1) + "&hellip;" : str;
}

type Props = {
  params: { category: string };
  // searchParams?: { [key: string]: string | string[] | undefined };
};

// Return a list of `params` to populate the [category] dynamic segment
export async function generateStaticParams() {
  // const { data } = await getData();
  // const machines = convertToJson(data);

  const machines = getData();

  return machines.map((m: IfMachineType) => {
    // console.log("generateStaticParams: ", getCategory(m.category));
    return {
      category: getCategory(m.category),
    };
  });
}

// Generate dynamic page title
export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  // const { data } = await getData();
  // const machines = convertToJson(data);

  const machines = getData();

  const { category } = await params;

  // console.log("machine models", machines[0].models[0].title);
  const machine = machines.filter(
    (m: IfMachineType) => getCategory(m.category!) === category
  );

  // if (!machine.length) {
  //   return {
  //     title: "no machine found",
  //   };
  // }

  // console.log("category generateMetadata: ", getCategory(machine[0].category!));
  let desc = "";
  const models = machine.length ? machine[0].models : [];
  desc = models.map((m: IfModelType) => m.detail).join(",");
  desc = desc.length < 100 ? desc : truncate(desc, 100);
  const farsi = machine.length ? machine[0].farsi : "";
  const machineCategory = machine.length ? machine[0].category : "";
  const description = `لیست چرخ خیاطی های صنعتی ${farsi}. تگ های این بخش: ${desc}`;
  const dynamicTitle = ` چرخ خیاطی ${models.length > 1 ? "های" : ""
    } ${farsi} صنعتی سیروبا`;

  const url = `/products/${getCategory(machineCategory)}/`;

  return {
    title: dynamicTitle,
    description,
    openGraph: {
      type: "website",
      title: dynamicTitle,
      description,
      url: "https://iransiruba.com" + url,
      siteName: "شرکت ایران سیروبا | Iran SiRUBA",
      locale: "fa_IR",
      images: [
        {
          url: "https://iransiruba.com/images/siruba-swing-machines/og_image.jpg",
          width: "1200",
          height: "630",
          alt: `چرخ خیاطی صنعتی  ${farsi} سیروبا`,
        },
      ],
    },
    metadataBase: new URL("https://iransiruba.com/"),
    alternates: {
      canonical: url,
    },
  };
}

const ProductCategory = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  // const { data } = await getData();
  // const machines = convertToJson(data);

  const machines = getData();

  const { category } = await params;

  const machine = machines.filter(
    (m: IfMachineType) => getCategory(m.category) === category
  );

  if (!machine.length) {
    notFound();
  }

  const models = [...machine[0].models];
  const categories: string[] = [];
  models.forEach((model) => {
    categories.push(model.sub_category);
  });
  const uniqValueCategories = _.uniq(categories);

  const newList: { title: string; models: IfModelType[] }[] = [];
  uniqValueCategories.forEach((item) => {
    const filtered = models.filter((model) => model.sub_category === item);
    newList.push({ title: item, models: filtered });
  });

  const machineType = machine[0].category_title == "" ? 'چرخ خیاطی های' : 'دستگاه های'
  const jsonLd = getCategoryJsonLd(machine[0].id)

  return (
    <>
      <h1 className="w-full p-1 sm:p-3 font-bold text-center bg-[#FA461C] text-sm sm:text-lg lg:text-xlg text-white rounded-md">{`${machineType} ${machine[0].farsi} سیروبا`}</h1>
      <Pathname machines={machines} />
      <section className="flex sm:flex-row flex-col min-h-screen sm:my-10 my-2 w-full">
        <section className="hidden lg:block w-full lg:w-1/3 pb-1 px-2 sm:px-4 sm:mb-1 mb-2 rounded-lg">
          <div>
            <SideList machines={machines} />
            <div>
              <DownloadResources category={category} />
            </div>
          </div>
        </section>
        <section className="sm:px-4 md:w-full">
          {machine[0].general_description.length ? (
            <section className="sm:mb-8 mb-4">
              <h2 className="font-bold text-sm sm:text-reg pb-4">توضیحات</h2>
              {machine[0].general_description.map(
                (text: string, index: number) => (
                  <p key={index} className="text-sm sm:text-reg pb-4">
                    {text}
                  </p>
                )
              )}
            </section>
          ) : null}
          <div className={`flex flex-wrap justify-around sm:gap-4 gap-2`}>
            {newList.map((item: any, index: number) => {
              const { title, models } = item;
              return (
                <span key={index}>
                  {title ? (
                    <h2
                      key={index}
                      className="block w-full sm:p-2 rounded-lg rounded-b-none font-bold bg-slate-200 text-center text-sm sm:text-reg p-2"
                    >
                      {title}
                    </h2>
                  ) : (
                    ""
                  )}
                  {models.map((model: IfModelType) => {
                    return (
                      <ModelCard
                        farsi={machine[0].farsi}
                        title={model.title}
                        detail={model.detail}
                        image={model.image}
                        category={machine[0].category}
                        sub_category={model.sub_category}
                        key={model.title}
                      />
                    );
                  })}
                </span>
              );
            })}
          </div>
        </section>
        <div className="sm:hidden">
          <DownloadResources category={category} />
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

    </>
  );
};

export default ProductCategory;
