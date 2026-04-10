import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App } from './app'; // Votre page d'accueil actuelle
// Importez votre futur composant PostCreationComponent ici

const routes: Routes = [
  { path: '', component: App },
  // { path: 'add-post', component: PostCreationComponent }, // À décommenter après création du composant
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
