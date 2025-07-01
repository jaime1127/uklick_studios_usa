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

export const heroFields = gql`
  fragment heroFields on Hero {
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
`;

export const carouselQuery = gql`
  query getCarousel($slug: String!) {
    carousel(where: { slug: $slug }) {
      heading
      link {
        anchor
        label
      }
      description
      slides {
        slug
        image {
          alt
          url
        }
      }
    }
  }
`;

export const carouselFields = gql`
  fragment carouselFields on Carousel {
    heading
    link {
      anchor
      label
    }
    description
    slides {
      slug
      image {
        alt
        url
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

export const promoFields = gql`
  fragment promoFields on Promo {
    slug
    heading
    eyebrow
    description
    image {
      alt
      url
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

export const collectionFields = gql`
  fragment collectionFields on Collection {
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
`;

export const portfolioQuery = gql`
  ${collectionFields}
  query getPortfolio($slug: String!) {
    portfolio(where: { slug: $slug }) {
      heading
      description
      collection {
        ...collectionFields
      }
    }
  }
`;

export const imageListQuery = gql`
  query getImageList($slug: String!) {
    imageList(where: { slug: $slug }) {
      slug
      title
      set(first: 50) {
        slug
        image {
          alt
          fileName
          mimeType
          url
          width
          height
          handle
        }
      }
    }
  }
`;

export const contentPageQuery = gql`
  ${heroFields}
  ${carouselFields}
  ${promoFields}
  ${collectionFields}
  query getContentPage($slug: String!) {
    contentPage(where: { slug: $slug }) {
      slug
      content {
        raw
      }
      hero {
        ...heroFields
      }
      carousel {
        ...carouselFields
      }
      promo {
        ...promoFields
      }
      collection {
        ...collectionFields
      }
    }
  }
`;
