import { gql } from "graphql-request";
import { IParamsVideoQuery, IVideo } from "./interfaces/IVideo";
import { GraphQL } from "../../../Graphql";
import { generateFormDataFromFile, generateQueryParams } from "../../helpers/generates";
import { uploadAsset } from "../assets/uploadAsset";

interface ICreateVideoParams {
    title: string;
    description: string;
    seen: boolean;
    slug: string;
    tags: Array<string>;
    mp4File: File;
    thumbnail: File;
    platform: {
        id: string;
        slug: string
    }
}

const createVideo = async ({ description, mp4File, platform, seen, slug, tags, thumbnail, title }: ICreateVideoParams, paramsQuery: IParamsVideoQuery): Promise<Array<IVideo> | undefined> => {
    
    const mp4FormData = generateFormDataFromFile(mp4File);
    let idMP4File = undefined;
    if(typeof mp4FormData !== "undefined") {
        idMP4File = await uploadAsset(mp4FormData);
    }
 
    const thumbFormData = generateFormDataFromFile(thumbnail);
    let IdthumbFile = undefined;
    if(typeof thumbFormData !== "undefined") {
        IdthumbFile = await uploadAsset(thumbFormData);
    }   

    if(!idMP4File?.id || !IdthumbFile?.id) {
        return;
    }
  
    const query = gql`
        mutation {
            createVideo (
                data: {
                    title: "${title}",
                    description: "${description}",
                    seen: "${seen}",
                    slug: "${slug},
                    tags: "${tags}",
                    mp4: {
                        connect: {
                            id: "${idMP4File?.id}"
                        }
                    },
                    thumbnail: {
                        connect: {
                            id: "${IdthumbFile?.id}"
                        }
                    },
                    platform: {
                        connect: {
                            id: "${platform.id}",
                            slug: "${platform.slug}"
                        }
                    }
                }
            ) {
                ${generateQueryParams({...paramsQuery})}
            }
        }
    `;

    return await ((await GraphQL.request(query)).video);
}

export { createVideo }
