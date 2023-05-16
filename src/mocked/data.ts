import { MainVideo, RelatedVideo } from "../types";

export const mainVideo: MainVideo = {
  title: "Lords of the Rings: The Fellowship of the Ring (official trailer)",
  description:
    "The Lord of the Rings is an epic high-fantasy novel written by English author J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into much larger work.",
  uploaded: "8 March, 2007",
  durationInSeconds: 231,
  views: "12,434,934",
  likes: "6.563",
  comments: "831",
  user: {
    username: "Sara Jemeson",
    avatar: "sara-avatar",
    followers: "12,353",
  },
};

export const relatedVidoes: RelatedVideo[] = [
  {
    title: "The Lord of the Rings - Best Scene of the movie (HD)",
    duration: "2:41",
    views: "8,204,301",
  },
  {
    title: "LOTR: The Two Towers - The Battle of the Hornburg",
    duration: "4:38",
    views: "2,857,112",
  },
  {
    title: "Lord of The Rings - Battle of Helms Deep Opening",
    duration: "6:38",
    views: "3,642,730",
  },
];
