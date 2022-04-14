import { gql } from "graphql-request";
import { GraphQL } from "../../../Graphql";
import { generateWhereConditions } from "../../helpers/generates";
import { ICategorie, IParamsCategorieQuery } from "./interfaces/ICategorie";

interface IParamsCreateCategorie {
    name: string;   
}

const getCategories = async ({ name }: IParamsCreateCategorie, paramsQuery: IParamsCategorieQuery): Promise<ICategorie> => {
    const query = gql`
        mutation {
            createCategorie(
                data: {
                    name: "${name}"
                }
            ) {
                ${generateWhereConditions(paramsQuery)}
            }
        }
    `;

    return ((await GraphQL.request(query)).categories);
}

export { getCategories }
