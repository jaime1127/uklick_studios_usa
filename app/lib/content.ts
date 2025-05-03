import request from "graphql-request";
import {
  GetCarouselQuery,
  GetHeroQuery,
  GetPromoQuery,
} from "@/app/ui/content/lib/generated/gql/types";
import { carouselQuery, heroQuery, promoQuery } from "@/app/ui/content/lib/gql";

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
    console.error("Error fetching hero data:", error);
    throw error;
  }
};

export const fetchCarouselData = async (values: string) => {
  try {
    const response = await request(HYGRAPH_API_ENDPOINT, carouselQuery, <
      GetCarouselQuery
    >{
      slug: values,
    });
    return response;
  } catch (error) {
    console.error("Error fetching image data:", error);
    throw error;
  }
};

export const fetchPromoData = async (values: string) => {
  try {
    const response = await request(HYGRAPH_API_ENDPOINT, promoQuery, <
      GetPromoQuery
    >{
      slug: values,
    });
    return response;
  } catch (error) {
    console.error("Error fetching promo data:", error);
    throw error;
  }
};
