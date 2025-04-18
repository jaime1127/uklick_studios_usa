import { gql } from "graphql-request";

export const footerQuery = gql`
	query getFooter($slug: String!) {
		footer(where: { slug: $slug }) {
			slug
			ownership
			icons {
				link
				label
			}
		}
	}
`;