import firebase from 'firebase/app';

export interface BlogPost {
  header: string;
  subheader: string;
  prettyUrl: string;
  isPublished: boolean; // is the blog in draft state or publicly viewable?
  updatedOn: firebase.firestore.Timestamp;
  createdOn: firebase.firestore.Timestamp;
  uid: string;
  author: string;
  previewImage: string;
  content: string;
  youtubeUrl: string;
}