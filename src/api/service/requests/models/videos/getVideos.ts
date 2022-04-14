import { gql } from "graphql-request";
import { IParamsVideoQuery, IVideo } from "./interfaces/IVideo";
import { GraphQL } from "../../../Graphql";
import { generateQueryParams, generateWhereConditions } from "../../helpers/generates";
import { IConditions } from "../../interfaces/Types";

interface IParamsGetVideo {
    paramsQuery: IParamsVideoQuery;
    whereConditions?: IConditions;
}

const getVideos = async ({ paramsQuery, whereConditions }: IParamsGetVideo): Promise<Array<IVideo>> => {
    const query = gql`
        query {
            videos(
                ${generateWhereConditions(whereConditions)}
            ){
                ${generateQueryParams(paramsQuery)}
            }
        }
    `;

    return ((await GraphQL.request(query)).videos);
}

export { getVideos }
