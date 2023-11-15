import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
declarations: [
AppComponent,
ProfileComponent,
AboutComponent
],
imports: [
BrowserModule,
AppRoutingModule,
NoopAnimationsModule,
MatSidenavModule,
MatToolbarModule,
MatIconModule,
MatButtonModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
