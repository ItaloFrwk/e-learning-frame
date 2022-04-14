import { GraphQLClient } from 'graphql-request';
    
const GraphQL = new GraphQLClient(process.env.REACT_APP_URL_GRAPHQL!, {
    headers: {
        authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
    }
});


export { GraphQL }