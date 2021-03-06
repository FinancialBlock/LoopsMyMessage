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
  Messages: undefined;
  ProfileSettings: undefined;
  CreatePost: undefined;

};

export type BottomTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
  Post: undefined;
  CreatePost: undefined;
  ExploreScreen: undefined;
};

export type CameraScreenList = {
  CameraScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type User = {
  id: string,
  name: string,
  username: string,
  imageUri: string,
  status: string,
  description: string,
  followers: string,
  following: string,
  loops: string,
  background: string,
};

export type Message = {
  id: String;
  content: string;
  createdAt: string;
  user: User;
};

export type ChatRoom = {
  id: String;
  users: User[];
  lastMessage: Message;
};
export type TweetType = {
  id: string,
  createdAt: string,
  user: User,
  content: string,
  image?: string,
  numberOfComments?: number,
  numberOfRetweets?: number,
  numberOfLikes?: number,
};

export type FleetType = {
  id: string,
  createdAt: string,
  user: User,
  type: string,
  text?: string,
  imageUri?: string,
};

export type Post = {
  id: string,
  createdAt: string,
  user: User,
  videoUri: string,
  song: string,
  type: string,
  text: string,
  imageUri: string,
  likes: 100,
  comments: 12,
  shares: 44,
  tips: 100,
  description:string,
};

export type WhiteBalance = {
  id: string,
  item: string,
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




