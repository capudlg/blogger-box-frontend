import { Component, OnInit, signal } from '@angular/core';
import { PostService } from './services/post';
import { Post } from './data/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('Blogger-Box');
  // Signal pour stocker les articles récupérés [cite: 73]
  protected posts = signal<Post[]>([]);

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    // On charge les données dès l'initialisation [cite: 75, 76]
    this.postService.getPosts().subscribe({
      next: (data) => this.posts.set(data),
      error: (err) => console.error('Erreur backend:', err),
    });
  }
}
