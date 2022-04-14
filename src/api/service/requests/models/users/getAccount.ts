import { gql } from "graphql-request";
import { GraphQL } from "../../../Graphql";
import { generateQueryParams } from "../../helpers/generates";
import { IAccountQueryParams, IUser } from "./interfaces/IUser";

interface IParamsAccout {
    token: string; 
    QueryParams: IAccountQueryParams;
}

const getAccount = async ({ token, QueryParams  }: IParamsAccout): Promise<IUser> => {
    const query = gql`
        query {
            accounts (
                where: {
                    token: "${token}"
                }
            ){
                ${generateQueryParams(QueryParams)}
            }
        }
    `;

    return await (await GraphQL.request(query)).accounts;
}

export { getAccount }
