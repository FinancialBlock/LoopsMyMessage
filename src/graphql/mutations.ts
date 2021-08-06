/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      username
      imageUri
      description
      background
      email
      status
      posts {
        items {
          id
          videoUri
          description
          imageUri
          userID
          songID
          createdAt
          updatedAt
        }
        nextToken
      }
      tweets {
        items {
          id
          content
          imageUri
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      fleets {
        items {
          id
          type
          text
          imageUri
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      username
      imageUri
      description
      background
      email
      status
      posts {
        items {
          id
          videoUri
          description
          imageUri
          userID
          songID
          createdAt
          updatedAt
        }
        nextToken
      }
      tweets {
        items {
          id
          content
          imageUri
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      fleets {
        items {
          id
          type
          text
          imageUri
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      username
      imageUri
      description
      background
      email
      status
      posts {
        items {
          id
          videoUri
          description
          imageUri
          userID
          songID
          createdAt
          updatedAt
        }
        nextToken
      }
      tweets {
        items {
          id
          content
          imageUri
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      fleets {
        items {
          id
          type
          text
          imageUri
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      videoUri
      description
      imageUri
      userID
      user {
        id
        name
        username
        imageUri
        description
        background
        email
        status
        posts {
          nextToken
        }
        tweets {
          nextToken
        }
        chatRoomUser {
          nextToken
        }
        fleets {
          nextToken
        }
        createdAt
        updatedAt
      }
      songID
      song {
        id
        name
        imageUri
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      videoUri
      description
      imageUri
      userID
      user {
        id
        name
        username
        imageUri
        description
        background
        email
        status
        posts {
          nextToken
        }
        tweets {
          nextToken
        }
        chatRoomUser {
          nextToken
        }
        fleets {
          nextToken
        }
        createdAt
        updatedAt
      }
      songID
      song {
        id
        name
        imageUri
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      videoUri
      description
      imageUri
      userID
      user {
        id
        name
        username
        imageUri
        description
        background
        email
        status
        posts {
          nextToken
        }
        tweets {
          nextToken
        }
        chatRoomUser {
          nextToken
        }
        fleets {
          nextToken
        }
        createdAt
        updatedAt
      }
      songID
      song {
        id
        name
        imageUri
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createSong = /* GraphQL */ `
  mutation CreateSong(
    $input: CreateSongInput!
    $condition: ModelSongConditionInput
  ) {
    createSong(input: $input, condition: $condition) {
      id
      name
      imageUri
      createdAt
      updatedAt
    }
  }
`;
export const updateSong = /* GraphQL */ `
  mutation UpdateSong(
    $input: UpdateSongInput!
    $condition: ModelSongConditionInput
  ) {
    updateSong(input: $input, condition: $condition) {
      id
      name
      imageUri
      createdAt
      updatedAt
    }
  }
`;
export const deleteSong = /* GraphQL */ `
  mutation DeleteSong(
    $input: DeleteSongInput!
    $condition: ModelSongConditionInput
  ) {
    deleteSong(input: $input, condition: $condition) {
      id
      name
      imageUri
      createdAt
      updatedAt
    }
  }
`;
export const createChatRoomUser = /* GraphQL */ `
  mutation CreateChatRoomUser(
    $input: CreateChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    createChatRoomUser(input: $input, condition: $condition) {
      id
      userID
      chatRoomID
      user {
        id
        name
        username
        imageUri
        description
        background
        email
        status
        posts {
          nextToken
        }
        tweets {
          nextToken
        }
        chatRoomUser {
          nextToken
        }
        fleets {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateChatRoomUser = /* GraphQL */ `
  mutation UpdateChatRoomUser(
    $input: UpdateChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    updateChatRoomUser(input: $input, condition: $condition) {
      id
      userID
      chatRoomID
      user {
        id
        name
        username
        imageUri
        description
        background
        email
        status
        posts {
          nextToken
        }
        tweets {
          nextToken
        }
        chatRoomUser {
          nextToken
        }
        fleets {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteChatRoomUser = /* GraphQL */ `
  mutation DeleteChatRoomUser(
    $input: DeleteChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    deleteChatRoomUser(input: $input, condition: $condition) {
      id
      userID
      chatRoomID
      user {
        id
        name
        username
        imageUri
        description
        background
        email
        status
        posts {
          nextToken
        }
        tweets {
          nextToken
        }
        chatRoomUser {
          nextToken
        }
        fleets {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
      id
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        createdAt
        content
        userID
        chatRoomID
        user {
          id
          name
          username
          imageUri
          description
          background
          email
          status
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
      id
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        createdAt
        content
        userID
        chatRoomID
        user {
          id
          name
          username
          imageUri
          description
          background
          email
          status
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
      id
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        createdAt
        content
        userID
        chatRoomID
        user {
          id
          name
          username
          imageUri
          description
          background
          email
          status
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      createdAt
      content
      userID
      chatRoomID
      user {
        id
        name
        username
        imageUri
        description
        background
        email
        status
        posts {
          nextToken
        }
        tweets {
          nextToken
        }
        chatRoomUser {
          nextToken
        }
        fleets {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      createdAt
      content
      userID
      chatRoomID
      user {
        id
        name
        username
        imageUri
        description
        background
        email
        status
        posts {
          nextToken
        }
        tweets {
          nextToken
        }
        chatRoomUser {
          nextToken
        }
        fleets {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      createdAt
      content
      userID
      chatRoomID
      user {
        id
        name
        username
        imageUri
        description
        background
        email
        status
        posts {
          nextToken
        }
        tweets {
          nextToken
        }
        chatRoomUser {
          nextToken
        }
        fleets {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const createTweet = /* GraphQL */ `
  mutation CreateTweet(
    $input: CreateTweetInput!
    $condition: ModelTweetConditionInput
  ) {
    createTweet(input: $input, condition: $condition) {
      id
      content
      imageUri
      userID
      user {
        id
        name
        username
        imageUri
        description
        background
        email
        status
        posts {
          nextToken
        }
        tweets {
          nextToken
        }
        chatRoomUser {
          nextToken
        }
        fleets {
          nextToken
        }
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          userID
          tweetID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTweet = /* GraphQL */ `
  mutation UpdateTweet(
    $input: UpdateTweetInput!
    $condition: ModelTweetConditionInput
  ) {
    updateTweet(input: $input, condition: $condition) {
      id
      content
      imageUri
      userID
      user {
        id
        name
        username
        imageUri
        description
        background
        email
        status
        posts {
          nextToken
        }
        tweets {
          nextToken
        }
        chatRoomUser {
          nextToken
        }
        fleets {
          nextToken
        }
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          userID
          tweetID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTweet = /* GraphQL */ `
  mutation DeleteTweet(
    $input: DeleteTweetInput!
    $condition: ModelTweetConditionInput
  ) {
    deleteTweet(input: $input, condition: $condition) {
      id
      content
      imageUri
      userID
      user {
        id
        name
        username
        imageUri
        description
        background
        email
        status
        posts {
          nextToken
        }
        tweets {
          nextToken
        }
        chatRoomUser {
          nextToken
        }
        fleets {
          nextToken
        }
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          userID
          tweetID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createFleet = /* GraphQL */ `
  mutation CreateFleet(
    $input: CreateFleetInput!
    $condition: ModelFleetConditionInput
  ) {
    createFleet(input: $input, condition: $condition) {
      id
      type
      text
      imageUri
      userID
      user {
        id
        name
        username
        imageUri
        description
        background
        email
        status
        posts {
          nextToken
        }
        tweets {
          nextToken
        }
        chatRoomUser {
          nextToken
        }
        fleets {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateFleet = /* GraphQL */ `
  mutation UpdateFleet(
    $input: UpdateFleetInput!
    $condition: ModelFleetConditionInput
  ) {
    updateFleet(input: $input, condition: $condition) {
      id
      type
      text
      imageUri
      userID
      user {
        id
        name
        username
        imageUri
        description
        background
        email
        status
        posts {
          nextToken
        }
        tweets {
          nextToken
        }
        chatRoomUser {
          nextToken
        }
        fleets {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteFleet = /* GraphQL */ `
  mutation DeleteFleet(
    $input: DeleteFleetInput!
    $condition: ModelFleetConditionInput
  ) {
    deleteFleet(input: $input, condition: $condition) {
      id
      type
      text
      imageUri
      userID
      user {
        id
        name
        username
        imageUri
        description
        background
        email
        status
        posts {
          nextToken
        }
        tweets {
          nextToken
        }
        chatRoomUser {
          nextToken
        }
        fleets {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
      id
      userID
      tweetID
      user {
        id
        name
        username
        imageUri
        description
        background
        email
        status
        posts {
          nextToken
        }
        tweets {
          nextToken
        }
        chatRoomUser {
          nextToken
        }
        fleets {
          nextToken
        }
        createdAt
        updatedAt
      }
      tweet {
        id
        content
        imageUri
        userID
        user {
          id
          name
          username
          imageUri
          description
          background
          email
          status
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
      id
      userID
      tweetID
      user {
        id
        name
        username
        imageUri
        description
        background
        email
        status
        posts {
          nextToken
        }
        tweets {
          nextToken
        }
        chatRoomUser {
          nextToken
        }
        fleets {
          nextToken
        }
        createdAt
        updatedAt
      }
      tweet {
        id
        content
        imageUri
        userID
        user {
          id
          name
          username
          imageUri
          description
          background
          email
          status
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
      id
      userID
      tweetID
      user {
        id
        name
        username
        imageUri
        description
        background
        email
        status
        posts {
          nextToken
        }
        tweets {
          nextToken
        }
        chatRoomUser {
          nextToken
        }
        fleets {
          nextToken
        }
        createdAt
        updatedAt
      }
      tweet {
        id
        content
        imageUri
        userID
        user {
          id
          name
          username
          imageUri
          description
          background
          email
          status
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createProfileType = /* GraphQL */ `
  mutation CreateProfileType(
    $input: CreateProfileTypeInput!
    $condition: ModelProfileTypeConditionInput
  ) {
    createProfileType(input: $input, condition: $condition) {
      id
      description
      text
      imageUri
      background
      userID
      user {
        id
        name
        username
        imageUri
        description
        background
        email
        status
        posts {
          nextToken
        }
        tweets {
          nextToken
        }
        chatRoomUser {
          nextToken
        }
        fleets {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateProfileType = /* GraphQL */ `
  mutation UpdateProfileType(
    $input: UpdateProfileTypeInput!
    $condition: ModelProfileTypeConditionInput
  ) {
    updateProfileType(input: $input, condition: $condition) {
      id
      description
      text
      imageUri
      background
      userID
      user {
        id
        name
        username
        imageUri
        description
        background
        email
        status
        posts {
          nextToken
        }
        tweets {
          nextToken
        }
        chatRoomUser {
          nextToken
        }
        fleets {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteProfileType = /* GraphQL */ `
  mutation DeleteProfileType(
    $input: DeleteProfileTypeInput!
    $condition: ModelProfileTypeConditionInput
  ) {
    deleteProfileType(input: $input, condition: $condition) {
      id
      description
      text
      imageUri
      background
      userID
      user {
        id
        name
        username
        imageUri
        description
        background
        email
        status
        posts {
          nextToken
        }
        tweets {
          nextToken
        }
        chatRoomUser {
          nextToken
        }
        fleets {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
