import { gql } from "graphql-request";
import { GraphQL } from "../../../Graphql";
import { generateQueryParams, generateWhereConditions } from "../../helpers/generates";
import { IConditions } from "../../interfaces/Types";
import { IParamsPlatformQuery, IPlatform } from "./Interface/IPlatform";

interface IParamsGetPlatform {
    paramsQuery: IParamsPlatformQuery;
    whereConditions?: IConditions;
}

const getPlatform = async ({ paramsQuery, whereConditions }: IParamsGetPlatform): Promise<Array<IPlatform>> => {
    const query = gql`
        query {
            platforms(
                ${generateWhereConditions(whereConditions)}
            ){
                ${generateQueryParams({...paramsQuery})}
            }
        }
    `;

    return (await GraphQL.request(query)).platforms;
}

export { getPlatform }
