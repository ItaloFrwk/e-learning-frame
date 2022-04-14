
/* eslint-disable */
import { validateSizeFile } from "../models/assets/uploadAsset";

const generateQueryParams = ({ ...rest }: object): string => {
    let stringParams = "";
    for(const key in rest) {
        stringParams += `${key},`;
    }

    return stringParams;
} 

const generateWhereConditions = (whereConditions?: object): string => {
    if(!whereConditions) return "";
    let whereString = "";

    Object.entries(whereConditions).forEach((value: Array<string>) => {
        whereString += `${value[0]}:${value[0] === "where" ? value[1] : `"${value[1]}"`},`;
    });

    return whereString;
}

const generateData = (data?: object) => {
    if(!data) return "";
    let dataString = "";

    Object.entries(data).forEach((value: Array<string>) => {
        dataString += `${value[0]}: "${value[1]}",`;
    });

    return dataString;
}

const generateFormDataFromFile = (file: File): FormData | undefined => {
    if(!validateSizeFile(file)) return undefined;

    const f = new FormData();
    f.append("uploadFile", file);
    return f;
}

export { generateQueryParams, generateWhereConditions, generateData, generateFormDataFromFile }