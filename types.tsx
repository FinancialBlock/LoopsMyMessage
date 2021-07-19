/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Contacts: undefined;
  ChatRoom: undefined;
  Storys: undefined;
  Post: undefined;

};

export type BottomTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
  Post: undefined;

};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
export type User = {
  id: String;
  name: String;
  username: String;
  imageUri: String;
  status: String;
  description: String;
  followers: String;
  following: String;
}

export type Message = {
  id: String;
  content: string;
  createdAt: string;
  user: User;
}

export type ChatRoom = {
  id: String;
  users: User[];
  lastMessage: Message;
}
export type TweetType = {
  id: string,
  createdAt: string,
  user: User,
  content: string,
  image?: string,
  numberOfComments?: number,
  numberOfRetweets?: number,
  numberOfLikes?: number,
}

export type FleetType = {
  id: string,
  createdAt: string,
  user: User,
  type: string,
  text?: string,
  imageUri?: string,
}

/*export type ProfileType = {
  id: string,
  createdAt: string,
  name: String;
  username: String;
  imageUri: String;
  status: String;
  description: String;
  post: 100;

}*/

export type Post= {
  id: string,
  createdAt: string,
  user: User,
  video: string,
  song: string,
  type: string,
  text?: string,
  imageUri?: string,
}


