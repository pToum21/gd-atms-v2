import { gql } from '@apollo/client';

export const QUERY_ALL_REVIEWS = gql`
query Reviews {
  reviews {
    _id
    createdAt
    reviewText
    username
  }
}
`;

export const QUERY_SINGLE_REVIEW = gql`
query Review($id: ID!) {
  review(_id: $id) {
    _id
    createdAt
    reviewText
    username
  }
}
`;