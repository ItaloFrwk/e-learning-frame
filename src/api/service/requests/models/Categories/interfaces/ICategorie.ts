import { IDefaultPropsInModalOption, IDefaultPropsInModel, IDefaultPropsInQuery } from "../../../interfaces/Types";

interface ICategorie extends IDefaultPropsInModel {
    id: string;
    name: string;
}

interface IParamsCategorieQuery extends IDefaultPropsInQuery {
    id?: boolean;
    name?: boolean;
}

interface ICategorieProps extends IDefaultPropsInModalOption {
    id?: string;
    name?: string
}


export type { IParamsCategorieQuery, ICategorie, ICategorieProps }