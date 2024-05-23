import { gql } from '@apollo/client';

// creates a user, returns token and relevant user info (eg: leave out keptBooks because when creating a new user, they will not have keptBooks, so we don't need to show field we know will be empty)
export const CREATE_USER = gql`
mutation CreateUser($username: String!, $email: String!, $password: String!) {
  createUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      email
      username
    }
  }
}
`;

export const LOGIN = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      email 
      username
    }
  }
}
`;

export const ADD_REVIEW = gql`
mutation AddReview($reviewText: String!) {
  addReview(reviewText: $reviewText) {
    _id
    createdAt
    reviewText
    username
    status
  }
}
`;

export const REMOVE_REVIEW = gql`
mutation RemoveReview($id: ID!) {
  removeReview(_id: $id) {
    _id
    createdAt
    reviewText
    username
  }
}
`;

export const UPDATE_REVIEW = gql`
mutation UpdateReview($id: ID!, $reviewText: String!) {
  updateReview(_id: $id, reviewText: $reviewText) {
    _id
    createdAt
    reviewText
    username
    status
  }
}
`;



// ADMIN MUTATIONS
export const DELETE_USER = gql`
mutation DeleteUser($id: ID!) {
  deleteUser(_id: $id) {
    _id
    email
    username
  }
} 
`;

export const UPDATE_REVIEW_STATUS = gql`
mutation UpdateReviewStatus($id: ID!, $status: String!) {
  updateReviewStatus(_id: $id, status: $status) {
    _id
    createdAt
    reviewText
    status
    username
  }
}
`;
