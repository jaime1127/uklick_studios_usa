import request from "graphql-request";
import {
  GetCarouselQuery,
  GetHeroQuery,
  GetLayoutQuery,
  GetPromoQuery,
  GetCollectionQuery,
  GetPortfolioQuery,
} from "@/app/ui/components/generated/gql/types";
import {
  carouselQuery,
  collectionQuery,
  heroQuery,
  portfolioQuery,
  promoQuery,
} from "@/app/ui/components/content/gql";
import { layoutQuery } from "../ui/components/layout/gql";

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

export const fetchLayoutData = async (values: string) => {
  try {
    const response = await request(HYGRAPH_API_ENDPOINT, layoutQuery, <
      GetLayoutQuery
    >{
      slug: values,
    });
    return response;
  } catch (error) {
    console.error("Error fetching layout data:", error);
    throw error;
  }
};

export const fetchCollectionData = async (values: string) => {
  try {
    const response = await request(HYGRAPH_API_ENDPOINT, collectionQuery, <
      GetCollectionQuery
    >{
      slug: values,
    });
    return response;
  } catch (error) {
    console.error("Error fetching collection data:", error);
    throw error;
  }
};

export const fetchPortfolioData = async (values: string) => {
  try {
    const response = await request(HYGRAPH_API_ENDPOINT, portfolioQuery, <
      GetPortfolioQuery
    >{
      slug: values,
    });
    return response;
  } catch (error) {
    console.error("Error fetching portfolio data:", error);
    throw error;
  }
};
