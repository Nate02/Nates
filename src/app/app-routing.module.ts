import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BabyComponent } from './baby/baby.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';

const routes: Routes = [
  {
    path: "Home",
    component: HomeComponent
  },

  {
    path: "BabyShowers",
    component: BabyComponent
  },
  {
    path: "Opportunities",
    component: OpportunitiesComponent
  },
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'Home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes, 
    {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
