import { gql } from "graphql-request";
import { GraphQL } from "../../../Graphql";
import { generateQueryParams, generateWhereConditions } from "../../helpers/generates";
import { IWhereUniqueInput } from "../../interfaces/Types";
import { IParamsPlatformQuery, IPlatform } from "./Interface/IPlatform";

interface IParamsDeletePlatform {
    paramsQuery: IParamsPlatformQuery;
    whereConditions: IWhereUniqueInput;
}   

const deleteVideo = async ({ paramsQuery, whereConditions  }: IParamsDeletePlatform): Promise<Array<IPlatform>> => {
    const query = gql`
        mutation {
            deletePlatform(
                where: {
                    ${generateWhereConditions(whereConditions)}
                }
            ){
                ${generateQueryParams({...paramsQuery})}
            }
        }
    `;

    return  (await GraphQL.request(query)).deletePlatform;
}

export { deleteVideo }
