import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AcademicsComponent } from './academics/academics.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';


const routes: Routes = [
  {
    path : 'home-component', component : HomeComponent 
  },
  {
    path : 'academics-component', component : AcademicsComponent
  },
  {
    path : 'skills-component', component : SkillsComponent 
  },
  {
    path : 'projects-component', component : ProjectsComponent
  },
  {
    path : 'contact-me-component', component : ContactMeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }