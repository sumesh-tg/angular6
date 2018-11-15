import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import {HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { SignupComponent } from './signup/signup.component';
import { MyserviceService } from './myservice.service';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: MyComponentComponent },
  { path: 'hero/:id',      component: SignupComponent },
  {
    path: 'heroes',
    component: SignupComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    SignupComponent,
    PageNotFoundComponentComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot( appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
