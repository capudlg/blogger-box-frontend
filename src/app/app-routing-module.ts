import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { PostCreationComponent } from './components/post-creation/post-creation';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-post', component: PostCreationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

