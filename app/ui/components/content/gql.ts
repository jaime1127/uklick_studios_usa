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

export const promoQuery = gql`
  query getPromo($slug: String!) {
    promo(where: { slug: $slug }) {
      slug
      heading
      eyebrow
      description
      image {
        alt
        url
      }
    }
  }
`;

export const collectionQuery = gql`
  query getCollection($slug: String!) {
    collection(where: { slug: $slug }) {
      slug
      heading
      sets {
        __typename
        stage
        id
        title
        description
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
