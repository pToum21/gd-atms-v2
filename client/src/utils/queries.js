import { gql } from '@apollo/client';

export const QUERY_ALL_REVIEWS = gql`
query Reviews {
  reviews {
    _id
    createdAt
    reviewText
    username
    status
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
    status
  }
}
`;

export const QUERY_ALL_USERS = gql`
query Users {
  users {
    _id
    email
    username
    role
    reviews {
      _id
      createdAt
      reviewText
      username
      status
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
    role
    reviews {
      _id
      createdAt
      reviewText
      username
      status
    }
    username
  }
}
`;

// query your self
export const QUERY_ME = gql`
query Me {
  me {
    _id
    email
    role
    reviews {
      _id
      createdAt
      reviewText
      username
      status
    }
    username
  }
}
`;

export const QUERY_MY_REVIEWS = gql`
query MyReviews {
  myReviews {
    _id
    createdAt
    reviewText
    status
    username
  }
}
`;