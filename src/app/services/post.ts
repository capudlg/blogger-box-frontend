import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable } from 'rxjs';
import { Post } from '../data/post';
import { PostRaw } from '../data/post-raw';
import { CategoryService } from './category';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private postsUrl = `${environment.apiUrl}v1/posts`;

  constructor(
    private http: HttpClient,
    private categoryService: CategoryService
  ) {}

  getPosts(): Observable<Post[]> {
    return forkJoin({
      posts: this.http.get<PostRaw[]>(this.postsUrl),
      categories: this.categoryService.getCategories(),
    }).pipe(
      map(({ posts, categories }) => {
        return posts.map((postRaw) => {
          const category = categories.find((c) => c.id === postRaw.categoryId);
          const [day, month, year, hour, minute, second] = postRaw.createdDate
            .split(/[- :]/)
            .map(Number);
          return {
            ...postRaw,
            createdDate: new Date(year, month - 1, day, hour, minute, second),
            category: category!,
          } as Post;
        });
      })
    );
  }
}
