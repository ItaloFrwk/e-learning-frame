import { gql } from "graphql-request";
import { GraphQL } from "../../Graphql";

const publishItem = async ( id: string, to: "PUBLISHED" | "DRAFT") => {

    if(id) return;

    const query = gql`
        mutation {
            publishVideo(
                where: {
                    id: "${id}"
                },
                to: ${to}
            )
        } {}
    `;

    await GraphQL.request(query);
}


export { publishItem };