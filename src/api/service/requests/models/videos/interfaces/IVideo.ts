import { IDefaultPropsInModalOption, IDefaultPropsInModel, IDefaultPropsInQuery, IDocumentInStages } from "../../../interfaces/Types";

interface IVideo extends IDefaultPropsInModel{
    id: string;
    title: string;
    description: string;
    teacher: string;
    seen: boolean;
    like: number;
    slug: string;
    viewCount: number;
    tags: Array<string>;
    video:any;
    thumbnail: any;
}

interface IParamsVideoQuery extends IDefaultPropsInQuery {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    teacher?: boolean;
    seen?: boolean;
    like?: boolean;
    slug?: boolean;
    viewCount?: number;
    tags?: boolean;
    video?: boolean;
    thumbnail?: boolean;
}

interface IVideoProps extends IDefaultPropsInModalOption {
    id?: string;
    title?: string;
    description?: string;
    teacher?: string;
    seen?: boolean;
    like?: number;
    slug?: string;
    viewCount?: number;
    tags?: Array<string>;
    video?: {
      connect: {
        id: string;
      } 
    }
    thumbnail?: {
      connect: {
        id: string
      }
    };
}

export type { IVideo, IDocumentInStages, IParamsVideoQuery, IVideoProps }