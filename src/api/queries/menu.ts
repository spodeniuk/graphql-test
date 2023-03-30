import { gql } from "@apollo/client";

export const FETCH_MENU_QUERY = gql`
  query {
    menuItems {
      data {
        id,
        attributes {
          title,
          url
        }
      }
    }
  }
`;