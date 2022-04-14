import { IDefaultPropsInModel, IDefaultPropsInQuery, IStage } from "../../../interfaces/Types";
import { IDocumentInStages } from "../../videos/interfaces/IVideo";

const kindMember = "MEMBER"
const kindPat = "PAT"
const kindPublic = "PUBLIC"
const kindWebHook = "WEBHOOK"

type IKind = typeof kindMember | typeof kindPat | typeof kindPublic | typeof kindWebHook; 

interface IUser {
    stage: IStage;
    documentInStages: IDocumentInStages;
    isActive: boolean;
    picture: string;
    name: string;
    publishedAt: string;
    updatedAt: string;
    createdAt: string;
    id: string;
    kind: IKind
}


interface IAccount extends IDefaultPropsInModel {
    id: string;
    username: string;
    token: string;
    avatar: any;
    platform: any;
}

interface IAccountQueryParams extends IDefaultPropsInQuery {
    id?: boolean;
    username?: boolean;
    token?: boolean;
    avatar?: boolean;
    platform?: boolean;
}


export type { IUser, IAccount, IAccountQueryParams }