import { gql } from "graphql-request";

export const heroQuery = gql`
  query getHero($slug: String!) {
    hero(where: { slug: $slug }) {
      id
      slug
      blog
      heading
      description
      link {
        __typename
        id
        slug
        anchor
        label
      }
      asset {
        id
        fileName
        size
        mimeType
        url
        width
        height
        handle
        alt
        __typename
      }
      videoAsset {
        asset {
          alt
          size
          url
          handle
        }
      }
    }
  }
`;

export const carouselQuery = gql`
  query getCarousel($slug: String!) {
    carousel(where: { slug: $slug }) {
      id
      slides {
        slug
        image {
          id
          alt
          fileName
          size
          mimeType
          url
          width
          height
          handle
          __typename
        }
      }
    }
  }
`;
