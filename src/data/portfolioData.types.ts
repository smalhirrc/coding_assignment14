export interface WorkProject {
  title: string;
  description: string;
  imageUrl: string;
  projectLink: string;
  technologies: string[];
}

export interface Skills {
  description: string;
  languagesFrameworks: string[];
  tools: string[];
}

export interface Resource {
  title: string;
  image: string;
  summary: string;
  link: string;
}

export interface DeveloperSetup {
  vscodeExtensions: string[];
  terminalSetup: string[];
  preferredEditorFont: string;
}

export interface BasicInformation {
  name: string;
  title: string;
  bio: string;
}

export interface PortfolioData {
  basicInformation: BasicInformation;
  work: WorkProject[];
  skills: Skills;
  resources: Resource[];
  developerSetup: DeveloperSetup;
}
