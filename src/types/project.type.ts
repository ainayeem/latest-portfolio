export type TProject = {
  _id: string;
  title: string;
  thumbnail: string;
  description: string;
  projectRole: string;
  technologiesUsed: string[];
  keyFeatures: string[];
  liveLink: string;
  frontendSourceCode: string;
  backendSourceCode?: string;
  apiDocumentation?: string;
  isFeatured?: boolean;
  isDeleted?: boolean;
  createdAt: string;
};
