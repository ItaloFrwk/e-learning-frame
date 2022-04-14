import { gql } from "graphql-request";
import { IParamsVideoQuery, IVideo, IVideoProps } from "./interfaces/IVideo";
import { GraphQL } from "../../../Graphql";
import { generateData, generateQueryParams, generateWhereConditions } from "../../helpers/generates";
import { IWhereUniqueInput } from "../../interfaces/Types";

interface IParamsUpdateVideos {
    data: IVideoProps;
    paramsQuery: IParamsVideoQuery;
    whereConditions: IWhereUniqueInput;
}   

const updateVideo = async ({ data, paramsQuery, whereConditions  }: IParamsUpdateVideos): Promise<Array<IVideo>> => {
    const query = gql`
        mutation {
            updateVideo(
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

    return (await GraphQL.request(query)).updateVideo;
}

export { updateVideo }
