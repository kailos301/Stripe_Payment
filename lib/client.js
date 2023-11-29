import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url/";

export const client = sanityClient({
    projectId: "ysdtpi51",
    dataset: "production",
    apiVersion: "2023-11-10",
    useCdn: true,
    token: "skIIFeWk041HlBJ7mKg77Z5qkUUmdIjYP1OAWQuh2cekCMOsFuZ3mWY2B0mStDGnKQl7XZe1EcsAYXZa4IV2K1Cf4gk3Ri41TGezeMavgqvWwD8glkfC878GIAaiSZsGmLlxzCBchu1ZK7pH6BEnj52ZNSDcCUPgC9SBIPwDKAYVL8Bf667D"
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

