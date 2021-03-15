import {Injectable} from '@angular/core';
import {BlogPost} from '../models/blog-post.model';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import firebase from 'firebase';
import DocumentData = firebase.firestore.DocumentData;
import Query = firebase.firestore.Query;

@Injectable({
              providedIn: 'root'
            })
export class DatabaseService {

  constructor(private database: AngularFirestore) { }

  getPosts$(): Observable<BlogPost[]> {
    return this.database.collection<BlogPost>('posts').valueChanges();
  }

  getPublishedPosts(): Query<DocumentData> {
    return this.database.collection('posts').ref
      .where('isPublished', '==', true)
      .orderBy('createdOn', 'desc');
  }

  getPost$ = (uid: string): Observable<BlogPost> => this.database.doc<BlogPost>(`posts/${uid}`).valueChanges();


  updatePost(post: BlogPost): Promise<void> {
    return this.database.doc<BlogPost>(`posts/${post.uid}`).set(post, {merge: true});
  }

  deletePost(post: BlogPost): Promise<void> {
    return this.database.doc<BlogPost>(`posts/${post.uid}`).delete();
  }

  getNewUid(): string {
    return this.database.createId();
  }

  set(data, path): Promise<void> {
    return this.database.doc(path).set(data, {merge: true});
  }
}
