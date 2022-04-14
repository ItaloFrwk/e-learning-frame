import { gql } from "graphql-request";
import { GraphQL } from "../../../Graphql";
import { generateQueryParams, generateWhereConditions } from "../../helpers/generates";
import { IConditions } from "../../interfaces/Types";
import { ICategorie, IParamsCategorieQuery } from "./interfaces/ICategorie";

interface IParamsGetCategories {
    paramsQuery: IParamsCategorieQuery;
    whereConditions?: IConditions;
}

const getCategories = async ({ paramsQuery, whereConditions }: IParamsGetCategories): Promise<Array<ICategorie>> => {
    const query = gql`
        query {
            categories(
                ${generateWhereConditions(whereConditions)}
            ){
                ${generateQueryParams(paramsQuery)}
            }
        }
    `;

    return ((await GraphQL.request(query)).categories);
}

export { getCategories }
