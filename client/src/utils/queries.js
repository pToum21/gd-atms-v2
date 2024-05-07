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

// by review id
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

export const QUERY_ALL_USERS = gql`
query Users {
  users {
    _id
    email
    username
    password
    reviews {
      _id
      createdAt
      reviewText
      username
    }
  }
}
 `;

//  gets by user name
export const QUERY_SINGLE_USER = gql`
query User($username: String!) {
  user(username: $username) {
    _id
    email
    password
    reviews {
      _id
      createdAt
      reviewText
      username
    }
    username
  }
}
`;

// query your self
export const QUERY_ME = gql`

`;