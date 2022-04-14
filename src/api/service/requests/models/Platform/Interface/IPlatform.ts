import { IDefaultPropsInModel, IDefaultPropsInQuery, IStage } from "../../../interfaces/Types";

interface IPlatform extends IDefaultPropsInModel {
    id: string;
    title: string;
    slug: string;
}

interface IParamsPlatformQuery extends IDefaultPropsInQuery {
    id?: boolean;
    title?: boolean;
    slug?: boolean;
}


export type { IPlatform, IParamsPlatformQuery }