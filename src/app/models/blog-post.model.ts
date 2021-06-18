// import 'firebase/firestore';

// import * as firebase from 'firebase/app';

export interface BlogPost {
  header: string;
  subheader: string;
  prettyUrl: string;
  isPublished: boolean; // is the blog in draft state or publicly viewable?
  updatedOn: firebase.default.firestore.Timestamp;
  createdOn: firebase.default.firestore.Timestamp;
  uid: string;
  author: string;
  previewImage: string;
  content: string;
  youtubeUrl: string;
}
