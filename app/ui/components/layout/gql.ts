import { gql } from "graphql-request";

export const layoutQuery = gql`
  query getLayout($slug: String!) {
    header(where: { slug: $slug }) {
      links {
        anchor
        label
        slug
      }
      image {
        alt
        url
      }
    }
    footer(where: { slug: $slug }) {
      ownership
      icons {
        link
        label
      }
      links {
        anchor
        label
        slug
      }
    }
  }
`;
