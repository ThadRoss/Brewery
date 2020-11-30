import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPageComponent} from './search-page/search-page.component'
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path: "home-page", component: HomePageComponent},
  {path: "search-page", component: SearchPageComponent},
  {path: "", redirectTo: "/home-page", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
