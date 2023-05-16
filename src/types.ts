export type User = {
  username: string;
  avatar: string;
  followers: string;
};

export type MainVideo = {
  title: string;
  description: string;
  uploaded: string;
  durationInSeconds: number;
  views: string;
  likes: string;
  comments: string;
  user: User;
};

export type RelatedVideo = {
  title: string;
  duration: string;
  views: string;
};
