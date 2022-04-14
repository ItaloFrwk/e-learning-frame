import { gql } from "graphql-request";
import { IParamsVideoQuery, IVideo } from "./interfaces/IVideo";
import { GraphQL } from "../../../Graphql";
import { generateQueryParams, generateWhereConditions } from "../../helpers/generates";
import { IWhereUniqueInput } from "../../interfaces/Types";

interface IParamsDeleteVideo {
    paramsQuery: IParamsVideoQuery;
    whereConditions: IWhereUniqueInput;
}   

const deleteVideo = async ({ paramsQuery, whereConditions  }: IParamsDeleteVideo): Promise<Array<IVideo>> => {
    const query = gql`
        mutation {
            deleteVideo(
                where: {
                    ${generateWhereConditions(whereConditions)}
                }
            ){
                ${generateQueryParams({...paramsQuery})}
            }
        }
    `;

    return (await GraphQL.request(query)).deleteVideo;
}

export { deleteVideo }
