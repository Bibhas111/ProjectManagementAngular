import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProjectComponent } from './create-project/create-project.component';
import { GridsComponent } from './grids/grids.component';
import { AboutprojectComponent } from './aboutproject/aboutproject.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {

    path:'home',
    component:HomeComponent,


  },
{
  path:'about',
  component:AboutprojectComponent,
  
}
   , {
        path:'create',
        component: CreateProjectComponent
       }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
