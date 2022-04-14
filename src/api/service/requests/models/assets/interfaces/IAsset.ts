import { IDefaultPropsInModel, IDefaultPropsInQuery } from "../../../interfaces/Types";

interface IAssetResponse {
    filename: string;
    mimetype: string;
    size: number;
    width: number;
    height: number;
    url: string;
    id: string;
}
interface IWhereUniqueAssetInput {
    id: string
}

interface IAsset extends IDefaultPropsInModel {
    locale: string;
    localizations: {
        locale: string;
        includeCurrent: boolean
    };
    mimeType: string;    
    size: number;
    width: number;
    height: number;
    fileName: string;
    handle: string;
    id: string;
    url: string;
} 

interface IParamsQueryAsset extends IDefaultPropsInQuery {
    locale?: boolean;
    localizations?: boolean;
    mimeType?: boolean;    
    size?: boolean;
    width?: boolean;
    height?: boolean;
    fileName?: boolean;
    handle?: boolean;
    id?: boolean;
    url?: boolean;
}

export type { IAssetResponse, IWhereUniqueAssetInput, IAsset, IParamsQueryAsset }