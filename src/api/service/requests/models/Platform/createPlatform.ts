import { gql } from "graphql-request";
import { v4 as uuid } from 'uuid';
import { GraphQL } from "../../../Graphql";
import { generateQueryParams } from "../../helpers/generates";
import { IParamsPlatformQuery, IPlatform } from "./Interface/IPlatform";

interface ICreatePlatformParams {
    data: {
        title: string,
        connectVideo?: {
            id: string,
        }
    }, 
    paramsQuery: IParamsPlatformQuery
}

const createPlatform = async ({ data: { title, connectVideo }, paramsQuery }: ICreatePlatformParams): Promise<IPlatform | undefined> => {
    
    const query = gql`
        mutation {
            createPlatform(
                data: {
                    title: "${title}",
                    slug: "${uuid()}"
                    ${!connectVideo ? "" : `
                        videoClassReference: {
                            connect: {
                                Video: {
                                    id: ${connectVideo.id}
                                }
                            }
                        }
                    `}
                }
            ) {
                ${generateQueryParams({...paramsQuery})}
            }
        }
    `

    return (await GraphQL.request(query)).createPlatform;
}

export { createPlatform }
