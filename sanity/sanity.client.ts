import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
    projectId: "b9dqvgpd",
    dataset: "blog-posts",
    apiVersion: "2023-09-10",
    useCdn: false,
};

const client = createClient(config);
export default client;







