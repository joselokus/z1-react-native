import { gql } from 'graphql-tag';

export const FETCH_ITEMS = gql`
 query getItemsData { 
    items {
      id
      title
      image
      author
      category {
        id
        title
      }
      content
    }
  }
  `;
