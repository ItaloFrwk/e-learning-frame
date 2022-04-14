import { IUser } from "../models/users/interfaces/IUser";

const StagePublish = "PUBLISHED";
const StageDraft = "DRAFT";

type IStage = typeof StagePublish | typeof StageDraft;

type IVideoOrderByInput = "mimeType_ASC" | "mimeType_DESC" | "size_ASC" | "size_DESC" | "width_ASC" | "width_DESC" | "height_ASC" | "height_DESC" | "fileName_ASC" | "fileName_DESC" | "handle_ASC" | "handle_DESC" | "publishedAt_ASC" | "publishedAt_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "createdAt_ASC" | "createdAt_DESC" | "id_ASC"


interface IDocumentInStages {
    stages: IStage
    includeCurrent: boolean
    inheritLocale: boolean
}


interface IDefaultPropsInModel {
    stage: IStage;
    documentInStages: IDocumentInStages;
    publishedAt: string;
    updatedAt: string;
    createdAt: string;
    publishedBy: IUser;
    updatedBy: IUser;
    createdBy: IUser;
}

interface IDefaultPropsInQuery {
    stage?: boolean;
    documentInStages?: boolean;
    publishedAt?: boolean;
    updatedAt?: boolean;
    createdAt?: boolean;
    publishedBy?: boolean;
    updatedBy?: boolean;
    createdBy?: boolean;
}

interface IDefaultPropsInModalOption {
    stage?: IStage;
    documentInStages?: IDocumentInStages;
    publishedAt?: string;
    updatedAt?: string;
    createdAt?: string;
    publishedBy?: IUser;
    updatedBy?: IUser;
    createdBy?: IUser;
}


interface IConditions {
    [key: string]: any;
    where?: string;
    orderBy?: IVideoOrderByInput;
    skip?: number;
    after?: string;
    before?: string;
    first?: number;
    last?: number;
    stage?: IDocumentInStages;
}


interface IWhereUniqueInput {
    id: string;
    slug?: string
}

export type { IDocumentInStages, IVideoOrderByInput, IStage, IDefaultPropsInModel, IDefaultPropsInQuery, IDefaultPropsInModalOption, IConditions, IWhereUniqueInput }