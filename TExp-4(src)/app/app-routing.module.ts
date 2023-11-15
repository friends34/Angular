import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SkillsComponent } from './skills/skills.component';
import { AddressComponent } from './address/address.component';
const routes: Routes = [
  { path: 'first-component', component: FirstComponent },

{ path: 'skills-component', component: SkillsComponent},
{ path: 'address-component', component: AddressComponent},

{ path: '', redirectTo: '/first-component', pathMatch: 'full' },
{ path: '**', component: AddressComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
