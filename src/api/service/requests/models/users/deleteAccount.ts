import { gql } from "graphql-request";
import { IParamsQuery, IVideo, IWhereUniqueVideoInput } from "./interfaces/IVideo";
import { GraphQL } from "../../../Graphql";
import { generateQueryParams, generateWhereConditions } from "../../helpers/generates";

interface IParamsDeleteVideo {
    paramsQuery: IParamsQuery;
    whereConditions: IWhereUniqueVideoInput;
}   

const deleteVideo = async ({ paramsQuery, whereConditions  }: IParamsDeleteVideo): Promise<Array<IVideo>> => {
    const query = gql`
        mutation {
            deleteVideo(
                where {
                    ${generateWhereConditions(whereConditions)}
                }
            ){
                ${generateQueryParams({...paramsQuery})}
            }
        }
    `;

    return await ((await GraphQL.request(query)).videos);
}

export { deleteVideo }
