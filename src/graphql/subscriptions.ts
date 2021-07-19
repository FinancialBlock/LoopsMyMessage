/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      username
      imageUri
      email
      status
      posts {
        items {
          id
          videoUri
          description
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      username
      imageUri
      email
      status
      posts {
        items {
          id
          videoUri
          description
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      username
      imageUri
      email
      status
      posts {
        items {
          id
          videoUri
          description
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      videoUri
      description
      userID
      user {
        id
        name
        username
        imageUri
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      videoUri
      description
      userID
      user {
        id
        name
        username
        imageUri
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      videoUri
      description
      userID
      user {
        id
        name
        username
        imageUri
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
export const onCreateSong = /* GraphQL */ `
  subscription OnCreateSong {
    onCreateSong {
      id
      name
      imageUri
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSong = /* GraphQL */ `
  subscription OnUpdateSong {
    onUpdateSong {
      id
      name
      imageUri
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSong = /* GraphQL */ `
  subscription OnDeleteSong {
    onDeleteSong {
      id
      name
      imageUri
      createdAt
      updatedAt
    }
  }
`;
export const onCreateChatRoomUser = /* GraphQL */ `
  subscription OnCreateChatRoomUser {
    onCreateChatRoomUser {
      id
      userID
      chatRoomID
      user {
        id
        name
        username
        imageUri
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
export const onUpdateChatRoomUser = /* GraphQL */ `
  subscription OnUpdateChatRoomUser {
    onUpdateChatRoomUser {
      id
      userID
      chatRoomID
      user {
        id
        name
        username
        imageUri
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
export const onDeleteChatRoomUser = /* GraphQL */ `
  subscription OnDeleteChatRoomUser {
    onDeleteChatRoomUser {
      id
      userID
      chatRoomID
      user {
        id
        name
        username
        imageUri
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
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom {
    onCreateChatRoom {
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
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom {
    onUpdateChatRoom {
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
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom {
    onDeleteChatRoom {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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
export const onCreateTweet = /* GraphQL */ `
  subscription OnCreateTweet {
    onCreateTweet {
      id
      content
      imageUri
      userID
      user {
        id
        name
        username
        imageUri
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
export const onUpdateTweet = /* GraphQL */ `
  subscription OnUpdateTweet {
    onUpdateTweet {
      id
      content
      imageUri
      userID
      user {
        id
        name
        username
        imageUri
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
export const onDeleteTweet = /* GraphQL */ `
  subscription OnDeleteTweet {
    onDeleteTweet {
      id
      content
      imageUri
      userID
      user {
        id
        name
        username
        imageUri
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
export const onCreateFleet = /* GraphQL */ `
  subscription OnCreateFleet {
    onCreateFleet {
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
export const onUpdateFleet = /* GraphQL */ `
  subscription OnUpdateFleet {
    onUpdateFleet {
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
export const onDeleteFleet = /* GraphQL */ `
  subscription OnDeleteFleet {
    onDeleteFleet {
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
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike {
    onCreateLike {
      id
      userID
      tweetID
      user {
        id
        name
        username
        imageUri
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
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike {
    onUpdateLike {
      id
      userID
      tweetID
      user {
        id
        name
        username
        imageUri
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
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike {
    onDeleteLike {
      id
      userID
      tweetID
      user {
        id
        name
        username
        imageUri
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
export const onCreateProfileType = /* GraphQL */ `
  subscription OnCreateProfileType {
    onCreateProfileType {
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
export const onUpdateProfileType = /* GraphQL */ `
  subscription OnUpdateProfileType {
    onUpdateProfileType {
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
export const onDeleteProfileType = /* GraphQL */ `
  subscription OnDeleteProfileType {
    onDeleteProfileType {
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
