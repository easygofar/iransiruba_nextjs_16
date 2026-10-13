export interface IfInfoType {
  id: string;
  label: string;
  value: string;
}

export interface IfModelType {
  id: string;
  resource_id: string;
  title: string;
  detail: string;
  full_name: string;
  image: string;
  sub_category: string;
  description: string;
  application: string[];
  general_specs: any[];
  appearance: string[];
  accessories: string[];
  services: string[];
  technical_specs: { id: string; label: string; value: string }[];
  machine_id?: string;
}

export interface IfResourceType {
  id: string;
  title: string;
  downloads: { label: string; link: string }[];
}

export interface IfMachineType {
  id: string;
  farsi: string;
  category: string;
  category_title: string;
  main_image: string;
  brand: string;
  general_description: string[];
  resources: IfResourceType[];
  models: IfModelType[];
  machine_id?: string;
}
