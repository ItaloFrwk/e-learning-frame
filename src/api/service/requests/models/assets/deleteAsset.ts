import { gql } from "graphql-request";
import { GraphQL } from "../../../Graphql";
import { IAsset } from "./interfaces/IAsset";

 
const deleteAsset = async (id: string): Promise<Array<IAsset>> => {
    const query = gql`
        mutation {
            deleteAsset(
                where: {
                    id: ${id}
                }
            )
        }
    `;

    return await GraphQL.request(query);
}

export { deleteAsset }
