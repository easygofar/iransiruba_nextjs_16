import jwt from "jwt-simple";
import { IconType } from "react-icons/lib";
import { GiSewingMachine } from "react-icons/gi";
import {
  TbNumber0,
  TbNumber1,
  TbNumber2,
  TbNumber3,
  TbNumber4,
  TbNumber5,
  TbNumber6,
  TbNumber7,
  TbNumber8,
  TbNumber9,
} from "react-icons/tb";
import { IfMachineType } from "./types";

const numberIcons: IconType[] = [
  TbNumber0,
  TbNumber1,
  TbNumber2,
  TbNumber3,
  TbNumber4,
  TbNumber5,
  TbNumber6,
  TbNumber7,
  TbNumber8,
  TbNumber9,
];

export const getCategory = (category: string | undefined): string => {
  if (!category) return "category";
  return category
    .toLowerCase()
    .replace("/", "-")
    .replace(" ", "-")
    .split(" ")
    .join("-");
};

export const SewingMachineIcon = GiSewingMachine;

export const getMachineInfo = (machines: IfMachineType[], id: string) => {
  return machines.filter((machine) => machine.id === id)[0] || [];
};

export const getJwt = () => {
  const payload = {
    email: "test@mail.com",
    exp: Date.now() + 3600,
  };
  return jwt.encode(payload, process.env.NEXT_PUBLIC_KEY!, "HS384");
};

export const convertToJson = (data: any[]) => {
  data.forEach((item: any, index: number) => {
    data[index].models = item.models ? JSON.parse(item.models) : [];
    data[index].resources = item.resources ? JSON.parse(item.resources) : [];
    data[index].general_description = item.general_description
      ? JSON.parse(item.general_description)
      : [];
    data[index].application = item.application
      ? JSON.parse(item.application)
      : [];
    data[index].appearance = item.appearance ? JSON.parse(item.appearance) : [];
    data[index].accessories = item.accessories
      ? JSON.parse(item.accessories)
      : [];
    data[index].services = item.services ? JSON.parse(item.services) : [];
  });
  return data;
};

export const fixData = (data: any[]) => {
  data.forEach((item: any, index: number) => {
    data[index].models = item.models ? item.models : [];
    data[index].resources = item.resources ? item.resources : [];
    data[index].general_description = item.general_description
      ? item.general_description
      : [];
    data[index].application = item.application ? item.application : [];
    data[index].appearance = item.appearance ? item.appearance : [];
    data[index].accessories = item.accessories ? item.accessories : [];
    data[index].services = item.services ? item.services : [];
    data[index].downloads = [];
  });
  return data;
};

export default numberIcons;
