import { gql } from "graphql-request";
import { GraphQL } from "../../../Graphql";
import { generateData, generateQueryParams, generateWhereConditions } from "../../helpers/generates";
import { IWhereUniqueInput } from "../../interfaces/Types";
import { ICategorie, ICategorieProps, IParamsCategorieQuery } from "./interfaces/ICategorie";

interface IParamsCategories {
    data: ICategorieProps;
    paramsQuery: IParamsCategorieQuery;
    whereConditions: IWhereUniqueInput;
}   

const updateCategorie = async ({ data, paramsQuery, whereConditions }: IParamsCategories): Promise<ICategorie> => {
    const query = gql`
        mutation {
            updateCategorie(
                data: {
                    ${generateData(data)}
                },
                where: {
                    ${generateWhereConditions(whereConditions)}
                }
            ) {
                ${generateQueryParams({...paramsQuery})}
            }
        }
    `;

    return (await GraphQL.request(query)).updateCategorie;
}

export { updateCategorie }
