import { Observable } from 'rxjs';
import { filter, map, pluck, switchMap } from 'rxjs/operators';

/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { BlogPost } from '../../models/blog-post.model';
import { DatabaseService } from '../../services/database.service';
import { objectExists } from '../../services/utilities.service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss']
})
export class NewsfeedComponent {
  private highlighted: boolean;

  constructor(private db: DatabaseService, private router: ActivatedRoute, public sanitizer: DomSanitizer) {}

  post$: Observable<BlogPost> = this.router.params.pipe(
    pluck('uid'),
    filter(objectExists),
    switchMap(this.db.getPost$),
    map((post: BlogPost) => {
      const sanitizedBlog: any = post;
      sanitizedBlog.youtubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(sanitizedBlog.youtubeUrl);
      return sanitizedBlog;
    })
  );
}
