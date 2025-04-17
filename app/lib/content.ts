import request from "graphql-request";
import type { GetHeroQuery } from "../ui/content/lib/generated/gql/types";
import { heroQuery } from "../ui/content/lib/gql";

const HYGRAPH_API_ENDPOINT =
  process.env.HYGRAPH_API_ENDPOINT || "https://default-endpoint.com";

export const fetchHeroData = async (values: string) => {
  try {
    const response = await request(HYGRAPH_API_ENDPOINT, heroQuery, <
      GetHeroQuery
    >{
      slug: values,
    });
    return response;
  } catch (error) {
    console.error("Error fetching image data:", error);
    throw error;
  }
};
