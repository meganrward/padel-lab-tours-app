/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBooking = /* GraphQL */ `
  mutation CreateBooking(
    $input: CreateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    createBooking(input: $input, condition: $condition) {
      id
      first_name
      last_name
      has_paid
      customerID
      tour_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateBooking = /* GraphQL */ `
  mutation UpdateBooking(
    $input: UpdateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    updateBooking(input: $input, condition: $condition) {
      id
      first_name
      last_name
      has_paid
      customerID
      tour_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteBooking = /* GraphQL */ `
  mutation DeleteBooking(
    $input: DeleteBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    deleteBooking(input: $input, condition: $condition) {
      id
      first_name
      last_name
      has_paid
      customerID
      tour_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
      id
      first_name
      last_name
      email
      mobile_number
      Bookings {
        items {
          id
          first_name
          last_name
          has_paid
          customerID
          tour_id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      subscribed_to_marketing
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
      id
      first_name
      last_name
      email
      mobile_number
      Bookings {
        items {
          id
          first_name
          last_name
          has_paid
          customerID
          tour_id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      subscribed_to_marketing
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
      id
      first_name
      last_name
      email
      mobile_number
      Bookings {
        items {
          id
          first_name
          last_name
          has_paid
          customerID
          tour_id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      subscribed_to_marketing
      createdAt
      updatedAt
      __typename
    }
  }
`;
