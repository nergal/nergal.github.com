type Template =
  | "general"
  | "sidebar"
  | "additionally"
  | "overview"
  | "experience";

interface Metadata {
  definitions: Record<string, string>;
  monthes: string[];
}

type DataProps<T extends Object> = {
  header: string | null;
  content: T;
};

interface DataRecord<T extends Object> extends DataProps<T> {
  template: Template | string;
}

type GeneralContent = {
  name: string;
  lastName: string;
};

type OverviewContent = {
  order: number;
  title: string;
  value: string[];
};

type SidebarContent = {
  links: {
    title: string;
    cssClass: string;
    link: string;
    linkUrl: string;
  }[];
};

interface Company {
  company?: string;
  companyType: string;
  companyUrl?: string;
  vendor: string;
  vendorUrl?: string;
  title: string;
}

type ExperienceContent = {
  location: string[];
  startDate: string;
  endDate: string;
  title: string;
  responsibilities: string[];
} & Company;
