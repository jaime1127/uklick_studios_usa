import { gql } from "graphql-request";

export const heroQuery = gql`
  query getHero($slug: String!) {
    hero(where: { slug: $slug }) {
      blog
      heading
      description
      link {
        anchor
        label
      }
      asset {
        url
        alt
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
        slug
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

export const portfolioQuery = gql`
  query getPortfolio($slug: String!) {
    portfolio(where: { slug: $slug }) {
      collection {
        slug
        heading
        sets {
          slug
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
  }
`;
