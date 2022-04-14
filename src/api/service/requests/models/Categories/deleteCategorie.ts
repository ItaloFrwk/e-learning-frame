import { gql } from "graphql-request";
import { GraphQL } from "../../../Graphql";
import { generateQueryParams, generateWhereConditions } from "../../helpers/generates";
import { IWhereUniqueInput } from "../../interfaces/Types";
import { ICategorie, IParamsCategorieQuery } from "./interfaces/ICategorie";

interface IParamsDeleteCategorie {
    paramsQuery: IParamsCategorieQuery;
    whereConditions: IWhereUniqueInput;
}   

const deleteCategorie = async ({ paramsQuery, whereConditions  }: IParamsDeleteCategorie): Promise<ICategorie> => {
    const query = gql`
        mutation {
            deleteCategorie(
                where: {
                    ${generateWhereConditions(whereConditions)}
                }
            ){
                ${generateQueryParams({...paramsQuery})}
            }
        }
    `;

    return (await GraphQL.request(query)).deleteCategorie;
}

export { deleteCategorie }
