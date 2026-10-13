// import { machines as data1 } from "../app/data/machines";
import { machines } from "../../iransiriba- production14-2V1A   upgrade site - 02 SwiperJS - color/app/data/backup-machines";
import { IfModelType } from "../utils/types";

export function getData() {
  return machines;
}

//find values between two parentheses (...) in a string
export function menuValue(value: string) {
  const regExp = /\(([^)]+)\)/;
  const matches = regExp.exec(value);

  return matches ? matches[1] : null;
}

export function removeHtmlTagsAndAttributes(input: string) {
  return input.replace(/<[^>]*>/g, '');
}

export function getProductJsonLd(MachineId: string, ModelId: string) {
  const machine = machines.find((item) => item.id === MachineId);
  const model = machine?.models.find((item) => item.id === ModelId) as IfModelType | undefined;
  if (!model) {
    throw new Error(`Model with ID ${ModelId} not found`);
  }

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `چرخ خیاطی صنعتی ${model.sub_category} مدل ${model.title} سیروبا`,
    description: removeHtmlTagsAndAttributes(model.description).slice(0, 150),
    image: `https://iransiruba.com/images/siruba-swing-machines/webp_${model.image}`,
    brand: {
      "@type": "Brand",
      name: "سیروبا",
    },
    category: machine?.farsi,
    offers: {
      "@type": "Offer",
      priceCurrency: "IRR",
      price: "0",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      url: `https://iransiruba.com/products/${machine?.category.toLowerCase()}/${model.title}/`,
      seller: {
        "@type": "Organization",
        "name": "ایران سیروبا"
      },
    },
    "sku": model.title,
    "additionalProperty": model.technical_specs.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.label,
      value: spec.value,
    })),
  };
}

export function getCategoryJsonLd(MachineId: string) {
  const machine = machines.find((item) => item.id === MachineId);

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `چرخ خیاطی های صنعتی  ${machine?.farsi} سیروبا`,
    // description: removeHtmlTagsAndAttributes(model.description).slice(0, 150),
    url: `http://iransiruba.com/products/${machine?.category.toLocaleLowerCase()}/`,
    description: machine?.general_description[0],
    "inLanguage": "fa-IR",
    hasPart: machine?.models.map(model => {
      return {
        "@type": "Product",
        name: `چرخ خیاطی صنعتی ${model.sub_category} ${model.title} سیروبا`,
        url: `https://iransiruba.com/products/${machine.category.toLocaleLowerCase()}/${model.title.toLocaleLowerCase()}/`,
        image: `https://iransiruba.com/images/siruba-swing-machines/${model.image}/`,
        "brand": {
          "@type": "Brand",
          "name": "سیروبا"
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "IRR",
          price: "0",
          itemCondition: "https://schema.org/NewCondition",
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "Organization",
            "name": "ایران سیروبا"
          },

        },

      }

    },

    )
  };
}