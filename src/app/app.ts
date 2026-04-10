import { Component, OnInit, signal } from '@angular/core';
import { PostService } from './services/post';
import { Post } from './data/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
})
export class App implements OnInit {
  title = signal('BloggerBox');
  posts = signal<Post[]>([]);

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((data) => this.posts.set(data));
  }
}
