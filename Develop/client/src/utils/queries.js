import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      savedBooks
      books {
        bookId
        authors
        title
        description
        image
        link
      }
      
    }
  }
`;

