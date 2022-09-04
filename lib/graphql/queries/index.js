import { gql } from '@apollo/client';

const GLOBAL = gql`
  query {
    global {
      id
      siteName
      favicon {
        id
        name
        url
      }
      defaultSeo {
        id
        metaTitle
        metaDescription
        shareImage {
          id
          name
          url
          caption
          width
          height
          hash
        }
      }
    }
  }
`;

export { GLOBAL };
