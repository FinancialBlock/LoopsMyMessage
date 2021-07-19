/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  username?: string | null,
  imageUri?: string | null,
  email?: string | null,
  status?: string | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  username?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  email?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  username?: string | null,
  imageUri?: string | null,
  email?: string | null,
  status?: string | null,
  posts?: ModelPostConnection | null,
  tweets?: ModelTweetConnection | null,
  chatRoomUser?: ModelChatRoomUserConnection | null,
  fleets?: ModelFleetConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items?:  Array<Post | null > | null,
  nextToken?: string | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  videoUri: string,
  description: string,
  userID: string,
  user?: User | null,
  songID: string,
  song?: Song | null,
  createdAt: string,
  updatedAt: string,
};

export type Song = {
  __typename: "Song",
  id: string,
  name: string,
  imageUri?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelTweetConnection = {
  __typename: "ModelTweetConnection",
  items?:  Array<Tweet | null > | null,
  nextToken?: string | null,
};

export type Tweet = {
  __typename: "Tweet",
  id: string,
  content: string,
  imageUri?: string | null,
  userID: string,
  user?: User | null,
  likes?: ModelLikeConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelLikeConnection = {
  __typename: "ModelLikeConnection",
  items?:  Array<Like | null > | null,
  nextToken?: string | null,
};

export type Like = {
  __typename: "Like",
  id: string,
  userID: string,
  tweetID: string,
  user: User,
  tweet: Tweet,
  createdAt: string,
  updatedAt: string,
};

export type ModelChatRoomUserConnection = {
  __typename: "ModelChatRoomUserConnection",
  items?:  Array<ChatRoomUser | null > | null,
  nextToken?: string | null,
};

export type ChatRoomUser = {
  __typename: "ChatRoomUser",
  id: string,
  userID: string,
  chatRoomID: string,
  user?: User | null,
  chatRoom?: ChatRoom | null,
  createdAt: string,
  updatedAt: string,
};

export type ChatRoom = {
  __typename: "ChatRoom",
  id: string,
  chatRoomUsers?: ModelChatRoomUserConnection | null,
  messages?: ModelMessageConnection | null,
  lastMessageID?: string | null,
  lastMessage?: Message | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items?:  Array<Message | null > | null,
  nextToken?: string | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  createdAt: string,
  content: string,
  userID: string,
  chatRoomID: string,
  user?: User | null,
  chatRoom?: ChatRoom | null,
  updatedAt: string,
};

export type ModelFleetConnection = {
  __typename: "ModelFleetConnection",
  items?:  Array<Fleet | null > | null,
  nextToken?: string | null,
};

export type Fleet = {
  __typename: "Fleet",
  id: string,
  type: string,
  text?: string | null,
  imageUri?: string | null,
  userID: string,
  user?: User | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  username?: string | null,
  imageUri?: string | null,
  email?: string | null,
  status?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  videoUri: string,
  description: string,
  userID: string,
  songID: string,
};

export type ModelPostConditionInput = {
  videoUri?: ModelStringInput | null,
  description?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  songID?: ModelIDInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePostInput = {
  id: string,
  videoUri?: string | null,
  description?: string | null,
  userID?: string | null,
  songID?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateSongInput = {
  id?: string | null,
  name: string,
  imageUri?: string | null,
};

export type ModelSongConditionInput = {
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  and?: Array< ModelSongConditionInput | null > | null,
  or?: Array< ModelSongConditionInput | null > | null,
  not?: ModelSongConditionInput | null,
};

export type UpdateSongInput = {
  id: string,
  name?: string | null,
  imageUri?: string | null,
};

export type DeleteSongInput = {
  id: string,
};

export type CreateChatRoomUserInput = {
  id?: string | null,
  userID: string,
  chatRoomID: string,
};

export type ModelChatRoomUserConditionInput = {
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  and?: Array< ModelChatRoomUserConditionInput | null > | null,
  or?: Array< ModelChatRoomUserConditionInput | null > | null,
  not?: ModelChatRoomUserConditionInput | null,
};

export type UpdateChatRoomUserInput = {
  id: string,
  userID?: string | null,
  chatRoomID?: string | null,
};

export type DeleteChatRoomUserInput = {
  id: string,
};

export type CreateChatRoomInput = {
  id?: string | null,
  lastMessageID?: string | null,
};

export type ModelChatRoomConditionInput = {
  lastMessageID?: ModelIDInput | null,
  and?: Array< ModelChatRoomConditionInput | null > | null,
  or?: Array< ModelChatRoomConditionInput | null > | null,
  not?: ModelChatRoomConditionInput | null,
};

export type UpdateChatRoomInput = {
  id: string,
  lastMessageID?: string | null,
};

export type DeleteChatRoomInput = {
  id: string,
};

export type CreateMessageInput = {
  id?: string | null,
  createdAt?: string | null,
  content: string,
  userID: string,
  chatRoomID: string,
};

export type ModelMessageConditionInput = {
  createdAt?: ModelStringInput | null,
  content?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type UpdateMessageInput = {
  id: string,
  createdAt?: string | null,
  content?: string | null,
  userID?: string | null,
  chatRoomID?: string | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type CreateTweetInput = {
  id?: string | null,
  content: string,
  imageUri?: string | null,
  userID: string,
};

export type ModelTweetConditionInput = {
  content?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelTweetConditionInput | null > | null,
  or?: Array< ModelTweetConditionInput | null > | null,
  not?: ModelTweetConditionInput | null,
};

export type UpdateTweetInput = {
  id: string,
  content?: string | null,
  imageUri?: string | null,
  userID?: string | null,
};

export type DeleteTweetInput = {
  id: string,
};

export type CreateFleetInput = {
  id?: string | null,
  type: string,
  text?: string | null,
  imageUri?: string | null,
  userID: string,
};

export type ModelFleetConditionInput = {
  type?: ModelStringInput | null,
  text?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelFleetConditionInput | null > | null,
  or?: Array< ModelFleetConditionInput | null > | null,
  not?: ModelFleetConditionInput | null,
};

export type UpdateFleetInput = {
  id: string,
  type?: string | null,
  text?: string | null,
  imageUri?: string | null,
  userID?: string | null,
};

export type DeleteFleetInput = {
  id: string,
};

export type CreateLikeInput = {
  id?: string | null,
  userID: string,
  tweetID: string,
};

export type ModelLikeConditionInput = {
  userID?: ModelIDInput | null,
  tweetID?: ModelIDInput | null,
  and?: Array< ModelLikeConditionInput | null > | null,
  or?: Array< ModelLikeConditionInput | null > | null,
  not?: ModelLikeConditionInput | null,
};

export type UpdateLikeInput = {
  id: string,
  userID?: string | null,
  tweetID?: string | null,
};

export type DeleteLikeInput = {
  id: string,
};

export type CreateProfileTypeInput = {
  id?: string | null,
  description: string,
  text?: string | null,
  imageUri?: string | null,
  background?: string | null,
  userID: string,
};

export type ModelProfileTypeConditionInput = {
  description?: ModelStringInput | null,
  text?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  background?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelProfileTypeConditionInput | null > | null,
  or?: Array< ModelProfileTypeConditionInput | null > | null,
  not?: ModelProfileTypeConditionInput | null,
};

export type ProfileType = {
  __typename: "ProfileType",
  id: string,
  description: string,
  text?: string | null,
  imageUri?: string | null,
  background?: string | null,
  userID: string,
  user?: User | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProfileTypeInput = {
  id: string,
  description?: string | null,
  text?: string | null,
  imageUri?: string | null,
  background?: string | null,
  userID?: string | null,
};

export type DeleteProfileTypeInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  username?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  email?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  videoUri?: ModelStringInput | null,
  description?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  songID?: ModelIDInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelSongFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  and?: Array< ModelSongFilterInput | null > | null,
  or?: Array< ModelSongFilterInput | null > | null,
  not?: ModelSongFilterInput | null,
};

export type ModelSongConnection = {
  __typename: "ModelSongConnection",
  items?:  Array<Song | null > | null,
  nextToken?: string | null,
};

export type ModelChatRoomUserFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  and?: Array< ModelChatRoomUserFilterInput | null > | null,
  or?: Array< ModelChatRoomUserFilterInput | null > | null,
  not?: ModelChatRoomUserFilterInput | null,
};

export type ModelChatRoomFilterInput = {
  id?: ModelIDInput | null,
  lastMessageID?: ModelIDInput | null,
  and?: Array< ModelChatRoomFilterInput | null > | null,
  or?: Array< ModelChatRoomFilterInput | null > | null,
  not?: ModelChatRoomFilterInput | null,
};

export type ModelChatRoomConnection = {
  __typename: "ModelChatRoomConnection",
  items?:  Array<ChatRoom | null > | null,
  nextToken?: string | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  content?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type ModelTweetFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelTweetFilterInput | null > | null,
  or?: Array< ModelTweetFilterInput | null > | null,
  not?: ModelTweetFilterInput | null,
};

export type ModelFleetFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  text?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelFleetFilterInput | null > | null,
  or?: Array< ModelFleetFilterInput | null > | null,
  not?: ModelFleetFilterInput | null,
};

export type ModelProfileTypeFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  text?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  background?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelProfileTypeFilterInput | null > | null,
  or?: Array< ModelProfileTypeFilterInput | null > | null,
  not?: ModelProfileTypeFilterInput | null,
};

export type ModelProfileTypeConnection = {
  __typename: "ModelProfileTypeConnection",
  items?:  Array<ProfileType | null > | null,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    username?: string | null,
    imageUri?: string | null,
    email?: string | null,
    status?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        videoUri: string,
        description: string,
        userID: string,
        songID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items?:  Array< {
        __typename: "Tweet",
        id: string,
        content: string,
        imageUri?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    fleets?:  {
      __typename: "ModelFleetConnection",
      items?:  Array< {
        __typename: "Fleet",
        id: string,
        type: string,
        text?: string | null,
        imageUri?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    username?: string | null,
    imageUri?: string | null,
    email?: string | null,
    status?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        videoUri: string,
        description: string,
        userID: string,
        songID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items?:  Array< {
        __typename: "Tweet",
        id: string,
        content: string,
        imageUri?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    fleets?:  {
      __typename: "ModelFleetConnection",
      items?:  Array< {
        __typename: "Fleet",
        id: string,
        type: string,
        text?: string | null,
        imageUri?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    username?: string | null,
    imageUri?: string | null,
    email?: string | null,
    status?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        videoUri: string,
        description: string,
        userID: string,
        songID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items?:  Array< {
        __typename: "Tweet",
        id: string,
        content: string,
        imageUri?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    fleets?:  {
      __typename: "ModelFleetConnection",
      items?:  Array< {
        __typename: "Fleet",
        id: string,
        type: string,
        text?: string | null,
        imageUri?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    videoUri: string,
    description: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    songID: string,
    song?:  {
      __typename: "Song",
      id: string,
      name: string,
      imageUri?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    videoUri: string,
    description: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    songID: string,
    song?:  {
      __typename: "Song",
      id: string,
      name: string,
      imageUri?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    videoUri: string,
    description: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    songID: string,
    song?:  {
      __typename: "Song",
      id: string,
      name: string,
      imageUri?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSongMutationVariables = {
  input: CreateSongInput,
  condition?: ModelSongConditionInput | null,
};

export type CreateSongMutation = {
  createSong?:  {
    __typename: "Song",
    id: string,
    name: string,
    imageUri?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSongMutationVariables = {
  input: UpdateSongInput,
  condition?: ModelSongConditionInput | null,
};

export type UpdateSongMutation = {
  updateSong?:  {
    __typename: "Song",
    id: string,
    name: string,
    imageUri?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSongMutationVariables = {
  input: DeleteSongInput,
  condition?: ModelSongConditionInput | null,
};

export type DeleteSongMutation = {
  deleteSong?:  {
    __typename: "Song",
    id: string,
    name: string,
    imageUri?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChatRoomUserMutationVariables = {
  input: CreateChatRoomUserInput,
  condition?: ModelChatRoomUserConditionInput | null,
};

export type CreateChatRoomUserMutation = {
  createChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID?: string | null,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChatRoomUserMutationVariables = {
  input: UpdateChatRoomUserInput,
  condition?: ModelChatRoomUserConditionInput | null,
};

export type UpdateChatRoomUserMutation = {
  updateChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID?: string | null,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChatRoomUserMutationVariables = {
  input: DeleteChatRoomUserInput,
  condition?: ModelChatRoomUserConditionInput | null,
};

export type DeleteChatRoomUserMutation = {
  deleteChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID?: string | null,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChatRoomMutationVariables = {
  input: CreateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type CreateChatRoomMutation = {
  createChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID?: string | null,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        username?: string | null,
        imageUri?: string | null,
        email?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        lastMessageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChatRoomMutationVariables = {
  input: UpdateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type UpdateChatRoomMutation = {
  updateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID?: string | null,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        username?: string | null,
        imageUri?: string | null,
        email?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        lastMessageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChatRoomMutationVariables = {
  input: DeleteChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type DeleteChatRoomMutation = {
  deleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID?: string | null,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        username?: string | null,
        imageUri?: string | null,
        email?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        lastMessageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    content: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID?: string | null,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    content: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID?: string | null,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    content: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID?: string | null,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateTweetMutationVariables = {
  input: CreateTweetInput,
  condition?: ModelTweetConditionInput | null,
};

export type CreateTweetMutation = {
  createTweet?:  {
    __typename: "Tweet",
    id: string,
    content: string,
    imageUri?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        tweetID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTweetMutationVariables = {
  input: UpdateTweetInput,
  condition?: ModelTweetConditionInput | null,
};

export type UpdateTweetMutation = {
  updateTweet?:  {
    __typename: "Tweet",
    id: string,
    content: string,
    imageUri?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        tweetID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTweetMutationVariables = {
  input: DeleteTweetInput,
  condition?: ModelTweetConditionInput | null,
};

export type DeleteTweetMutation = {
  deleteTweet?:  {
    __typename: "Tweet",
    id: string,
    content: string,
    imageUri?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        tweetID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFleetMutationVariables = {
  input: CreateFleetInput,
  condition?: ModelFleetConditionInput | null,
};

export type CreateFleetMutation = {
  createFleet?:  {
    __typename: "Fleet",
    id: string,
    type: string,
    text?: string | null,
    imageUri?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFleetMutationVariables = {
  input: UpdateFleetInput,
  condition?: ModelFleetConditionInput | null,
};

export type UpdateFleetMutation = {
  updateFleet?:  {
    __typename: "Fleet",
    id: string,
    type: string,
    text?: string | null,
    imageUri?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFleetMutationVariables = {
  input: DeleteFleetInput,
  condition?: ModelFleetConditionInput | null,
};

export type DeleteFleetMutation = {
  deleteFleet?:  {
    __typename: "Fleet",
    id: string,
    type: string,
    text?: string | null,
    imageUri?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLikeMutationVariables = {
  input: CreateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type CreateLikeMutation = {
  createLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    tweetID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweet:  {
      __typename: "Tweet",
      id: string,
      content: string,
      imageUri?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        username?: string | null,
        imageUri?: string | null,
        email?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLikeMutationVariables = {
  input: UpdateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type UpdateLikeMutation = {
  updateLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    tweetID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweet:  {
      __typename: "Tweet",
      id: string,
      content: string,
      imageUri?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        username?: string | null,
        imageUri?: string | null,
        email?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLikeMutationVariables = {
  input: DeleteLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type DeleteLikeMutation = {
  deleteLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    tweetID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweet:  {
      __typename: "Tweet",
      id: string,
      content: string,
      imageUri?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        username?: string | null,
        imageUri?: string | null,
        email?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProfileTypeMutationVariables = {
  input: CreateProfileTypeInput,
  condition?: ModelProfileTypeConditionInput | null,
};

export type CreateProfileTypeMutation = {
  createProfileType?:  {
    __typename: "ProfileType",
    id: string,
    description: string,
    text?: string | null,
    imageUri?: string | null,
    background?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProfileTypeMutationVariables = {
  input: UpdateProfileTypeInput,
  condition?: ModelProfileTypeConditionInput | null,
};

export type UpdateProfileTypeMutation = {
  updateProfileType?:  {
    __typename: "ProfileType",
    id: string,
    description: string,
    text?: string | null,
    imageUri?: string | null,
    background?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProfileTypeMutationVariables = {
  input: DeleteProfileTypeInput,
  condition?: ModelProfileTypeConditionInput | null,
};

export type DeleteProfileTypeMutation = {
  deleteProfileType?:  {
    __typename: "ProfileType",
    id: string,
    description: string,
    text?: string | null,
    imageUri?: string | null,
    background?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    username?: string | null,
    imageUri?: string | null,
    email?: string | null,
    status?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        videoUri: string,
        description: string,
        userID: string,
        songID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items?:  Array< {
        __typename: "Tweet",
        id: string,
        content: string,
        imageUri?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    fleets?:  {
      __typename: "ModelFleetConnection",
      items?:  Array< {
        __typename: "Fleet",
        id: string,
        type: string,
        text?: string | null,
        imageUri?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    videoUri: string,
    description: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    songID: string,
    song?:  {
      __typename: "Song",
      id: string,
      name: string,
      imageUri?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items?:  Array< {
      __typename: "Post",
      id: string,
      videoUri: string,
      description: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        username?: string | null,
        imageUri?: string | null,
        email?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      songID: string,
      song?:  {
        __typename: "Song",
        id: string,
        name: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetSongQueryVariables = {
  id: string,
};

export type GetSongQuery = {
  getSong?:  {
    __typename: "Song",
    id: string,
    name: string,
    imageUri?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSongsQueryVariables = {
  filter?: ModelSongFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSongsQuery = {
  listSongs?:  {
    __typename: "ModelSongConnection",
    items?:  Array< {
      __typename: "Song",
      id: string,
      name: string,
      imageUri?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetChatRoomUserQueryVariables = {
  id: string,
};

export type GetChatRoomUserQuery = {
  getChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID?: string | null,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChatRoomUsersQueryVariables = {
  filter?: ModelChatRoomUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatRoomUsersQuery = {
  listChatRoomUsers?:  {
    __typename: "ModelChatRoomUserConnection",
    items?:  Array< {
      __typename: "ChatRoomUser",
      id: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        username?: string | null,
        imageUri?: string | null,
        email?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        lastMessageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetChatRoomQueryVariables = {
  id: string,
};

export type GetChatRoomQuery = {
  getChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID?: string | null,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        username?: string | null,
        imageUri?: string | null,
        email?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        lastMessageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChatRoomsQueryVariables = {
  filter?: ModelChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatRoomsQuery = {
  listChatRooms?:  {
    __typename: "ModelChatRoomConnection",
    items?:  Array< {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID?: string | null,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    content: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID?: string | null,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items?:  Array< {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        username?: string | null,
        imageUri?: string | null,
        email?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        lastMessageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetTweetQueryVariables = {
  id: string,
};

export type GetTweetQuery = {
  getTweet?:  {
    __typename: "Tweet",
    id: string,
    content: string,
    imageUri?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        tweetID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTweetsQueryVariables = {
  filter?: ModelTweetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTweetsQuery = {
  listTweets?:  {
    __typename: "ModelTweetConnection",
    items?:  Array< {
      __typename: "Tweet",
      id: string,
      content: string,
      imageUri?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        username?: string | null,
        imageUri?: string | null,
        email?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetFleetQueryVariables = {
  id: string,
};

export type GetFleetQuery = {
  getFleet?:  {
    __typename: "Fleet",
    id: string,
    type: string,
    text?: string | null,
    imageUri?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFleetsQueryVariables = {
  filter?: ModelFleetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFleetsQuery = {
  listFleets?:  {
    __typename: "ModelFleetConnection",
    items?:  Array< {
      __typename: "Fleet",
      id: string,
      type: string,
      text?: string | null,
      imageUri?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        username?: string | null,
        imageUri?: string | null,
        email?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetProfileTypeQueryVariables = {
  id: string,
};

export type GetProfileTypeQuery = {
  getProfileType?:  {
    __typename: "ProfileType",
    id: string,
    description: string,
    text?: string | null,
    imageUri?: string | null,
    background?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProfileTypesQueryVariables = {
  filter?: ModelProfileTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProfileTypesQuery = {
  listProfileTypes?:  {
    __typename: "ModelProfileTypeConnection",
    items?:  Array< {
      __typename: "ProfileType",
      id: string,
      description: string,
      text?: string | null,
      imageUri?: string | null,
      background?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        username?: string | null,
        imageUri?: string | null,
        email?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type MessagesByChatRoomQueryVariables = {
  chatRoomID?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessagesByChatRoomQuery = {
  messagesByChatRoom?:  {
    __typename: "ModelMessageConnection",
    items?:  Array< {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        username?: string | null,
        imageUri?: string | null,
        email?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        lastMessageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    username?: string | null,
    imageUri?: string | null,
    email?: string | null,
    status?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        videoUri: string,
        description: string,
        userID: string,
        songID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items?:  Array< {
        __typename: "Tweet",
        id: string,
        content: string,
        imageUri?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    fleets?:  {
      __typename: "ModelFleetConnection",
      items?:  Array< {
        __typename: "Fleet",
        id: string,
        type: string,
        text?: string | null,
        imageUri?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    username?: string | null,
    imageUri?: string | null,
    email?: string | null,
    status?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        videoUri: string,
        description: string,
        userID: string,
        songID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items?:  Array< {
        __typename: "Tweet",
        id: string,
        content: string,
        imageUri?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    fleets?:  {
      __typename: "ModelFleetConnection",
      items?:  Array< {
        __typename: "Fleet",
        id: string,
        type: string,
        text?: string | null,
        imageUri?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    username?: string | null,
    imageUri?: string | null,
    email?: string | null,
    status?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        videoUri: string,
        description: string,
        userID: string,
        songID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items?:  Array< {
        __typename: "Tweet",
        id: string,
        content: string,
        imageUri?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    fleets?:  {
      __typename: "ModelFleetConnection",
      items?:  Array< {
        __typename: "Fleet",
        id: string,
        type: string,
        text?: string | null,
        imageUri?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    videoUri: string,
    description: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    songID: string,
    song?:  {
      __typename: "Song",
      id: string,
      name: string,
      imageUri?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    videoUri: string,
    description: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    songID: string,
    song?:  {
      __typename: "Song",
      id: string,
      name: string,
      imageUri?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    videoUri: string,
    description: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    songID: string,
    song?:  {
      __typename: "Song",
      id: string,
      name: string,
      imageUri?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSongSubscription = {
  onCreateSong?:  {
    __typename: "Song",
    id: string,
    name: string,
    imageUri?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSongSubscription = {
  onUpdateSong?:  {
    __typename: "Song",
    id: string,
    name: string,
    imageUri?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSongSubscription = {
  onDeleteSong?:  {
    __typename: "Song",
    id: string,
    name: string,
    imageUri?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChatRoomUserSubscription = {
  onCreateChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID?: string | null,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChatRoomUserSubscription = {
  onUpdateChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID?: string | null,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChatRoomUserSubscription = {
  onDeleteChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID?: string | null,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChatRoomSubscription = {
  onCreateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID?: string | null,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        username?: string | null,
        imageUri?: string | null,
        email?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        lastMessageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChatRoomSubscription = {
  onUpdateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID?: string | null,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        username?: string | null,
        imageUri?: string | null,
        email?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        lastMessageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChatRoomSubscription = {
  onDeleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID?: string | null,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        username?: string | null,
        imageUri?: string | null,
        email?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        lastMessageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    content: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID?: string | null,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    content: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID?: string | null,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    content: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID?: string | null,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateTweetSubscription = {
  onCreateTweet?:  {
    __typename: "Tweet",
    id: string,
    content: string,
    imageUri?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        tweetID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTweetSubscription = {
  onUpdateTweet?:  {
    __typename: "Tweet",
    id: string,
    content: string,
    imageUri?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        tweetID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTweetSubscription = {
  onDeleteTweet?:  {
    __typename: "Tweet",
    id: string,
    content: string,
    imageUri?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        tweetID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFleetSubscription = {
  onCreateFleet?:  {
    __typename: "Fleet",
    id: string,
    type: string,
    text?: string | null,
    imageUri?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFleetSubscription = {
  onUpdateFleet?:  {
    __typename: "Fleet",
    id: string,
    type: string,
    text?: string | null,
    imageUri?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFleetSubscription = {
  onDeleteFleet?:  {
    __typename: "Fleet",
    id: string,
    type: string,
    text?: string | null,
    imageUri?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLikeSubscription = {
  onCreateLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    tweetID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweet:  {
      __typename: "Tweet",
      id: string,
      content: string,
      imageUri?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        username?: string | null,
        imageUri?: string | null,
        email?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLikeSubscription = {
  onUpdateLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    tweetID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweet:  {
      __typename: "Tweet",
      id: string,
      content: string,
      imageUri?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        username?: string | null,
        imageUri?: string | null,
        email?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLikeSubscription = {
  onDeleteLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    tweetID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweet:  {
      __typename: "Tweet",
      id: string,
      content: string,
      imageUri?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        username?: string | null,
        imageUri?: string | null,
        email?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProfileTypeSubscription = {
  onCreateProfileType?:  {
    __typename: "ProfileType",
    id: string,
    description: string,
    text?: string | null,
    imageUri?: string | null,
    background?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProfileTypeSubscription = {
  onUpdateProfileType?:  {
    __typename: "ProfileType",
    id: string,
    description: string,
    text?: string | null,
    imageUri?: string | null,
    background?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProfileTypeSubscription = {
  onDeleteProfileType?:  {
    __typename: "ProfileType",
    id: string,
    description: string,
    text?: string | null,
    imageUri?: string | null,
    background?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username?: string | null,
      imageUri?: string | null,
      email?: string | null,
      status?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
