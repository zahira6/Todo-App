import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { AuthService } from './service/auth.service';
import { HomeComponent } from './components/home/home.component';
import { GuardService } from './service/guard.service';
import { LogoutComponent } from './components/logout/logout.component';
import { TodoComponent } from './components/todo/todo.component';
import { AuthInterceptor } from './auth-interceptor';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'user/login', component: LoginComponent },
  { path: 'user/register', component: RegisterComponent},
  { path: 'profile', component: UserComponent, canActivate: [GuardService] },
  { path: 'todo', component: TodoComponent, canActivate: [GuardService] },
  { path: 'user/logout', component: LogoutComponent, canActivate: [GuardService]},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    LogoutComponent,
    TodoComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ 
    {provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi   : true},
      AuthService, 
      GuardService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
