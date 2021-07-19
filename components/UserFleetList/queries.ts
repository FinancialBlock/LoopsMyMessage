export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        name
        imageUri
        fleets {
          nextToken
          items {
            id
            type
            text
            imageUri
            userID
            createdAt
            updatedAt
          }
        }
      }
      nextToken
    }
  }
`;
