import { ApolloClient, InMemoryCache } from "@apollo/client";
import { menu } from './services';

const client = new ApolloClient({
    uri: /* process.env.REACT_APP_GRAPHQL_URL */"https://test-task.entireframework.com/cms/graphql",
    cache: new InMemoryCache()
});

const api = {
    client,
    services: {
        menu
    }
}

export default api;